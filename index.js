import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const Player = () => {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(<Player />, document.querySelector('#root'));