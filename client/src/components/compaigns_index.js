import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompaigns } from '../actions'

class CompaignsIndex extends Component {
  componentDidMount () {
    this.props.fetchCompaigns();
  }

  renderCompaigns () {
    return _.map(this.props.compaigns, compaign => {
      return (
        <li className="list-group-item" key={compaign.id}>
          {compaign.name}
        </li>
      );
    });
  }

  render () {
    console.log(this.props.compaigns)
    return (
      <div>
        <h3>Compaigns</h3>
        <ul className="list-group">
          {this.renderCompaigns()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { compaigns: state.compaigns };
}

export default connect(mapStateToProps, {fetchCompaigns})(CompaignsIndex)