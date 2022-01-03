
const NavBar = () => {
    return (
        <div className="grid grid-cols-12">
        <div className="col-span-3 mt-5  text-left flex text-gray-300 justify-around">
             <div className="hover:text-gray-100 "><a href="/">Home</a></div>    
             <div className="hover:text-gray-100"><a href="/Projects">Projects</a></div>    
             <div className="hover:text-gray-100"><a href="/About">About</a></div>    
             <div className="hover:text-gray-100"><a href="/Gallery">skills</a></div>    
        </div>
        
        </div>
    )
}

export default NavBar
