import React from 'react';
import { Route,Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';
import Profile from './user/Profile';
import EditProfile from './user/EditProfile';
import Signin from './auth/Signin';
import Menu from './core/Menu';

const Navbar = () => {
    return ( 
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/user/edit/:userId" component={EditProfile}/>
            <Route path="/user/:userId" component={Profile} />
        </Switch>
    </div> 
    );
}
 
export default Navbar;