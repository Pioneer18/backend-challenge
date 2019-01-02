//retrieve and list all the physicians from the db matching the users inputed filter requirements

const filtered = ({ Physicians }) => async (req, res, next) => {
    try {
        let filter = await Physicians.aggregate([
            {
                $project: {
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
                }
            }
        ]);
        return res.send(filter);

    } catch (error) {

        next(error);
    }
};

module.exports = { filtered };