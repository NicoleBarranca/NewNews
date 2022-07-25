import React from "react";

function Card({ newsItem }) {
  console.log(newsItem);
  return (
    <div className="articleCard">
      <img
        alt={newsItem.title}
        src={newsItem.urlToImage}
        className="articleImg"
      />
      <div className="articleText">
        <span className="title">{newsItem.title}</span>
        <span className="author">
          <a href={newsItem.url} target="_blank" rel="noreferrer">
            <p>Read article</p>
          </a>
          {/* add published date */}
          <span className="authorName">
            by {newsItem.author ? newsItem.author : "unknown"}
          </span>
        </span>
        <div className="lowerCard">
          <div className="description">{newsItem.description}</div>
          <span>
            read more at{" "}
            <a href={newsItem.url} target="_blank" rel="noreferrer">
              {newsItem.source.name}
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
