import {FC, useState } from 'react'
import classes from '../styles/Home.module.css'
import Container from '../components/Container'
import {logoSVG, genresIMG, adventureIMG, shooterIMG, strategyIMG, indieIMG, actionIMG, rpgIMG} from '../assets'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import {CgArrowLongRightC} from 'react-icons/cg'
import MainButton from '../components/MainButton'
import Title from '../components/Title'
import { heroGames, aboutSections, platforms, developers } from '../data/data'
import PlatformItem from '../components/PlatformItem'
import DeveloperItem from '../components/DeveloperItem'
import { AiOutlineUser } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import { auth } from '../firebase/firebase'

const Home:FC = () => {

	const navigate = useNavigate()

	const [heroGameIndx, setHeroGameIndx] = useState(0)
	const currentUserName = useAppSelector(state => state.userReducer.data.name)
	
  return (
	<div className={classes.home}>
		<Container>
			<Link to={auth.currentUser ? `profile/${auth.currentUser.uid}` : '/signin'} className={classes.profileWrapper}>
				{currentUserName && <h3 className={classes.profileName}>{currentUserName}</h3>}
				<AiOutlineUser className={classes.profile}/>
			</Link>
		</Container>
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
				<MainButton text='Explore' isPatterned={true} onClick={() => {navigate('/feed')}}/>
				<MainButton text='My Library' isPatterned={false}/>
			</div>
			<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
			<Title text={"Biggest game library"}/>
		</Container>
		<div className={classes.about}>
			{aboutSections.map(section => 
				<div key={section.txt} className={classes.section} style={{backgroundImage: `url(${section.img})`}}>
					<div className={classes.sectionCover}></div>
					<h1 className={classes.sectionTitle}>{section.txt}</h1>	
				</div>
			)}
		</div>
		<Container>
			<div className={classes.buttonWrapper1}>
				<MainButton text='Explore' isPatterned={true} onClick={() => {navigate('/feed')}}/>
			</div>
			<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
			<div className={classes.platforms}>
				{platforms.map(platform => 
					<PlatformItem key={platform.name} Icon={platform.icon} name={platform.name} games={platform.games}/>	
				)}
			</div>
			<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
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
			<MainButton text='Explore' isPatterned={true} onClick={() => {navigate('/feed')}}/>
		</div>
		<Container>
		<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
			<Title text='Talented developers'/>
			<div className={classes.developers}>
				{developers.map(developer => 
					<DeveloperItem key={developer.name} name={developer.name} icon={developer.icon} projects={developer.projects} />	
				)}
				</div>
		</Container>
	</div>
  )
}

export default Home