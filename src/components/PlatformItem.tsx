import {FC} from 'react'
import classes from '../styles/PlatformItem.module.css'
import MainButton from './MainButton'
import IconType from 'react-icons'

const PlatformItem:FC<{name: string, Icon: IconType.IconType, games: number}> = ({Icon, name, games}) => {
  return (
	<div className={classes.item}>
		<div className={classes.iconWrapper}>
			<Icon className={classes.icon}/>
		</div>
		<div className={classes.info}>
			<h3 className={classes.name}>{"For "+name}</h3>
			<h6 className={classes.games}>{games.toString() + " games"}</h6>
			<hr className={classes.hr}/>
			<MainButton text='Follow' isPatterned={true} />
		</div>
	</div>
  )
}

export default PlatformItem