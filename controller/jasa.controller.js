const { jasa } = require(`../models/index`);
const { Op } = require(`sequelize`);
const path = require(`path`);
const fs = require(`fs`);
// const upload = require(`./uploud.image`).single(`image`);

exports.getAll = async (req, res) => {
    let jasaID = await jasa.findAll();
    return res.json({
        success: true,
        data: jasaID,
        message: `All Jasa have been loaded`,
    });
};

exports.findJasa = async (req, res) => {
    let keyword = req.params.key;
    let jasaID = await jasa.findAll({
        where: {
            [Op.or]: [
                { name_jasa: { [Op.substring]: keyword } },
                { harga: { [Op.substring]: keyword } }
            ],
        },
    });
    return res.json({
        success: true,
        data: jasaID,
        message: 'All Jasa have been loaded',
    });
};

exports.addJasa = (request, response) => {
    let jasaID = {
        name_jasa: request.body.name_jasa,
        harga: request.body.harga,
    };
    jasa.create(jasaID)
        .then((result) => {
            return response.json({
                success: true,
                yah : jasaID,
                data: result,
                message: `New coffee has been inserted`,
            });
        })
        .catch((error) => {
            return response.json({
                success: false,
                message: error.message,
            });
        });
};

exports.updateJasa = async (request, response) => {
    let kiw = request.params.id;
    let jasaID = {
        name_jasa: request.body.name_jasa,
        harga: request.body.harga,
    };
    if (!jasaID.name_jasa || !jasaID.harga) {
        return response.json({
            success: false,
            message: "Jasa Sold Out",
        });
    }   
    jasa
        .update(jasaID, { where: { jasaID: kiw } })
        .then((result) => {
            return response.json({
                success: true,
                message: `Data coffee has been updated`,
            });
        })
        .catch((error) => {
            return response.json({
                success: false,
                message: error.message,
            });
        });
}

exports.deleteJasa = async (request, response) => {
    const jasaID = request.params.id;
    try {
        const foundjasa = await jasa.findOne({ where: { jasaID: jasaID } }); // Menggunakan nama variabel yang berbeda  
        await jasa.destroy({ where: { jasaID: jasaID } }); // Menggunakan model coffee, bukan variabel yang digunakan sebelumnya
        return response.json({
            success: true,
            message: `Data Jasa has been deleted`,
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message,
        });
    }
};
