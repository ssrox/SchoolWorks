const endTime = new Date('2025-06-01T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endTime - now;
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  console.log(`剩余：${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`);

  if (distance < 0) {
    clearInterval(timer);
    console.log("活动已结束");
  }
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);