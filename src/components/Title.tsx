import {FC} from 'react'

const Title:FC<{text: string}> = ({text}) => {
  return (
	<div className='title'>
		{text}
	</div>
  )
}

export default Title