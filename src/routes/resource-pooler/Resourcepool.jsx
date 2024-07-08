

import ReactImageGallery from 'react-image-gallery';

const Resourcepool = () => {
  

  

  return (
    <div className="flex items-start justify-center flex-wrap md:flex-nowrap container mx-auto p-4">
      <div className="w-[800px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div>
          <div className="relative w-full">
            <ReactImageGallery
              items="https://thumbs.dreamstime.com/b/photo-serious-confident-programmer-wear-spectacles-arms-folded-indoors-workplace-workshop-home-photo-serious-confident-262872784.jpg"
              showPlayButton={false}
              showFullscreenButton={false}
            />
            
          </div>
          <div className="p-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            CURRENT SAP UI5 FIORI DEVELOPER AT INFOSYS
            </h2>
            <p className="text-sm text-gray-600 mb-4">
             Test
            </p>
            <div className="mt-2 space-y-2">
              
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-gray-600">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Resourcepool;
