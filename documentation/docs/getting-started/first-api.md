# Your First API

Learn how to create your first CRUD API with MasLazu.AspNet Framework.

## Overview

In this tutorial, you'll create a complete Product API with CRUD operations using the MasLazu.AspNet Framework. We'll cover:

- Setting up entities and DTOs
- Configuring the database context
- Creating service implementations
- Building API endpoints
- Testing your API

## Prerequisites

Before starting, make sure you have:

- [Installed MasLazu.AspNet](./installation.md)
- .NET 9 SDK
- PostgreSQL database (or SQL Server/SQLite for development)

## Step 1: Create the Product Entity

First, let's create a simple Product entity:

```csharp
// Entities/Product.cs
using MasLazu.AspNet.Framework.Domain.Entities;

namespace MyApp.Entities;

public class Product : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public string Category { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
}
```

## Step 2: Create the Product DTO

Create a DTO for API operations:

```csharp
// DTOs/ProductDto.cs
using MasLazu.AspNet.Framework.Application.Models;

namespace MyApp.DTOs;

public record ProductDto(
    Guid Id,
    string Name,
    string Description,
    decimal Price,
    int StockQuantity,
    string Category,
    bool IsActive,
    DateTimeOffset CreatedAt,
    DateTimeOffset? UpdatedAt
) : BaseDto(Id, CreatedAt, UpdatedAt);

public record CreateProductRequest(
    string Name,
    string Description,
    decimal Price,
    int StockQuantity,
    string Category
);

public record UpdateProductRequest(
    string Name,
    string Description,
    decimal Price,
    int StockQuantity,
    string Category,
    bool IsActive
);
```

## Step 3: Configure the Database Context

Add the Product entity to your DbContext:

```csharp
// Data/AppDbContext.cs
using MasLazu.AspNet.Framework.EfCore.Data;
using MyApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace MyApp.Data;

public class AppDbContext : BaseDbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Product entity
        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(e => e.Description)
                .HasMaxLength(500);

            entity.Property(e => e.Price)
                .HasPrecision(18, 2);

            entity.Property(e => e.Category)
                .IsRequired()
                .HasMaxLength(50);

            entity.HasIndex(e => e.Name);
            entity.HasIndex(e => e.Category);
        });
    }
}
```

## Step 4: Create the Product Service

Implement the CRUD service:

```csharp
// Services/ProductService.cs
using MasLazu.AspNet.Framework.Application.Interfaces;
using MasLazu.AspNet.Framework.Application.Services;
using MyApp.Entities;
using MyApp.DTOs;
using AutoMapper;

namespace MyApp.Services;

public class ProductService : CrudService<Product, ProductDto>
{
    public ProductService(
        IRepository<Product> repository,
        IReadRepository<Product> readRepository,
        IMapper mapper)
        : base(repository, readRepository, mapper)
    {
    }

    // Add custom business logic here if needed
    public async Task<IEnumerable<ProductDto>> GetProductsByCategoryAsync(
        string category,
        CancellationToken ct = default)
    {
        var products = await ReadRepository
            .GetAsync(p => p.Category == category && p.IsActive, ct);
        return Mapper.Map<IEnumerable<ProductDto>>(products);
    }
}
```

## Step 5: Configure AutoMapper

Create mapping profiles:

```csharp
// Mapping/ProductMappingProfile.cs
using AutoMapper;
using MyApp.Entities;
using MyApp.DTOs;

namespace MyApp.Mapping;

public class ProductMappingProfile : Profile
{
    public ProductMappingProfile()
    {
        CreateMap<Product, ProductDto>();
        CreateMap<CreateProductRequest, Product>();
        CreateMap<UpdateProductRequest, Product>();
        CreateMap<ProductDto, Product>();
    }
}
```

## Step 6: Create API Endpoints

Create FastEndpoints for your API:

