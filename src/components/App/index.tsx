import React from 'react';

import { cn } from 'util/classname';

import './styles.scss';

const b = cn('app');

function App() {
    return (
        <div className={b()}>
            <header className={b('header')}>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={b('link')}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
