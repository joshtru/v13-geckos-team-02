import SeriesTypes from "./series.types";

// ACTIONS FOR SERIES AIRING TODAY
export const getSeriesAiringTodayStart = (type, page) => ({
  type: SeriesTypes.GET_SERIES_AIRING_TODAY_START,
  payload: { type, page }
});
export const getSeriesAiringTodaySuccess = payload => ({
  type: SeriesTypes.GET_SERIES_AIRING_TODAY_SUCCESS,
  payload
});
export const getSeriesAiringTodayFailure = error => ({
  type: SeriesTypes.GET_SERIES_AIRING_TODAY_FAILURE,
  payload: error
});

// ACTIONS FOR SERIES ON THE AIR
export const getOnTheAirSeriesStart = (type, page) => ({
  type: SeriesTypes.GET_ON_THE_AIR_SERIES_START,
  payload: { type, page }
});
export const getOnTheAirSeriesSuccess = result => ({
  type: SeriesTypes.GET_ON_THE_AIR_SERIES_SUCCESS,
  payload: result
});
export const getOnTheAirSeriesFailure = error => ({
  type: SeriesTypes.GET_ON_AIR_SERIES_FAILURE,
  payload: error
});

// ACTIONS FOR TOP RATED SERIES
export const getTopRatedSeriesStart = (type, page) => ({
  type: SeriesTypes.GET_TOP_RATED_SERIES_START,
  payload: { type, page }
});
export const getTopRatedSeriesSuccess = payload => ({
  type: SeriesTypes.GET_TOP_RATED_SERIES_SUCCESS,
  payload
});
export const getTopRatedSeriesFailure = error => ({
  type: SeriesTypes.GET_TOP_RATED_SERIES_FAILURE,
  payload: error
});

// GET TRENDING SERIES
export const getTrendingSeriesStart = (type, page) => ({
  type: SeriesTypes.GET_TRENDING_SERIES_START,
  payload: { type, page }
});
export const getTrendingSeriesSuccess = result => ({
  type: SeriesTypes.GET_TRENDING_SERIES_SUCCESS,
  payload: result
});
export const getTrendingSeriesFailure = error => ({
  type: SeriesTypes.GET_POPULAR_SERIES_FAILURE,
  payload: error
});

// ACTIONS FOR POPULAR SERIES
export const getPopularSeriesStart = (type, page) => ({
  type: SeriesTypes.GET_POPULAR_SERIES_START,
  payload: { type, page }
});
export const getPopularSeriesSuccess = result => ({
  type: SeriesTypes.GET_POPULAR_SERIES_SUCCESS,
  payload: result
});
export const getPopularSeriesFailure = error => ({
  type: SeriesTypes.GET_POPULAR_SERIES_FAILURE,
  payload: error
});
