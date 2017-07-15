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
    switch(action.type){
        case 'LOAD_APPOINTMENTS':
        let clonedState = Object.assign({}, state);
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
        default:

        return state;
    }
}

export default month;