import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCampaigns } from '../actions'

class CampaignsIndex extends Component {
  componentDidMount () {
    this.props.fetchCampaigns();
  }

  renderCampaigns () {
    return _.map(this.props.campaigns, campaign => {
      return (
        <li className="list-group-item" key={campaign.id}>
          {campaign.name}
        </li>
      );
    });
  }

  render () {
    console.log(this.props.campaigns)
    return (
      <div>
        <h3>Campaigns</h3>
        <ul className="list-group">
          {this.renderCampaigns()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { campaigns: state.campaigns };
}

export default connect(mapStateToProps, {fetchCampaigns})(CampaignsIndex)