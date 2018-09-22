const createHighlight = (word) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {noted: true});
    });
};

chrome.contextMenus.create({
 id: "highlight-selection",
 title: "Highlight Text",
 contexts:["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId == "highlight-selection") {
        createHighlight(info);
    }
});