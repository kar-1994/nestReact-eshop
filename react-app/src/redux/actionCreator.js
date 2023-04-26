import { Types } from "./actionType"

export const ActionCreator = {
    addUserInfo: (user) => {
        return {type:Types.ADD_USER_INFO,payload:{user}}
    },
    storeToken:(token)=>{
        return {type:Types.STORE_TOKEN,payload:{token}}
    },
    removeToken:()=>{
        return {type:Types.REMOVE_TOKEN}
    },

}