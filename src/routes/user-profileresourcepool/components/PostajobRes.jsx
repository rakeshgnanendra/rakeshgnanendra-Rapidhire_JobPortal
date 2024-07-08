
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

/* PaymentMethodsPanel
 * Renders a list of payment methods with the ability to edit and save changes.
 * @param {Array} paymentMethods - An array of payment methods.
 * @param {Function} setPaymentMethods - A function to update the payment methods.
 * @returns {JSX.Element} - The PaymentMethodsPanel component.
 */
const PostajobRes = ({
  userPaymentMethodsData,
  setUserPaymentMethodsData,
}) => {
 // -1 means no edit is active
  
  

  

  return (
    <div
    className="card border p-4 flex flex-col md:flex-row gap-x-2 w-full"
    data-testid="hotel-view-card"
  >
    <div className="cursor-pointer">
      <Link
        to={`/Resourcepool`}
        className="block text-slate-700 hover:text-brand transition-colors duration-300"
      >
        <img
          src="https://thumbs.dreamstime.com/b/photo-serious-confident-programmer-wear-spectacles-arms-folded-indoors-workplace-workshop-home-photo-serious-confident-262872784.jpg"
          alt="Digital Personas"
          className="md:w-[220px] md:h-[140px]"
        />
      </Link>
    </div>
    <div className="flex flex-col justify-between ml-0 md:ml-2 flex-1">
      <div>
        <Link
          to={`/Resourcepool`}
          className="block text-slate-700 hover:text-brand transition-colors duration-300"
        >
          <h4 className="text-2xl font-bold text-slate-600">Mr.Abdul Aziz</h4>
        </Link>
        <p className="text-slate-600 text-sm">ABAP Developer</p>
      </div>
      <ul>
        
            <li className="text-green-800 font-medium text-sm" >
              <FontAwesomeIcon icon={faCheck} /> CURRENT SAP UI5 FIORI / ABAP DEVELOPER AT INFOSYS
            </li>
            <li className="text-green-800 font-medium text-sm" >
              <FontAwesomeIcon icon={faCheck} /> PREVIOUS: SAP UI5 FIORI AT COGNISANT
            </li>
            <li className="text-green-800 font-medium text-sm" >
              <FontAwesomeIcon icon={faCheck} /> EDUCATION: MBA ANDHRA UNIVERSITY 2014
            </li>
            <li className="text-green-800 font-medium text-sm" >
              <FontAwesomeIcon icon={faCheck} /> PREFLOC: HYDERABAD
            </li>
            <li className="text-green-800 font-medium text-sm" >
              <FontAwesomeIcon icon={faCheck} /> KEY SKILLS : SAP UI5/FIORI , HTML5 , OO ABAP, JAVA , JAVASCRIPT , J2ME , ODATA , SAPUI5 , HAT , SAP FIORI , SAP PORTAL
            </li>
         
      </ul>
    </div>
    <div className="flex flex-col ml-0 md:ml-auto justify-between border-l-0 md:border-l-2 items-stretch pl-0 md:pl-4">
      <div className="flex justify-between my-3 md:my-0 items-center md:flex-col md:justify-between w-full h-full">
        <h4 className="font-medium text-sm text-white bg-brand p-2">
         3.5<FontAwesomeIcon icon={faStar} />
        </h4>
       
      </div>
      <button
        className=" bg-brand-secondary px-4 py-2 text-white whitespace-nowrap"
      
      >
        Enroll Resource
      </button>
    </div>
    
  </div>
  
  );
};

export default PostajobRes;
