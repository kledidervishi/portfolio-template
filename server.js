import express from "express";
import fs from "fs";
import path from "path";
import { createServer } from "vite";
import { fileURLToPath } from "url";

async function initServer() {
  const app = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    let template = fs.readFileSync(
      path.resolve(__dirname, "index.html"),
      "utf-8"
    );

    template = await vite.transformIndexHtml(req.originalUrl, template);

    const render = (await vite.ssrLoadModule("/src/entry-server.js")).render;

    const { html: appHtml } = await render();

    const html = template.replace("<!--main-app-->", appHtml);

    res.set({ "Content-Type": "text/html" }).end(html);
  });

  return app;
}

const port = 5000;

initServer().then((app) =>
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  })
);
