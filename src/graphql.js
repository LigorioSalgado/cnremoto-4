import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const HTTP_HOST = 'https://cintanegra4.herokuapp.com/';
const httpLink = new createUploadLink({
  uri: HTTP_HOST,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([
    httpLink,
  ]),
  cache,
});

export default client;