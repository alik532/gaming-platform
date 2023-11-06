import React, { useState, } from 'react'
import classes from '../styles/AuthForm.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import MainButton from './MainButton'

const RegisterForm = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassowrd, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("")

  const [emailErr, setEmailErr] = useState<string | null>(null)
	const [passwordErr, setPasswordErr] = useState<string | null>(null)
  const [usernameErr, setUsernameErr] = useState<string | null>(null)

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
    else if (password != confirmPassowrd) {
      setPasswordErr("Passwords do not match");
      return;
    }
    else if (username.length == 0) {
      setUsernameErr("Enter username")
      return;
    }

		try {
			// sign in happens
			const userCred = await createUserWithEmailAndPassword(auth, email, password)
			console.log(userCred.user.uid)
			// we get document ref with signed in user Id
			await setDoc(doc(db, 'users', userCred.user.uid), {name: username} )
			// we get user data from firestore
			console.log('redirected')
			navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

  return (
    <form className={classes.form}>
      <h1 className={classes.title}>Create your accout</h1>
      <input placeholder='Email...' className={classes.input} type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      {emailErr && <h4 className={classes.error}>{emailErr}</h4>}
      <input className={classes.input} placeholder='Name...' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
      {usernameErr && <h4 className={classes.error}>{usernameErr}</h4>}
      <input placeholder='Password...' className={classes.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input placeholder='Confirm password...' className={classes.input} type="password" value={confirmPassowrd} onChange={(e) => setConfirmPassword(e.target.value)}/>
      {passwordErr && <h4 className={classes.error}>{passwordErr}</h4>}
      <MainButton text='Register' onClick={(e) => handleSubmit(e)} isPatterned={true}/>
    </form>
  )
}

export default RegisterForm