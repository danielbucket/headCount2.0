// import kinderData from '../data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  formatData(raw) {
    return raw.reduce( (formattedData, curVal) => {

      !formattedData[curVal.Location] ?
       formattedData[curVal.Location] = [] :
       formattedData[curVal.Location].push(
        { [curVal.TimeFrame]: curVal.Data }
      )

      return formattedData;
    }, {})
    console.log(baseValue);
  };

  //Iteration 1 part 1
    findByName (userSearch) {
      //case insensitive search ==> toLowerCase()
      //round to the nearest hundredth ==> numObj.toFixed(3)
      //sanitized, i.e. defaults to 0 if no data available, see 'ARICKAREE R-2'
      //maybe use this function ==> .includes(userSearch)
      //return object
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
