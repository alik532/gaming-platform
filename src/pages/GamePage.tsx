import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import classes from '../styles/GamePage.module.css'
import Header from '../components/Header'
import Container from '../components/Container'
import axios, { AxiosResponse } from 'axios'
import { IGameDetailsResponse, IGameScreenshotsResponse, IScreenshot } from '../data/types'
import {AiOutlineClockCircle, AiOutlineCalendar, AiOutlineUsergroupAdd } from 'react-icons/ai'
import {LuArrowBigLeft, LuArrowBigRight} from 'react-icons/lu'
import Title from '../components/Title'
import GenreItem from '../components/GenreItem'
import RatingItem from '../components/RatingItem'
import { ratingColors } from '../data/data'

const GamePage = () => {

	const { id } = useParams()
	const [gameData, setGameData] = useState<IGameDetailsResponse>()
	const [screenshots, setScreenshots] = useState<Array<IScreenshot>>()
	const [selectedImgIndx, setSelectedImgIndx] = useState<number>(0)

	useEffect(() => {
		if (!gameData) {
			axios.get(`https://api.rawg.io/api/games/${id}?key=7fc5502620c64a2da2116a770ca355ea`).then((response: AxiosResponse<IGameDetailsResponse>) => setGameData(response.data))
			axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=7fc5502620c64a2da2116a770ca355ea`).then((response: AxiosResponse<IGameScreenshotsResponse>) => setScreenshots(response.data.results))
		}
	})
	console.log(gameData)

	if (!gameData) {
		return <h1>Loading</h1>
	}
  return (
	<div className={classes.page}>
		<Container>
			<Header />
		</Container>
		<div className={classes.hero} style={{backgroundImage: `url(${gameData.background_image})`}}>
			<h1 className={classes.heroName}>{gameData.name}</h1>
			<div className={classes.heroDataWrapper}>
				<div className={classes.metascoreWrapper}>
					<div className={classes.metascore}>
						{gameData.metacritic}
					</div>
					<h4 className={classes.heroRatingName}>
						Metacritic
					</h4>
				</div>
				<div className={classes.heroInfoWrapper}>
					<div className={classes.heroInfo}>
						<AiOutlineClockCircle className={classes.heroInfoIcon}/>
						<div className={classes.heroInfoData}>
							<h2 className={classes.heroInfoValue}>{gameData.playtime+" hours"}</h2>
							<h5 className={classes.heroInfoName}>avg playtime</h5>
						</div>
					</div>
					<div className={classes.heroInfo}>
						<AiOutlineCalendar className={classes.heroInfoIcon}/>
						<div className={classes.heroInfoData}>
							<h2 className={classes.heroInfoValue}>{gameData.released}</h2>
							<h5 className={classes.heroInfoName}>released</h5>
						</div>
					</div>
					<div className={classes.heroInfo}>
						<AiOutlineUsergroupAdd className={classes.heroInfoIcon}/>
						<div className={classes.heroInfoData}>
							<h2 className={classes.heroInfoValue}>{gameData.added+" users"}</h2>
							<h5 className={classes.heroInfoName}>added</h5>
						</div>
					</div>
				</div>
				<div className={classes.heroRatingWrapper}>
					<div className={classes.heroRating}>
						17+
					</div>
					<h4 className={classes.heroRatingName}>
						{gameData.esrb_rating.name}
					</h4>
				</div>
			</div>
		</div>
		<div className={classes.pageContent}>
			<Container>
				<div className={classes.gameInfo}>
					<div className={classes.aboutWrapper}>
						<Title text='About'/>
						<div className={classes.about}>
							{gameData.genres && <div className={classes.aboutItem}>
								<h2 className={classes.aboutTitle}>Genres</h2>
								<div className={classes.aboutValues}>
									{gameData.genres.map(genre => <GenreItem key={genre.id} img={genre.image_background} name={genre.name} />)}
								</div>
							</div>}
							{gameData.developers && <div className={classes.aboutItem}>
								<h2 className={classes.aboutTitle}>Developers</h2>
								<div className={classes.aboutValues}>
									{gameData.developers.map(developer => <h4 key={developer.id} className={classes.aboutValue}>{developer.name}</h4>)}
								</div>
							</div>}
							{gameData.publishers && <div className={classes.aboutItem}>
								<h2 className={classes.aboutTitle}>Publishers</h2>
								<div className={classes.aboutValues}>
									{gameData.publishers.map(publisher => <h4 key={publisher.id} className={classes.aboutValue}>{publisher.name}</h4>)}
								</div>
							</div>}
							{gameData.parent_platforms && <div className={classes.aboutItem}>
								<h2 className={classes.aboutTitle}>Platforms</h2>
								<div className={classes.aboutValues}>
									{gameData.parent_platforms.map(platform => <h4 key={platform.platform.id} className={classes.aboutValue}>{platform.platform.name}</h4>)}
								</div>
							</div>}
							{gameData.description_raw && <div className={`${classes.aboutItem} ${classes.description}`}>
								<h2 className={classes.aboutTitle}>Description</h2>
								<h4 className={classes.aboutValue}>{gameData.description_raw}</h4>
							</div>}
						</div>
					</div>
					<div className={classes.ratingWrapper}>
						<Title text='Ratings'/>
						<div className={classes.ratings}>
							<div className={classes.ratingList}>
								{gameData.ratings && gameData.ratings.map(rating => 
									rating && <RatingItem title={rating.title} percent={rating.percent}/>
								)}
							</div>
							<div className={classes.ratingNumbers}>
								{gameData.ratings && gameData.ratings.map(rating =>
									(<div className={classes.rating} key={rating.id}>
										<div className={classes.dot} style={{backgroundColor: ratingColors[rating.title][0]}}></div>
										<h3 className={classes.ratingName} style={{color: ratingColors[rating.title][0]}}>{rating.title}</h3>
										<h5 className={classes.ratingValue}>{rating.count}</h5>
									</div>)
								)}
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<Title text='Media'/>
			</Container>
			<div className={classes.mediaWrapper}>
				{screenshots && <div className={classes.selectedImg} style={{backgroundImage: `url(${screenshots[selectedImgIndx].image})`}}></div>}
				{screenshots && <div className={classes.imgSwitchers}>
					<div className={classes.imgSwitch} onClick={() => setSelectedImgIndx(prev => selectedImgIndx == 0 ? screenshots.length-1 : prev-1)} style={{backgroundImage: `url(${screenshots[selectedImgIndx == 0 ? screenshots.length-1 : selectedImgIndx - 1].image})`}}>
						<div className={classes.switchIconWrapper}>
							<LuArrowBigLeft className={classes.switchIcon}/>
						</div>
					</div>
					<div className={classes.imgSwitch} onClick={() => setSelectedImgIndx(prev => selectedImgIndx == screenshots.length-1 ? 0 : prev+1)} style={{backgroundImage: `url(${screenshots[selectedImgIndx == screenshots.length-1 ? 0 : selectedImgIndx + 1].image})`}}>
						<div className={classes.switchIconWrapper}>
							<LuArrowBigRight className={classes.switchIcon}/>
						</div>
					</div>
				</div>}
			</div>
		</div>
	</div>
  )
}

export default GamePage