const AdminSidebar = () => {
    return ( 
        <ul className="space-y-5 text-md">
            <li><a href="/admin">Dashboard</a></li>
            <li>Categories</li>
            <li><a href="/add-product">Product</a></li>
            <li><a href="/manage-product">manage Product</a></li>
            <li>Banner</li>
        </ul>
     );
}
 
export default AdminSidebar;