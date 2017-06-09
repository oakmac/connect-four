import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

const emptyBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

const initialState = {
  board: emptyBoard
}

function StateExplorer (state) {
  const stateJSON = JSON.stringify(state, null, 2)

  return (
    <section id='explorerContainer'>
      <h1>State Explorer</h1>
      <textarea value={stateJSON}></textarea>
    </section>
  )
}

function ConnectFour (state) {
  return (
    <section id='gameContainer'>
      <h1>TODO: the game goes here</h1>
    </section>
  )
}

window.appState = initialState

function App (state) {
  let stateExplorerComponent = null
  if (showStateExplorer) stateExplorerComponent = StateExplorer(state)

  return (
    <div id='appContainer'>
      {ConnectFour(state)}
      {stateExplorerComponent}
    </div>
  )
}

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
