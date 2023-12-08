import { heroIMG, heroIMG2, heroIMG3, heroIMG4, heroIMG5, heroIMG6, aboutIMG, aboutIMG2, aboutIMG3, squareEnixSVG, valveSVG, sonySVG, capcomSVG, EASVG, ubisoftSVG} from '../assets'
import { BsXbox, BsPlaystation, BsWindows, } from 'react-icons/bs'

export const heroGames = [
	{img: heroIMG, txt: "God of War"},
	{img: heroIMG2, txt: "Ghost of Tsushima"},
	{img: heroIMG3, txt: "The last of us 2"},
	{img: heroIMG4, txt: "Moral Combat 1"},
	{img: heroIMG5, txt: "Death Stranding"},
	{img: heroIMG6, txt: "Sekiro: Shadows Die Twice"},
]

export const aboutSections = [
	{img: aboutIMG, txt: "AAA Projects"},
	{img: aboutIMG2, txt: "E-Sports"},
	{img: aboutIMG3, txt: "Eternal classic"},
]

export const platforms = [
	{icon: BsWindows, name: "PC", games: 6729, slug: 'pc'},
	{icon: BsPlaystation, name: "PS", games: 517915, slug: 'playstation'},
	{icon: BsXbox, name: "XBOX", games: 5558, slug: 'xbox'},
]

export const developers = [
	{icon: squareEnixSVG, name: "Square Enix", projects: 356},
	{icon: sonySVG, name: "Sony", projects: 545},
	{icon: ubisoftSVG, name: "Ubisoft", projects: 337},
	{icon: valveSVG, name: "VALVE", projects: 43},
	{icon: EASVG, name: "Electronic Arts", projects: 326},
	{icon: capcomSVG, name: "Capcom", projects: 447},
]

interface colorsData {
	[key: string]: string[];
}

export const ratingColors:colorsData = {
	exceptional: ["#AFDB01", "#0FBB00"],
	recommended:["#00D2DF", "#0400BB"],
	meh:["#ED8E00", "#D22600"],
	skip: ["#D22600", "#3F00C6"]
}