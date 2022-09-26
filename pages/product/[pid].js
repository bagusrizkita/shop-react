import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    const [product, setProduct] = useState([])


    const getProduct = async () => {
        try {
            let response = await axios({
                method: 'GET',
                url: `https://fakestoreapi.com/products/${pid}`,
            })
                .then(function (response) {
                    setProduct(response.data)
                    // console.log(response.data)
                })
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProduct();
    }, [pid]);


    return <p>Post: {product.title} <br /> {product.description}</p>
}

export default Post