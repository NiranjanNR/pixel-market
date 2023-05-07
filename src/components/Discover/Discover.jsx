import React, { useEffect, useState } from 'react';
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
    const q = query(
      collection(db, 'digital-art'),
      orderBy('title'),
      where('title', '>=', searchTerm),
      where('title', '<=', searchTerm + '\uf8ff')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];

      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });

      setTodos(todosArr.slice(0, 4));
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
        <div className='flex flex-col w-[70%] mx-auto'>
          <label className='text-2xl text-white '>Search Products</label>
          <input
            className='rounded-md px-3 py-1'
            type='text'
            placeholder='Enter..'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {todos.map((todo) => (
            <Card
              key={todo.id}
              image={todo.image}
              name={todo.title}
              price={todo.price}
              number={todo.count}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
