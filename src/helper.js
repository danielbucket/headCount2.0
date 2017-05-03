// import kinderData from '../data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data);
  }

  formatData(raw) {
    return raw.reduce( (formattedData, curVal) => {
      let { Location, TimeFrame, Data } = curVal;

      Data = parseFloat(Data).toFixed(3) * 1; //round to 3 digits
      isNaN(Data) ? Data = 0.000 : '';

      if (!formattedData[Location]) {
           formattedData[Location] = {};
           formattedData[Location].location = Location;
           formattedData[Location].data = {};
      }
      formattedData[Location].data[TimeFrame] = Data;
      return formattedData;
    }, {})
  };

  //Iteration 1 part 1
    findByName (userSearch) {
      if (!userSearch) {
        return undefined;
      }

      const locationKeys = Object.keys(this.data)

      let searchIndex = locationKeys.findIndex( el => {
        return userSearch.toUpperCase() === el.toUpperCase()
      })

      return this.data[locationKeys[searchIndex]]
    }

  //Iteration 1 part 2
    findAllMatches () {
      //same as above, but include all hits, e.g. 'Colorado' and 'Colorado Springs'
    }

  };

  //data example object?:
  // {
  //   Colorado: {'2004': 0.302, '2005'; 0.352 },
  //   'Aacdemy 20': {'2004': 0.564, '2005': 0.678},
  //   'Adams County 14': {'2005': 0.354, '2006': 0.465, '2007': 0.576}
  // }


  // findByName exampleObject:
  // district.findByName('Academy 20')
  // {
  //   location: 'Academy 20',
  //   data: {"2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, "2008": 0.385, "2009": 0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, "2013": 0.488, "2014": 0.49}
  // }
