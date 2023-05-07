import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import db from '../../firebase'
import { collection,getDocs } from 'firebase/firestore';


const GridCard = () => {

    const [todos, setTodos] = useState([]);

    const listCollectionRef = collection(db , "digital-art");

    useEffect(() => {
        const getList = async () =>{
            const dat = await getDocs(listCollectionRef);
            setTodos(dat.docs.map((doc)=>({...doc.data(),id:doc.id})))
          }
          getList();
    }, [listCollectionRef]);

    return (
        <div id="Cards" className='ml-6 overflow-x-scroll text-white'>
            <div className=' text-5xl ml-8 font-semibold tracking-wide pb-2 mb-16 flex justify-center md:text-left'>Your Digital Art</div>
            <div className='flex flex-row gap-4'>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <Card image={todo.image} id={todo.id} title={todo.title} price={todo.price} count={todo.count} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridCard