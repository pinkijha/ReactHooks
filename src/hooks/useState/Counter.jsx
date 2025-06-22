import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  const [bgColor,  setBgColor] = useState(false);
  const [name, setName ] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(null);

//   funstion for handling form data
const handleChange = (e) =>{
    const {name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    })) 
}

//  function to handle form submit
const handleSubmit = (e) => {
    e.preventDefault(); 
console.log("Form submitted with data:", formData);
    setFormSubmitted(formData);
    // Reset form data if needed            
    setFormData({
        email: "",      
        password: "",
        confirmPassword: "",        
    });
};


  // Functions to handle increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => {
    return count > 0 ? setCount(count - 1) : setCount(0);
  };

  // Function to toggle show/hide text
  const textToggle = () => setShowText(!showText);

    // Function to change background color
    const changeBgColor = () => setBgColor(!bgColor);

  return (
    <>
      {/* Counter */}
      <div className="border border-green-900 m-4 p-4 rounded-lg shadow-md bg-white">
        <h1>Counter</h1>
        <div className="border border-green-900 m-4 p-4 rounded-lg shadow-md bg-green-100">
          <p>
            Counter is a simple component that demonstrates the use of state in
            React.
          </p>
          <p>It allows you to increment and decrement a counter value.</p>
        </div>
        <div className=" text-center border border-green-900 m-4 p-4 rounded-lg shadow-md bg-green-50">
          <button
            onClick={increment}
            className=" cursor-pointer bg-green-500 text-white p-2 rounded m-2"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="cursor-pointer bg-red-500 text-white p-2 rounded m-2"
          >
            Decrement
          </button>
          <p className="text-lg font-bold">Current Count: {count}</p>
        </div>
      </div>

      {/*  Toggle Show/Hide Text */}
      <div>
        <button
          onClick={textToggle}
          className={
            showText
              ? "p-2 border border-green-700 rounded-lg bg-green-50 text-green-700"
              : "p-2 border border-red-700 rounded-lg bg-red-50 text-red-700"
          }
        >
          {showText ? "Show" : "Hide"}
        </button>
       {showText && (
          <div className="border border-green-900 m-4 p-4 rounded-lg shadow-md bg-green-100">
            <p>
              This text is conditionally rendered based on the state of the
              button.
            </p>
          </div>
        )}
      </div>

      {/*  Change Background Color */}
      <div>
        <button
          onClick={changeBgColor}
          className={
            bgColor
              ? "p-2 border border-blue-700 rounded-lg bg-blue-50 text-blue-700"
              : "p-2 border border-gray-700 rounded-lg bg-gray-50 text-gray-700"
          }
        >
          {bgColor ? "Change to Gray" : "Change to Blue"}
        </button>
        <div
          className={`border border-green-900 m-4 p-4 rounded-lg shadow-md ${
            bgColor ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          <p>
            The background color of this box changes based on the button click.
          </p>
        </div>  
      </div>

      {/* Simple Input Form */}
      <div className="border border-green-900 m-4 p-4 rounded-lg shadow-md bg-green-100">
        <label>Name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" className="border border-gray-300 p-2 rounded m-2" />
        <p>Hello! <span className="text-green-600 font-bold">{name}</span></p>
      </div>

      {/* Multiple Inputs (Controlled Inputs) */}
      <form onSubmit={handleSubmit}    >
        <div className="border border-green-900 m-4 p-4 rounded-lg shadow-md bg-green-100">
        <label>Enter your Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Type your email"
          className="border border-gray-300 p-2 rounded m-2"
        />
        <input
          type="password"
            name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Type your password"
          className="border border-gray-300 p-2 rounded m-2"
        />
        <input
          type="password"     
              name="confirmPassword"      
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="border border-gray-300 p-2 rounded m-2"
        />  <br />
        <button type="submit"  className="bg-green-600 text-white p-2 rounded-lg cursor-pointer">Submit</button>
       {formSubmitted && (
        <div className="mt-4 p-4 border border-green-900 rounded-lg bg-green-50">
        <p className="text-lg font-bold">Form Submitted Successfully!</p>
         <p className="text-lg font-bold">Your Email is, {formSubmitted.email}!</p>
        <p className="text-lg font-bold">Your Password is, {formSubmitted.password}!</p>
        <p className="text-lg font-bold">Your confirmPassword is, {formSubmitted.confirmPassword}!</p>
        </div>
       )}

      </div>
      </form>
    </>
  );
};

export default Counter;
