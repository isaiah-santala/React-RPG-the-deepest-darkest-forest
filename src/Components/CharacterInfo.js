import React, { Component } from 'react';

export default function charactersInfo(props) {
    let pok = props.characters;
    let hp = 0;
    if(pok.getHp() > 0)
        let hp = pok.getHp() / pok.getMaxHp();

    return (
        <div className="charactersInfo">
            <div className="name">
                {pok.getName()}
            </div>
            <div className="bottom">
                <div className="level">
                    :L {pok.getLevel()}
                </div>
                <div className="hitPoints">
                    <div className="remaining" style={{ width: (hp * 100) + "%" }}> </div>
                </div>
            </div>
        </div>
    );
}