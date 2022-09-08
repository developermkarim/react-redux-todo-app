import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state)=>state.todos);
     const filters = useSelector((state)=>state.filters);
     const filterByStatus = (item) => {
        const {status} = filters;
        switch(status){
            case 'Complete':
                return item.completed;

                case 'Incomplete':
                    return !item.completed;
                default:
                    return true;
        }
    };

    const filterByColor = (tdcolor)=>{
        const {colors} = filters;
      
           if(colors.length > 0){
                return colors.includes(tdcolor?.color)
           }
           return true;
    };
    console.log(todos);
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            
            {
            todos.filter(filterByStatus)
            .filter(filterByColor)
                .map((todo)=>
                    <Todo todo={todo} key={todo.id} />
                )
            }
            
        </div>
    );
}
