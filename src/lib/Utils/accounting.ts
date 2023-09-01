import accounting from "accounting";
export function formatCurrency(value: any) {
    return accounting.formatMoney(value, {
        symbol: "VND",
        format: "%v %s",
        precision: 0,
        thousand: ",",
        decimal: ".",
        symbolOnLeft: false,
    });
}