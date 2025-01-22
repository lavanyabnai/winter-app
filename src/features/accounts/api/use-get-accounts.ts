import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";


interface UseGetAccountsProps {
  workspaceId: string;
};


export const useGetAccounts = ({
  workspaceId,
}: UseGetAccountsProps) => {

  const query = useQuery({
    queryKey: ["accounts", workspaceId],
    queryFn: async () => {
      const response = await client.api.accounts.$get({
        query: {
          workspaceId
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }

      const { data } = await response.json();
      console.log(data, "api/use-get-accounts.ts");
      return data;
    },
  });

  return query;
};
