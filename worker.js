/**
 * LearnAI Tutor — Cloudflare Worker Backend
 *
 * This Worker proxies AI requests from your static GitHub Pages site
 * to OpenAI/Gemini, keeping your API key secret.
 *
 * DEPLOYMENT:
 * 1. Sign up at cloudflare.com
 * 2. Go to Workers & Pages → Create Worker
 * 3. Paste this entire file into the editor
 * 4. Go to Settings → Variables → Add "OPENAI_KEY" with your API key
 * 5. Save & Deploy
 * 6. Copy your Worker URL (e.g., https://learnai-tutor.yourname.workers.dev)
 * 7. Add that URL to your tutor.js as API_URL
 */

export default {
  async fetch(request, env, ctx) {
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
      return new Response(JSON.stringify({ error: 'POST only' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { messages, model = 'gpt-4o-mini' } = body;
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'messages array required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // === OPENAI ===
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
          return new Response(JSON.stringify({ error: data.error?.message || 'OpenAI error' }), {
            status: res.status,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        return new Response(JSON.stringify({
          reply: data.choices[0].message.content,
          model: data.model,
          usage: data.usage,
        }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 502,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    // === GEMINI (free tier fallback) ===
    if (env.GEMINI_KEY) {
      try {
        const geminiMessages = messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : m.role,
          parts: [{ text: m.content }],
        }));

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: geminiMessages }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          return new Response(JSON.stringify({ error: data.error?.message || 'Gemini error' }), {
            status: res.status,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        return new Response(JSON.stringify({
          reply: data.candidates[0].content.parts[0].text,
          model: 'gemini-1.5-flash',
        }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 502,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    return new Response(JSON.stringify({ error: 'No API key configured. Set OPENAI_KEY or GEMINI_KEY in Worker variables.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
