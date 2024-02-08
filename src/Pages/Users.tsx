import React, { useEffect } from 'react'
import { useUserData } from '../Hooks/useUserData';
import { useSelector } from 'react-redux'
import Table from '../Components/table/Table'
export default function Users() {
    const { getUserData } = useUserData()
    const { data, isLoading } = useSelector((state: any) => state.UserData)
    console.log(data)
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div>
            <Table data={data} />
        </div>
    )
}
