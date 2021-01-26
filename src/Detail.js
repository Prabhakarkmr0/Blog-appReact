import React ,{useState,useEffect} from 'react'


function Detail({match}) {

    useEffect(() => {
        fetchItem()
        // console.log(match)
    })

   const [cont, setItem] = useState({})

    const fetchItem = async () =>{
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        const cont = await fetchItem.json()
        // console.log(cont)
        setItem(cont)
    }

    return (
        <div>
            <h1>{cont.body}</h1>
        </div>
    )
}

export default Detail
