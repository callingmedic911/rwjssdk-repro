import { defineApp } from "@redwoodjs/sdk/worker";
import { index, render, route } from "@redwoodjs/sdk/router";

import { Document } from "@/Document";
import { Home } from "@/pages/Home";
import { setCommonHeaders } from "@/headers";
import Another from "@/pages/Another";

export type AppContext = {};

export default defineApp(
  [
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
      ctx;
    },
    render(Document, [index([Home])]),
    render(Document, [route("/another", [Another])]),
  ]
);
