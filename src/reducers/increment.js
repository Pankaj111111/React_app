
const increment = (state = {counter : 0}, action) =>{
    switch(action.type){
        case "INCREMENT": 
            return {
                    ...state,
                    counter: state.counter + action.payload >= 10 ? 10 : state.counter  + action.payload
                };
        case "DECREMENT": 
            return  {
                ...state,
                counter: state.counter - action.payload <= 0 ? 0 : state.counter -action.payload
            };
        case "RESET": 
            return  {
                ...state,
                counter: 0
            };
        default:
            return state;
    }
}
export default increment;