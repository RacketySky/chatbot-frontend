import { Row, Col, Image } from 'react-bootstrap'
export const Loading = () => {

    return (

        <Row className='w-100 h-100 loading' id="loading" hidden>
            <Col>
                <Image src='/spin.gif'>
                </Image>
            </Col>
        </Row>
    )
}