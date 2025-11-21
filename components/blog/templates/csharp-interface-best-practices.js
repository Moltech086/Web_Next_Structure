"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Image from "next/image";

const AllPaymentProcessors = ` // Define the interface
public interface IPaymentProcessor
{
    void ProcessPayment(decimal amount);
}
// Implement the interface for PayPal
public class PayPalProcessor : IPaymentProcessor
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine("Processing payment through PayPal.");
    }
}
// Implement the interface for Stripe
public class StripeProcessor : IPaymentProcessor
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine("Processing payment through Stripe.");
    }
} `;
const PaymentService = `
public class PaymentService
{
    private readonly IPaymentProcessor _paymentProcessor;

    public PaymentService(IPaymentProcessor paymentProcessor)
    {
        _paymentProcessor = paymentProcessor;
    }

    public void ProcessOrderPayment(decimal amount)
    {
        Console.WriteLine("Initiating payment...");
        _paymentProcessor.ProcessPayment(amount);
        Console.WriteLine("Payment processed successfully!");
    }
}
// Consume in Main program
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to the Shopping App!");
        
        Console.WriteLine("Select Payment Method: 1. PayPal 2. Stripe");
        string choice = Console.ReadLine();

        IPaymentProcessor paymentProcessor;
        switch (choice)
        {
            case "1":
                paymentProcessor = new PayPalProcessor();
                break;
            case "2":
                paymentProcessor = new StripeProcessor();
                break;
            default:
                Console.WriteLine("Invalid choice. Defaulting to PayPal.");
                paymentProcessor = new PayPalProcessor();
                break;
        }

        var paymentService = new PaymentService(paymentProcessor);
        paymentService.ProcessOrderPayment(100.50M);

        Console.WriteLine("Thank you for shopping with us!");
    }
}`;
const orderServiceCode = `public class OrderService
{
    private readonly PaymentProcessor _paymentProcessor;

    public OrderService()
    {
        // The dependency is created internally
        _paymentProcessor = new PaymentProcessor();
    }

    public void ProcessOrder()
    {
        _paymentProcessor.ProcessPayment(100);
    }
}`;
const constructorInjectionCode = `public class OrderService
{
    private readonly IPaymentProcessor _paymentProcessor;

    public OrderService(IPaymentProcessor paymentProcessor)
    {
        _paymentProcessor = paymentProcessor;
    }

    public void CompleteOrder(decimal amount)
    {
        Console.WriteLine("Completing order...");
        _paymentProcessor.ProcessPayment(amount);
    }
}`;
const programCode = `class Program
{
    static void Main(string[ ] args)
    {
        // Step 1: Create an instance of the dependency
        IPaymentProcessor paymentProcessor = new PaymentProcessor( );

        // Step 2: Inject the dependency into the OrderService
        OrderService orderService = new OrderService(paymentProcessor);

        // Step 3: Use the OrderService
        orderService.ProcessOrder( );

        Console.WriteLine("Order processing complete.");
    }
}`;
const diCode = `builder.Services.AddScoped<PayPalProcessor>();
builder.Services.AddScoped<StripeProcessor>();
builder.Services.AddScoped<Func<string, IPaymentProcessor>>(serviceProvider => key =>
  {
    return key switch
    {
      "PayPal" => serviceProvider.GetRequiredService<PayPalProcessor>(),
      "Stripe" => serviceProvider.GetRequiredService<StripeProcessor>(),
      _ => throw new ArgumentException("Invalid payment processor key.")
    };
});`;
const loggerCode = `// Define a common logging interface
public interface ILogger
{
    void Log(string message);
}
// Implementation for file logging
public class FileLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"File: {message}");
    }
}
// Implementation for database logging
public class DatabaseLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"DB: {message}");
    }
}`;
const applicationCode = `public class Application
{
    private readonly ILogger _logger;
    public Application(ILogger logger)
    {
        _logger = logger;
    }  
    public void Run( )
    {
        _logger.Log("Application has started.");
    }
}`;
const loggerUsageCode = `// Using FileLogger
var fileLogger = new FileLogger( );
var app1 = new Application(fileLogger);
app1.Run( );

// Using DatabaseLogger
var dbLogger = new DatabaseLogger( );
var app2 = new Application(dbLogger);
app2.Run( );`;
const repositoryCode = `// For Customer
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
}
public class CustomerRepository : IRepository<Customer>
{
    public Customer GetById(int id) => new Customer { Id = id, Name = "John Doe" };
    public void Add(Customer entity) => Console.WriteLine($"Customer Added: {entity.Name}");
}

// For Product
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
}
public class ProductRepository : IRepository<Product>
{
    public Product GetById(int id) => new Product { Id = id, Name = "Laptop" };
    public void Add(Product entity) => Console.WriteLine($"Product Added: {entity.Name}");
}`;
const polymorphicRepoCode = `class Program {
    static void Main(string[] args) {
        // Create a list of generic repositories
        var repositories = new List<object>{
            new CustomerRepository(),
            new ProductRepository()
        };

        // Add and retrieve data using polymorphism
        foreach (var repository in repositories)
        {
            if (repository is IRepository<Customer> customerRepo)
            {
                var customer = new Customer { Id = 1, Name = "Alice" };
                customerRepo.Add(customer);
                var fetchedCustomer = customerRepo.GetById(1);
                Console.WriteLine($"Fetched Customer: {fetchedCustomer.Name}");
            }
            else if (repository is IRepository<Product> productRepo)
            {
                var product = new Product { Id = 101, Name = "Smartphone" };
                productRepo.Add(product);
                var fetchedProduct = productRepo.GetById(101);
                Console.WriteLine($"Fetched Product: {fetchedProduct.Name}");
            }
        }
    }
}`;

const WebDesignTricksTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");

  const handleImageClick = (src, alt) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImageSrc("");
    setModalImageAlt("");
  };
  return (
    <>
      <div id="main-content">
        <div className="machinelearning-header-image">
          <Image
            src={AppIcons.SimplifyingSoftwareDevelopmentwithInterfacesInC}
            alt="Simplifying Software Development with Interfaces in C#"
            width={1280}
            height={640}
            onClick={() =>
              handleImageClick(
                AppIcons.SimplifyingSoftwareDevelopmentwithInterfacesInC,
                "Simplifying Software Development with Interfaces in C#"
              )
            }
            style={{ cursor: "pointer", height: "auto" }}
          />
        </div>
        <p>
          Building software that is easy to manage, grow, and update is a goal
          for every developer. Interfaces are a key concept that helps make this
          possible. Interface as a contract or blueprint that a class must
          follow. It doesn’t tell the class how to do something, just what it
          needs to do. This makes your code flexible, organized, and easier to
          work with.
        </p>
        <p>
          Interfaces are useful in many ways. They help divide responsibilities,
          make testing simpler, and let you easily swap one part of your code
          with another. Whether you’re working on a small project or on a big
          system, using interfaces can make your work easier and your code
          stronger.
        </p>
        <p>
          Let’s explore how interfaces can help us to simplify software
          development process.
        </p>

        <p>
          Let’s Understand when we can use the Interface. From following
          example.
        </p>
        <h3 id="separation-of-concerns">
          <strong>1. Separation of Concerns</strong>
        </h3>
        <p>
          Separation of concerns is a way of organizing your code so that each
          part of your application focuses on a <strong>specific job</strong> or{" "}
          <strong>responsibility</strong>.
        </p>
        <p>
          This makes your code easier to understand and maintain. Interfaces are
          ideal for this purpose as they precisely outline the responsibilities
          of each component in your application, without binding them to a
          particular implementation. Let us understand with following Payment
          processing example:
        </p>
        <h4>
          <strong> I.e Payment Processing in Web application.</strong>
        </h4>
        <p>
          If we need to integrate multiple payment gateway in your web
          application, consider it is an online store. We need to integrate
          PayPal and Stripe as payment gateway.
        </p>
        <p>
          Normally, coding is required for each payment gateway to process
          transactions. However, this can be simplified by using an interface
          for payment processing.
        </p>
        <p>
          This interface acts as a “Contract” that all payment processors must
          inherit.
        </p>
        <p>Here’s what it might look like:</p>
        <CodeBlockCustom code={AllPaymentProcessors} language="csharp" />

        <p>
          In the given example, the{" "}
          <span className="package-name">IPaymentProcessor</span>{" "}
          <strong>interface</strong> plays a crucial role in simplifying the
          design and enhancing the flexibility of the payment processing system.
        </p>

        <CodeBlockCustom code={PaymentService} language="csharp" />
        <p>
          With this setup, the payment logic is separate from the rest of your
          application. You don’t need to rewrite your code every time you change
          or add a payment gateway. Just need define the Payment service.
        </p>
        <h4 id="benefit-of-using-this-approach">
          <strong>What is the benefit using this approach ?</strong>
        </h4>
        <ul>
          <li>
            <p>
              <strong>Flexibility:</strong> You can easily add new payment
              processors (like Google Pay or Apple Pay) by simply creating new
              classes that implement the same interface.
            </p>
          </li>
          <li>
            <p>
              <strong>Clean Code:</strong> The payment-related code is isolated,
              so the rest of your application doesn’t have to worry about how
              payments are processed.
            </p>
          </li>
          <li>
            <p>
              <strong>Easier Maintenance:</strong> If you need to update or fix
              an issue with one payment processor, it won’t affect the rest of
              your application.
            </p>
          </li>
          <li>
            <p>
              <strong>Adding New Features Is Simple:</strong> If a client asks
              for a new payment option, you can just create a new implementation
              of <span className="package-name">IPaymentProcessor</span> without
              touching existing code.
            </p>
          </li>
          <li>
            <p>
              <strong>Testing Is Easier:</strong> You can test your checkout
              process without relying on actual payment gateways (more on this
              in the unit testing section).
            </p>
          </li>
        </ul>
        <p>
          By using interfaces, you separate responsibilities in your
          application, making it more organized, adaptable, and future proof.
        </p>
        <h3 id="Dependency">
          <strong>2. Dependency Injection (DI)</strong>
        </h3>
        <p>
          Dependency Injection (DI) is a design pattern that simplifies your
          application by making it more flexible, testable, and modular.
        </p>
        <p>
          The core idea is to remove the responsibility of creating dependencies
          (like classes or services) from the code that uses them. Instead, you
          “inject” these dependencies, often through interfaces, making your
          application easier to update and extend.
        </p>
        <p>
          let’s understand <strong>What is dependency</strong> ?
        </p>
        <ul>
          <ul>
            <li>
              <p>
                Dependency is a class or service object that performs its own
                task.
              </p>
            </li>
            <li>
              <p>Example: logger service, repository, payment processor.</p>
            </li>
            <li>
              <p>
                When a class{" "}
                <strong>directly creates or manages these dependencies</strong>,
                it becomes tightly coupled to them, making it hard to replace,
                test, or extend.
              </p>
            </li>
          </ul>
        </ul>
        <h4 id="how-dependency-injection-works">
          <strong>How Dependency Injection Works</strong>
        </h4>
        <p>
          Without DI, your code might directly create and manage its
          dependencies, which ties it to specific implementations.
        </p>
        <p>
          This makes changes harder and testing more complicated. DI solves this
          by injecting dependencies into your classes from the outside.
        </p>
        <h4>
          <strong>Let’s break it down with an example:</strong>
        </h4>
        <h5 className="mt-0">
          <strong>Order Service</strong>
        </h5>
        <p>
          Imagine you have an order service that handles customer orders and
          needs to process payments. Instead of hardcoding a payment processor
          inside the service, you use DI to inject a payment processor that
          implements the <span>IPaymentProcessor</span> interface.
        </p>
        <h6>
          <strong>
            Here’s what the <span className="highlight">OrderService</span>{" "}
            might look like without DI:
          </strong>
        </h6>
        <CodeBlockCustom code={orderServiceCode} language="csharp" />

        <h6>
          <strong>
            Here, the <span className="package-name">OrderService</span> depends
            on the <span className="package-name">PaymentProcessor</span> class.
            This creates a tight coupling because:
          </strong>
        </h6>

        <ol>
          <li>
            <p>
              If the implementation of <span>PaymentProcessor</span> changes,
              the <span>OrderService</span> needs to be updated.
            </p>
          </li>
          <li>
            <p>
              It becomes hard to test <span>OrderService</span> in isolation
              since it always uses the real <span>PaymentProcessor</span>.
            </p>
          </li>
        </ol>
        <h6>
          <strong>Now, Same example we can create using DI as below :</strong>
        </h6>
        <CodeBlockCustom code={constructorInjectionCode} language="csharp" />
        <p>
          In this setup, <span>OrderService</span> doesn’t care which payment
          processor is used. All it knows is that the processor follows the{" "}
          <span>IPaymentProcessor</span> interface.
        </p>
        <h6>
          <strong>We can consume orderService as below:</strong>
        </h6>
        <CodeBlockCustom code={programCode} language="csharp" />

        <p>
          In above example, “<strong>PaymentProcessor</strong>” Can be any other
          Class or service object.
        </p>
        <CodeBlockCustom
          code={"IPaymentProcessor paymentProcessor = new PaymentProcessor( );"}
          language="csharp"
        />

        <h5>
          <strong>
            Using .NET Core allows us to register services with dependency
            injection.
          </strong>
        </h5>
        <p>
          In modern frameworks like ASP.NET Core, you can use a built-in DI
          container to register your services.
        </p>
        <p>
          Here’s how you can register the IPaymentProcessor{" "}
          <span>IPaymentProcessor</span> with a specific implementation:
        </p>
        <CodeBlockCustom
          code={"services.AddScoped<IPaymentProcessor, PayPalProcessor>( );"}
          language="csharp"
        />

        <p>
          When the application runs, the DI container ensures that wherever{" "}
          <span>IPaymentProcessor</span> is needed, an instance of{" "}
          <span>PayPalProcessor</span> is provided.
        </p>
        <h6>
          <strong>
            If you decide to switch to <span>StripeProcessor</span>, all you
            need to do is update the registration:
          </strong>
        </h6>
        <CodeBlockCustom
          code={"services.AddScoped<IPaymentProcessor, StripeProcessor>( );"}
          language="csharp"
        />
        <h6>
          <strong>If we want to use both we can use as below:</strong>
        </h6>

        <CodeBlockCustom code={diCode} language="csharp" />

        <p>
          This flexibility means you don’t need to modify the{" "}
          <span>OrderService</span> or any other dependent code. The only change
          happens in one central location.
        </p>

        <h5 id="benefits-of-dependency-injection">
          <strong>Benefits of Dependency Injection</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Flexibility:</strong> Easily swap implementations (e.g.,
              PayPal to Stripe) without altering your business logic.
            </p>
          </li>
          <li>
            <p>
              <strong>Testability:</strong> You can replace real implementations
              with mock dependencies during testing.
            </p>
          </li>
          <li>
            <p>
              <strong>Simpler code:</strong> Classes focus on their
              responsibilities without worrying about how dependencies are
              created.
            </p>
          </li>
          <li>
            <p>
              <strong>Centralized Configuration:</strong> All dependency
              management is done in one place (like <span>Startup.cs</span> in
              ASP.NET Core).
            </p>
          </li>
          <li>
            <p>
              <strong>Modularity:</strong> Components are not tightly tied to
              specific implementations, enabling code reuse.
            </p>
          </li>
        </ul>
        <h3 id="supporting-multiple-implementations">
          <strong>
            3. Supporting Multiple Implementations of same context.
          </strong>{" "}
        </h3>
        <p>
          In many applications, the same functionality may need to behave
          differently depending on the context.
        </p>

        <p>
          Interfaces make it easy to create multiple implementations of the same
          operation and dynamically choose the one that suits the situation.
          This flexibility keeps your code clean, organized, and adaptable.
        </p>
        <h4>
          <strong>Real-World Example: Logging in application.</strong>
        </h4>
        <p>
          Let’s say you’re building an application that logs messages. Depending
          on the scenario, you might want to log messages to a file, a database,
          or even an external service. Instead of hardcoding a specific logging
          method, you can use an interface to define a common contract for all
          loggers.
        </p>
        <h5>
          <strong>Let see the example code :</strong>
        </h5>
        <CodeBlockCustom code={loggerCode} language="csharp" />

        <p>
          In the above code, we define the <span>ILogger</span> interface, which
          specifies the contract that all log providers must implement to.
        </p>
        <h5 id="using-multiple-implementations">
          <strong>Using Multiple Implementations</strong>
        </h5>
        <p>
          This configuration allows you to select the appropriate logger at
          runtime. For instance:
        </p>
        <CodeBlockCustom code={applicationCode} language="csharp" />
        <h5>
          <strong>
            Any<span className="highlight"> ILogger</span> implementation can be
            injected into the Application class in the following manner:
          </strong>
        </h5>
        <CodeBlockCustom code={loggerUsageCode} language="csharp" />

        <p>
          This allows you to dynamically switch logging behavior without
          changing the core application logic.
        </p>
        <h5>
          <strong>Benefits of Supporting Multiple Implementations</strong>
        </h5>
        <ul>
          <li>
            <p>
              <strong>Flexibility:</strong> Easily switch behaviors depending on
              the context or environment (e.g., development vs. production).
            </p>
          </li>
          <li>
            <p>
              <strong>Code Reusability:</strong> Shared logic, like logging
              structure, can be reused across multiple implementations.
            </p>
          </li>
          <li>
            <p>
              <strong>Simplified Maintenance:</strong> Adding a new logging
              method (e.g., cloud-based logging) requires minimal changes to
              existing code.
            </p>
          </li>
        </ul>
        <h3 id="polymorphism-with-interfaces">
          <strong>4. Polymorphism with Interfaces</strong>{" "}
        </h3>
        <p>
          <strong> Polymorphism</strong> allows a single interface to represent
          different underlying forms (data types). in C# we can achieve it with
          interface.
        </p>
        <p>
          One of the biggest advantages of using interfaces is that they help
          reduce code duplication and make your code more reusable.
        </p>
        <p>
          By defining common behaviors in interfaces, you create a blueprint
          that can be implemented across multiple projects or modules, saving
          time and effort in the long run.
        </p>
        <h5>
          <strong> Example: </strong>
        </h5>
        <p>
          The provided example demonstrates how polymorphism works with a
          generic interface <span>IRepository&lt;T&gt;</span> and its
          implementation. You can handle multiple repository implementations
          uniformly, regardless of the specific type they operate on.
        </p>

        <ol>
          <li>
            <strong>Define a Common Interface:</strong> The{" "}
            <span>IRepository&lt;T&gt;</span> interface provides a generic
            contract for Repository operations.
            <CodeBlockCustom
              code={`public interface IRepository<T>
              {
              T GetById(int id);
              void Add(T entity);
              }`}
              language="csharp"
            />
          </li>
          <span>IRepository&lt;T&gt;</span> defines the behavior (
          <span>GetById</span>, <span>Add</span>) for all repositories,
          regardless of the type they operate on.
          <li>
            Create a <strong>specific implementation</strong> for Customer and
            Product as below:
            <CodeBlockCustom code={repositoryCode} language="csharp" />
          </li>
          <span>
            The repositories list holds objects of different repository types (
            <span>CustomerRepository</span>, <span>ProductRepository</span>
            ).
          </span>
          <li>
            <strong>Use Polymorphism to Handle Multiple Repositories:</strong>{" "}
            Use the <span>IRepository&lt;T&gt;</span> interface to work with
            different repositories without needing to know their specific types.
            <CodeBlockCustom code={polymorphicRepoCode} language="csharp" />
          </li>
          <li>
            <strong>Using Polymorphism:</strong> The code checks the actual type
            (<span>IRepository&lt;Customer&gt;</span> or{" "}
            <span>IRepository&lt;Product&gt;</span>) and calls the corresponding
            methods.
          </li>
          <li>
            <strong>Flexibility and Extensibility:</strong> Adding a new
            repository type (e.g., <span>OrderRepository</span>) requires
            implementing <span>IRepository&lt;Order&gt;</span>. No changes are
            needed in the processing logic.
          </li>
          <li>
            <strong>Decoupling:</strong> The client code (e.g.,{" "}
            <span>Program</span>) depends only on the{" "}
            <span>IRepository&lt;T&gt;</span> interface, not on the specific
            implementations like <span>CustomerRepository</span> or{" "}
            <span>ProductRepository</span>.
          </li>
        </ol>
        <h3 id="design-patterns-with-interfaces">
          <strong>5. Design Patterns with Interfaces</strong>
        </h3>
        <p>
          Design patterns offer reliable solutions to common software design
          challenges, improving code flexibility and scalabilit
        </p>
        <p>
          Interfaces are key in many patterns, promoting decoupled, modular, and
          testable code. Here are three examples:
        </p>
        <h4>
          <strong>1. Strategy Pattern:</strong>
        </h4>
        <p>
          It’s all about defining a set of behaviors (strategies) that can be
          swapped out without changing the main logic.
        </p>
        <p>
          Here’s a casual example: Imagine you’re building a payment system
          where users can pay with different methods like
        </p>
        <p>
          Here’s a casual example: Imagine you’re building a payment system
          where users can pay with different methods like{" "}
          <strong>Credit Card</strong>, <strong>PayPal</strong>, or{" "}
          <strong>Google Pay</strong>. You don’t want to clutter your code with
          multiple if-else or switch cases for each payment type. Instead, you
          can use the Strategy Pattern with an interface to define a common
          contract for all payment methods.
        </p>
        <p>
          You can refer the example given above related to the payment process
          in <strong>“Separation of Concerns”</strong>.
        </p>
        <h4>
          <strong>2. Repository Pattern:</strong>
        </h4>
        <p>
          The <strong Pattern>Repository Pattern</strong> abstracts the data
          access layer, enabling a clean separation of concerns between the
          business logic and database operations. Interfaces define the contract
          for the repository, ensuring consistent behavior across
          implementations.
        </p>
        <p>
          With the <span>IRepository&lt;T&gt;</span> interface, developers can
          swap implementations for unit tests or migrate from one database
          system to another without altering the business layer. You can refer
          our example given above in section 4.
        </p>
        <h4>
          <strong>3. Factory Pattern:</strong>
        </h4>

        <p>
          The<strong> Factory Pattern</strong> creates objects without
          specifying their concrete classes. It encapsulates object creation
          logic, adhering to the single responsibility and dependency inversion
          principles.
        </p>
        <ul>
          {" "}
          <li>
            Interfaces allow the Factory to return objects that adhere to a
            common contract.
          </li>
          <li>
            The client code remains decoupled from specific implementations,
            making it easier to extend and maintain.{" "}
          </li>
        </ul>

        <p>You can refer the code in Section 2 dependency Injection.</p>
        <h3 id="key-benefits-of-interfaces">
          <strong>Key Benefits of Interfaces</strong>
        </h3>
        <p>
          Here’s a summary of the key benefits that interfaces bring to your
          development process as per above example.
        </p>
        <ul>
          <li>
            <p>
              <strong>Flexibility:</strong> Easily switch between
              implementations without changing application logic.
            </p>
          </li>
          <li>
            <p>
              <strong>Maintainability:</strong> Simplify code structure and
              promote separation of concerns.
            </p>
          </li>
          <li>
            <p>
              <strong>Testability:</strong> Enable mocking for fast, isolated
              unit tests.
            </p>
          </li>
          <li>
            <p>
              <strong>Reusability:</strong> Define shared behaviors for
              consistent implementation across projects.
            </p>
          </li>
          <li>
            <p>
              <strong>Scalability:</strong> Adding new behavior (e.g., a new
              strategy or data source) requires minimal changes.
            </p>
          </li>
          <li>
            <p>
              <strong>Decoupled Code:</strong> Using interfaces ensures that the
              system components interact through contracts, reducing the impact
              of changes in implementations.
            </p>
          </li>
        </ul>

        <h3>
          <strong>Best Practices for Using Interfaces</strong>
        </h3>
        <p>Here are some best practices to maximize their effectiveness:</p>

        <ol>
          <li>
            <strong>
              Keep Interfaces Focused (Single Responsibility Principle):
            </strong>{" "}
            Each interface should represent a single, well-defined
            responsibility. Avoid mixing unrelated functionalities within the
            same interface.
            <CodeBlockCustom
              code={`public interface IFileReader {
                  string ReadFile(string filePath);
                }
                public interface IFileWriter {
                  void WriteFile(string filePath, string content);
                }`}
              language="csharp"
            />
          </li>

          <li>
            <strong>Anti-pattern</strong>: Combining reading and writing
            responsibilities in a single interface like{" "}
            <span>IFileHandler</span>.
          </li>
          <li>
            <strong>Use Meaningful Names:</strong> Interfaces should have clear,
            descriptive names that reflect their purpose, making the codebase
            self-explanatory. e.g., <span>ILogger</span>, <span>IShape</span>,{" "}
            <span>IDataProcessor</span>, avoid vague names like{" "}
            <span>IMyInterface</span>.
          </li>

          <li>
            <strong>Avoid Over-Engineering with Unnecessary Interfaces:</strong>{" "}
            Avoid creating interfaces just for the sake of it. Interfaces should
            only be introduced when multiple implementations are needed or for
            abstraction. Use interfaces where they genuinely add value, such as
            enabling dependency injection or mocking in tests.
          </li>

          <li>
            <strong>Prefer Interfaces over Abstract Classes:</strong> (When No
            Implementation is Needed) Interfaces define pure contracts, while
            abstract classes combine contracts with partial implementation.
            <br></br>
            Reserve abstract classes for scenarios where you need common base
            functionality.
            <CodeBlockCustom
              code={`public interface IAuthenticationService {
  bool Authenticate(string username, string password);
}

public abstract class AuthenticationBase {
  public abstract bool Authenticate(string username, string password);
  public void LogAccessAttempt(string username) => Console.WriteLine($"{username} attempted login.");
}`}
              language="csharp"
            />
            Use interfaces if the base functionality (
            <span>LogAccessAttempt</span>) is not required across all
            implementations.
          </li>
        </ol>
        <h3 id="common-mistakes-when-using-interfaces">
          <strong>Common Mistakes When Using Interfaces</strong>
        </h3>

        <ol>
          <li>
            <strong>Creating Too Many Interfaces Without Clear Purpose:</strong>{" "}
            Use interfaces only where they solve a specific problem, like
            enabling polymorphism or abstraction.
          </li>

          <li>
            <strong>Misusing Interface Segregation:</strong> Violating the
            Interface Segregation Principle (ISP) by creating large, bloated
            interfaces that force classes to implement unused methods.
            <CodeBlockCustom
              code={`public interface IMultiFunctionalPrinter {
  void Print( );
  void Scan( );
  void Fax( );
}`}
              language="csharp"
            />
            A <span>BasicPrinter</span> class may not need <span>Scan</span> or{" "}
            <span>Fax</span>.
            <CodeBlockCustom
              code={`public interface IPrinter { void Print( ); }
public interface IScanner { void Scan( ); }
public interface IFax { void Fax( ); }`}
              language="csharp"
            />
          </li>

          <li>
            <strong>Using Interfaces for Constants:</strong> Defining constants
            in an interface is an anti-pattern because interfaces are meant to
            define behavior, not hold data.
            <CodeBlockCustom
              code={`//Do not use below code
public interface IConstants {
  int MaxItems = 100;
  string AppName = "MyApp";
}`}
              language="csharp"
            />
            <CodeBlockCustom
              code={`//Use this
public static class AppConstants {
  public const int MaxItems = 100;
  public const string AppName = "MyApp";
}`}
              language="csharp"
            />
          </li>

          <li>
            <strong>Coupling Interfaces with Specific Frameworks:</strong>{" "}
            Tightly coupling an interface to a specific framework or library
            limits flexibility and reusability. Keep interfaces generic and
            abstract to allow for different implementations.
            <CodeBlockCustom
              code={`//Below code shows it"s attached with Entity Framework lib. Do not use it.
public interface IEntityFrameworkRepository {
  IQueryable<T> GetAll();
}`}
              language="csharp"
            />
            <CodeBlockCustom
              code={`//Use as generic method to define behaviour
public interface IRepository<T> {
  IEnumerable<T> GetAll();
}`}
              language="csharp"
            />
            This ensures the interface can work with different ORMs or data
            sources.
          </li>
        </ol>
        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>
        <p>
          To wrap up, interfaces are not just theoretical — they are useful
          tools that make software development easier. They help you write code
          that is cleaner, easier to maintain, and easier to test, whether
          you’re building small apps or big systems. Using interfaces in your
          projects helps set you up for long-term success.
        </p>

        {/* blog content ends here */}
      </div>

      {/* ✅ Image Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalImageAlt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={modalImageSrc} alt={modalImageAlt} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WebDesignTricksTemplate;
