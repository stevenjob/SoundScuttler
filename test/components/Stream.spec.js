import Stream from '../../src/components/stream/Stream';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

describe('Stream', () => {
  const props = {
    tracks: [{ origin: { title: 'x' } }, { origin: { title: 'y' } }]
  };

  it('shows two elements', () => {
    const element = shallow(<Stream {...props} />);

    expect(element.find('.track')).to.have.length(2);
  });
});
