import { all, takeLatest } from 'redux-saga/effects';

import { Types as AlbumsTypes } from '../ducks/albums';
import { Types as SearchActions } from '../ducks/search';
import { Types as PlayerTypes } from '../ducks/player';

import { getAlbums } from './albums';
import { search } from './search';
import {
  setSound, play, pause, next, previous,
} from './player';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
    takeLatest(SearchActions.REQUEST, search),
    takeLatest(PlayerTypes.SET_SONG_REQUEST, setSound),

    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREVIOUS, previous),
  ]);
}
