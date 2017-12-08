 var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
          }, 
          slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          } 
        },
         // 前进后退按钮
         navigation: {
          nextEl: '.swiper-button-next',
        },
    });


var maic = document.getElementById("maic");
var imgdh = document.querySelectorAll("#imgdh")[0];
var img = document.querySelectorAll("#img")[0];
var audio = document.querySelector("audio");
var flag=1;

maic.onclick = function(){
    if(flag == 1){
        imgdh.style.display="none";
        img.style.animation="none";
        audio.pause();
        flag = 0;
    }else{
        imgdh.style.display="block";
        img.style.animation=" zhuan 1s linear infinite";
        audio.play();
        flag=1;
    }
}
