const {query} = require("../databse/index");
const crypto  = require('crypto');
const dayjs  =  require('dayjs');

let i = 1;

const json = {};


async function generate() {
    const addressList = [
        "г. Санкт Петербург, ул. Марашала Говорова д. 14, к. 1, кв. 59",
        "г. Санкт Петербург, ул. Восстания д. 11, кв. 3",
        "г. Санкт Петербург, ул. Невский проспект д. 13, кв. 19",
        "г. Санкт Петербург, ул. Моховая д. 31, кв. 28",
    ]

    const randomIndex = Math.random(3);

    const order = {
        slug: crypto.randomBytes(10).toString('hex'),
        address: addressList[1],
        startTime: dayjs(new Date()).toISOString(),
        endTime: dayjs(new Date()).toISOString(),
        error: 0.1,
        created_at: '2023-06-24 16:38:21.000000',
        updated_at: '2023-06-24 16:38:21.000000',
        deleted_at: null,
        status_id: 1,
        driver_id: 1,
        hub_id: 1,
        last_name: "Цой",
        first_name: "Валерий",
        phone: "89963020201",
        width: 1.5,
    };
    const sqlOrder = `INSERT INTO orders (
        slug,
        address,
        startTime,
        endTime,
        error,
        status_id,
        created_at,
        updated_at,
        deleted_at,
        driver_id, hub_id,
                    last_name, first_name, phone, width)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

    await query(sqlOrder, [order.slug,
        order.address,
        order.startTime.toString(),
        order.endTime.toString(),
        order.error,
        order.status_id,
        order.created_at,
        order.updated_at,
        order.deleted_at,
        order.driver_id,
        order.hub_id,
        order.last_name,
        order.first_name,
        order.phone,
        order.width

        ]
    );
}
setInterval(() => generate(), 1000*60*3);




