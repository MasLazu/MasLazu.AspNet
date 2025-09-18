# Examples Overview

This section contains practical examples and tutorials for working with MasLazu.AspNet components.

## Getting Started Examples

### 🚀 Basic Examples

- **[Your First API](../getting-started/first-api.md)** - Create a complete CRUD API from scratch
- **[Simple CRUD Operations](./simple-crud.md)** - Basic create, read, update, delete operations
- **[Entity Relationships](./entity-relationships.md)** - Working with related entities

### 🔧 Framework Examples

- **[Advanced Filtering](./advanced-filtering.md)** - Complex queries and filtering
- **[Custom Validation](./custom-validation.md)** - Implementing custom validation rules
- **[Repository Patterns](./repository-patterns.md)** - Advanced repository usage
- **[Pagination Strategies](./pagination-strategies.md)** - Different pagination approaches

## Module Examples

### 🔐 Authentication Examples

- **[Authentication + Verification Setup](./auth-verification-setup.md)** - Complete user system
- **[Custom User Properties](./custom-user-properties.md)** - Extending user entities
- **[Multi-tenant Authentication](./multi-tenant-auth.md)** - Multi-tenant scenarios
- **[JWT Configuration](./jwt-configuration.md)** - Advanced JWT setup

### ✅ Verification Examples

- **[Email Verification Workflow](./email-verification-workflow.md)** - Complete email verification
- **[SMS Verification](./sms-verification.md)** - SMS-based verification
- **[Custom Verification Templates](./custom-verification-templates.md)** - Custom email templates

## Utility Examples

### 📧 Email Sender Examples

- **[Gmail Setup Guide](./gmail-setup.md)** - Gmail API configuration
- **[SendGrid Setup Guide](./sendgrid-setup.md)** - SendGrid configuration
- **[Custom Email Templates](./custom-email-templates.md)** - Creating custom templates
- **[Email Testing Strategies](./email-testing.md)** - Testing email functionality
- **[Provider Switching](./provider-switching.md)** - Switching between providers

## Architecture Examples

### 🏗️ Design Patterns

- **[Event-driven Modules](./event-driven-modules.md)** - Module communication with events
- **[CQRS Implementation](./cqrs-implementation.md)** - Command Query Responsibility Segregation
- **[Clean Architecture](./clean-architecture.md)** - Implementing clean architecture
- **[Microservices Setup](./microservices-setup.md)** - Breaking into microservices

### 🚀 Deployment Examples

- **[Docker Deployment](./docker-deployment.md)** - Containerizing your application
- **[Azure Deployment](./azure-deployment.md)** - Deploying to Azure
- **[AWS Deployment](./aws-deployment.md)** - Deploying to AWS
- **[CI/CD Pipeline](./cicd-pipeline.md)** - Automated deployment pipeline

## Testing Examples

### 🧪 Testing Strategies

- **[Unit Testing](./unit-testing.md)** - Testing services and components
- **[Integration Testing](./integration-testing.md)** - End-to-end testing
- **[API Testing](./api-testing.md)** - Testing API endpoints
- **[Database Testing](./database-testing.md)** - Testing with databases

## Performance Examples

### ⚡ Optimization

- **[Performance Optimization](./performance-optimization.md)** - Improving application performance
- **[Database Optimization](./database-optimization.md)** - Database performance tuning
- **[Caching Strategies](./caching-strategies.md)** - Implementing caching
- **[Load Testing](./load-testing.md)** - Performance testing

## Real-world Examples

### 🌍 Complete Applications

- **[E-commerce API](./ecommerce-api.md)** - Complete e-commerce backend
- **[Blog Platform](./blog-platform.md)** - Content management system
- **[Task Management](./task-management.md)** - Project management API
- **[Social Media API](./social-media-api.md)** - Social platform backend

## Code Samples Repository

All examples are available in our GitHub repository with complete, runnable code:

🔗 **[MasLazu.AspNet Examples Repository](https://github.com/MasLazu/MasLazu.AspNet/tree/main/examples)**

Each example includes:

- Complete source code
- README with setup instructions
- Sample data and test scripts
- Docker compose files for dependencies
- Postman collections for API testing

## Running Examples

### Prerequisites

Most examples require:

- .NET 9 SDK
- Docker (for databases)
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/MasLazu/MasLazu.AspNet.git
cd MasLazu.AspNet/examples

# Choose an example
cd first-api

# Start dependencies (PostgreSQL, Redis, etc.)
docker-compose up -d

# Run the application
dotnet run

# Test the API
curl http://localhost:5000/api/v1/health
```

## Contributing Examples

We welcome contributions! To add a new example:

1. **Fork the repository**
2. **Create your example** in `examples/your-example-name/`
3. **Include complete documentation**
4. **Add to this overview page**
5. **Submit a pull request**

### Example Structure

```
examples/your-example-name/
├── src/                    # Source code
├── tests/                  # Unit and integration tests
├── docker-compose.yml      # Dependencies
├── README.md              # Setup and usage instructions
├── postman/               # API test collections
└── docs/                  # Additional documentation
```

## Getting Help

- 📖 **[Documentation](../intro.md)** - Complete documentation
- 💬 **[GitHub Discussions](https://github.com/MasLazu/MasLazu.AspNet/discussions)** - Ask questions
- 🐛 **[Issues](https://github.com/MasLazu/MasLazu.AspNet/issues)** - Report bugs
- 📧 **[Contact](mailto:support@maslazu.com)** - Direct support
