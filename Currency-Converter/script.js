document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const convertedAmountInput = document.getElementById('converted-amount');
    const resultDiv = document.querySelector('.result');

    const apiKey = 'YOUR_API_KEY'; // Replace with your API key if required
    const apiURL = 'https://api.exchangerate-api.com/v4/latest/';

    async function fetchExchangeRate(from, to) {
        try {
            const response = await fetch(`${apiURL}${from}`);
            const data = await response.json();
            return data.rates[to];
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
            return null;
        }
    }

    async function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Please enter a valid amount';
            return;
        }

        const exchangeRate = await fetchExchangeRate(from, to);
        if (exchangeRate === null) {
            resultDiv.textContent = 'Error fetching exchange rate';
            return;
        }

        const convertedAmount = (amount * exchangeRate).toFixed(2);
        convertedAmountInput.value = convertedAmount;
        resultDiv.textContent = `1 ${from} = ${exchangeRate} ${to}`;
    }

    amountInput.addEventListener('input', convertCurrency);
    fromCurrency.addEventListener('change', convertCurrency);
    toCurrency.addEventListener('change', convertCurrency);

    // Initial conversion on page load
    convertCurrency();
});




