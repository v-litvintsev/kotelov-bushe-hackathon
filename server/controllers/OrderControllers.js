const {query} = require("../databse/index");
const _ = require("lodash");
module.exports = {
    getOrders: async function (req, res) {
        const SQL = `SELECT orders.*,
                            products.title       AS productTitle,
                            products.id          AS productsId,
                            products.description AS productDescription,
                            products.width       AS productWidth,
                            products.price       AS productPrice
                     FROM orders
                              LEFT JOIN orders_products ON orders_products.orders_id = orders.id
                              LEFT JOIN products ON orders_products.product_id = products.id`;

        const list = await query(SQL);
        let listUnique = _.uniqBy(list, 'id');
        listUnique = listUnique.map(order => {
            const products = list.filter(item => item.id === order.id)
                .map(item => {
                    return {
                        id: item.productsId,
                        title: item.productTitle,
                        description: item.productDescription,
                        width: item.productWidth,
                        price: item.productPrice,
                    }
                });
            order.products = products.filter(item => item.id).length ? products.filter(item => item.id) : [];

            delete order.productTitle;
            delete order.productsId;
            delete order.productDescription;
            delete order.productWidth;
            delete order.productPrice;
            return order;
        }).filter(item => item.products.length);

        res.send(listUnique);
    },

    setStatus: async function (req, res) {
        try {
            const id        = req.body.id;
            const statusId  = req.body.statusId;
            const SQL       = `UPDATE orders SET status_id = ? WHERE id = ?`;
            await query(SQL, [statusId, id]);
            res.send("success");
        } catch (error) {
            res.send(error).statusCode(500);
        }

    }
}
