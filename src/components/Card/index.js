import React from "react";
import moment from "moment";

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
            <b>Article </b>
          </a>
          <span className="authorName">
            by {newsItem.author ? newsItem.author : "unknown"} |{" "}
            {moment(newsItem.publishedAt).format("dddd, MMMM Do YYYY")}
          </span>
        </span>

        <div className="lowerCard">
          <div className="description">{newsItem.description}</div>
          <span className="source">
            Read more at
            <a href={newsItem.url} target="_blank" rel="noreferrer">
              <b> {newsItem.source.name}</b>
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
