import { title } from "@/components/primitives";

export default function SoilHealthPage() {
  return (
    <div className="w-4/5 mx-auto border rounded-md shadow-md p-6">
      <h1 className={title({ color: "violet" })}>Soil Health</h1>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mt-4">
          Soil Health: Understanding and Improving Soil Quality
        </h2>

        {/* Soil Testing Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Soil Testing</h3>
          <p className="mt-2 text-justify">
            Soil testing is essential to determine the nutrient status, pH
            level, and organic matter content of the soil. Regular testing helps
            in making informed decisions about soil management and crop
            selection.
          </p>
          <p className="mt-2 text-justify">
            Benefits of Soil Testing: Understanding soil conditions can lead to
            improved crop yields, reduced fertilizer costs, and enhanced
            environmental protection.
          </p>
          <p className="mt-2 text-justify">
            Soil Test Methods: Samples can be collected using different methods,
            including grab sampling and composite sampling, to get accurate
            representations of the soil condition.
          </p>
        </div>

        {/* Fertilization Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Fertilization</h3>
          <p className="mt-2 text-justify">
            Fertilization is critical for replenishing nutrients in the soil.
            Understanding the type of fertilizers and their application is
            essential for maintaining soil health and promoting crop growth.
          </p>
          <p className="mt-2 text-justify">
            Types of Fertilizers: There are organic fertilizers (e.g., manure,
            compost) and synthetic fertilizers, each with different nutrient
            profiles and application methods.
          </p>
          <p className="mt-2 text-justify">
            Application Techniques: Proper techniques include broadcasting,
            banding, and fertigation, which should be chosen based on crop needs
            and soil conditions.
          </p>
        </div>

        {/* Conservation Practices Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Conservation Practices</h3>
          <p className="mt-2 text-justify">
            Implementing conservation practices helps maintain and improve soil
            health. Techniques include cover cropping, reduced tillage, and crop
            rotation.
          </p>
          <p className="mt-2 text-justify">
            Cover Cropping: Planting cover crops in off-seasons can prevent
            erosion, improve soil structure, and enhance biodiversity.
          </p>
          <p className="mt-2 text-justify">
            Reduced Tillage: Minimizing soil disturbance helps preserve soil
            structure, reduce erosion, and promote beneficial soil organisms.
          </p>
        </div>
      </div>
    </div>
  );
}
