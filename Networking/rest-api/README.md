## API

- Application Programming Interface.
- are the backbone of modern applications, acting as the bridge between client applications and backend servers.
- a set of rules that allows different software applications to communicate with each other.
- An API defines the way that different software components should interact with each other.

## sending or posting data using rest.http

- need to send data as object as json file
- need to specify what type of data are we sending by sending HEADER - `Content-Type: application/json`

## HTTP (HyperText Transfer Protocol)

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol.

- client sends request to the server and waits for the response from it.
  The request contains information about the method used, the URL of the resource, and the version of HTTP being used. The server responds with the status of the request and the requested resource.
- Request Methods : GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD

## What is REST API?

- emerged in the early 2000s
- REST stands for Representational State Transfer.
- It is an architectural style for designing networked applications.
- is not a protocol or standard but rather a set of guiding principles that leverage the existing HTTP protocol to enable communication between clients and servers.
- REST is a lightweight alternative to mechanisms like RPC (Remote Procedure Calls) and Web Services (SOAP, WSDL, etc).

### Architectural Constraints

User ---- UI/Frontend ---- Server

1. 1-tier architecture (Monolithic)

User ----- [UI/Frontend + Server]

2. 2-tier architecture (Client-Server)

User ----- [UI/Frontend] <--- (REST API) ---> [Server/backend]

3. 3-tier architecture

User ----- [UI/Frontend] <--- (REST API) ---> [Server/backend] <--- (REST API) ---> [Database]

### REST API

REST API is not a protocol or standard but rather a set of guiding principles that leverage the existing HTTP protocol to enable communication between clients and servers. One of the rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL.

- A style of building web applications and APIs that focuses on interactivity and simplicity.
- REST APIs are stateless, meaning that calls can be made independently of one another, and each call contains all of the data needed to complete itself successfully.
- REST APIs are designed around resources, which are any kind of object, data, or service that can be accessed by the client.
- REST APIs use a uniform interface, which helps to decouple the client and the server.
- REST APIs are driven by hypermedia links that are contained in the representation. This means that the client interacts with the server by exchanging representations of resources.
- The main constraints for designing RESTful systems
  - Client-Server:
    - The client and the server are separate entities that interact with each other through a well-defined interface. The client is responsible for the user interface and the server is responsible for the data storage and processing.
    - The client handles the UI and user interaction, while the server handles the data storage and processing, business logic. This separation of concerns allows for better scalability and flexibility in the design of the system.
  - Stateless:
    - Each request from the client to the server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client. The server does not store any information about the client between requests. This means that each request is independent of any previous requests, and the server does not need to maintain any state information about the client.
    - Each API request should include authentication tokens if required. The server should not rely on any previous requests to authenticate the client. This makes systems easier to scale and maintain, as the server does not need to keep track of any client state.
  - Cacheable:
    - Responses must define themselves as cacheable or not to prevent clients from reusing stale or inappropriate data in response to further requests. Caching can improve performance by reducing the number of requests that need to be made to the server, and can also reduce the load on the server by allowing clients to reuse previously retrieved data.
    - Caching can be implemented using HTTP headers such as `Cache-Control`, `Expires`, and `ETag`. These headers allow the server to specify how long a response can be cached, and under what conditions it can be reused.
    - Caching leads to faster (performance) response times and reduced server load, as clients can retrieve data from their local cache instead of making a new request to the server.
    - Caching can be implemented at various levels, including the client, server, and intermediary caches (such as proxies and CDNs).
  - Layered System:
    - A client cannot ordinarily tell whether it is connected directly to the end server, or to an intermediary along the way. Intermediary servers may improve system scalability by enabling load-balancing and by providing shared caches. They may also enforce security policies.
    - The layered system constraint allows for the use of intermediaries such as load balancers, proxies, and gateways, which can help to improve scalability, security, and performance of the system.
  - Uniform Interface:
    - The uniform interface constraint is a fundamental principle of REST that defines a standardized way for clients and servers to communicate with each other. It consists of four sub-constraints:
      1. Resource Identification: Resources are identified in requests using URIs (Uniform Resource Identifiers). This allows clients to access and manipulate resources using a consistent and predictable URL structure.
      2. Resource Manipulation through Representations: Clients interact with resources by exchanging representations of those resources. A representation is a specific format (such as JSON or XML) that contains the data and metadata of the resource. This allows clients to manipulate resources by sending representations to the server.
      3. Self-descriptive Messages: Each message (request or response) contains all the information needed to understand and process the message. This means that messages should include appropriate headers, status codes, and body content to convey the necessary information about the request or response.
      4. Hypermedia as the Engine of Application State (HATEOAS): Clients interact with the application entirely through hypermedia provided dynamically by application servers. This means that clients can discover available actions and navigate through the application by following links provided in the responses from the server.
  - Code on Demand (optional)

