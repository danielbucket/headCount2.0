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

  findByName(name) {

  }

};
