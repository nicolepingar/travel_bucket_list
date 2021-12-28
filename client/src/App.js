import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import './App.css';
import DateTimer from '../src/components/Timer'

function App() {
  return (
    <div className="App">
      <DateTimer />
    </div >
  );
}

export default App;