- At its core, REST is built around resources. Each resource (such as a user, order, or product) is uniquely identified by a URL (Uniform Resource Locator), and clients interact with these resources using a fixed set of HTTP methods.
  - GET → Retrieve a resource (e.g., GET /api/users/123 to fetch user data).
  - POST → Create a new resource (e.g., POST /api/users to add a new user).
  - PUT/PATCH → Update an existing resource (e.g., PUT /api/users/123 to update user details).
  - DELETE → Remove a resource (e.g., DELETE /api/users/123 to delete a user).

#### HTTP (Hypertext Transfer Protocol)

- REST APIs use HTTP methods to perform different operations. The most common operations are GET, POST, PUT, PATCH, and DELETE.

## Why REST API?

- Simplicity and Intuitive Design: The resource-based model aligns well with most business domains, making REST intuitive for developers.
- easy to build and understand.
- REST API is stateless, meaning that calls can be made independently of one another, and each call contains all of the data needed to complete itself successfully.
- flexible: can be used with any programming language.
- Scalability: REST APIs can be easily scaled using load balancers and CDNs.
- Mature Ecosystem: With nearly two decades of widespread use, REST enjoys robust tooling, documentation, and developer familiarity.
- flexibility with data: can be used with any type of data (json, xml, etc).
- Uniform interface: REST APIs use a uniform interface, which helps to decouple the client and the server. This means that clients don't need to know anything about the server, and servers don't need to know anything about the client.
- statelessness: each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.
- caching: responses must define themselves as cacheable or not to prevent clients from reusing stale or inappropriate data in response to further requests.
- separation of concerns: client and server are independent of each other, and can evolve separately without any dependency on each other.
- interoperability (language agnostic):
- security: REST APIs can be secured using HTTPS, which encrypts the data being sent between the client and the server.

## Building blocks of REST API

1. Request

<img src="./assets/request-https.png" alt="Request" />

2. Response

<img src="./assets/response.png" alt="Response" />

### URL (Uniform Resource Locator) parts

`https://www.example.com/forum/questions?tag=networking&order=newest#top`

- `https` - protocol, scheme
- `www.example.com` - domain name, hostname
  - `www` - subdomain
  - `example` - second-level domain
  - `com` - top-level domain (TLD)
- `/forum/questions` - path
  - `/forum` - directory
  - `/questions` - file
- `?tag=networking&order=newest` - query string
  - `tag=networking` - key-value pair (parameter)
  - `order=newest` - key-value pair (parameter)
- `#top` - fragment identifier

### HTTP Methods

### CRUD Operations

| Operation | Description                 | HTTP Method |
| --------- | --------------------------- | ----------- |
| Create    | Create a new resource       | POST        |
| Read      | Read a resource             | GET         |
| Update    | Update an existing resource | PUT/PATCH   |
| Delete    | Delete a resource           | DELETE      |
| HEAD      | Get metadata of a resource  | HEAD        |
| OPTIONS   | Get allowed methods         | OPTIONS     |
| CONNECT   | Connect to a server         | CONNECT     |
| TRACE     | Trace a request             | TRACE       |

**PUT/PATCH** - PUT is used to update the entire resource, while PATCH is used to update part of the resource.

### Headers

- Headers are key-value pairs that provide additional information about the request or response.

1. Request headers

