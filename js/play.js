let audio;
function playAudio() {
    audio = document.createElement("audio");
    audio.src = "./與山田.mp3";
    times = second[0]-5250;
    timer = setInterval(function(){
        if(times == second[i]-5250) start();
        times += 25;
        Miss();
    }, 25);
    setTimeout(function(){
        audio.play();
    }, -second[0]+5250);
    
}
let timer;
// const second = [500, 2300, 3900, 5600, 6000, 7700, 8700, 10500, 11400, 12300, 13600, 14300, 15400, 17200, 18100, 18800, 20000, 20300, 20800, 21900, 23800, 24000, 25300, 26000, 27100, 27900, 28700, 30400, 32100, 33700, 37000, 37800, 38500, 39100, 39200, 40300, 41200, 41750, 42500, 42600, 43600, 44300, 45300, 46100, 47000, 47800, 48500, 49200, 50200, 51100, 51700, 52600, 53600, 54400, 55100, 55700, 57000, 57700, 58600, 59500, 60000, 61800, 63500, 64300, 65000, 65700, 65800, 66100, 66800, 67600, 68300, 69000, 70200, 70500, 70900, 71100, 71400, 71800, 72300, 72600, 73100, 73500, 73900, 74800, 75500, 75700, 76800, 77200, 77600, 78200, 79000, 80000, 81100, 82400, 83400, 84200, 85000, 86600, 87200, 88100];
// const second = [450, 2325, 3975, 5600, 6000, 7650, 8650, 10500, 11375, 12250, 13625, 14200, 15350, 17175, 18025, 18850, 19900, 20225, 20850, 21925, 23700, 23975, 25225, 26025, 27075, 27950, 28675, 30325, 32050, 33575, 37000, 37850, 38475, 39050, 39250, 40325, 41175, 41800, 42450, 42625, 43600, 44400, 45325, 46150, 46975, 47800, 48450, 49225, 50200, 51100, 51725, 52575, 53525, 54425, 55075, 55825, 56925, 57725, 58525, 59325, 60000, 61725, 63550, 64325, 65000, 65625, 65850, 66225, 66850, 67700, 68275, 69025, 70100, 70525, 70900, 71350, 71725, 72175, 72550, 72950, 73425, 73800, 74250,74850, 75500, 75750, 76750, 77250, 77700, 78275, 79100, 80050, 81125, 82375, 83375, 84175, 84975, 86575, 87250, 88125];
// const second = [450, 2325, 3050, 3625, 4100, 4750, 5700, 5900, 6125, 6350, 7750, 8875, 10675, 11525, 12350, 13325, 13825, 14425, 15400, 17200, 18100, 18950, 19400, 19825, 20000, 20475, 21025, 22025, 22625, 22850, 23825, 24125, 24325, 24525, 24775, 24975, 25150, 25425, 26050, 26225, 27150, 28000, 28575, 29400, 30450, 31325, 31950, 32200, 32950, 33725, 37075, 37500, 37925, 38325, 38550, 39175, 39375, 40375, 40850, 41250, 41675, 41875, 42325, 42600, 42800, 43225, 43400, 43600, 43850, 44250, 44625, 45050, 45425, 45875, 46325, 46725, 47100, 47525, 47900, 48100, 48550, 48975, 49200, 49400, 49825, 50050, 50475, 50875, 51275, 51600, 51825, 52275, 52475, 52725, 53150, 53675, 54050, 54475, 55075, 55550, 
// 55725,
// 55975,
// 56375,
// 56925,
// 57325,
// 57775,
// 58175,
// 58600,
// 59175,
// 59425,
// 59875,
// 60100,
// 61000,
// 61650,
// 62975,
// 63200,
// 63375,
// 63625,
// 64000,
// 64400,           
// 64800,            
// 65000,
// 65425,
// 65650,
// 65875,
// 66350,
// 66850,
// 67300,
// 67700,
// 68150,
// 68425,
// 68825,
// 69025,
// 69200,
// 69625,
// 69800,
// 70000,
// 70225,
// 70625,
// 71025,
// 71400,
// 71800,
// 72200,
// 72600,
// 73025,
// 73475,
// 73900,
// 74275,
// 74675,
// 74900,
// 75325,
// 75525,
// 75775,
// 76150,
// 76800,
// 77225,
// 77625,
// 77975,
// 78150,
// 78375,
// 78775,
// 79150,
// 79575,
// 80050,
// 80450,
// 80875,
// 81050,
// 81275,
// 81500,
// 81875,
// 82125,
// 82350,
// 83200,
// 83400,
// 83800,
// 84200,
// 84625,
// 85000,
// 85675,
// 85875, 
// 86075,
// 86500,
// 87275,
// 87700,
// 87950,
// 88175]
const second = [500, 2175, 2850, 3425, 3925, 4600, 5550, 5775, 5975, 6200, 7575, 8700, 9850, 10125, 10525, 11300, 12225, 12625, 12850, 13300, 13750, 14275, 14675, 15300, 15775, 16175, 16675, 17150, 17825, 18050, 18825, 19025, 19225, 19500, 19925, 20350, 20875, 21300, 21675, 21900, 22300, 22575, 22800, 23400, 23800, 23975, 24175, 24400, 24575, 24775, 25000, 25225, 25900, 26100, 26650, 27075, 27525, 27925, 28125, 28350, 28550, 28950, 29325, 29775, 30000, 30200, 30375, 31000, 31225, 31850, 32075, 32850, 33300, 33500, 36350, 36600, 36825, 37025, 37850, 38250, 38450, 38875, 39100, 39325, 39850, 40350, 41150, 41775, 42350, 42550, 43100, 43625, 44050, 44475, 44875, 45325, 45725, 46150, 46550, 46950, 47375, 
    47775, 
    48200, 
    48450,
    48825, 
    49050, 
    49275, 
    49700, 
    50225, 
    50650, 
    51075, 
    51300, 
    51500, 
    51700, 
    52150, 
    52575, 
    52950,
    53175, 
    53375, 
    53600,
    54000, 
    54400, 
    54600, 
    54825, 
    55175, 
    55550, 
    55725, 
    55950, 
    56325, 
    56575, 
    56750, 
    56950, 
    57350, 
    57750, 
    58150, 
    58500, 
    59125, 
    59375,
    59775, 
    60000, 
    61625, 
    62950, 
    63150, 
    63325, 
    63550, 
    63975, 
    64400, 
    64750, 
    64950, 
    65400, 
    65800, 
    66325, 
    66800, 
    67375, 
    67700, 
    68075, 
    68300, 
    68650, 
    68875, 
    69125, 
    69500, 
    69700, 
    69925, 
    70125, 
    70500, 
    70925, 
    71350, 
    71750, 
    72325, 
    72675, 
    73025, 
    73425, 
    73825, 
    74225,
    74575, 
    74775, 
    75225, 
    75450, 
    75650, 
    76100, 
    76300, 
    76525, 
    76750, 
    77125, 
    77575, 
    77975, 
    78300, 
    78650, 
    78850, 
    79075, 
    79475, 
    79675, 
    79900, 
    80125, 
    80525, 
    80875, 
    81075, 
    81325, 
    81500, 
    81925
,83150
,83375
,83750
,84150
,84600
,84950
,85625
,85800
,86025
,86425
,87225
,87650
,87875
,88150];
let record = [];
let times = second[0]-5250;
let i = 0;
function start(){
        // console.log(times);
        let crackNum = Math.floor(Math.random() * 4);
        let crack = document.getElementsByClassName('track')[crackNum];
        let block = document.createElement('div');
        block.setAttribute('class', 'box');
        crack.appendChild(block);
        i++;
        move(block);
}
function move(block){
    let top = 0;
    let tmp = setInterval(function(){
        if(top < 575){
            top+=1;
            block.style.top = top + "px";
        }
        else block.remove();
    }, 10);
}

