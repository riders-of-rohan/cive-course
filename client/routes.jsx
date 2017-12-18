import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Login, Signup, UserHome } from './components'
import { me } from './store'


class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const { isLoggedIn } = this.props

    return (
      <Router history={ history }>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/home" component={ UserHome } />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={ Login } />
          </Switch>
        </Main>
      </Router>
    )
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me())
})

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}


export default connect(mapState, mapDispatch)(Routes)
