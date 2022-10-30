import { getDocs, query, collection } from 'firebase/firestore';

import { db } from './index'

export default function Todos() {

  const getTodos = async () => {
    const querySnapshot = await getDocs(query(collection(db, 'todos')))

    console.log(querySnapshot)
    console.log(querySnapshot.getDocs())
  }

  return (
    <>
      <h1>Todos</h1>
      <button onClick={getTodos}>Get Todos</button>
    </>
  )
}