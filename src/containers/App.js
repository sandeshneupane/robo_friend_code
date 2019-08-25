import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {robots} from './robots';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox'
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps= (dispatch) => {
	return {
		afterSearch: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: ()=> dispatch(requestRobots())
    }
}

class App extends Component{

	// constructor(){
	// 	super()
	// 	this.state={
	// 		robot:[]
	       
	// 	}

	// }


   // afterSearch=(event)=>{

   //      this.setState({searchfield: event.target.value})
       
        
   // }	


   componentDidMount(){

       this.props.onRequestRobots();
   //    fetch('https://jsonplaceholder.typicode.com/users')
   //    .then(response=>response.json())
   //    .then(users=>this.setState({robot:users}));
    }


   render(){

   	// const {robot}=this.state;
   	const {searchField, afterSearch, robots, isPending} = this.props;

   	 const filteredRobots=robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

   	 //if(!robot.length){return <h1> Loading</h1>}
   	 if(isPending){return <h1> Loading</h1>}
   	 else{
		   	return(
			<div className='tc'>
			   <h1 className='f1'>   Robo Friends    </h1>
			   <Searchbox searchchange = {afterSearch}/>
			   <Scroll>
			      <ErrorBoundry>
			   		<Cardlist robot = {filteredRobots}/>
			   	  </ErrorBoundry>
		   	   </Scroll>
			</div>
			);
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);