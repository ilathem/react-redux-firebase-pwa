import { useFirestore, useFirestoreCollection } from "reactfire"
import { collection } from "firebase/firestore";

export default function Todos() {

  const firestore = useFirestore();
  
  const todosCollectionReference = collection(firestore, "todos");

  const { data, status } = useFirestoreCollection(todosCollectionReference)
  
  return (
    <>
      <h1>Todos</h1>
      {status === 'success' ? data.docs.map(doc => (
        <div key={doc.id}>
          <p>{doc.data().content}</p>
        </div>
      )) : 'Loading'}
    </>
  )
}