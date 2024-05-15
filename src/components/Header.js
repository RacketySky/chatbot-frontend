import { Container, Row, Col, Button } from "react-bootstrap"
import { slide as Slide } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Avatar } from '@mui/material';

import '../App.css'
import { useEffect, useState } from "react";

export function Header(props) {
    const [user, setUser] = useState();

    const exit = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = `/`
    }

    useEffect(() => {
        if (window.localStorage !== null) {
            const data = localStorage.getItem('user')
            const data1 = data.split(' ')
            let f = data1[0]
            let l = data1[data1.length - 1]

            const firstN = f[0].toUpperCase() + f.substring(1, f.length).toLowerCase()
            const secN = l[0].toUpperCase() + l.substring(1, l.length).toLowerCase()
            localStorage.setItem('user', `${firstN} ${secN}`)
            setUser(`${firstN} ${secN}`)
        }
    }, [])


    return (
        <Container fluid className="header">
            <Row className="h-100 align-items-center">
                <Col xs={2} sm={2} md={2} xl={1} lg={1} className="ps-0">
                    <Slide customBurgerIcon={<GiHamburgerMenu />}>
                        <Button variant="secondary" className="menu-item w-100" href="/home">
                            Página Inicial
                        </Button>
                        <Button variant="secondary" className="menu-item w-100" href="/chat?type=1">
                            Primeira Prova
                        </Button>
                        <Button variant="secondary" className="menu-item w-100" href="/chat?type=2">
                            Segunda Prova
                        </Button>
                        <Button variant="secondary" className="menu-item w-100" onClick={exit}>
                            Sair
                        </Button>
                    </Slide>
                </Col>
                <Col xs={1} sm={5} md={5} xl={8} lg={8}></Col>
                <Col xs={8} sm={5} md={5} xl={3} lg={3} className="text-end user-info">
                    <span>{user}</span>
                    <Avatar alt={user} src="./brokenimg" className="avatar"></Avatar>
                </Col>
            </Row>
        </Container>
    )
} 