import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import { shallow, mount } from 'enzyme';

let app;
let wrapperMount;
let wrapperShallow;

describe.skip('App', () => {

  beforeEach(() => {
     app = new App;
     wrapperShallow = shallow(<App />)
     wrapperMount = mount(<App />)
    //  searchField = wrapperMount.find(‘input[type=“text”]‘)
    //  submitButton = wrapperMount.find(‘input[type=“submit”]‘)
   })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have a heading', () => {
    let heading = wrapperShallow.find("#heading")
    expect(heading.length).toEqual(1)
  })

})
