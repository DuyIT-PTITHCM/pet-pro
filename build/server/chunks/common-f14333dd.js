const convertImageJsonToArray = function(json) {
  if (json) {
    return JSON.parse(json);
  }
  return [];
};
function formatDate(inputDate) {
  const newDate = new Date(inputDate);
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
}
async function getHeading(menus, isNumber = false) {
  return menus;
}

export { convertImageJsonToArray as c, formatDate as f, getHeading as g };
//# sourceMappingURL=common-f14333dd.js.map
