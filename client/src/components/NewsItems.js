import React from 'react';

const NewsItems = (props) => {

//  if (!props.news.length) return <div>test</div>;
  const items = props.news.map(item => {
    return <div key={item.id}>{item.title}</div>
  });

  return (
      <div>
        {items}
      </div>
  );

}

export default NewsItems;
