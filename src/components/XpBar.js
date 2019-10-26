import React, { useEffect } from 'react'
import Filler from './Filler'

const XpBar = () => {

    const [ percentage, setPercentage ] = useState(0)

    return (
        <div className='xpBar'>
           <Filler />
        </div>
    )
}

export default XpBar
