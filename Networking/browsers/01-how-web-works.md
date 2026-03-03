# How Web Works

## What Happens When You Type a URL Into Your Browser?

At high level,

- when we type a URL `google.com` into our web browser,
  the browser sends a request to the server, and the server responds with the requested web page.

In developer browser tools, in the network tab, we can see the request and response details. We can see the first request being made to `google.com` and the response that we get from the server.

Lets see what we get in response:

- The server responds with the requested web page content, which is typically in HTML format. The response may also include other resources such as CSS files, JavaScript files, images, etc. that are needed to render the web page properly.
  All these resources are coming from the server in response to the initial request. The browser then processes the HTML content and makes additional requests for the linked resources (CSS, JavaScript, images) to render the complete web page.

  Advantages of having high end servers:

- High performance: High end servers are equipped with powerful hardware components such as fast processors, ample RAM, and high-speed storage. This allows them to handle a large number of requests simultaneously and deliver content quickly to users.
- Scalability: High end servers can easily scale up or down based on the traffic demands. They can handle sudden spikes in traffic without crashing or slowing down, ensuring a smooth user experience.
- Reliability: High end servers are designed to be highly reliable and have features such as redundant power supplies, RAID storage configurations, and backup systems. This helps to minimize downtime and ensure that the website remains accessible to users at all times.
- Security: High end servers often come with advanced security features such as firewalls, intrusion detection systems, and regular security updates. This helps to protect the website and its data from potential threats and attacks.
- Support: High end servers typically come with dedicated support from the hosting provider. This means that if any issues arise, you can quickly get assistance and resolve them, minimizing any potential downtime or disruptions to your website.

Example: If you have a high traffic website, such as an e-commerce platform or a popular blog, using a high end server can ensure that your website can handle the increased traffic without crashing or slowing down. This can lead to a better user experience and potentially higher conversion rates for your business. On the other hand, if you have a small personal blog with low traffic, a high end server may not be necessary and could be an unnecessary expense. In this case, a shared hosting plan or a lower-tier VPS might be sufficient to meet your needs while keeping costs down. It's important to evaluate your specific requirements and budget before choosing a server to ensure that you get the best value for your money.

At Low Level,
The moment you hit enter after typing the URL, the browser initiates a series of actions to retrieve and display the web page.

Machines does not understand human readable domain names like `google.com`, they understand IP addresses. So, the browser needs to translate the domain name into an IP address to communicate with the server. This is done through a process called DNS (Domain Name System) lookup.
So browser first performs a DNS lookup to find the IP address associated with the domain name. Once it has the IP address, it can send a request to the server hosting the website.

### IP Address

An IP address is a unique identifier assigned to each device connected to a network. It allows devices to communicate with each other over the internet. When you type a URL into your browser, the client (your browser) sends a request to the server using the IP address associated with the domain name. The server then processes the request and sends back the appropriate response based on the IP address it receives. This communication between the client and server is essential for accessing websites and online services.

- first the client needs to be connected to the internet, which is typically done through an Internet Service Provider (ISP). The ISP provides the necessary infrastructure and connectivity for the client to access the web.

- browser of mobile or desktop device or client is getting internet connection through ISP OR Cell tower which is provided by the mobile network operator or phone company. The client is connected to the internet through a network connection, which can be wired (e.g., Ethernet) or wireless (e.g., Wi-Fi, cellular data). the company that provides the internet connection is called an Internet Service Provider (ISP). The ISP is responsible for routing the client's requests to the appropriate servers and delivering the responses back to the client.

- ISP receives the request from the client and forwards it to the appropriate server based on the IP address obtained from the DNS lookup. The ISP acts as an intermediary between the client and the server, facilitating the communication between them.

1. The browser first checks its cache to see if it has a recent copy of the requested web page. If it does, it can display the cached version without making a new request to the server. However, if the cache is outdated or doesn't contain the requested page, the browser proceeds to make a new request to the server.

1. DNS Lookup: The browser first performs a DNS (Domain Name System) lookup to translate the human-readable domain name (e.g., google.com) into an IP address that the server can understand. This is done by querying a DNS server, which returns the corresponding IP address for the requested domain.

## Server

- device or computer that hosts websites and serves content to users over the internet.
- need to be quite powerful or high end to:
  - handle multiple requests simultaneously
  - serve content to millions of users around the world
  - need to be available 24/7 to ensure that users can access the website at any time
  - typically located in data centers and maintained by hosting providers or organizations that own the websites

The server is a powerful computer that hosts websites and serves content to users over the internet. When you type a URL into your browser, it sends a request to the server where the website is hosted. The server processes this request and sends back the appropriate response, which could be an HTML page, an image, or any other type of content. Servers are designed to handle multiple requests simultaneously and can serve content to millions of users around the world. They are typically located in data centers and are maintained by hosting providers or organizations that own the websites. Servers play a crucial role in the functioning of the web, as they enable users to access and interact with websites and online services.

