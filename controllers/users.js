const { response, request} = require('express');

const usersGet = (req = request, res = response) => {
    const {page=1,nsfw=false,apikey} = req.query;
    res.json({
        msg: 'get api -controller',
        apikey,
        page,
        nsfw
    });
}

const usersPut = (req = request, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'put api -controller',
        id
    });
}
const usersPost = (req, res = response) => {
    const {nombre} = req.body;

    res.json({
        msg: 'post api -controller',
        body: nombre,
    });
}
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete api -controller'
    });
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch api -controller'
    });
}


module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}