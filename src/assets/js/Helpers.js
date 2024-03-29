/* Helpers.js */

export function setDocumentTitle(getString) {
  // console.log('XXX setDocumentTitle');
  // if (!getString) getString = process.env.REACT_APP_DOC_TITLE;
  // document.title = getString;
}

export function setMetaTagImageCard(getSrc) {
  // console.log('setMetaTagImageCard: ', getSrc);

  // <meta property="og:image" content="https://classicandsportscar.ltd.uk/logo192.png" />
  document.querySelectorAll('meta[property=og\\:image]')[0].setAttribute('content', getSrc);
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
  if (getApiArr.preview) apiUrl += `&preview=true`;
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
  if (resultArray.length >= 25) {
    // IF more than ## words...
    resultArray = resultArray.slice(0, 20); // SHOW first ## words
    result = resultArray.join(" ") + "...";
  }
  return result;
}

export function setMetaDesc(getString) {
  // STRIP html tags
  var regex = /(<([^>]+)>)/gi;
  if (!getString) return "";
  var result = getString.replace(regex, "");
  var sentence = result.split('. ', 1)[0];
  if(sentence[sentence.length-1] === "."){
    return sentence;
  }
  return sentence + ".";
}

export function ConsoleLog(msg) {
  // console.log("[CLG] ", msg);
}

export function GetMailPath() {
  // return "https://classicandsportscar.ltd.uk/2020/api/mail/index.php";
  return `${process.env.REACT_APP_API_DIR}mail/index.php`;
  // return `https://amactive.net/csc2020-api/mail/index.php`;
}

export function StripOpeningSlash(str){
  // console.log('StripOpeningSlash: str = ', str);
  if(str) return str.substring(1);
  return str;
}
