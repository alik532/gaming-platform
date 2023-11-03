import classes from '../styles/Header.module.css'
import { useAppSelector } from '../hooks'
import { useState, useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai' 
import { logoSVG } from '../assets'
import { auth } from '../config/firebase'
import { fetchCurrentUser } from '../reducers/userReducer'
import { useAppDispatch } from '../store/store'

const Header = () => {

	const dispatch = useAppDispatch()
	const userStatus = useAppSelector(state => state.userReducer.status)
	const userName = useAppSelector(state => state.userReducer.data.name)

	console.log(userStatus, auth.currentUser)

	const [searchVal, setSearchVal] = useState("")

	useEffect(() => {
		if (userStatus == 'idle') {
			dispatch(fetchCurrentUser())
		}
	})


  return (
	<div className={classes.header}>
		<div className={`${classes.wrapper} ${classes.logoWrapper}`}>
			<img src={logoSVG} className={classes.logo} alt="" />
			<h1 className={classes.logoTitle}>JOURNEY</h1>
		</div>
		<div className={`${classes.wrapper} ${classes.inputWrapper}`}>
			<input placeholder='Search for games...' type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className={classes.input}/>
		</div>
		<div className={`${classes.wrapper} ${classes.profileWrapper}`}>
			{userStatus == 'succeeded' && <h1 className={classes.username}>{userName}</h1>}
			<AiOutlineUser className={classes.profile}/>
		</div>
	</div>
  )
}

export default Header