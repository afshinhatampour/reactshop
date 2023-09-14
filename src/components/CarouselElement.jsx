import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import CarouseItem from "./CarouseItem";

function CarouselElement() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>
              <CarouseItem title="lorem" bgColor="997565"/>
              <CarouseItem title="lorem" bgColor="48dd65"/>
              <CarouseItem title="lorem" bgColor="4875ff"/>
              <CarouseItem title="lorem" bgColor="ff7565"/>
              <CarouseItem title="lorem" bgColor="ffdd65"/>
              <CarouseItem title="lorem" bgColor="48ffdd"/>
              <CarouseItem title="lorem" bgColor="aa75bb"/>
              <CarouseItem title="lorem" bgColor="48ee00"/>
              <CarouseItem title="lorem" bgColor="880011"/>
            </Carousel>
        </>
    );
}

export default CarouselElement;
