"use strict";


//Дерево колбэков разрастается, это плохо
/* console.log('Запрос данных...');

setTimeout ( () => {
    console.log("Подготовка данных...");

    const product = {
        name: "TV",
        price: 2000   
    };

    setTimeout( () => {
        product.status = "order";
        console.log(product);
    }, 2000);
}, 2000); */

//Promise

/* const req = new Promise(function(resolve, reject) {
    setTimeout ( () => {
        console.log("Подготовка данных...");
    
        const product = {
            name: "TV",
            price: 2000   
        };
    
        resolve(product);

    }, 2000);
});

req.then( (product) => {
   const req2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        product.status = "order";
        resolve(product);
    }, 2000);
   });

   req2.then(data => {
       console.log(data);
   });
});

// еще вариант

req.then( (product) => {
    return new Promise((resolve, reject) => {
     setTimeout( () => {
         product.status = "order";
         resolve(product);
     }, 2000);
    });
    }).then(data => {
        data.modify = true;
        return data;
    }).then((data) => {
        console.log(data);
    });

//работа с reject

req.then( (product) => {
    return new Promise((resolve, reject) => {
     setTimeout( () => {
         product.status = "order";
         reject();
     }, 2000);
    });
    }).then(data => {
        data.modify = true;
        return data;
    }).then((data) => {
        console.log(data);
    }).catch(() => {
        console.error("Произошла ошибка");
    });

    // finally

    req.then( (product) => {
        return new Promise((resolve, reject) => {
         setTimeout( () => {
             product.status = "order";
             resolve(product);
         }, 2000);
        });
        }).then(data => {
            data.modify = true;
            return data;
        }).then((data) => {
            console.log(data);
        }).catch(() => {
            console.error("Произошла ошибка");
        }).finally(() => {
            console.log('Finally');
        }); */

        const test = time => {
            return new Promise(resolve => {
                setTimeout(() => resolve(), time);
            });
        };

        /* test(1000).then(() => console.log('1000 ms'));
        test(2000).then(() => console.log('2000 ms')); */

       /*  Promise.all([test(1000), test(2000)]).then( () => {
            console.log('All');
        }); */

        Promise.race([test(1000), test(2000)]).then( () => {
            console.log('All');
        });