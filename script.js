var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var element=document.getElementsByTagName("li")


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var del = document.createElement("button");
	del.textContent="Gata";
	del.onclick=function(){
		li.remove();
	}
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(del);
	ul.appendChild(li);
	input.value = "";

	
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
//main
for (var i = 0; i < element.length; i++) {
    var del = document.createElement("button");
    del.textContent = "Gata";
    del.onclick = createDeleteHandler(element[i]);
    element[i].appendChild(del);
}

function createDeleteHandler(li) {
    return function () {
        li.remove();
    };
}

ul.addEventListener("click", function(event){
	if (event.target.tagName ==="LI"){
		event.target.classList.toggle("done")
	}
});




button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


