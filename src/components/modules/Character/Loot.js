import React from 'react'

const Loot = ({ char }) => {

  const describeItem = (description) => alert(description)

  return (
    <div className="character-row">

      <div className="character-loot character-box-item">

        {Object.keys(char.loot).map((e, i) =>
          <div
            key={i}
            className="loot-item"
            onClick={() => describeItem(char.loot[e].description)}
          >{char.loot[e].name}</div>
        )}

      </div>

    </div>
  )
}

export default Loot