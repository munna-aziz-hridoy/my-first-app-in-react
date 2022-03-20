import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const user = {
  id: 1,
  name: "Munna Aziz",
  username: "munna",
  email: "munna.aziz.hridoy@gmail.com",
  address: {
    street: "Panbotu",
    suite: "Holding: 122",
    city: "Gazipur",
    zipcode: "1700",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "+1 23 456 789",
  website: "munna.org",
};

// const { name, email, address, username } = user;
const paraStyle = { color: "#000", fontWeight: "bold" };

function App() {
  const names = ["Munna", "Mugdho", "Oishi", "Fatu"];
  const products = [
    { name: "Laptop", price: 28500 },
    { name: "Phone", price: 11500 },
    { name: "HeadPhone", price: 300 },
  ];
  const productsObj = {
    productOne: { name: "Laptop", price: 28500 },
    productTwo: { name: "Phone", price: 11500 },
    productThree: { name: "HeadPhone", price: 300 },
  };
  const props = { firstName: "Munna", lastName: "Aziz" };
  return (
    <div className="App">
      {/* {names.map((name) => {
        return <Person name={name} />;
      })} */}
      {/* <Person name="Munna Aziz" city="Dhaka" />
      <Person /> */}
      {/* <Friend name="Mugdho" age="24" /> */}

      {/* {products.map((product) => {
        const { name, price } = product;
        return <Product name={name} price={price} />;
      })}
      <MyComponent.MyDatePicker color="blue" /> */}

      <FullName {...props} />
      <Step />
      <DownCount />
    </div>
  );
}

const Product = (props) => {
  const { name, price } = props;
  return (
    <div className="person">
      <h1>Name: {name}</h1>
      <h5>Price: {price}</h5>
    </div>
  );
};

function Person(props) {
  console.log(props);
  const { name, email, userName, city } = props;
  return (
    <div className="person">
      <h1>{name}</h1>
      <p style={paraStyle}>Email: {email}</p>
      <p style={paraStyle}>UserName: {userName}</p>
      <p style={paraStyle}>City: {city}</p>
    </div>
  );
}

function Friend(props) {
  const { name, age } = props;
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </>
  );
}

const MyComponent = {
  MyDatePicker: function (props) {
    return (
      <div>
        <h2>This is a Date picker that has {props.color}</h2>
      </div>
    );
  },
};

const Step = () => {
  const [step, setStep] = useState(0);

  const increaseStep = () => {
    const newStep = step + 1;

    setStep(newStep);
  };
  useEffect(() => {
    console.log(step);
  }, [step]);
  return (
    <div>
      <h4>My Step: {step}</h4>
      <button onClick={increaseStep}>Run......</button>
    </div>
  );
};

const DownCount = () => {
  const [down, setDown] = useState(10);

  const decreaseCount = () => {
    const newDown = down - 1;
    if (newDown < 0) {
      return;
    }
    setDown(newDown);
  };

  return (
    <div>
      <h4>Total: {down}</h4>
      <button onClick={decreaseCount}>Down......</button>
    </div>
  );
};

const FullName = (props) => {
  const { firstName, lastName } = props;
  return (
    <div>
      <h2>First name: {firstName}</h2>
      <h2> LastName: {lastName}</h2>
      <h2> FullName: {firstName + " " + lastName}</h2>
    </div>
  );
};

export default App;
