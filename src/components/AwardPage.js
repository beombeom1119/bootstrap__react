import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import school1 from '../../src/image/school1.jpg'
import school2 from '../../src/image/school2.jpg'
import school3 from '../../src/image/school3.jpg'
import school4 from '../../src/image/school4.jpg'
import school5 from '../../src/image/school5.jpg'
import school6 from '../../src/image/school6.jpg'
import jeonju from '../../src/image/jeonju.jpg'


const AwardPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <p className='right-text-title'>
                        대외 수상<br />
                    </p>

                    <Col>
                        2020 전주시 공공데이터 활용 공모전 으뜸상 (우수상) <br /><br />
                        <img src={jeonju} width={200} height={200} ></img><br /><br /><br />
                    </Col>

                    <p className='right-text-title'>
                        교내 수상<br />
                    </p>
                    <Col>
                        2020-1 학기 설계경진대회 1위 (모바일 프로그래밍)<br /><br />
                        <img src={school1} width={300} height={200} ></img>
                    </Col>

                    <Col>
                        2020-2 학기 설계경진대회 1위 (머신 러닝)<br /><br />
                        <img src={school2} width={300} height={200} ></img>
                    </Col>

                    <Col>
                        2020-2 학기 설계경진대회 5위 (전공종합설계)<br /><br />
                        <img src={school3} width={300} height={200} ></img>
                    </Col>

                    <Col>
                        <br />2020-2 학기 설계경진대회 5위 (전공종합설계)<br /><br />
                        <img src={school4} width={300} height={200} ></img>
                    </Col>

                    <Col>
                        <br />2021-1 학기 설계경진대회 6위 (전공종합설계)<br /><br />
                        <img src={school5} width={300} height={200} ></img>
                    </Col>

                    <Col>
                        <br />2021-2 학기 설계경진대회 3위 (전공종합설계)<br /><br />
                        <img src={school6} width={250} height={130} ></img>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default AwardPage
