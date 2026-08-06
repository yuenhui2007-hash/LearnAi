/**
 * LearnAI Tutor — Cloudflare Worker Backend
 * Proxies AI requests to Gemini (free) or OpenAI (paid)
 * Keep this file secret — it contains no keys, only references env vars
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight from your GitHub Pages site
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

    // Only accept POST
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'POST only' }, 405);
    }

    // Parse body
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, 400);
    }

    const { messages, model = 'gpt-4o-mini' } = body;
    if (!messages || !Array.isArray(messages)) {
      return jsonResponse({ error: 'messages array required' }, 400);
    }

    // ===== OPENAI (paid, better quality) =====
    if (env.OPENAI_KEY) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.OPENAI_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: 0.7,
            max_tokens: 800,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          return jsonResponse({ error: data.error?.message || 'OpenAI error' }, res.status);
        }

        return jsonResponse({
          reply: data.choices[0].message.content,
          model: data.model,
          usage: data.usage,
        });
      } catch (err) {
        return jsonResponse({ error: err.message }, 502);
      }
    }

    // ===== GEMINI (free tier — 1,500 req/day) =====
    if (env.GEMINI_KEY) {
      try {
        // Gemini uses different message format
        const contents = messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          return jsonResponse(
            { error: data.error?.message || `Gemini HTTP ${res.status}` },
            res.status
          );
        }

        if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
          return jsonResponse({ error: 'Empty response from Gemini' }, 502);
        }

        return jsonResponse({
          reply: data.candidates[0].content.parts[0].text,
          model: 'gemini-1.5-flash',
        });
      } catch (err) {
        return jsonResponse({ error: err.message }, 502);
      }
    }

    // No key configured
    return jsonResponse(
      { error: 'No API key configured. Add GEMINI_KEY or OPENAI_KEY in Worker Settings → Variables.' },
      500
    );
  },
};

// Helper to return JSON with CORS headers
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
