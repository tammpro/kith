"use strict"

// 音楽を再生する処理
const musicButton = document.querySelector('.header_sound p');
const music = document.getElementById('music');

musicButton.addEventListener('click',function(){
    if(music.paused){
        music.play();
        this.textContent = "Sound On";
    }else{
        music.pause();
        music.currentTime = 0;
        this.textContent = "Sound Off";
    }
});


// 上までスクロールする処理
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click',()=>{
    window.scroll({
        top:0,
        behavior:'smooth'
    });
});

