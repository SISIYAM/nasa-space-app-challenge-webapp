import { title } from "@/components/primitives";

export default function WaterManagementPage() {
  return (
    <div className="w-4/5 mx-auto border rounded-md shadow-md p-6">
      <h1 className={title({ color: "violet" })}>Water Management</h1>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mt-4">
          Water Management: Strategies for Efficient Use and Conservation
        </h2>

        {/* Efficient Irrigation Techniques Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Efficient Irrigation Techniques</h3>
          <p className="mt-2 text-justify">
            Efficient irrigation is vital for maximizing crop yield while
            minimizing water waste. Understanding various irrigation systems can
            lead to better water management.
          </p>
          <p className="mt-2 text-justify">
            Drip Irrigation: This system delivers water directly to the root
            zone of plants, reducing evaporation and runoff, making it one of
            the most efficient methods.
          </p>
          <p className="mt-2 text-justify">
            Sprinkler Systems: These can be used for a wide variety of crops and
            allow for more uniform water distribution, especially in larger
            fields.
          </p>
          <p className="mt-2 text-justify">
            Subsurface Irrigation: This method involves burying irrigation tubes
            below the soil surface, providing direct moisture to plant roots
            while minimizing surface evaporation.
          </p>
        </div>

        {/* Water Conservation Strategies Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Water Conservation Strategies</h3>
          <p className="mt-2 text-justify">
            Implementing water conservation strategies is essential for
            sustainable agriculture, especially in water-scarce regions.
          </p>
          <p className="mt-2 text-justify">
            Mulching: Applying organic or inorganic materials on the soil
            surface can help retain moisture, suppress weeds, and improve soil
            health.
          </p>
          <p className="mt-2 text-justify">
            Crop Selection: Choosing drought-resistant crop varieties can
            significantly reduce water requirements while maintaining
            productivity.
          </p>
          <p className="mt-2 text-justify">
            Scheduling Irrigation: Timing irrigation based on weather forecasts
            and soil moisture levels can optimize water use and prevent
            overwatering.
          </p>
        </div>

        {/* Rainwater Harvesting Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Rainwater Harvesting</h3>
          <p className="mt-2 text-justify">
            Rainwater harvesting is an effective way to capture and store
            rainwater for agricultural use. This practice can significantly
            reduce dependency on groundwater and improve water availability
            during dry periods.
          </p>
          <p className="mt-2 text-justify">
            Collection Systems: Implementing rain gutters and storage tanks can
            help efficiently collect and store rainwater for irrigation and
            livestock.
          </p>
          <p className="mt-2 text-justify">
            Benefits: Utilizing harvested rainwater can reduce water costs,
            improve crop resilience, and contribute to sustainable agricultural
            practices.
          </p>
        </div>
      </div>
    </div>
  );
}
