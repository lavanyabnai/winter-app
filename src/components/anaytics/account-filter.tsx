"use client";

import qs from "query-string";
import { 
  useRouter,
  usePathname,
  useSearchParams
} from "next/navigation";

// import { useGetSummary } from "@/features/summary/api/use-get-summary";

import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from "@/components/ui/select";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export const AccountFilter = () => {
  const router = useRouter();
  console.log(router, "UI-router");
  const pathname = usePathname();
  console.log(pathname, "UI-pathname");
  const params = useSearchParams();
  console.log(params, "UI-params");
  const accountId = params.get("accountId") || "all";
  console.log(accountId, "UI-accountId");
  const from = params.get("from") || "";
  console.log(from, "UI-from");
  const to = params.get("to") || "";
  console.log(to, "UI-to");
  const workspaceId = useWorkspaceId();
  console.log(workspaceId, "UI-workspaceId");
  // const {
  //   isLoading: isLoadingSummary,
  // } = useGetSummary();
  const { 
    data: accounts,
  } = useGetAccounts({ workspaceId });
  console.log(accounts, "data-accounts-UI");

  const onChange = (newValue: string) => {
    const query = {
      accountId: newValue,
      from,
      to,
    };

    if (newValue === "all") {
      query.accountId = "";
    }

    const url = qs.stringifyUrl({
      url: pathname,
      query,
    }, { skipNull: true, skipEmptyString: true });

    router.push(url);
  };

  return (
    <Select
      value={accountId}
      onValueChange={onChange}
      // disabled={isLoadingAccounts}
      // disabled={isLoadingAccounts || isLoadingSummary}
    >
      <SelectTrigger
        className="lg:w-auto w-full h-9 rounded-md px-3 font-normal bg-blue-600 hover:bg-blue-700 border focus:ring-offset-0 focus:ring-transparent outline-none text-white focus:bg-blue-500 transition"
      >
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">
          All accounts
        </SelectItem>
        {accounts?.documents?.map((account: { id: string; name: string }) => (
          <SelectItem key={account.id} value={account.id}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
