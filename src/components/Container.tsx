import React, {FC} from 'react'

const Container:FC<React.PropsWithChildren> = ({children}) => {
  return (
	<div style={{width: "90vw", marginLeft: "5vw", zIndex: "1", background: "red"}}>
		{children}
	</div>
  )
}

export default Container