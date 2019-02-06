import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import QuestionnaireShowDialog from './QuestionnaireShowDialog';

const QuestionnaireTable = ({ data, handleShowDialog }) => {

    return (<div className="questionnaireTable">
        <h4>QuestionnaireTable</h4>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map((_questionnaire, index) => {
                    return (
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{_questionnaire.title}</td>
                            <td>{_questionnaire.description}</td>
                            <td><QuestionnaireShowDialog questionnaire={_questionnaire} /></td>
                        </tr>)
                })}
            </tbody>
        </Table>
    </div>)
}

export default QuestionnaireTable;