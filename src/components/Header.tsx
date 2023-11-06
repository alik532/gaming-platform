import classes from '../styles/Header.module.css'
import { useAppSelector } from '../hooks'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai' 
import { logoSVG } from '../assets'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase'

const Header = () => {

	const userStatus = useAppSelector(state => state.userReducer.status)
	const userName = useAppSelector(state => state.userReducer.data.name)


	const [searchVal, setSearchVal] = useState("")

  return (
	<div className={classes.header}>
		<Link to={'/'} className={`${classes.wrapper} ${classes.logoWrapper}`}>
			<img src={logoSVG} className={classes.logo} alt="" />
			<h1 className={classes.logoTitle}>JOURNEY</h1>
		</Link>
		<div className={`${classes.wrapper} ${classes.inputWrapper}`}>
			<input placeholder='Search for games...' type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className={classes.input}/>
		</div>
		<Link to={auth.currentUser ? `/profile/${auth.currentUser.uid}` : '/signin'} className={`${classes.wrapper} ${classes.profileWrapper}`}>
			{userStatus == 'succeeded' && <h1 className={classes.username}>{userName}</h1>}
			<AiOutlineUser className={classes.profile}/>
		</Link>
	</div>
  )
}

export default Header