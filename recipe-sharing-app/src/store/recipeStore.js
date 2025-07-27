import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set(state => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe] 
    })),

  // Set recipes (initial or replace)
  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes
    }),

  setSearchTerm: (term) =>
    set(state => {
      const filtered = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered
      };
    }), 
    
  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),
}));

export default useRecipeStore;
