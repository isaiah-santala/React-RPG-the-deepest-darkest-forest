import React from 'react'

const Info = ({ char }) => {

  return (
    <div className="character-row">

      <div className="character-info">
        <img
          className="character-headshot"
          src={`img/${char.desc.img.type}/${char.desc.img.imgName}`}
        ></img>
        <div className="character-name character-box-item">
          {char.desc.name}
        </div>
      </div>

      <div className="character-stats character-box-item">
        {Object.keys(char.stats).map((e, i) =>
          <div>{e}: {char.stats[e]}</div>
        )}
      </div>

    </div>
  )
}

export default Info