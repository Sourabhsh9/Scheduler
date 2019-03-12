function myF()
{
var str=document.getElementById("i1").value;
console.log(str);
//var t=document.createTextNode(str);
//d1.appendChild(t);

var div = document.createElement("div");
div.style.width = "400px";
div.style.height = "40px";
div.style.background = "orange";
div.style.color = "white";
div.style.margin="0 auto";
div.innerHTML = str;
div.setAttribute("onclick","cc(this)");
document.body.appendChild(div);
var b1=document.createElement("button");
b1.innerHTML="x";
b1.setAttribute("onclick","mf(this)");
b1.style.float="right";
b1.style.height="30px";
b1.style.width="30px";
div.appendChild(b1);
}
function mf(ob)
{
	ob.parentElement.remove();
	
}
function cc(ob)
{
	ob.style.background="green";
}