import * as React from 'react'

import type {UserState, UserDispatchType} from 'app/types/user'

export const AuthStateContext = React.createContext<UserState | undefined>(
  undefined
)
AuthStateContext.displayName = 'Auth State Context'

export const AuthDispatchContext = React.createContext<
  UserDispatchType | undefined
>(undefined)

AuthDispatchContext.displayName = 'Auth Dispatch Context'
