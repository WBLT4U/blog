import React, { useEffect, useState, } from "react";

//Create our root component =>  App component
function Blog() {
  //Set up our state
  const [currentPosition, setCurrentPosition] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);
  
  //Set our initial state
  useEffect(() => {
    //List News Items
    const newsItems = [
      {
        title: "All abducted Kogi varsity students will be rescued alive, govt vows",
        author: "Ododo",
        description: "Latest news",
        state: "Kogi State",
        time: "9:00am",

      },
      {
        title: "Chad deploys soldiers across country after junta chief elected president",
        author: "Mal. Isah Gambo",
        description: "Latest news",
        state: "Kano State",
        time: "10:00am",
      },
      {
        title: "Ondo varsity sacks Deputy VC over alleged false petition",
        author: "Mr. Gbade Olalekan",
        description: "Latest news",
        state: "Ondo State",
        time: "11:00am",
      },
      {
        title: "Abducted FIJ reporter, Daniel Ojukwu regains freedom",
        author: "Mr. Chukwuemeka",
        description: "Latest news",
        state: "Imo State",
        time: "1:00pm",
      },
      {
        title: "South Africa building collapse death toll rises to 12",
        author: "Mr. Sunday Dare",
        description: "Latest news",
        state: "Lagos State",
        time: "2:00pm",
      },
    ];
    const item = newsItems[currentPosition];
    //Set state
    setListItems(newsItems);
    //Set our state
    setNews(item);
    setLoading(false);
  }, [currentPosition]);
  //Handle next button click
  const handleNext = (event) => {
    event.preventDefault();
    //Update our state
    const length = listItems.length;
    const count = length - 1;
    if(currentPosition < count) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
    };
    
  //Handle previous button click
  const handlePrevious = (event) => {
    event.preventDefault();
    //Update our state
    if(currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1); 
    } else {
      setCurrentPosition(0);
    }
  };
  return (
    <section className="main-container">
      <section className="news">
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="news-item">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url}>{news.url}</a>
          </div>
        )}
      </section>
      <div className="pagination">
        <button className="prev" onClick={handlePrevious}>
          Previous Article
        </button>
        <button className="next" onClick={handleNext}>
          Next Article
        </button>
      </div>
    </section>
  );
}
export default Blog;
