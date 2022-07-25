import "./App.css";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Content from "./components/Content";
// useContext hook to store data to state
// Not Required* Results in news feed should be paginated (15 results at a time)
// Implement a sorting algorithm to sort data (alphabetically || based on published date)
// Articles in the feed should be searchable and sortable.
// Optional styled card component
// Clean UI
// Refactor

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=2e1996b8e2854c41b4fc92f10d3a631e`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  return (
    <div>
      <Navigation />
      <Content newsArray={newsArray} newsResults={newsResults} />
      <div className="copyRight">
        <p>&copy;{new Date().getFullYear()} NewNews - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
