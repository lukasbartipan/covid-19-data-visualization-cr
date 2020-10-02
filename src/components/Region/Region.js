import React from 'react';

import styles from "./Region.module.css";

const Region = ({regionData: {data, name}, mousePos}) => {
    if (!data?.datum)
        return ''

    return (
        <div className={styles.region_container} style={{left: mousePos.X + 'px', top: mousePos.Y + 'px', pointerEvents: "none"}}>
            <h4>{name}</h4>
            <div>
                Infikovaní: {data.pocet_nakazenych}
            </div>
            <div>
                Vyléčení: {data.pocet_vylecenych}
            </div>
            <div>
                Úmrtí: {data.pocet_umrti}
            </div>
            <p className={styles.date}>Aktuální k: {new Date(data.datum).toLocaleDateString('cs-CZ')}</p>
        </div>
    )
}

export default Region;