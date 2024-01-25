import { convertToARS } from "./convertToArs";

export const updateTotalAccount = async (updateAccount:any, accounts:any) => {
    try {
        for (const account of accounts) {
            const total = await convertToARS(account.currency, account.balance);
            // console.log(account.id)
            await updateAccount(total, account._id);
        }
    } catch (error) {
        console.error("Error en updateTotalAccount: ", error);
    }
};
