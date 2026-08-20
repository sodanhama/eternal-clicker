let balance = document.querySelector('.balance');
let parsedBalance = parseFloat(balance.innerHTML);

gpcText = document.querySelector('#gpc-text');
gpsText = document.querySelector('#gps-text');

let clickerLevel = document.querySelector('.clicker-level');
let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerIncrease = document.querySelector('.clicker-increase');
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let autoMinerLevel = document.querySelector('.auto-miner-level');
let autoMinerCost = document.querySelector('.auto-miner-cost');
let parsedAutoMinerCost = parseFloat(autoMinerCost.innerHTML);
let autoMinerIncrease = document.querySelector('.auto-miner-increase');
let parsedAutoMinerIncrease = parseFloat(autoMinerIncrease.innerHTML);

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

function buyAutoMiner() {
    if (parsedBalance >= parsedAutoMinerCost) {
        balance.innerHTML = Math.round(parsedBalance -=  parsedAutoMinerCost);

        autoMinerLevel.innerHTML++;

        parsedAutoMinerIncrease = parseFloat((parsedAutoMinerIncrease * 1.03).toFixed(2));
        autoMinerIncrease.innerHTML = parsedAutoMinerIncrease

        gps += parsedAutoMinerIncrease;

        parsedAutoMinerCost *= 1.18;
        autoMinerCost.innerHTML = Math.round(parsedAutoMinerCost)
    }
}

setInterval(() => {
    parsedBalance += gps/10;
    balance.innerHTML = Math.round(parsedBalance);
    gpcText.innerHTML = Math.round(gpc);
    gpsText.innerHTML = Math.round(gps);
}, 100)