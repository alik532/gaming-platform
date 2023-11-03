import {FC} from 'react'
import classes from '../styles/GameStat.module.css'

interface IGameStat {
	name: string,
	value: string,
}

const GameStat:FC<IGameStat> = ({name, value}) => {
  return (
	<div className={classes.stat}>
		<h5 className={classes.name}>{name}</h5>
		<h2 className={classes.value}>{value}</h2>
	</div>
  )
}

export default GameStat