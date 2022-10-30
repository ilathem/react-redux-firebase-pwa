import Todos from './Todos'

import { getFirestore } from 'firebase/firestore';
import { useFirebaseApp, FirestoreProvider } from 'reactfire'

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp())
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <Todos />
    </FirestoreProvider>
  );
}

export default App;
