import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import './App.css';
import DateTimer from '../src/components/Timer';
import Header from '../src/components/Header';
import WeatherAPI from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Header />
      <DateTimer />
      <WeatherAPI />
    </div >
  );
}

export default App;
