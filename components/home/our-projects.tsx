// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Wrapper from "../layout/wrapper";
// import SectionTitle from "../shared/section-title";
// import Button from "../shared/button";

// export default function OurProjects() {
//   let settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     easing: "easeOutElastic",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="h-screen grid place-items-center">
//         <Wrapper>
//           <SectionTitle className="mb-10">Our Projects</SectionTitle>
//           <div className="space-y-8">
//             <div className="text-black">
//               <Slider className="-mx-2" {...settings}>
//                 <div className="px-2">
//                   <div className="rounded-lg overflow-hidden flex items-center justify-center">
//                     <img src="//unsplash.it/300/300" alt="image" />
//                   </div>
//                 </div>
//                 <div className="px-2">
//                   <div className="rounded-lg overflow-hidden flex items-center justify-center">
//                     <img src="//unsplash.it/300/300" alt="image" />
//                   </div>
//                 </div>
//                 <div className="px-2">
//                   <div className="rounded-lg overflow-hidden flex items-center justify-center">
//                     <img src="//unsplash.it/300/300" alt="image" />
//                   </div>
//                 </div>
//                 <div className="px-2">
//                   <div className="rounded-lg overflow-hidden flex items-center justify-center">
//                     <img src="//unsplash.it/300/300" alt="image" />
//                   </div>
//                 </div>
//                 <div className="px-2">
//                   <div className="rounded-lg overflow-hidden flex items-center justify-center">
//                     <img src="//unsplash.it/300/300" alt="image" />
//                   </div>
//                 </div>
//                 <div className="px-2">
//                   <div className="rounded-lg overflow-hidden flex items-center justify-center">
//                     <img src="//unsplash.it/300/300" alt="image" />
//                   </div>
//                 </div>
//               </Slider>
//             </div>
//             <div className="text-center">
//               <Button variant="primary">View All Project</Button>
//             </div>
//           </div>
//         </Wrapper>
//       </div>
//     </>
//   );
// }
