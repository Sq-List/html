var searchDiv = document.getElementById("searchDiv");
var loginDiv = document.getElementById("loginDiv");
var nextButton = document.getElementById("nextBut1");
var pass = document.getElementById("pass");
var passAgain = document.getElementById("passAgain");
var flag = new Array(0, 0);
var pats = new Array();
var num;
var vCode;
// 0.其他特殊字符
pats.push(/[^a-zA-Z0-9]/g);
// 1.小写字母
pats.push(/[a-z]/g);
// 2.大写字母
pats.push(/[A-Z]/g);
// 3.数字
pats.push(/[0-9]/g);

window.onload = function()
{
  var formArr = document.getElementsByName("form");
  for(i = 0; i < formArr.length; i++)
  {
    formArr[i].onfocus = function()
    {
      // console.log(obj);
      checkFocus(this);
    }
    formArr[i].onblur = function()
    {
      checkBlur(this);
    }

    // 方法2
    // formArr[i].addEventListener("focus", function(){checkFocus(this);});
    // formArr[i].addEventListener("blur", function(){checkBlur(this);});
  }
}

function checkUser(obj)
{
  var user = obj.value;
  var pat = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){5,9}$/;
  var userSpan = document.getElementById("userPrompt");
  if((pat.test(user)) || obj.value <= 0)
  {
    userSpan.innerHTML = " ";
    flag[0] = 1;
  }
  else
  {
    userSpan.innerHTML = "用户名第一个字符必须为字母，其余可包含下划线、数字、字母，长度必须大于等于6，小于等于10";
    flag[0] = 0;
  }

  checkNotNull();
}

function checkPass(obj)
{
  var pass = obj.value;
  console.log(pass);
  var passSpan = document.getElementById("passSpan");
  var passStrength = document.getElementsByClassName("passStrength");
  var passTable = document.getElementById("passTable");
  var sec = 0;

  if(pass.length <= 0)
  {
    passSpan.innerHTML = "";
    passTable.style.display = "none";
  }
  else if(pass.length < 6 || pass.length > 18)
  {
    passSpan.innerHTML = "密码长度必须大于6位，小于等于18";
    passTable.style.display = "none";
    passSpan.style.display = "inline";
  }
  else
  {
    passSpan.innerHTML = "密码强度：";

    for(i = 0; i < 3; i++)
    {
      passTable.children[i].style.background = "#ffffff";
    }
    passTable.style.display = "inline-block";

    for(i = 0; i < 4; i++)
    {
      if(pats[i].test(pass))
      {
        sec++;
        console.log("i:" + i);
      }
    }
    console.log(sec);

    var back;
    switch(sec)
    {
      case 1:
        back = "red";
        break;
      case 2:
        back = "orange";
        break;
      case 3:
      case 4:
        sec = 3;
        back = "green";
        break;
    }

    for(i = 0; i < sec; i++)
    {
      passTable.children[i].style.background = back;
    }
  }

  checkNotNull();
}

function checkPassAgain(obj)
{
  var pass1 = pass.value;
  var pass2 = obj.value;
  var passPromptAgain = document.getElementById("passPromptAgain");

  if(pass1 != pass2)
  {
    passPromptAgain.innerHTML = "两次输入的密码不一致";
    flag[1] = 0;
  }
  else
  {
    passPromptAgain.innerHTML = " ";
    flag[1] = 1;
  }

  checkNotNull();
}

function checkNotNull()
{
  nextButton.disabled = false;

  if(pass.value != passAgain.value)
  {
    nextButton.disabled = true;
    return ;
  }

  for(i = 0; i < 2; i++)
  {
    if(flag[i] == 0)
    {
      nextButton.disabled = true;
      return ;
    }
  }
}

function checkFocus(obj)
{
  if(obj.value == obj.defaultValue)
  {
    obj.value = "";
    obj.style.color = "#000000";
    if(obj.defaultValue.indexOf("密码") != -1)
    {
      obj.type = "password";
    }
  }
}

function checkBlur(obj)
{
  if(obj.value == "")
  {
    obj.value = obj.defaultValue;
    obj.style.color = "rgb(182, 170, 182)";
    if(obj.type == "password")
    {
      obj.type = "text";
    }
  }
}

document.getElementById("search").onclick = function()
{
  if(searchDiv.style.display == '' || searchDiv.style.display == "none")
  {
    searchDiv.style.display = "block";
    loginDiv.style.display = "none";
  }
  else
  {
    searchDiv.style.display = "none";
  }

  return false;
}

document.getElementById("login").onclick = function()
{
  if(loginDiv.style.display == '' || loginDiv.style.display == "none")
  {
    loginDiv.style.display = "block";
    searchDiv.style.display = "none";
  }
  else
  {
    loginDiv.style.display = "none";
  }

  return false;
}

document.getElementById("nextBut1").onclick = function()
{
  document.getElementById("reginf").style.display = "none";
  document.getElementById("regcheck").style.display = "block";
  var regstep = document.getElementsByClassName("regstep")[0];
  regstep.children[0].style.borderBottom = "none";
  regstep.children[1].style.borderBottom = "3px red solid";

  num = 5;
  startCountDown();
  countdown = setInterval(startCountDown, 1000);
}

document.getElementById("restart").onclick = function()
{
  num = 5;
  startCountDown();
  countdown = setInterval(startCountDown, 1000);
  document.getElementById("restart").disabled = true;
}

document.getElementById("nextBut2").onclick = function()
{
  var inputvCode = document.getElementById("vCode").value;
  if(inputvCode == vCode)
  {
    document.getElementById("regcheck").style.display = "none";
    document.getElementById("regsuccess").style.display = "block";

    var regstep = document.getElementsByClassName("regstep")[0];
    regstep.children[1].style.borderBottom = "none";
    regstep.children[2].style.borderBottom = "3px red solid";
  }
  else
  {
    alert("验证码错误！");
  }
}

function startCountDown()
{
  document.getElementById("countdownvalue").innerHTML = num;
  if(num == 0)
  {
    clearInterval(countdown);
    document.getElementById("restart").disabled = false;
    setvCode();
  }
  num --;
}

function setvCode()
{
  vCode = "";

  for(i = 0; i < 5; i++)
  {
    vCode += (Math.floor(Math.random() * 10) + "");
  }

  alert("验证码是：" + vCode);
}
