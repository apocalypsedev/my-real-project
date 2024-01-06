import { Link } from "react-router-dom"
import { listItems } from "../../constants/data"
import { useEffect, useState } from "react"
const Navbar = () => {
    const [isActive, setIsActive] = useState(`${listItems[0].link}`);
    

    const onIsActive = (link) =>{
        setIsActive(link);
    }

    return (
        <div className="flex items-center justify-between px-[112px] h-[10vh]">
            <h2 className="text-[22px] font-[700]">PageOne<span className="text-pink-600">.</span></h2>
            <ul className="flex items-center">
                {
                    listItems.map(item => (
                        <Link
                            to={item.url}
                            key={item.link}
                            className={isActive === `${item.link}` ? "bg-pink-500 text-white w-full h-full px-6 py-2" : "duration-300 cursor-pointer hover:text-pink-500 px-6 py-2"}
                            onClick={()=> onIsActive(item.link)}
                        >
                            {item.link}
                        </Link>
                    ))
                }
            </ul>

        </div>
    )
}

export default Navbar