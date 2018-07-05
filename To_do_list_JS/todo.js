var toDoList = [];
window.setTimeout(function(){    
    
    var resp = prompt("What would you like to do?");

    while(resp!="quit") {

        if(resp==="new"){

            addNew();

        } 
        else if(resp==="list"){
            
            listToDos();
            
        } else if(resp==="delete") {

            deleteTodo();
        }
        resp = prompt("What would you like to do?");
    }    

},500)

function listToDos() {
    console.log("************");
    toDoList.forEach(function(toDo, i){

    // console.log("************");
    console.log(i+": "+toDo);
                
    })
    console.log("************");
}

function addNew (){

    resp = prompt("Enter a new todo")
    toDoList.push(resp);
    console.log(resp+" added to the list.");
}

function deleteTodo() {

    resp = prompt("Enter index to delete")
    delTodo = toDoList[resp];
    toDoList.splice(resp,1);
    console.log(delTodo+" has been Deleted")
}

