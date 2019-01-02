//retrieve and list all the physicians from the db matching the users inputed filter requirements

const filtered = ({ Physicians }) => async (req, res, next) => {
    try {
        let filter = await Physicians./*.aggregate([
            {
                $match: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    specialty: req.body.specialty,
                    contractStatus: req.body.contractStatus,
                    term: {
                        years: req.body.termYears,
                        months: req.body.termMonths,
                        start: req.body.termStart,
                        end: req.body.termEnd
                    },
                    state: req.body.state,
                    facility:[{
                        name:req.body.facilityName,
                        address: { street: req.body.facilityStreet, city: req.body.facilityCity, suite: req.body.facilitySuite},
                        county: req.body.facilityCounty
                    }]
                }
            }
        ]);*/
            find({
                $or: [
                    {firstName: req.body.firstName},
                    {lastName: req.body.lastName},
                    {"specialty.specialty": req.body.specialty},
                    {"contractStatus.employeed": req.body.contractStatus},
                    {"term.years": req.body.termYears},
                    {"term.months": req.body.termMonths},
                    {"term.start": req.body.termStart},
                    {"term.end": req.body.termEnd},
                    {state: req.body.state},
                    {"facility.name": req.body.facilityName},
                    {"facility.address.street": req.body.facilityStreet},
                    {"facility.address.city": req.body.facilityCity},
                    {"facility.address.suite": req.body.facilitySuite},
                    {"facility.county": req.body.facilityCounty}
                ]
            },null,{limit: 50})
        return res.send(filter);

    } catch (error) {

        next(error);
    }
};

module.exports = { filtered };