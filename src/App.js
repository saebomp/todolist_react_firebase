import {useState, useEffect} from 'react'
import './App.css';
import Forms from "./components/Forms"
import Title from "./components/Title"
import TodoList from "./components/TodoList"

import {db} from './firebase-config'
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc, onSnapshot} from 'firebase/firestore'


function App() {

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Title />
        </div>
        <div>
          <Forms />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=jCY6DH8F4oc   24:00
// https://console.firebase.google.com/u/3/project/todolist-react-firebase-769a3/firestore/data/~2F
// https://github.com/hannah-gkim/firebase-crud-todoList/tree/main/src/components