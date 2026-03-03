**HTTP (Hypertext Transfer Protocol)**

- foundation of data communication on the World Wide Web.
- text-based protocol that allows clients (browsers) to request resources from servers and receive responses.
- operates on a request-response model and is stateless, meaning each request is independent of previous ones.
- supports methods like GET, POST, PUT, DELETE, etc., for different types of operations on resources.

- How HTTP works:
  - client device establishes a connection to the server using TCP.
  - client send an HTTP request to the server, specifying the desired resource and method.
  - server processes the request and sends back an HTTP response, which includes a status code and the requested data (if applicable).
  - client receives the response and can render the content or take appropriate action based on the status code.
  - client and server can close the connection or keep it alive for further requests.

- HTTP Messages:
  - are composed of information in ASCII format and include several lines, each separated by a carriage return and line feed (CRLF). so these are human-readable and can be easily debugged.
  - HTTP messages consist of a start line, headers, and, empty line, an optional body.
  - The start line includes the method (for requests) or status code (for responses).
  - Headers provide additional information about the request or response, such as content type, content length, and caching directives.
  - The empty line indicates the end of the headers and the beginning of the body (end of meta information).
  - The body contains the actual data being transmitted, such as HTML content, JSON data, or file uploads.

  - HTTP Request Message:
    - messages sent from the client to the server to request a resource or perform an action.
    - Start Line: contains the HTTP method, the requested resource path, and the HTTP version. For example:
      `GET /index.html HTTP/1.1`
    - Headers: provide additional information about the request, such as the host, user agent, and accepted content types. For example:
      - `Host: www.example.com`
      - `User-Agent: Mozilla/5.0`
      - `Accept: text/html`
    - Empty Line
    - Body: (optional, used for POST requests)

    - HTTP Methods:
      - HTTP Verbs define the action to be performed on the resource specified in the request. Common HTTP methods include:
      - GET: retrieves a resource from the server.
      - POST: submits data to the server, often used for form submissions or creating new resources.
      - PUT: updates an existing resource on the server.
      - DELETE: removes a resource from the server.
      - HEAD: retrieves only the headers of a resource, without the body.

  - HTTP Response Message:
    - messages sent from the server to the client in response to an HTTP request.
    - Start Line: contains the HTTP version, a status code, and a reason phrase. For example:
      `HTTP/1.1 200 OK`
    - Headers: provide additional information about the response, such as content type, content length, and caching directives. For example:
      - `Content-Type: text/html`
      - `Content-Length: 1024`
      - `Cache-Control: no-cache`
    - Empty Line
    - Body: contains the actual data being transmitted, such as HTML content, JSON data, or file uploads.

  - HTTP Status Codes:
    - are three-digit numbers that indicate the result of the HTTP request. They are categorized into five classes:
      - 1xx (Informational): indicates that the request has been received and is being processed.
      - 2xx (Successful): indicates that the request was successful. For example, 200 OK means the request was successful and the server is returning the requested data.
      - 3xx (Redirection): indicates that further action is needed to complete the request, such as following a redirect.
      - 4xx (Client Error): indicates that there was an error with the client's request, such as 404 Not Found or 400 Bad Request.
      - 5xx (Server Error): indicates that there was an error on the server while processing the request, such as 500 Internal Server Error.
    - Use cases: Web browsing, RESTful APIs, microservices communication, and any client-server communication over the web.

- Limitations of HTTP:
  - stateless nature can lead to inefficiencies, as each request requires a new connection and does not retain any information about previous interactions.
  - can be slow for certain types of applications, such as real-time communication or streaming media, due to the overhead of establishing connections and transmitting data in a text-based format.
  - lacks built-in support for features like encryption, authentication, and session management, which can lead to security vulnerabilities if not implemented properly.
    - HTTP/1.1, the most widely used version of HTTP, has limitations in terms of performance and scalability, such as head-of-line blocking and inefficient use of network resources. This has led to the development of newer versions like HTTP/2 and HTTP/3, which address some of these issues and provide improved performance and security features.

### Head-of-Line Blocking in HTTP/1.1

- occurs when a single request at the front of the queue blocks all subsequent requests from being processed until it is completed. This can lead to significant delays and reduced performance, especially in scenarios where multiple requests are made simultaneously or when a request takes a long time to process.
- For example, if a client sends multiple requests to a server, and the first request takes a long time to process, all subsequent requests will be blocked until the first request is completed. This can lead to increased latency and reduced throughput, as the server is unable to efficiently handle multiple requests in parallel.
- HTTP/2 and HTTP/3 address head-of-line blocking by introducing multiplexing, which allows multiple requests and responses to be sent simultaneously over a single connection without blocking each other. This improves performance and reduces latency, especially in scenarios with high concurrency or long-running requests.

# HTTP/2

