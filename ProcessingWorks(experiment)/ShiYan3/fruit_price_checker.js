const fruitPrices = { "苹果": 5.5, "香蕉": 3.8, "橙子": 6.2, "草莓": 12.5, "葡萄": 8.9 };
const fruitName = prompt("请输入水果名称：");
if (fruitName === null || fruitName.trim() === "") { alert("操作已取消"); } else {
  const trimmedFruit = fruitName.trim();
  if (fruitPrices.hasOwnProperty(trimmedFruit)) { alert(`${trimmedFruit}的价格是：${fruitPrices[trimmedFruit]}元/斤`); } else { alert("没有此水果"); }
}