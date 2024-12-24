import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setError] = useState();
  // using promises
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => setMyData(res.data)).catch((error) =>
  //     setError(error.message))
  // }, []);

  const getApiData = async () => {
   try { const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setMyData(res.data);
  } 
  catch (error) {
    setError(error.message);
  }
}
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div>
        <h1> Axios Tutorial </h1>
        {isError !== "" && <h2>{isError}</h2>}
        {myData.slice(0,12).map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
