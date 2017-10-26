export const EPISODE_SELECTED = 'EPISODE_SELECTED';
export function selectEpisode(episode) {
  return {
    type: EPISODE_SELECTED,
    payload: episode
  };
}
