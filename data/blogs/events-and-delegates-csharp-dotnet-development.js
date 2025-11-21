import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "events-and-delegates-csharp-dotnet-development",

  // Add meta configuration
  metaConfig: {
    title:
      "Events and Delegates in C# – Advanced .NET Patterns ",
    description:
      "Explore Events and Delegates in C# and .NET—learn how Moltech’s Dallas team builds flexible, decoupled, responsive apps for USA & Canada businesses using advanced middleware patterns.",
    canonical: "/blog/events-and-delegates-csharp-dotnet-development-dallas",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/events-and-delegates-csharp-dotnet-development-dallas-og.webp`,
    twitterImage: `${BASE_URL}/images/meta/events-and-delegates-csharp-dotnet-development-dallas-og.webp`,
    keywords: [
      "C# events",
      "C# delegates",
      ".NET delegates",
      ".NET events",
      "C# design patterns",
      "middleware architecture",
      "software integration",
      "Moltech Dallas",
      "USA .NET development",
      "event-driven programming",
    ],
    section: "Technology",
    publishedTime: "2025-05-26T00:00:00+00:00",
  },

  heroData: {
    title: "Events and Delegates",
    highlight: "in C#",
    description:
      "In C#, events and delegates are key to creating flexible and responsive programs. Delegates allow methods to be passed as parameters, while events enable decoupled communication between components in real-time systems.",
    author: "Moltech Solutions Inc.",
    date: "Jun 25, 2025",
    stats: [
      {
        icon: "mdi:gesture-tap-button",
        title: "80% Improved Interactivity",
        desc: "Events enable real-time responses to user and system actions.",
      },
      {
        icon: "mdi:repeat-variant",
        title: "60% Reusable Code",
        desc: "Delegates help decouple logic for better reusability and testing.",
      },
      {
        icon: "mdi:source-branch",
        title: "70% Modular Architecture",
        desc: "Event-driven patterns make your code more maintainable and scalable.",
      },
    ],
  },

  tableOfContents: [
    
    {
      id: "what-are-delegates-and-events",
      title: "What are Delegates and Events?",
      level: 1,
    },
    {
      id: "how-to-use-events-and-delegates",
      title: "How to Use Events and Delegates?",
      level: 1,
    },
    {
      id: "when-to-use-events-and-delegates",
      title: "When Should You Use Events and Delegates?",
      level: 1,
    },
    {
      id: "where-are-events-and-delegates-used",
      title: "Where are Events and Delegates Used?",
      level: 1,
    },
    {
      id: "advantages-and-disadvantages",
      title: "Advantages and Disadvantages of Events and Delegates",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "C# Events",
    "C# Delegates",
    "Event-Driven Programming",
    "Action and Func",
    "Observer Pattern",
    "Real-Time Systems",
    "Callback Functions",
    "Multicast Delegates",
    "Loose Coupling",
    "C# Programming",
  ],
  codeSnippets: {
    delegateSyntaxExample: `public delegate ReturnType DelegateName(ParameterType1 parameter1, ParameterType2 parameter2, ...);`,
    eventDeclarationExample: `public event DelegateType EventName;`,
    customEventExample: `public delegate void CustomEventHandler(int value); // Define a custom delegate
public event CustomEventHandler OnValueChanged; // Declare an event using the custom delegate`,
    delegateOperationExample: `using System;
public class ArithmeticOperations
{
  // Define a delegate for arithmetic operations
  public delegate int Operation(int a, int b);

  // Method that accepts an Operation delegate as a parameter
  public int ExecuteOperation(int x, int y, Operation operation)
  {
    return operation(x, y); // Invokes the passed method
  }

  // Methods that match the Operation delegate signature
  public int Add(int a, int b) { return a + b; }
  public int Subtract(int a, int b) { return a - b; }
  public int Multiply(int a, int b) { return a * b; }
}

public class Program
{
  public static void Main()
  {
    ArithmeticOperations operations = new ArithmeticOperations();

    int sum = operations.ExecuteOperation(5, 3, operations.Add);
    int difference = operations.ExecuteOperation(5, 3, operations.Subtract);
    int product = operations.ExecuteOperation(5, 3, operations.Multiply);

    Console.WriteLine("Addition: " + sum);
    Console.WriteLine("Subtraction: " + difference);
    Console.WriteLine("Multiplication: " + product);
  }
}`,
    delegateWithEventExample: `using System;
public class ArithmeticOperations
{
  public delegate int Operation(int a, int b);
  public event Operation OnOperationPerformed;

  public int ExecuteOperation(int x, int y, Operation operation)
  {
    int result = operation(x, y);
    OnOperationPerformed?.Invoke(x, y);
    return result;
  }

  public int Add(int a, int b) => a + b;
  public int Subtract(int a, int b) => a - b;
  public int Multiply(int a, int b) => a * b;
}

public class Program
{
  public static void Main()
  {
    ArithmeticOperations operations = new ArithmeticOperations();

    operations.OnOperationPerformed += (a, b) =>
    {
      Console.WriteLine("Operation performed with inputs " + a + " and " + b);
    };

    int sum = operations.ExecuteOperation(5, 3, operations.Add);
    int difference = operations.ExecuteOperation(5, 3, operations.Subtract);
    int product = operations.ExecuteOperation(5, 3, operations.Multiply);

    Console.WriteLine("Addition Result: " + sum);
    Console.WriteLine("Subtraction Result: " + difference);
    Console.WriteLine("Multiplication Result: " + product);
  }
}`,
    actionEventExample: `public class EventPublisher
{
  public event Action<string> ProcessCompleted;

  public void StartProcess()
  {
    Console.WriteLine("Process Started.");
    ProcessCompleted?.Invoke("Process Completed Successfully!");
  }
}

public class EventSubscriber
{
  public void OnProcessCompleted(string message)
  {
    Console.WriteLine(message);
  }
}`,
    eventSubscriptionExample: `var publisher = new EventPublisher();
var subscriber = new EventSubscriber();

publisher.ProcessCompleted += subscriber.OnProcessCompleted;
publisher.StartProcess();`,
  },
};
