import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import db from '../../firebase'
import {
    query,
    collection,
    onSnapshot,
} from 'firebase/firestore';

const GridCard = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'digital-art'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = [];

            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            
            setTodos(todosArr.slice(0,4));
        });
        return () => unsubscribe();
    }, []);

    return (
        <div id="Cards" className='ml-6 overflow-x-scroll text-white'>
            <div className=' text-5xl ml-8 font-semibold tracking-wide pb-2 mb-16 flex justify-center md:text-left'>Your Digital Art</div>
            <div className='flex flex-row gap-4'>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <Card image={todo.image} name={todo.title} price={todo.price} number={todo.count} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridCard