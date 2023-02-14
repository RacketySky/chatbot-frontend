import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Header } from '../components/Header'
import { Post } from '../components/Post'

export function Chat(props) {
    const [seconds, setSeconds] = useState(0);
    const [minuties, setMinuties] = useState(0);
    const [timer, setTimer] = useState("00:00");

    useEffect(() => {

        const clock = setTimeout(() => {
            setSeconds(seconds + 1);
            if (seconds+1 > 59) {
                setSeconds(0);
                setMinuties(minuties + 1);
            }
            if (seconds < 10 && minuties < 10) {
                setTimer(`0${minuties}:0${seconds}`)
            } else if (seconds < 10 && minuties > 9) {
                setTimer(`${minuties}:0${seconds}`)
            } else if (seconds > 9 && minuties < 10) {
                setTimer(`0${minuties}:${seconds}`)
            } else {
                setTimer(`${minuties}:${seconds}`)
            }
        }, 1000)
        return () => clearTimeout(clock);
    })

    return (
        <Container fluid className="h-100">
            <Row>
                <Header></Header>
            </Row>
            <Row className="opn d-flex align-align-items-center">
                <Row className='infos w-100'>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} className='questions-info'>

                        <button disabled className='btn-info'>
                            Questão de 2016.2
                        </button>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} className='questions-info'>
                        <button disabled className='btn-info'>
                            {timer}
                        </button>
                    </Col>
                </Row>
                <Row className='chating'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Post />
                    </Col>
                </Row>
                <Row className='buttons'>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} className='action-buttons'>
                        <Button type='button'>
                            Pedir Dica
                        </Button>
                        <Button>
                            Mostrar Solução
                        </Button>
                        <Button>
                            Próxima Questão
                        </Button>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}