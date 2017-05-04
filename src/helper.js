// import kinderData from '../data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data);
  }

  formatData(rawData) {
    return rawData.reduce( (formattedData, curVal) => {
      let { Location, TimeFrame, Data } = curVal;

      Location = Location.toUpperCase()

      Data = parseFloat(Data).toFixed(3) * 1;
      if(isNaN(Data)) {
        Data = 0.000;
      };

      if (!formattedData[Location]) {
        formattedData[Location] = {};
        formattedData[Location].location = Location;
        formattedData[Location].data = {};
      }
      formattedData[Location].data[TimeFrame] = Data;
      return formattedData;
    }, {})
  };

    findByName (userSearch='') {
      return this.data[userSearch.toUpperCase()]
    }

    findAllMatches (userSearch = '') {
      const locationKeys = Object.keys(this.data)

      return locationKeys.reduce( (arr, location, index) => {
        if (location.toUpperCase().indexOf(userSearch.toUpperCase()) !== -1 ) {
          arr.push(this.data[locationKeys[index]]);
        }
        return arr
      }, [])
    }

    findAverage (userDistrict) {
      let yearObj = this.findByName(userDistrict).data;
      let yearObjKeys = Object.keys(yearObj);

      let numerator = yearObjKeys.reduce( (sum, curVal) => {
        return sum += yearObj[curVal];
      }, 0)

      return (numerator / yearObjKeys.length).toFixed(3) * 1;
    }

    compareDistrictAverages (userDistrict1, userDistrict2) {
      let avg1 = this.findAverage(userDistrict1);
      let avg2 = this.findAverage(userDistrict2);

      return {
        [userDistrict1.toUpperCase()]: avg1,
        [userDistrict2.toUpperCase()]: avg2,
        'compared': (avg1 / avg2).toFixed(3) * 1
      }
    }

  };
