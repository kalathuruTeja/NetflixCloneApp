import {Switch, Route} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Account from './components/Account'
import MovieDetails from './components/MovieDetails'
import ProtectedRoute from './components/ProtectedRoute'
import Popular from './components/Popular'
import Search from './components/Search'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LogIn} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/movies/:id" component={MovieDetails} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/search" component={Search} />
    <Route component={NotFound} />
  </Switch>
)

export default App
