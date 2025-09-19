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

## 📊 Module Comparison

| Feature                | Authentication.Core | Authentication.Password | Verification         |
| ---------------------- | ------------------- | ----------------------- | -------------------- |
| **Primary Purpose**    | JWT-based auth      | Password-based auth     | Account verification |
| **Authentication**     | JWT tokens          | Password + BCrypt       | Verification codes   |
| **User Management**    | ✅ Basic            | ✅ Comprehensive        | ❌                   |
| **Password Security**  | ❌                  | ✅ BCrypt + Policies    | ❌                   |
| **Email Integration**  | ❌                  | ✅ Optional             | ✅ Required          |
| **SMS Support**        | ❌                  | ❌                      | ✅                   |
| **Role Management**    | ✅                  | ❌                      | ❌                   |
| **Session Management** | ✅ JWT              | ✅ Database             | ❌                   |
| **Account Lockout**    | ❌                  | ✅                      | ❌                   |
| **Clean Architecture** | ✅                  | ✅                      | ✅                   |
| **Database Required**  | ✅                  | ✅                      | ✅                   |
| **Best For**           | API authentication  | Web applications        | Account verification |

## Module Architecture

All modules follow a consistent architecture pattern:

```
Module/
├── Abstraction/          # Interfaces, DTOs, enums
├── Domain/              # Entities, domain logic
├── Application/         # Services, validators, business logic
├── EfCore/             # Data access implementation
├── Endpoint/           # API endpoints and controllers
└── Consumer/           # Event consumers (optional)
```

## Integration Patterns

### 1. Framework Integration

All modules are designed to work seamlessly with the MasLazu.AspNet Framework:

```csharp
// Program.cs
builder.Services.AddMasLazuFramework();
builder.Services.AddMasLazuAuthentication(builder.Configuration);
builder.Services.AddMasLazuVerification(builder.Configuration);
```

### 2. Cross-Module Communication

Modules can communicate through:

- **Shared interfaces** - Common contracts in abstractions
- **Events** - Async messaging with MassTransit
- **Direct service calls** - When tight coupling is acceptable

### 3. Database Integration

Modules can share databases or use separate ones:

```csharp
// Shared database approach
public class AppDbContext : BaseDbContext, IAuthenticationDbContext, IVerificationDbContext
{
    // Combined context
}

// Separate databases approach
builder.Services.AddMasLazuAuthentication(config => {
    config.UseDatabase("AuthConnection");
});
builder.Services.AddMasLazuVerification(config => {
    config.UseDatabase("VerificationConnection");
});
```

## Module Selection Guide

### For Basic Web APIs

```bash
# Minimal setup
dotnet add package MasLazu.AspNet.Framework.Domain
dotnet add package MasLazu.AspNet.Framework.Application
dotnet add package MasLazu.AspNet.Framework.EfCore
dotnet add package MasLazu.AspNet.Framework.Endpoint
```

### For User Authentication

```bash
# Add authentication
dotnet add package MasLazu.AspNet.Authentication.Core.Abstraction
dotnet add package MasLazu.AspNet.Authentication.Core.Base
dotnet add package MasLazu.AspNet.Authentication.Core.EfCore
dotnet add package MasLazu.AspNet.Authentication.Core.Endpoint
```

### For Email/SMS Verification

```bash
# Add verification system
dotnet add package MasLazu.AspNet.Verification.Abstraction
dotnet add package MasLazu.AspNet.Verification
dotnet add package MasLazu.AspNet.Verification.EfCore
dotnet add package MasLazu.AspNet.Verification.Endpoint
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

## Coming Soon

### 🛡️ Authorization

Advanced authorization with policies, permissions, and role hierarchies.

### 🔑 API Key Management

API key generation, rotation, and management system.

### 🔗 OAuth Integration

OAuth 2.0 and OpenID Connect providers integration.

### 👤 Profile Management

Extended user profile management with custom fields and preferences.

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

## Examples

- [Authentication + Verification Setup](../examples/auth-verification-setup.md)
- [Custom User Properties](../examples/custom-user-properties.md)
- [Multi-tenant Authentication](../examples/multi-tenant-auth.md)
- [Event-driven Architecture](../examples/event-driven-modules.md)
