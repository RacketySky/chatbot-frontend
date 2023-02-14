import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Header } from '../components/Header'

export function Home(props) {
    return (
        <Container fluid className="h-100">
            <Row>
                <Header></Header>
            </Row>
            <Row className="text-center opn align-items-center">
                <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-3 bot-text">
                            <Image src='bot.png' width={100} className="mt-2 mb-2"></Image>
                            <p>
                                <span className="type" style={{'--n':157}}>
                                    Olá Usuário, me chamo bot, estou aqui para te ajudar a praticar questões de Algoritmos. Por favor selecione abaixo para qual prova você gostaria de praticar.
                                </span>
                            </p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Button className="btn-question" title="As questões da primeira prova abordam comando de atribuição, entrada de dados, saída de dados e condicional.">Primeira Prova</Button>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Button className="btn-question" title="As questões da segunda prova abordam laços de repetição, vetores e matrizes.">Segunda Prova</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
            </Row>
        </Container>
    )
} 