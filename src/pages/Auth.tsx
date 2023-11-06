import { FC } from 'react'
import classes from '../styles/Auth.module.css'
import authIMG from '../assets/authIMG.png'
import SignInForm from '../components/SignInForm'
import RegisterForm from '../components/RegisterForm'
import Container from '../components/Container'
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate, Link } from 'react-router-dom'

const Auth:FC<{path: string}> = ({path}) => {

	const navigate = useNavigate()

  return (
	<div className={classes.page}>
		<div className={classes.sun}></div>
		<img src={authIMG} alt="" className={classes.img}/>
		<div className={classes.exitWrapper} onClick={() => navigate('/')}>
			<IoIosArrowBack className={classes.exitIcon}/>
		</div>
		<Container>
			<div className={classes.form}>
				{path === '/signin' ? <SignInForm/> : <RegisterForm/>}
			</div>
		</Container>
		{path === '/signin' ? <h2>Don't have an account yet? <Link to='/register'>Register</Link></h2> : <h2>Already have an accout?<Link to='/signin'>Log in</Link></h2>}
	</div>
  )
}

export default Auth