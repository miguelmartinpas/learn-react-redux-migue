import React, { Component } from 'react';
import { PanelGroup, Panel, Row, Col, Image } from 'react-bootstrap';

import EpisodesList from '../containers/episodes-list.jsx'
import EpisodeDetails from '../containers/episode-details.jsx'
EpisodeDetails

import './app.less';

export default class App extends Component {
  render() {
    return (
      <div className="episodes-app">
        <PanelGroup>
          <Panel>
            <Row>
              <Col xs={1}>
                <Image src="./assets/logo.png" className="logo" responsive />
              </Col>
              <Col xs={9}>
                <h2>List of episodes</h2>
              </Col>
              <Col xs={2}>
                <Image src="./assets/logo.jpg" className="sub-logo" responsive />
              </Col>
            </Row>
          </Panel>
          <Panel>
            <Row>
              <Col xs={4}>
                <EpisodesList />
              </Col>
              <Col xs={8}>
                <EpisodeDetails />
              </Col>
            </Row>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}
