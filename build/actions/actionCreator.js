/**
 * actionCreator is the file that gives Redux a blueprint of what each event looks like.
 */

// only new method needed
export let fetchUsers = (users) => {
    console.log('dispatch fetch user success');
    return {
        type: 'FETCH_USERS_SUCCESS',
        users
    };
}

export let loadAppointments = (tasks) => {
    return {
        type: 'LOAD_APPOINTMENTS',
        tasks
    };
};

// add a appointment for a user
export let addAppointment = (task) => {
    return {
        type: 'ADD_APPOINTMENT',
        task
    };
}

export let deleteAppointment = (task) => {
    return {
        type: 'DELETE_APPOINTMENT',
        task
    };
};

export let updateAppointment = (task) => {
    return {
        type: 'UPDATE_APPOINTMENT',
        task
    };
};

export let editAppointment = (date, newText, property) => {
    return {
        type: 'EDIT_APPOINTMENT_TEMP',
        date,
        newText,
        property
    };
};