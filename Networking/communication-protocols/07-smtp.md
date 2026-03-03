# SMTP (Simple Mail Transfer Protocol)

SMTP (Simple Mail Transfer Protocol) is a communication protocol used for sending and receiving email messages over the internet. It is a text-based protocol that operates on a client-server model, where email clients (such as Outlook, Gmail, etc.) act as clients that send email messages to email servers, which then relay the messages to their intended recipients. SMTP is responsible for the transmission of email messages between email servers and is widely used for sending emails across the internet. SMTP operates on port 25 by default, but it can also use other ports such as 587 for secure email submission. SMTP is a crucial protocol for email communication and is supported by all major email servers and clients. However, it is important to note that SMTP is primarily designed for sending email messages and does not provide features for receiving or storing email messages. For receiving and storing email messages, other protocols such as POP3 (Post Office Protocol version 3) and IMAP (Internet Message Access Protocol) are commonly used in conjunction with SMTP.

- How SMTP works:

1. Email Composition:
   - The sender composes an email message using an email client, which includes the recipient's email address, subject, and body of the message.
2. SMTP Connection:
   - The email client establishes a connection to the sender's email server using SMTP. This is typically done by connecting to the server's SMTP port (port 25 or 587).
3. SMTP Handshake:
   - The email client and server perform a handshake to establish communication. The client sends a HELO or EHLO command to identify itself to the server, and the server responds with a greeting message. The client may also provide additional information about its capabilities during this handshake.
4. Email Transmission:
   - The email client sends the email message to the server using the MAIL FROM command to specify the sender's email address, followed by one or more RCPT TO commands to specify the recipient's email address(es). The client then sends the DATA command, followed by the actual content of the email message, and ends with a single period (.) on a line by itself to indicate the end of the message.
5. Email Relay:
   - The sender's email server processes the email message and determines the recipient's email server based on the recipient's email address. The sender's server then relays the email message to the recipient's email server using SMTP.
6. Email Delivery:
   - The recipient's email server receives the email message and stores it in the recipient's mailbox. The recipient can then access the email message using an email client that supports POP3 or IMAP to retrieve and read the message.

- Use cases: Sending email messages from email clients to email servers, relaying email messages between email servers, and any applications that require email communication over the internet. SMTP is essential for the functioning of email services and is widely used for both personal and business communication.
