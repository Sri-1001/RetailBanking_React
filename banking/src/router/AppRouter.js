import React from 'react';
import { connect } from 'react-redux';
//import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
  
import Login from '../components/Login';
import Register from '../components/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
          <Route path="/" component={Login} exact={true} />
          <Route path="/register" component={Register} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps)(AppRouter);