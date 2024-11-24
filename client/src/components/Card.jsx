import { ShoppingCart } from 'lucide-react';
import axios from 'axios'
import { useEffect, useState } from 'react';
const Card = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getAll')
        .then(result => {
            console.log(result.data);
            setProducts(result.data); // ან რასაც აკეთებ მონაცემებით
        })
        .catch(err => console.log(err))
    }, [])
    return ( 
        <div className="w-10/12">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
                {
                    products.map((product) => (
                        <div className="border-[#CDCDCD] border bg-[#EAEBF1] py-2" key={product._id}>
                        <div className='flex justify-center'>
                            <img src="/iphone.jpeg" width={230} />
                        </div>
                        <div className="flex justify-center mt-2">
                            <span className="text-[#7E8081]">{product.title}</span>
                        </div>
                        <div className="flex justify-center mt-2">
                            <span>{product.price}$</span>
                        </div>
                        <div className='flex justify-around p-4 gap-x-3 items-center'>
                            <button className='bg-[#4B5467] p-2 text-sm text-white rounded-sm'>View Details</button>
                            <button className='bg-[#4B5467] p-2 text-sm text-white rounded-sm'><ShoppingCart size={20}/></button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Card;