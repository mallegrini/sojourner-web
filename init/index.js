import initServiceWorker from './initServiceWorker'
import initSentry from './initSentry'
import initFixes from './initFixes'
import initFirebase from './initFirebase'
import initStyle from './initStyle'
import initDirectives from './initDirectives'

export default function () {
  // asynchronous init, not waiting for operations, no order
  initServiceWorker()
  initSentry()
  initFixes()
  initFirebase()
  initStyle()
  initDirectives()
}
