import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class Berita extends React.Component {
  state = {
    datas: [],
    isLoading: true,
    errors: null
  };

  getDatas() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=41c65c4044e6440791b929f0d26153ac'
      )
      .then(response =>
        response.data.articles.map(
          user => ({
            name: `${user.source.name}`,
            title: `${user.title}`,
            description: `${user.description}`,
            content: `${user.content}`
          })
          //   {
          //     console.log(response.data.articles);
          //   }
        )
      )

      .then(datas => {
        this.setState(
          {
            datas,
            isLoading: false
          },
          console.log(datas)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getDatas();
  }

  render() {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>
        <div className='container'>
          <h2>News Portal</h2>

          <div>
            {!isLoading ? (
              datas.map(data => {
                const { name, title, description, content } = data;
                return (
                  <div key={name}>
                    <h2>{title}</h2>
                    <h3>{name}</h3>
                    <div>
                      <h3>{description}</h3>
                    </div>
                    <p>{content}</p>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Berita;
