import { Models } from "node-appwrite";

export type Account = Models.Document & {
  id: string;
  plaid_id: string;
  name: string;
  user_id: string;
};
