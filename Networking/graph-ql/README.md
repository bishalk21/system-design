# GraphQL

GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It was developed by Facebook in 2012 and released as an open-source project in 2015. GraphQL provides a more efficient, powerful, and flexible alternative to REST APIs.
Unlike REST, which organizes APIs around fixed endpoints and HTTP methods, GraphQL is a query language that allows clients to request exactly the data they need—nothing more, nothing less. This means that clients can fetch multiple resources in a single request, reducing the number of round-trips to the server and improving performance, especially on mobile devices with limited bandwidth.

- A single GraphQL endpoint (/graphql) replaces multiple REST endpoints, allowing clients to structure their own queries instead of relying on predefined responses.

GraphQL aggregates the data from multiple services and returns precisely the requested data.

It solves the problems of over-fetching (getting unnecessary data) and under-fetching (requiring multiple requests to retrieve related data).

Unlike REST, where API responses are loosely structured and may vary across versions, GraphQL enforces a strict schema that defines the shape of the data. This schema serves as a contract between the client and server, enabling better validation, tooling, and documentation.

```graphql
type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  profile: Profile!
  posts: [Post!]
}

type Profile {
  id: ID!
  url: String!
}

type Post {
  id: ID!
  title: String!
  publishedDate: String!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  posts: [Post!]!
}
```

## Requirements for GraphQL

- A web server to handle incoming GraphQL requests.
- A GraphQL schema that defines the types of data that can be queried and the relationships between them.
- Resolvers that specify how to fetch the data for each field in the schema.
- A GraphQL client to send queries and mutations to the server and handle the responses.

### Benefits of GraphQL

- avoid over-fetching and under-fetching of data: Clients can request exactly what they need, which can reduce bandwidth usage and improve performance.
- better mobile performance: GraphQL allows clients to fetch only the data they need, which can improve performance on mobile devices with limited bandwidth.
- efficiency and precision: GraphQL allows clients to specify exactly what data they need, which can reduce the amount of data transferred over the network and improve performance.
- declarative data fetching: Clients can specify what data they need, and the server will return only that data, eliminating over-fetching and under-fetching of data.
- structural/hierarchical data: GraphQL allows clients to fetch related data in a single request, which can reduce the number of requests needed to fetch complex data structures.
- introspection: GraphQL APIs can be introspected, meaning clients can query the API for information about the schema, types, and available operations, which can improve developer experience and tooling support.
- real-time data with subscriptions: GraphQL supports real-time updates through subscriptions, allowing clients to receive updates when data changes, which can enable more dynamic and responsive applications.
- strongly typed schema: GraphQL uses a schema to define the types of data that can be queried and the relationships between them, which allows for better validation and tooling support, making it easier to develop and maintain APIs.
- API evolution without versioning: GraphQL allows you to add new fields and types to your API without breaking existing clients, which can simplify API maintenance and evolution over time.

## Key Features of GraphQL

1. **Declarative Data Fetching**: Clients can specify exactly what data they need, and the server will return only that data. This eliminates over-fetching and under-fetching of data. In GraphQL, clients ask queries to the server. These queries are declarative in nature.

```graphql
<!-- query -->
{
  book(id: "1") {
    title
    publishYear
  }
}
<!-- response -->
{
  "data": {
    "book": {
      "title": "GraphQL Guide",
      "publishYear": 2020
    }
  }
}
```

2. **Single Endpoint**: GraphQL APIs typically have a single endpoint for all queries and mutations, simplifying the API structure. Related data can be retrieved in one request, solving REST’s n+1 query problem.
3. **Strongly Typed Schema**: GraphQL uses a schema to define the types of data that can be queried and the relationships between them. This allows for better validation and tooling support and helps the server determine whether the client’s query is valid or not. These schemas are strongly typed.

```graphql
type Book {
  title: String!
  publishYear: Int
  price: Float
}
```

4. **Real-time Data with Subscriptions**: GraphQL supports real-time updates through subscriptions, allowing clients to receive updates when data changes.
5. **Introspection**: GraphQL APIs can be introspected, meaning clients can query the API for information about the schema, types, and available operations.
6. **Hierarchical Data**: GraphQL allows clients to fetch related data in a single request, which can reduce the number of requests needed to fetch complex data structures.

```graphql
{
  book(id: "1") {
    title
    publishYear
    authors {
      name
    }
  }
}
```

## Core Functionality of GraphQL

