import { createSlice } from "@reduxjs/toolkit";

function getLocalData()
{
    const uinfo = localStorage.getItem('userinfo');
    if(uinfo==undefined){
        return {
            islogin : false , 
            name : undefined,
            token : undefined,
            role : undefined
        }
    }else
        return JSON.parse(uinfo)
}

const slice = createSlice({
    name : 'userslice',
    initialState:{
        value : getLocalData()
    },
    reducers:
    {
        setUserData : (state,action)=>{

            state.value = {...action.payload,islogin:true}
        },
        delUserData : (state,action)=>{
            state.value = {
                islogin : false , 
                name : undefined,
                token : undefined,
                role : undefined
            }
        }
    }
})

export default slice.reducer;
export const {setUserData,delUserData} = slice.actions;