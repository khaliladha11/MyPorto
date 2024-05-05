import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterComponent = () => {
    return (
    <div className="footer py-5">
        <Container>
            <Row>
                <Col>
                    <h3 className="fw-bold">My Porto</h3>
                    <p className="desc">Anda bisa menghubungi saya kapan saja untuk pertanyaan atau tawaran pekerjaan. Terima kasih telah mengunjungi portofolio saya.</p>
                    <div className="no mb-1 mt-4">
                        <Link className="text-decoration-none">
                        <i className="fa-brands fa-whatsapp"></i>
                        <p className="m-0">+62 822-4891-0489</p>
                        </Link>
                    </div>
                    <div className="mail">
                        <Link className="text-decoration-none">
                            <i className="fa-regular fa-envelope"></i>
                            <p className="m-0">khaliladha1123@gmail.com</p>
                        </Link>
                    </div>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default FooterComponent