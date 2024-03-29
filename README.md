# CustomSelect Component

The `CustomSelect` component is a customizable select/dropdown component for React. It provides the following properties for customization:

- `options` (array): An array of options to be displayed in the dropdown.
- `loadData` (boolean): If set to `true`, all the options will be loaded when the input box is clicked.
- `placeholder` (string): Sets the placeholder text for the input box.
- `inputStyle` (string): Allows customization of the input box appearance using Tailwind CSS class-based properties.
- `onSelect` (function): Provides functionality for handling the selected item from the dropdown.

## Usage

```jsx
import React from "react";
import CustomSelect from "custom-select-gls";

const MyComponent = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleSelect = (option) => {
    console.log("Selected option:", option);
    // Implement your logic for handling the selected option
  };

  return (
    <div>
      <CustomSelect
        options={options}
        loadData={true}
        placeholder="Select an option"
        inputStyle="custom-input"
        onSelect={handleSelect}
      />
    </div>
  );
};

export default MyComponent;
```

In the example above, the `CustomSelect` component is imported and used within the `MyComponent` component. The `options` prop accepts an array of options, `loadData` is set to `true` to load all options initially, `placeholder` sets the placeholder text, `inputStyle` allows customization of the input box using Tailwind CSS, and `handleSelect` is the function to handle the selected option.
