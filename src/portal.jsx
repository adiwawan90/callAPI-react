import React from 'react';
import axios from 'axios';

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
            content: `${user.content}`,
            image: `${user.urlToImage}`,
            create: `${user.publishedAt}`
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
        <div>
          <center>
            <h2>News Portal</h2>
          </center>
          <div>
            {!isLoading ? (
              datas.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  content,
                  create
                } = data;

                return (
                  <div key={data.title} className='container'>
                    <img src={image} alt='images' />
                    <div className='content-detail'>
                      <h2 className='title'>{title}</h2>
                      <h3 className='desc'>{description}</h3>
                      <h4 className='content-name'>{name}</h4>
                      <span>{create}</span>
                      <p className='content'>{content}</p>
                    </div>
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
