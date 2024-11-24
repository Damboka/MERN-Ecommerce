import { useEffect, useState } from "react";
import AdminSidebar from "../../components/Admin-sidebar";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const EditProduct = () => {
    const { id } = useParams()
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")

    const navigate = useNavigate()

   useEffect(() => {
    axios.get('http://localhost:3001/getProduct/' + id)
    .then(result => {
        setTitle(result.data.title)
        setPrice(result.data.price)
    })
    .catch(err => console.log(err))
   }, [id])


   const Update = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3001/updateProduct/' + id, { title, price })
    .then(navigate('/admin'))
    .catch(err => console.log(err))
   }
    return ( 
        <div className="flex justify-center mt-20">
            <div className="w-10/12">
                <div className="grid grid-cols-3">

                    <div className="bg-slate-200 p-5 rounded-md w-60">
                        <AdminSidebar />
                    </div>

                    <form action="" onSubmit={Update}>
                        <div>
                            <h1 className="text-2xl">Edit: <b>{title}</b></h1>
                            <div className="mt-5 flex gap-5">
                                <input type="text" value={title} placeholder="Enter Name" className="p-2 border border-[#CED4DD] rounded-md outline-none" onChange={(e) => setTitle(e.target.value)} />
                                <input type="text" placeholder="Enter Price" className="p-2 border border-[#CED4DD] rounded-md outline-none" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className="flex ">
                                <button className="mt-5 bg-[#4B5467] text-white px-5 p-2 rounded-md ">update</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;