import React from 'react';

const NewsCard = () => {
  return (
    <div style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column"}} >
        <div style={cardStyle}>
      <div style={contentGridStyle}>
        <h2>Title</h2>
        <p>Some content goes here...</p>
      </div>
      <div style={imageGridStyle}>
        <img src="your-image-url.jpg" alt="Card Image" style={imageStyle} />
      </div>
    </div><div style={cardStyle}>
      <div style={contentGridStyle}>
        <h2>Title</h2>
        <p>Some content goes here...</p>
      </div>
      <div style={imageGridStyle}>
        <img src="your-image-url.jpg" alt="Card Image" style={imageStyle} />
      </div>
    </div><div style={cardStyle}>
      <div style={contentGridStyle}>
        <h2>Title</h2>
        <p>Some content goes here...</p>
      </div>
      <div style={imageGridStyle}>
        <img src="your-image-url.jpg" alt="Card Image" style={imageStyle} />
      </div>
    </div><div style={cardStyle}>
      <div style={contentGridStyle}>
        <h2>Title</h2>
        <p>Some content goes here...</p>
      </div>
      <div style={imageGridStyle}>

        <img src="your-image-url.jpg" alt="Card Image" style={imageStyle} />
      </div>
    </div><div style={cardStyle}>
      <div style={contentGridStyle}>
        <h2>Title</h2>
        <p>Some content goes here...</p>
      </div>
      <div style={imageGridStyle}>
        <img src="your-image-url.jpg" alt="Card Image" style={imageStyle} />
      </div>
    </div>
    </div>
  );
};

const cardStyle = {
  display: 'flex',
  border: '1px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden',
  width: '300px',
  margin: '20px',
};

const contentGridStyle = {
  flex: 1,
  padding: '20px',
};

const imageGridStyle = {
  flex: 1,
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default  NewsCard;
