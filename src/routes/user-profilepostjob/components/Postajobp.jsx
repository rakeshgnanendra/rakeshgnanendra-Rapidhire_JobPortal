import { useState } from 'react';

/* PaymentMethodsPanel
 * Renders a list of payment methods with the ability to edit and save changes.
 * @param {Array} paymentMethods - An array of payment methods.
 * @param {Function} setPaymentMethods - A function to update the payment methods.
 * @returns {JSX.Element} - The PaymentMethodsPanel component.
 */
const Postajobp = ({
  userPaymentMethodsData,
  setUserPaymentMethodsData,
}) => {
  const [editIndex, setEditIndex] = useState(-1); // -1 means no edit is active
  const [currentEdit, setCurrentEdit] = useState({});

 

  const handleCancel = () => {
    setEditIndex(-1);
  };

  const handleSave = () => {
    const updatedPaymentMethods = [...userPaymentMethodsData.data];
    updatedPaymentMethods[editIndex] = currentEdit;
    setUserPaymentMethodsData({ data: updatedPaymentMethods });
    setEditIndex(-1);
  };

  const handleChange = (e, field) => {
    setCurrentEdit({ ...currentEdit, [field]: e.target.value });
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      {userPaymentMethodsData.data?.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          You have no saved payment methods.
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {userPaymentMethodsData.data.map((method, index) => (
            <li
              key={index}
              className="px-4 py-4 flex items-center justify-between sm:px-6"
            >
              {editIndex === index ? (
                // Editable Fields
                <div className="flex-grow">
                  <input
                    type="text"
                    value={currentEdit.cardType}
                    onChange={(e) => handleChange(e, 'cardType')}
                    className="text-lg border px-2 py-1 my-2 font-medium text-gray-900 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    value={currentEdit.cardNumber}
                    onChange={(e) => handleChange(e, 'cardNumber')}
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    value={currentEdit.expiryDate}
                    onChange={(e) => handleChange(e, 'expiryDate')}
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                    <input
                    type="text"
                    value={currentEdit.minexp}
                    onChange={(e) => handleChange(e, 'minexp')}
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                    <input
                    type="text"
                    value={currentEdit.emptype}
                    onChange={(e) => handleChange(e, 'emptype')}
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              ) : (
                // Display Fields
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder='Add Job Title'
                  
                    className="text-lg border px-2 py-1 my-2 font-medium text-gray-900 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                   placeholder='Company Name'
                   
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder='Minimum Experience'
                    
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                    <input
                    type="text"
                    placeholder='Employment Type'
                    
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                    <input
                    type="text"
                   placeholder='Location'
                 
                    className="text-sm border px-2 py-1 my-2 text-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              )}

              <div className="ml-4 flex-shrink-0">
                {editIndex === index ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-brand hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleSave(index)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-brand  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Job
                  </button>
                )}
                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Postajobp;
