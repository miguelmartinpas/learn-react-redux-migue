import { combineReducers } from 'redux';

import EpisodesReducer from './episodes';
import ActiveEpisode from './active-episode';

const rootReducer = combineReducers({
  episodes: EpisodesReducer,
  activeEpisode: ActiveEpisode
});

export default rootReducer;
