import React from "react";
// import "react-slideshow-image/dist/style.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
const ImageSlider = () => {
  const slideImages = [
    {
      url: "https://unsplash.com/photos/a-large-group-of-fish-swimming-over-a-coral-reef-bOMVTvE2QFU",
      caption: "First slide",
    },
    {
      url: "https://unsplash.com/photos/a-large-group-of-fish-swimming-over-a-coral-reef-bOMVTvE2QFU",
      caption: "First slide",
    },
    {
      url: "https://unsplash.com/photos/a-large-group-of-fish-swimming-over-a-coral-reef-bOMVTvE2QFU",
      caption: "First slide",
    },
  ];
  return <div>
    <Fade>
        {slideImages.map((img,index)=>{
<div key={index}>
    <div style={{backgroundImage:`url(${img.url}`}}>

        <span>{img.caption}</span>
    </div>
</div>
        })}
    </Fade>
  </div>;
};

export default ImageSlider;
