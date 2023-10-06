export const getLogin = async (req, res) => {
    res.status(req.data.status).send(req.data);
}