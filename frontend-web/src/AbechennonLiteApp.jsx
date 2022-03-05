import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';



export const AbechennonLiteApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}





