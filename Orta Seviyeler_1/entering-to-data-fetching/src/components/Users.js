import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Users() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

/*     useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data))
        .finally(() => setLoading(false))
    }, []); */

/*     useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .catch((error) => {
            console.log("Error has been detected.", error.message);
            // console.error("Error has been detected.", error); 
        })
        .finally(() => setLoading(false))
    }, []); */

  /*   useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            setUsers(response.data)
            
            axios(`https://jsonplaceholder.typicode.com/posts?userId=${response.data[0].id}`)
            .then((response) => {
                setPosts(response.data)
            })
        })
        .finally(() => setLoading(false))
    }, []); We can do like this but this method caused a callback hell.*/

    useEffect(() => {
        const getData = async () => {
            try{
             
            const { data : users } = await axios("https://jsonplaceholder.typicode.com/users");
            const { data : posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
    
            setUsers(users);
            setPosts(posts);
            setLoading(false);
            }
            catch(error){
                console.log("Error has been detected.", error);
            // console.error("Error has been detected.", error.message); 
            }
        }   
        getData();
    }, [])
    
    /* 
    useEffect(() => {
        (async () => {
            try{
             
                const { data : users } = await axios("https://jsonplaceholder.typicode.com/users");
                const { data : posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
        
                setUsers(users);
                setPosts(posts);
                setLoading(false);
                }
                catch(error){
                    console.log("Error has been detected.", error);
                    // console.error("Error has been detected.", error.message);
                }
        })();
    }) */

/*     const getData = async () => {
        try{
         
        const { data : users } = await axios("https://jsonplaceholder.typicode.com/users");
        const { data : posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);

        setUsers(users);
        setPosts(posts);
        setLoading(false);
        }
        catch(error){
            console.log("Error has been detected.", error);
            // console.error("Error has been detected.", error.message);
        }
    }    */
  return (
    <>
    <h1>
        Users
    </h1>
    <div>
        {loading && <div>Loading...</div>}
    </div>
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>

    <h1>
        Posts
    </h1>
    <div>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Users;