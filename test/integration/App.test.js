import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import { shallow, mount } from 'enzyme';


describe('App Test', () => {

  it('1. renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('2. should initialize with no cards to compare', () => {
    let wrapperMount = mount(<App />)

    let initialLeftCard = wrapperMount.state().leftCardBlank;
    let initialRightCard = wrapperMount.state().rightCardBlank;

    expect(initialLeftCard).toEqual(true);
    expect(initialRightCard).toEqual(true);
  })

  it('3. An empty search field will show 181 cards', () => {
    let wrapperMount = mount(<App />)

    let userSearch = wrapperMount.find('input');
    let searchedCardsArr = Object.keys(wrapperMount.state().districts);

    expect(searchedCardsArr.length).toEqual(181);
  })

  it('4. user searchs for "Col" and see only 2 cards', () => {
    let wrapperMount = mount(<App />)

    let userSearch = wrapperMount.find('input');

    userSearch.simulate('change', { target: { value: 'Col' } });

    let searchedCardsArr = Object.keys(wrapperMount.state().districts);

    expect(searchedCardsArr.length).toEqual(2);
  })

})
