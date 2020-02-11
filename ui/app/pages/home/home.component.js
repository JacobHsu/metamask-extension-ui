import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Home extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
  }

  render () {
    const { t } = this.context
    return (
      <div className="main-container">
        <div className="account-and-transaction-details">
          this is Home {t('backupNow')}
        </div>
      </div>
    )
  }
}
