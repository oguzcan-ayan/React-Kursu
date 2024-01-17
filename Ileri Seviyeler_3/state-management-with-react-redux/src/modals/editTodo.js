import { useEffect, useState } from "react";
import { updateTodo } from "../stores/todo";
import { useDispatch, useSelector } from "react-redux";

export default function EditTodo({ data, close }){

    const [todo, setTodo] = useState(data.title);
    const [done, setDone] = useState(data.done);
    const dispatch = useDispatch();
    const {todos} = useSelector(state => state.todo);

    const submitHandle = e => {
        e.preventDefault();

        dispatch(updateTodo({
            id: data.id,
            title: todo,
            done: true
        }))

        close();
    }
    

    // console.log(data);

  /*   const completed = () => {
        if(data.done === true){
            console.log("dsfsfds");
        }
    } */

    return (
        <div>
            <form onSubmit={submitHandle}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                <br/>
                <label>
                    <input /* className="checkMark" */ type="checkbox" checked={done} onChange={e => setDone(e.target.checked)}/>
                    Mark as completed
                </label>
                <br/>
                <button type="submit" /* onClick={completed} */>Save Changes</button>
            </form>
            <button onClick={close}>Shut Down</button>
        </div>
    )

}

