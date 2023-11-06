import React, {FC, useState} from 'react'
import { auth, db } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore"; 
import classes from '../styles/AuthForm.module.css'
import MainButton from './MainButton';
import { useNavigate } from 'react-router-dom';

const SignInForm:FC = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [emailErr, setEmailErr] = useState<string | null>(null)
	const [passwordErr, setPasswordErr] = useState<string | null>(null)

	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// Validation
		if(!email || !password){
			setEmailErr('Please enter your email')
			setPasswordErr('Please enter a password')
			return;
		}
		else if (password.length < 8) {
			setPasswordErr("Password length must be 8 or more characters")
			return;
		}

		try {
			// sign in happens
			const userCred = await signInWithEmailAndPassword(auth, email, password)
			console.log(userCred.user.uid)
			// we get document ref with signed in user Id
			const documentRef = doc(db, "users", userCred.user.uid)
			// we get user data from firestore
			const userDoc = await getDoc(documentRef)
			console.log(userDoc.exists())
			console.log('redirected')
			navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

  return (
	<form className={classes.form}>
		<h1 className={classes.title}>Sign in your account</h1>
		<input placeholder='Email...' className={classes.input} type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
		{emailErr && <h4 className={classes.error}>{emailErr}</h4>}
		<input placeholder='Password...' className={classes.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
		{passwordErr && <h4 className={classes.error}>{passwordErr}</h4>}
		<MainButton text='Sign In' onClick={(e) => handleSubmit(e)} isPatterned={true}/>
	</form>
  )
}

export default SignInForm