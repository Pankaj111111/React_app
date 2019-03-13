
const reset = (state = {counter : 0}, action) =>{
    switch(action.type){
        case "RESET": 
            return  {
                ...state,
                counter: 1
            };
        default:
            return state;
    }
}
export default reset;