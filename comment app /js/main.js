function post() {
	console.log("this function is working!!");
	var input = document.getElementById("input");
	var text = document.getElementById("textarea");
	var list = document.getElementById("list");
	var li = document.createElement("li");
	var h3 = document.createElement("h3");
	var p = document.createElement("p");

	console.log(input.value);
	console.log(textarea.value);

	h3.textContent = input.value;
	console.log(h3);
	p.textContent = textarea.value;
	console.log(p);

	li.append(h3);
	li.append(p);
	console.log(li);

	list.append(li)
	
}

function unPost() {
	var li = document.getElementsByTagName("ul")[0];
    li.getElementsByTagName("li")[0]
    li.remove(1);
}

document.getElementById("list").style.color = "grey";
document.getElementById("list").innerHTML = Date();