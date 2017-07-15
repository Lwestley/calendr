/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

let appointmentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    rxDescription: String,
    notes: String,
    scheduledDate: {type: Date, required: true}
});

export default mongoose.model('Appointment', appointmentSchema);