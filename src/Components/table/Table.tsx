import React, { useEffect } from 'react'



export default function Table(props: any) {
    const { data } = props;

    return (
        <div className='w-screen'>
            <table className="w-screen overflow-x-scroll text-xs table-auto xl:text-base border-spacing-x-1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any) => (
                        <tr key={item.id} className='h-12 even:bg-gray-200 odd:bg-slate-300'>
                            <td className='px-[2px]'>{item.id}</td>
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