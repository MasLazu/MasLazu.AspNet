# Modules Overview

MasLazu.AspNet modules provide feature-complete implementations for common application requirements. Each module follows clean architecture principles and can be used independently or together.

## 🧩 Available Modules

### **Authentication.Core**

A comprehensive JWT-based authentication system with user registration, login, and token management.

**Key Features:**

- JWT token generation and validation
- User registration and login
- Role-based access control
- Token refresh mechanisms
- Clean architecture implementation

**Package:** `MasLazu.AspNet.Authentication.Core`  
**Documentation:** [Authentication.Core →](./authentication-core.md)

---

### **Authentication.Password**

A secure password-based authentication system with BCrypt hashing and comprehensive user management.

**Key Features:**

- Secure password authentication with BCrypt
- User registration and login
- Password policy enforcement
- Account lockout and security features
- Email verification integration
- Clean architecture implementation

**Package:** `MasLazu.AspNet.Authentication.Password`  
**Documentation:** [Authentication.Password →](./authentication-password.md)

---

### **Authorization.Core**

A comprehensive, modular authorization system with resource-action based permissions and flexible permission types.

**Key Features:**

- Resource-action based permissions
- Flexible permission type system
- Hierarchical resource management
- Action-based access control
- FastEndpoints API integration
- Comprehensive validation and testing

**Package:** `MasLazu.AspNet.Authorization.Core`  
**Documentation:** [Authorization.Core →](./authorization-core.md)

---

### **Authorization.Rbac**

A comprehensive Role-Based Access Control (RBAC) system that extends Authorization.Core with role management capabilities.

**Key Features:**

- Complete role lifecycle management
- Role-permission assignment and management
- User-role assignment with validation
- Integration with Authorization.Core permissions
- FluentValidation for comprehensive request validation
- FastEndpoints API with high-performance endpoints

**Package:** `MasLazu.AspNet.Authorization.Rbac`  
**Documentation:** [Authorization.Rbac →](./authorization-rbac.md)

---

### **Verification**

A flexible and secure verification system for email and SMS-based account verification workflows.

**Key Features:**

- Email verification with customizable templates
- SMS verification support
- Configurable verification codes
- Expiration and retry logic
- Multi-provider support

**Package:** `MasLazu.AspNet.Verification`  
**Documentation:** [Verification →](./verification.md)

---

### **API Key Management**

A secure API Key Management system for ASP.NET Core applications. Provides key generation, validation, rotation, permission-based access control (using permission IDs), and full CRUD operations. Built with Clean Architecture principles.

**Key Features:**

- Secure API key generation and validation
- Permission-based access control (permission IDs)
- Key rotation and revocation
- Full CRUD for API keys and permission scopes
- Entity Framework Core integration
- FluentValidation for request validation

**Package:** `MasLazu.AspNet.ApiKey`  
**Documentation:** [API Key Management →](./api-key-management.md)

---

## 📊 Module Comparison

| Feature                | Authentication.Core | Authentication.Password | Authorization.Core     | Authorization.Rbac  | Verification         | API Key Management |
| ---------------------- | ------------------- | ----------------------- | ---------------------- | ------------------- | -------------------- | ------------------ |
| **Primary Purpose**    | JWT-based auth      | Password-based auth     | Permission-based authz | Role-based authz    | Account verification | API key-based auth |
| **Authentication**     | JWT tokens          | Password + BCrypt       | ❌                     | ❌                  | Verification codes   | API keys           |
| **Authorization**      | ❌                  | ❌                      | ✅ Resource-Action     | ✅ Role-Permission  | ❌                   | ✅ Permission ID   |
| **User Management**    | ✅ Basic            | ✅ Comprehensive        | ❌                     | ❌                  | ❌                   | ❌                 |
| **Permission System**  | ❌                  | ❌                      | ✅ Flexible Types      | ✅ Role-based       | ❌                   | ✅ Permission IDs  |
| **Resource Control**   | ❌                  | ❌                      | ✅ Hierarchical        | ✅ Via Roles        | ❌                   | ❌                 |
| **Role Management**    | ✅                  | ❌                      | ❌                     | ✅ Full CRUD        | ❌                   | ❌                 |
| **Role Hierarchies**   | ❌                  | ❌                      | ❌                     | ✅ Planned          | ❌                   | ❌                 |
| **Password Security**  | ❌                  | ✅ BCrypt + Policies    | ❌                     | ❌                  | ❌                   | ❌                 |
| **Email Integration**  | ❌                  | ✅ Optional             | ❌                     | ❌                  | ✅ Required          | ❌                 |
| **SMS Support**        | ❌                  | ❌                      | ❌                     | ❌                  | ✅                   | ❌                 |
| **Session Management** | ✅ JWT              | ✅ Database             | ❌                     | ❌                  | ❌                   | ✅ Key-based       |
| **Account Lockout**    | ❌                  | ✅                      | ❌                     | ❌                  | ❌                   | ✅ Key revocation  |
| **Usage Analytics**    | ❌                  | ❌                      | ❌                     | ❌                  | ❌                   | ❌                 |
| **Rate Limiting**      | ❌                  | ❌                      | ❌                     | ❌                  | ❌                   | ❌                 |
| **Key Rotation**       | ❌                  | ❌                      | ❌                     | ❌                  | ❌                   | ✅ Supported       |
| **Clean Architecture** | ✅                  | ✅                      | ✅                     | ✅                  | ✅                   | ✅                 |
| **Database Required**  | ✅                  | ✅                      | ✅                     | ✅                  | ✅                   | ✅                 |
| **Dependencies**       | None                | EmailSender (optional)  | None                   | Authorization.Core  | EmailSender          | None               |
| **Best For**           | API authentication  | Web applications        | Fine-grained control   | Hierarchical access | Account verification | API access control |

```

```