1. **Schema Definition**: The schema defines the types of data that can be queried and the relationships between them. It serves as a contract between the client and server, enabling better validation, tooling, and documentation.

```graphql
type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  profile: Profile!
  posts: [Post!]
}

type Profile {
  id: ID!
  url: String!
}

type Post {
  id: ID!
  title: String!
  publishedDate: String!
  content: String!
}
```

2. **Queries**: Used to read or fetch values. Clients specify the structure of the response, and the server returns exactly what is requested.

```graphql
query {
  user(id: "123") {
    firstName
    lastName
    email
    profile {
      url
    }
    posts {
      title
      publishedDate
    }
  }
}
```

3. **Mutations**: Used to write or modify data. Similar to queries, but they typically involve side effects on the server (e.g., creating, updating, or deleting data).

```graphql
mutation {
  createUser(
    input: { firstName: "John", lastName: "Doe", email: "john.doe@example.com" }
  ) {
    id
    firstName
    lastName
    email
  }
}
```

4. **Subscriptions**: Used to maintain a real-time connection to the server, allowing clients to receive updates when certain events occur (e.g., when a new post is created).

```graphql
subscription {
  postCreated {
    id
    title
    publishedDate
    author {
      firstName
      lastName
    }
  }
}
```

## GraphQL vs REST

Both rely on HTTP requests and responses, but they differ in how they structure and handle data. REST organizes APIs around fixed endpoints and HTTP methods, while GraphQL allows clients to specify exactly what data they need through a single endpoint.

- REST centers around resources, with each resource having its own endpoint (e.g., /users, /posts). Clients interact with these resources using standard HTTP methods (GET, POST, PUT, DELETE).
- GraphQL, on the other hand, uses a single endpoint (e.g., /graphql) for all interactions. Clients send queries that specify the structure of the response they want, and the server returns only the requested data.

| Feature            | GraphQL                                             | REST                                       |
| ------------------ | --------------------------------------------------- | ------------------------------------------ |
| Data Fetching      | Clients specify what data they need                 | Server defines the structure of responses  |
| Endpoints          | Single endpoint                                     | Multiple endpoints for different resources |
| Request Structure  | Flexible query language (query)                     | Fixed HTTP methods and URLs                |
| Response Structure | Customizable based on query                         | Predefined by server                       |
| Schema             | Strongly typed schema                               | No standard schema                         |
| Real-time          | Supported with subscriptions                        | Not natively supported                     |
| Versioning         | No versioning needed (flexible)                     | Versioning often required(explicit)        |
| Tooling            | Rich tooling support due to schema                  | Tooling varies based on implementation     |
| Caching            | More complex due to flexible queries                | Easier with standard HTTP caching          |
| Client Control     | High (clients control data fetching)                | Low (server controls responses)            |
| Adoption           | Growing rapidly, especially in frontend development | Widely adopted and mature ecosystem        |

### Drawbacks of GraphQL

- complex setup & tooling: Unlike REST, which can be used with basic HTTP clients (cURL, browsers), GraphQL requires a GraphQL server, schema, and resolvers.
- caching challenges: REST APIs leverage HTTP caching (e.g., browser caching, CDNs), but GraphQL queries use POST requests, making caching trickier.
- increased server load: Since clients can request arbitrary amounts of data, GraphQL APIs must be carefully optimized to prevent performance issues.
- Security risks: Unoptimized queries (e.g., deeply nested requests) can lead to costly database scans, increasing the risk of denial-of-service (DoS) attacks.

## When to Use GraphQL

- When you need to fetch complex data structures with multiple related entities.
- When you want to reduce the number of requests made to the server.
- When you want to provide a flexible API that can evolve over time without breaking existing clients.
- When you want to enable real-time updates in your application.

## Why GraphQL over REST?

- GraphQL allows clients to request only the data they need, reducing bandwidth usage and improving performance.
- GraphQL's single endpoint simplifies API management and reduces the complexity of handling multiple endpoints in REST.
- GraphQL's strongly typed schema provides better validation and tooling support, making it easier to develop and maintain APIs.
- GraphQL's support for real-time updates through subscriptions allows for more dynamic and responsive applications.

## WHY REST over GraphQL?

- REST is simpler to implement and understand for developers who are familiar with traditional API design.
- REST can be more efficient for simple use cases where clients only need to fetch a small amount of data.
- REST has better caching support, as it relies on standard HTTP methods and status codes.
- REST is widely adopted and has a large ecosystem of tools and libraries available.
