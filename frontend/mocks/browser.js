// frontend/mocks/browser.js
import { setupWorker, rest } from "msw";

export const worker = setupWorker(
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "Mock Post 1", body: "This is a mocked post" },
        { id: 2, title: "Mock Post 2", body: "This is another mocked post" },
      ])
    );
  })
);
