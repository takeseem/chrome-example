var min = 1, max = 5, current = 1;

function updateIcon() {
  current++;
  if (current > max) current = min;
  chrome.browserAction.setIcon({
    path: "set-icon-path/icon" + current + ".png"
  });
}

chrome.browserAction.onClicked.addListener(updateIcon);
