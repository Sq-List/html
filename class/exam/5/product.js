// var imgSrc = new Array("img/iPhone7.jpg", "img/OPPOR9s.jpg", "img/SAMSUNGS7.jpg", "img/SAMSUNGS8.jpg", "img/华为P10.jpg", "img/华为V9.jpg", "img/华为畅享7.jpg", "img/小米5s.jpg", "img/小米6.jpg", "img/小米MIX.jpg", "img/小米Note2.jpg", "img/红米Note4.jpg", "img/联想乐檬K10.jpg", "img/酷派酷玩6.jpg", "img/魅族MX6.jpg", "img/魅族Pro6S.jpg");

// window.onload = setImg();

var productDetails = document.getElementById("product-list");
for(i = 0; i < productList.length; i++)
{
  setImg(productList[i].url);
}

function setImg(url)
{
  var newDiv = document.createElement("div");
  // IE8/9/10/Firefox/Safari/Chrome/Opera
  newDiv.setAttribute("class", "product-single");
  // IE6/7
  newDiv.setAttribute("className", "product-single");
  // 所有浏览器
  newDiv.className = "product-single";

  var newImg = document.createElement("img");
  newImg.src = url;

  var newSpan = document.createElement("span");
  newSpan.innerHTML = url.slice(4, -4);

  newDiv.appendChild(newImg);
  newDiv.appendChild(newSpan);

  productDetails.appendChild(newDiv);
}

var brandLiArray = document.getElementById("brand").children;
for(i = 0; i < brandLiArray.length; i++)
{
  brandLiArray[i].onclick = function()
  {
    selectProduct(this.innerHTML);
  }
}

function selectProduct(brand)
{
  productDetails.innerHTML = "";
  for(i = 0; i < productList.length; i++)
  {
    if(productList[i].brand == brand)
    {
      setImg(productList[i].url);
    }
  }
}
