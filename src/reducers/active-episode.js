import { EPISODE_SELECTED } from '../actions';

const episode = (state = null, action) => {
  switch(action.type) {
    case EPISODE_SELECTED:
      return action.payload
  }

  return state;
}

export default episode;
