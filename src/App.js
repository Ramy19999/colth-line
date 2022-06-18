import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import '../src/pages/homepage/homepage.styles.scss';
import {Route, Routes, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import ShopPage from './pages/shop/shop.component';
import {setCurrentUser} from '../src/redux/user/user.actions'
import './App.css';
import Header from './components/header/header.componenet';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.componenet';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './redux/user/user.slectors';
import { withRouter } from './assets/with.router';
import CheckoutPage from './pages/checkout/checkout.componenet';
class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async user =>{
      createUserProfileDocument(user);
    });
  }
  render() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/checkout' element={<CheckoutPage/>} />
      <Route  path='/shop/*' element={<ShopPage/>} />
      <Route exact path='/signin'element={
        this.props.currenUser ?
        (<Navigate to = '/'/>):
          ( <SignInAndSignUpPage/>) 
          } />
      </Routes>
    </div>
  );
  }
}
const mapStateToProps = createStructuredSelector ({
currenUser : selectCurrentUser
});
const  mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(App)); 
