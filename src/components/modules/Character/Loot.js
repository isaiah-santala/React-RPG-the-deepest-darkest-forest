import React from 'react'

const Loot = ({ char, describeItem }) => {

  const { loot } = char

  return (
    <div className="character-row">

      <div className="character-loot character-box-item">

        {Object.keys(loot).map((e, i) =>
          <button
            key={i}
            className="button loot-item"
            onClick={() => describeItem(
              loot[e].description
            )}
            >{loot[e].name}{`(${loot[e].qt})`}</button>
        )}

      </div>

    </div>
  )
}

export default Loot