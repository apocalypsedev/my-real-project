import Button from "../../UI-FORM/button"
import { serviceItems } from "../../constants/data"
import ServiceCard from "./service-card"

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

const Services = () => {
    return (
        <div className="min-h-[100vh] bg-slate-100/50 p-32">
            <div className="grid grid-cols-2 items-start justify-start">
                <h1 
                data-aos = 'fade-right'
                data-aos-duration = '2000'
                className="flex items-center gap-8">
                <p className="w-20 h-1 bg-pink-500"></p>
                <span className="text-[55px] font-bold">Services</span>
                </h1>
                <div 
                data-aos = 'fade-left'
                data-aos-duration = '2000'
                className="flex flex-col gap-8">
                    <p className="text-slate-500">
                        <span className="text-neutral-800 font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span> Repudiandae eum nesciunt doloribus rem libero cumque ratione. Ut porro architecto molestiae magnam tenetur debitis vitae! Aspernatur corrupti possimus officia quas dolorum dolore maxime, facilis beatae deserunt excepturi quibusdam ducimus non iste.
                    </p>
                    <Button 
                    type='button' 
                    className={'bg-pink-500 text-white h-12 w-36 hover:bg-pink-400'}
                    children={'Get in Touch'} 
                    />

                </div >
            </div>
            
            <div className="grid grid-cols-2 gap-8 py-32">
                {serviceItems.map(item => (
                    <ServiceCard key={item.title} item={item}/>
                ))}
            </div>

        </div>
    )
}

export default Services