import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Main = () => {
    return (
        <div className='h-[88vh]'>
            <h1 
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-[85%] leading-[95px] text-[80px] text-slate-800 pl-[112px] py-[110px] font-[800] strancking-wide">
                We are web agency based in Los Angeles, Ca
            </h1>
            <div 
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex items-center justify-around mt-20 py-4">
                <p className="w-1/3">
                    <span className="text-slate-800 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing</span>
                    , Eum quis repellendus nulla praesentium adipisci, perferendis quidem laboriosam sapiente quos voluptatum exercitationem minus, ipsa fugiat voluptates, numquam eligendi neque hic in.
                </p>


                <ul className="grid grid-cols-2 leading-8 w-1/3 text-pink-500 underline">
                    <li><a href=""></a>Lorem, ipsum.</li>
                    <li><a href=""></a>Lorem, ipsum.</li>
                    <li><a href=""></a>Lorem, ipsum.</li>
                    <li><a href=""></a>Lorem, ipsum.</li>
                    <li><a href=""></a>Lorem, ipsum.</li>
                    <li><a href=""></a>Lorem, ipsum.</li>
                </ul>

            </div>
        </div>
    )
}

export default Main;