```csharp
// Endpoints/Products/GetProductEndpoint.cs
using MasLazu.AspNet.Framework.Endpoint.Endpoints;
using MasLazu.AspNet.Framework.Endpoint.EndpointGroups;
using MyApp.DTOs;
using MyApp.Services;

namespace MyApp.Endpoints.Products;

public class GetProductEndpoint : BaseEndpoint<GetProductRequest, ProductDto>
{
    private readonly ProductService _productService;

    public GetProductEndpoint(ProductService productService)
    {
        _productService = productService;
    }

    public override void Configure()
    {
        Get("/products/{id}");
        Group<V1EndpointGroup>();
        Summary("Get a product by ID");
    }

    public override async Task HandleAsync(GetProductRequest req, CancellationToken ct)
    {
        var product = await _productService.GetByIdAsync(req.Id, ct);

        if (product == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }

        await SendOkAsync(product, ct);
    }
}

public record GetProductRequest(Guid Id);
```

```csharp
// Endpoints/Products/CreateProductEndpoint.cs
using MasLazu.AspNet.Framework.Endpoint.Endpoints;
using MasLazu.AspNet.Framework.Endpoint.EndpointGroups;
using MyApp.DTOs;
using MyApp.Services;

namespace MyApp.Endpoints.Products;

public class CreateProductEndpoint : BaseEndpoint<CreateProductRequest, ProductDto>
{
    private readonly ProductService _productService;

    public CreateProductEndpoint(ProductService productService)
    {
        _productService = productService;
    }

    public override void Configure()
    {
        Post("/products");
        Group<V1EndpointGroup>();
        Summary("Create a new product");
    }

    public override async Task HandleAsync(CreateProductRequest req, CancellationToken ct)
    {
        var productDto = new ProductDto(
            Guid.Empty, // Will be set by the service
            req.Name,
            req.Description,
            req.Price,
            req.StockQuantity,
            req.Category,
            true, // New products are active by default
            DateTimeOffset.UtcNow,
            null
        );

        var created = await _productService.CreateAsync(productDto, ct);
        await SendCreatedAtAsync<GetProductEndpoint>(new { created.Id }, created, cancellation: ct);
    }
}
```

## Step 7: Register Services

Configure dependency injection in `Program.cs`:

```csharp
// Program.cs
using MasLazu.AspNet.Framework.EfCore.Postgresql.Extensions;
using MasLazu.AspNet.Framework.Endpoint.Extensions;
using MyApp.Data;
using MyApp.Services;
using MyApp.Mapping;

var builder = WebApplication.CreateBuilder(args);

// Add MasLazu.AspNet services
builder.Services.AddMasLazuFramework();
builder.Services.AddMasLazuPostgreSQL<AppDbContext>(builder.Configuration);
builder.Services.AddMasLazuEndpoints();

// Add AutoMapper
builder.Services.AddAutoMapper(typeof(ProductMappingProfile));

// Add application services
builder.Services.AddScoped<ProductService>();

var app = builder.Build();

// Configure pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseMasLazuEndpoints();

app.Run();
```

## Step 8: Run Migrations

Create and apply database migrations:

```bash
# Add migration
dotnet ef migrations add CreateProductTable

# Update database
dotnet ef database update
```

## Step 9: Test Your API

Start your application and test the endpoints:

```bash
dotnet run
```

### Create a Product

```bash
curl -X POST http://localhost:5000/api/v1/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Product",
    "description": "A great product",
    "price": 29.99,
    "stockQuantity": 100,
    "category": "Electronics"
  }'
```

### Get a Product

```bash
curl http://localhost:5000/api/v1/products/{product-id}
```

### Get Products with Pagination

```bash
curl "http://localhost:5000/api/v1/products?page=1&pageSize=10&orderBy=name&orderAscending=true"
```

## Next Steps

Congratulations! You've created your first API with MasLazu.AspNet. Next, you can:

- [Add Authentication](../modules/authentication/setup.md)
- [Implement Advanced Filtering](../examples/advanced-filtering.md)
- [Add Custom Validation](../examples/custom-validation.md)
- [Set up Email Notifications](../utilities/email-sender/overview.md)

## Complete Code

You can find the complete example code in our [GitHub repository](https://github.com/MasLazu/MasLazu.AspNet/tree/main/examples/first-api).