- major revision of the HTTP protocol that was developed to address some of the limitations of HTTP/1.1 and improve performance and security.
- introduces several new features, such as multiplexing, header compression, and server push, which allow for more efficient use of network resources and improved performance.
- HTTP/2 is designed to be backward-compatible with HTTP/1.1, meaning that clients and servers can communicate using either version of the protocol without requiring changes to the underlying application logic. This allows for a smooth transition from HTTP/1.1 to HTTP/2 and ensures that existing applications can continue to function without modification while taking advantage of the new features and improvements offered by HTTP/2.
- HTTP/2 uses a binary framing layer, which allows for more efficient parsing and processing of messages compared to the text-based format of HTTP/1.1. This can lead to improved performance and reduced latency, especially in scenarios with high concurrency or long-running requests.
- HTTP/2 also introduces the concept of streams, which are independent, bidirectional channels that can be used to send multiple requests and responses simultaneously over a single connection. This allows for more efficient use of network resources and improved performance, as multiple requests can be processed in parallel without blocking each other.
- HTTP/2 also includes support for server push, which allows servers to proactively send resources to clients without waiting for explicit requests. This can improve performance by reducing the number of round trips required to fetch resources and allowing clients to receive resources before they are requested.
- HTTP/2 also includes support for header compression, which reduces the size of HTTP headers and improves performance by reducing the amount of data that needs to be transmitted over the network. This can lead to faster response times and reduced latency, especially in scenarios with large headers or high concurrency.
- HTTP/2 also includes support for encryption using TLS (Transport Layer Security), which provides improved security and privacy for HTTP communications. This can help protect against eavesdropping, tampering, and other security threats, and is especially important for sensitive applications such as online banking, e-commerce, and healthcare.
- Overall, HTTP/2 offers significant improvements in performance, security, and efficiency compared to HTTP/1.1, and is widely supported by modern browsers and web servers. However, it is important to note that HTTP/2 is not a replacement for HTTP/1.1, but rather an evolution of the protocol that builds upon its foundation while addressing some of its limitations. As such, both versions of the protocol will continue to coexist and be used in different scenarios based on the specific needs and requirements of applications and services.
- Use cases: Web browsing, RESTful APIs, microservices communication, and any client-server communication over the web that requires improved performance and efficiency compared to HTTP/1.1.

## Limitations of HTTP/2

- While HTTP/2 offers significant improvements in performance, security, and efficiency compared to HTTP/1.1, it is still a relatively new protocol and may not be supported by all browsers and web servers yet. This can lead to compatibility issues and may require additional configuration or updates to existing applications and services to take advantage of the benefits offered by HTTP/2.
- Additionally, HTTP/2's reliance on the TCP transport protocol can lead to issues with head-of-line blocking, where a single request can block all subsequent requests from being processed until it is completed. This can lead to increased latency and reduced performance, especially in scenarios with high concurrency or long-running requests. As such, it is important to carefully evaluate the specific needs and requirements of applications and services before deciding to adopt HTTP/2, and to consider factors such as performance, security, compatibility, and reliability when making this decision.

## Problems with HTTP/1 and HTTP/2

- No Multiplexing: HTTP/1.1 does not support multiplexing, which means that each request and response must be processed sequentially. This can lead to performance issues, especially in scenarios with high concurrency or long-running requests.
- connection overhead: HTTP/1.1 requires a new connection for each request, which can lead to increased latency and reduced performance, especially in scenarios with multiple requests or long-running connections.
- Head-of-Line Blocking: HTTP/1.1 can suffer from head-of-line blocking, where a single request can block all subsequent requests from being processed until it is completed. This can lead to increased latency and reduced performance, especially in scenarios with high concurrency or long-running requests.
- Inefficient Use of Network Resources: HTTP/1.1 can be inefficient in terms of network resource usage, as it does not support features like header compression or server push, which can lead to increased latency and reduced performance, especially in scenarios with large headers or high concurrency.
- Complexity of Implementation: HTTP/1.1 can be complex to implement and optimize, especially for applications that require high performance or scalability. This can lead to increased development time and costs, as well as potential issues with compatibility and reliability.

## HTTP/2 Good Things

- Multiplexing: HTTP/2 supports multiplexing, which allows multiple requests and responses to be sent simultaneously over a single connection without blocking each other. This improves performance and reduces latency, especially in scenarios with high concurrency or long-running requests.
- Prioritization: HTTP/2 allows clients to prioritize requests, which can help improve performance by allowing important requests to be processed first. This can be especially beneficial in scenarios with high concurrency or long-running requests, as it allows critical resources to be delivered more quickly.
- Server Push: HTTP/2 supports server push, which allows servers to proactively send resources to clients without waiting for explicit requests. This can improve performance by reducing the number of round trips required to fetch resources and allowing clients to receive resources before they are requested.
- Header Compression: HTTP/2 includes support for header compression, which reduces the size of HTTP headers and improves performance by reducing the amount of data that needs to be transmitted over the network. This can lead to faster response times and reduced latency, especially in scenarios with large headers or high concurrency.

# HTTP/3

