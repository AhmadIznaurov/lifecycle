import React, { useEffect } from 'react'

function Check  (props)  {
  useEffect(() => {
    console.log('I am Check and i mounted')

    return () => {
      console.log('Check is unmounted')
    }
  })

  return (
    <div>
      zed
    </div>
  )
}

export default Check