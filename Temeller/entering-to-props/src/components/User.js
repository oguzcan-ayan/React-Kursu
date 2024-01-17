import React from 'react';
import PropTypes from 'prop-types';

function User(/* props */
 /* { data, friends } */
  /* { data : { name, age, city } } */
   /* props */
   /* props */
   /* props */
  /*  { name, age, city } */
  { title, data, friends }) {

  // console.log(props);

  // const data = props.data; 4.'sü için

  // const { data } = props;  5.'si için

  // const { name, age, city } = props.data; 6.'sı için

  return (
    <>
 {/*    <div>
    User
    <div>Name - Surname : {props.data.name}</div>
    <div>Age : {props.data.age}</div>
    <div>City : {props.data.city}</div>
    <hr/>
    </div> */}



    {/* <div>
    <h3>User</h3>
    <div>Name - Surname : {data.name}</div>
    <div>Age : {data.age}</div>
    <div>City : {data.city}</div>
    <h3>Friends</h3>
    {
      friends.map((friend, i) => (
        <div key = {i}>{friend}</div>
      ))
    }
    <hr/>
    </div> */}



 {/*    <div>
    User
    <div>Name - Surname : {name}</div>
    <div>Age : {age}</div>
    <div>City : {city}</div>
    <hr/>
    </div> */}



    {/* <div>
    User
    <div>Name - Surname : {data.name}</div>
    <div>Age : {data.age}</div>
    <div>City : {data.city}</div>
    <hr/>
    </div> */}
    


 {/*    <div>
    User
    <div>Name - Surname : {data.name}</div>
    <div>Age : {data.age}</div>
    <div>City : {data.city}</div>
    <hr/>
    </div> */}



    {/* <div>
    User
    <div>Name - Surname : {name}</div>
    <div>Age : {age}</div>
    <div>City : {city}</div>
    <hr/>
    </div> */}



    {/* <div>
    User
    <div>Name - Surname : {name}</div>
    <div>Age : {age}</div>
    <div>City : {city}</div>
    <hr/>
    </div> */}



    <div>
    <strong>{title}</strong>
    <div>Name - Surname : {data.name}</div>
    <div>Age : {data.age}</div>
    <div>City : {data.city}</div>
    <h3>Friends</h3>
    {
      friends.map((friend, i) => (
        <div key = {i}>{friend}</div>
      ))
    }
    <hr/>
    </div>
    </>
  );
}

User.propTypes = {
/*   name : PropTypes.string.isRequired,
  age : PropTypes.number,
  city : PropTypes.string */

  title : PropTypes.string.isRequired,

  data : PropTypes.exact({
    name : PropTypes.string,
    age : PropTypes.number,
    city : PropTypes.string

  }),

  friends : PropTypes.array
};

User.defaultProps = {
  title : "User"
}

export default User;