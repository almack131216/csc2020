/* Helpers.js */

export function setDocumentTitle(getString) {
  if (!getString) getString = process.env.REACT_APP_DOC_TITLE;
  document.title = getString;
}

export function apiGetItemDetails(getItemSlug) {
  return `${process.env.REACT_APP_API_ENDPOINT}item/${getItemSlug}`;
}

export function itemDateIsToday(someDate) {
  const appendLeadingZeroes = n => {
    if (n <= 9) {
      return "0" + n;
    }
    return n;
  };

  let today = new Date();
  let today_formatted =
    today.getFullYear() +
    "-" +
    appendLeadingZeroes(today.getMonth() + 1) +
    "-" +
    appendLeadingZeroes(today.getDate());

  // const someDate = new Date(someDate);
  // console.log("xxxxxxxxxxxxxxxx", today);
  // console.log("YYYYYYYYYYYYYYYY", someDate);
  // console.log("ZZZZZZZZZZZZZZZZZ", today_formatted);

  if (someDate === today_formatted) return true;
  return false;
}
