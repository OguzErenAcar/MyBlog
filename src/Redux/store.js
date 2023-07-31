 import { configureStore } from '@reduxjs/toolkit'
import projectList from "./Reducers/projectListReducer"


export default configureStore({
	reducer: {
        projectList:projectList
	},
})