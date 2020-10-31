import React from 'react'
import './DrumPad.css';

const DrumPad = ({picture, id, letter, src}) => {
    
    const styles= {
        background: `url(${picture}) no-repeat top center`,
        backgroundSize: 'cover',   
    }
    return (
        <div className='drum-pad' id={id}  style={styles}>
            <p className='drum-pad__letter' >{letter}</p>
            <audio src={src}  className='clip' id={letter} />
        </div>
    )
}

export default DrumPad
