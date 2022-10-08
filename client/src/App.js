import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [get, setGet] = useState([])
  const [data, setData] = useState({
    name: "",
    email: ""
  })
  const [updateData, setUpdateData] = useState({
    name: "",
    email: ""
  })
  useEffect(() => {
    axios.get("https://knitting-app-server.herokuapp.com/auth").then(res => setGet(res.data.data.fetched_user))
    return () => {
      
  }
  }, [ get])
  return (
    <div className="App" style={{ padding: 50 }}>
      {get.map(x => (
        <>
          <div>

            <h3>Name : {x.name}</h3>
            <h5>Email : {x.email}</h5>
          </div><button onClick={() =>
            axios.delete(`https://knitting-app-server.herokuapp.com/auth/${x._id}`).then(res => console.log("------------- Ho gaya DELETE 🤙 ----------------"))}>Delete</button>
          <form
            onSubmit={(e) =>{
              e.preventDefault();
              axios.patch(`https://knitting-app-server.herokuapp.com/auth/${x._id}`, updateData).then(res => console.log("------------- Ho gaya UPDATE 🤙 ----------------"))
            }}
          >
            <label>Name :</label>
            <input
              onChange={(e) => setUpdateData({
                ...updateData,
                name: e.target.value
              })}
            />

            <label>Email :</label>
            <input
              onChange={(e) => setUpdateData({
                ...updateData,
                email: e.target.value
              })}
            />
            <button type='submit'>Update</button>
          </form>
        </>
      ))}
      <form onSubmit={(e) => {
        e.preventDefault();
        axios.post("https://knitting-app-server.herokuapp.com/auth", data).then(res => console.log("------------- Ho gaya POST ✌ ----------------"))
      }}>
        <label>Name :</label>
        <input
          onChange={(e) => setData({
            ...data,
            name: e.target.value
          })}
        />

        <label>Email :</label>
        <input
          onChange={(e) => setData({
            ...data,
            email: e.target.value
          })}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;
