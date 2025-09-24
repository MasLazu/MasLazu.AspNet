---
sidebar_position: 2
---

# Storage Utility

A unified, dependency injection-friendly storage abstraction library for ASP.NET Core applications that supports multiple cloud storage providers through a single, consistent API.

## 🎯 Purpose

The Storage utility provides a powerful abstraction layer over various cloud storage providers, eliminating the need to build complex connection strings manually. It wraps the excellent [FluentStorage](https://github.com/robinrodricks/FluentStorage) library with a clean, strongly-typed configuration interface that integrates seamlessly with ASP.NET Core's dependency injection system.

## 📦 Package Structure

```mermaid
graph TD
    A[MasLazu.AspNet.Storage<br/>Main Package] --> B[FluentStorage<br/>Core Library]
    A --> C[Provider Extensions<br/>AWS, Azure, GCP, etc.]
    A --> D[ASP.NET Core<br/>DI Integration]

    B --> E[IBlobStorage<br/>Unified Interface]
    C --> E
    D --> F[Service Registration<br/>AddMasLazuStorage()]

    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#fff3e0
    style D fill:#e8f5e8
    style E fill:#fce4ec
    style F fill:#f1f8e9
```

## 🚀 Installation

```bash
dotnet add package MasLazu.AspNet.Storage
```

## ⚙️ Configuration

### **1. Service Registration**

```csharp
// Program.cs
var builder = WebApplication.CreateBuilder(args);

// Add storage with configuration
builder.Services.AddMasLazuStorage(builder.Configuration);

var app = builder.Build();
```

### **2. Configuration Options**

The library supports 13+ storage providers, each with strongly-typed configuration:

#### **Amazon S3**

```json
{
  "Storage": {
    "Provider": "S3",
    "S3": {
      "AccessKey": "your-access-key",
      "SecretKey": "your-secret-key",
      "BucketName": "your-bucket-name",
      "Region": "us-east-1",
      "ServiceUrl": "https://s3.amazonaws.com"
    }
  }
}
```

#### **MinIO (S3-Compatible)**

```json
{
  "Storage": {
    "Provider": "MinIO",
    "MinIO": {
      "AccessKey": "your-access-key",
      "SecretKey": "your-secret-key",
      "BucketName": "your-bucket-name",
      "Endpoint": "http://localhost:9000"
    }
  }
}
```

#### **DigitalOcean Spaces**

```json
{
  "Storage": {
    "Provider": "DigitalOceanSpaces",
    "DigitalOceanSpaces": {
      "AccessKey": "your-access-key",
      "SecretKey": "your-secret-key",
      "BucketName": "your-bucket-name",
      "Region": "nyc3"
    }
  }
}
```

#### **Azure Blob Storage**

```json
{
  "Storage": {
    "Provider": "AzureBlob",
    "AzureBlob": {
      "ConnectionString": "AccountName=youraccount;AccountKey=yourkey;",
      "ContainerName": "your-container",
      "BlobServiceUrl": "https://youraccount.blob.core.windows.net"
    }
  }
}
```

#### **Azure Data Lake Gen2**

```json
{
  "Storage": {
    "Provider": "AzureDataLake",
    "AzureDataLake": {
      "AccountName": "youraccount",
      "AccountKey": "yourkey",
      "FileSystem": "your-filesystem"
    }
  }
}
```

#### **Google Cloud Storage**

```json
{
  "Storage": {
    "Provider": "GoogleCloud",
    "GoogleCloud": {
      "BucketName": "your-bucket-name",
      "CredentialsJson": "{ \"type\": \"service_account\", \"project_id\": \"your-project\", ... }",
      "ProjectId": "your-project-id"
    }
  }
}
```

#### **Azure Key Vault**

```json
{
  "Storage": {
    "Provider": "AzureKeyVault",
    "AzureKeyVault": {
      "VaultName": "your-vault-name",
      "ClientId": "your-client-id",
      "ClientSecret": "your-client-secret",
      "TenantId": "your-tenant-id"
    }
  }
}
```

#### **Local File System**

```json
{
  "Storage": {
    "Provider": "Local",
    "Local": {
      "RootPath": "/path/to/storage/directory"
    }
  }
}
```

#### **In-Memory Storage**

```json
{
  "Storage": {
    "Provider": "InMemory",
    "InMemory": {
      "Name": "my-memory-storage"
    }
  }
}
```

#### **FTP**

```json
{
  "Storage": {
    "Provider": "Ftp",
    "Ftp": {
      "Host": "ftp.example.com",
      "Port": 21,
      "Username": "your-username",
      "Password": "your-password",
      "RootPath": "/optional/root/path"
    }
  }
}
```

#### **SFTP**

```json
{
  "Storage": {
    "Provider": "Sftp",
    "Sftp": {
      "Host": "sftp.example.com",
      "Port": 22,
      "Username": "your-username",
      "Password": "your-password",
      "PrivateKeyPath": "/path/to/private/key",
      "RootPath": "/optional/root/path"
    }
  }
}
```

#### **ZIP Archive**

```json
{
  "Storage": {
    "Provider": "Zip",
    "Zip": {
      "Path": "/path/to/archive.zip"
    }
  }
}
```

#### **Databricks File System**

```json
{
  "Storage": {
    "Provider": "Databricks",
    "Databricks": {
      "WorkspaceUrl": "https://your-workspace.cloud.databricks.com",
      "Token": "your-databricks-token",
      "ClusterId": "your-cluster-id"
    }
  }
}
```

## 🔧 Usage Examples

### **1. Basic File Operations**

```csharp
public class FileStorageService
{
    private readonly IBlobStorage _storage;

    public FileStorageService(IBlobStorage storage)
    {
        _storage = storage;
    }

    // Upload a file
    public async Task UploadFileAsync(string fileName, Stream content)
    {
        await _storage.WriteAsync(fileName, content);
    }

    // Download a file
    public async Task<Stream> DownloadFileAsync(string fileName)
    {
        return await _storage.OpenReadAsync(fileName);
    }

    // Check if file exists
    public async Task<bool> FileExistsAsync(string fileName)
    {
        return await _storage.ExistsAsync(fileName);
    }

    // Delete a file
    public async Task DeleteFileAsync(string fileName)
    {
        await _storage.DeleteAsync(fileName);
    }
}
```

### **2. Advanced Operations**

```csharp
public class AdvancedStorageService
{
    private readonly IBlobStorage _storage;

    public AdvancedStorageService(IBlobStorage storage)
    {
        _storage = storage;
    }

    // List files with pagination
    public async Task<List<string>> ListFilesAsync(string prefix = "", int maxResults = 100)
    {
        var blobs = await _storage.ListAsync(new ListOptions
        {
            Prefix = prefix,
            MaxResults = maxResults
        });

        return blobs.Select(b => b.FullPath).ToList();
    }

    // Upload with metadata
    public async Task UploadWithMetadataAsync(string fileName, Stream content, Dictionary<string, string> metadata)
    {
        var blob = new Blob(fileName, content);
        blob.Metadata = metadata;
        await _storage.WriteAsync(blob);
    }

    // Copy files between locations
    public async Task CopyFileAsync(string sourcePath, string destinationPath)
    {
        await _storage.CopyAsync(sourcePath, destinationPath);
    }

    // Move/rename files
    public async Task MoveFileAsync(string sourcePath, string destinationPath)
    {
        await _storage.MoveAsync(sourcePath, destinationPath);
    }
}
```

### **3. File Upload Controller**

```csharp
[ApiController]
[Route("api/files")]
public class FileController : ControllerBase
{
    private readonly IBlobStorage _storage;

    public FileController(IBlobStorage storage)
    {
        _storage = storage;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> UploadFile(IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file uploaded");

        var fileName = $"{Guid.NewGuid()}_{file.FileName}";
        var filePath = $"uploads/{fileName}";

        using var stream = file.OpenReadStream();
        await _storage.WriteAsync(filePath, stream);

        return Ok(new { FileName = fileName, Path = filePath });
    }

    [HttpGet("download/{fileName}")]
    public async Task<IActionResult> DownloadFile(string fileName)
    {
        var filePath = $"uploads/{fileName}";

        if (!await _storage.ExistsAsync(filePath))
            return NotFound();

        var stream = await _storage.OpenReadAsync(filePath);
        return File(stream, "application/octet-stream", fileName);
    }

    [HttpDelete("{fileName}")]
    public async Task<IActionResult> DeleteFile(string fileName)
    {
        var filePath = $"uploads/{fileName}";
        await _storage.DeleteAsync(filePath);
        return NoContent();
    }
}
```

### **4. Image Processing Service**

```csharp
public class ImageStorageService
{
    private readonly IBlobStorage _storage;

    public ImageStorageService(IBlobStorage storage)
    {
        _storage = storage;
    }

    public async Task<string> UploadAndResizeImageAsync(IFormFile image, int maxWidth = 800, int maxHeight = 600)
    {
        // Generate unique filename
        var extension = Path.GetExtension(image.FileName);
        var fileName = $"images/{Guid.NewGuid()}{extension}";

        // Process image (resize, optimize, etc.)
        using var originalStream = image.OpenReadStream();
        using var processedStream = await ProcessImageAsync(originalStream, maxWidth, maxHeight);

        // Upload processed image
        await _storage.WriteAsync(fileName, processedStream);

        return fileName;
    }

    private async Task<Stream> ProcessImageAsync(Stream inputStream, int maxWidth, int maxHeight)
    {
        // Image processing logic (using ImageSharp, SkiaSharp, etc.)
        // This is a simplified example
        var outputStream = new MemoryStream();

        // Process image here...

        outputStream.Position = 0;
        return outputStream;
    }
}
```

### **5. Backup Service**

```csharp
public class BackupService
{
    private readonly IBlobStorage _primaryStorage;
    private readonly IBlobStorage _backupStorage;

    public BackupService(IBlobStorage primaryStorage, IBlobStorage backupStorage)
    {
        _primaryStorage = primaryStorage;
        _backupStorage = backupStorage;
    }

    public async Task BackupFilesAsync(string prefix = "")
    {
        var files = await _primaryStorage.ListAsync(new ListOptions { Prefix = prefix });

        foreach (var file in files)
        {
            using var stream = await _primaryStorage.OpenReadAsync(file.FullPath);
            await _backupStorage.WriteAsync($"backup/{file.FullPath}", stream);
        }
    }

    public async Task RestoreFilesAsync(string prefix = "")
    {
        var backupFiles = await _backupStorage.ListAsync(new ListOptions { Prefix = $"backup/{prefix}" });

        foreach (var file in backupFiles)
        {
            var originalPath = file.FullPath.Replace("backup/", "");
            using var stream = await _backupStorage.OpenReadAsync(file.FullPath);
            await _primaryStorage.WriteAsync(originalPath, stream);
        }
    }
}
```

## 🏗️ Architecture Details

### **Configuration Classes**

```csharp
public class StorageConfiguration
{
    public string Provider { get; set; } = string.Empty;
    public S3Configuration? S3 { get; set; }
    public MinIOConfiguration? MinIO { get; set; }
    public DigitalOceanSpacesConfiguration? DigitalOceanSpaces { get; set; }
    public AzureBlobConfiguration? AzureBlob { get; set; }
    public AzureDataLakeConfiguration? AzureDataLake { get; set; }
    public AzureServiceFabricConfiguration? AzureServiceFabric { get; set; }
    public GoogleCloudConfiguration? GoogleCloud { get; set; }
    public AzureKeyVaultConfiguration? AzureKeyVault { get; set; }
    public DatabricksConfiguration? Databricks { get; set; }
    public LocalConfiguration? Local { get; set; }
    public InMemoryConfiguration? InMemory { get; set; }
    public ZipConfiguration? Zip { get; set; }
    public FtpConfiguration? Ftp { get; set; }
    public SftpConfiguration? Sftp { get; set; }
}
```

### **Service Registration**

```csharp
public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddMasLazuStorage(this IServiceCollection services, IConfiguration configuration)
    {
        // FluentValidation integration
        services.AddFluentValidationAutoValidation();
        services.AddValidatorsFromAssemblyContaining<StorageConfigurationValidator>();

        // Configuration binding with validation
        services.AddOptions<StorageConfiguration>()
            .Configure(o => configuration.GetSection("Storage").Bind(o))
            .ValidateOnStart();

        // Provider-specific storage factory
        services.AddSingleton(sp =>
        {
            var config = sp.GetRequiredService<IOptions<StorageConfiguration>>().Value;
            return config.Provider switch
            {
                "S3" => CreateS3Storage(config.S3!),
                "MinIO" => CreateMinIOStorage(config.MinIO!),
                "AzureBlob" => CreateAzureStorage(config.AzureBlob!),
                // ... other providers
                _ => throw new InvalidOperationException($"Unsupported storage provider: {config.Provider}")
            };
        });

        return services;
    }
}
```

## 🧪 Testing Support

### **1. In-Memory Storage for Testing**

```json
{
  "Storage": {
    "Provider": "InMemory",
    "InMemory": {
      "Name": "test-storage"
    }
  }
}
```

### **2. Local File System for Development**

```json
{
  "Storage": {
    "Provider": "Local",
    "Local": {
      "RootPath": "./test-storage"
    }
  }
}
```

### **3. Unit Testing Example**

```csharp
public class FileStorageServiceTests
{
    private readonly IBlobStorage _storage;
    private readonly FileStorageService _service;

    public FileStorageServiceTests()
    {
        // Use in-memory storage for testing
        _storage = StorageFactory.Blobs.InMemory("test");
        _service = new FileStorageService(_storage);
    }

    [Fact]
    public async Task UploadFileAsync_ValidFile_StoresSuccessfully()
    {
        // Arrange
        var fileName = "test.txt";
        var content = "Hello, World!"u8.ToArray();
        using var stream = new MemoryStream(content);

        // Act
        await _service.UploadFileAsync(fileName, stream);

        // Assert
        Assert.True(await _storage.ExistsAsync(fileName));
    }
}
```

## 🔒 Security Considerations

### **1. Credential Management**

- Store credentials securely (Azure Key Vault, AWS Secrets Manager, etc.)
- Use managed identities when possible
- Rotate credentials regularly
- Never commit credentials to source control

### **2. Access Control**

- Implement proper authorization checks
- Use signed URLs for temporary access
- Validate file types and sizes
- Implement rate limiting

### **3. Data Protection**

- Encrypt sensitive files at rest
- Use HTTPS for all storage operations
- Implement proper backup strategies
- Monitor access patterns

## 📊 Performance Optimization

### **1. Connection Pooling**

```csharp
// Configure connection pooling for better performance
builder.Services.Configure<StorageConfiguration>(config =>
{
    // Provider-specific optimizations
});
```

### **2. Caching Strategy**

```csharp
public class CachedStorageService
{
    private readonly IBlobStorage _storage;
    private readonly IMemoryCache _cache;

    public async Task<Stream> GetFileWithCacheAsync(string fileName)
    {
        if (_cache.TryGetValue(fileName, out Stream cachedStream))
        {
            return cachedStream;
        }

        var stream = await _storage.OpenReadAsync(fileName);
        _cache.Set(fileName, stream, TimeSpan.FromMinutes(30));
        return stream;
    }
}
```

### **3. Batch Operations**

```csharp
public async Task BatchUploadAsync(Dictionary<string, Stream> files)
{
    var tasks = files.Select(kvp =>
        _storage.WriteAsync(kvp.Key, kvp.Value));

    await Task.WhenAll(tasks);
}
```

## 🔧 Advanced Configuration

### **1. Custom Storage Factory**

```csharp
public static IServiceCollection AddCustomStorage(this IServiceCollection services, Func<IServiceProvider, IBlobStorage> factory)
{
    services.AddSingleton(factory);
    return services;
}

// Usage
builder.Services.AddCustomStorage(sp =>
{
    var config = sp.GetRequiredService<IOptions<StorageConfiguration>>().Value;
    // Custom storage creation logic
    return StorageFactory.Blobs.InMemory("custom");
});
```

### **2. Multiple Storage Providers**

```csharp
public class MultiStorageService
{
    private readonly IBlobStorage _primaryStorage;
    private readonly IBlobStorage _backupStorage;
    private readonly IBlobStorage _archiveStorage;

    public MultiStorageService(
        IBlobStorage primaryStorage,
        IBlobStorage backupStorage,
        IBlobStorage archiveStorage)
    {
        _primaryStorage = primaryStorage;
        _backupStorage = backupStorage;
        _archiveStorage = archiveStorage;
    }

    public async Task UploadWithBackupAsync(string fileName, Stream content)
    {
        // Upload to primary storage
        await _primaryStorage.WriteAsync(fileName, content);

        // Backup to secondary storage
        await _backupStorage.WriteAsync($"backup/{fileName}", content);

        // Archive old versions
        await _archiveStorage.WriteAsync($"archive/{DateTime.UtcNow:yyyy/MM/dd}/{fileName}", content);
    }
}
```

### **3. Storage Monitoring**

```csharp
public class StorageMonitorService : BackgroundService
{
    private readonly IBlobStorage _storage;
    private readonly ILogger<StorageMonitorService> _logger;

    public StorageMonitorService(IBlobStorage storage, ILogger<StorageMonitorService> logger)
    {
        _storage = storage;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                var files = await _storage.ListAsync();
                _logger.LogInformation($"Storage contains {files.Count} files");

                // Additional monitoring logic
                // - Check storage usage
                // - Validate file integrity
                // - Send alerts if needed

                await Task.Delay(TimeSpan.FromHours(1), stoppingToken);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error monitoring storage");
            }
        }
    }
}
```

## 📁 Project Structure

```
MasLazu.AspNet.Storage/
├── src/
│   └── MasLazu.AspNet.Storage/
│       ├── Configurations/
│       │   ├── StorageConfiguration.cs
│       │   ├── S3Configuration.cs
│       │   ├── AzureBlobConfiguration.cs
│       │   ├── GoogleCloudConfiguration.cs
│       │   └── ... (other provider configs)
│       ├── Extensions/
│       │   └── ServiceCollectionExtensions.cs
│       ├── Validators/
│       │   └── StorageConfigurationValidator.cs
│       └── MasLazu.AspNet.Storage.csproj
├── test/
│   └── MasLazu.AspNet.Storage.Tests/
└── README.md
```

## ✅ Best Practices

### ✅ **Configuration Do's**

- Use strongly-typed configuration classes
- Validate configuration on startup
- Store sensitive data securely
- Use environment-specific settings

### ❌ **Configuration Don'ts**

- Don't hardcode connection strings
- Don't store credentials in source control
- Don't skip configuration validation
- Don't use development settings in production

### ✅ **Usage Do's**

- Use dependency injection for storage services
- Implement proper error handling
- Validate file types and sizes
- Use async/await for all operations
- Implement logging and monitoring

### ❌ **Usage Don'ts**

- Don't block on async operations
- Don't trust user-provided filenames
- Don't store large files in memory
- Don't skip authorization checks
- Don't ignore storage operation errors

## 🔗 Integration Examples

### **With File Upload API**

```csharp
[ApiController]
[Route("api/files")]
public class FileUploadController : ControllerBase
{
    private readonly IBlobStorage _storage;

    [HttpPost("upload")]
    public async Task<IActionResult> Upload(IFormFile file)
    {
        var fileName = $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";
        using var stream = file.OpenReadStream();
        await _storage.WriteAsync(fileName, stream);

        return Ok(new { FileName = fileName });
    }
}
```

### **With User Avatar Service**

```csharp
public class UserAvatarService
{
    private readonly IBlobStorage _storage;
    private readonly IUserService _userService;

    public async Task<string> UploadAvatarAsync(Guid userId, IFormFile avatar)
    {
        var fileName = $"avatars/{userId}.jpg";

        using var stream = avatar.OpenReadStream();
        // Process image (resize, crop, etc.)
        var processedStream = await ProcessAvatarImageAsync(stream);

        await _storage.WriteAsync(fileName, processedStream);

        // Update user profile
        await _userService.UpdateAvatarAsync(userId, fileName);

        return fileName;
    }
}
```

### **With Document Management**

```csharp
public class DocumentService
{
    private readonly IBlobStorage _storage;
    private readonly IDocumentRepository _repository;

    public async Task<Document> UploadDocumentAsync(DocumentUploadRequest request)
    {
        var document = new Document
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            FileName = $"{Guid.NewGuid()}{Path.GetExtension(request.File.FileName)}",
            ContentType = request.File.ContentType,
            Size = request.File.Length,
            UploadedAt = DateTime.UtcNow
        };

        using var stream = request.File.OpenReadStream();
        await _storage.WriteAsync(document.FileName, stream);

        await _repository.AddAsync(document);

        return document;
    }
}
```

## 🎯 Next Steps

1. **[EmailSender Utility](../emailsender.md)** - Professional email delivery
2. **[Framework Overview](../../framework/overview.md)** - Core framework concepts
3. **[Examples](../../examples/overview.md)** - Complete implementation examples

## 📚 Related Documentation

- [Utilities Overview](../overview.md) - All available utilities
- [EmailSender Utility](../emailsender.md) - Email delivery solution
- [Framework Application Layer](../../framework/application.md) - Base service patterns
- [Configuration Best Practices](../../examples/configuration-best-practices.md) - Configuration guidelines
