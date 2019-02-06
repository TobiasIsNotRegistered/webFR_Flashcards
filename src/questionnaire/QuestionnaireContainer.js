import React, { Component } from 'react';
import QuestionnaireTable from './QuestionnaireTable';
import QuestionnaireShowDialog from './QuestionnaireShowDialog';


class QuestionnaireContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }


    componentDidMount(){
        if(this.props.qs && this.props.qs.length > 0){
            this.props.setAmountOfQuestionnaires(this.props.qs.length);
        }else{
            this.props.setAmountOfQuestionnaires(0);
        }  
    }

    render() {
        const qs = this.props.qs;
        return (
            <div className="QuestionaireContainer">
                <h4>Questionnaire-Container!</h4>
                <QuestionnaireTable data={qs}/>
            </div>)
    }
}

export default QuestionnaireContainer;
QuestionnaireContainer.defaultProps = {
    qs: [
        { 'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1' },
        { 'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2' },
        { 'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3' },
        { 'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4' },
        { 'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5' }
    ]
}
