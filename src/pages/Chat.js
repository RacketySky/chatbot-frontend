import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Header } from '../components/Header'
import { Post } from '../components/Post'
import Axios from 'axios';

import Highlight from 'react-highlight'


export function Chat(props) {

    const [seconds, setSeconds] = useState(0);
    const [minuties, setMinuties] = useState(0);
    const [timer, setTimer] = useState("00:00");
    const [question, setQuestion] = useState("");
    const [texts, setTexts] = useState([]);
    const [statment, setStatment] = useState(false);
    const [dicas, setDicas] = useState([]);
    const [solution, setSolution] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get("type")

        if (localStorage !== null) {
            setToken(localStorage.getItem('token'));
        }
        Axios.get(`https://chatbot-backend-hb2o.onrender.com/questions/random?type=${type}`)
            .then(res => {
                setQuestion(res.data.question)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {

        const clock = setTimeout(() => {
            setSeconds(seconds + 1);
            if (seconds + 1 > 59) {
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


    // console.log(question)
    if (!statment && question !== "") {
        setTexts((texts) => [...texts, question.statement])
        setDicas(question.tips)
        setSolution(question.solution)
        setStatment(true)
    }

    const tip = () => {
        // console.log(dicas.length)
        if (dicas.length > 0) {
            const dica = dicas.shift()
            setTexts((texts) => [...texts, dica])
        }
        if (dicas.length <= 0) {
            var tip = document.getElementById('tip')
            tip.setAttribute("disabled", "")
        }
    }

    const solut = () => {
        if (solution !== undefined) {
            const test = <Highlight className='language-python'>
                {solution}
            </Highlight>
            setTexts((texts) => [...texts, test])
            var tip = document.getElementById('solution')
            tip.setAttribute("disabled", "")
        }
    }

    // console.log(token)
    const nextQuestion = async (e) => {
        if (seconds > 10 && token !== undefined) {
            const allseconds = minuties * 60 + seconds
            e.preventDefault()
            await Axios.patch(`https://chatbot-backend-hb2o.onrender.com/users/addQuestion/${question._id}`,
                {
                    time: allseconds
                }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            window.location.reload(false)
        } else {
            window.location.reload(false)
        }
    }

    return (
        <Container fluid className="h-100">
            <Row>
                <Header></Header>
            </Row>
            <Row className="opn d-flex align-align-items-center">
                <Row className='infos w-100'>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} className='questions-info'>

                        <button disabled className='btn-info'>
                            Questão de {question.period}
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
                        {
                            texts.map((text, i) => {
                                return (
                                    <Post key={i} text={text} />
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row className='buttons'>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} className='action-buttons'>
                        <Button type='button' id='tip' onClick={tip}>
                            Pedir Dica
                        </Button>
                        <Button type='button' id='solution' onClick={solut}>
                            Mostrar Solução
                        </Button>
                        <Button type='button' id='next-question' onClick={nextQuestion}>
                            Próxima Questão
                        </Button>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}/>
                </Row>
            </Row>
        </Container>
    )
}