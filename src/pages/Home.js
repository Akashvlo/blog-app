import { useEffect } from "react";
import { Container,Col,Row } from "reactstrap";
import Base from "../components/Base";
import CategorySideMenu from "../components/CategorySideMenu";
import NewFeed from "../components/NewFeed";


const Home=()=>{


return(
  

    <Base>
    <Container className="mt-3">

   <Row>
     <Col md={2} >
     <CategorySideMenu />
     </Col>
     <Col md={10}>
     <NewFeed />
     </Col>
   
   </Row>
    </Container>
    
    </Base>
) 
};
export default Home