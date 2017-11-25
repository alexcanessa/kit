import React from 'react'
import connect from 'refunk'

import {
  Route
} from 'react-router-dom'

import {
  Div
} from '@compositor/mono'

import Router from '@compositor/x0/lib/Router'

import ComponentEditor from './ComponentEditor'

const Styleguide = props =>
  <Div>
    <Router>
      <Route
        exact
        path='/'
        render={() => <Div>hi</Div>}
      />

      <Route
        path='/components'
        render={() =>
          <Div
            children={props.components.slice(0, 1).map(c =>
              <ComponentEditor
                key={c.name}
                theme={props.theme}
                component={c}
                library={props.library}
                editor={props.editors[c.name]}
              />
            )}
          />
        }
      />
    </Router>
  </Div>

export default connect(Styleguide)