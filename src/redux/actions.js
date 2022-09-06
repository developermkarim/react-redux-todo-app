import { ADDED, CLEARCOMPLETED, COLORSELECTED, COMPLETED, DELETED, TOGGLED } from "./actionType"

export const added = todoText =>{
    return{
        type:ADDED,
        payload:todoText
    }
}
export const toggled = todoid =>{
    return {
        type:TOGGLED,
        payload:todoid
    }
}
export const colorselected = (todoid,todoText) =>{

    return {
        type:COLORSELECTED,
        payload:{
            todoid,
             todoText, /* As Property and Value name are same,SO only value name can be used           by destructering */
        }
    }
}

export const deleted = todoid =>{
    return{
        type:DELETED,
        payload:todoid

    }
}

export const completed = ()=>{
    return{
        type:COMPLETED
    }
}
export const clearcompleted = ()=>{
    return {
        type:CLEARCOMPLETED
    }
}