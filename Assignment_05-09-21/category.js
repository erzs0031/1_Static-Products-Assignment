//fetch data
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  data.forEach(showBrand);
}

function showBrand(brand) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;

  const topParent = document.querySelector("#allbrands");
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}