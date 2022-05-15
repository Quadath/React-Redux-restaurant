import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import Provider from 'react-redux/lib/components/Provider';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';


import './index.scss';

const restoServive = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoServive}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

