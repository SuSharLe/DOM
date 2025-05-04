//digital clock test -_-

function getTime() {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let mins = String(date.getMinutes()).padStart(2, "0");
  let sec = String(date.getSeconds()).padStart(2, "0");

  let time = `${hours}:${mins}:${sec}`;
  console.log(time);
}
setInterval(getTime, 1000);
//1000 means miliseconds
//ctrl + c to stop
