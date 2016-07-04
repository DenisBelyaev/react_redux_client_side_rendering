"use strict"

var data = [
    {
        status: 'client',
        menuItems: [
            {
                name: 'users',
                desc: 'aaaaaaaaaa'
            },
            {
                name: 'todos',
                desc: 'bbbbbbb'
            }
        ]
    },
    {
        status: 'admin',
        menuItems: [
            {
                name: 'cron',
                desc: 'cccccccc'
            },
            {
                name: 'script',
                desc: 'ddddddd'
            }
        ]
    },
];

const dataMap= data.reduce(function (map, manager) {
    manager.menuItemsMap = manager.menuItems.reduce(function (itemsMap, item) {
        itemsMap[item.name] = item
        return itemsMap
    }, {})
    map[manager.status] = manager
    console.log(map);
    return map
}, {})

exports.getAll = function () {
    return data
}

exports.lookupManager = function (manager) {
    return dataMap[manager]
}

exports.lookupMenuItem = function (manager, item) {
    return dataMap[manager].menuItemsMap[item]
}

