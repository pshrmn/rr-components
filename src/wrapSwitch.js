import React from 'react'
import PropTypes from 'prop-types';
import Route from 'react-router/Route'
import matchPath from 'react-router/matchPath'
import matchRoutes from './helpers/matchRoutes'
import getDisplayName from './helpers/getDisplayName'
import makeInjectable from './helpers/makeInjectable'

const wrapSwitch = (Wrapper) => {
  const WrappedSwitch = ({ routes, location, getKey, ...wrapperProps }, { router }) => {
    const { route:parent } = router
    const loc = location || parent.location
    const { match, route } = matchRoutes(routes, loc.pathname, parent)
    const routeProps = match ? makeInjectable(route) : route
    return (
      <Wrapper {...wrapperProps}>
        {
          match
            ? <Route
                key={getKey(match, route, loc)}
                {...routeProps}
                location={loc}
                computedMatch={match}
              />
            : null
        }
      </Wrapper>
    )
  }

  WrappedSwitch.propTypes = {
    routes: PropTypes.array.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }),
    getKey: PropTypes.func
  }

  WrappedSwitch.defaultProps = {
    getKey: (match) => {
      return match && match.url
    }
  }

  WrappedSwitch.contextTypes = {
    router: PropTypes.shape({
      route: PropTypes.shape({
        location: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  }

  WrappedSwitch.displayName = `wrapSwitch(${getDisplayName(Wrapper)})`

  return WrappedSwitch
}

export default wrapSwitch
