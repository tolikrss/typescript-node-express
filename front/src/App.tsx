import * as React from 'react';
import './App.css';

import { Link } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
import Routes from './routes';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

interface IComponentState {
  data1?: any;
  collapsed: boolean;
}

type Props = {};


class App extends React.Component<Props, IComponentState> {

  public state: IComponentState = {
    collapsed: false,
  };

  constructor( props: Props ) {
    super( props );

    this.onCollapse = this.onCollapse.bind( this );
  }

  public onCollapse( collapsed: boolean ) {
    console.log( collapsed );
    this.setState( { collapsed } );
  }

  public render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart"/>
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop"/>
              <Link to="/info">
                Info
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user"/><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team"/><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file"/>
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}/>
          <Content style={{ margin: '0 16px' }}>
            <Routes/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018 Created by Anatoliy Lakhno
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
