import { createAsyncThunk } from "@reduxjs/toolkit"
import { arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { auth, db } from "../firebase/firebase"

export const fetchCurrentUser = createAsyncThunk('user/fetchUser', async function name()	
 {
	const collectionRef = collection(db, 'users')
	console.log(auth.currentUser)
	const userDocRef = doc(collectionRef, auth.currentUser!.uid)
	
	if ((await getDoc(userDocRef)).exists()) {
		const data = (await getDoc(userDocRef)).data() 
		return {...data, userId: userDocRef.id, name: data!['name'], completed_games: data!['completed_games']}
	}
	else {
		return null;
	}
})


export const addCompletedGame = createAsyncThunk('user/addCompletedGame', async (id: number) => {
	const docRef = doc(db, "users", auth.currentUser!.uid)
	try {
		await updateDoc(docRef, {completed_games: arrayUnion(id)})
		return id
	} catch (error) {
		console.log(error)
		return null;
	}

})