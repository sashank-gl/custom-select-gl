import React, { useState } from "react";

const CustomSelect = ({
    options,
    loadData,
    placeholder,
    inputStyle,
    onSelect
}) => {
  
    // Defining States

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(loadData);
  const [placeHolder, setPlaceHolder] = useState(placeholder)

  // Defining Functions

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    console.log(value);
    if (value === "") {
      setIsDataLoaded(false);
    } else {
      setIsDataLoaded(true);
    }
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
        onSelect(option);
      }
  };

  const filteredOptions = options.filter((option) => {
    return option.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <div>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {selectedOption ? selectedOption : "Choose an Option"}
      </div>
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder={placeholder}
            className={inputStyle}
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul>
            {loadData ? (
              filteredOptions.map((option) => (
                <li key={option} onClick={() => handleSelectedOption(option)}>
                  {option}
                </li>
              ))
            ) : (
              <>
                {searchTerm === "" ? (
                  <li>No Options Found</li>
                ) : (
                  filteredOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSelectedOption(option)}
                    >
                      {option}
                    </li>
                  ))
                )}
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

CustomSelect.defaultProps = {
    onSelect: null
  };
  
export default CustomSelect;

// Instructions:

// options is the array of options that should be shown in the dropdown
// loadData:
//     if true: we can show the options before entering any search term
//     if false: options are shown only after entering a search term