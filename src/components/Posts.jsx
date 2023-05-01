/* eslint-disable react/prop-types */

import LazyImage from './LazyImage';

const Posts = ({ jsonData }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        width: '80vw',
        gridGap: '1rem',
        margin: '0 auto',
        padding:'1rem'
      }}
    >
      {jsonData.map((post) => (
        <div
          key={post.id}
          style={{
            height: '1000px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            borderRadius: '10x',
            overflow: 'hidden',
          }}
        >
          <LazyImage imgUrl={post.img} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
