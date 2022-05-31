import Command from "../libs/interfaces/command";
import "../../routes/api";
import { ApiRoutes } from "../libs/router";
import fs from "fs";
import path from "path";
import { marked } from "marked";

const genDocs: Command = {
  excecute() {
    const docs: string[] = [];
    docs.push("# Routes");
    for (let i = 0; i < ApiRoutes.length; i++) {
      const route = ApiRoutes[i];
      docs.push(`
## ${route.description}

> **Path:** ${route.routePath}

**Method:** ${route.method.toUpperCase()}

**Access Token Required:** ${route.authenticate}

      `);
    }
    const combined = docs.join("\r\n");
    const file = path.join(path.resolve(), "public/index.html");
    const mdFile = path.join(path.resolve(), "public/docs.md");
    fs.writeFileSync(mdFile, combined);
    marked.parse(combined, (err, res) => {
      if (err) return;
      fs.writeFileSync(
        file,
        `
<!DOCTYPE html>
<html>
  <head>
    <title>User Services Docs</title>
    <link rel="stylesheet" href="/md.css" />
  </head>
  <body>${res}</body>
</html>
`
      );
      console.log("Complete");
    });
  },
};

export default genDocs;
