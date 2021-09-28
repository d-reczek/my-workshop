const body = document.body;
const div = document.createElement('div');
body.append(div);
div.classList.add("class-1", "class-2");

const class1 = document.querySelector(".class-1")
class1.innerHTML = "Hello class-1"

const p = document.createElement("p");
div.append(p);
p.style.color = "red";
p.style.backgroundColor = "#000";
p.style.display = "inline-block";
p.innerHTML = "Lorem ipsum";
// body.innerHTML = "<strong>STRONG</strong>"
p.remove();