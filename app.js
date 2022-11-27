const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".check-btn");
const resultMsg = document.querySelector(".result-msg");

checkButton.addEventListener("click", () => {
  const date = dateOfBirth.value;
  const luckyNum = luckyNumber.value;
  if (date && luckyNum) {
    const dateSum = sumOfDate(date);
    isBirthdayLucky(dateSum, luckyNum);
  } else {
    resultMsg.innerText = "Please fill both the fields";
  }
});

function isBirthdayLucky(dateSum, luckyNum) {
  if (dateSum % luckyNum === 0) {
    resultMsg.innerText = "Your Birthday is Lucky 🎂";
  } else {
    resultMsg.innerText = "Your Birthday is not Lucky 🙁";
  }
}

function sumOfDate(date) {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let i = 0; i < date.length; i++) {
    sum = sum + Number(date[i]);
  }
  return sum;
}
