import {
  storiesOf
} from '@storybook/html';

import {
  number,
  select,
  withKnobs
} from '@storybook/addon-knobs';

storiesOf('Nutrition badges', module)
  .addDecorator(withKnobs)
  .add('Nova badge', () => {
    const label = 'Score';
    const defaultValue = 1;
    const options = {
      range: true,
      min: 1,
      max: 4,
      step: 1,
    };
    const value = number(label, defaultValue, options);
    return `
      <nova-badge score=${value}></nova-badge>
    `;
  })
  .add('Nutri-score badge', () => {
    const label = 'Values';
    const options = {
      A: 'A',
      B: 'B',
      C: 'C',
      D: 'D',
      E: 'E'
    };
    const defaultValue = 'A';
    const value = select(label, options, defaultValue);
    return `<nutri-score score=${value}></nutri-score>`;
  });