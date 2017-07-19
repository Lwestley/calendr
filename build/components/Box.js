import React from 'react';

export default class Box extends React.Component {
    render() {
        let boxClassName = 'box ';
        let appointmentName = '';
        if (this.props.appointment && this.props.appointment._id) {
            boxClassName += 'taken';
            appointmentName = this.props.appointment.firstName;
        }
        else {
            boxClassName += 'available';
        }

        return (
            <div className={boxClassName} data-date={this.props.date} onClick={this.props.onClick}>{appointmentName}</div>

        );
    }
}