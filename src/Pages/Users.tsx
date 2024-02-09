import React, {useState, useEffect } from 'react'
import { useUserData } from '../Hooks/useUserData';
import { useSelector } from 'react-redux'
import Table from '../Components/table/Table'
import InputField from '../Components/InputField';


interface UserData {
    id: number;
    name: string;
    username: string;
    phone: string;
    email: string;
    website: string;
    address: {
      suite: string;
      street: string;
      city: string;
      zipcode: string;
    };
    company: {
      name: string;
    };
  }


export default function Users() {
    const [debouncedSearch, setDebouncedSearch] = useState<string>('');
    const [useData, setUserData] = useState<UserData[]>([]);
    const { getUserData } = useUserData()
    const { data, isLoading } = useSelector((state: any) => state.UserData);
    const [sort, setSort] = useState(false)
    useEffect(()=>{
        if(debouncedSearch){
            let temp = data.filter((item: UserData)=>item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) );
            setUserData(temp)
            const prevSearch = localStorage.getItem('search');
            // console.log(prevSearch)
            localStorage.setItem('search', `${prevSearch||''}, ${debouncedSearch}`)
        }else{
            if(sort){
                let tempData = [...data]
                tempData.sort((a:UserData, b: UserData) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });
                setUserData(tempData)

            }else{
                let tempData = [...data]
                tempData.sort((a:UserData, b: UserData) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
                setUserData(tempData)
            }
            // setUserData(data)
        }

    }, [debouncedSearch, data, sort])
    console.log(debouncedSearch)
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div className='w-full h-screen overflow-x-hidden'>
            <div className='flex items-center justify-center w-full py-6'>
                <InputField setDebouncedSearch={setDebouncedSearch} />
            </div>
            {isLoading ? <div className='flex items-center justify-center h-40'>
                <div className=" loader"></div>
            </div> :
                <Table data={useData} setSort={setSort} sort={sort} />
            }

        </div>
    )
}
