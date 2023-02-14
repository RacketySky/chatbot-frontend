import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FormControl, TextField } from '@mui/material';

export function Login(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Container fluid className='background-login'>
            <Row className='w-100 h-100 row-login'>
                <Col xs={0} sm={0} md={2} lg={4} xl={4} />
                <Col className='card-login' xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Image className="mt-2 mb-2" src='bot.png' width={55} />
                    <form>
                        <FormControl>
                            <TextField
                                className=""
                                id="email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                className="mt-3 mb-3"
                                id="password"
                                label="Senha"
                                variant="outlined"
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button type='subimit'>Login</Button>
                        </FormControl>
                    </form>
                    <div className='line'/>
                    <Button className="singin-btn" type='button' href="/singin">Cadastrar</Button>
                </Col>
                <Col xs={0} sm={0} md={2} lg={4} xl={4} />
            </Row>
        </Container>
    )
}