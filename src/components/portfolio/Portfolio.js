import Heading from "../layout/Heading";
import ListGroup from "react-bootstrap/ListGroup";

export default function Portfolio() {
	return (
	<>
	<Heading title="Portfolio" />
	<ListGroup>
  <ListGroup.Item>Portfolio Item One</ListGroup.Item>
  <ListGroup.Item>Portfolio Item Two</ListGroup.Item>
  <ListGroup.Item>Portfolio Item Three</ListGroup.Item>
  <ListGroup.Item>Portfolio Item Four</ListGroup.Item>
  <ListGroup.Item>Portfolio Item Five</ListGroup.Item>
</ListGroup>
	</>
	);
}
