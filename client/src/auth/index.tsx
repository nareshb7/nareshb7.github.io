import React, { createContext, useContext, useState } from 'react'
import { AuthContextModal, Mode } from './type';

const AuthProvider = createContext<AuthContextModal>({} as AuthContextModal)
const DEFAULT_MODE = 'dark';
const AuthContext = ({children}: {children: JSX.Element}) => {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE)
  const value: AuthContextModal = {
    mode, setMode
  }
  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  )
}

export default AuthContext

export const useAuthContext =() => useContext(AuthProvider)