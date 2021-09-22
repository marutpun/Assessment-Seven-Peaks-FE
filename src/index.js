import React from 'react';
import { render } from 'react-dom';
import App from './app';

/**
 * Parcel, how to fix the `regeneratorRuntime is not defined` error
 * https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
 */
import 'regenerator-runtime/runtime';

const rootElement = document.getElementById('root');

render(<App />, rootElement);
