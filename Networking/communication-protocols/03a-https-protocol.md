# HTTPS (Hypertext Transfer Protocol Secure) Protocol

HTTPS (Hypertext Transfer Protocol Secure) is an extension of the HTTP protocol that provides secure communication over the internet. It uses encryption to protect the confidentiality and integrity of data transmitted between clients (browsers) and servers, ensuring that sensitive information such as passwords, credit card numbers, and personal data is protected from eavesdropping and tampering by malicious actors. HTTPS operates on the same request-response model as HTTP, but it uses the TLS (Transport Layer Security) protocol or SSL (Secure Sockets Layer) to encrypt the communication between the client and server. When a client initiates an HTTPS connection, it first establishes a secure connection with the server using the TLS handshake process, which involves the exchange of cryptographic keys and certificates to authenticate the server and establish a secure communication channel. Once the secure connection is established, the client can send HTTP requests to the server, and the server can respond with HTTP responses, all while ensuring that the data is encrypted and protected from unauthorized access. HTTPS is widely used for secure web browsing, online banking, e-commerce, and any other applications that require secure communication over the internet. It is important to note that while HTTPS provides encryption and security for data in transit, it does not protect against all types of security threats, such as vulnerabilities in the server or client software, or attacks that target the underlying infrastructure of the internet. Therefore, it is important to implement additional security measures, such as regular software updates, strong authentication mechanisms, and secure coding practices, to ensure the overall security of web applications and services that use HTTPS.

- How HTTPS works:
  - When a client initiates an HTTPS connection, it first establishes a secure connection with the server using the TLS handshake process. This involves the exchange of cryptographic keys and certificates to authenticate the server and establish a secure communication channel.
  - Once the secure connection is established, the client can send HTTP requests to the server, and the server can respond with HTTP responses, all while ensuring that the data is encrypted and protected from unauthorized access.
  - The encryption provided by HTTPS helps to protect against eavesdropping, tampering, and other security threats, making it essential for applications that handle sensitive information or require secure communication over the internet.

- Use cases: Secure web browsing, online banking, e-commerce, and any other applications that require secure communication over the internet, especially those that handle sensitive information such as passwords, credit card numbers, and personal data. HTTPS is also important for protecting

1. TCP Connection

- the client (browser) establishes a connection to the server using TCP.

2. TLS Handshake

- the client sends a ClientHello message to the server, which includes information about the supported TLS versions, cipher suites (encryption algorithms), and other parameters.
- the server responds with a ServerHello message, which includes the chosen TLS version, cipher suite, and a digital certificate that contains the server's public key. the digital certificate is ssl certificate which contains the servers public key, hostname, expiration date, and other information about the server. it is issued by a trusted certificate authority (CA) and is used to authenticate the server and establish a secure connection.
- the client verifies the server's digital certificate and extracts the server's public key from it. if the certificate is valid and trusted, the client proceeds with the handshake; otherwise, it may display a warning to the user about an untrusted connection.
- the client generates a random pre-master secret or session key and encrypts it using the server's public key. the encrypted pre-master secret is sent to the server in a ClientKeyExchange message.
- the change cipher spec message is sent by the client to indicate that it will start using the negotiated cipher suite for encrypting subsequent messages.
- server sends a Finished message to the client, which is encrypted using the negotiated cipher suite and includes a hash of all the handshake messages exchanged so far. this allows the client to verify that the handshake was successful and that the server has the correct session key.
- the server receives the encrypted pre-master secret and decrypts it using its private key to obtain the original pre-master secret or session key.
- now both the client and server have the same session key, which is used to encrypt and decrypt the data transmitted between them during the HTTPS session.

3. HTTP Communication

- once the secure connection is established, the client can send HTTP requests to the server, and the server can respond with HTTP responses, all while ensuring that the data is encrypted and protected from unauthorized access. the encryption provided by HTTPS helps to protect against eavesdropping, tampering, and other security threats, making it essential for applications that handle sensitive information or require secure communication over the internet.
