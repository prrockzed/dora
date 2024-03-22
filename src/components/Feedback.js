import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Feedback = ({ userData }) => {
  const clientData = userData.data.testimonials;
  return (
    <section className="feedback-section">
      <div className="container">
        <div className="feedback-section-title-cont">
          {/* Feedback Title */}
          <div className="section_title wow fadeInUp">
            <h2>
              Clients are satisfied for <br />
              our work, view feedback
            </h2>
          </div>
          {/* Slider arrow */}
          <div className="feedback-btn-cont wow fadeInUp">
            <a href="#" className="slider-arrow feedback-left">
              <img
                className="svg"
                src="images/icons/arrow-left.svg"
                alt="dora_img"
              />
            </a>
            <a href="#" className="slider-arrow active feedback-right">
              <img
                className="svg"
                src="images/icons/arrow-right.svg"
                alt="dora_img"
              />
            </a>
          </div>
        </div>
        <Swiper
          {...doraSlider.feedbackSlider}
          className="swiper feedback-items-cont"
        >
          <div className="swiper-wrapper feedback-items wow fadeInUp">
            {clientData.map((client, i) =>
              client.enabled ? (
                <SwiperSlide
                  className="swiper-slide feedback-item"
                  key={client._id}
                >
                  <div className="feedback-active-img">
                    <img
                      src={client.image.url}
                      alt="dora_img"
                      key={client.image.public_id}
                    />
                  </div>
                  <div className="feedback-info-cont">
                    <div className="feedback-title-cont">
                      <h3>Awesome Service!</h3>
                      <div className="feedback-title-element">
                        <img
                          src="./images/bg_elements/feedback-element.svg"
                          alt="dora_img"
                        />
                      </div>
                    </div>
                    <p className="feedback-txt">{client.review}</p>
                    <div className="feedback-person-info">
                      <div className="feedback-person-name">
                        <h4>{client.name}</h4>
                        <p>{client.position}</p>
                        <div className="feedback-star-cont">
                          <ul>
                            <li>
                              <img src="images/icons/Star.svg" alt="dora_img" />
                            </li>
                            <li>
                              <img src="images/icons/Star.svg" alt="dora_img" />
                            </li>
                            <li>
                              <img src="images/icons/Star.svg" alt="dora_img" />
                            </li>
                            <li>
                              <img src="images/icons/Star.svg" alt="dora_img" />
                            </li>
                            <li>
                              <img src="images/icons/Star.svg" alt="dora_img" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default Feedback;

// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { doraSlider } from "../sliderProps";

// const Feedback = ({ userData }) => {
//   const clientData = userData.data.testimonials;
//   const [showFullReview, setShowFullReview] = useState(false);

//   const toggleReview = () => {
//     setShowFullReview(!showFullReview);
//   };

//   return (
//     <section className="feedback-section">
//       <div className="container">
//         <div className="feedback-section-title-cont">
//           {/* Feedback Title */}
//           <div className="section_title wow fadeInUp">
//             <h2>
//               Clients are satisfied for <br />
//               our work, view feedback
//             </h2>
//           </div>
//           {/* Slider arrow */}
//           <div className="feedback-btn-cont wow fadeInUp">
//             <a href="#" className="slider-arrow feedback-left">
//               <img
//                 className="svg"
//                 src="images/icons/arrow-left.svg"
//                 alt="dora_img"
//               />
//             </a>
//             <a href="#" className="slider-arrow active feedback-right">
//               <img
//                 className="svg"
//                 src="images/icons/arrow-right.svg"
//                 alt="dora_img"
//               />
//             </a>
//           </div>
//         </div>
//         <Swiper
//           {...doraSlider.feedbackSlider}
//           className="swiper feedback-items-cont"
//         >
//           <div className="swiper-wrapper feedback-items wow fadeInUp">
//             {clientData.map((client, i) =>
//               client.enabled ? (
//                 <SwiperSlide
//                   className="swiper-slide feedback-item"
//                   key={client._id}
//                 >
//                   <div className="feedback-active-img">
//                     <img
//                       src={client.image.url}
//                       alt="dora_img"
//                       key={client.image.public_id}
//                     />
//                   </div>
//                   <div className="feedback-info-cont">
//                     <div className="feedback-title-cont">
//                       <h3>Awesome Service!</h3>
//                       <div className="feedback-title-element">
//                         <img
//                           src="./images/bg_elements/feedback-element.svg"
//                           alt="dora_img"
//                         />
//                       </div>
//                     </div>
//                     <p className="feedback-txt">
//                       {client.review.length > 260 && !showFullReview
//                         ? `${client.review.substring(0, 200)}...`
//                         : client.review}
//                       {client.review.length > 260 && (
//                         <span className="more-link" onClick={toggleReview}>
//                           {showFullReview ? "...less" : "...more"}
//                         </span>
//                       )}
//                     </p>
//                     <div className="feedback-person-info">
//                       <div className="feedback-person-name">
//                         <h4>{client.name}</h4>
//                         <p>{client.position}</p>
//                         <div className="feedback-star-cont">
//                           <ul>
//                             <li>
//                               <img src="images/icons/Star.svg" alt="dora_img" />
//                             </li>
//                             <li>
//                               <img src="images/icons/Star.svg" alt="dora_img" />
//                             </li>
//                             <li>
//                               <img src="images/icons/Star.svg" alt="dora_img" />
//                             </li>
//                             <li>
//                               <img src="images/icons/Star.svg" alt="dora_img" />
//                             </li>
//                             <li>
//                               <img src="images/icons/Star.svg" alt="dora_img" />
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ) : null
//             )}
//           </div>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Feedback;
