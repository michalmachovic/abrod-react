import React from 'react';
import axios from 'axios';
import NewsItems from './NewsItems';

class News extends React.Component {
  state = { news: [ ] };

  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
		});
    this.setState({ news: response.data });

  }
  render() {


    return (
        <div>
            News
            --
            <NewsItems news={this.state.news} />
            --
        </div>
    );
  }
}

export default News;
