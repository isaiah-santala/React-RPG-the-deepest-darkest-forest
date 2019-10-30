import React from 'react'

const Info = ({ char }) => {

  return (
    <div className="character-row">

      <div className="character-info">
        <img
          className="character-headshot"
          src={`img/${char.img.type}/${char.img.imgName}`}
        ></img>
        <div className="character-name character-box-item">
          {char.name}
        </div>
      </div>

      <div className="character-stats character-box-item">
        <div>HP: {char.hp}</div>
        <div>XP: {char.xp}</div>
        <div>AP: {char.ap}</div>
        <div>LVL: {char.lvl}</div>
      </div>

    </div>
  )
}

export default Info