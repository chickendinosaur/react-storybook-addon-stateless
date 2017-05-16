import React from 'react';
import { storiesOf } from '@kadira/storybook';
import generateHarness from '../src/generate-props-harness';

function Counter(props) {
  return (
    <div>
      Stateless Counter: {props.value}
      <div>
        <button
          style={{
            width: 40,
            height: 40
          }}
          onClick={() => {
            props.onAdd(props.value + 1);
          }}
        >
        +
      </button>
        {
          props.showResetBtn &&
          <button
            style={{
              width: 60,
              height: 40
            }}
            onClick={() => {
              props.onReset();
            }}
          >
            Reset
          </button>
        }
      </div>
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
        onAdd={function (value) {
          this.setProps({
            value
          });
        }}
      />
    );
  });
