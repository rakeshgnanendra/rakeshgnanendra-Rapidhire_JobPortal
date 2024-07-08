import React, { useState, useEffect } from 'react';



import { networkAdapter } from 'services/NetworkAdapter';

import { useNavigate } from 'react-router-dom';




import Toast from 'components/ux/toast/Toast';



/**
 * A component that displays the booking details for a hotel, including date range, room type, and pricing.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.hotelCode - The unique code for the hotel.
 */
const HotelBookingDetailsCard = ({ hotelCode }) => {
  // State for date picker visibility
 

  const navigate = useNavigate();

  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  // State for date range
  

  // State for selected room, guests, and rooms
  const [selectedRoom] = useState({
    value: '1 King Bed Standard Non Smoking',
    label: '1 King Bed Standard Non Smoking',
  });
 
  const [selectedRooms] = useState({
    value: 1,
    label: '1 room',
  });

  // State for pricing and booking details
 
 
  const [bookingPeriodDays] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({});

  // Options for guests and rooms
  
  
  



  /**
   * Calculates the total price and taxes based on the selected room and booking period.
   */
  const calculatePrices = () => {
    
   
   
  };
  

  const onBookingConfirm = () => {
    alert("Your Job Application has been submited Successfully! Your Application Id : RHAPPL0908765")
    // if (!dateRange[0].startDate || !dateRange[0].endDate) {
    //   setErrorMessage('Please select check-in and check-out dates.');
    //   return;
    // }
  // const checkIn = format(dateRange[0].startDate, 'dd-MM-yyyy');
  // const checkOut = format(dateRange[0].endDate, 'dd-MM-yyyy');
    // const queryParams = {
    //    hotelCode,
    // //   checkIn,
    //   // checkOut,
    //    guests: selectedGuests.value,
    //   rooms: selectedRooms.value,
    //    hotelName: bookingDetails.name.replaceAll(' ', '-'), // url friendly hotel name
    // };

    const url = `/`;
    navigate(url, {
      state: {
        //total,
        // checkInTime: bookingDetails.checkInTime,
        // checkOutTime: bookingDetails.checkOutTime,
      },
    });
  };

  // Handler for dismissing error message
  const dismissError = () => {
    setErrorMessage('');
  };

  // Effect for initial price calculation
  useEffect(() => {
    calculatePrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingPeriodDays, selectedRooms, selectedRoom, bookingDetails]);

  // Effect for fetching booking details
  useEffect(() => {
    const getBookingDetails = async () => {
      const response = await networkAdapter.get(
        `api/hotel/${hotelCode}/booking/enquiry`
      );
      if (response && response.data) {
        setBookingDetails(response.data);
      }
    };
    getBookingDetails();
  }, [hotelCode]);

  return (
    <div className="mx-2 bg-white shadow-xl rounded-xl overflow-hidden mt-2 md:mt-0 w-full md:w-[380px]">
      <div className="px-6 py-4 bg-brand text-white">
        <h2 className="text-xl font-bold">Application Details</h2>
      </div>
      <div className="p-6 text-sm md:text-base">
        {/* Total Price */}
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-800 mb-1">
            Full Name
          </div>
          <div className="text-xl font-bold text-indigo-600">
          <label>
    <input name="myInput" placeholder='Enter Full Name'/>
      </label>
            
          </div>
          
        </div>

        {/* Dates & Time */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Total Experience</div>
          <div className="text-xl font-bold text-indigo-600">
          <label>
          <input name="myInput1" placeholder='Enter Your Total Experience'/>
          </label>
          </div>
        </div>

        {/* Reservation */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Aadhar/Passport Number</div>
          <div className="text-xl font-bold text-indigo-600">
          <label>
          <input name="myInput2" placeholder='Enter Your Aadhar Number'/>
          </label>
          <label>
          <input name="myInput3" placeholder='Enter Your Passport Number'/>
          </label>
          </div>
        </div>

        {/* Room Type */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Current Location</div>
          <div className="text-xl font-bold text-indigo-600">
          <label>
          <input name="myInput4" placeholder='Enter Your Current Location'/>
          </label>
          </div>
        </div>

        {/* Per day rate */}
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Resume</div>
          <div className="text-xl font-bold text-indigo-600">
          <label>
          <input name="myInput5" type="file" placeholder='Upload Your Resume'/>
          </label>
          </div>
        </div>

        {/* Taxes */}
        

        {errorMessage && (
          <Toast
            type="error"
            message={errorMessage}
            dismissError={dismissError}
          />
        )}
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <button
          onClick={onBookingConfirm}
          className="w-full bg-brand-secondary text-white py-2 rounded hover:bg-yellow-600 transition duration-300"
        >
          Apply Job
        </button>
      </div>
    </div>
  );
};

export default HotelBookingDetailsCard;
