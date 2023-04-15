import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])
    
    // contact data is result of server call

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])
    
    // without the empty array at the end of useEffect, every change will refresh the page
    //  with the empty array it will only occur on mount
    
    // If a specific component is identified, it will watch for changes only with that component

    return { contactData, getData:handleDataFetch }
}