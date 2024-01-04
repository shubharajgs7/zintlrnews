import NewsCard from "./StoryCard/NewsCard";
import SwiperComponent from "./SwiperCard/SwiperComponent";
import TopStories from "./TopNews/TopStories";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=14890cc8276e46408bdf66df8e9ab62e`
    )
    .then(res => {
      dispatch({
        type: "HEADLINES_DATA",
        payload: res.data.articles
      });
    });

  return (
    <div>
      <SwiperComponent />
      <TopStories />
      <NewsCard />
    </div>
  );
};

export default Main;
