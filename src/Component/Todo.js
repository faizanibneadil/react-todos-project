import React, { useState } from "react";

const Todo = (props) => {
    const [userTodoValue, setUserTodoValue] = useState("");
    const [checkErrors, setCheckErros] = useState(false);
    //const [fatchTodos, setFatchTodos] = useState("");
    
    
    //className={"badge " +(this.state.value ? "badge-primary " : "badge-danger ") +" m-4"}
    
    const SubmitTodoForm = (e) => {
        e.preventDefault();
        if(!userTodoValue){
            setCheckErros(true);
        }else{
            props.myTodos(userTodoValue)
            //console.log(todos);
            setUserTodoValue("");
        }
        
        //console.log(userTodoValue);
    }
    const inputValue = (e) => {
        setUserTodoValue(e.target.value)
        setCheckErros(false)
    }
    
    return(
        <>
            <form onSubmit={SubmitTodoForm}>
                <div className="col-md-4">
                    <div className={"input-group " +(checkErrors ? "has-validation" : " ")}>
                        <input
                            value={userTodoValue}
                            onChange={inputValue}
                            placeholder="Write your Todo"
                            type="text" 
                            className={"form-control " +(checkErrors ? "is-invalid" : " ")} 
                            id="validationServerUsername" 
                            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
                             />
                        <button className="btn btn-outline-secondary">Got it!</button>
                        <div id="validationServerUsernameFeedback" className="invalid-feedback">
                            Tell me the job, what should i do, who should i eat?
                        </div>
                    </div>
                </div>
            </form>
            <br />
        </>
    );
}

export default Todo;