import { z } from "zod";

export const createAccountSchema = z.object({
  id: z.string().trim().min(1, "Required"),
  plaid_id: z.string().trim().min(1),
  name: z.string().trim().min(1, "Required"),
  user_id: z.string().trim().min(1, "Required"),
});
