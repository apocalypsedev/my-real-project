import { Link } from "react-router-dom"
import { listItems } from "../../constants/data"
const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-[112px] h-[10vh]">
            <h2 className="text-[22px] font-[700]">PageOne<span className="text-pink-600">.</span></h2>
            <ul className="flex items-center gap-12">
                {
                    listItems.map(item => (
                        <Link
                            to={item.url}
                            key={item.link}
                            className="duration-300 cursor-pointer hover:text-pink-500"
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