import {BOOK_SELECTED} from "../actions";

/*...........................IMPLEMENTING BOOK SELECTED ACTION REDUCER.................................*/
/*..............STATE ARGUMENT IS NOT APPLICATION'S STATE THIS STATE IS OF REDUCER.....................*/
export default function (state = null, action) {
    if (action.type === BOOK_SELECTED) {
        return action.payload;
    }
    return state;
}