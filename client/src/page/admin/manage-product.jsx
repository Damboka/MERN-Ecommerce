import { useEffect, useState } from "react";
import AdminSidebar from "../../components/Admin-sidebar";
import axios from 'axios'
import { Link } from "react-router-dom";
const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getAll')
        .then(result => setProducts(result.data))
        .catch(err => console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteProduct/` + id)
        .then(window.location.reload())
        .catch(err => console.log(err))
    }
    return ( 
        <div className="flex justify-center mt-20">
            <div className="w-10/12">
                <div className="grid grid-cols-2">

                    <div className="bg-slate-200 p-5 rounded-md w-60">
                        <AdminSidebar />
                    </div>

                    <div className="grid-cols-1 w-full grid space-y-9">
                        {
                            products.map((product) => (
                                <div className="border-red-500 border h-20 flex items-center p-5 justify-between" key={product._id}>
                                    <div>
                                        <span>{product.title}</span>
                                        <div>
                                            <span>{product.price}</span>
                                        </div>
                                    </div>
                                    <div className="space-x-5">
                                        <button className="bg-green-400 p-2 px-4 text-sm rounded-md"><Link to={`edit/${product._id}`}>Edit</Link></button>
                                        <button onClick={() => handleDelete(product._id)} className="p-2 px-4 bg-red-400 text-sm rounded-md text-white">Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default ManageProduct;