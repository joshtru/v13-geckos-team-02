import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

// IMPORTING MOVIES ACTION TYPES
import SeriesTypes from "./series.types";

// IMPORTING MOVIES ACTIONS
import {
  getOnAirSeriesSuccess,
  getOnAirSeriesFailure,
  getTrendingSeriesSuccess,
  getTrendingSeriesFailure
} from "./series.action";
// Get api key
const API_KEY = process.env.REACT_APP_API_VALUE_KEY;

//  MAKE API CALL TO GET ALL NOW PLAYING MOVIES
export function* getOnAirSeries() {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
    );
    yield put(getOnAirSeriesSuccess(response.data));
  } catch (error) {
    yield put(getOnAirSeriesFailure(error));
  }
}
// TRIGGER FUNCTION WHEN NOT PLAYING START IS TRIGGEREd
export function* onGetOnAirSeries() {
  yield takeLatest(SeriesTypes.GET_ON_AIR_SERIES_START, getOnAirSeries);
}

// MAKING API CALL TO GET TRENDING MOVIES
export function* getTrendingSeries() {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
    );
    if (response.status === 200) {
      yield put(getTrendingSeriesSuccess(response.data));
    }
  } catch (error) {
    yield put(getTrendingSeriesFailure(error));
  }
}
export function* onGetTrendingSeries() {
  yield takeLatest(SeriesTypes.GET_TRENDING_SERIES_START, getTrendingSeries);
}

// COMBINE ALL SAGAS HERE
export function* seriesSaga() {
  yield all([call(onGetOnAirSeries), call(onGetTrendingSeries)]);
}