import {useState, useEffect} from 'react'
import './App.css';
import {db} from './firebase-config'
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore'

function App() {
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")
  //usersCollectionRef : reference the whole collection

  const createUser =  async () => {
    await addDoc(usersCollectionRef, { name:newName, age:Number(newAge) })
    //addDoc 되길 기다림
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const newFields = {age : age + 1}
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

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
      <input 
        type="text" 
        placeholder="name" 
        onChange={(event)=> setNewName(event.target.value)}
      />
      <input 
        type="number" 
        placeholder="age" 
        onChange={(event)=> setNewAge(event.target.value)}
      />
      <button onClick={createUser}>Create User</button>
      <table className="table">
      {users.map((user) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => {updateUser(user.id, user.age)}}>Increase Age</button>
              <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
            </td>
          </tr>
        )
      })}
      </table>
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=jCY6DH8F4oc   24:00
// https://console.firebase.google.com/u/3/project/todolist-react-firebase-769a3/firestore/data/~2F