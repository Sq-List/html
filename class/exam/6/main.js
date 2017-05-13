var father;
var priceObj;
var paimai = document.getElementById("paimai");
var jingjia = document.getElementById("jingjia");
var nameArr = new Array("chrome", "firefox", "safari", "360极速");
var priceArr = new Array(10000, 10000, 10000, 10000);
var date = new Date();

function judge()
{
  if(isNaN(paimai.children['comPrice'].value))
  {
    paimai.children['tishi'].innerHTML = "请输入数字";
    paimai.children['tishi'].style.display = "block";
    jingjia.disabled = true;
  }
  else if(paimai.children['comPrice'].value.indexOf(".") != -1)
  {
    paimai.children['tishi'].innerHTML = "竞价价格必须要为整数";
    paimai.children['tishi'].style.display = "block";
    jingjia.disabled = true;
  }
  else if(parseInt(paimai.children['comPrice'].value) <= parseInt(paimai.children['nowPrice'].innerHTML))
  {
    paimai.children['tishi'].innerHTML = "竞价价格必须要大于当前价格";
    paimai.children['tishi'].style.display = "block";
    jingjia.disabled = true;
  }
  else
  {
    paimai.children['tishi'].style.display = "none";
    if(parseInt(paimai.children['comPrice'].value) > parseInt(paimai.children['nowPrice'].innerHTML))
    {
      jingjia.disabled = false;
    }
    else
    {
      jingjia.disabled = true;
    }
  }
}

function change()
{
  var i = parseInt(father.id.charAt(3));
  priceArr[i - 1] = parseInt(paimai.children['comPrice'].value);

  var imgobj = document.getElementsByName("img");

  for(var i = 0; i < 4; i++)
  {
    imgobj[i].src = "img/" + nameArr[i] + ".jpg";
    imgobj[i].children['broName'].innerHTML = nameArr[i];
    imgobj[i].children['price'].innerHTML = priceArr[i];
  }

  guanbi();
}

function guanbi()
{
  paimai.style.display = "none";
}

function buy(obj)
{
  paimai.style.display = "block";
  paimai.children['comPrice'].value = "请输入要竞价的价格";
  var nowPrice = paimai.children['nowPrice'];

  father = obj.parentNode;
  priceObj = father.children['price'];
  var price = priceObj.innerHTML;

  nowPrice.innerHTML = price;
}

function show()
{
  var flag = 1;
  var discount = 1;
  if(date.getDay() == 6 || date.getDay() == 0)
  {
    discount = 0.8;
  }
  var imgobj = document.getElementsByName("img");

  for(var i = 0; i < 4; i++)
  {
    imgobj[i].src = "img/" + nameArr[i] + ".jpg";
    imgobj[i].children['broName'].innerHTML = nameArr[i];
    priceArr[i] *= discount;
    imgobj[i].children['price'].innerHTML = priceArr[i];
  }
}



var h = 10;
var m = 0;
var s = 0;
var timeid = setInterval(getTime, 1000);

function getTime()
{
  var header = document.getElementsByTagName("header")[0];

  var a = new Array(h, m, s);

  for(var i = 0; i < 3; i++)
  {
    if(a[i] < 10)
    {
      a[i] = "0" + a[i];
    }
  }
  header.innerHTML = "拍卖时间还剩余：" + a[0] + ":" + a[1] + ":" + a[2];

  s--;
  if(s == -1)
  {
    s = 59;
    m--;
  }
  if(m == -1)
  {
    m = 59;
    h--;
  }
  if(h == -1)
  {
    h = 0;
  }
  if(h == 0 && m == 59 && s == 59)
  {
    header.innerHTML = "拍卖结束";
    clearInterval(timeid);
    var inp = document.getElementsByTagName("input");
    for(var i = 0; i < 4; i++)
    {
      inp[i].style.display = "none";
    }
    return ;
  }
}
