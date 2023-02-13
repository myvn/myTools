let qs = require("qs")
let num = 1.0000000003
let str = '1name'
let boo = true
let arr = [1, 3]
let obj = {name: 1}
let fun = function () {
    return '1'
}

let oooo = {
    type: 'boolean',
    data: JSON.stringify(boo)
}

console.log(JSON.stringify(oooo));
let objX = JSON.parse(JSON.stringify(oooo))
let result = ''
if (objX.type === 'object' || objX.type === 'number' || objX.type === 'boolean') {
    result = JSON.parse(objX.data)
} else if (objX.type === 'string') {
    result = objX.data
}

console.log(typeof result, result);


// test_qs()

function test_qs() {
    console.log(oooo);
    console.log(qs.stringify(oooo));
    console.log(qs.parse(qs.stringify(oooo)));
}

console.log('====');

// test_JSON()

function test_JSON() {
    console.log(oooo);
    console.log(JSON.stringify(oooo));
    console.log(JSON.parse(JSON.stringify(oooo)));
}
