import { useEffect, useState } from "react"

const useInternetConn = ()=>{

    const [Connstatus,setConnStatus] = useState(true)

    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setConnStatus(navigator.onLine);
        });
        window.addEventListener("online",()=>{
            setConnStatus(navigator.onLine);
        });
    },[]);

return Connstatus;

}

export default useInternetConn;