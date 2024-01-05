import { Accounts } from "../store/types/account.type";

export const filterById = (
    accounts: Accounts[],
    account_id: number
): Accounts[] => {
    console.log(accounts);
    console.log(account_id);
    const filtered = accounts.filter(
        (account: Accounts) => account._id === account_id
    );
    return filtered;
};
