import {FC, useState} from 'react'
import classes from '../styles/Home.module.css'
import Container from '../components/Container'
import {logoSVG, genresIMG, adventureIMG, shooterIMG, strategyIMG, indieIMG, actionIMG, rpgIMG} from '../assets'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import {CgArrowLongRightC} from 'react-icons/cg'
import MainButton from '../components/MainButton'
import Title from '../components/Title'
import { heroGames, aboutSections, platforms } from '../data/data'
import PlatformItem from '../components/PlatformItem'

const Home:FC = () => {

	const [heroGameIndx, setHeroGameIndx] = useState(0)

  return (
	<div className={classes.home}>
		<div className={classes.heroImg} style={{backgroundImage: `url(${heroGames[heroGameIndx].img})`}} />
		<div className={classes.heroGradient} />
		<div className={classes.header}>
			<img src={logoSVG} alt=""  className={classes.headerLogo}/>
		</div>
		<Container>
			<button className={classes.swipe} onClick={() => setHeroGameIndx(prev => heroGameIndx == 5 ? 0 : prev+1)}>
				<CgArrowLongRightC className={classes.swipeLogo} />
			</button>
			<div className={classes.artworkWrapper}>
				<h6 className={classes.artwork}>Artwork:</h6>
				<h2 className={classes.artworkName}>{heroGames[heroGameIndx].txt} <MdKeyboardDoubleArrowRight className={classes.artworkIcon}/></h2>
			</div>
			<br />
			<div className={classes.titleWrapper}>
				<h1 className={classes.title1}>BEGIN YOUR EPIC</h1>
				<h1 className={classes.title2}>JOURNEY</h1>
			</div>
			<div className={classes.buttonWrapper}>
				<MainButton text='Explore' isPatterned={true}/>
				<MainButton text='My Library' isPatterned={false}/>
			</div>
			<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
			<Title text={"Biggest game library"}/>
		</Container>
		<div className={classes.about}>
				{aboutSections.map(section => 
					<div className={classes.section} style={{backgroundImage: `url(${section.img})`}}>
						<div className={classes.sectionCover}></div>
						<h1 className={classes.sectionTitle}>{section.txt}</h1>	
					</div>
				)}
		</div>
		<Container>
			<div className={classes.buttonWrapper}>
				<MainButton text='Explore' isPatterned={true}/>
			</div>
			<div className={classes.platforms}>
				{platforms.map(platform => 
					<PlatformItem Icon={platform.icon} name={platform.name} games={platform.games}/>	
				)}
			</div>
		</Container>
		<div className={classes.genres} style={{backgroundImage: `url("${genresIMG}")`}}>
			<div className={classes.genresTopGradient}></div>
			<div className={classes.genresBottomGradient}></div>
			<div className={classes.genresContent}>
				<h1 className={classes.genresTitle}>40+ Genres</h1>
				<div className={classes.genresList}>
					<div className={classes.genre}>
						<img src={strategyIMG} alt="" />
						<h4>Strategy</h4>
					</div>
					<div className={classes.genre}>
						<img src={indieIMG} alt="" />
						<h4>Indie</h4>
					</div>
					<div className={classes.genre}>
						<img src={rpgIMG} alt="" />
						<h4>RPG</h4>
					</div>
					<div className={classes.genre}>
						<img src={actionIMG} alt="" />
						<h4>Action</h4>
					</div>
					<div className={classes.genre}>
						<img src={adventureIMG} alt="" />
						<h4>Adventure</h4>
					</div>
					<div className={classes.genre}>
						<img src={shooterIMG} alt="" />
						<h4>Shooter</h4>
					</div>
				</div>
				<h4 className={classes.genresTxt}>and more ...</h4>
			</div>
			<MainButton text='Explore' isPatterned={true}/>
		</div>
	</div>
  )
}

export default Home