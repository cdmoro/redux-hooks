import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../interfaces/user.interface';
import { setUserAction, AppState } from '../redux';

function UserHeader() {
    const dispatch = useDispatch();
    const user = useSelector(({ user }: AppState) => user)

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://rickandmortyapi.com/api/character/1')
            const data = await response.json()

            const user: IUser = {
                name: data.name,
                status: data.status,
                image: data.image,
                location: data.location.name
            }

            dispatch(setUserAction(user))
        }

        fetchUser()
    }, [dispatch])
    
    return (
        <div>
            <h1>User: {user.name}</h1>
            <img src={user.image} alt={`${user.name} avatar`} height="100" />
        </div>
    )
}

export default UserHeader
