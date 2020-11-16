import { Fragment } from 'react';
import { Title } from './components/Title/Title';
import './App.scss';

export const App = () => {
    return (
        <Fragment>
            <Title amount={23}>Welcome to our App!</Title>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                repellat labore rem vel, quis voluptates commodi mollitia
                officiis molestias totam.
            </p>
            <button>Find out more!</button>
        </Fragment>
    );
};
