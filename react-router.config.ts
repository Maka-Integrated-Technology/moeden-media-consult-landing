import type { Config } from "@react-router/dev/config";

export default {
  // No loaders/actions in this app (the contact form is a plain mailto: link).
  // `prerender` renders "/" to real static HTML (full content + meta tags) at
  // build time, so the deployed site needs no running server — SPA mode alone
  // would only emit an empty shell with no content for crawlers/no-JS clients.
  ssr: true,
  prerender: ["/"],
} satisfies Config;
