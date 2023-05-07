import React from 'react'
import { useEffect, useState } from 'react'
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';

import Card from '../Card/Card'
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../NavBar/NavBar';

const ProductPage = () => {

    const { id } = useParams();

    const [todos, setTodos] = useState([]);
    const [requiredProduct, setRequiredProduct] = useState([])

    const listCollectionRef = collection(db, "digital-art");

    useEffect(() => {
        const getList = async () => {
            const dat = await getDocs(listCollectionRef);
            setTodos(dat.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getList();
        setRequiredProduct((todos.filter((item) => item.id === id)))
    }, [id, todos, listCollectionRef]);


    return (
        <div>
            <NavBar />
            <section className="p-12 bg-[#141416] my-32">

                <div className=''>
                    {requiredProduct.map((todo) => (
                        <div key={todo.id}>
                            <ProductCard image={todo.image} id={todo.id} title={todo.title} price={todo.price} count={todo.count} description={todo.description} />
                        </div>
                    ))}
                </div>
                <div className='flex flex-row justify-between items-center mt-44 mb-10'>
                    <h1 className='text-white text-5xl font-semibold'>Related Products</h1>
                </div>
                <div className='flex flex-row gap-4 text-white'>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            <Card image={todo.image} id={todo.id} title={todo.title} price={todo.price} count={todo.count} />
                        </div>
                    ))}
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}
export default ProductPage