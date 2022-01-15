function addToDo() {
    let form_value = document.forms["input"]["to-do-name"].value;
    if (form_value === "") {
        alert("You Cannot Create a Empty ToDo.\nTry Entering a name.");
    } else {
        var to_do_list = document.getElementById("list");
        let list = document.createElement("li");
        list.className = "to-do-item";
        to_do_list.appendChild(list);
        let content = document.createElement("content");
        content.className = "item-content justify-content-between";
        list.appendChild(content);
        let text = document.createElement("p");
        text.className = "item-text";
        text.innerHTML = form_value;
        content.appendChild(text);
        let buttons = document.createElement("div");
        buttons.className = "buttons";
        content.append(buttons);
        let button1 = document.createElement("button");
        button1.className = "delete-button";
        button1.innerHTML = "X";
        buttons.appendChild(button1);
        let button2 = document.createElement("button");
        button2.className = "done-button";
        button2.innerHTML = "Done!";
        buttons.appendChild(button2);
        button1.onclick = function() { list.remove(); };
        button2.addEventListener('click', function() {
            list.style.backgroundColor = "#720303";
            text.style.color = "#fff";
            text.style.textDecoration = "line-through";
            button1.style.backgroundColor = "#fff";
            button1.style.color = "#720303";
        }, false);
    }
}

function clearToDo() {
    var a = document.querySelectorAll("li.to-do-item");
    for (let i = 0; i < a.length; i++) {
        a[i].remove();
    }
}