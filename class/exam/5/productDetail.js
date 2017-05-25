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

function changePrice()
{
  var number = document.getElementById("number");
  var numberValue = Number(number.value);
  var price = document.getElementById("price");
  var priceValue = Number(price.innerHTML);
}
