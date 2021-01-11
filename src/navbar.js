import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import About from './about.js';
import Contact from './contact.js';
class Navbar extends React.Component{
	constructor(props){
		super(props)
		this.state={active:'Home'}
	}
	currentElement(){
		if (this.state.active=='Home'){
			return <Home />;
		}
		if (this.state.active=='About'){
			return <About />; 
		}
		if (this.state.active=='Contact'){
			return <Contact />; 
		}
	}

	render(){
	return(
		<div>
		<nav className="navbar">
			<div className="brand-title">Brand Name</div>
			<a href='#' className="toggle-button" onClick={()=>{
				const navbarLinks=document.getElementsByClassName('navbar-links')[0]
				navbarLinks.classList.toggle('active')

				
			}}>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			 </a>
			<div className="navbar-links">
				<ul>
					<li><a href="#" onClick={()=>this.setState({active:'Home'})}>Home</a></li>
					<li><a href="#" onClick={()=>this.setState({active:'About'})}>About</a></li>
					<li><a href="#" onClick={()=>this.setState({active:'Contact'})}>Contact</a></li>
				</ul>
			</div>
		</nav>
		{this.currentElement()}
		<footer>mauris@convallis.eu</footer>
		</div>
		)

		}
}

export default Navbar;
