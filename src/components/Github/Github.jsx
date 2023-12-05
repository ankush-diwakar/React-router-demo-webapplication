import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ankush-diwakar')
    //         .then(response => response.json())
    //         .then(data =>
    //             setData(data)
    //         )
    // }, [data])

    const dataL = useLoaderData()
    return (
        <div>
            <div id="mainContainer" className='h-30' style={{backgroundColor:'#000000', borderRadius:50}}>

                <h1 className='text-white'>my github url is : {dataL.url}</h1>
                <div id="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={dataL.avatar_url} alt="" width={150} style={{ borderRadius: 80 , margin:30}} />
                </div>
            </div>


        </div>
    )
}
export const apiDatafetch = async () =>{
      const data = await fetch('https://api.github.com/users/ankush-diwakar');
      return data.json()  
}
export default Github
