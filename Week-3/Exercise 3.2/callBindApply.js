var Navodaya = {
  name: 'Shashi',
  house: 'udaigiri ',
  getNavodayanDetails: function() {
      var fulldetail = this.name + ' ' + this.house;
      return fulldetail;
  }
};

var navodayanName = function(breakfast, lunch) {
  console.log(this.getNavodayanDetails() + ' serves ' + breakfast + ' and ' + lunch);
};

navodayanName.call(Navodaya,'Idli vada', 'North Thali'); 

navodayanName.apply(Navodaya,['Idli vada', 'North Thali']); 

var logNavodayan = navodayanName.bind(Navodaya); // creates new object and binds Navodaya. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); 