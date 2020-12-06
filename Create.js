const list = [];

const add_button = document.querySelector("#add_button");
add_button.onclick = add_list;

function add_list(){
    const text = document.querySelector("#add").value;
    const add = document.querySelector("#add");

    if(text !== "") {
        add.value = "";
        add.focus();
    }
    add_show_list();
}

function add_show_list(){
    const additional_list = "<ul>";
    for(const i=0; i<list.length; i++){
        additional_list += "<li>" + list.length[i] + "<span id = " + i + "> X </span></li>";
    }
    additional_list += "</ul>";
    
    document.querySelector("list").innerHTML = additional_list;
}