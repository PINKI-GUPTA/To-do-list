//creation of todolist list elements 
function creating_list_div(input_value) {

    if(document.getElementById("todo_list").contains(document.getElementById("htag"))){
        document.getElementById("htag").remove();
    }

    let listbox=document.getElementById("todo_list");

    let new_list_element = document.createElement("div");
    let new_list_text = document.createElement("div");
    let new_list_check= document.createElement("button");
    let new_list_delete = document.createElement("button");

    new_list_element.className="list_element";
    new_list_text.className="new_list_text";
    new_list_check.className="new_list_check";
    new_list_delete.className="new_list_delete";

    new_list_check.style.backgroundColor="rgb(97, 196, 31)";
    new_list_delete.style.backgroundColor="rgba(243, 29, 29, 0.849)";
    new_list_check.addEventListener("click", check_task);
    new_list_delete.addEventListener("click", delete_task);

    new_list_delete.innerHTML="Remove";
    new_list_check.innerHTML="Done"
    new_list_text.innerHTML=input_value;
    new_list_element.appendChild(new_list_text);
    new_list_element.appendChild(new_list_check);
    new_list_element.appendChild(new_list_delete);
    listbox.appendChild(new_list_element);
}

//when no element is there then to display default msg
function empty_list_check(){
    let listbox=document.getElementById("todo_list");
    let list_element=document.getElementsByClassName("list_element");
    if(list_element.length==0){
        // let hdiv = document.createElement("div");
        // hdiv.id="htag";
        // hdiv.innerHTML= "NO TASK IS THERE !!";
        // listbox.appendChild(hdiv);
        listbox.innerHTML=`<div id= "htag"> <h2> NO TASK IS THERE !!! <br><br>Be active and add some.</h2> </div>`;
    }
}

empty_list_check();

let button = document.getElementById("button");
let delete_button=document.getElementsByClassName("new_list_delete");
let check_button=document.getElementsByClassName("new_list_check");

function addition_in_todo_list() {
    let userInput = document.getElementById("add_field").value;
    //to check user is user enter a null string 

    let text_array=[];
    if(userInput!=""){ 
        let task_collection=document.getElementsByClassName("new_list_text");
        for (let i = 0; i < task_collection.length; i++) {
        text_array[i] = task_collection[i].textContent;
        }
        if(text_array.every(element=> !element.includes(userInput) )){
            creating_list_div(userInput);
        }
    }
}

button.addEventListener("click", addition_in_todo_list);

button.addEventListener("mouseover", function() { mover(button, " rgb(56, 7, 102)")});
//check_button.addEventListener("mouseout", function() { mout(check_button,"rgb(56, 7, 102)")});
//delete_button.addEventListener("mouseout", function() { mout(delete_button,"rgb(56, 7, 102)")});

//for mouseover properties of buttons
function mover(element, element_color) {
    element.style.backgroundColor =element_color;
    element.style.color = "";
}

button.addEventListener("mouseout", function() { mout(button)});
//check_button.addEventListener("mouseout", function() { mout(check_button)});
//delete_button.addEventListener("mouseout", function() { mout(delete_button)});
//for mouseout properties of buttons
function mout(element) {
    element.style.backgroundColor=""; 
}

function delete_task(event){
    event.target.parentElement.remove();
    empty_list_check();
}
function check_task(event){
    event.target.parentElement.firstElementChild.style.textDecoration = "line-through";
     
}
