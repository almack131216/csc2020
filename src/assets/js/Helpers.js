/* Helpers.js */

export function setDocumentTitle(getString) {
  if (!getString) getString = process.env.REACT_APP_DOC_TITLE;
  document.title = getString;
}

export function apiGetItems(getApiArr) {
  ConsoleLog("[Helpers] apiGetItems() > getApiArr: " + getApiArr);
  let apiUrl = getApiArr.base;
  if (getApiArr.brandId) apiUrl += `&brandId=${getApiArr.brandId}`;
  if (getApiArr.brandName) apiUrl += `&brandName=${getApiArr.brandName}`;
  ConsoleLog("[Helpers] apiGetItems() > apiUrl: " + apiUrl);
  return apiUrl;
  // return "../../api-dummy/dummy-item-details.json";
  // return `${process.env.REACT_APP_API_ENDPOINT}item/${getItemSlug}`;
}

export function apiGetItemDetails(getApiArr) {
  // ConsoleLog("[Helpers] apiGetItemDetails() > getApiArr: " + getApiArr);
  let apiUrl = `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=${getApiArr.categoryName}`;
  if (getApiArr.itemId) apiUrl += `&id=${getApiArr.itemId}`;
  if (getApiArr.itemIds) apiUrl += `&ids=${getApiArr.itemIds}`;
  ConsoleLog("[Helpers] apiGetItemDetails() > apiUrl: " + apiUrl);
  return apiUrl;
  // return "../../api-dummy/dummy-item-details.json";
  // return `${process.env.REACT_APP_API_ENDPOINT}item/${getItemSlug}`;
}

export function getDateToday() {
  // REF: https://codehandbook.org/javascript-date-format/
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

  return today_formatted;
}

export function getExcerpt(sentence) {
  // STRIP html tags
  var regex = /(<([^>]+)>)/gi;
  if (!sentence) return "";
  var result = sentence.replace(regex, "");
  // SPLIT into words so we can count them
  var resultArray = result.split(" ");
  if (resultArray.length >= 30) {
    // IF more than ## words...
    resultArray = resultArray.slice(0, 20); // SHOW first ## words
    result = resultArray.join(" ") + "...";
  }
  return result;
}

export function ConsoleLog(msg) {
  // console.log("[CLG] ", msg);
}

export function GetMailPath() {
  // return "https://www.classicandsportscar.ltd.uk/2020/api/mail/index.php";
  return `${process.env.REACT_APP_API_DIR}mail/index.php`;
  // return `https://www.amactive.net/csc2020-api/mail/index.php`;
}

