export async function convertToARS(
    currency: string,
    amount: any
): Promise<number | null> {
    try {
        // Obtener tasas de cambio desde el servidor
        const response = await fetch(`https://gastito-test.onrender.com/dolar`);
        // Convertir la respuesta a formato JSON
        const exchangeRates = await response.json(); // Verificar si la currency está en las tasas de cambio
        console.log(exchangeRates);
        if (exchangeRates) {
            // Calcular el valor en $ argentinos
            const dolar_price = exchangeRates.replace("$", "");
            const dolar_price_parsed = parseFloat(dolar_price);
            console.log({ dolarPrice: dolar_price_parsed });

            const arsValue = amount * dolar_price_parsed;
            return arsValue;
        } else {
            console.error("Currency no soportada:", currency);
            console.error("Currency no soportada:", amount);
            return null;
        }
    } catch (error) {
        console.error("Error al obtener tasas de cambio:", error);
        return null;
    }
}
