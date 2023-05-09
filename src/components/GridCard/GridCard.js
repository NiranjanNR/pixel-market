import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import db from '../../firebase'
import { collection,getDocs } from 'firebase/firestore';

const GridCard = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const listCollectionRef = collection(db, 'digital-art');
            const dat = await getDocs(listCollectionRef);
            setTodos(dat.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getList();
    }, []);


    return (
        <div id="Cards" className='ml-6 text-white'>
            <div className=' text-5xl font-semibold tracking-wide pb-2 mb-16 flex justify-center md:text-left'>Your Digital Art</div>
            <div className='overflow-x-scroll flex flex-row gap-4'>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <Card image={todo.image} id={todo.id} title={todo.title || todo.name || "Title"} price={todo.price} count={todo.count || todo.number || "0"} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridCard