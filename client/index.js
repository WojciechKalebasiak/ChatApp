import React from 'react';
import ReacDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/containers/App';

const render = (Component) => {
    ReacDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App)
if (module.hot) {
    module.hot.accept('./components/containers/App', () => {
        const NewApp = require('./components/containers/App').default;
        render(NewApp);
    });
}