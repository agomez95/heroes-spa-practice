import { useReducer } from "react"

import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

// const initialState = {
//     logged: false
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return{
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {

        const user = { name }

        const action = {
            type: types.login,
            payload: {
                name: name
            }
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user')

        const action = {
            type: types.logout
        }

        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            // aqui manda el estado del usuario a sus hijos para que hagan lo que deseen(user)
            ...authState, 
            // Metodos enviados por el provider para hijos
            login, 
            logout
        
        }}>
            {children}
        </AuthContext.Provider>
    )
}
