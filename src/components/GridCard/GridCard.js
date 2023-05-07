import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import  db  from '../../firebase'
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
            setTodos(todosArr);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div id="Cards" className='ml-6 overflow-x-scroll text-white'>
            <div className='flex flex-row gap-4'>
                {todos.map((todo) => (
                    <div>
                        <Card image={todo.image} name={todo.name} price={todo.price} number={todo.number} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridCard