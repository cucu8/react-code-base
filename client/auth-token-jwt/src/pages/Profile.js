import React, { useContext } from 'react'
import { useHook1 } from '../hooks/useHook1'
import ValueContext from '../context/ValueContext'

const Profile = () => {
    //* context ile alınmış value
    const { getValue2,
        decrementCount2,
        incrementCount2 } = useContext(ValueContext)

    //* hook ile alınan value
    const { getValue } = useHook1()
    console.log("value profile", getValue())
    console.log("value2 profile", getValue())

    return (
        <div>
            Profile
            <p> hookvalue: {getValue()}</p>
            <p> contextValue: {getValue2()}</p>
        </div>
    )
}

export default Profile