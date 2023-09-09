const shareDiv = document.createElement("div");
const cantidad = document.createElement("span");
const shares = document.createElement("span");

const text = document.createTextNode("1k");
const text2 = document.createTextNode("Shares");

cantidad.appendChild(text);
shares.appendChild(text2);

shareDiv.appendChild(cantidad);
shareDiv.appendChild(shares);

const stat = document.querySelector(".stat");
stat.appendChild(shareDiv);
/*react libreria*/
