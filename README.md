# MasLazu.AspNet

A comprehensive collection of modern ASP.NET Core libraries and modules designed to accelerate enterprise application development with clean architecture principles.

[![Documentation](https://img.shields.io/badge/docs-GitHub%20Pages-blue?style=flat-square&logo=github)](https://maslazu.github.io/MasLazu.AspNet/)
[![Deploy Documentation](https://github.com/MasLazu/MasLazu.AspNet/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/MasLazu/MasLazu.AspNet/actions/workflows/deploy-docs.yml)

> 📖 **[Visit our comprehensive documentation](https://maslazu.github.io/MasLazu.AspNet/)** for detailed guides, API references, and examples.

## 🚀 Overview

MasLazu.AspNet is a modular ecosystem that provides everything you need to build scalable, maintainable, and secure web applications. From foundational frameworks to specialized modules for authentication, authorization, and communication.

## 📦 Project Structure

```
MasLazu.AspNet/
├── framework/                          # Core Framework Libraries
│   ├── MasLazu.AspNet.Framework.sln
│   └── src/
│       ├── MasLazu.AspNet.Framework.Domain/
│       ├── MasLazu.AspNet.Framework.Application/
│       ├── MasLazu.AspNet.Framework.EfCore/
│       ├── MasLazu.AspNet.Framework.EfCore.Postgresql/
│       └── MasLazu.AspNet.Framework.Endpoint/
├── utilities/                          # Utility Libraries
│   └── MasLazu.AspNet.EmailSender/
│       ├── MasLazu.AspNet.EmailSender.sln
│       └── src/
│           ├── MasLazu.AspNet.EmailSender.Abstraction/
│           ├── MasLazu.AspNet.EmailSender.Gmail/
│           └── MasLazu.AspNet.EmailSender.SendGrid/
└── modules/                            # Feature Modules
    ├── MasLazu.AspNet.Authentication.Core/
    ├── MasLazu.AspNet.Authentication.Password/
    ├── MasLazu.AspNet.Authorization.Core/
    ├── MasLazu.AspNet.Authorization.Rbac/
    ├── MasLazu.AspNet.Verification/
    └── MasLazu.AspNet.ApiKey/
```

## 🏗️ Core Components

### 🔧 Framework

**Location**: `/framework/`  
**Status**: ✅ Production Ready

A modern, clean architecture ASP.NET Core framework built with .NET 9, providing the foundation for all other modules.

**Key Features:**

- Clean Architecture with strict separation of concerns
- FastEndpoints integration for high-performance APIs
- Generic CRUD operations with advanced validation
- Entity Framework Core with PostgreSQL support
- Dual pagination (offset-based and cursor-based)
- Soft delete support with audit trails
- Advanced field validation and property mapping

[📖 Framework Documentation](framework/README.md)

### 📧 Email Sender

**Location**: `/utilities/MasLazu.AspNet.EmailSender/`  
**Status**: ✅ Production Ready

A comprehensive multi-provider email sending library with beautiful HTML templates and Razor rendering.

**Key Features:**

- Multi-provider support (Gmail API, SendGrid)
- Professional HTML templates with multiple themes
- Razor-based template engine with model binding
- Mobile-responsive and accessibility-compliant designs
- Verification code templates with security features
- File attachment support

[📖 Email Sender Documentation](utilities/MasLazu.AspNet.EmailSender/README.md)

### 🛡️ Authorization Core

**Location**: `/modules/MasLazu.AspNet.Authorization.Core/`  
**Status**: ✅ Production Ready

A comprehensive, modular authorization system built with .NET 9, designed to provide flexible and scalable access control for ASP.NET Core applications.

**Key Features:**

- Resource-action based permissions with flexible permission types
- Hierarchical resource management with action-based access control
- Entity Framework Core integration with clean architecture
- FastEndpoints API with comprehensive validation
- Extensive test coverage (54+ unit tests)
- Centralized package management with consistent dependencies

**Core Components:**

- **Actions**: System operations (READ, WRITE, DELETE)
- **Permissions**: Combine actions with resources and types
- **Permission Types**: Categorize permissions (SYSTEM, USER)
- **Resources**: Protected entities or features
- **Resource Actions**: Link resources to available actions

[📖 Authorization Core Documentation](modules/MasLazu.AspNet.Authorization.Core/README.md)

## 🔮 Available Modules

The modular system provides a comprehensive set of pre-built features for enterprise applications:

### 🔐 Authentication Modules

#### Authentication Core ✅ **Available**

- User management with comprehensive profile support
- Multi-language and timezone support
- Gender and demographic data management
- JWT-based authentication with refresh tokens
- User login method tracking

#### Password Authentication ✅ **Available**

- Secure password hashing and validation
- Password complexity requirements
- Password change and reset functionality
- Account lockout and security policies

#### OpenID Connect Authentication 🚧 **Coming Soon**

- OAuth 2.0 and OpenID Connect integration
- Support for multiple identity providers
- User account linking and management
- Social login capabilities

### 🛡️ Authorization Modules

#### Core Authorization ✅ **Available**

- Resource-action based permissions
- Flexible permission type system
- Hierarchical resource management
- Action-based access control

#### Role-Based Access Control (RBAC) ✅ **Available**

**Location**: `/modules/MasLazu.AspNet.Authorization.Rbac/`  
**Status**: ✅ Production Ready

A comprehensive Role-Based Access Control (RBAC) system that extends the Authorization Core with role management capabilities. Built with .NET 9 and following clean architecture principles.

**Key Features:**

- Complete role lifecycle management (CRUD operations)
- Role-permission assignment and management
- User-role assignment with validation
- FluentValidation for comprehensive request validation
- Entity Framework Core integration with clean architecture
- FastEndpoints API with high-performance endpoints
- Comprehensive test coverage with xUnit
- Integration with Authorization.Core for permission validation

**Core Components:**

- **Roles**: Named collections of permissions with descriptions
- **Role Permissions**: Link roles to specific permissions from Authorization.Core
- **User Roles**: Assign roles to users with audit tracking
- **CRUD Services**: Complete role and assignment management
- **Validation**: FluentValidation for all operations

[📖 Authorization RBAC Documentation](modules/MasLazu.AspNet.Authorization.Rbac/README.md)

#### Page-Based Authorization ✅ **Available**

**Location**: `/modules/MasLazu.AspNet.Authorization.Page/`  
**Status**: ✅ Production Ready

A comprehensive page-based authorization system for implementing UI-level access control. Provides hierarchical page management, page grouping, and permission-based navigation security.

**Key Features:**

- Hierarchical page structure with parent-child relationships
- Page grouping for organization and navigation
- Page-permission associations for fine-grained access control
- Full CRUD operations for pages, groups, and permissions
- Entity Framework Core integration with clean architecture
- FastEndpoints API with comprehensive validation
- FluentValidation for all operations

**Core Components:**

- **Pages**: Hierarchical page structure with codes, names, and paths
- **Page Groups**: Organizational grouping with icons and descriptions
- **Page Permissions**: Many-to-many relationship between pages and permissions
- **CRUD Services**: Complete management for all entities
- **Validation**: FluentValidation for comprehensive request validation

[📖 Page-Based Authorization Documentation](modules/MasLazu.AspNet.Authorization.Page/README.md)

### ✅ Verification System ✅ **Available**

- Multi-channel verification (Email, SMS)
- Verification purpose management
- Secure code generation and validation
- Verification status tracking
- Event-driven verification completion

### 🔑 API Key Management

**Location**: `/modules/MasLazu.AspNet.ApiKey/`  
**Status**: 🚧 In Development

A robust API Key Management system designed to provide secure and scalable API key generation, management, and analytics for ASP.NET Core applications.

**Key Features:**

- API key generation and rotation
- Scope-based access control
- Usage tracking and analytics
- Security policies for key expiration and revocation
- Integration with Authorization.Core for scope validation

[📖 API Key Management Documentation](modules/MasLazu.AspNet.ApiKey/README.md)

### 🌐 OAuth Server 🚧 **Coming Soon**

- Full OAuth 2.0 server implementation
- Authorization code flow support
- Client application management
- Scope-based access control
- User consent management

### 👤 Profile Management 🚧 **Coming Soon**

- User profile data management
- Profile authorization and privacy
- Social profile integration
- Profile verification badges

## 🎯 Design Principles

### Clean Architecture

All components follow strict clean architecture principles:

- **Domain Layer**: Core business entities and rules
- **Application Layer**: Use cases and business logic
- **Infrastructure Layer**: External concerns and implementations
- **Presentation Layer**: API endpoints and user interfaces

### Modular Design

- **Independent Modules**: Each module can be used standalone
- **Minimal Dependencies**: Modules depend only on framework components
- **Pluggable Architecture**: Easy to add, remove, or replace modules
- **Configuration-Driven**: Extensive configuration options for customization

### Modern Technology Stack

- **.NET 9**: Latest .NET features and performance improvements
- **FastEndpoints**: High-performance minimal APIs
- **Entity Framework Core**: Modern ORM with advanced features
- **FluentValidation**: Comprehensive validation framework
- **Dependency Injection**: Built-in DI container support

## 🚀 Getting Started

### Prerequisites

- .NET 9.0 SDK or later
- PostgreSQL database
- Git
- Visual Studio 2022 or VS Code

### Quick Start

1. **Clone the repository:**

```bash
git clone https://github.com/MasLazu/MasLazu.AspNet.git
cd MasLazu.AspNet
```

2. **Choose your components:**

```bash
# For basic framework
cd framework
dotnet build

# For email functionality
cd ../utilities/MasLazu.AspNet.EmailSender
dotnet build

# For authorization functionality
cd ../modules/MasLazu.AspNet.Authorization.Core
dotnet build
```

3. **Add to your project:**

```xml
<PackageReference Include="MasLazu.AspNet.Framework.Application" Version="1.0.0" />
<PackageReference Include="MasLazu.AspNet.Framework.EfCore.Postgresql" Version="1.0.0" />
<PackageReference Include="MasLazu.AspNet.EmailSender.Gmail" Version="1.0.0" />
<PackageReference Include="MasLazu.AspNet.Authorization.Core" Version="1.0.0" />
```

4. **Configure services:**

```csharp
// Program.cs
using MasLazu.AspNet.Framework.Application.Extensions;
using MasLazu.AspNet.Framework.EfCore.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add framework services
builder.Services.AddFrameworkApplication();
builder.Services.AddFrameworkEfCorePostgresql(
    builder.Configuration.GetConnectionString("DefaultConnection")!);

// Add email services
builder.Services.AddGmailEmailSender(builder.Configuration);

// Add authorization services
builder.Services.AddAuthorizationCoreApplicationServices();
builder.Services.AddAuthorizationCoreEntityFrameworkCore();

var app = builder.Build();

// Configure pipeline
app.UseFrameworkEndpoints();
app.Run();
```

## 🛠️ Development Roadmap

### Phase 1: Foundation (Completed ✅)

- [x] Core Framework with Clean Architecture
- [x] Entity Framework Core integration
- [x] FastEndpoints integration
- [x] Email Sender with multiple providers

### Phase 2: Authentication & Authorization (In Progress 🚧)

- [x] Authentication Core module
- [x] Password Authentication module
- [ ] OpenID Connect module
- [x] Core Authorization module
- [x] RBAC module
- [x] Page-based Authorization module
- [x] Verification System module

### Phase 3: Advanced Features (Planned 📋)

- [ ] API Key Management module
- [ ] OAuth Server module
- [ ] Verification System module
- [ ] Profile Management module
- [ ] Encryption utilities
- [ ] Audit logging system

### Phase 4: Enterprise Features (Future 🔮)

- [ ] Multi-tenancy support
- [ ] Event sourcing capabilities
- [ ] Background job processing
- [ ] Caching abstractions
- [ ] Message queue integration
- [ ] Monitoring and observability

## 📚 Documentation

### 📖 **[Complete Documentation](https://maslazu.github.io/MasLazu.AspNet/)**

**Visit our comprehensive Docusaurus documentation site for the full guides, API references, and examples.**

### Framework Components

- [Framework Core](framework/README.md) - Clean architecture foundation
- [Domain Layer](framework/src/MasLazu.AspNet.Framework.Domain/README.md)
- [Application Layer](framework/src/MasLazu.AspNet.Framework.Application/README.md)
- [EF Core Integration](framework/src/MasLazu.AspNet.Framework.EfCore/README.md)
- [PostgreSQL Provider](framework/src/MasLazu.AspNet.Framework.EfCore.Postgresql/README.md)
- [Endpoint Framework](framework/src/MasLazu.AspNet.Framework.Endpoint/README.md)

### Utilities

- [Email Sender](utilities/MasLazu.AspNet.EmailSender/README.md) - Multi-provider email system
- [Gmail Provider](utilities/MasLazu.AspNet.EmailSender/src/MasLazu.AspNet.EmailSender.Gmail/README.md)
- [SendGrid Provider](utilities/MasLazu.AspNet.EmailSender/src/MasLazu.AspNet.EmailSender.SendGrid/README.md)

### Modules

- [Authentication Core](modules/MasLazu.AspNet.Authentication.Core/README.md) - Complete authentication system
- [Authorization Core](modules/MasLazu.AspNet.Authorization.Core/README.md) - Flexible authorization system
- [Authorization RBAC](modules/MasLazu.AspNet.Authorization.Rbac/README.md) - Role-based access control system
- [Authorization Page](modules/MasLazu.AspNet.Authorization.Page/README.md) - Page-based authorization system
- [Verification System](modules/MasLazu.AspNet.Verification/README.md) - Email/SMS verification
- [API Key Management](modules/MasLazu.AspNet.ApiKey/README.md) - API key generation and management

### Guides

- [Getting Started Guide](docs/getting-started.md)
- [Architecture Guide](docs/architecture.md)
- [Module Development Guide](docs/module-development.md)
- [Deployment Guide](docs/deployment.md)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Contributing Guidelines

1. **Fork the repository** and create a feature branch
2. **Follow coding standards** and architectural patterns
3. **Write comprehensive tests** for new functionality
4. **Update documentation** for any changes
5. **Submit a pull request** with a clear description

### Development Setup

```bash
# Clone and setup
git clone https://github.com/MasLazu/MasLazu.AspNet.git
cd MasLazu.AspNet

# Install dependencies
dotnet restore

# Run tests
dotnet test

# Build all projects
dotnet build
```

### Code Standards

- Follow clean architecture principles
- Use nullable reference types
- Write unit tests for business logic
- Document public APIs with XML comments
- Follow semantic versioning for releases

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Community

### Support Channels

- 📧 **Email**: support@maslazu.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/MasLazu/MasLazu.AspNet/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/MasLazu/MasLazu.AspNet/discussions)
- 📖 **Wiki**: [Project Wiki](https://github.com/MasLazu/MasLazu.AspNet/wiki)

### Contributors

Special thanks to all contributors who have helped make this project possible!

[![Contributors](https://contrib.rocks/image?repo=MasLazu/MasLazu.AspNet)](https://github.com/MasLazu/MasLazu.AspNet/graphs/contributors)

## 🏆 Acknowledgments

- Built with modern .NET and ASP.NET Core
- Inspired by clean architecture principles
- Community-driven development approach
- Enterprise-grade security and performance standards

---

**Built with ❤️ by the MasLazu team for the .NET community**

_Accelerating enterprise development, one module at a time._
