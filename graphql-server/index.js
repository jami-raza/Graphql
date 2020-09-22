const { ApolloServer, gql } = require('apollo-server');

let students = [
    {
        "id": 1,
        "name":"Ahmed",
        "email":"ahmed@gmail.com",
        "age": 21
    },
    {
        "id": 2,
        "name":"Hassan",
        "email":"Hassan@gmail.com",
        "age": 23
    },
    {
        "id": 3,
        "name":"Usama",
        "email":"Usama@gmail.com",
        "age": 25
    }
]
const resolvers = {
    Query: {
      Students: () => students,
    },
    Mutation: {
        addstudent:(e, {input}) => {
            console.log(input)
            students.push(
                {
                    name: input.name,
                    age: input.age,
                    email: input.email,
                    id: input.id
                }
            )
            return{
                    name: input.name,
                    age: input.age,
                    email: input.email,
                    id: input.id
            }
        }
    }
  };
  
const typeDefs = gql`

  type Student {
    id: Int  
    name: String
    email: String
    age: Int

  }
  input StdInput {
      id: Int
      name: String
      email: String
      age: Int
  }

  
  type Query {
    Students: [Student]
  }

  type Mutation {
      addstudent(input: StdInput): Student
  }
`;
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});