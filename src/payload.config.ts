import { Categories } from "./collections/Categories";
import { Articles } from "./collections/Articles";
import { Snippets } from "./collections/Snippets";
import { buildConfig } from "payload/config";
import { Users } from "./collections/Users";

import path from "path";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Snippets, Categories, Articles],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
