export const URL = 'https://api.pexels.com/v1/curated?page=1&per_page=40';
export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'Authorization': 'S9mGUCxW8S4RY18RYAYufEeyRDMf93xBG2AoCQt7o0UU79iReZpBJYYd',
  }
};

export enum AppRoute {
  Root = '/',
  MyFavorite = '/favorite',
  NoFoundPage = '*',
}
