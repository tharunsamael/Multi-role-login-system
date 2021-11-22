var count = 1;
let brat = 0;
let sensei = 0;
console.log(brat, sensei);

function studentClick() {
  brat += 1;
  if (count % 2 !== 0) {
    document.getElementById("tick1").style.cssText = "display:block;";
    document.getElementById("employee").style.cssText =
      "transform:scale(1.1); z-index: 2; border-radius: 18px; box-shadow: 5px 5px 5px #232023; border:1px solid white";
    document.getElementById("btn1").style.cssText = "filter: blur(1px);";
    document.getElementById("e-content").style.cssText =
      'margin-top: -71%; display: block; margin-left: 19.5%; margin-bottom: 10%; font-family: "M PLUS 1", sans-serif; font-weight: bolder; font-size: 1.2rem;transform: scale(1.1);';
    count += 1;
  } else {
    document.getElementById("e-content").style.cssText =
      'margin-top: -71%; display: none; margin-left: 19.5%; margin-bottom: 10%; font-family: "M PLUS 1", sans-serif; font-weight: bolder; font-size: 1.2rem;transform: scale(1.1);';
    document.getElementById("tick1").style.display = "none";
    document.getElementById("btn1").style.cssText = "filter: none; ";
    document.getElementById("employee").style.cssText =
      "transform:none; z-index: none; border-radius: none; box-shadow: none;";

    count += 1;
  }
  document.getElementById("employee").onmouseover = function () {
    if (count % 2 !== 0) {
      $(this).css("transform", "scale(1.1)");
      $("#btn1").css("filter", "blur(1px)");
      $("#e-content").css("display", "block");
      $("#e-content").css("margin-top", "-60%");
    }
  };

  document.getElementById("employee").onmouseout = function () {
    if (count % 2 !== 0) {
      $(this).css("transform", "none");
      $("#btn1").css("filter", "none");
      $("#e-content").css("display", "none");
    }
  };
}

function teacherClick() {
  sensei += 1;
  if (count % 2 !== 0) {
    document.getElementById("tick2").style.cssText = "display:block;";
    document.getElementById("admin").style.cssText =
      "transform:scale(1.1); z-index: 2; border-radius: 18px; box-shadow: 5px 5px 5px #232023; border:1px solid white";
    document.getElementById("btn2").style.cssText = "filter: blur(1px);";
    document.getElementById("a-content").style.cssText =
      'margin-top: -71%; display: block; margin-left: 19.5%; margin-bottom: 10%; font-family: "M PLUS 1", sans-serif; font-weight: bolder; font-size: 1.2rem;transform: scale(1.1);';
    count += 1;
  } else {
    document.getElementById("a-content").style.cssText =
      'margin-top: -71%; display: none; margin-left: 19.5%; margin-bottom: 10%; font-family: "M PLUS 1", sans-serif; font-weight: bolder; font-size: 1.2rem;transform: scale(1.1);';
    document.getElementById("tick2").style.display = "none";
    document.getElementById("btn2").style.cssText = "filter: none; ";
    document.getElementById("admin").style.cssText =
      "transform:none; z-index: none; border-radius: none; box-shadow: none;";

    count += 1;
  }
  document.getElementById("admin").onmouseover = function () {
    if (count % 2 !== 0) {
      $(this).css("transform", "scale(1.1)");
      $("#btn2").css("filter", "blur(1px)");
      $("#a-content").css("display", "block");
      $("#a-content").css("margin-top", "-60%");
    }
  };

  document.getElementById("admin").onmouseout = function () {
    if (count % 2 !== 0) {
      $(this).css("transform", "none");
      $("#btn2").css("filter", "none");
      $("#a-content").css("display", "none");
    }
  };
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

var username = document.getElementById("username");
var pwd = document.getElementById("password");

function loginCheck() {
  if (brat === sensei) {
    alert("PLEASE! CHOOSE YOUR ROLE.");
  } else if (username.value === "" && pwd.value === "") {
    alert("Fill your username and password field");
  } else if (username.value === "") {
    alert("Fill your username field!");
  } else if (pwd.value === "") {
    alert("Fill your password field!");
  } else {
    alert(document.getElementById("username").value);
  }
}
