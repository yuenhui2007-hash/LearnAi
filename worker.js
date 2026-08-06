/**
 * LearnAI Tutor — Cloudflare Worker Backend
 * Uses Pollinations AI (free, no API key) as primary
 * Falls back to Gemini/OpenAI if user provides keys
 */

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'POST only' }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON' }, 400);
    }

    const { messages, model = 'openai' } = body;
    if (!messages || !Array.isArray(messages)) {
      return jsonResponse({ error: 'messages array required' }, 400);
    }

    // ===== PRIMARY: Pollinations AI (free, no key) =====
    try {
      const res = await fetch('https://text.pollinations.ai/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.7,
          max_tokens: 800,
        }),
      });

      const data = await res.json();

      if (res.ok && data.choices?.[0]?.message?.content) {
        return jsonResponse({
          reply: data.choices[0].message.content,
          model: data.model || 'pollinations-openai',
        });
      }
      // If Pollinations fails, continue to fallbacks
    } catch (err) {
      console.log('Pollinations failed:', err.message);
    }

    // ===== FALLBACK 1: Gemini (if user has key) =====
    if (env.GEMINI_KEY) {
      try {
        const contents = messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=***}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents }),
          }
        );

        const data = await res.json();
        if (res.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return jsonResponse({
            reply: data.candidates[0].content.parts[0].text,
            model: 'gemini-1.5-flash',
          });
        }
      } catch (err) {
        console.log('Gemini failed:', err.message);
      }
    }

    // ===== FALLBACK 2: OpenAI (if user has key) =====
    if (env.OPENAI_KEY) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.OPENAI_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages,
            temperature: 0.7,
            max_tokens: 800,
          }),
        });

        const data = await res.json();
        if (res.ok && data.choices?.[0]?.message?.content) {
          return jsonResponse({
            reply: data.choices[0].message.content,
            model: data.model,
          });
        }
      } catch (err) {
        console.log('OpenAI failed:', err.message);
      }
    }

    // All options exhausted
    return jsonResponse(
      { error: 'All AI services unavailable. Please try again later.' },
      503
    );
  },
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
