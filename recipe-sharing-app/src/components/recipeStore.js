import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  selectedRecipe: null,
  searchTerm: '', // ✅ Add this line
  setSearchTerm: (term) => set({ searchTerm: term }), // ✅ And this one
  setRecipes: (recipes) => set({ recipes }),
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      selectedRecipe: null,
    })),
}));

export default useRecipeStore;
