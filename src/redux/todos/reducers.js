import { ADDED, CLEARCOMPLETED, COLORSELECTED, ALLCOMPLETED, DELETED, TOGGLED } from "./actionType";
import { initialState } from "./initialState";

const nextTodoId = todos=>{
    const mximumId = todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1);
    return mximumId + 1;
}

export const reducers = (state = initialState, action)=>{
    switch (action.type) {
        case ADDED:
          return [
            ...state,
            {
                id:nextTodoId(state)
            }
          ]
    
       case TOGGLED:
        return state.map(todo=>{
            if(todo.id !== action.payload){
                return todo;
            }
            return {
                ...todo,
                completed:!todo.completed,
            }
        });

        case COLORSELECTED:
            const {todoid,color} = action.payload;
            return state.map(todo=>{
                if(todo.id !== todoid){
                    return todo;
                }
                return{
                    ...todo,
                    color:color
                }
            });

            case DELETED:
                return state.filter(todo=>todo.id !== action.payload);
                case ALLCOMPLETED:
                    return state.map(todo=>{
                        return {
                            ...todo,
                            completed:true,
                        }
                    });
                    case CLEARCOMPLETED:
                        return state.filter(todo=> !todo.completed)
                    default:
                        break;
    }
}