import Heading from "../layout/Heading";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../img/Img1.jpg";
import Img2 from "../../img/Img2.jpg";
import Img3 from "../../img/Img3.jpg";
import Img4 from "../../img/Img4.jpg";


 function Home() {
	return (
    <>
        <Heading title="Home" />
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img4}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
      
    </>
    );
}
export default Home