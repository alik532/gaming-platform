import React, {FC} from 'react'

const Container:FC<React.PropsWithChildren> = ({children}) => {
  return (
	<div style={{width: "90vw", marginLeft: "5vw", zIndex: "6", height: "4px"}}>
		{children}
	</div>
  )
}

export default Container