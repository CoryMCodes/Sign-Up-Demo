import { passwordChecker } from "./modules/passwordChecker.js";

const passwordConfirmEl = document.getElementById("password-confirm");
const firstPasswordEl = document.getElementById("password");
const passwordPattern = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
const submitBtn = document.getElementById("submit-btn");

firstPasswordEl.addEventListener("input", (e) => {
  console.log(e.target.value)
  console.log(passwordPattern.test(e.target.value))
  if(!passwordPattern.test(e.target.value)){
    firstPasswordEl.setCustomValidity("Passwords be at least 8 characters long, contain at least one uppercase letter, lowercase letter, number, and symbol")
  }else{
    firstPasswordEl.setCustomValidity("")
  }
  ;
})

submitBtn.addEventListener("click", () => {
  if(!passwordChecker(firstPasswordEl.value, passwordConfirmEl.value)){
    passwordConfirmEl.setCustomValidity("Passwords must match");
    return
  }else{
    passwordConfirmEl.setCustomValidity("");
    console.log("form submitted")
  }
})

