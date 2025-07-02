import { createContext, useContext, useState } from "react";
export const LoginCartContext = createContext()


export const ForLoginUser = (({ children }) => {
    const [isLoginCart, setIsLoginCart] = useState(false)
    return (
        <LoginCartContext.Provider value={{ isLoginCart, setIsLoginCart }}>
            {children}
        </LoginCartContext.Provider>
    )

})

// Custom hook for convenience
export const useLoginUser = () => useContext(LoginCartContext); 