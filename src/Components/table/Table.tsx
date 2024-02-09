import React, { useEffect } from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

export default function Table(props: any) {
    const { data, setSort, sort } = props;

    return (
        <div className='w-screen'>
            <table className="w-screen overflow-x-scroll text-xs table-auto xl:text-base border-spacing-x-1">
                <thead className='border '>
                    <tr className='text-white '>
                        <th>id</th>
                        <th className='flex items-center justify-center gap-2' onClick={()=>{setSort((prev:any)=>!prev)}}>Name {sort ? <BiSolidUpArrow /> :  <BiSolidDownArrow />}</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any, index: any) => (
                        <tr key={item.id} className='h-12 even:bg-gray-200 odd:bg-slate-300'>
                            <td className='px-[2px]'>{index+1}</td>
                            <td className='px-[2px]'>{item.name}</td>
                            <td className='px-[2px]'>{item.username}</td>
                            <td className='px-[2px] '>{item.phone}</td>
                            <td className='px-[2px]'>{item.email}</td>
                            <td className='px-[2px]'>{item.website}</td>
                            <td className='px-[2px] xl:text-[14px] w-48'>{`${item.address.suite}, ${item.address.street}, ${item.address.city}, zip - ${item.address.zipcode}`}</td>
                            <td className='px-[2px]'>{item.company.name}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}