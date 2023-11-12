import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../data.json";

const trending = data.TrendingNow
// trending.CoverImage

export function TrendingCarousel() {
  const responsive = {
    superLargeDesktop: {      
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="grid w-full">
      <Carousel        
        draggable={true}
        centerMode={true}
        arrows={false}
        containerClass ="select-none"
        itemClass="select-none border-2 border-green px-0"
        responsive={responsive}
      >
        {trending.map((element) => (
          <div          
            key={element.Id}
          >
            <img itemClass="select-none" src={element.CoverImage} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