| header            | description                                                                                     | Use Case          | example                                                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Host              | The domain name of the server                                                                   | Origin host       | Host: www.example.com                                                                                                          |
| Origin            | The origin of the request                                                                       | CORS              | Origin: example.com                                                                                                            |
| Referrer          | The URL of the previous web page from which a link to the currently requested page was followed | Security          | Referrer: https://www.example.com/page1                                                                                        |
| User-Agent        | The user agent string of the client (identify the client: User agent string - OS, Browser)      | Browser detection | User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3 |
| Accept            | The media types that the client can understand (Response content type)                          | Content type      | Accept: application/json                                                                                                       |
| Accept-Language   | The language that the client can understand (preferred Response language)                       | Content language  | Accept-Language: en-US                                                                                                         |
| Accept-Encoding   | The encoding that the client can understand (preferred Response encoding)                       | Content encoding  | Accept-Encoding: gzip, deflate                                                                                                 |
| Connection        | The connection type (keep tcp connection alive)                                                 | Connection type   | Connection: keep-alive                                                                                                         |
| Authorization     | The credentials for authenticating the client with the server                                   | Authentication    | Authorization: Basic or Bearer -                                                                                               |
| Cookie            | The cookies that the client has sent to the server (previous server token)                      | Session           | Cookie: name=value; name2=value2                                                                                               |
| If-Modified-Since | The date and time that the client last modified the resource                                    | Caching           | If-Modified-Since: Tue, 15 Nov 1994 12:45:26 GMT                                                                               |
| If-None-Match     | The entity tag of the resource that the client has previously received                          | Caching           | If-None-Match: "etag"                                                                                                          |
| Cache-Control     | The caching directives that the client can understand                                           | Caching           | Cache-Control: no-cache                                                                                                        |

2. Response headers

| header           | description                                           | Use Case         | example                                      |
| ---------------- | ----------------------------------------------------- | ---------------- | -------------------------------------------- |
| Date             | The date and time that the response was sent          | Time             | Date: Tue, 15 Nov 1994 12:45:26 GMT          |
| Server           | The server software that generated the response       | Server           | Server: Apache/2.4.7 (Ubuntu)                |
| Content-Type     | The media type of the response body                   | Content type     | Content-Type: application/json               |
| Content-Length   | The length of the response body                       | Content length   | Content-Length: 348                          |
| Set-Cookie       | The cookies that the server has sent to the client    | Session          | Set-Cookie: name=value; name2=value2         |
| Content-Encoding | The encoding of the response body                     | Content encoding | Content-Encoding: gzip                       |
| Cache-Control    | The caching directives that the client can follow     | Caching          | Cache-Control: no-cache                      |
| Last-Modified    | The date and time that the resource was last modified | Caching          | Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT |
| ETag             | The entity tag of the resource                        | Caching          | ETag: "etag"                                 |
| Expires          | The date and time that the response expires           | Caching          | Expires: Tue, 15 Nov 1994 12:45:26 GMT       |

### Request

### Response

### Status Codes

- Status codes are three-digit numbers that indicate the status of the HTTP response.

- Why Status code is important?
  - Status codes provide information about the status of the request.
  - Status codes help to debug issues with the request.
  - Status codes help to understand the response from the server.
  - Status codes help to handle errors and exceptions.

| Status Range | Use Case      | Status codes | Description                                                  |
| ------------ | ------------- | ------------ | ------------------------------------------------------------ |
| 1xx          | Informational | 100-199      | The request has been received and the process is continuing. |
| 1xx          | Informational | 100          | Continue                                                     |
| 1xx          | Informational | 101          | Switching Protocols                                          |
| 1xx          | Informational | 102          | Processing                                                   |
| 2xx          | Success       | 200-299      | The request was successful.                                  |
| 2xx          | Success       | 200          | OK                                                           |
| 2xx          | Success       | 201          | Created                                                      |
| 2xx          | Success       | 202          | Accepted                                                     |
| 2xx          | Success       | 204          | No Content                                                   |
| 2xx          | Success       | 206          | Partial Content                                              |
| 3xx          | Redirection   | 300-399      | - The request has more than one possible response.           |
| 3xx          | Redirection   | 301          | Moved Permanently                                            |
| 3xx          | Redirection   | 302          | Found                                                        |
| 3xx          | Redirection   | 303          | See Other                                                    |
| 3xx          | Redirection   | 304          | Not Modified                                                 |
| 3xx          | Redirection   | 307          | Temporary Redirect                                           |
| 3xx          | Redirection   | 308          | Permanent Redirect                                           |
| 4xx          | Client Error  | 400-499      | The request contains bad syntax or cannot be fulfilled.      |
| 4xx          | Client Error  | 400          | Bad Request                                                  |
| 4xx          | Client Error  | 401          | Unauthorized                                                 |
| 4xx          | Client Error  | 403          | Forbidden                                                    |
| 4xx          | Client Error  | 404          | Not Found                                                    |
| 4xx          | Client Error  | 405          | Method Not Allowed                                           |
| 4xx          | Client Error  | 408          | Request Timeout                                              |
| 4xx          | Client Error  | 429          | Too Many Requests                                            |
| 5xx          | Server Error  | 500-599      | The server failed to fulfill an apparently valid request.    |
| 5xx          | Server Error  | 500          | Internal Server Error                                        |
| 5xx          | Server Error  | 501          | Not Implemented                                              |
| 5xx          | Server Error  | 502          | Bad Gateway                                                  |
| 5xx          | Server Error  | 503          | Service Unavailable                                          |
| 5xx          | Server Error  | 504          | Gateway Timeout                                              |
| 5xx          | Server Error  | 505          | HTTP Version Not Supported                                   |
| 5xx          | Server Error  | 507          | Insufficient Storage                                         |
| 5xx          | Server Error  | 511          | Network Authentication Required                              |

