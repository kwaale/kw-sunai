
function Input({ name, name2, handleChange }) {
  // const handleSubmit = (e) => {
  //   console.log(e);

  // }

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