import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  //hooks:
  // (must know)
  // -useState
  // -useEffect
  // -useRef

  //------------------------

  // (good to know)
  // -useReducer
  // -useMemo
  // -useCallback
  // -useLayoutEffect

  const [name, setName] = useState("Olamide");
  const [adviceData, setAdviceData] = useState({});
  const [loading, setLoading] = useState(true);

  // conditional Rendering

  useEffect(() => {
    console.log("i ran");

    // APIs - api endpoints
    // https://api.adviceslip.com/advice

    // Asynchronous
    // fetch('https://api.adviceslip.com/advice')
    // .then((res)=>{
    //   return res.json()
    //  }).then((data)=>{
    //   console.log(data);
    //  })

    //  fetch('https://api.adviceslip.com/advice')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // async await

    let getData = async () => {
      let res = await fetch("https://api.adviceslip.com/advice");
      let finalData = await res.json();
      console.log(finalData.slip.advice);
      setAdviceData(finalData);
      setLoading(false);
    };

    setTimeout( ()=>{
      getData()
    } , 2000)
    
  }, []);

  // let student1 = 'Olamide'

  let changeName = () => {
    // student1 = 'Fakorede'
    // console.log(student1);
    // setName('Fakorede')

    if (name === "Olamide") {
      setName("Fakorede");
    } else {
      setName("Olamide");
    }
  };

  return (
    <div className="App">
      {!loading && <Homepage newAdviceData={adviceData} />}
      {loading && <Loading newLoading = {loading} />}
      {/* <p> {name} </p>
      <button
        onClick={() => {
          console.log("Hello");
          changeName();
        }}
      >
        Click Me
      </button> */}
    </div>
  );
}

export default App;
