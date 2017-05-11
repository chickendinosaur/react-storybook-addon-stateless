import React from 'react';
import { storiesOf } from '@kadira/storybook';
import generateHarness from '../../src/generate-props-harness';

function Counter(props) {
  return (
    <div>
      Stateless Counter: {props.value}
      <button
        style={{
          display: 'block',
          width: 40,
          height: 40,
        }}
        onClick={() => {
          props.onClick(props.value + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

const CounterComponent = generateHarness(Counter);

storiesOf('react-storybook-addon-stateless', module)
  .addDecorator((story) => {
    return (
      <div className="storybook-content">
        {story()}
      </div>
    );
  })
  .add('setProps', () => {
    return (
      <CounterComponent
        value={0}
        onClick={function onClick(value) {
          this.setProps({
            value,
          });
        }}
      />
    );
  });
