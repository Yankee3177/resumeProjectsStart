import { Container, Row, Col } from "react-bootstrap";


export default function Links(){
    return(
        <section id="links">
            <h1 className="mainHeader">Technologies that I have worked with:</h1>
            <Container className="Container-Project">
                <Row>
                    <Col>
                        <Row className="card-row">
                            <img src="/images/HTML5-logo.png" alt="Html Logo" style={{height:40 ,width:65}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/Java-logo.png" alt="Java Logo" style={{height:50 ,width:65}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/SQL-Logo.png" alt="SQL Logo" style={{height:40 ,width:65}}></img>
                        </Row>

                    </Col> 
                    <Col>
                        <Row className="card-row">
                            <img src="/images/CSS-logo.png" alt="CSS Logo" style={{height:40 ,width:65}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/python-logo.png" alt="Python Logo" style={{height:50 ,width:65}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/SQL-Server-logo.png" alt="SQL Server Logo" style={{height:40 ,width:65}}></img>
                        </Row>

                    </Col>  
                    <Col>
                        <Row className="card-row">
                            <img src="/images/JavaScript-Logo.png" alt="JavaScript Logo" style={{height:40 ,width:120}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/C-Sharp-Logo.png" alt="C-Sharp Logo" style={{height:40 ,width:85}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/Windows-logo.png" alt="Windows Logo" style={{height:50 ,width:65}}></img>
                        </Row>

                    </Col>  
                    <Col>
                        <Row className="card-row">
                            <img src="/images/react-logo.png" alt="React Logo" style={{height:40 ,width:65}}></img>
                        </Row >
                        <Row className="card-row">
                            <img src="/images/NET-Framework-logo.png" alt=".Net Frameword Logo" style={{height:40 ,width:80}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/MacOS-logo.png" alt="MacOS Logo" style={{height:50 ,width:65}}></img>
                        </Row>

                    </Col>  
                    <Col>
                        <Row className="card-row">
                            <img src="/images/node-logo.png" alt="Node Logo" style={{height:40 ,width:65}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/git-logo.png" alt="Git Logo" style={{height:40 ,width:65}}></img>
                        </Row>
                        <Row className="card-row">
                            <img src="/images/Linux-Logo.png" alt="Linux Logo" style={{height:50 ,width:90}}></img>
                        </Row>

                    </Col>   


                </Row>

            </Container>
        </section>
    );
}