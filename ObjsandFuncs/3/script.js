var pagani = Object.create({
    calculateDisPerYear: function () {
       Object.defineProperty(this,'disPerYear', {
           value: Math.ceil(this.distance / this.age),
           enumerable: true,
           writable: false,
           configurable: false
       }) 
        
    }
},{
    name: {
        value: 'Pagani', 
        enumerable: true, 
        writable:false,
        configurable: false
    },
    model: {
    value: 'Zonda',
    enumerable: true,
    writable:false,
    configurable: false
    },
    year: {
        value: 2017,
        enumerable: true,
        writable:false,
        configurable: false
    },
    distance: {
        value: 100000,
        enumerable: true,
        writable:true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() {
            console.log('Получаем возраст')
            return new Date().getFullYear() - this.year
        },
        set: function () {
            console.log('Устанавливаем значение')
        }
    }
})

console.log(pagani)
for (var key in pagani) {
    if (pagani.hasOwnProperty(key)) {
    console.log(key,pagani[key])
    }
}