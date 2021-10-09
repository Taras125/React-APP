import React from 'react'
import '../App.css';
import ActorCards from './ActorCards';

const Home = () => {
    return (
        <div className="home">
            <h1 style={{ marginBottom: '15px' }}>
            List of
                <span style={{ color: 'yellow' }}> Actors</span>
            </h1>
            <ActorCards />
        </div>
    )
}

export default Home;
