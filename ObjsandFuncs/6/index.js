var person = {
    age : 24,
    name: 'Rob',
    job: 'Back-End',
    displayInfo: function(ms) {
        // var self = this


        setTimeout(function () {
            
            console.log('Name:', this.name)
            console.log('Job:', this.job)
            console.log('Age:', this.age)
        }.bind(this),ms)
    } 
}

person.displayInfo(5000)