import React from 'react';
import { Todo, fetchTodos } from '../actions';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';


interface AppProps {
  todos: Todo[];
  fetchTodos(): any;

}

export class _App extends React.Component<AppProps> {
  render () {
    return <div>Hi there!</div>
  }
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
  return {todos}
};

export const App = connect (
  mapStateToProps,
  {fetchTodos}
)(_App)