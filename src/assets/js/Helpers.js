/* Helpers.js */

export function setDocumentTitle(getString) {
  if (!getString) getString = process.env.REACT_APP_DOC_TITLE;
  document.title = getString;
}

export function apiGetItemDetails(getItemSlug) {
  return `${process.env.REACT_APP_API_ENDPOINT}item/${getItemSlug}`;
}
