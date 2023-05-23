// 倒计时
export function countdown(targetDate) {
  var timer = setInterval(function () {
    var now = new Date().getTime();
    var distance = targetDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =
      days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "倒计时结束";
    }
  }, 1000);
}