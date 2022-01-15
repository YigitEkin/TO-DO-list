function addToDo() {
    let form_value = document.forms["input"]["to-do-name"].value;
    if (form_value === "") {
        alert("You Cannot Create a Empty ToDo.\nTry Entering a name.");
    } else {
        let to_do_list = document.getElementById("list");

        // creating a to do list item
        let list = document.createElement("li");
        list.className = "to-do-item";
        to_do_list.appendChild(list);

        //creating the inner content of list items
        let content = document.createElement("content");
        content.className = "item-content justify-content-between";
        list.appendChild(content);

        // integrating the form value to the list item
        let text = document.createElement("p");
        text.className = "item-text";
        text.innerText = form_value;
        content.appendChild(text);

        //creating the div which has  the  buttons inside
        let buttons = document.createElement("div");
        buttons.className = "buttons";
        content.append(buttons);

        // creating the delete  button
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerText = "X";
        buttons.appendChild(deleteButton);

        // creating the mark as done button      
        let doneButton = document.createElement("button");
        doneButton.className = "done-button";
        doneButton.innerText = "Done!";
        buttons.appendChild(doneButton);

        //adding the onclick methods for the items
        deleteButton.onclick = function() { list.remove(); };
        doneButton.addEventListener('click', function() {
            list.style.backgroundColor = "#720303";
            text.style.color = "#fff";
            text.style.textDecoration = "line-through";
            deleteButton.style.backgroundColor = "#fff";
            deleteButton.style.color = "#720303";
        }, false);
    }
}

function clearToDo() {
    var a = document.querySelectorAll("li.to-do-item");
    for (let i = 0; i < a.length; i++) {
        a[i].remove();
    }
}