import { useEffect, useState } from 'react'
import  db  from '../../firebase'
import {
    collection,
    onSnapshot,getDocs
} from 'firebase/firestore';

const FeaturePage = () => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, "explore-digart"), (snapshot) => {
        const todosArr = [];
        snapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        },[]);
  
       
        getDocs(collection(db, "digital-art")).then((digitalArtSnapshot) => {
     
          const filteredTodos = todosArr.filter((todo) => {
            const imageExists = digitalArtSnapshot.docs.some(
              (doc) => doc.data().image === todo.image
            );
            return !imageExists;
          });
  
          setTodos(filteredTodos);
        });
      });
  
      return () => unsubscribe();
    }, []);
  
    return (
      <section className=" bg-[#141416] my-40  ">
        <div className="container flex gap-8 max-lg:flex-col ">
          {todos.slice(0, 1).map((todo) => (
            <>
              <div className="">
                <img
                  className="lg:w-[490px] lg:h-[600px] w-[190px] h-[300px] object-cover rounded-xl mx-auto"
                  src={todo.image}
                  alt={todo.name}
                />
              </div>
              <div className="flex flex-col w-full gap-2 justify-center items-center">
                <h2 className="text-4xl md:text-6xl text-[#FCFCFD] mb-12">{todo.title}</h2>
                <div className="flex gap-4 font-bold items-center">
                  <span className="p-1 text-[#45b26b] border-[#45b26b] border-[2px] rounded-[4px]">
                    {todo.price}
                  </span>
                  <span className="text-base text-[#777E90]">
                    {todo.number} in stock
                  </span>
                </div>
                <div className="mt-6 text-base text-[#777E90] md:max-w-[80%]">
                  <p>{todo.description}</p>
                </div>
                <div className="flex justify-center">
  <button className="mt-8 w-32 h-12 px-6 text-bold inline-flex justify-center items-center bg-[#4437ff] text-white whitespace-nowrap">
    Buy Now
  </button>
</div>

              </div>
            </>
          ))}
        </div>
      </section>
    );
  };
  
  
  
export default FeaturePage