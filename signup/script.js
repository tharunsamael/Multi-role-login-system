// let mysql = require("mysql");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "tharun",
//   password: "#Bloodmoonday1",
// });

// con.connect(function (err) {
//   if (err) console.log("[mysql error]", err);
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) console.log("[mysql error]", err);
//     console.log("Database created");
//   });
// });

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});
