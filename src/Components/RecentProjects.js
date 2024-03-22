import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";

 function RecentProjects() {
    const sliderItems = [
      {
        id: 0,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
      {
        id: 1,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
      {
        id: 2,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
      {
        id: 3,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
      {
        id: 4,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
      {
        id: 5,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
      {
        id: 6,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
      {
        id: 7,
        name: "imgage",
        src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      },
    ];

    const cards = [
        {
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
          title: "Title 1",
          id: 1,
        },
        {
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
          title: "Title 2",
          id: 2,
        },
        {
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
          title: "Title 3",
          id: 3,
        },
        {
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
          title: "Title 4",
          id: 4,
        },
        {
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
          title: "Title 5",
          id: 5,
        },
        {
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
          title: "Title 6",
          id: 6,
        },
        {
          url: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
          title: "Title 7",
          id: 7,
        },
      ];

// const Example = () => {
//     return (
//       <div className="bg-neutral-800">
//         <div className="flex h-48 items-center justify-center">
//           <span className="font-semibold uppercase text-neutral-500">
//             Scroll down
//           </span>
//         </div>
//         <HorizontalScrollCarousel />
//         <div className="flex h-48 items-center justify-center">
//           <span className="font-semibold uppercase text-neutral-500">
//             Scroll up
//           </span>
//         </div>
//       </div>
//     );
//   };
  
//   const HorizontalScrollCarousel = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: targetRef,
//     });
  
//     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
//     return (
//       <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//         <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex gap-4">
//             {cards.map((card) => {
//               return <Card card={card} key={card.id} />;
//             })}
//           </motion.div>
//         </div>
//       </section>
//     );
//   };
  
//   const Card = ({ card }) => {
//     return (
//       <div
//         key={card.id}
//         className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//       >
//         <div
//           style={{
//             backgroundImage: `url(${card.url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//         ></div>
//         <div className="absolute inset-0 z-10 grid place-content-center">
//           <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//             {card.title}
//           </p>
//         </div>
//       </div>
//     );
//   };

const itemsRef = useRef(null);
//document içinde get element yerine kullanılabilr 
const [isMouseDown, setisMouseDown]= useState(false);
const [startX, setStartX]= useState(0);
const [scrollLeft, setscrollLeft]= useState(0);
const [walk, setwalk]= useState(0);

let scrollTimeout;

const slider = () => {

    const handleonMouseDown=(e)=>{
        console.log(e);
        setisMouseDown(true)
        setStartX(e.pageX - - itemsRef.current.offsetLeft);
        setscrollLeft(itemsRef.current.scrollLeft-itemsRef.current.offsetLeft*2);
        clearTimeout(scrollTimeout);

    }
    const handleonMouseLeave=()=>{
        setisMouseDown(false)
    }
    const handleonMouseUp=()=>{
        setisMouseDown(false)
      
    }
    const handleonMouseMove=(e)=>{
        if(!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        setwalk(x-startX) ;
        itemsRef.current.scrollLeft=scrollLeft-walk;
    }

  return (
    <div id="sample_item" ref={itemsRef}
        onMouseDown={handleonMouseDown}
        onMouseLeave={handleonMouseLeave}
        onMouseUp={handleonMouseUp}
        onMouseMove={handleonMouseMove}>
      {sliderItems.map((item) => (
        <div>
          <div class="sample_img">
            <img
              src={item.src}
              style={{ height: 300, margin: 20 }}
              alt={item.name}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
    return (
      <div>
        <div id="RecentProjects">
          <div class="subTitleDiv">
            <h2>Recent Projects</h2>
            <div class="line"></div>
          </div>
          <div class="slider"> 
          {slider()}
            </div>
          <div class="d-flex justify-content-center">
            <button id="recentButton" style={{ marginLeft: 0 }}>
              See all project /{">"}
            </button>
          </div>
        </div>
      </div>
    );


}

export default RecentProjects;