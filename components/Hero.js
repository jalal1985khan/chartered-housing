import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/assets/images/home-banner.jpg"
          alt="Chartered Housing"
          width="800"
          height="800"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/assets/images/charteredhousing-banner.jpg"
          alt="Chartered Housing"
          width="800"
          height="800"
        />
      </Carousel.Item>
   
    </Carousel>
  );
}

export default UncontrolledExample;