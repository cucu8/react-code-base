import React, { useContext } from 'react'
import { useHook1 } from '../hooks/useHook1'
import ValueContext from '../context/ValueContext';


const Home = () => {
    //* context ile alınmış value
    const { getValue2,
        decrementCount2,
        incrementCount2 } = useContext(ValueContext)


    //* hook ile alınmış value,
    const { getValue,
        decrementCount,
        incrementCount } = useHook1();
    console.log("home refresh state değiştiği yer")
    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            Home
            <button onClick={incrementCount}>use hokk veriyi arttır</button>
            <span>veri: {getValue()}</span>
            <div>-----------------------------------------------------</div>
            <button onClick={() => incrementCount2()} >context veriyi arttıt</button>
            <span> value2:{getValue2()}</span>
        </div>
    )
}

export default Home