Choosing a server for hosting a website depends on various factors such as the expected traffic, the type of content being served, and the budget. Some popular server options include shared hosting, virtual private servers (VPS), dedicated servers, and cloud hosting. Each option has its own advantages and disadvantages, so it's important to evaluate your specific needs before making a decision. Additionally, factors like server location, uptime guarantees, and customer support should also be considered when choosing a server for hosting your website.

High end servers can be quite expensive, especially if you require a dedicated server or a high-performance VPS. The cost can vary based on factors such as the amount of resources (CPU, RAM, storage) you need, the level of support provided, and the hosting provider you choose. It's important to carefully evaluate your requirements and budget before selecting a server to ensure that you get the best value for your money. Additionally, some hosting providers offer scalable options that allow you to upgrade or downgrade your server resources as needed, which can help manage costs effectively.

# Client server communication

When you type a URL into your browser, the client (your browser) sends a request to the server where the website is hosted. This communication between the client and server is typically done using the Hypertext Transfer Protocol (HTTP). The client sends an HTTP request to the server, which includes information such as the URL being requested, any form data, and headers that provide additional context about the request. The server processes this request and sends back an HTTP response, which contains the requested content (such as an HTML page) along with status codes and headers that provide information about the response. This client-server communication allows users to access and interact with websites and online services over the internet.

IP address is a unique identifier assigned to each device connected to a network. It allows devices to communicate with each other over the internet. When you type a URL into your browser, the client (your browser) sends a request to the server using the IP address associated with the domain name. The server then processes the request and sends back the appropriate response based on the IP address it receives. This communication between the client and server is essential for accessing websites and online services.

### Wired Network

In a wired network, devices are connected to the internet using physical cables, such as Ethernet cables. This type of connection provides a stable and reliable internet connection with high speeds. Wired networks are commonly used in homes, offices, and data centers where a consistent and fast internet connection is required. The client (your browser) sends requests to the server through the wired network, allowing you to access websites and online services efficiently.

1. User types a URL into the browser and hits enter.
2. Before DNS lookup (DNS lookup can be slow), system is designed with multiple layers of caching to speed up the process. The browser first checks its cache to see if it has a recent copy of the requested web page. If it does, it can display the cached version without making a new request to the server. However, if the cache is outdated or doesn't contain the requested page, the browser proceeds to make a new request to router, which is the next layer of caching. The router may have a cached version of the requested page, and if it does, it can serve that to the browser without needing to perform a DNS lookup or contact the server. If the router doesn't have a cached version, it will forward the request to the ISP's DNS server for resolution. The ISP's DNS server may also have a cached version of the requested page, and if it does, it can serve that to the router without needing to contact the authoritative DNS server. If the ISP's DNS server doesn't have a cached version, it will perform a DNS lookup by sending request to the DNS hierarchy, starting with the root DNS servers, then the TLD (Top-Level Domain) DNS servers, and finally the authoritative DNS server for the domain. Once the IP address is obtained from the DNS lookup, the browser can send a request to the server hosting the website.
3. Once target Servers ip address is known, the request is segmented into smaller packets and sent over the internet to the server's IP address. The packets may take different routes to reach the server, but they will eventually arrive at the destination.
4. Before sending the packets to the server, the client's network interface card (NIC) encapsulates the packets with the appropriate headers, including the source and destination IP addresses. The packets are then transmitted over the wired network to the server.
5. The TCP/IP protocol is used to ensure reliable communication between the client and server. The client establishes a connection with the server using the TCP protocol, which guarantees that the packets are delivered in order and without errors. The IP protocol is responsible for routing the packets across the internet to reach the server's IP address.
6. The TCP 3-way handshake is performed to establish a connection between the client and server. The client sends a SYN (synchronize) packet to the server, the server responds with a SYN-ACK (synchronize-acknowledge) packet, and the client sends an ACK (acknowledge) packet back to the server. Once the connection is established, the client can send HTTP requests to the server, and the server can respond with HTTP responses containing the requested content.
7. If the request uses HTTPS protocol, the client and server will perform an SSL/TLS (Secure Sockets Layer/Transport Layer Security) handshake to establish a secure connection before exchanging HTTP requests and responses. This involves the client and server agreeing on encryption algorithms, exchanging certificates, and generating session keys to encrypt the communication between them. Once the secure connection is established, the client can send encrypted HTTP requests to the server, and the server can respond with encrypted HTTP responses containing the requested content.
8. Data Transfer: Once the connection is established, the client sends an HTTP request to the server, which includes the URL being requested, any form data, and headers that provide additional context about the request. The server processes this request and sends back an HTTP response, which contains the requested content (such as an HTML page) along with status codes and headers that provide information about the response. This communication allows users to access and interact with websites and online services over the internet.

