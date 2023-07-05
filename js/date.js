
// code is in the input tag in the contact section
const checkInInput = document.getElementById('CheckIn-input');
const checkOutInput = document.getElementById('CheckOut-input');

// ✅ Using the visitor's timezone
checkInInput.value = checkInDate();
checkOutInput.value = checkOutDate();

console.log(checkInDate());
console.log(checkOutDate());

function newX(num) {
  return num.toString().padStart(2, '0');
}

function checkInDate(date = new Date()) {
  return [
    date.getFullYear(),
    newX(date.getMonth() + 1),
    newX(date.getDate() + 2),
  ].join('-');
}

function checkOutDate(date = new Date()) {
  return [
    date.getFullYear(),
    newX(date.getMonth() + 1),
    newX(date.getDate() + 4),
  ].join('-');
}

/* 
Code made by Robert Bamba 
https://github.com/Dreigannadoit
*/