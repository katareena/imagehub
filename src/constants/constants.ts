export enum URL {
  Resource = 'https://api.pexels.com/v1/curated',
  Search = 'https://api.pexels.com/v1/search/',
}
export const ITEMS_PER_FETCHING = 60;
export const MOBILE_WIDTH = 576;
export const HEADER_HEIGHT = 54;
export const SEARCHER_HEIGHT = 180;
export const ITEM_HEIGHT = 200;

export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    Authorization: 'S9mGUCxW8S4RY18RYAYufEeyRDMf93xBG2AoCQt7o0UU79iReZpBJYYd',
  },
};

export enum AppRoute {
  Root = '/',
  Favourites = '/favourites',
  Search = '/search',
  NoFoundPage = '*',
}

export enum InfoText {
  NotFoundImg = 'The search result was not found, please try again!',
  NotExistPage = 'Oh no! The page you are looking for does not exist.',
  Error = 'Something went wrong :( We are doing our best to fix it!',
  Loading = 'Loading...',
  EmptyFavourites = 'Please add something to your favourites...',
}

export const WHITESPACE_REGEXP = /[^\s]/gim;