- a request message fits in 3 packets, and each packet contains header and a payload
- header contains information about the source and destination IP addresses, as well as other metadata about the request, protocol type being used, a sequence of numbers and flags to ensure that the packets are delivered in order and without errors, and other information needed for routing and processing the request.
- payload contains the actual data being sent in the request, such as the URL being requested, any form data, and headers that provide additional context about the request. The payload is the main content of the request that the server will process to generate a response.
- These packets are transmitted to server with the sequence number, then require the server to acknowledge the receipt of each packet by sending an ACK (acknowledge) packet back to the client. This ensures that the packets are delivered reliably and in order, allowing for a successful communication between the client and server.
- if the second packets acknowledgement is not received by the client within a certain time frame, it will retransmit the packet to ensure that it reaches the server. This process continues until all packets are successfully delivered and acknowledged, ensuring a reliable communication between the client and server.
- usually each packet takes different paths instead of going through the same path, this is done to optimize the network traffic and ensure that the packets are delivered efficiently. The internet is a complex network of interconnected routers and switches, and the packets may take different routes based on factors such as network congestion, routing algorithms, and the availability of network paths. This allows for better performance and reliability in delivering the packets from the client to the server.
- each packet has information about how many packets are there in total, and the sequence number of the packet, so that the server can reassemble the packets in the correct order to reconstruct the original request message. This is important because packets may arrive out of order or may be lost during transmission, and the sequence numbers help ensure that the server can properly reassemble the request message for processing.
- Once the server receives all the packets, it processes the request and generates a response. The response is then segmented into smaller packets and sent back to the client using the same TCP/IP protocol. The client receives the response packets, reassembles them in the correct order using the sequence numbers, and renders the web page or content for the user to view.
- once the response is received by the client, the browser processes the HTML content and makes additional requests for the linked resources (CSS, JavaScript, images) to render the complete web page. These additional requests are also sent as packets over the internet to the server, and the server responds with the requested resources in a similar manner as described above. This process continues until all the necessary resources are retrieved and the web page is fully rendered for the user to interact with. The TCP connection closes after the response is fully received, and the client and server can establish a new connection for subsequent requests if needed.

Queueing in browser:

- When you type a URL into your browser and hit enter, the browser initiates a series of actions to retrieve and display the web page. One of the key components of this process is the queuing mechanism in the browser.
- The browser maintains a queue of requests that need to be processed. When you enter a URL, the browser adds the request to the queue and starts processing it. The browser may have multiple requests in the queue, such as requests for images, CSS files, JavaScript files, etc., that are needed to render the web page properly. The browser processes these requests in a specific order, typically based on the priority of the resources being requested. For example, the browser may prioritize requests for critical resources like HTML and CSS files over less critical resources like images or JavaScript files. The queuing mechanism helps the browser manage and optimize the retrieval of resources, ensuring that the web page is rendered efficiently and in a timely manner for the user.  
  This queuing mechanism is essential for the smooth functioning of the web, as it allows the browser to efficiently manage and retrieve the necessary resources to render web pages and provide a seamless user experience.
- 6-8 requests are made in parallel to the server, and the browser can handle multiple requests simultaneously. This allows for faster loading of web pages, as the browser can retrieve multiple resources at the same time. The browser manages the queue of requests and ensures that they are processed efficiently, allowing for a smooth and responsive user experience when accessing websites and online services.

## Peering

Peering is a process where two or more internet service providers (ISPs) agree to exchange traffic directly between their networks without going through a third-party network. This allows for faster and more efficient communication between the ISPs, as they can route traffic directly to each other instead of relying on a third-party network to handle the traffic. Peering can help reduce latency and improve the overall performance of the internet by allowing ISPs to exchange traffic more efficiently. It is a common practice among ISPs to establish peering agreements with each other to enhance the connectivity and performance of their networks.

Once browser gets all files in response from server,

- css is render blocking (browser cannot render the page until it gets the css file, because it needs to know how to style the page)
- js is parse blocking (browser cannot parse the html until it gets the js file, because it needs to know how to execute the js code)

- browser first parses the HTML content and builds the DOM (Document Object Model) tree. As it encounters CSS files, it fetches them and applies the styles to the DOM elements. This is why CSS is render blocking, as the browser needs to wait for the CSS files to be fetched and applied before it can render the page properly. Similarly, when the browser encounters JavaScript files, it needs to fetch and execute them before it can continue parsing the HTML content. This is why JavaScript is parse blocking, as the browser needs to wait for the JavaScript files to be fetched and executed before it can continue processing the HTML content. This process ensures that the web page is rendered correctly with the appropriate styles and functionality provided by the CSS and JavaScript files.

## How does the browser create a DOM tree?

- The browser loads the HTML document.
- The browser converts the HTML document into a DOM (Document Object Model) tree. (DOM is the structure of the page). The DOM tree is a representation of the HTML document in the form of objects and represents the document in the Computer memory.
- The browser fetches most of the resources like CSS, images, and JavaScript files that are linked in the HTML document. Then it parses the CSS files and converts them into CSSOM (CSS Object Model) trees. (CSSOM is the style of the page)
- The browser converts the CSS into a CSSOM (CSS Object Model) tree. (CSSOM is the style of the page). The CSSOM tree is a representation of the CSS in the form of objects and represents the CSS in the Computer memory.
- The browser parses the fetched CSS and applies the CSS rules to the DOM tree to create a render tree. (Render tree is the combination of DOM and CSSOM).
- The render tree is laid out in the viewport or structure it should appear in after the rules have been applied to the DOM tree.
- The render tree is painted on the screen or the visual representation of the render tree is displayed on the screen which is called painting.
