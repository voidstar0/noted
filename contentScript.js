const highlighterColors = ["#E85099", "#70BC62", "#43A9D9", "#F7A13E", "#EFE93D"];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.noted && window.getSelection().anchorNode.parentNode && window.getSelection().anchorNode.parentNode.className != "highlighted") { 
        const selected = window.getSelection().toString();
        let editedContent = window.getSelection().anchorNode.parentNode.innerHTML;
        editedContent = editedContent.replace(selected, `<span class="highlighted" style="background-color: ${randomColor}; padding: 5px;">${selected}</span>`)
        const randomColor = highlighterColors[Math.floor(Math.random() * highlighterColors.length)];
        window.getSelection().anchorNode.parentNode.innerHTML = editedContent;
    }
});