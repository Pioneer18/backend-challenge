//retrieve and list all the physicians from the db matching the users inputed filter requirements

const facilityByCounty = ({ Physicians }) => async (req, res, next) => {
    try {
        let facilities = await Physicians.find({"facility.county": req.body.facilityCounty}).
        where('firstName').equals('Jonathan').
        where('lastName').equals('Sells')
        return res.send(facilities);

    } catch (error) {

        next(error);
    }
};

module.exports = { facilityByCounty };