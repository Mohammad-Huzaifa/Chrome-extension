// const recipient = "James"
// const name =" Huzaifa"

// const ymail = `hey ${recipient}! how it is going? cheers ${name}`
// console.log(ymail)

// localStorage.setItem("value", "www.google.com")
// console.log(localStorage.getItem("value"))
// localStorage.clear();
// console.log(localStorage.getItem("value"))

let myLeads = ["google"]

// myLeads.push("yahoo")
// console.log(myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)
// myLeads = JSON.parse(myLeads)
// myLeads.push("gmail")
// console.log(myLeads)
// console.log(typeof myLeads)

let clickBtn = document.getElementById("clicked-button")
console.log(clickBtn)

clickBtn.addEventListener("dblclick", function ()  {
    console.log("Double clicked")
})