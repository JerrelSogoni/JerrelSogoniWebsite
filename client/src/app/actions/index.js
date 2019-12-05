import axios from "axios";
import { FETCH_PROJECTS } from "./types";
export const fetchProjects = () => async dispatch => {
  const res = await axios.get("/api/projects");
  dispatch({ type: FETCH_PROJECTS, payload: res.data });
};

export const submitContact = values => async dispatch => {
  const res = await axios.post("/api/contactme", values);
};
