import React from 'react';
import axios from 'axios';
import './Home.css';

class Lain extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  getUsers() {
    axios
      .get('https://randomuser.me/api/?results=5')
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.thumbnail}`
        }))
      )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    console.log(users);
    return (
      <React.Fragment>
        <h2>Random User</h2>
        <p>Ini di dapat dari &nbsp; Random User API</p>
        <div>
          {!isLoading ? (
            users.length !== 0 ? (
              users.map(user => {
                const { username, name, email, image } = user;
                return (
                  <div key={username} className='peoples'>
                    <img className='img-rend' src={image} alt={name} />
                    <div className='person'>
                      <p className='nama'>{name}</p>
                      <p className='email'>{email}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <center>
                <h1>Error 502, Bad Gateay. Gak dapat data..</h1>
              </center>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Lain;
