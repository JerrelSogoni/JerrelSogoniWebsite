import { CONTACT_ME_STATUS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case CONTACT_ME_STATUS:
      switch (action.payload) {
        case 200:
          return true;
        default:
          return state;
      }
    default:
      return state;
  }
}
