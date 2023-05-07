import { useEffect, useState } from 'react'
import Cardbig from '../Cardbig/Cardbig'
import Cardsmall from '../Cardsmall/Cardsmall'
import  db  from '../../firebase'
import {
    query,
    collection,
    onSnapshot,
} from 'firebase/firestore';

const Explore = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'explore-digart'));
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
    <div className='text-white '>
      <div className=' text-5xl ml-8 font-semibold tracking-wide pb-2 mt-5 flex justify-center md:text-left'>Explore These Amazing Works</div>
      <div className='lg:mr-10'>
        <div className='mt-5 lg:flex justify-center'>
          {todos && todos.length > 0 && (
            <div className="mx-4">
              <Cardbig key={todos[0].id} image={todos[0].image} name={todos[0].name} price={todos[0].price} number={todos[0].number} />
            </div>
          )}
          <div className="flex flex-col">
            {todos && todos.length > 1 && todos.slice(1).map((todo, index) => (
              <Cardsmall key={todo.id} image={todo.image} name={todo.name} price={todo.price} number={todo.number} />
            ))}
          </div>
        </div>




      </div>
    </div>
  )
}

export default Explore