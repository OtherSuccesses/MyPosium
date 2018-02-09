import React, { Component } from 'react';
import NavbarHeader from '../../components/Nav/Navbar';
import './Landing.css';
import { Image,
	Container,
	Content,
	Column,
	Section,
	Title,
	Tile,
	SubTitle,
	Columns
	} from 'bloomer';
export default class Landing extends Component {
	constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.onClickNav = this.onClickNav.bind(this);
  }
  onClickNav = () => {
      this.setState((state) => ({ isActive: !state.isActive }));
  }

  render() {
    return(
      <div>
        <NavbarHeader
        	hasStart={true}
        	brandStyle={{marginRight:'-50px'}}
        	hasEnd={true}
		      hasBrand={true}
		      navbarStyle={{boxShadow: '2px 2px 5px', position:"fixed", top:"0", left:"0", zIndex: '998', width: '100%'}}
		      brandText={window.location.pathname==='/'? (<a href="#myposium">Myposium</a>): "MyPosium"}
		      burgerActive={this.state.isActive}
		      isActive={this.state.isActive}
		      onClick={this.onClickNav}
		      hasTextColor={'black'}
		      navbarStart={
		        [
		          {
		            text: "Create",
		            href: "#create",
		            style: {marginLeft: '0px'}
		          }, {
		            text: 'Discover',
		            href: "#discover",
		            style: {marginLeft: '150px'}
		          }, {
		          	text: 'Connect',
		          	href: "#connect",
		            style: {marginLeft: '150px'}
		          }
		        ]
		      }
		      navbarEnd={[
		      	{
								hasEndButtons: true,
								hasEnd: true,
		            href:"/login",
		            text: "Login",
		            textStyle: {textDecoration: 'none', color: '#4C4CFF'}
		          }, {
								hasEndButtons: true,
								hasEnd: true,
		            href:"/signup",
		            text: 'SignUp',
		            textStyle: {textDecoration: 'none', color: '#4C4CFF'}
		          }]}
		    />

			<div style={{height:'20px'}}/>
		    <Container>
					<a id="myposium" style={{marginTop: "20px"}}> </a>
					<Section className='is-vertical-center'>
				    <Columns>
							<Column isSize={12} >
								<Tile isSize={12}>
									<Title isSize={3}>A New Way to Create, Discover, and Connect!</Title>
								</Tile>
							</Column>
								<Column isSize={7} >
									<Tile isSize={6}>
									<Title isSize={1}>...Myposium</Title>
								</Tile>
								</Column>
						</Columns>
			    </Section>
					<a id="create" style={{marginTop: "20px"}}> </a>
					<Section className='is-vertical-center'>
				    <Columns>
				    	<Column isSize={4}>
				    		<Image src = "/img/gearBrain.jpg" />
				    	</Column>
				    	<Column isSize={6} isOffset={2}>
				            <Title className='text-center'>Create</Title>
										<Content>MyPosium allows real people with real knowledge to create a connection with people who want and need that knowledge.  <span className="highlight">CREATE</span> an event, either in person or virtually, and share your wisdom with the world!</Content>
				      </Column>
				    </Columns>
			    </Section>

					<a id="discover" style={{marginTop: "20px"}}> </a>
	        <Section className='is-vertical-center'>
				    <Columns>
				    	<Column isSize={6} >
				            <Title className='text-center'>Discover</Title>
										<Content >The world is brimming with people who have spent a lifetime gathering knowledge.  Search through our expansive categories and <span className="highlight">DISCOVER</span> new content creators, new ideas, and new friends!  </Content>
				      </Column>
				    	<Column isSize={4} isOffset={2}>
				    		<Image src = "/img/lightBulb.jpg" className='is-vertical-center' style={{transform: 'rotate(20deg)', width: '70%'}}/>
				    	</Column>
				    </Columns>
					</Section>
			    <a id="connect" style={{marginTop: "20px"}}> </a>
					<Section className='is-vertical-center'>
				    <Columns>
				    	<Column isSize={4}>
				    		<Image src = "/img/connect.jpg"/>
				    	</Column>
				    	<Column isSize={6} isOffset={2}>
				            <Title className='text-center'>Connect</Title>
										<Content>MyPosium aims to <span className="highlight">CONNECT</span> people who are thirsty for knowledge and entertainment with those who can provide it.  Ask questions, provide feedback, and shape the future of education!  <a href="/signup">Sign up for an account now!</a></Content>
				      </Column>
				    </Columns>
			    </Section>
				</Container>

      </div>
    )
  }
}
