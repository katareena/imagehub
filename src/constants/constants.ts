export enum URL {
  Resource = 'https://api.pexels.com/v1/curated',
  Search = 'https://api.pexels.com/v1/search/'
}
export const ITEMS_PER_FETCHING = 24;
export const MOBILE_WIDTH = 576;

export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'Authorization': 'S9mGUCxW8S4RY18RYAYufEeyRDMf93xBG2AoCQt7o0UU79iReZpBJYYd',
  }
};

export enum AppRoute {
  Root = '/',
  Favourites = '/favourites',
  Search = '/search',
  NoFoundPage = '*',
}

export enum InfoTitle {
  NoFoundImg = 'No Search Result Found!',
  Error = 'Something went wrong :( We are doing our best to fix it!',
  Loading = 'Loading...',
}

export const WHITESPACE_REGEXP = /[^\s]/gim;
