/* eslint-disable jsx-a11y/alt-text */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';

const MainCarousel = () => {
    const items = MainCarouselData.map((item) => <img src={item.image} role="presentation" />);
    return (
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1500}
            infinite
        />
    );
}

export default MainCarousel;