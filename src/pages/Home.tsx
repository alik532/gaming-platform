import {FC} from 'react'
import classes from '../styles/Home.module.css'
import { heroIMG } from '../assets'
import Container from '../components/Container'
import {logoSVG} from '../assets'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import {CgArrowLongRightC} from 'react-icons/cg'

const Home:FC = () => {
  return (
	<div className={classes.home}>
		<div className={classes.heroImg} style={{backgroundImage: `url(${heroIMG})`}}/>
		<div className={classes.heroGradient} />
		<div className={classes.header}>
			<img src={logoSVG} alt=""  className={classes.headerLogo}/>
		</div>
		<Container>
			<button className={classes.swipe}>
				<CgArrowLongRightC className={classes.swipeLogo} />
				<h6 className={classes.swipeTxt}>Swipe</h6>
			</button>
			<div className={classes.artworkWrapper}>
				<h6 className={classes.artwork}>Artwork:</h6>
				<h2 className={classes.artworkName}>God of War <MdKeyboardDoubleArrowRight className={classes.artworkIcon}/></h2>
			</div>
			<br />
			<div className={classes.titleWrapper}>
				<h1 className={classes.title1}>BEGIN YOUR EPIC</h1>
				<h1 className={classes.title2}>JOURNEY</h1>
			</div>
		</Container>
	</div>
  )
}

export default Home