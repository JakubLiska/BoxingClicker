import React, {Component} from 'react';
import Rush from '../components/Rush'
import Gym from './Gym'

// import ErrorBoundry from '../components/ErrorBoundry';
//import BoxingPear from './BoxingPear';
//import styles from './styles.module.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      experience: 0,
      disabled: false,

      clickConverter: 1,
      idleConverter: 0,

      array: [0, 0],
    }
  }

  typeIdler = {
    typeCursor:{conv: 0.1, cost:5},
    typeIdler: {conv: 0.3, cost:17},
    typeIdler2: {conv: 0.3, cost:17},
  }
  
  
  initiateIdler(){
    setInterval(() =>
    {this.setState({experience: this.state.experience + this.state.idleConverter})},1000)
  }
  
  idlingXp(converter, cost){
    console.log(converter, cost)
    if(this.substractExp(cost) === 1){
      const nextIdleConverter = this.state.idleConverter + converter
      this.setState({idleConverter: nextIdleConverter})
      if(this.state.idleConverter === 0){
        this.initiateIdler()
      }
    }
  }

  substractExp(cost2){
    const prevExp = this.state.experience
    if(prevExp >= cost2){
      this.setState({experience: prevExp - cost2})
      return 1;
    }else{
      return 0;
    }
  }


  createTimeStamps(){
    this.setState(
      {array: [...this.state.array, performance.now()] },
    )
  }


  expButton(){
    this.createTimeStamps()
    this.setState({experience: this.state.experience + 1 * this.state.clickConverter})
  }

  rushButton(){
    this.createTimeStamps()
    this.checkIfRushReady()
  }

  // async disableRush(){
  //   this.setState({disabled: true})
    
  //   await setTimeout(()=> {
  //      this.setState({disabled: false})
  //   }, 2800)
  // }

  checkIfRushReady(){
    if(this.state.clickConverter === 1){
      this.setState(
        {array: [...this.state.array, performance.now()] },
          this.updateConverter
      )}
  }

  updateConverter(){
    const {array} = this.state;
    let arrLast = array.length - 1;
    let arrPenulimate = array.length - 2;

    if (array[arrLast] - array[arrPenulimate] >= 3000) {
      this.setState({ clickConverter: 2 });
      setTimeout(()=>{
        this.setState({clickConverter: 1}
          )}, 3000)
    }
  }


  render(){
    const {
      typeIdler: { conv: idlerConv, cost: idlerCost },
      typeCursor: { conv: cursorConv, cost: cursorCost },
    } = this.typeIdler

    return (
      <div>
        <div>
          <h1>Welcome to my clicker</h1>
          <h2>Experience: {this.state.experience.toFixed(1)}</h2>
        </div>  
        <p>Converter: {this.state.clickConverter}</p>
        <p>Idler: {this.state.idleConverter.toFixed(2)}</p>
        <p><Rush 
          conv = {() => this.rushButton()}
          btnDis = {this.state.disabled}/></p>
        <Gym
        idler = {() => this.idlingXp(cursorConv, cursorCost)}
        idler2 = {() => this.idlingXp(idlerConv, idlerCost)}

        xpBtn = {() => this.expButton()}
        />
      </div>
    );
  }
}
  
export default App;