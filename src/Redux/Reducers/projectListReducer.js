import { createSlice } from '@reduxjs/toolkit'

export const projectList=createSlice( {
    name:'projectList',
    initialState:{
        value:[1,2,4],
    },
    reducers:{
        list:(state,action)=>{
           debugger
             state.value=action.payload
        }
    }
})

export const {list} =projectList.actions
export default projectList.reducer
//bunlar createSlice ın oluşturup döndürdüğü birşey
