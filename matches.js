// write js code here corresponding to matches.html
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");
var td5 = document.createElement("td");
var td6 = document.createElement("td");
var tr1 = document.createElement("tr");
tr1.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr1);
var matchNumber = localStorage.getItem("matchNumber")
// document.querySelector("tbody">"tr").innerText = matchNumber
// console.log(matchNumber)
document.querySelector("td").value = JSON.parse(localStorage.getItem("matchNumber"));