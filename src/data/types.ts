export interface IGamesResponse {
	count: number,
	next: string | null,
	previous: string | null,
	results: Array<IGame>
}

export interface IGenresResponse {
	count: number,
	next: string | null,
	previous: string | null,
	results: Array<IGenre>
}

export interface IGame {
	background_image: string,
	id: number,
	name: string,
	metacritic: number,
	parent_platforms: Array<IPlatform>,
	genres: Array<IGenre>,
	released: string,
	playtime: number,
	ratings: Array<IRating>
}

export interface IPlatform {
	id: number,
	name: string,
	slug: string,
}

export interface IGenre {
	id: number,
	name: string,
	image_background: string,
	games_count: number,
}

export interface IRating {
	title: string,
	id: number,
	percent: number,
	count: number,
}