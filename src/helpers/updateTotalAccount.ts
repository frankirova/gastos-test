import { convertToARS } from "./convertToArs";
import { useAccount } from "../store/account.store";
export const updateTotalAccount = async (accounts: any) => {
    const { updateAccount }: any = useAccount();
    for (const account of accounts) {
        const total = await convertToARS(account.currency, account.balance);
        await updateAccount(total, account.id);
    }
};
