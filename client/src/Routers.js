import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from './History'
import Form from './component/Form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Navbar } from './component/navbar'

export const Routes = () => {
    return (
        <Router history={history} >
            <div>
                <MuiThemeProvider>
                    <Route exact path="/" component={Navbar} />
                    <Route exact path="/form" component={Form} />
                </MuiThemeProvider>
            </div>
        </Router>
    )
}
