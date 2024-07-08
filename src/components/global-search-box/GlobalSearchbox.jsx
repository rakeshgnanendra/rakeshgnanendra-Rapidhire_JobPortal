import { faLocationDot, faPerson , faBriefcase , faDumbbell } from '@fortawesome/free-solid-svg-icons';
import DateRangePicker from 'components/ux/data-range-picker/DateRangePicker';
import DropdownButton from 'components/ux/dropdown-button/DropdownButton';
import Input from 'components/ux/input/Input';

/**
 * GlobalSearchBox Component
 * Renders a search box with input fields for location, number of guests, and a date range picker.
 * It includes a search button to trigger the search based on the entered criteria.
 *
 * @param {Object} props - Props for the component.
 * @param {string} props.locationInputValue - The current value of the location input.
 * @param {string} props.numGuestsInputValue - The current value of the number of guests input.
 * @param {boolean} props.isDatePickerVisible - Flag to control the visibility of the date picker.
 * @param {Function} props.onLocationChangeInput - Callback for location input changes.
 * @param {Function} props.onNumGuestsInputChange - Callback for number of guests input changes.
 * @param {Function} props.onDatePickerIconClick - Callback for the date picker icon click event.
 * @param {Array} props.locationTypeheadResults - Results for the location input typeahead.
 * @param {Function} props.onSearchButtonAction - Callback for the search button click event.
 * @param {Function} props.onDateChangeHandler - Callback for handling date range changes.
 * @param {Function} props.setisDatePickerVisible - Callback to set the visibility state of the date picker.
 * @param {Object} props.dateRange - The selected date range.
 */
const dropdownOptions = [
  { name: '1 Year'},
  { name: '2 Year'},
  { name: '3 Year'},
  { name: '4 Year'},
  { name: '5 Year'},
  { name: '6 Year'},
  { name: '7 Year'},
  { name: '8 Year'},
  { name: '9 Year'},
  { name: '10 Year'},
  { name: '11 Year'},
  { name: '12 Year'}

];
const GlobalSearchBox = (props) => {
  const {
    locationInputValue,
    numGuestsInputValue,
    isDatePickerVisible,
    onLocationChangeInput,
    onNumGuestsInputChange,
    onDatePickerIconClick,
    locationTypeheadResults,
    onSearchButtonAction,
    onDateChangeHandler,
    setisDatePickerVisible,
    dateRange,
  } = props;
  return (
    <div className="flex flex-wrap flex-col lg:flex-row hero-content__search-box">
     
  
      <Input
        size="sm"
        value={numGuestsInputValue}
        onChangeInput={onNumGuestsInputChange}
        placeholder="Job Description"
        icon={faDumbbell}
        
      />
      <Input
        size="sm"
       placeholder = "Enter Experience"
        icon={faBriefcase}
        onChangeInput={onLocationChangeInput}
        
      />
     
       <Input
        size="sm"
       placeholder = "Enter Location"
        icon={faLocationDot}
        onChangeInput={onLocationChangeInput}
      />
      
      <button
        className="w-full md:w-auto sb__button--secondary bg-brand-secondary hover:bg-yellow-600 px-4 py-2 text-white"
        onClick={onSearchButtonAction}
      >
        SEARCH
      </button>
    </div>
  );
};

export default GlobalSearchBox;
