import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';

const store = configureStore({
    reducer : {
        user : UserReducer
    }
});

store.subscribe(()=>
{
    const allState = store.getState();
    localStorage.setItem('userinfo',JSON.stringify(allState.user.value));
})

export default store;