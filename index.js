// write js code here corresponding to index.html
// You should add submit event on the form
document.addEventListener("submit", myFunction);
var deatils = []
function myFunction(){
    event.preventDefault();
    myObj = {
        "matchNumber":document.querySelector("#matchNum").value,
        "Team1":document.querySelector("#teamA").value,
        "Team2":document.querySelector("#teamB").value,
        "date":document.querySelector("#date").value,
        "venue":document.querySelector("#venue").value
    }
    deatils.append(myObj)
    localStorage.setItem("schedule",JSON.stringify(deatils))
}
