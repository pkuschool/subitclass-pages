const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
//选中相应的按钮

const slides = document.querySelectorAll(".slide");
//选中图片的盒子

var currentIndex = 0;//起始是哪一张图片
var autoPlay = true; //是否自动播放
var forward = true;  //正向或者反向轮播
var interval = 8000; //间隔

//此函数的执行效果：切换到下一张图片，如果图片已经是最后一张，则切换至第一一张
function handleNextClicked() {
  let current = slides[currentIndex];//选中某张图片（当前正在屏幕上的）
  current.classList.remove("current");//移除图片
  currentIndex++;//加数器
    if (currentIndex >= slides.length){//如果选中的元素已经是第一张图片
      currentIndex = 0;//跳转到最后一张
  }
  slides[currentIndex].classList.add("current");//添加新的元素
}


//此函数的执行效果：切换到上一张图片，如果图片已经是第一张，则切换至最后一张
function handlePrevClicked(){
  let current = slides[currentIndex];//选中某张图片（当前正在屏幕上的）
  current.classList.remove("current");//移除图片
  currentIndex--;//减数器
  if (currentIndex < 0) {//如果选中的元素已经是第一张图片
    currentIndex = slides.length - 1;//跳转的图片变为最后一张
  }
  slides[currentIndex].classList.add("current");//添加新的元素
}


next.addEventListener("click", handleNextClicked);//检测next点击事件，点击后执行函数handleNextClicked
prev.addEventListener("click", handlePrevClicked);//检测prev点击事件，点击后执行函数handlePrevClicked


if (autoPlay) {
  setInterval(
    forward
      ? handleNextClicked //forward为真，则这执行
      : handlePrevClicked,//forward为假，则执行
    interval//等待时间
  );
}