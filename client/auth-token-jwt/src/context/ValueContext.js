import { createContext, useState } from "react";

const ValueContext = createContext()
export default ValueContext;

export const ValueProvider = ({ children }) => {
    const [value, setValue] = useState(0)
    console.log("value provider render")
    const getValue2 = () => {
        return value
    }

    const incrementCount2 = () => {
        setValue(p => p + 1)
    }

    const decrementCount2 = () => {
        setValue(p => p - 1)
    }

    const data = {
        getValue2,
        decrementCount2,
        incrementCount2
    }

    return (

        <ValueContext.Provider value={data}>
            {children}
        </ValueContext.Provider>

    )
}