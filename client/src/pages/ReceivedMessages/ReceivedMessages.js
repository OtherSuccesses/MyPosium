import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Tile, Box, Columns, Column, Container, Tabs, Tab, TabList, TabLink, Icon, Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';
export default class ReceivedMessages extends Component {

  // Skeleton component until we can get messages being sent

  state = {
    user: '',
    receivedMessages: []
  }

  componentDidMount() {
    this.getMessages();
  }


  getMessages = () => {
    axios
      .get('/api/users/checkAuth')
      .then(response => {
        let { user, receivedMessages } = response.data;
        this.setState({ user, receivedMessages });
      })
      .catch(err  => console.log(err));
  }


  render() {
    return(
      <Container isFluid>
        <Tabs isBoxed={true}>
          <TabList>
            <Tab>
              <Link to="/messages/sent">
                <Icon isSize='small'><span className='far fa-sticky-note' aria-hidden='true' /></Icon>
                <span>Sent Messages</span>
              </Link>
            </Tab>
            <Tab isActive>
              <TabLink>
                <Icon isSize='small'><span className='far fa-envelope' aria-hidden='true' /></Icon>
                <span>Received Messages</span>
              </TabLink>
            </Tab>
          </TabList>
        </Tabs>
        <Columns>
          <Column isSize={3}>
            <Menu>
              <MenuLabel>Messages</MenuLabel>
              <MenuList>
                <li><MenuLink>dsfasdfasdfasdf</MenuLink></li>
                <li><MenuLink>asdfasdfasdfasdfasdf</MenuLink></li>
                <li><MenuLink>asdfasdfasdfsadfasdfasdf</MenuLink></li>
                <li><MenuLink>asdfasdfasdfasdfasdfads</MenuLink></li>
                <li><MenuLink>asdfasdfasdfasdf</MenuLink></li>
                <li><MenuLink>asdfasdfadsf</MenuLink></li>
                <li><MenuLink>asdfasdfasdfasdfsadfasdfa</MenuLink></li>
                <li><MenuLink>asdfasdfasdfasdf</MenuLink></li>
                <li><MenuLink>asdfasdfasdfsadf</MenuLink></li>
                <li><MenuLink>asdfasdfasdfasd</MenuLink></li>
              </MenuList>
            </Menu>
          </Column>
          <Column>
            <Tile isParent>
              <Tile isChild render={
                  props => (
                      <Box {...props}>
                          <p>From: Jennifer Lawrence</p>
                          <p>To: Marco Principio</p>
                          <p>Subject: RE: Those pictures you asked for...</p>
                          <br/>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est tempore atque, nihil sint accusamus iusto rerum. Tempore ducimus doloremque vel velit temporibus ipsum deserunt! Harum quas laborum suscipit expedita blanditiis!</p>
                      </Box>
                  )
              } />
          </Tile>
          </Column>
        </Columns>


      </Container>
    )
  }
}
