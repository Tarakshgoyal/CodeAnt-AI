import { useState } from "react";
import Login from "./components/Login"
import Repo from "./components/Repo";

function App() {

  const [page,setPage]=useState(true);

  return (
    <>
      {page ? <Login setPage={setPage}/> : <Repo setPage={setPage}/>}
    </>
  )
}

export default App
