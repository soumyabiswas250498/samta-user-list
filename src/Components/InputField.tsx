import React, { useState, useEffect } from 'react'

export default function InputField(props: any) {
    const {setDebouncedSearch} = props;
    const [searchInput, setSearchInput] = useState('');
    const [searchHistory, setSearchHistrory] = useState(['']);
    const [focus, setFocus] = useState(false)
    const handleChange = (e: any)=>{
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedSearch(searchInput);
            const tempSearch = localStorage.getItem('search');
            if(tempSearch){
                const tempSearchArr = tempSearch.split(', ')
                setSearchHistrory(tempSearchArr)
            }
            
        }, 750); 
        return () => clearTimeout(debounceTimer);
      }, [searchInput]);

      console.log(searchHistory)

    return (
        <div className='relative w-60'>
            <input type="text" placeholder='Search by name' className='w-full px-2 py-3 rounded-md outline-none focus:rounded-b-none' value={searchInput} onChange={(e) =>{handleChange(e) }} onFocus={() => setFocus(true)} onBlur={()=>{setFocus(false)}} />

            {focus && <div className='absolute z-10 w-full px-2 py-2 overflow-y-auto border border-t-0 border-gray-100 top-12 h-80 rounded-b-md bg-slate-100 custom-scrollbar'>
                {
                    searchHistory.map((item, index: number)=><p key={index} className='py-1'>{item}</p>)
                }
            </div>}

        </div>
    )
}
