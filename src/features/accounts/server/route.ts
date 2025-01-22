import { z } from "zod";
import { Hono } from "hono";
import { Query } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";

import { getMember } from "@/features/members/utils";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID,  ACCOUNTS_ID } from "@/config";

import { Account } from "../types";
// import { createAccountSchema } from "../schemas";
const app = new Hono()

   .get(
    "/",
    sessionMiddleware,
    zValidator("query", z.object({ workspaceId: z.string() })),
     async (c) => {
      const user = c.get("user");
      const databases = c.get("databases");

      const { workspaceId } = c.req.valid("query");
       console.log(workspaceId, "workspaceId");
       
      if (!workspaceId) {
        return c.json({ error: "Missing workspaceId" }, 400);
      }

      const member = await getMember({
        databases,
        workspaceId,
        userId: user.$id,
      });
      console.log(member, "member");
      if (!member) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      console.log(DATABASE_ID, "DATABASE_ID");
      console.log(ACCOUNTS_ID, "ACCOUNTS_ID");
      const accounts = await databases.listDocuments<Account>(
        DATABASE_ID,
        ACCOUNTS_ID,
        [
          Query.equal("workspaceId", workspaceId),
          Query.orderDesc("$createdAt"),
        ],
      );
     console.log(accounts.documents, "Server-Accounts-Route.ts");
      return c.json({ data: accounts  });
    }
  )
  


export default app;
