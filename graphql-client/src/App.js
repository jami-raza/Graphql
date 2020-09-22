import React from 'react';
import client from './Config/gql_config';
import { ApolloProvider } from '@apollo/client';
import Students from './Components/Students'
function App() {
  return (
    <ApolloProvider client={client}>
      <Students/>
    </ApolloProvider>
  );
}

export default App;
