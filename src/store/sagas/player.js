import { call, put, select } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Creators as PLayerActions } from '../ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* setSound(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.payload.song.file);
    yield call(play);

    yield put(PLayerActions.setSongSuccess(action.payload.song, action.payload.list));
  } catch (err) {
    yield put(PLayerActions.setSongFailure('Erro ao tentar reproduzir'));
  }
}

export function* next() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const nextSong = player.list[currentIndex + 1];

    if (nextSong) {
      yield put(PLayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {
    console.tron.log(err);
  }
}

export function* previous() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const nextSong = player.list[currentIndex - 1];

    if (nextSong) {
      yield put(PLayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {
    console.tron.log(err);
  }
}
