let favNumber = 10;
let baseURL = "http://numbersapi.com";

// 1. Makes request to get facts from Numbers API.

$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2. Makes multiple requests to get facts from Numbers API to display multiple number facts.

let favNumbers = [10, 17, 9];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});

// 3. Get 4 facts of your favorite number and display on page.

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
