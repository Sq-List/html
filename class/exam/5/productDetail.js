var imgSrc = new Array("img/小米MIX.jpg", "img/iPhone7.jpg", "img/OPPOR9s.jpg", "img/SAMSUNGS7.jpg", "img/SAMSUNGS8.jpg", "img/华为P10.jpg", "img/华为V9.jpg", "img/华为畅享7.jpg", "img/小米5s.jpg", "img/小米6.jpg", "img/小米Note2.jpg", "img/红米Note4.jpg", "img/联想乐檬K10.jpg", "img/酷派酷玩6.jpg", "img/魅族MX6.jpg", "img/魅族Pro6S.jpg");
var imgIndex = 0;

var productAtrritubeDetail =
[
  {
    name : "颜色",
    option : ["黑色", "白色", "银色"]
  },
  {
    name : "容量",
    option : ["128G", "256G"],
    price : ["3499.00", "3999.00"]
  }
];

var productAtrritube = document.getElementById("product-attritube");

window.onload = function()
{
  var productImgScollTogether = document.getElementById("product-img-scoll-together");
  productImgScollTogether.style.width = imgSrc.length * 450 + "px";
  for(var i = 0; i < imgSrc.length - 1; i++)
  {
    var newImg = document.createElement("img");
    newImg.src = imgSrc[i];

    productImgScollTogether.appendChild(newImg);
  }
}

for(var i = 0; i < productAtrritubeDetail.length; i++)
{
  addAttritube(i);
}

function addAttritube(i)
{
  var flag = 0;

  var divAttritube = document.createElement("div");
  divAttritube.className = "product-attritube-detail";
  productAtrritube.appendChild(divAttritube);

  var spanName = document.createElement("span");
  spanName.innerHTML = productAtrritubeDetail[i].name;
  if(productAtrritubeDetail[i].name == "容量")
  {
    flag = 1;
  }
  divAttritube.appendChild(spanName);

  for(var j = 0; j < productAtrritubeDetail[i].option.length; j++)
  {
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "button");
    newInput.className = "product-button";
    newInput.value = productAtrritubeDetail[i].option[j];
    newInput.name = productAtrritubeDetail[i].name;
    newInput.i = i;
    newInput.j = j;
    divAttritube.appendChild(newInput);

    newInput.onclick = function()
    {
      var inputArray = document.getElementsByName(this.getAttribute("name"));
      for(var k = 0; k < inputArray.length; k++)
      {
        inputArray[k].style.background = "#ffffff";
      }
      this.style.background = "blue";

      if(flag == 1)
      {
        var priceSpan = document.getElementById("price");

        priceSpan.innerHTML = productAtrritubeDetail[i].price[this.j];
      }
    }
  }
}

document.getElementById("jia").onclick = function()
{
  var number = document.getElementById("number");
  var numberValue = Number(number.value);
  numberValue++;
  number.value = numberValue;

  if(numberValue > 1)
  {
    document.getElementById("jian").style.color = "#000000";
  }
}

document.getElementById("jian").onclick = function()
{
  var number = document.getElementById("number");
  var numberValue = Number(number.value);
  numberValue--;
  number.value = numberValue;

  if(numberValue <= 1)
  {
    number.value = "1";
    this.style.color = "gray";
    return ;
  }
}

document.getElementById("toLeft").onclick = function()
{
  if(imgIndex == 0)
  {
    imgIndex = imgSrc.length - 1;
  }
  imgIndex--;

  document.getElementById("product-img-scoll-together").style.left = -imgIndex * 450 + "px";
}

document.getElementById("toRight").onclick = function()
{
  if(imgIndex == imgSrc.length - 2)
  {
    imgIndex = -1;
  }
  imgIndex++;

  document.getElementById("product-img-scoll-together").style.left = -imgIndex * 450 + "px";
}

function changePrice()
{
  var number = document.getElementById("number");
  var numberValue = Number(number.value);
  var price = document.getElementById("price");
  var priceValue = Number(price.innerHTML);
}
