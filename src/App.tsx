import { Provider } from 'react-redux'
import AppRoutes from './routes'
import { store } from './stores'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  )
}

export default App
