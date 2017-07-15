import React from 'react';
import axios from 'axios';

export default class Appointment extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.renderExistingAppointment = this.renderExistingAppointment.bind(this);
        this.renderNewAppointment = this.renderNewAppointment.bind(this);
    }

    handleClick(event) {
        if (true) {
            let firstname = this.refs.first_name.value;
            let lastname = this.refs.last_name.value;
            let phonenumber = this.refs.phonenumber.value;
            let email = this.refs.email.value;
            let rxdescription = this.refs.rx.value;
            let notes = this.refs.notes.value;
            try {
                
                axios.post('/appointment', {
                    firstName: firstname,
                    lastName: lastname,
                    phoneNumber: phonenumber,
                    email: email,
                    rxDescription: rxdescription,
                    notes: notes,
                    scheduledDate: new Date(this.props.match.params.date)
                }).then(res => {
                    console.log('Appointment submitted', res);
                    this.props.history.push('/');

                });
            } catch (e) {
                console.error(`Caught: ${e}`)
            }
        }
    }

    renderExistingAppointment(){
        return (
            <div>
                <h1>{this.props.appointment.firstName}'s Appointment</h1>
                <input type="text" placeholder="First Name" onChange={(event) => this.props.editAppointment(this.props.date, event.target.value, 'firstName')} value={this.props.appointment.firstName} required />
                <input type="text" placeholder="Last Name" defaultValue={this.props.appointment.lastName} required />
                <input type="tel" maxLength="10" placeholder="Phone Number" defaultValue={this.props.appointment.phoneNumber} required />
                <input type="email" placeholder="Email" defaultValue={this.props.appointment.email} required />
                <input type="text" placeholder="RX Description" defaultValue={this.props.appointment.rxDescription} required />
                <input type="text" placeholder="Notes" defaultValue={this.props.appointment.notes} />
                <button className="btn waves-effect blue waves-light" type="submit" name="action" onClick={this.handleClick}>Update
                    <i className="material-icons right">replay</i>
                </button>
                 <button className="btn btn-flat waves-effect waves-light" type="submit" name="action" onClick={this.handleClick}>Delete
                    <i className="material-icons right">not_interested</i>
                </button>
            </div>
        );
    }

    renderNewAppointment(){
        return (
            <div>
                <h1>New Appointment</h1>
                <input type="text" placeholder="First Name" ref="first_name" required />
                <input type="text" placeholder="Last Name" ref="last_name" required />
                <input type="tel" maxLength="10" placeholder="Phone Number" ref="phonenumber" required />
                <input type="email" placeholder="Email" ref="email" required />
                <input type="text" placeholder="RX Description" ref="rx" required />
                <input type="text" placeholder="Notes" ref="notes" />
                <button className="btn waves-effect blue waves-light" type="submit" name="action" onClick={this.handleClick}>Submit
                <i className="material-icons right">done</i>
                </button>
            </div>
        );
    }

    render() {
        let myComponent = null;
        if(this.props.appointment && this.props.appointment._id){
            myComponent = this.renderExistingAppointment();
        }
        else {
            myComponent = this.renderNewAppointment();
        }

        return (
            <div>
                
                {myComponent}
            </div>

        );

    }

}