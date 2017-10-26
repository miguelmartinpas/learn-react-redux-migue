import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import parser from 'html-react-parser';

class EpisodeDetails extends Component {
  getDetail() {
    const episode = this.props.activeEpisode || null;
    if (episode) {
      return (
        <Row>
          <Col xs={12}>
            <h2>{episode.name}</h2>
          </Col>
          <Col xs={2}>
            <Image src={episode.image.medium  } responsive />
          </Col>
          <Col xs={10}>
            {parser(episode.summary)}
          </Col>
          <Col xs={12}>
            <h4>More Info</h4>
            <div>Show: Game of Thrones</div>
            <div>Number: Season {episode.season}, Episode {episode.number} </div>
          </Col>
        </Row>
      );
    }
    return <div></div>;
  }

  render() {
    return this.getDetail();
  }
}

function mapStateToProps(state) {
  return {
    activeEpisode: state.activeEpisode
  }
}

export default connect(mapStateToProps)(EpisodeDetails);
