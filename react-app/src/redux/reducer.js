import { Types } from "./actionType"

var initialState = {
    token: "",
    userInfo: { uname: "", fname: "", lname: "" }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_USER_INFO:
            state.userInfo = action.payload.user;
            return state;

        case Types.STORE_TOKEN:
            // state.token=action.payload.token;
            // return state;
            return { ...state, token: action.payload.token }

        case Types.REMOVE_TOKEN:
            // state.token="";
            // return state;
            return { ...state, token: '' }

        default: return state;
    }

}
export default reducer;