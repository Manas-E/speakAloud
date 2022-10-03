import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@aws-amplify/ui-react/styles.css"
import config from "./aws-exports.cjs"
import  { AmplifyProvider } from "@aws-amplify/ui-react"
import Predictions from '@aws-amplify/predictions';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

import { Amplify, API, graphqlOperation } from 'aws-amplify';

console.log( import.meta.env.AWSCONFIG)

Amplify.configure(config)
Amplify.register(Predictions);
Predictions.addPluggable(new AmazonAIPredictionsProvider());

ReactDOM.createRoot(document.getElementById('root')).render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
)
