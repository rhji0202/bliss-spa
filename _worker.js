export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.endsWith("/")) {
      url.pathname += "index.html";
    }
    return env.ASSETS.fetch(request);
  },
};
