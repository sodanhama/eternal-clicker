let balance = document.querySelector('.balance');
let parsedBalance = parseFloat(balance.innerHTML);

let clickerLevel = document.querySelector('.clicker-level');
let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerIncrease = document.querySelector('.clicker-increase');
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let rocketLevel = document.querySelector('.rocket-level');
let rocketCost = document.querySelector('.rocket-cost');
let parsedRocketCost = parseFloat(rocketCost.innerHTML);
let rocketIncrease = document.querySelector('.rocket-increase');
let parsedRocketIncrease = parseFloat(rocketIncrease.innerHTML);

let gpc = 1;
let gps = 0;

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

function buyRocket() {
    if (parsedBalance >= parsedRocketCost) {
        balance.innerHTML = Math.round(parsedBalance -=  parsedRocketCost);

        rocketLevel.innerHTML++;

        parsedRocketIncrease = parseFloat((parsedRocketIncrease * 1.03).toFixed(2));
        rocketIncrease.innerHTML = parsedRocketIncrease

        gpc += parsedRocketIncrease;

        parsedRocketCost *= 1.18;
        rocketCost.innerHTML = Math.round(parsedRocketCost)
    }
}