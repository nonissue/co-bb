import { useState } from 'react';
import { SelectMenu, applyTheme, css } from 'bumbag';

const FancySelect = applyTheme(SelectMenu, {
  defaultProps: {
    wrap: 'haha',
  },
});

const options = [
  { key: 1, label: 'Apples', value: 'apples' },
  { key: 2, label: 'Bananas', value: 'bananas' },
  { key: 3, label: 'Oranges', value: 'oranges' },
  { key: 4, label: 'Mangos', value: 'mangos' },
];

const Test = () => {
  const [value, setValue] = useState('');

  // so the component functions how i would expect here
  // except this type warning is thrown

  // type warning gone!
  // but so is the placeholder text
  return (
    <FancySelect
      // isMultiSelect
      onChange={setValue}
      // onChange={(event: any) => console.log(event[0])}
      // onChange={(event: any) => {
      //   console.log(event);
      //   setValue(event);
      // }}
      options={options}
      placeholder='Select a fruit...'
      value={value}
      label='Test...'
    />
  );
};

export default Test;
