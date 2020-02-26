import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState, fetchUserAction } from '../redux';

function UserHeader() {
    const dispatch = useDispatch();
    const user = useSelector(({ user }: AppState) => user)

    useEffect(() => {
        dispatch(fetchUserAction())
    }, [dispatch])
    
    return (
        <div>
            <h1>User: {user.name}</h1>
            <img src={user.image} alt={`${user.name} avatar`} height="100" />
        </div>
    )
}

export default UserHeader
