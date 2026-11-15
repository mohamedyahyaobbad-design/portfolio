// Connexion à l'administration (Decap CMS) : redirige vers GitHub pour l'autorisation.
// Variables Cloudflare Pages requises : GITHUB_CLIENT_ID et GITHUB_CLIENT_SECRET (secret).
export async function onRequestGet({ request, env }) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response('GITHUB_CLIENT_ID manquant dans les variables Cloudflare Pages.', { status: 500 });
  }
  const url = new URL(request.url);
  const state = crypto.randomUUID();
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    redirect_uri: `${url.origin}/api/callback`,
    scope: 'repo,user',
    state,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params}`,
      'Set-Cookie': `oauth_state=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
      'Cache-Control': 'no-store',
    },
  });
}
