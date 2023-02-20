import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Checkbox, FormControl, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import { Loading } from '../components/Loading';

export function Singin(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [reg, setReg] = useState();
    const [checked, setCheck] = useState(false);
    // console.log(email, password, name, reg)

    useEffect(() => {
        var mat = document.getElementById('reg')
        if (checked) {
            mat.setAttribute("disabled", true)
        } else {
            mat.removeAttribute("disabled")
        }
    })
    useEffect(() => {
        if (checked) {
            setReg("0")
        }
    }, [checked])
    const register = async (e) => {
        e.preventDefault();
        document.getElementById('singin-btn').setAttribute('disabled', '');
        document.getElementById('loading').removeAttribute('hidden');
        await axios.post('https://chatbot-backend-hb2o.onrender.com/users', {
            name: name,
            email: email,
            password: password,
            registration: reg.toString()
        })
            .then(res => {
                window.location.href = `/`
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    return (
        <Container fluid className='background-login'>
            <Row className='w-100 h-100 row-login'>
                <Col xs={0} sm={0} md={2} lg={4} xl={4} />
                <Col className='card-login card-singin' xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Image className="" src='bot.png' width={55} />
                    <form>
                        <FormControl>
                            <TextField
                                className=""
                                id="name"
                                label="Nome Completo"
                                type="text"
                                variant="outlined"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                className="mt-3 mb-3"
                                id="email"
                                type="email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {/* <Checkbox>Não Possuo Matricula</Checkbox> */}
                            <TextField
                                className=""
                                id="reg"
                                label="Matrícula"
                                type="number"
                                variant="outlined"
                                value={reg}
                                required
                                onChange={(e) => setReg(e.target.value)}
                            />
                            <FormControlLabel
                                className='checkbox-reg'
                                control={
                                    <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} checked={checked} onClick={() => setCheck(!checked)} name="checkbox" />
                                }
                                label="Não possuo Matrícula"
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
                            <Button type='subimit' id='singin-btn' onClick={register}>Cadastrar</Button>
                        </FormControl>
                    </form>
                </Col>
                <Col xs={0} sm={0} md={2} lg={4} xl={4} />
            </Row>
            <Loading />
        </Container>
    )
}