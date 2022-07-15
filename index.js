let myLeads= [];
console.log(myLeads)
const ulEl= document.getElementById("ul-el");
const inputEl= document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn")
let deleteBtn = document.getElementById("delete-btn")
console.log("Delete button", deleteBtn)

deleteBtn.addEventListener("dblclick", function () {
    console.log("Double clicked")
    localStorage.clear()
    myLeads= [];
    renderLead();
})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    console.log("My leads: "+myLeads)
    renderLead()
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
   inputEl.value= "";

   localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead();
    console.log(localStorage.getItem("myLeads"))
})

function renderLead() {
    var listItem="";
    for(let i=0; i<myLeads.length; i++){

    // listItem += "<li><a href='"+myLeads[i]+ "target='_blank'>"+myLeads[i]+"</a></li>";

        listItem += `<li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li>`

    }
    ulEl.innerHTML=listItem
}









