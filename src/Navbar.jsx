import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const {pathname} = useLocation()
    console.log(pathname)
    return (
        <>
            <div className="flex justify-between bg-red-300">
                <ul className="flex justify-between gap-10 text-white p-4">

                    <li ><Link to="/" className={`hover:text-blue-400 ${pathname=="/"?"bg-green-300  text-white": "text-white"}`}>Home</Link></li>


                    <li><Link to="/about" className={`hover:text-blue-400 ${pathname == "/about" ? "bg-green-300  text-white" : "text-white"}`}>About</Link></li>
                    
                    <li><Link to="/contact" className={`hover:text-blue-400 ${pathname == "/contact" ? "bg-green-300  text-white" : "text-white"}`}>Contact</Link></li>
                    
                  </ul>
         </div>
        </>
    )
}

export default Navbar