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
        url: "https://www.vanguardngr.com/2024/05/all-abducted-kogi-varsity-students-will-be-rescued-alive-govt-vows/",
        description: "Latest news",
      },
      {
        title: "Chad deploys soldiers across country after junta chief elected president",
        url: "https://www.vanguardngr.com/2024/05/chad-deploys-soldiers-across-country-after-junta-chief-elected-president/",
        description: "Latest news",
      },
      {
        title: "Ondo varsity sacks Deputy VC over alleged false petition",
        url: "https://www.vanguardngr.com/2024/05/ondo-varsity-sacks-deputy-vc-over-alleged-false-petition/",
        description: "Latest news",
      },
      {
        title: "Abducted FIJ reporter, Daniel Ojukwu regains freedom",
        url: "https://www.vanguardngr.com/2024/05/abducted-fij-reporter-daniel-ojukwu-regains-freedom/",
        description: "Latest news",
      },
      {
        title: "South Africa building collapse death toll rises to 12",
        url: "https://www.vanguardngr.com/2024/05/south-africa-building-collapse-death-toll-rises-to-12/",
        description: "Latest news",
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
          Previous
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}
export default Blog;
