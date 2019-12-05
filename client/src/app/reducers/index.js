import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import projectsReducer from "./projectsReducer";

export default combineReducers({
  projects: projectsReducer,
  form: reduxForm
});
