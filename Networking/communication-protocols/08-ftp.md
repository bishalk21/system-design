# FTP (File Transfer Protocol)

FTP (File Transfer Protocol) is a communication protocol used for transferring files between a client and a server over a network. It is a standard network protocol that operates on the application layer of the OSI model and is widely used for uploading and downloading files from remote servers. FTP allows users to access and manage files on a remote server, making it an essential tool for web developers, system administrators, and anyone who needs to transfer files over the internet. FTP operates on a client-server model, where the client initiates a connection to the server and sends commands to perform various file operations such as uploading, downloading, renaming, and deleting files. FTP can be used in both active and passive modes, which determine how the data connection is established between the client and server. In active mode, the client opens a random port and waits for the server to connect to it, while in passive mode, the server opens a random port and waits for the client to connect to it. FTP is a widely supported protocol and is compatible with various operating systems and platforms, making it a popular choice for file transfer tasks. However, it is important to note that FTP does not provide encryption for data transmission, which can pose security risks when transferring sensitive files over the internet. As such, it is recommended to use secure alternatives such as SFTP (SSH File Transfer Protocol) or FTPS (FTP Secure) for secure file transfers.

- How FTP works:

1. Connection Establishment:
   - The client initiates a connection to the FTP server by specifying the server's IP address or hostname and the FTP port (default is port 21).
   - The server responds with a welcome message, indicating that it is ready to accept commands from the client.
2. Authentication:
   - The client sends a USER command to the server, followed by the username for authentication.
   - The server responds with a prompt for the password, and the client sends a PASS command followed by the password for authentication.
   - If the authentication is successful, the server responds with a success message, and the client can proceed with file operations. If authentication fails, the server responds with an error message, and the client may need to retry with correct credentials.
3. File Operations:
   - Once authenticated, the client can send various FTP commands to perform file operations such as uploading, downloading, renaming, and deleting files on the server. For example, the client can use the STOR command to upload a file to the server or the RETR command to download a file from the server.
   - The server responds with appropriate status codes and messages for each command, indicating whether the operation was successful or if there were any errors.
4. Connection Termination:
   - When the client has finished performing file operations, it can send a QUIT command to the server to terminate the connection. The server responds with a goodbye message, and the connection is closed.

- Use cases: Uploading and downloading files from remote servers, managing files on a remote server, and any applications that require file transfer capabilities over the internet. FTP is commonly used for website maintenance, file sharing, and backup purposes, especially in scenarios where large files need to be transferred efficiently. However, it is important to consider security implications when using FTP and to use secure alternatives like SFTP or FTPS when transferring sensitive files.
