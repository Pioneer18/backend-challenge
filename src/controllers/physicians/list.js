//list all the physicians in the db
//the actual route will accept the Physicians model and config as parameters and then
//perform an query of the db for all physicians


const list = ({ Physicians }, { config }) =>  (req, res, next) => {
    return res.send('list of physicians')
}

module.exports = { list };