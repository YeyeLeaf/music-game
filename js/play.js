let video = document.querySelector("#background-video");
function playVideo() {
    
        video.src = "./video/"+songName+".mp4";
        times = second[0]-5250;
        timer = setInterval(function(){
            if(times == second[i]-5250) start();
            times += 25;
            Miss();
        }, 25);
        setTimeout(function(){
            video.play();
        }, -second[0]+5250);

    
    
}

let second;
let sess = sessionStorage.getItem("gameHistory");
        sess = JSON.parse(sess);
        console.log(sess.Name);
        let songName = sess.Name;
        fetch('./js/song.json')
        .then(response => response.json())
        .then(data => {
          second = data[songName];
          playVideo();
        })
        .catch(error => {
          console.log(error);
        });
let timer;
let record = [];
let times;
let i = 0;
function start(){
        //console.log(times);
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
    keyS.src = "./music/hihat.wav";
    keyS.play();
}
document.onkeydown = function(e){
    console.log(times);
    record.push(times+5250);
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
    let line;
    let score = document.querySelector('.score');
    score.textContent = "";
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
let rank = {
    miss: 0,
    good: 0,
    nice: 0,
    perfect: 0 
};
console.log(rank.nice);
function addScore(crack){
    let firstBlock = crack.childNodes[1];
    let score = document.querySelector('.score');
    if(firstBlock){
        let firstTop = firstBlock.offsetTop;
        if(firstTop < 510){
            console.log("too far");
        }
        else{
            firstBlock.remove();
            if(firstTop == 525){
                rank.perfect++;
                score.textContent = "perfect";
            }
            else if(Math.abs(firstTop - 525) <= 5){
                rank.nice++
                score.textContent = "nice";
            }
            else if(Math.abs(firstTop - 525) > 5){
                if(firstTop <= 515 || firstTop >= 535)  rank.miss = rank.miss;
                else{
                    rank.good++;
                    score.textContent = "good";
                }
            }
        }
    }
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
        let score = document.querySelector('.score');
        if(firstBlock0){
            if(firstBlock0.offsetTop >= 565){
                rank.miss++;
                firstBlock0.remove();
                score.textContent = "miss";
            }
        }
        if(firstBlock1){
            if(firstBlock1.offsetTop >= 565){
                rank.miss++;
                firstBlock1.remove();
                score.textContent = "miss";
            }
        }
        if(firstBlock2){
            if(firstBlock2.offsetTop >= 565){
                rank.miss++;
                firstBlock2.remove();
                score.textContent = "miss";
            }
        }
        if(firstBlock3){
            if(firstBlock3.offsetTop >= 565){
                rank.miss++;
                firstBlock3.remove();
                score.textContent = "miss";
            }
        }
}
function end(){
    fetch('gameEnd.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rank)
      })
      .then(function(response) {
        return response.text();
      })
      .then(function(responseText) {
        console.log(responseText);
      })
      .catch(function(error) {
        console.error(error);
      });
      
}
video.addEventListener('ended', function(e){
    window.location.href = 'gameEnd.php?song='+songName+'&perfect='+rank.perfect+'&nice='+rank.nice+'&good='+rank.good+'&miss='+rank.miss;
});
video.addEventListener('ended', end());