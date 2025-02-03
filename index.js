import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const now =  dayjs();
const date = now.format('dddd, MMMM D');

setInterval(() => { renderDateAndTime() }, 1000)

function renderDateAndTime() {
  let html = '';
  
  html = `
    <small><span class="text-primary">Current Date & Time:</span> ${date} <span class="text-primary">${time()}</span></small>
  `;

  document.querySelector('.date-and-time').innerHTML = html;
};

function time() {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();

  let meridian = '';

  if(hour >= 12) {
    meridian = 'PM';
  } else {
    meridian = 'AM';
  }

  let hourStr;
  let minsStr;
  let secStr;

  if(hour < 10) {
    hourStr = `0${hour}`
  } else {
    hourStr = hour
  }

  if(minute < 10) {
    minsStr = `0${minute}`
  } else {
    minsStr = minute;
  }

  if(seconds < 10) {
    secStr = `0${seconds}`;
  } else {
    secStr =seconds
  }

  return `${hourStr}:${minsStr}:${secStr} ${meridian}`;
}
