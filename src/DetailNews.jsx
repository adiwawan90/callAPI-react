import React from 'react';

function Detail({ key, datas }) {
  const { data } = datas;
  return (
    <div className='post'>
      <div className='content'>{data}</div>
    </div>
  );
}

export default Detail;
