import React from 'react'

const Loot = ({ char, handleAction }) => {

  const { loot } = char

  const describeItem = (msg) => 
    handleAction('DESCRIBE_ITEM', { msg: msg })


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
          >{loot[e].name}</button>
        )}

      </div>

    </div>
  )
}

export default Loot