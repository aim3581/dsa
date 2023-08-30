**Simple Authentication System:**

1. **User Database:**
   - Imagine you have a database that holds user information, including their usernames, passwords, and associated tenant IDs. For instance, different companies using your software could be tenants, and each tenant has its own set of users.

2. **Authentication Flow:**
   - When a user tries to log in, your system checks their provided username and password against the database. If they match, the user is authenticated.
   - For example, a user at Company A logs in with their username and password.

3. **Session Management:**
   - After successful login, your system generates a session token and sends it back to the user's browser. This token acts like an access key.
   - The user presents this token with each subsequent request to access protected resources without needing to provide their credentials every time.

**Enhanced Authentication System:**

1. **Multi-Factor Authentication (MFA):**
   - Now, you add an extra layer of security. After entering their password, users also need to provide a second factor, such as a one-time password (OTP) sent to their phone.
   - This prevents unauthorized access even if someone steals a password. For instance, when logging in, a user receives an OTP on their phone that they must enter to complete the login process.

2. **Tenant-Specific Login Pages:**
   - To provide a customized experience, you design separate login pages for each tenant. When users from different companies log in, they see their respective branding and layout.
   - For instance, users from Company A see Company A's logo and colors on the login page, and users from Company B see their branding.

3. **Centralized Authorization:**
   - You implement a system that assigns roles and permissions to users. This controls what actions they can perform after logging in. Managers might have different permissions than regular employees.
   - For example, a manager from Company A can edit documents, while an employee can only view them.

**Scalable and Complex Authentication System:**

1. **Microservices Architecture:**
   - Instead of one big authentication service, you break it down into smaller, specialized services. One handles user management, another authentication, and yet another authorization. This makes the system easier to maintain and scale.
   - Each microservice focuses on a specific task, similar to different departments in an organization working together.

2. **Distributed Caching:**
   - To speed up session management, you use a distributed cache like Redis. When users log in, their session tokens are stored in this cache, making it quicker to validate their tokens during subsequent requests.
   - It's like having a quick-access memory for frequently used information.

3. **Load Balancing:**
   - As your user base grows, you deploy multiple authentication servers. A load balancer distributes incoming authentication requests across these servers, preventing overload.
   - Imagine a busy restaurant with multiple waitstaff taking orders to ensure efficient service.

4. **Token-Based Authentication:**
   - Instead of maintaining sessions on the server, you move to token-based authentication. Users receive a token (JWT) upon login. This token holds their identity and permissions, eliminating the need to track sessions on the server.
   - It's like getting a wristband at an event that lets you access different areas without showing your ID every time.

5. **Single Sign-On (SSO):**
   - If users need to access multiple services within a tenant's ecosystem, you implement SSO. Once they log in to one service, they are automatically authenticated to others without re-entering credentials.
   - Similar to logging into your Google account and accessing various Google services without separate logins.

6. **Multi-Region Deployment:**
   - To ensure high availability and reduce latency, you deploy authentication services in different geographic regions. This way, if one region experiences issues, users can still authenticate through another.
   - Just like having multiple branches of a store to serve customers in different areas.

7. **User Federation:**
   - Users can log in using third-party accounts like Google or Facebook. This simplifies the login process, as users don't need to create yet another account.
   - It's like using your Google account to log in to various apps and websites without creating separate accounts.

8. **Security Auditing and Monitoring:**
   - You implement auditing and monitoring to track authentication events and user activities. This helps in identifying unusual behavior and maintaining security and compliance standards.
   - Similar to surveillance cameras in a store that record activities to ensure safety.

As your authentication system evolves, it becomes more secure, efficient, and capable of handling a growing number of users and tenants.