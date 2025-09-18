# Modules Overview

MasLazu.AspNet modules provide feature-complete implementations for common application requirements. Each module follows clean architecture principles and can be used independently or together.

## Available Modules

### 🔐 Authentication Core

**Status**: ✅ Production Ready  
**Purpose**: Comprehensive authentication and user management system

A complete authentication system with JWT tokens, user management, and security features.

**Key Features:**

- JWT-based authentication with access and refresh tokens
- User registration, login, and profile management
- Multi-method login support (email, username, phone)
- Password reset and email verification workflows
- Role-based authorization system
- Audit logging and security tracking

**Packages:**

- `MasLazu.AspNet.Authentication.Core.Abstraction` - Interfaces and contracts
- `MasLazu.AspNet.Authentication.Core.Domain` - Domain entities and business rules
- `MasLazu.AspNet.Authentication.Core.Base` - Service implementations
- `MasLazu.AspNet.Authentication.Core.EfCore` - Data access layer
- `MasLazu.AspNet.Authentication.Core.Endpoint` - API endpoints
- `MasLazu.AspNet.Authentication.Core.Consumer` - Event-driven processing

[**Learn More →**](./authentication/overview.md)

### ✅ Verification

**Status**: ✅ Production Ready  
**Purpose**: Multi-channel verification system for user verification codes

A flexible verification system supporting email, SMS, and other verification channels with purpose-based workflows.

**Key Features:**

- Multi-channel support (Email, SMS, extensible)
- Purpose-based verification (registration, password reset, etc.)
- Configurable expiration times and attempt limits
- HTML email templates with theming support
- Async processing and rate limiting
- Comprehensive validation and security

**Packages:**

- `MasLazu.AspNet.Verification.Abstraction` - Core interfaces and models
- `MasLazu.AspNet.Verification.Domain` - Domain entities and business rules
- `MasLazu.AspNet.Verification` - Application services and logic
- `MasLazu.AspNet.Verification.EfCore` - Entity Framework implementation
- `MasLazu.AspNet.Verification.Endpoint` - API endpoints

[**Learn More →**](./verification/overview.md)

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
