import {FC} from 'react'
import classes from '../styles/DeveloperItem.module.css'

const DeveloperItem:FC<{name: string, icon: string, projects: number}> = ({icon, name, projects}) => {
  return (
	<div className={classes.item}>
		<div className={classes.iconWrapper}>
			<img src={icon} alt="" className={classes.icon}/>
		</div>
		<div className={classes.info}>
			<h2 className={classes.name}>{name}</h2>
			<h5 className={classes.projects}>{projects+" project"}</h5>
		</div>
	</div>
  )
}

export default DeveloperItem