# lovethelord

This repo no longer holds an app. It exists purely to redirect the domain [lovethelord.uk](https://lovethelord.uk) (permanently, 308) to [lovinggod.uk](https://lovinggod.uk) — see the [LovingGod](https://github.com/magicobject/LovingGod) repo for the real, actively-maintained site.

## Background

`lovethelord.uk` used to host a React/Vite single-page app version of the same book. That app had SEO and mobile issues, so the book was rebuilt from scratch as a static site at `lovinggod.uk`. Rather than let `lovethelord.uk`'s existing search ranking and backlinks go to waste, the domain now permanently redirects there instead of being left to rot or torn down.

## How the redirect works

[vercel.json](vercel.json) does the whole job — no app code, no build step:

```json
{
  "redirects": [
    { "source": "/", "destination": "https://lovinggod.uk", "permanent": true },
    { "source": "/:path*", "destination": "https://lovinggod.uk/:path*", "permanent": true }
  ]
}
```

Both rules are needed. `/:path*` alone doesn't match the bare root — Vercel's routing gives the root path special handling, so without the explicit `/` rule the homepage keeps serving whatever's in the project (or falls through to a 404) while every other path redirects correctly. This bit twice before the `/` rule was added: once when the project still had a built `index.html` for Vercel's filesystem routing to prefer over the redirect, and it would bite again if this repo ever grew a build step for any reason.

Every path gets a `308 Permanent Redirect`, so search engines eventually transfer ranking/backlink value to the new domain.

## Deployment

Push to `main` — Vercel deploys automatically. There's nothing to build; `vercel.json` is read directly.
