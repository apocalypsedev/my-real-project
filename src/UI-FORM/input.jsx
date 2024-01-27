

const Input = ({type, className, placeholder,name, value, onChange}) => {
  return (
    <input 
      type={type} 
      className={className} 
      placeholder={placeholder} 
      name={name} 
      value={value} 
      onChange={onChange} 
    />
  )
}

export default Input