## Postman

## HTTP 1/2/3

## Best Practices

## Advance Concepts

## Drawbacks of REST API

- Over-fetching: REST endpoints often return more data than needed, leading to inefficient network usage. For example, if a mobile app only needs a user’s name and email, but the API response includes additional fields like address, phone number, and metadata, it results in wasted bandwidth.
- Under-fetching: If an API doesn’t return related data, the client may need to make multiple requests to retrieve all required information. For example, to get user details and their posts, a client might have to make:
  - GET /api/users/123 (fetch user)
  - GET /api/users/123/posts (fetch user’s posts)
- Versioning Issues: As APIs evolve, maintaining backward compatibility can be challenging. Introducing new features or changing existing ones may require versioning the API (e.g., /api/v1/users), which can lead to fragmentation and maintenance overhead.
- Lack of Flexibility: REST APIs have a fixed structure, which can make it difficult to adapt to changing client requirements. For example, if a client needs to fetch data from multiple resources in a single request, REST may require multiple round-trips to the server, leading to increased latency and reduced performance.
- Inefficient for Complex Queries: REST APIs can struggle with complex queries that involve multiple related resources. For example, fetching a user along with their posts and comments may require multiple requests, whereas a more flexible query language like GraphQL can retrieve all related data in a single request.
- Overhead of Multiple Requests: In scenarios where clients need to fetch related data from multiple endpoints, REST can lead to increased latency due to multiple round-trips to the server. This can degrade performance, especially in mobile applications with limited network connectivity.
- Caching Challenges: While REST APIs can leverage HTTP caching mechanisms, it can be difficult to implement effective caching strategies for dynamic or personalized data. For example, caching user-specific data can lead to stale data being served to other users if not handled correctly.
- Rigid Response Structure: The server defines how data is returned, and clients must adapt to it—even if they only need a subset of the data.
- Lack of Real-time Capabilities: REST APIs are not designed for real-time data updates. Clients must poll the server for changes, which can lead to inefficient use of resources and increased latency compared to real-time protocols like WebSockets or GraphQL subscriptions.

## REST API Design Principles

- Use nouns to represent resources (e.g., /users, /orders) and HTTP methods to represent actions (e.g., GET, POST).
- Use plural nouns for resource names (e.g., /users instead of /user).
- Use consistent naming conventions (e.g., camelCase or snake_case) for resource names and query parameters.
- Use HTTP status codes to indicate the status of the response (e.g., 200 OK, 201 Created, 400 Bad Request).
- Use query parameters for filtering, sorting, and pagination (e.g., /users?age=30&sort=name&page=2).
- Use versioning to manage changes to the API (e.g., /api/v1/users).
- Use HATEOAS (Hypermedia as the Engine of Application State) to provide links to related resources in the response (e.g., include links to a user’s posts in the user response).
- Use authentication and authorization mechanisms to secure the API (e.g., OAuth, JWT).
- Use rate limiting to prevent abuse and ensure fair usage of the API.
