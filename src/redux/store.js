import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRoutes } from 'redux-first-router'
import commonReducer from "./reducers/common";
import userReducer from "./reducers/user";
import routesReducer from "./reducers/routes";
import { routesMap } from "./routes/routes";


const { reducer, middleware, enhancer } = connectRoutes(routesMap);

const rootReducer = combineReducers({
    userReducer,
    commonReducer,
    routesReducer,
    location: reducer    
});

const middlewares = applyMiddleware(middleware);
const enhancers = compose(enhancer, middlewares);

const store = createStore(rootReducer, {}, enhancers);
console.log('state: ', store.getState());

export default store;