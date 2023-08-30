import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { HomeOutlined, ContactsOutlined, ProjectOutlined, CalendarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./Layout.css"

const { Header, Content, Footer } = Layout;
const Alayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ margin: 5 }}>
            <Header
                style={{
                    paddingBottom: 160,
                    marginTop: 10
                }}
                className="entete"
            >
                {/* <h4 classNameName='title'>EPSYLON</h4>
                <div classNameName='nav'>
                    <Menu classNameName='Menu'
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={window.localStorage.pathname}>

                        <Menu.Item key="/" icon={<HomeOutlined />}>
                            <Link classNameName='lay' to="/">Home</Link>
                        </Menu.Item>


                        <Menu.Item key="/contacts" icon={<ContactsOutlined />}>
                            <Link classNameName='lay' to="/contacts">Contacts</Link>
                        </Menu.Item>


                        <Menu.Item key="/projets" icon={<ProjectOutlined />}>
                            <Link classNameName='lay' to="/projets">Projets</Link>
                        </Menu.Item>


                        <Menu.Item key="/services" icon={<CalendarOutlined />}>
                            <Link classNameName='lay' to="/services">Services</Link>
                        </Menu.Item>

                    </Menu>

                </div> */}
                    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                        <a href="/" className="navbar-brand p-0">
                            <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>EPSYLON</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="/" className="nav-item nav-link ">Home</a>
                                <a href="/projets" className="nav-item nav-link">Projects</a>
                                <a href="/services" className="nav-item nav-link">Services</a>
                                <a href="/contacts" className="nav-item nav-link">Contact</a>
                            </div>
                           </div>
                    </nav>
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '5px 0',
                }}
            >
                <div
                    style={{
                        minHeight: 380,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
               <h5> EPSYLON ©2023 Created by Taf</h5>
            </Footer>
        </Layout>
    );
};
export default Alayout;