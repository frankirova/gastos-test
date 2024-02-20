export async function convertToARS(
    currency: string,
    amount: any
): Promise<number | null> {
    try {
        // Obtener tasas de cambio desde el servidor
        const response = await fetch(`https://gastito-test.onrender.com/rate/${currency}`);

        if (!response.ok) {
            console.error(
                `Error al obtener tasas de cambio. Código de estado: ${response.status}`
            );
            return null;
        }

        // Convertir la respuesta a formato JSON
        const exchangeRates = await response.json();
        console.log(exchangeRates["data"]["ARS"]["value"]);
        // Verificar si la currency está en las tasas de cambio
        if (exchangeRates["data"]["ARS"].hasOwnProperty("value")) {
            // Calcular el valor en $ argentinos
            const arsValue = amount * exchangeRates["data"]["ARS"]["value"];
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
