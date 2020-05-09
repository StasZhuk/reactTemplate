import UserActionTypes from "redux/types/UserTypes"

export const setUser = user => ({
  type: UserActionTypes.SET_USER,
  payload: user,
})

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
})

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInError = error => ({
  type: UserActionTypes.SIGN_IN_ERROR,
  payload: error,
})

export const userSignOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
})

export const userSignOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const userSignOutError = error => ({
  type: UserActionTypes.SIGN_OUT_ERROR,
  payload: error,
})

export const signUpStart = signUpData => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: signUpData,
})

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
})

export const signUpError = error => ({
  type: UserActionTypes.SIGN_UP_ERROR,
  payload: error,
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})
