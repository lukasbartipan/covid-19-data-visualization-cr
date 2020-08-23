import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data: {modified, aktivni_pripady, aktualne_hospitalizovani, vyleceni, umrti }}) => { 
    if(!modified) {
        return 'Načítám...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={11} md={4} className={cx(styles.card, styles.infected)}>
                    <CardContent md={4}>
                        <Typography color="textSecondary" gutterBottom>Infikovaní</Typography>
                        <Typography variant="h5">
                            <CountUp start={0}  end={aktivni_pripady} duration={2} separator=" " />
                        </Typography>
                        <Typography color="textSecondary">{new Date(modified).toLocaleString('cs-CZ')}</Typography>
                        <Typography variant="body2">Počet aktivních případů nákazy COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={4} className={cx(styles.card, styles.recovered)}>
                    <CardContent md={4}>
                        <Typography color="textSecondary" gutterBottom>Vyléčení</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={vyleceni} duration={2} separator=" " />
                        </Typography>
                        <Typography color="textSecondary">{new Date(modified).toLocaleString('cs-CZ')}</Typography>
                        <Typography variant="body2">Počet vyléčených případů nákazy COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={4} className={cx(styles.card, styles.hospitalized)}>
                    <CardContent md={4}>
                        <Typography color="textSecondary" gutterBottom>Hospitalizovaní</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={aktualne_hospitalizovani} duration={2} separator=" "/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(modified).toLocaleString('cs-CZ')}</Typography>
                        <Typography variant="body2">Počet hospitalizovaných s nákazou COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={4} className={cx(styles.card, styles.deaths)}>
                    <CardContent md={4}>
                        <Typography color="textSecondary" gutterBottom>Úmrtí</Typography>
                        <Typography variant="h5">
                            <CountUp start={0}  end={umrti} duration={2} separator=" " />
                        </Typography>
                        <Typography color="textSecondary">{new Date(modified).toLocaleString('cs-CZ')}</Typography>
                        <Typography variant="body2">Počet úmrtí na nákazu COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;