import React from "react";
import "./App.css";
import FbPost from "./Components/FbPost";
import moment from "moment";
import image1 from './assets/images/19030911356.jpg';
import image2 from './assets/images/19030911405.jpg';
import image3 from './assets/images/image-1.jpg';


function App() {
  let content = {
    description:
      "Moment.js is freely distributable under the terms of the MIT license.",
    username: "M Yousuf Soomro",
    date: moment(Date.now()).toNow(),
    avatar: "M",
    images: [
      image1, image2, image3, image1, image2, image3, image1, image2, image3
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
