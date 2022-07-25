import Card from "../Card";

function Content({ newsArray, newsRsults }) {
  return (
    <div>
      {newsArray.map((newsItem) => (
        <Card newsItem={newsItem} key={newsItem.title} />
      ))}
    </div>
  );
}

export default Content;
