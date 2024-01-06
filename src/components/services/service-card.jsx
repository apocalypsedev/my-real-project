
const ServiceCard = ({item}) => {
  return (
    <div 
    data-aos = 'fade-up'
    data-aos-duration = '2000'
    className="w-[450px]">
        <div className="w-[450] h-[300px] duration-300 hover:shadow-3x1 hover:cursor-pointer">
            <img src={item.img} alt="design" className=" object-cover w-full h-full" />
        </div>
        <h2 className=" text-xl my-4 text-pink-500 underline">
            {item.title}
        </h2>
        <p>{item.description} </p>
    </div>
  )
}

export default ServiceCard