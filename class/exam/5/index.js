var menu = document.getElementById("menu");
var left1 = document.getElementById("left1");
var contentWidth = document.body.clientWidth * 0.9;
var imgArr = ["img/img0.jpg", "img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
var picDiv = document.getElementsByClassName("pic")[0];
var picUl = picDiv.children[0];
picUl.style.width = contentWidth * 0.9 * 4 + "px";
var picLi = picUl.children;
var circleDiv = picDiv.children[1];
var imgIndex = 0;

var imgInterval = setInterval(imgRoll, 2000);

window.onload = function()
{
  imgRoll();
}

window.onresize = function()
{
  contentWidth = document.body.clientWidth * 0.9;
  for(i = 0; i < 4; i++)
  {
    var liImg = picLi[i].getElementsByTagName("img")[0];
    liImg.style.width = (contentWidth * 0.9) + "px";
    liImg.src = imgArr[i];
  }
  picUl.style.width = contentWidth * 0.9 * 4 + "px";
  picUl.style.left = -(contentWidth * imgIndex * 0.9) + "px";
}

left1.onmouseover = function()
{
  menu.style.display = "block";
};

left1.onmouseout = function()
{
  menu.style.display = "none";
}

menu.onmouseover = function()
{
  menu.style.display = "block";
};

menu.onmouseout = function()
{
  menu.style.display = "none";
}

for(i = 0; i < 4; i++)
{
  var liImg = picLi[i].getElementsByTagName("img")[0];
  liImg.style.width = (contentWidth * 0.9) + "px";
  liImg.src = imgArr[i];
}

for(i = 0; i < 4; i++)
{
  circleDiv.children[i].index = i;
  circleDiv.children[i].onclick = function()
  {
    clearInterval(imgInterval);
    picUl.style.left = -(contentWidth * this.index * 0.9) + "px";
    imgInterval = setInterval(imgRoll, 2000);
    imgIndex = this.index;
    setCricle();
  }
}



function imgRoll()
{
  setCricle();

  picUl.style.left = -(contentWidth * imgIndex * 0.9) + "px";

  imgIndex++;
  if(imgIndex == 4)
  {
    imgIndex = 0;
  }
}

function setCricle()
{
  for(i = 0; i < 4; i++)
  {
    circleDiv.children[i].style.background = "#ffffff";
  }
  circleDiv.children[imgIndex].style.background = "rgb(100, 100, 100)";
}
