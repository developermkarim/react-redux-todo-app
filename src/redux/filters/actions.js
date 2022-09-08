import { COLORCHANGED, STATUSCHANGED } from "./actionType"

export const colorchange = (color,changeType)=>{
    return {
        type:COLORCHANGED,
        payload:{
            color,
             changeType
        }
    }
}

export const statusChange = (status)=>{
    return{
        type:STATUSCHANGED,
        payload:status,

    }
} 