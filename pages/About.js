
const About = () => {
    return (
        <div className="bg-gray-700 h-screen">
            <div className="grid grid-cols-12 bg-[url('/assets/images/bk-img1.jpeg')] bg-fixed bg-contain ">
                <div className="col-span-3 mt-5  mb-32 text-left flex text-gray-600  justify-around">
                    <div className="hover:text-gray-200 "><a href="/">Home</a></div>    
                    <div className="hover:text-gray-200"><a href="/Projects">Projects</a></div>    
                    <div className="hover:text-gray-200"><a href="/About">About</a></div>    
                    <div className="hover:text-gray-200"><a href="/Gallery">skills</a></div>    
                </div>
            </div>
        <div className="flex col-span-12 bg-gray-700 ">
            <div className=" w-full m-6  bg-white p-4 rounded-md ">
                <p className="text-2xl">About</p>
                <p className="text-md">About</p>
            </div>
        </div>
        
        <div className="flex col-span-12 bg-gray-700 ">
            <div className=" w-full m-6  bg-white p-4 rounded-md ">
                <p className="text-2xl">Skills</p>
                <p className="text-md">Skills</p>
            </div>
        </div>
        </div>
        
            
    )
}

export default About
