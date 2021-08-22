import { useMemo } from "react";

// Кастомный хук для сортировки в селект
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};


// Кастомный хук для сортировки и фильтрации
export const useFiltredPosts = (posts, sort, query) => {

  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndFiltredPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [sortedPosts, query]);

  return sortedAndFiltredPosts;
};