import {ReactNode, FC} from 'react'
import classes from '../styles/AuthModal.module.css'

const AuthModal:FC<{children: ReactNode}> = ({children}) => {

  return (
	<div className={classes.modal}>
		<div className={classes.exitWrapper}></div>
		<div className={classes.content}>
			{children}
		</div>
	</div>
  )
}

export default AuthModal