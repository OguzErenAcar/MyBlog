 import { configureStore } from '@reduxjs/toolkit'
import projectList from "./Slices/projectListSlice"
import projectDetails from "./Slices/projectDetailsSlice"
import thunk from 'redux-thunk'


export default configureStore({
	reducer: {
        projectList:projectList,
		projectDetails:projectDetails
	},
	middleware: [thunk]
})