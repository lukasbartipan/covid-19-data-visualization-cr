import React from 'react';

import styles from "./Region.module.css";

const Region = ({regionData, mousePos}) => {
    if (!regionData?.datum)
        return ''

    return (
        <div className={styles.region_container} style={{left: mousePos.X, top: mousePos.Y + 175, pointerEvents: "none"}}>
            <div>
                Nakažení: {regionData.pocet_nakazenych}
            </div>
            <div>
                Vyléčení: {regionData.pocet_vylecenych}
            </div>
            <div>
                Umrtí: {regionData.pocet_umrti}
            </div>
            <p className={styles.date}>Aktuální k: {new Date(regionData.datum).toLocaleDateString('cs-CZ')}</p>
        </div>
    )
}

export default Region;