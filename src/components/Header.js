import { Container, Row, Col } from "react-bootstrap"
import { slide as Slide } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Avatar } from '@mui/material';

import '../App.css'

export function Header(props) {
    return (
        <Container fluid className="header">
            <Row className="h-100 align-items-center">
                <Col xs={2} sm={2} md={1} xl={1} lg={1} className="ps-0">
                    <Slide customBurgerIcon={<GiHamburgerMenu />}>
                        <a className="menu-item" href="/">
                            Home
                        </a>
                        <a className="menu-item" href="/chat">
                            Chat
                        </a>
                        <a className="menu-item" href="/login">
                            Login
                        </a>
                        <a className="menu-item" href="/SingIn">
                            Sing In
                        </a>
                    </Slide>
                </Col>
                <Col xs={2} sm={2} md={8} xl={9} lg={9}></Col>
                <Col xs={8} sm={8} md={3} xl={2} lg={2} className="text-end user-info">
                    <span>User Name</span>
                    <Avatar alt="User Name" src="./brokenimg" className="avatar"></Avatar>
                </Col>
            </Row>
        </Container>
    )
} 