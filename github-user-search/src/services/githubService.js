import axios from "axios";

export const fetchAdvancedSearch = async (username, location, minRepos) => {
  let query = username ? `${username} in:login` : "";

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );
  return response.data;
};
