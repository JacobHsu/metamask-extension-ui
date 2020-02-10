import React from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

const Index = props => {
    const { store } = props
    return (
        <Provider store={store}>
            <HashRouter hashType="noslash">
                <Routes/>
            </HashRouter>
        </Provider>
        
    );
} 
export default Index