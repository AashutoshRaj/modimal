import React from "react";

const NutritionFacts = () => {
  return (
    <div className="max-w-sm border border-black p-4 text-black font-sans bg-white">
      <h2 className="text-3xl font-extrabold border-b border-black pb-1">Nutrition Facts</h2>

      <div className="text-sm font-semibold pt-1">8 servings per container</div>
      <div className="flex justify-between border-b border-black text-sm font-semibold py-1">
        <div>Serving size</div>
        <div>2/3 cup (55g)</div>
      </div>

      <div className="flex justify-between text-4xl font-bold py-2 border-b-8 border-black">
        <span>Calories</span>
        <span>230</span>
      </div>

      <div className="text-right text-xs font-semibold pb-1 border-b border-black">% Daily Value*</div>

      {/* Total Fat */}
      <div className="flex justify-between font-bold">
        <span>Total Fat 8g</span>
        <span>10%</span>
      </div>
      <div className="flex justify-between ml-4 text-sm">
        <span>Saturated Fat 1g</span>
        <span>5%</span>
      </div>
      <div className="ml-4 text-sm">Trans Fat 0g</div>

      {/* Cholesterol */}
      <div className="flex justify-between font-bold">
        <span>Cholesterol 0mg</span>
        <span>0%</span>
      </div>

      {/* Sodium */}
      <div className="flex justify-between font-bold">
        <span>Sodium 160mg</span>
        <span>7%</span>
      </div>

      {/* Carbohydrate */}
      <div className="flex justify-between font-bold">
        <span>Total Carbohydrate 37g</span>
        <span>13%</span>
      </div>
      <div className="flex justify-between ml-4 text-sm">
        <span>Dietary Fiber 4g</span>
        <span>14%</span>
      </div>
      <div className="ml-4 text-sm">Total Sugars 12g</div>
      <div className="flex justify-between ml-8 text-sm">
        <span>Includes 10g Added Sugars</span>
        <span>20%</span>
      </div>

      {/* Protein */}
      <div className="flex justify-between font-bold border-t-8 border-black mt-1 pt-1">
        <span>Protein 3g</span>
      </div>

      {/* Vitamins */}
      <div className="grid grid-cols-2 text-sm mt-2">
        <div>Vitamin D 2mcg</div>
        <div className="text-right">10%</div>
        <div>Calcium 260mg</div>
        <div className="text-right">20%</div>
        <div>Iron 8mg</div>
        <div className="text-right">45%</div>
        <div>Potassium 240mg</div>
        <div className="text-right">6%</div>
      </div>

      <div className="text-xs border-t border-black mt-2 pt-1">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
      </div>
    </div>
  );
};

export default NutritionFacts;
