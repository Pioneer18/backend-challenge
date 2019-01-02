//retrieve and list all the physicians from the db matching the users inputed filter requirements

const filterd = ({ Physicians }) => async (req, res, next) => {
    try {
        let filter = await Physicians.find(
            //find where the firstName and lastName paths match the client input (from a search)
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                specialty: [{ specialty: req.body.specialty }],
                contractStatus: {
                    employeed: req.body.contractStatus
                },
                term: {
                    years: req.body.termYears,
                    months: req.body.termMonths,
                    start: req.body.termStart,
                    end: req.body.termEnd
                },
                state: req.body.state,
                facility: [{
                    name: req.body.facilityName,
                    address: { street: req.body.facilityStreet, city: req.body.facilityCity, suite: req.body.facilitySuite },
                    county: req.body.facilityCity
                }]
            });
        return res.send(filter);

    } catch (error) {

        next(error);
    }
};

module.exports = { filterd };