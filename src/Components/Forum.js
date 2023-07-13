import React from 'react'
import { Provider } from 'react-redux';

import reduxThunk from "redux-thunk";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main';

const persistedState = {};
const store = createStore(
    // reducers,
    persistedState,
    applyMiddleware(reduxThunk))
const Forum = () => (
    <Provider store={store} className="app">
        <main>
            <Header />
            <Main />
            <Footer />
        </main>
    </Provider>
)
export default Forum;