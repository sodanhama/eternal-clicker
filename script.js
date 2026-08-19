let balance = document.querySelector('.balance');
let clickerCost = document.querySelector('.clicker-cost');

let clickerLevel = document.querySelector('.clicker-level');
let clickerIncrease = document.querySelector('.clicker-increase');

let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let parsedClickerLevel = parseFloat(clickerLevel.innerHTML);
let parsedBalance = parseFloat(balance.innerHTML);
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let gpc = 1;

function incrementBalance() {
    balance.innerHTML = Math.round(parsedBalance += gpc);
}

function buyClicker() {
    if (parsedBalance >= parsedClickerCost) {
        balance.innerHTML = Math.round(parsedBalance -= parsedClickerCost);

        clickerLevel.innerHTML++;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
        clickerIncrease.innerHTML = parsedClickerIncrease

        gpc += parsedClickerIncrease;

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}