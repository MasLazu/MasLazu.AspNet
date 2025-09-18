# Getting Started

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **.NET 9 SDK** or later
- **Visual Studio 2022** (17.8+) or **VS Code** with C# extension
- **Database** - PostgreSQL (recommended), SQL Server, or SQLite for development

### Package Installation

MasLazu.AspNet packages are available on NuGet. Install only the packages you need:

#### Core Framework

```bash
# Essential packages for most applications
dotnet add package MasLazu.AspNet.Framework.Domain
dotnet add package MasLazu.AspNet.Framework.Application
dotnet add package MasLazu.AspNet.Framework.EfCore
dotnet add package MasLazu.AspNet.Framework.Endpoint

# PostgreSQL support (recommended)
dotnet add package MasLazu.AspNet.Framework.EfCore.Postgresql
```

#### Authentication Module

```bash
# Complete authentication system
dotnet add package MasLazu.AspNet.Authentication.Core.Abstraction
dotnet add package MasLazu.AspNet.Authentication.Core.Base
dotnet add package MasLazu.AspNet.Authentication.Core.EfCore
dotnet add package MasLazu.AspNet.Authentication.Core.Endpoint
```

#### Verification Module

```bash
# Email/SMS verification system
dotnet add package MasLazu.AspNet.Verification.Abstraction
dotnet add package MasLazu.AspNet.Verification
dotnet add package MasLazu.AspNet.Verification.EfCore
dotnet add package MasLazu.AspNet.Verification.Endpoint
```

#### Email Utilities

```bash
# Email sending with multiple providers
dotnet add package MasLazu.AspNet.EmailSender.Abstraction

# Choose your email provider
dotnet add package MasLazu.AspNet.EmailSender.Gmail
# OR
dotnet add package MasLazu.AspNet.EmailSender.SendGrid
```

## Project Setup

### 1. Create a New Project

```bash
# Create new web API project
dotnet new webapi -n MyApp
cd MyApp

# Install required packages (example with PostgreSQL)
dotnet add package MasLazu.AspNet.Framework.Domain
dotnet add package MasLazu.AspNet.Framework.Application
dotnet add package MasLazu.AspNet.Framework.EfCore.Postgresql
dotnet add package MasLazu.AspNet.Framework.Endpoint
```

### 2. Configure Program.cs

```csharp
using MasLazu.AspNet.Framework.EfCore.Postgresql.Extensions;
using MasLazu.AspNet.Framework.Endpoint.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add MasLazu.AspNet services
builder.Services.AddMasLazuFramework();
builder.Services.AddMasLazuPostgreSQL(builder.Configuration);
builder.Services.AddMasLazuEndpoints();

var app = builder.Build();

// Configure pipeline
app.UseMasLazuEndpoints();

app.Run();
```

### 3. Database Configuration

Add connection string to `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=myapp;Username=postgres;Password=yourpassword"
  }
}
```

### 4. Create Your First Entity

```csharp
// Entities/Product.cs
using MasLazu.AspNet.Framework.Domain.Entities;

namespace MyApp.Entities;

public class Product : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public bool IsActive { get; set; } = true;
}
```

### 5. Create DbContext

```csharp
// Data/AppDbContext.cs
using MasLazu.AspNet.Framework.EfCore.Data;
using MyApp.Entities;

namespace MyApp.Data;

public class AppDbContext : BaseDbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }
}
```

### 6. Run Migrations

```bash
# Add migration
dotnet ef migrations add InitialCreate

# Update database
dotnet ef database update
```

## Next Steps

- [Framework Overview](../framework/overview.md) - Learn about core framework features
- [Create Your First API](./first-api.md) - Build a complete CRUD API
- [Authentication Setup](../modules/authentication/setup.md) - Add user authentication
- [Examples](../examples/overview.md) - See complete sample applications

## Troubleshooting

### Common Issues

1. **Missing packages**: Ensure all required packages are installed
2. **Database connection**: Verify connection string and database accessibility
3. **Migration errors**: Check entity configurations and relationships
4. **.NET version**: Ensure you're using .NET 9 or later

### Getting Help

- Check the [API Reference](../api-reference/overview.md)
- Review [Examples](../examples/overview.md)
- Open an issue on [GitHub](https://github.com/MasLazu/MasLazu.AspNet/issues)
