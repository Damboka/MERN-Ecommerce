import AdminSidebar from "../../components/Admin-sidebar";
import { useEffect, useState } from "react";
import axios from 'axios'
const AdminHome = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getAll')
        .then(result => setProducts(result.data))
        .catch(err => console.log(err))
    })
    return ( 
        <div className="flex justify-center mt-20">
            <div className="w-10/12">
                <div className="grid grid-cols-3">

                    <div className="bg-slate-200 p-5 rounded-md w-60">
                        <AdminSidebar />
                    </div>

                    <div>
                        <div>
                            {products.length}
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default AdminHome;