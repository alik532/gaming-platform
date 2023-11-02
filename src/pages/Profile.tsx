import {FC, useState} from 'react'
import classes from '../styles/Profile.module.css'
import { auth, db } from '../config/firebase'
import { createUserWithEmailAndPassword, signOut, } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

const Profile:FC = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [user, setUser] = useState(auth.currentUser)

	const handleRegistration = async (e:React.FormEvent) => {
		e.preventDefault()

		try {
			await createUserWithEmailAndPassword(auth, email, password)
			try {
				const docRef = await addDoc(collection(db, "users"), {
					name: email.slice(0, 6),
				});
				console.log("Document written with ID: ", docRef.id);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
			setUser(auth.currentUser)
		}
		catch (error) {
			console.log(error)
		}
	}

	console.log(auth.currentUser)

  return (
	<div className={classes.profile}>
		<h2>Register a New User</h2>
		{user && user.email}
		<form onSubmit={handleRegistration}>
			<div>
			<label>Email:</label>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			</div>
			<div>
			<label>Password:</label>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			</div>
			<button type="submit">Register</button>
		</form>
		<button onClick={async () => {await signOut(auth); setUser(auth.currentUser)}}>Sign out</button>
	</div>
  )
}

export default Profile