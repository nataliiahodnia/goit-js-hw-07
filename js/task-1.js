
const categoriesItems = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesItems.length);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
