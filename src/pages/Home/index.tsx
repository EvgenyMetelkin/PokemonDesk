import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

import s from './Home.module.scss';

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
            <Button>
                See pokemons
            </Button>
        </div>
    );
};

export default HomePage;