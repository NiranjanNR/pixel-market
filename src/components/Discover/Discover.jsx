import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import db from '../../firebase';
import {
    query,
    collection,
    onSnapshot,
    where,
    orderBy,
} from 'firebase/firestore';

const Discover = () => {
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {


        const unsubscribe = onSnapshot(collection(db, 'digital-art'), (querySnapshot) => {
            const todosArr = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    todosArr.push({ ...data, id: doc.id });
                  }
            });

            setTodos(todosArr);
        });

        return () => unsubscribe();
    }, [searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <NavBar />
            <div>
                <div className='flex flex-col w-[70%] mx-auto py-6'>
                    <h2 className='text-center text-3xl font-semibold text-white'>Search Products</h2>
                    <div className='relative mt-4'>
                        <input
                            className='w-full h-[50px] bg-gray-500/25 rounded-lg px-6'
                            type='text'
                            placeholder='Enter..'
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    <div className='absolute right-3 bottom-3'>
                        <FaSearch className='text-white text-2xl' />
                    </div>
                   </div>
                </div>
                <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {todos.map((todo) => (
                        <Card
                            key={todo.id}
                            image={todo.image}
                            title={todo.title || todo.name || "Title"}
                            price={todo.price}
                            count={todo.count || todo.number || "0"}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Discover;
