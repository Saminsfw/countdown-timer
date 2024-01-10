const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
const getRemainingTime = () => {
  const presentTime = new Date().getTime();
  const remainingTime = futureTime - presentTime;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(remainingTime / oneDay);
  let hours = Math.floor((remainingTime % oneDay) / oneHour);
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainingTime % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  const format = (item) => {
    if (item < 10) {
      return (item.innerHTML = `0${item}`);
    }
    return item;
  };
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry , this giveaway has expired</h4>`;
  }
};
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
