/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import Appointment from '../models/Appointment';

export let createAppointment = (appointment, next) => {
    Appointment.create(appointment, next);
};

export let getAllAppointments = (next) => {
    Appointment.find({}, next); // returns an array
};

// export let getAppointmentsByMonth = () =>{
//     Appointment.find({}, next);
// }