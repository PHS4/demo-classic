Ext.define('Demo.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',

    model: 'Demo.model.User',
    
    data: [
        {
            "id": 1,
            "role_id": 3,
            "active": false,
            "first_name": "Melody",
            "last_name": "Leannon",
            "address": "0977 Bailey Trace Suite 952",
            "email": "melody.leannon@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 2,
            "role_id": 3,
            "active": true,
            "first_name": "Norwood",
            "last_name": "Predovic",
            "address": "83949 Misty Roads Suite 254",
            "email": "norwood.predovic@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 3,
            "role_id": 3,
            "active": true,
            "first_name": "Irving",
            "last_name": "Bernhard",
            "address": "2251 Jacobi Summit Suite 310",
            "email": "irving.bernhard@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 4,
            "role_id": 3,
            "active": true,
            "first_name": "Norwood",
            "last_name": "Hudson",
            "address": "993 Francisca Well Suite 899",
            "email": "norwood.hudson@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 5,
            "role_id": 3,
            "active": true,
            "first_name": "Hertha",
            "last_name": "Wintheiser",
            "address": "89669 Tony Cape Apt. 652",
            "email": "hertha.wintheiser@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 6,
            "role_id": 3,
            "active": true,
            "first_name": "Serenity",
            "last_name": "Waters",
            "address": "26756 Tillman Orchard Apt. 279",
            "email": "serenity.waters@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 7,
            "role_id": 1,
            "active": true,
            "first_name": "Verlie",
            "last_name": "McClure",
            "address": "626 Wiegand Junction Apt. 783",
            "email": "verlie.mcclure@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 8,
            "role_id": 1,
            "active": true,
            "first_name": "Cara",
            "last_name": "Kuphal",
            "address": "2848 Brain Track Apt. 978",
            "email": "cara.kuphal@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 9,
            "role_id": 1,
            "active": false,
            "first_name": "Kyle",
            "last_name": "Larson",
            "address": "8837 Lind Land Suite 443",
            "email": "kyle.larson@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 10,
            "role_id": 1,
            "active": false,
            "first_name": "Eduardo",
            "last_name": "Gleichner",
            "address": "933 Samanta Drives Suite 622",
            "email": "eduardo.gleichner@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 11,
            "role_id": 1,
            "active": true,
            "first_name": "Jose",
            "last_name": "Hessel",
            "address": "19629 Herman Spur Apt. 082",
            "email": "jose.hessel@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 12,
            "role_id": 1,
            "active": true,
            "first_name": "Nelda",
            "last_name": "Erdman",
            "address": "29095 Osinski Landing Apt. 171",
            "email": "nelda.erdman@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 13,
            "role_id": 1,
            "active": false,
            "first_name": "Jordan",
            "last_name": "Batz",
            "address": "62199 Abshire Radial Suite 604",
            "email": "jordan.batz@gmail.commm",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 14,
            "role_id": 1,
            "active": true,
            "first_name": "Adeline",
            "last_name": "Botsford",
            "address": "969 Raleigh Crossroad Apt. 144",
            "email": "adeline.botsford@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 15,
            "role_id": 1,
            "active": false,
            "first_name": "Jeramie",
            "last_name": "Hagenes",
            "address": "4395 Mavis Alley Apt. 081",
            "email": "jeramie.hagenes@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 16,
            "role_id": 1,
            "active": false,
            "first_name": "Jean",
            "last_name": "Windler",
            "address": "80402 Abner Plain Suite 936",
            "email": "jean.windler@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 17,
            "role_id": 1,
            "active": true,
            "first_name": "Yoshiko",
            "last_name": "Klein",
            "address": "492 Dorris Glens Suite 380",
            "email": "yoshiko.klein@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 18,
            "role_id": 1,
            "active": true,
            "first_name": "Haylie",
            "last_name": "Cassin",
            "address": "16878 Thiel Point Apt. 180",
            "email": "haylie.cassin@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 19,
            "role_id": 1,
            "active": true,
            "first_name": "Davon",
            "last_name": "Aufderhar",
            "address": "9446 Christiansen Cove Suite 262",
            "email": "davon.aufderhar@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 20,
            "role_id": 1,
            "active": false,
            "first_name": "Trinity",
            "last_name": "Keeling",
            "address": "3244 Hyatt Junction Suite 125",
            "email": "trinity.keeling@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 21,
            "role_id": 1,
            "active": true,
            "first_name": "Lola",
            "last_name": "Wilderman",
            "address": "444 Barton Key Apt. 994",
            "email": "lola.wilderman@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 22,
            "role_id": 1,
            "active": true,
            "first_name": "Jan",
            "last_name": "Cole",
            "address": "71154 Stehr Falls Apt. 233",
            "email": "jan.cole@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 23,
            "role_id": 1,
            "active": false,
            "first_name": "Oran",
            "last_name": "Kuvalis",
            "address": "612 Theresa Land Apt. 751",
            "email": "oran.kuvalis@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        },
        {
            "id": 24,
            "role_id": 1,
            "active": true,
            "first_name": "Anahi",
            "last_name": "Cruickshank",
            "address": "64574 Coralie Locks Suite 011",
            "email": "anahi.cruickshank@gmail.com",
            "password": "1234",
            "created_at": "2020-01-01",
            "updated_at": "2020-04-03"
        }
    ],

    proxy: {
        type: 'memory'
    },

    // proxy: {
    //     type: 'ajax',
    //     url: 'data/db.json',
    //     /**
    //      * How to interperet incoming data.
    //      * https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.reader.Json.html
    //      */
    //     reader: {
    //         type: 'json',
    //         /**
    //          * The property to look for the fields defined above.
    //          */
    //         rootProperty: 'users'
    //     }
    // }
});


