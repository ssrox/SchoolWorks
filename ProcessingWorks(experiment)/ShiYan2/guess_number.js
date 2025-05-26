const randomNum = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("请输入1-10之间的数字："));

if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
  alert("请输入有效数字！");
} else if (userGuess > randomNum) {
  alert("你猜大了");
} else if (userGuess < randomNum) {
  alert("你猜小了");
} else {
  alert("恭喜你，猜对了");
}