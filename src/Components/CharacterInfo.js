import React, { Component } from 'react';

export default function charactersInfo(props) {
    var pok = props.characters;
    var hp = 0;
    if(pok.getHp() > 0)
        var hp = pok.getHp() / pok.getMaxHp();

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