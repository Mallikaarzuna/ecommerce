import BCarousel from "react-bootstrap/Carousel";

const Carousal = () => {
  return (
    <BCarousel>
      <BCarousel.Item interval={1500}>
        <img className="d-block w-100" src="../jew.jpg" alt="First slide" />
        <BCarousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </BCarousel.Caption>
      </BCarousel.Item>
      <BCarousel.Item interval={1000}>
        <img className="d-block w-100" src="../elect.jpg" alt="Second slide" />
        <BCarousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BCarousel.Caption>
      </BCarousel.Item>
      <BCarousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src="../menscloth.png"
          alt="Third slide"
        />
        <BCarousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </BCarousel.Caption>
      </BCarousel.Item>
    </BCarousel>
  );
};
export default Carousal;
