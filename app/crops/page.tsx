import { title } from "@/components/primitives";

export default function CropsPage() {
  return (
    <div className="w-4/5 mx-auto border rounded-md shadow-md p-6">
      <h1 className={title({ color: "violet" })}>Crops</h1>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mt-4">
          Crops: Information About Various Crops and Their Cultivation
        </h2>

        {/* Crop Varieties Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Crop Varieties</h3>
          <p className="mt-2 text-justify">
            Understand the different types of crops such as cereals (wheat,
            rice, maize), pulses (lentils, chickpeas), oilseeds (sunflower,
            soybeans), fruits (apples, mangoes), and vegetables (tomatoes,
            carrots). Learn about their growing seasons, climatic requirements,
            and soil preferences.
          </p>
          <p className="mt-2 text-justify">
            Cereals: Major food staples that form the basis of many diets
            worldwide. For instance, wheat is predominantly grown in temperate
            regions, while rice flourishes in tropical and subtropical climates.
          </p>
          <p className="mt-2 text-justify">
            Pulses: These are not only important for human consumption but also
            for enriching soil nitrogen, making them ideal for crop rotation.
          </p>
          <p className="mt-2 text-justify">
            Oilseeds: Essential for oil extraction, these crops often require
            specific climatic conditions to thrive.
          </p>
        </div>

        {/* Planting and Harvesting Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Planting and Harvesting</h3>
          <p className="mt-2 text-justify">
            Get detailed guides on planting methods, seed selection, germination
            techniques, and ideal sowing times for each crop. Learn about crop
            maturity indicators, harvesting techniques, and post-harvest
            handling to minimize losses.
          </p>
          <p className="mt-2 text-justify">
            Planting Methods: Direct seeding, transplanting, and broadcasting
            are common techniques, each suitable for different crops and
            conditions.
          </p>
          <p className="mt-2 text-justify">
            Harvesting Techniques: Understanding when to harvest is crucial; for
            example, grains are harvested when moisture levels are optimal to
            prevent spoilage.
          </p>
          <p className="mt-2 text-justify">
            Post-Harvest Handling: Proper techniques can drastically reduce
            waste; for example, drying and storing grains in cool, dry
            conditions can extend shelf life.
          </p>
        </div>

        {/* Crop Rotation and Companion Planting Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">
            Crop Rotation and Companion Planting
          </h3>
          <p className="mt-2 text-justify">
            Discover how rotating crops helps in maintaining soil fertility,
            reducing pests, and improving yields. Explore companion planting
            techniques to create a mutually beneficial environment for different
            crops.
          </p>
          <p className="mt-2 text-justify">
            Benefits of Crop Rotation: Alternating crops each season can prevent
            the buildup of pests and diseases in the soil, leading to healthier
            plants.
          </p>
          <p className="mt-2 text-justify">
            Companion Planting Examples: - Nasturtiums: Can repel aphids and
            attract beneficial insects when planted near vegetables. - Legumes:
            Such as beans and peas can fix nitrogen in the soil, benefiting
            neighboring crops like corn.
          </p>
        </div>

        {/* Pest and Disease Management Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Pest and Disease Management</h3>
          <p className="mt-2 text-justify">
            Identify common pests and diseases affecting various crops, along
            with organic and chemical control methods. Learn about integrated
            pest management (IPM) strategies that combine biological, cultural,
            and mechanical approaches to minimize damage.
          </p>
          <p className="mt-2 text-justify">
            Cultural Control: Practices such as crop rotation, proper spacing,
            and sanitation can significantly reduce pest populations.
          </p>
          <p className="mt-2 text-justify">
            Biological Control: Introducing natural predators, such as ladybugs
            for aphid control, can help maintain pest populations without
            harmful chemicals.
          </p>
          <p className="mt-2 text-justify">
            Chemical Control: If necessary, use pesticides as a last resort,
            opting for less harmful, targeted treatments to minimize impact on
            beneficial insects.
          </p>
        </div>

        {/* Crop Nutrition Section */}
        <div className="border border-gray-300 shadow-sm rounded-md p-4 mt-4">
          <h3 className="font-bold text-lg">Crop Nutrition</h3>
          <p className="mt-2 text-justify">
            Understand the nutritional needs of different crops, including the
            role of macro and micronutrients. Find out how to use fertilizers,
            compost, and organic matter to ensure healthy crop growth.
          </p>
          <p className="mt-2 text-justify">
            Nutrient Deficiencies: Common symptoms include yellowing leaves
            (nitrogen deficiency) and stunted growth (phosphorus deficiency).
            Regular soil testing can help identify these issues early.
          </p>
          <p className="mt-2 text-justify">
            Organic vs. Synthetic Fertilizers: While synthetic options provide
            quick nutrient boosts, organic fertilizers, such as compost, promote
            long-term soil health and fertility.
          </p>
          <p className="mt-2 text-justify">
            Composting: This process not only recycles waste but also enriches
            soil, improving its structure and water retention capacity.
          </p>
        </div>
      </div>
    </div>
  );
}
