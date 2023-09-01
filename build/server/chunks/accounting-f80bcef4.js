import accounting from 'accounting';

function formatCurrency(value) {
  return accounting.formatMoney(value, {
    symbol: "VND",
    format: "%v %s",
    precision: 0,
    thousand: ",",
    decimal: ".",
    symbolOnLeft: false
  });
}

export { formatCurrency as f };
//# sourceMappingURL=accounting-f80bcef4.js.map
