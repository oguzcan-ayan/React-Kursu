import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";

/* const name = "Oğuzcan";
let surname = "Ayan";
 */
const fullName = "Oğuzcan Ayan";
const isLoggedIn = true;

function App() {

   /*  return React.createElement('div', null, React.createElement("p", null));  */

  return (
    <>
 {/*    <div>
    Welcome {name} {surname}      
    </div>
    <div>
      <Header />
    </div> */}

   {/*  {
      isLoggedIn ? "Welcome" + " " + fullName : "Please Login"
    } */}



   {/*  {
      isLoggedIn ? <div>Welcome {fullName}</div> : <div>Please Login</div>
    } */}



  {/*   {
      isLoggedIn ? <div>Welcome {fullName}</div> : <a href="#">Please Login</a>
    } */}



   {/*  {
      isLoggedIn && <div>Welcome {fullName}</div>
    } */}
   {/*  {
      !isLoggedIn && <a href="#">Please Login</a>
    } */}



    {/* {
      isLoggedIn ? <div>Welcome {fullName}</div> : null
    } */}



   {/*  {
      isLoggedIn ? <div>Welcome {fullName}</div> : <Header />
    } */}



    {
      isLoggedIn ? <div>Welcome {fullName}</div> : <Login />
    }
    </>
  );
}

export default App;
