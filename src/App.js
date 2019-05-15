import React from "react";
import "./App.css";
import FbPost from "./Components/FbPost";
import moment from "moment";
import image1 from './assets/images/animal-animal-photography-blur-145939.jpg';
import image2 from './assets/images/beautiful-bloom-blooming-414160.jpg';
import image3 from './assets/images/bench-carved-stones-cemetery-257360.jpg';
import image4 from './assets/images/bridge-clouds-cloudy-556416.jpg';
import image5 from './assets/images/clouds-cloudy-farm-236047.jpg';


function App() {
  let content = {
    description:
      "Moment.js is freely distributable under the terms of the MIT license.",
    username: "M Yousuf Soomro",
    date: moment(Date.now()).toNow(),
    avatar: "M",
    images: [
      image1, image2, image3, image4, image5
    ]
  };
  return (
    <div>
      <FbPost
        description={content.description}
        username={content.username}
        date={content.date}
        avatar={content.avatar}
        images={content.images}
      />
    </div>
  );
}

export default App;
