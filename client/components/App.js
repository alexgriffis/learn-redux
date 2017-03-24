import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

const mapStateToProps = (state) => ({
  posts: state.posts,
  comments: state.comments
})

const mapDispachToProps = (dispach) => bindActionCreators(actionCreators, dispach)

const App = connect(mapStateToProps, mapDispachToProps)(Main)

export default App
