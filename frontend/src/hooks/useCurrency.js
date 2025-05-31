
import React,{ useState, useEffect } from "react";

function useCurrency(currency) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((response) => {
                setData(response[currency])
                console.log("Currency data fetched:", data);
            }
            )
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });

    }, [currency, setData])
    // const [currency, setCurrency] = useState(0);
    // const [fromCurrency, setFromCurrency] = useState("USD");
    // const [toCurrency, setToCurrency] = useState("EUR");
    // const [exchangeRate, setExchangeRate] = useState(1);
    
    // useEffect(() => {
    //     // Fetch exchange rate from an API
    //     const fetchExchangeRate = async () => {
    //     try {
    //         const response = await fetch(
    //         `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    //         );
    //         const data = await response.json();
    //         setExchangeRate(data.rates[toCurrency]);
    //     } catch (error) {
    //         console.error("Error fetching exchange rate:", error);
    //     }
    //     };
    
    //     fetchExchangeRate();
    // }, [fromCurrency, toCurrency]);
    
    // return { currency, setCurrency, fromCurrency, setFromCurrency, toCurrency, setToCurrency, exchangeRate };
}

export default useCurrency;