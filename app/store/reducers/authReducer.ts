import type {UserState, UserActionsType, UserDataType} from 'app/types/user'

export function authReducer(
  state: UserState,
  action: UserActionsType
): UserState {
  let userCopy: UserDataType
  let updatedUser: UserDataType
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
      }
    case 'logout':
      return {
        ...state,
        user: null,
      }
    case 'edit':
      userCopy = Object.assign({}, state.user)
      updatedUser = Object.assign({...userCopy}, action.payload)
      return {
        ...state,
        user: updatedUser,
      }
    default: {
      throw new Error(`Unhandled type at ${action} action`)
    }
  }
}
