import { createStore,applyMiddleware} from 'redux';
import mainReducer from '../reducers';

const logger = store => next => action => {
    console.log("Dispactching",action.type);
    let result = next(action);
    console.log("Reduc Store State",store.getState());
    return result;
}
const store = createStore(mainReducer,applyMiddleware(logger));
export default store;