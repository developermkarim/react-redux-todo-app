import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, clearcompleted, completed } from "../redux/actions";

export default function Header() {
    const [input,SetInput] = useState("");
    const [err,SetErr] = useState('')
    const dispatch = useDispatch();
    const inputHandle = (e)=>{
        const inputValue = e.target.value;
        
        SetInput(inputValue);
    };

    const formHandler = (event)=>{
        event.preventDefault();
        if(input.trim() === "" || !(/^[a-zA-Z ]+$/.test(input))){
            SetErr('Please enter a valid name');
            SetInput("")
            return false;
            
        }else{
            dispatch(added(input));
            SetInput('');
            SetErr('')
        }
       
       
    };
    const completeHandler = ()=>{
        dispatch(completed())
    }
    const clearCompleteHandler = ()=>{
        dispatch(clearcompleted());
    }
    return (
        <div>
              <p className="text-red-500 font-medium">{err}</p>
            <form onSubmit={formHandler} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
              
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text" onChange={inputHandle}
                    placeholder="Type your todo"
                    value={input}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span onClick={completeHandler}>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={clearCompleteHandler}>Clear completed</li>
            </ul>
        </div>
    );
}
