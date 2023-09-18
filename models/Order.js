const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.Enquiry_form, {
                foreignKey: "enq_form_id",
                as: 'enq_foem_data'
            })

            Order.belongsTo(models.Client, {
                foreignKey: "client_id",
                as: 'enq_client_data'
            })

            Order.belongsTo(models.Property, {
                foreignKey: "prop_id",
                as: 'enq_prop_data'
            })
        }
    }
    Order.init({
        enq_form_id: {
            type: DataTypes.INTEGER,
            field: 'enq_form_id'
        },
        client_id: {
            type: DataTypes.INTEGER,
            field: 'client_id'
        },
        prop_id: {
            type: DataTypes.INTEGER,
            field: 'prop_id'
        },
        paidStatus: {
            type: DataTypes.BOOLEAN,
            field: 'paidStatus'
        },
        investing_amount: {
            type: DataTypes.INTEGER,
            field: 'investing_amount'
        }
    }, {
        sequelize,
        tableName: 'order',
        modelName: 'Order',
        timestamps: true
    })
    return Order
}