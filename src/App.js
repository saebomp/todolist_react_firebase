import {useState, useEffect} from 'react'
import './App.css';
import {db} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")

  useEffect(()=> {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    getUsers();
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=jCY6DH8F4oc   24:00
// https://console.firebase.google.com/u/3/project/todolist-react-firebase-769a3/firestore/data/~2F