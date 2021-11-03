import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={HomeScreen}/>
                        <Route path="/about" component={AboutScreen}/>
                        <Route path="/login" component={LoginScreen}/>
                        <Route component={HomeScreen}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
