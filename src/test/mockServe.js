import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
//import { MockLink } from 'apollo-link-mock';

import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema  } from 'graphql-tools';

const typeDefs = `

    type Query { 
        getAllZones: [Zone]!
    }

    type Zone {
        _id: ID!
        zone: String!
        location: Location
        price: Float!
        is_active: Boolean
      }

      type Location {
        type: String!
        coordinates: [[[Float!]]]!
      }
      
`

const mocks = {
    Query:() => ({
        getAllZones:() => [
            {
              zone: "Zone 1",
              location: {
                type: "Polygon",
                coordinates: [
                  [
                    [-99.16285514831543, 19.41743341323147],
                    [-99.15791988372803, 19.41743341323147],
                    [-99.15791988372803, 19.422158729089336],
                    [-99.16285514831543, 19.422158729089336],
                    [-99.16285514831543, 19.41743341323147]
                  ]
                ]
              }
            },
            {
              zone: "Zone 2",
              location: {
                type: "Polygon",
                coordinates: [
                  [
                    [-99.1446590423584, 19.42053979266161],
                    [-99.13813591003418, 19.40742581330915],
                    [-99.1347885131836, 19.41592573536579],
                    [-99.1446590423584, 19.42053979266161]
                  ]
                ]
              }
            }
          ]
    })
}

const schema = makeExecutableSchema({typeDefs})
addMockFunctionsToSchema({
    schema,
    mocks
})

function createClient(){

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new SchemaLink({ schema })

    })
}


export default createClient;