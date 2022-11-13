import { useState } from 'react';

function Input({ name, name2 }) {
  const [data, setData ] = useState({
    nameClient:'',
    namePlant:'',
    dispositivos:[]
  });
  

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log("handleChange", name, value);
    setData({
      ...data,
      [name]: value
    })
  }

  // const handleSubmit = (e) => {
  //   console.log(e);

  // }
  console.log(data)
  return (
    <div className="App">
      
      <label>
        {name2}
        <input type="text"
          onChange={handleChange}
          name={name} />
      </label>


    </div>
  );
}
export default Input;