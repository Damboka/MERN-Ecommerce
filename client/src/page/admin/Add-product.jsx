import { useState } from "react";
import AdminSidebar from "../../components/Admin-sidebar";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {

    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/addProduct', { title, price })
        .then(result => {
            console.log(result);
            navigate('/')
        })
        .catch(err => console.log(err))
        if(!title || !price) {
            return;
        }
    }
    return ( 
        <div className="flex justify-center mt-20">
            <div className="w-10/12">
                <div className="grid grid-cols-3">

                    <div className="bg-slate-200 p-5 rounded-md w-60">
                        <AdminSidebar />
                    </div>

                    <form action="" onSubmit={Submit}>
                        <div>
                            <h1 className="text-2xl">Add Product</h1>
                            <div className="mt-5 flex gap-5">
                                <input type="text" placeholder="Enter Name" className="p-2 border border-[#CED4DD] rounded-md outline-none" onChange={(e) => setTitle(e.target.value)} />
                                <input type="text" placeholder="Enter Price" className="p-2 border border-[#CED4DD] rounded-md outline-none" onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className="flex ">
                                <button className="mt-5 bg-[#4B5467] text-white px-5 p-2 rounded-md ">Upload</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
     );
}
 
export default AddProduct;