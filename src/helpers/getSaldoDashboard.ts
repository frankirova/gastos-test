export const getSaldoDashboard = (accounts:any) => {
    let saldo = 0;
    for (const account of accounts) {
        saldo += Number(account.total);
    }
    return saldo;
};
