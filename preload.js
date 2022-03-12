// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import {getPerformanceStats} from "performance.mjs";

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

if (window.title === "Performance") {
  let stats = getPerformanceStats();
  for (let key in stats) {
    let newElement = document.creatElement("div");
    newElement.innerHTML = `<h2>${key}</h2><p>${stats[key]}</p>`;
    document.body.appendChild(newElement);
  }
}
