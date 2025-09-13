import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const items = [
    {
        key: '/signup',
        label: 'Sign-up'
    },
    {
        key: '/login',
        label: 'Log-in'
    },
]

const Home = ({ children }) => {

    const navigate = useNavigate()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" /><Link to={'/'} style={{ color: 'white', paddingRight: '50px' }}><h1>Logo</h1></Link>
                    <Menu
                        onClick={(data) => navigate(data.key)}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    />
            </Header>
            <Content>

                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        textAlign: 'center',
                    }}
                >
                    {children}
                </div>
            </Content>

        </Layout>
    );
};
export default Home;