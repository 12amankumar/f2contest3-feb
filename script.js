let button= document.getElementById("btn");
let tbody=document.querySelector("tbody");
let para1=document.getElementById("para1")
button.addEventListener("click",addnewrow)
 let id=0;

function addnewrow(event){
    event.preventDefault();
    console.log("1");
//   let tr=document.createElement("tr");
//   let td1=document.createElement("td");
//   let td2=document.createElement("td");
//   let td3=document.createElement("td");
//   let td4=document.createElement("td");
//   let td5=document.createElement("td");
//   let td6=document.createElement("td");
//   let td7=document.createElement("td");
//   let input1=`${++id}`;
//   let input2=document.createElement("input");
//   let input3=document.createElement("input");
//   let input4=document.createElement("input");
//   let input5=document.createElement("input");
//   let input6=document.createElement("input");
//   let input7=document.createElement("input");

 
//   input2.type="text";
  
//   input3.type="text";  
//   input4.type="text";
//   input5.type="text";
//   input6.type="text";
//   input7.type="text";


 
//    td1.innerText = input1;
//   tr.appendChild(td1);
//   tbody.appendChild(tr);

   tbody.innerHTML+=`  <tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${++id}</td>
<td> <input type="text" id="name" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aman kumar"></td>
<td> <input type="text" id="rollno" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;564748"></td>
<td> <input type="text" id="subject" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;computer"></td>
<td> <input type="text" id="marks" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90"></td>
<td> <input type="text" id="markedby" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;teacher
"></td>
<td><button id="button" onClick=x() color="yellow">Save</button></td>


</tr> `
para1.style.display="block";

}
addnewrow();
function x(){
    console.log("hi")

let nameEle = document.getElementById("name");
let rollnoEle = document.getElementById("rollno");
let subjectEle = document.getElementById("subject");
let markEle = document.getElementById("marks");
let marksbyEle = document.getElementById("markedby");
let button1=document.getElementById("button")
 let name=nameEle.value;
        let rollno=rollnoEle.value;
        let subject=subjectEle.value;
        let marks=markEle.value;
        let marksby=marksbyEle.value;
      var letters = /^[A-Za-z]+$/;
   
      if(name.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return false;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
  //
  var numbers = /^[0-9]+$/;
   if(rollno.match(numbers))
  {
  alert('Your Registration number has accepted....');
 
  return true;
  }
  else
  {
  alert('Please input numeric characters only');

  return false;
  }
      }
      