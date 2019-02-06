import React, { Component } from 'react';
import Header from './app/Header.js';
import Footer from './app/Footer.js';
import QuestionnaireContainer from './questionnaire/QuestionnaireContainer';
import './App.css';
import Footer2 from './app/Footer2.js';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    appTitle:"Flashcard Client with React",
    appSubTitle:"Version 1",
    questionnaires : [],
    amountOfQuestionnaires: 0,
  }
}

setAmountOfQuestionnaires = (amount) => {
  this.setState({amountOfQuestionnaires: amount});
}

  render() {
    return (
      <div className="App">
        <Header title={this.state.appTitle} subtitle={this.state.appSubTitle}></Header>
        <QuestionnaireContainer setAmountOfQuestionnaires={(amount) => this.setAmountOfQuestionnaires(amount)} />
        <Footer content={{leftMessage: "@ The FHNW Team", rightMessage: "Total of " + this.state.amountOfQuestionnaires + " questionnaires"}} /> 
        <Footer2 />
        </div>
    );
  }
}

export default App;
