var table=document.createElement('table');
document.body.appendChild(table);
var tbody=document.createElement('tbody');
table.appendChild(tbody);
console.log(( JSON.parse(localStorage.getItem("data"))))
data = JSON.parse(localStorage.getItem("data"));
 var trow=document.createElement('tr');
 tbody.appendChild(trow);
var th=document.createElement('th');
th.innerHTML="Email"
trow.appendChild(th)
var th1=document.createElement('th');
th1.innerHTML="Username"
trow.appendChild(th1)
var th2=document.createElement('th');
th2.innerHTML="Password"
trow.appendChild(th2)
for(var i=0;i<data.length;i++)
{
var trow1=document.createElement('tr');
tbody.appendChild(trow1);
var td=document.createElement('td');
td.innerHTML=data[i].mail
var td2=document.createElement('td');
td2.innerHTML=data[i].uname
var td3=document.createElement('td');
td3.innerHTML=data[i].paaa
trow1.appendChild(td);
trow1.appendChild(td2);
trow1.appendChild(td3);
}
// console.log(array.uname );
// console.log(array.mail);
// console.log(array.paaa);







