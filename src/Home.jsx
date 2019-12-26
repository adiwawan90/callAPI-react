import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import Berita from './portal';
import Lain from './Lain';
import './Home.css';

export default class Home extends React.Component {
  //   state = {
  //     showComponent: true
  //   };

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <div className='navigation'>
          <div className='menu'>
            <Link to='/'>Berita</Link>
            <Link to='/lain'>JSONPlaceHolder</Link>
            <Link to='/random'>Random</Link>
          </div>
        </div>
        <Route path='/' exact component={Berita} />
        <Route path='/lain' component={App} />
        <Route path='/random' component={Lain} />
      </BrowserRouter>
    );
  }
}
