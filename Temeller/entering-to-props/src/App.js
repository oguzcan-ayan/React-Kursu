import React from 'react';
import User from './components/User';

/* const user = {
    name : "Oğuzcan Ayan",
    age : 23,
    city : "Çorum"
} */

const user = {
  name : "Oğuzcan Ayan",
  age : 23, 
  city : "Samsun"
}
function App() {
  return (
    <div>
      {/* <User name = {"Oğuzcan Ayan"} age = {23} city = "Çorum"/>
      <User name = "Elmas Ayan" age = {40} city = "Samsun"/>
      <User name = "Ercan Ayan" age = {47} city = "Çorum"/>
      <User name = "Beyza Betül Ayan" age = {19} city = "Çorum"/> */}

      <User 
       /* data = {user} */
        /* friends = {["Yusuf", "Sadık", "Emrecan"]} */
         /* name = "Oğuzcan Ayan"
        age = {23}
        city = {"Çorum"} */
        title = "User"
        data = {user}
        friends = {["Yusuf", "Sadık", "Emrecan"]}
         />
    </div>


  );
}

export default App;
