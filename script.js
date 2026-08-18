let balance = document.querySelector('.balance');
let clickerCost = document.querySelector('.clicker-cost');

let parsedBalance = parseFloat(balance.innerHTML);
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

function incrementBalance() {
    parsedBalance += 1;
    balance.innerHTML = parsedBalance;
}

function buyClicker() {
    if (parsedBalance >= parsedClickerCost) {
        parsedBalance -= parsedClickerCost;
        balance.innerHTML = parsedBalance;
    }
}