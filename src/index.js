import Raven from 'raven-js'
import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import Root from './Root'

// If we're in prod, boot up sentry
const {NODE_ENV, REACT_APP_RAVEN_DSN} = process.env
if (NODE_ENV === 'production' && REACT_APP_RAVEN_DSN) {
	Raven.config(REACT_APP_RAVEN_DSN).install()
}

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
