function getPageData() {
  return {
    url: window.location.href,
    text: document.body.innerText.slice(0, 3000)
  };
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "scan") {
    sendResponse(getPageData());
  }
});
