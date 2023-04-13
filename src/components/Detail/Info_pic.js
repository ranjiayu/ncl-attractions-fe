import React, { useState } from "react";
import Slider from "react-slick";
import leftButton from "../../images/arrow-left.png";
import rightButton from "../../images/arrow-right.png";
import placeView1 from "../../images/view.png";
import placeView2 from "../../images/view2.png";
import placeView3 from "../../images/view3.png";

import "../../styles/Detail/Info_pic.css";
//view pictures

const Carousel = () => {
    const images = [
        placeView1,
        placeView2,
        placeView3
    ];
    const [index, setIndex] = useState(0);
    const handlePrev = () => {
        setIndex((index - 1 + images.length) % images.length);
    }
    const handleNext = () => {
        setIndex((index + 1) % images.length);
    }
    return (
        <div className="carousel">
            <div className="pics-container">
                <img src={images[index]} alt="" className="pics" />
                <img src={leftButton} className="leftBtn" onClick={handlePrev} />
                <img src={rightButton} className="rightBtn" onClick={handleNext} />
            </div>
        </div>
    );
}
// const Carousel = () => {
//     const settings ={
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
//     };
//     return (
//         <Slider {...settings}>
//       <div>
//         <h3>Slide 1</h3>
//       </div>
//       <div>
//         <h3>Slide 2</h3>
//       </div>
//       <div>
//         <h3>Slide 3</h3>
//       </div>
//       <div>
//         <h3>Slide 4</h3>
//       </div>
//       <div>
//         <h3>Slide 5</h3>
//       </div>
//     </Slider>
//   );
// };

export default Carousel;

// function Info_pic(){
//     return (
//         <div className="info_pic">
//             <div className="leftBtn">
//                 <img src={leftButton} />
//             </div>
//             <div className="placeView">
//                 <img src={placeView} />
//             </div>
//             <div className="rightBtn">
//                 <img src={rightButton} />
//             </div>
//         </div>
//     )   
// }


// export default Info_pic;
