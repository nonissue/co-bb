import { useState } from 'react';
import { SelectMenu } from 'bumbag';

// type option = {
//   key: number;
//   label: string;
//   value: string;
// };

const Test = () => {
  const [value, setValue] = useState();

  return (
    <SelectMenu
      onChange={setValue}
      options={[
        { key: 1, label: 'Apples', value: 'apples' },
        { key: 2, label: 'Bananas', value: 'bananas' },
        { key: 3, label: 'Oranges', value: 'oranges' },
        { key: 4, label: 'Mangos', value: 'mangos' },
      ]}
      placeholder='Select a fruit...'
      value={value}
    />
  );
};

export default Test;
