import monthReducer from '../build/reducers/month';

const month = {
    '1': [{
        firstName: 'Bill',
        lastName: 'Billson',
        phoneNumber: '32343423',
        email: 'bill@bill.com',
        rxDescription: 'test',
        notes: 'test',
        scheduledDate: '2017-07-01',
        _id: '123'
    }]
};

describe("month reducer", () => {
    it("should update reducer", () => {
        expect(monthReducer(month, {
            type: 'UPDATE_APPOINTMENT', date: '1', appointment: {
                firstName: 'Bill',
                lastName: 'Billson',
                phoneNumber: '32343423',
                email: 'jake@bill.com',
                rxDescription: 'test',
                notes: 'test',
                scheduledDate: '2017-07-01',
                _id: '123'
            }
        }))
            .toEqual({
                '1': [{
                    firstName: 'Bill',
                    lastName: 'Billson',
                    phoneNumber: '32343423',
                    email: 'jake@bill.com',
                    rxDescription: 'test',
                    notes: 'test',
                    scheduledDate: '2017-07-01',
                    _id: '123'
                }]
            });
    });
    it.skip("should logout user");
    it.skip("add upstream");
    it.skip("remove upstream");
})