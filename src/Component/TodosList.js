import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodosList = () => {
    const getTodosFromLocalStorage = () => {
        const list = localStorage.getItem("MyNewTodoProject");
        if(list){
            return JSON.parse(list);
        }else{
            return [];
        }
    }
    const [todos, setTodos] = useState(getTodosFromLocalStorage());

    let data = Array.from(todos);
    const updateTodoStatus= (e) => {
        if(e.target.checked === true){
            const updatedTodo = data.map(obj => {
                // 👇️ if id equals 2, update country property
                if (obj.id === e.target.value) {
                  return {...obj, todoStatus: true};
                }
          
                // 👇️ otherwise return object as is
                return obj;
              });
              console.log(todos);
              setTodos(updatedTodo);
        }else if(e.target.checked === false){
            const updatedTodo = data.map(obj => {
                // 👇️ if id equals 2, update country property
                if (obj.id === e.target.value) {
                  return {...obj, todoStatus: false};
                }
          
                // 👇️ otherwise return object as is
                return obj;
              });
              console.log(todos);
              setTodos(updatedTodo);
        }
        //console.log(e.target.checked);
      
          
    }
    
    const fatchTodosFromUser = (userTodo) => {
        const updatetodos = {
            id: Math.random().toString(),
            todoTitle : userTodo,
            todoStatus : false
        };
        setTodos([...todos, updatetodos]);
    }

    useEffect(()=>{
        localStorage.setItem("MyNewTodoProject", JSON.stringify(todos));
    },[todos]);

    const deleteTodo = (index) => {
        const updateTodo = todos.filter((todo)=>{
            return todo.id !== index;
        })
        setTodos(updateTodo);
    }

    let falsetodos = data.filter(i => i.todoStatus === false);
    let truetodos = data.filter(i => i.todoStatus === true);
    return (
        <>
            <div className="container">
                <h6 className="display-6">Add New Todo.</h6>
                <Todo myTodos={fatchTodosFromUser} />
                {falsetodos.length === 0 ? <h6 className="display-6">Oohh! you have't any job.</h6> : ""}
                {
                    falsetodos.map((todo)=>{
                        return(
                            <ul key={todo.id} className="list-group  list-group-horizontal">
                                <li className="list-group-item col-md-4" >
                                    <input className="form-check-input me-1" type="checkbox" value={todo.id} onChange={updateTodoStatus} />
                                    
                                    {todo.todoTitle}
                                    
                                </li>
                                <li className="list-group-item" onClick={() => {deleteTodo(todo.id)}}><i className="fa fa-trash"></i></li>
                            </ul>
                            
                        )
                    })
                }
                <br />
                <br />
                {truetodos.length === 0 ? "" : <h6 className="display-6">Yahooo! You done these jobs.</h6>}
                {
                    truetodos.map((todo)=>{
                        return(
                            <ul key={todo.id} className="list-group list-group-horizontal">
                                <li className="list-group-item col-md-4 text-decoration-line-through">
                                    <input className="form-check-input me-1" type="checkbox" value={todo.id} onChange={updateTodoStatus} checked />
                                    
                                    {todo.todoTitle}
                                    
                                </li>
                                <li className="list-group-item" onClick={() => {deleteTodo(todo.id)}}><i className="fa fa-trash"></i></li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    );
}

export default TodosList;