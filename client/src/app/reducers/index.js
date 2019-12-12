import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import projectsReducer from "./projectsReducer";
import contactMeReducer from "./contactMeReducer";

export default combineReducers({
  projects: projectsReducer,
  form: reduxForm,
  contactMe: contactMeReducer
});
