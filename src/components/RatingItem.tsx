import {FC} from 'react'
import classes from '../styles/RatingItem.module.css'

const RatingItem:FC<{title: string, percent: number}> = ({title, percent}) => {

	let colors:Array<string> = []
	if (title == 'exceptional') {
		colors = ["#AFDB01", "#0FBB00"]
	}
	else if (title == 'recommended') {
		colors = ["#00D2DF", "#0400BB"]
	}
	else if (title == 'meh') {
		colors = ["#ED8E00", "#D22600"]
	}
	else {
		colors = ["#D22600", "#3F00C6"]
	}

  return (
	<div className={classes.item}>
		<div className={classes.rating}>
			<h2 className={classes.title} style={{color: colors[0]}}>{title}</h2>
			<div className={classes.bar}>
				<div className={classes.full} style={{height: `${percent}%`, background: `linear-gradient(180deg, ${colors[1]}, ${colors[0]})`, boxShadow: `${colors[0]}80 0px 0px 50px 0px`}}></div>
			</div>
		</div>
		<h1 className={classes.percent} style={{color: colors[0]}}>{percent.toFixed(0)}%</h1>
	</div>
  )
}

export default RatingItem