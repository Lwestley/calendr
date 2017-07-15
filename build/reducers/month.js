// const initialState = [{
//         userId: 0,
//         todoList: [
//         {
//             task: 'Use Redux',
//             completed: false,
//             id: 0
//         }
//         ]
//     }
// ];

let month = (state = {}, action) => {
    let clonedState = null;
    switch(action.type){
        case 'LOAD_APPOINTMENTS':
        clonedState = Object.assign({}, state);
        action.tasks.forEach(appointment => {
        // write code here to add the appointment to your month object
        let appointmentDate = new Date(appointment.scheduledDate);
        clonedState[appointmentDate.getUTCDate()].push(appointment);
        });
        return clonedState;

        case 'ADD_APPOINTMENT':
        return {...state, status: action.status};

        case 'DELETE_APPOINTMENT':
        console.log('Deleted an appointment', action);
        return {...state, status: action.status};
        case 'EDIT_APPOINTMENT_TEMP':
        clonedState = Object.assign({}, state);
        clonedState[action.date][0][action.property] = action.newText;
        return clonedState;

        case 'UPDATE_APPOINTMENT':
        console.log('Updated an appointment', action);
        return {...state, status: action.status};
        
        default:

        return state;
    }
}

export default month;