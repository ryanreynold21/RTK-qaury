import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Home = () => {
    const [products,setProduct] = useState([])
    const getProduct = async () => {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    },[])
  return (
    <div>
      <div className=" flex flex-wrap gap-8">
        {products?.map(item => <Card key={item.id} item={item} /> )}
      </div>
    </div>
  )
}

export default Home
