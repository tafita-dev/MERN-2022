import { Col, Row } from 'antd';
import Card from 'antd/es/card/Card';
import React from 'react';
import Alayout from '../Layout';

const Service = () => {
    return (
        <div>
            <Alayout>
                <div className='home'>
                    <div className='objet'>
                        <Row style={{ padding: 20,marginLeft:70 }}>
                            <Col xs={24} sm={6} md={12} lg={6} style={{ marginRight: 80 }}>
                                <Card className='tafita ' hoverable
                                    cover={<img src='../../img/03-item.jpg' width={200} height={200} alt="tsisy" />}>

                                    <p>Developpement web</p>
                                </Card>
                            </Col>
                            <Col xs={24} sm={6} md={12} lg={6} style={{ marginRight: 80 }}>
                                <Card className='tafita' hoverable
                                    cover={<img src='../../img/left-image.jpg' width={200} height={200} alt="tsisy" />}>
                                    <p> Maintenace</p>
                                </Card>
                            </Col>
                            <Col xs={24} sm={6} md={12} lg={6} style={{ marginRight: 80 }}>
                                <Card className='tafita' hoverable
                                    cover={<img src='../../img/06-item.jpg' width={200} height={200} alt="tsisy" />}>
                                    <p>Creative</p>
                                </Card>
                            </Col>
                            <Col xs={24} sm={6} md={12} lg={6} style={{ marginRight: 80 }}>
                                <Card className='tafita' hoverable
                                    cover={<img src='../../images/02-big-item.jpg' width={200} height={200} alt="tsisy" />}>

                                    <p>Application frontend</p>
                                </Card>
                            </Col>
                            <Col xs={24} sm={6} md={12} lg={6} style={{ marginRight: 80 }} >
                                <Card className='tafita' hoverable
                                    cover={<img src='../../images/01-big-item.jpg' width={200} height={200} alt="tsisy" />}>

                                    <p>Web design</p>
                                </Card>
                            </Col>
                            <Col xs={24} sm={6} md={12} lg={6} style={{ marginRight: 80 }}>
                                <Card className='tafita' hoverable
                                    cover={<img src='../../images/03-big-item.jpg' width={200} height={200} alt="tsisy" />}>

                                    <p>Application backend</p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Alayout >
        </div >
    );
};

export default Service;