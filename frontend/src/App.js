import React from 'react';
import './App.css';
import {Layout, PageHeader, Col, Row} from 'antd';
import Tech from "./Tech";

const {Content, Footer} = Layout;

function App() {
    return (
        <Layout className="layout">
            <PageHeader
                backIcon={false}
                onBack={() => null}
                title="Frontend"
                subTitle="ci-cd-k8s"
            />
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Tech url='http://localhost:8080/tech'/>
                        </Col>
                        <Col span={8}>
                            <Tech url='http://localhost:8080/tech'/>
                        </Col>
                        <Col span={8}>
                            <Tech url='http://localhost:8080/tech'/>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>©2020</Footer>
        </Layout>
    )
};

export default App;
