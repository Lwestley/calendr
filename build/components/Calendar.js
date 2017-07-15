import React from 'react';
import Box from './Box';
import axios from 'axios';

export default class Calendar extends React.Component {
    constructor() {
        super();
        this.generateDays = this.generateDays.bind(this);
    }

    componentWillMount() {
        axios.get('/appointment').then(response => {

        this.props.loadAppointments(response.data);
        });

    }

    handleAppointment() {
        this.props.history.push(`/appointment/${year}-${month + 1}-${i}`)
    };

    generateDays() {
        // zero-based
        let year = (new Date()).getFullYear();
        let month = (new Date()).getMonth();
        let amountOfDays = (new Date(year, month + 1, 0)).getDate();
        console.log(amountOfDays); // yield a number...
        let boxes = [];
        for (let i = 1; i <= amountOfDays; i++) {
            boxes.push(<Box key={i + '-days'} date={i} appointment={this.props.month[i][0]} onClick={() => {
                //console.log('hello');
                this.props.history.push(`/appointment/${year}-${month + 1}-${i}`);
            }} />);

        }
        return boxes;

        // get list of patients for a month, and maybe have the key be the date that they reserved, and the value be the patient...
        /* 
        let monthlySchedule = {
            1: {
                _id: 1321654,
                name: 'Courtney Nguyen',
                schedule: 'Root Canal',
                notes: 'She is really awesome, we should give it to her for free'
            }
        } */
    }

    render() {
        let myCalendarBoxes = this.generateDays();
        // let todoList = this.props.todoList.map((task, index) => {
        //make sure to note task is a object now, not a string
        //    return (<li key={task._id}>{task.description} - <button onClick={() => this.props.removeTodo(this.props._id, index)}>Remove</button></li>)
        // });
        return (
            <div>
                <h1>Calendar View</h1>
                {myCalendarBoxes}
            </div>
        );
    }
}