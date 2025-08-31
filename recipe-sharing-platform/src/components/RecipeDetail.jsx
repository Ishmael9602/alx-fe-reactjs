import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipes.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return <div className="text-center p-6 text-red-500">Recipe not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-4">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {recipe.ingredients?.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {recipe.instructions?.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
