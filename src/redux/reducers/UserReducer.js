import UserActionTypes from "redux/types/UserTypes"

const INITIAL_STATE = {
  profile: null,
  cartItems: [],
  error: null,
}

// Updates error message to notify about the failed fetches.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
      return state

    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        error: null,
      }

    case UserActionTypes.SIGN_IN_ERROR:
    case UserActionTypes.SIGN_OUT_ERROR:
    case UserActionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        profile: null,
      }

    default:
      return state
  }
}

export default userReducer
