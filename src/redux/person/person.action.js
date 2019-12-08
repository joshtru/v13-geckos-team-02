import PersonTypes from "./person.types";

export const getPersonDetailsStart = () => ({
  type: PersonTypes.FETCH_PERSON_DETAILS_START
});
export const getPersonDetailsSuccess = result => ({
  type: PersonTypes.FETCH_PERSON_DETAILS_SUCCESS,
  payload: result
});
export const getPersonDetailsFailure = error => ({
  type: PersonTypes.FETCH_PERSON_DETAILS_FAILURE,
  payload: error
});
export const toggleModalWindow = () => ({
  type: PersonTypes.TOGGLE_MODAL_WINDOW
});
