import { Container, Col, Row, Image } from "react-bootstrap"


export const Post = (props) => {
    return (
        <Container fluid className="mt-3 mb-3">
            <Row>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} className='img-bot'>
                    <Image src='cosmoBot.png' width={45} />
                </Col>

                <Col xs={10} sm={10} md={10} lg={10} xl={10} className='bot-response'>
                    <div className='response-text'>
                        {props.text}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}