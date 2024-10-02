import { title } from "@/components/primitives";

export default function WaterQualityPage() {
  return (
    <div className="w-4/5 mx-auto border rounded-md shadow-md p-6">
      <h1 className={title({ color: "violet" })}>Water Quality</h1>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mt-4">
          Understanding and Improving Water Quality
        </h2>

        {/* Water Quality Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Water Quality</h3>
          <img
            alt="Water Quality Testing"
            className="w-full h-auto rounded-md mt-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1ZEjRBWMM8EFEkumaM4lp3lwOYZJ3YrPdA&s"
            style={{ transform: "scale(0.8)" }}
          />
          <p className="mt-2 text-justify">
            Water quality refers to the chemical, physical, and biological
            characteristics of water, which determine its suitability for
            various uses such as drinking, agriculture, and industrial
            applications. Maintaining good water quality is essential for
            supporting human health and environmental sustainability.
          </p>
          <img
            alt="Sources of Water Pollution"
            className="w-full h-auto rounded-md mt-2"
            src="https://cdnintech.com/media/chapter/82246/1512345123/media/F1.png"
          />
          <p className="mt-2 text-justify">
            Importance of Water Quality: Clean water is vital for drinking,
            sanitation, and irrigation. Poor water quality can lead to health
            issues, affect aquatic ecosystems, and hinder economic development.
          </p>
          <p className="mt-2 text-justify">
            Key Parameters: Common indicators of water quality include pH level,
            turbidity, dissolved oxygen, nutrient concentrations (like nitrogen
            and phosphorus), and the presence of pathogens. Monitoring these
            parameters helps in assessing water quality and its impact on health
            and the environment.
          </p>
          <p className="mt-2 text-justify">
            Sources of Water Pollution: Contaminants can enter water bodies from
            agricultural runoff, industrial discharges, sewage, and stormwater.
            Understanding these sources is crucial for developing effective
            pollution control strategies.
          </p>
          <p className="mt-2 text-justify">
            Strategies for Improvement: To enhance water quality, strategies
            such as implementing best management practices in agriculture,
            upgrading wastewater treatment facilities, and restoring wetlands
            are essential. Public awareness and community involvement play a key
            role in these efforts.
          </p>
          <img
            alt="Water Quality Monitoring"
            className="w-full h-auto rounded-md mt-2"
            src="https://media.licdn.com/dms/image/C5612AQFB0lyegZ50hw/article-cover_image-shrink_600_2000/0/1626771913697?e=2147483647&v=beta&t=iNW3LSvsaEdLqy86YxuRTO2GXKISypunM_sE7KrzOFc"
          />
          <p className="mt-2 text-justify">
            <strong>NASA’s Role:</strong> NASA's Earth observation satellites
            monitor water quality parameters on a global scale, providing
            valuable data for managing freshwater resources and tracking
            pollution levels. This data supports decision-making for water
            resource management and environmental protection.
          </p>
          <p className="mt-2 text-justify">
            <strong>Benefits of Monitoring Water Quality:</strong> Regular
            monitoring allows for early detection of pollution, promotes
            sustainable water use, and ensures compliance with health and
            environmental standards. It also helps in educating communities
            about the importance of clean water and conservation practices.
          </p>
        </div>
      </div>
    </div>
  );
}