function playSound(){
    let keyS = document.createElement("audio");
    keyS.src = "./hihat.wav";
    keyS.play();
}
document.onkeydown = function(e){
    console.log(times);
    record.push(times);
    let crack, line;
    if(e.keyCode == 81) {
        crack = document.getElementsByClassName('track')[0];
        line = document.getElementsByClassName('line')[0];
        playSound();
    }
    if(e.keyCode == 87) {
        crack = document.getElementsByClassName('track')[1];
        line = document.getElementsByClassName('line')[1];
        playSound();
    }
    if(e.keyCode == 69) {
        crack = document.getElementsByClassName('track')[2];
        line = document.getElementsByClassName('line')[2];
        playSound();
    }
    if(e.keyCode == 82) {
        crack = document.getElementsByClassName('track')[3];
        line = document.getElementsByClassName('line')[3];
        playSound();
    }
    addScore(crack);
    line.classList.add('clickLine');
}
document.onkeyup = function(e){
    if(e.keyCode == 81) {
        line = document.getElementsByClassName('line')[0];
        line.classList.remove('clickLine');
    }
    if(e.keyCode == 87) {
        line = document.getElementsByClassName('line')[1];
        line.classList.remove('clickLine');
    }
    if(e.keyCode == 69) {
        line = document.getElementsByClassName('line')[2];
        line.classList.remove('clickLine');
    }
    if(e.keyCode == 82) {
        line = document.getElementsByClassName('line')[3];
        line.classList.remove('clickLine');
    } 
}
let miss = 0, good = 0, nice = 0, perfect = 0;
function addScore(crack){
    let firstBlock = crack.childNodes[1];
    if(firstBlock){
        let firstTop = firstBlock.offsetTop;
        if(firstTop < 510){
            console.log("too far");
        }
        else{
            firstBlock.remove();
            if(firstTop == 525){
                perfect++;
            }
            else if(Math.abs(firstTop - 525) <= 5){
                nice++
            }
            else if(Math.abs(firstTop - 525) > 5){
                if(firstTop <= 515 || firstTop >= 535)  miss++;
                else good++;
            }
        }
    }
}
if(i == second.length - 1){
    console.log(miss+good+nice+perfect);
}

function Miss(){
        let crack0 = document.getElementsByClassName('track')[0];
        let crack1 = document.getElementsByClassName('track')[1];
        let crack2 = document.getElementsByClassName('track')[2];
        let crack3 = document.getElementsByClassName('track')[3];
        let firstBlock0 = crack0.childNodes[1];
        let firstBlock1 = crack1.childNodes[1];
        let firstBlock2 = crack2.childNodes[1];
        let firstBlock3 = crack3.childNodes[1];
        if(firstBlock0){
            if(firstBlock0.offsetTop >= 565){
                miss++;
                firstBlock0.remove();
            }
        }
        if(firstBlock1){
            if(firstBlock1.offsetTop >= 565){
                miss++;
                firstBlock1.remove();
            }
        }
        if(firstBlock2){
            if(firstBlock2.offsetTop >= 565){
                miss++;
                firstBlock2.remove();
            }
        }
        if(firstBlock3){
            if(firstBlock3.offsetTop >= 565){
                miss++;
                firstBlock3.remove();
            }
        }
}
// fetch("./js/song.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));