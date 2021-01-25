import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadPhotos } from '../lib/slices/photosSlice'

export default ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])

    return React.Children.only(children)
}