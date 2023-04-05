import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../features/country/services'
import { toast } from 'react-hot-toast'

const RtookitApi = () => {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries.countries)
    const loading = useSelector(state => state.countries.loading)
    const error = useSelector(state => state.countries.error)
    console.log(countries)
    useEffect(() => {
        dispatch(getCountry())
    }, [])

    if (loading) return <div>Loading...</div>

    if (error) return <div>{JSON.stringify(error)}</div>

    return (
        <div className='p-10' >

            {JSON.stringify(countries)}
        </div>
    )
}

export default RtookitApi