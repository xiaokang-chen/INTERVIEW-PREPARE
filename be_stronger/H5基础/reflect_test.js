const employee = {
    firstName: 'Hal',
    lastName: 'Shaw'
};

let logHandler = {
    get: function(obj, key){
        // console.log(obj[key]);
        if(!obj[key]){
            console.log('Defalut name ');
        }else {
            console.log('Proxy: ' + obj[key]);
        }
        return Reflect.get(obj, key);
    }
};

let func = function() {
    let p = new Proxy(employee, logHandler);
    p.firstName;
    p.lastName;
    p.testName;
    p.name;
}

func();

let p = new Proxy(employee, logHandler);
p.firstName;
p.lastName;
p.test;