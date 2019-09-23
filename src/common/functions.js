export const formatMoney = (number, decimals) => {
    number += '';
    number = parseFloat(number.replace(/[^0-9.]/g, ''));

    decimals = decimals || 0;

    if (isNaN(number) || number === 0)
        return parseFloat(0).toFixed(decimals);

    number = '' + number.toFixed(decimals);

    var amount_parts = number.split('.'),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, (`$1,$2`));

    return `$${amount_parts.join('.')}`;
}