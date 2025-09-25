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

### **Authorization.Page**

A comprehensive page-based authorization system for implementing UI-level access control. Provides hierarchical page management, page grouping, and permission-based navigation security.

**Key Features:**

- Hierarchical page structure with parent-child relationships
- Page grouping for organization and navigation
- Page-permission associations for fine-grained access control
- Full CRUD operations for pages, groups, and permissions
- Entity Framework Core integration with clean architecture
- FastEndpoints API with comprehensive validation
- FluentValidation for all operations

**Package:** `MasLazu.AspNet.Authorization.Page`  
**Documentation:** [Authorization.Page →](./authorization-page.md)

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

| Feature                 | Authentication.Core | Authentication.Password | Authorization.Core     | Authorization.Rbac  | Authorization.Page  | Verification         | API Key Management |
| ----------------------- | ------------------- | ----------------------- | ---------------------- | ------------------- | ------------------- | -------------------- | ------------------ |
| **Primary Purpose**     | JWT-based auth      | Password-based auth     | Permission-based authz | Role-based authz    | Page-based authz    | Account verification | API key-based auth |
| **Authentication**      | JWT tokens          | Password + BCrypt       | ❌                     | ❌                  | ❌                  | Verification codes   | API keys           |
| **Authorization**       | ❌                  | ❌                      | ✅ Resource-Action     | ✅ Role-Permission  | ✅ Page-Permission  | ❌                   | ✅ Permission ID   |
| **User Management**     | ✅ Basic            | ✅ Comprehensive        | ❌                     | ❌                  | ❌                  | ❌                   | ❌                 |
| **Permission System**   | ❌                  | ❌                      | ✅ Flexible Types      | ✅ Role-based       | ✅ Page-based       | ❌                   | ✅ Permission IDs  |
| **Resource Control**    | ❌                  | ❌                      | ✅ Hierarchical        | ✅ Via Roles        | ✅ Page Hierarchy   | ❌                   | ❌                 |
| **Role Management**     | ✅                  | ❌                      | ❌                     | ✅ Full CRUD        | ❌                  | ❌                   | ❌                 |
| **Role Hierarchies**    | ❌                  | ❌                      | ❌                     | ✅ Planned          | ❌                  | ❌                   | ❌                 |
| **Password Security**   | ❌                  | ✅ BCrypt + Policies    | ❌                     | ❌                  | ❌                  | ❌                   | ❌                 |
| **Email Integration**   | ❌                  | ✅ Optional             | ❌                     | ❌                  | ❌                  | ✅ Required          | ❌                 |
| **SMS Support**         | ❌                  | ❌                      | ❌                     | ❌                  | ❌                  | ✅                   | ❌                 |
| **Session Management**  | ✅ JWT              | ✅ Database             | ❌                     | ❌                  | ❌                  | ❌                   | ✅ Key-based       |
| **Account Lockout**     | ❌                  | ✅                      | ❌                     | ❌                  | ❌                  | ❌                   | ✅ Key revocation  |
| **Usage Analytics**     | ❌                  | ❌                      | ❌                     | ❌                  | ❌                  | ❌                   | ❌                 |
| **Rate Limiting**       | ❌                  | ❌                      | ❌                     | ❌                  | ❌                  | ❌                   | ❌                 |
| **Key Rotation**        | ❌                  | ❌                      | ❌                     | ❌                  | ❌                  | ❌                   | ✅ Supported       |
| **Page Management**     | ❌                  | ❌                      | ❌                     | ❌                  | ✅ Full CRUD        | ❌                   | ❌                 |
| **Page Groups**         | ❌                  | ❌                      | ❌                     | ❌                  | ✅ Hierarchical     | ❌                   | ❌                 |
| **Navigation Security** | ❌                  | ❌                      | ❌                     | ❌                  | ✅ Permission-based | ❌                   | ❌                 |
| **Clean Architecture**  | ✅                  | ✅                      | ✅                     | ✅                  | ✅                  | ✅                   | ✅                 |
| **Database Required**   | ✅                  | ✅                      | ✅                     | ✅                  | ✅                  | ✅                   | ✅                 |
| **Dependencies**        | None                | EmailSender (optional)  | None                   | Authorization.Core  | None                | EmailSender          | None               |
| **Best For**            | API authentication  | Web applications        | Fine-grained control   | Hierarchical access | UI navigation       | Account verification | API access control |

````

## Module Selection Guide

### For Basic Web APIs

```bash
# Minimal setup
dotnet add package MasLazu.AspNet.Framework.Domain
dotnet add package MasLazu.AspNet.Framework.Application
dotnet add package MasLazu.AspNet.Framework.EfCore
dotnet add package MasLazu.AspNet.Framework.Endpoint
````

### For Authorization Control

```bash
# Add basic authorization system
dotnet add package MasLazu.AspNet.Authorization.Core.Abstraction
dotnet add package MasLazu.AspNet.Authorization.Core.Domain
dotnet add package MasLazu.AspNet.Authorization.Core
dotnet add package MasLazu.AspNet.Authorization.Core.EfCore
dotnet add package MasLazu.AspNet.Authorization.Core.Endpoint

# Add role-based access control (requires Authorization.Core)
dotnet add package MasLazu.AspNet.Authorization.Rbac.Abstraction
dotnet add package MasLazu.AspNet.Authorization.Rbac.Domain
dotnet add package MasLazu.AspNet.Authorization.Rbac
dotnet add package MasLazu.AspNet.Authorization.Rbac.EfCore
dotnet add package MasLazu.AspNet.Authorization.Rbac.Endpoint

# Add page-based authorization
dotnet add package MasLazu.AspNet.Authorization.Page.Abstraction
dotnet add package MasLazu.AspNet.Authorization.Page.Domain
dotnet add package MasLazu.AspNet.Authorization.Page
dotnet add package MasLazu.AspNet.Authorization.Page.EfCore
dotnet add package MasLazu.AspNet.Authorization.Page.Endpoint
```

### For API Access Control

```bash
# Add API key management system
dotnet add package MasLazu.AspNet.ApiKey.Abstraction
dotnet add package MasLazu.AspNet.ApiKey.Domain
dotnet add package MasLazu.AspNet.ApiKey
dotnet add package MasLazu.AspNet.ApiKey.EfCore
dotnet add package MasLazu.AspNet.ApiKey.Endpoint
```

### For Complete User Management

```bash
# Full user system (authentication + verification)
dotnet add package MasLazu.AspNet.Authentication.Core.Abstraction
dotnet add package MasLazu.AspNet.Authentication.Core.Base
dotnet add package MasLazu.AspNet.Authentication.Core.EfCore
dotnet add package MasLazu.AspNet.Authentication.Core.Endpoint

dotnet add package MasLazu.AspNet.Verification.Abstraction
dotnet add package MasLazu.AspNet.Verification
dotnet add package MasLazu.AspNet.Verification.EfCore
dotnet add package MasLazu.AspNet.Verification.Endpoint

# Email sending utility
dotnet add package MasLazu.AspNet.EmailSender.Abstraction
dotnet add package MasLazu.AspNet.EmailSender.Gmail # or SendGrid
```

## Best Practices

### 1. Module Independence

- Each module should work independently
- Minimize cross-module dependencies
- Use events for loose coupling

### 2. Configuration

- Use strongly-typed configuration classes
- Provide sensible defaults
- Support environment-specific settings

### 3. Testing

- Each module includes comprehensive tests
- Use in-memory databases for integration tests
- Mock external dependencies

### 4. Documentation

- Every module has complete documentation
- Include setup guides and examples
- Provide migration guides for updates
