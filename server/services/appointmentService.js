/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import Appointment from '../models/Appointment';

export let createAppointment = (appointment, next) => {
    Appointment.create(appointment, next);
};

export let deleteAppointment = (appointmentId, next) => {
    Appointment.findOneAndRemove({_id: appointmentId}, next);
};

export let updateAppointment = (appointmentId, appointment, next) => {
    Appointment.update({_id: appointmentId}, appointment, next);
};

export let getAllAppointments = (next) => {
    Appointment.find({}, next); // returns an array
};

export let getAllAppointmentsByMonth = (month, next) => {
    let year = (new Date()).getFullYear();
    let amountOfDays = (new Date(year, month, 0)).getUTCDate();

    let beginningOfTheMonthDate = new Date(year, month, 1);

    let endOfTheMonthDate = new Date(year, month, amountOfDays);
    
    Appointment.find({
        scheduledDate: {$gte: beginningOfTheMonthDate, $lte: endOfTheMonthDate}
    }, next); // returns an array
};

// export let getAppointmentsByMonth = () =>{
//     Appointment.find({}, next);
// }