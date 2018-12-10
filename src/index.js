const hilighter = (key, text) => {
  var reg = new RegExp(key, "gi");
  if (reg.test(text)) {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(
      text.replace(reg, `<mark style="padding: 2px">${key}</mark>`),
      "text/html"
    );
    return parsedHTML.getElementsByTagName("body")[0].innerHTML;
  }
  return text;
};

export default hilighter;
