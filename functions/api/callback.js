// Retour de GitHub : échange le code contre un jeton et le transmet à l'administration (Decap CMS).
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const saved = /(?:^|;\s*)oauth_state=([^;]+)/.exec(request.headers.get('Cookie') || '')?.[1];

  let status = 'error';
  let content = { error: 'Connexion refusée ou expirée. Réessayez.' };

  if (code && state && saved && state === saved) {
    try {
      const res = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'User-Agent': 'portfolio-decap-oauth' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
          redirect_uri: `${url.origin}/api/callback`,
        }),
      });
      const data = await res.json();
      if (data.access_token) {
        status = 'success';
        content = { token: data.access_token, provider: 'github' };
      } else {
        content = { error: data.error_description || data.error || 'Erreur GitHub' };
      }
    } catch {
      content = { error: 'Impossible de joindre GitHub.' };
    }
  }

  const origin = JSON.stringify(url.origin);
  const message = JSON.stringify(`authorization:github:${status}:${JSON.stringify(content)}`);
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Connexion…</title></head><body>
<p>Connexion en cours…</p>
<script>
(function () {
  function receive(e) {
    if (e.origin !== ${origin}) return;
    window.opener.postMessage(${message}, e.origin);
    window.removeEventListener('message', receive, false);
  }
  window.addEventListener('message', receive, false);
  window.opener && window.opener.postMessage('authorizing:github', ${origin});
})();
</script></body></html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Set-Cookie': 'oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
    },
  });
}
