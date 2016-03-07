import React, { Component } from 'react';
import Card, { Body, Media, Content } from 'components/Card';

export default class Repeat extends Component {
  render () {
    return (
      <Card>
        <Content>
          <Media>
            <p className='subtitle is-5'>Repeat</p>
          </Media>
          <Body>
            <p className='title'>{ this.props.message }</p>
          </Body>
        </Content>
      </Card>
    );
  }
}