- latest version of the HTTP protocol that builds upon the improvements introduced in HTTP/2 and further enhances performance, security, and reliability.
- HTTP/3 is based on the QUIC (Quick UDP Internet Connections) transport protocol,
  which is designed to provide improved performance and security compared to traditional TCP-based transport protocols used in previous versions of HTTP.
- QUIC uses UDP (User Datagram Protocol) instead of TCP, which allows for faster connection establishment and improved performance, especially in scenarios with high latency or packet loss. This can lead to reduced latency and improved user experience, particularly for applications that require real-time communication or streaming media.
- HTTP/3 also includes support for multiplexing, header compression, and server push, similar to HTTP/2, but with further optimizations and improvements to enhance performance and efficiency.
- HTTP/3 also includes support for encryption using TLS 1.3, which provides improved security and privacy for HTTP communications. This can help protect against eavesdropping, tampering, and other security threats, and is especially important for sensitive applications such as online banking, e-commerce, and healthcare.
- HTTP/3 also includes support for connection migration, which allows clients to seamlessly switch between different
  network connections (e.g., from Wi-Fi to cellular) without interrupting ongoing HTTP sessions. This can improve reliability and user experience, especially in scenarios where network conditions may change frequently.
- Overall, HTTP/3 represents a significant advancement in the evolution of the HTTP protocol, offering improved performance, security, and reliability compared to previous versions. However, it is important to note that HTTP/3 is still relatively new and may not be supported by all browsers and web servers yet. As such, it may take some time for widespread adoption of HTTP/3 to occur, and both HTTP/2 and HTTP/3 will likely coexist for the foreseeable future based on the specific needs and requirements of applications and services.
- Use cases: Web browsing, RESTful APIs, microservices communication, and any client-server communication over the web that requires improved performance, security, and reliability compared to HTTP/2, especially in scenarios with high latency or packet loss.
- IoT, Virtual Reality (VR), Augmented Reality (AR), and any applications that require low latency and high performance in real-time communication or streaming media scenarios.

- How http/3 works:
  - HTTP/3 uses the QUIC transport protocol, which is based on UDP, to establish connections and transmit data between clients and servers.
  - When a client initiates a connection to a server using HTTP/3, it sends a QUIC handshake message to establish the connection. This handshake includes information about the client's capabilities and preferences, such as supported encryption algorithms and maximum packet size.
  - Once the connection is established, the client can send HTTP requests to the server using the QUIC transport protocol. These requests are multiplexed over the same connection, allowing for efficient use of network resources and improved performance.
  - The server processes the requests and sends back HTTP responses using the same QUIC connection. The responses can also be multiplexed, allowing for efficient delivery of multiple responses without blocking each other.
  - HTTP/3 also includes support for features like header compression and server push, which can further improve performance and efficiency in delivering resources to clients.

  - Multiplexing: HTTP/3 supports multiplexing, which allows multiple requests and responses to be sent simultaneously over a single connection without blocking each other. This improves performance and reduces latency, especially in scenarios with high concurrency or long-running requests.
  - Header Compression: HTTP/3 includes support for header compression, which reduces the size of HTTP headers and improves performance by reducing the amount of data that needs to be transmitted over the network. This can lead to faster response times and reduced latency, especially in scenarios with large headers or high concurrency.
  - Server Push: HTTP/3 supports server push, which allows servers to proactively send resources to clients without waiting for explicit requests. This can improve performance by reducing the number of round trips required to fetch resources and allowing clients to receive resources before they are requested.
  - Connection Migration: HTTP/3 includes support for connection migration, which allows clients to seamlessly switch between different network connections (e.g., from Wi-Fi to cellular) without interrupting ongoing HTTP sessions. This can improve reliability and user experience, especially in scenarios where network conditions may change frequently.
    - Encryption: HTTP/3 includes support for encryption using TLS 1.3, which provides improved security and privacy for HTTP communications. This can help protect against eavesdropping, tampering, and other security threats, and is especially important for sensitive applications such as online banking, e-commerce, and healthcare.

# Limitations of HTTP/3

- While HTTP/3 offers significant improvements in performance, security, and reliability compared to previous versions of HTTP, it is still a relatively new protocol and may not be supported by all browsers and web servers yet. This can lead to compatibility issues and may require additional configuration or updates to existing applications and services to take advantage of the benefits offered by HTTP/3.
- Additionally, HTTP/3's reliance on the QUIC transport protocol, which uses UDP, may introduce new challenges and considerations for network administrators and developers, such as firewall configurations and potential issues with packet loss or congestion control. As such, it is important to carefully evaluate the specific needs and requirements of applications and services before adopting HTTP/3, and to ensure that proper testing and validation is conducted to ensure compatibility and performance.
- Furthermore, while HTTP/3 offers improved performance and security, it may not be suitable for all types of applications or use cases. For example, applications that require strict ordering of requests and responses may not benefit from the multiplexing capabilities of HTTP/3, and may instead require a more traditional TCP-based transport protocol. As such, it is important to carefully evaluate the specific requirements and constraints of applications and services before deciding to adopt HTTP/3, and to consider factors such as performance, security, compatibility, and reliability when making this decision.
