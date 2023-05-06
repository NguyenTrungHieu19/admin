import { useState, useEffect } from "react"
import { List } from "./list"
export const ListData =()=>{
        const [Data, setData] = useState([])
        const Api ='https://645650de2e41ccf169199372.mockapi.io/data'
    useEffect(()=>{
        fetch(Api,{
            method:"GET"
        })
         .then(res=>res.json())
         .then(res=>{
            setData(res)
         })
    },[])
   
    return(
        <>
            {
                Data.map((item, index)=>{
                   return(                      
                      <List key={index}
                            id={item.id}
                            email={item.email}
                            username={item.username}
                            fullname={item.fullname}
                            department={item.department}
                            position={item.position}
                            createdate={item.createdate}
                        />
                         
                    )
                })
            }
        </>
    )
}