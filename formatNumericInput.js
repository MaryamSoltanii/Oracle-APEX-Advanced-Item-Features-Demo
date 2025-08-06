function formatNumericInput(event) {
    const input = event.target;

    let rawValue = input.value.replace(/[^0-9.]/g, '');

    const parts = rawValue.split('.');
    if (parts.length > 2) {
        rawValue = parts[0] + '.' + parts.slice(1).join('');
    }

    if (rawValue.trim() !== '' && !isNaN(rawValue)) {
        const [integerPart, decimalPart] = rawValue.split('.');
        const formattedInteger = new Intl.NumberFormat('en-US').format(Number(integerPart));
        input.value = decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    } else {
        input.value = '';
    }
}

