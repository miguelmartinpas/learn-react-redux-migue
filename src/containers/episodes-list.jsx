import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

import './episodes-list.less';

class EpisodesList extends Component {
  renderList() {
    return this.props.episodes.map(episode =>
      <ListGroupItem
        key={episode.id}
        className="episodes-list-item"
        onClick={() => this.props.selectEpisode(episode)}
      >
        {episode.name} ( E:{episode.number} / S:{episode.season} )
      </ListGroupItem>
    );
  }

  render() {
    return (
      <div className="episodes-list">
        <ListGroup>
          {this.renderList()}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    episodes: state.episodes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectEpisode: Actions.selectEpisode }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);
