import accounting from 'accounting';

function formatCurrency(value) {
  return accounting.formatMoney(value, {
    symbol: "₫",
    format: "%v %s",
    precision: 0,
    thousand: ",",
    decimal: ".",
    symbolOnLeft: false
  });
}

export { formatCurrency as f };
//# sourceMappingURL=accounting-d72f8257.js.map
