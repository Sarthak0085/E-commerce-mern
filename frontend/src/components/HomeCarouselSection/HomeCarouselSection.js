import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from "react";


const HomeCarouselSection = ({ data, sectionName }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        500: { items: 1.5 },
        720: { items: 2.5 },
        1024: { items: 5 },
    };



    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data?.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <h2 className="text-2xl font-bold text-gray-900">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    key={activeIndex}
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {
                    activeIndex !== 0 &&
                    <button
                        onClick={slidePrev}
                        className="z-50 absolute text-blue-700 left-0 top-[9rem] transform -translate-x-5 rounded-full bg-gray-100"
                        aria-label="prev"
                    >
                        <NavigateBeforeIcon fontSize="large" />
                    </button>
                }
                {
                    activeIndex !== items?.length - 5 &&
                    <button
                        onClick={slideNext}
                        className="z-50 absolute text-blue-700 right-0 top-[9rem] transform translate-x-5 rounded-full bg-gray-100"
                        aria-label="prev"
                    >
                        <NavigateNextIcon fontSize="large" />
                    </button>
                }
            </div>
        </div>
    );
};


export default HomeCarouselSection;
