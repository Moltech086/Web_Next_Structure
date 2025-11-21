"use client";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Image from "next/image";

// code block data
const enumerableExample = `IEnumerable<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
foreach (var number in numbers)
{
    Console.WriteLine(number); // Outputs each number
}`;
const iCollectionExample = `ICollection<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
numbers.Add(6); // Adds an element
Console.WriteLine(numbers.Count); // Outputs 6`;
const fullEnumerableCode = `using System;
using System.Collections.Generic;

class Program
{
  static void Main()
  {
    IEnumerable<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

    foreach (var number in numbers)
    {
      Console.WriteLine(number); // Just reading each item
    }
  }
}`;

const simulatedIEnumerableCode = `using System;
using System.Collections.Generic;

class Program
{
  static void Main()
  {
    // Simulate retrieving data from a database or API
    IEnumerable<string> dataFromDatabase = GetData();

    // Loop through the data using IEnumerable
    foreach (var item in dataFromDatabase)
    {
      Console.WriteLine(item);
    }
  }

  // Simulated method to return data
  static IEnumerable<string> GetData()
  {
    // In a real-world application, this might query a database or call an API
    return new List<string> { "Item 1", "Item 2", "Item 3", "Item 4" };
  }
}`;
const yieldReturnExample = `public static IEnumerable<int> GetSquares(int max)
{
  for (int i = 1; i <= max; i++)
  {
    yield return i * i;
  }
}

var squares = GetSquares(5);
foreach (var square in squares)
{
  Console.WriteLine(square);
}`;
const linqEvenNumbersExample = `IEnumerable<int> evenNumbers = Enumerable.Range(1, 10).Where(n => n % 2 == 0);
foreach (var number in evenNumbers)
{
  Console.WriteLine(number); // Outputs even numbers between 1 and 10
}`;
const iCollectionNamesExample = `ICollection<string> names = new List<string> { "Alice", "Bob" };
names.Add("Charlie");
names.Remove("Bob");

foreach (var name in names)
{
  Console.WriteLine(name); // Outputs "Alice" and "Charlie"
}`;
const iCollectionCountExample = `ICollection<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
Console.WriteLine($"Number of items: {numbers.Count}"); // Outputs "Number of items: 5"`;
const iCollectionContainsExample = `ICollection<string> colors = new List<string> { "Red", "Green", "Blue" };
if (colors.Contains("Green"))
{
    Console.WriteLine("Green is in the collection!");
}`;
const customCollectionCode = `public class CustomCollection<T> : ICollection<T>
{
  private List<T> _items = new List<T>();

  public int Count => _items.Count;
  public bool IsReadOnly => false;

  public void Add(T item) => _items.Add(item);
  public void Clear() => _items.Clear();
  public bool Contains(T item) => _items.Contains(item);
  public void CopyTo(T[] array, int arrayIndex) => _items.CopyTo(array, arrayIndex);
  public bool Remove(T item) => _items.Remove(item);

  public IEnumerator<T> GetEnumerator() => _items.GetEnumerator();
  IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}`;
const iCollectionPolymorphism = `using System;
using System.Collections.Generic;

class Program
{
  static void Main()
  {
    // Using ICollection with a List<T>
    ICollection<int> numbersList = new List<int> { 1, 2, 3 };
    ModifyCollection(numbersList);

    // Using ICollection with a HashSet<T>
    ICollection<int> numbersSet = new HashSet<int> { 10, 20, 30 };
    ModifyCollection(numbersSet);
  }

  static void ModifyCollection(ICollection<int> collection)
  {
    Console.WriteLine("Before modification:");
    foreach (var item in collection)
    {
      Console.WriteLine(item);
    }

    // Add and remove elements
    collection.Add(100);
    collection.Remove(2);

    Console.WriteLine("After modification:");
    foreach (var item in collection)
    {
      Console.WriteLine(item);
    }

    Console.WriteLine();
  }
}`;
const iCollectionSyncRootExample = `ICollection collection = new ArrayList();
lock (collection.SyncRoot)
{
  collection.Add(1);
  collection.Add(2);
}`;

const IEnumerableVsICollectionBlog = () => {
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
      <div>
        <div className="blog-header-image  mt-0">
          <Image
            src={AppIcons.EnmurabaleVscollectionCoverImg}
            alt="Understanding IEnumerable vs. ICollection in .NET"
            loading="lazy"
            width={1280}
            height={640}
            style={{ height: "auto", cursor: "pointer" }}
            onClick={() =>
              handleImageClick(
                AppIcons.EnmurabaleVscollectionCoverImg,
                "Understanding IEnumerable vs. ICollection in .NET"
              )
            }
          />
        </div>
        <p>
          If you’re working with collections in C#, you’ve probably come across{" "}
          <strong>IEnumerable</strong> and <strong>ICollection</strong>. But
          what exactly are they? What are the differences between them, and how
          do you know which one to use?
        </p>
        <p>
          This post simplifies the comparison between IEnumerable and
          ICollection, making it easy to grasp their main features, appropriate
          usage scenarios, and benefits to your coding practices.
        </p>
        <h3 id="what-are-ienumerable-and-icollection">
          <strong>What Are IEnumerable and ICollection?</strong>
        </h3>
        <p>
          IEnumerable and ICollection are interfaces in C# designed to
          facilitate the handling of data groups, such as lists or arrays; by
          defining the ways you can interact with these collections.
        </p>
        <ul>
          <li>
            <p>
              <strong> IEnumerable</strong>: The{" "}
              <span className="package-name"> IEnumerable</span> interface is
              fundamental to all collections in .NET. It defines a single
              method,
              <span className="package-name">GetEnumerator()</span> , which
              returns an enumerator that iterates through a collection.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={enumerableExample} language="csharp" />
        <ul>
          <li>
            <p>
              <strong> ICollection</strong>: The{" "}
              <span className="package-name-light">ICollection</span> interface
              extends
              <span className="package-name-light"> IEnumerable </span> and adds
              more capabilities, such as modifying the collection and querying
              its size.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={iCollectionExample} language="csharp" />
        <h3 id="when-to-use-ienumerable">
          <strong>When can we use IEnumerable?</strong>
        </h3>
        <p>
          <strong>IEnumerable</strong> is great for scenarios where you just
          want to <strong>look at</strong> or <strong>read</strong> the data
          without making changes. Here’s when you should use it:
        </p>
        <ul>
          <li>
            <p>
              <strong>Reading data only:</strong> If you only need to go through
              a list of data without modifying it, IEnumerable is perfect.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={fullEnumerableCode} language="csharp" />
        <ul>
          <li>
            <p>
              <strong>When Performance is Critical for Large Datasets:</strong>{" "}
              IEnumerable employs a technique known as lazy loading, which means
              it retrieves data only when necessary. This approach can conserve
              memory when dealing with large datasets.
            </p>
          </li>
          <li>
            <p>
              <strong>Looping through items:</strong> If your main goal is to
              loop through a collection, like data from a database or an API,
              and not change it, IEnumerable will do the job.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={simulatedIEnumerableCode} language="csharp" />
        <p>
          In this code, we use <strong>Enumerable</strong> to loop through a
          list of string. We can’t change the list, just read through it.{" "}
          <strong>GetData()</strong> could be anything, either from database or
          API data.
        </p>
        <ul>
          <li>
            <p>
              <strong>When Using Custom Iterators:</strong> The{" "}
              <span className="package-name-light">yield return</span> statement
              in C# is used to create custom iterators, which typically
              implement <span className="package-name-light">IEnumerable</span>.
              This is useful when generating sequences of data dynamically.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={yieldReturnExample} language="csharp" />
        <ul>
          <li>
            <p>
              <strong>Working with LINQ Queries:</strong> LINQ methods such as{" "}
              <span className="package-name-light">Select</span>,{" "}
              <span className="package-name-light">Where</span>, and{" "}
              <span className="package-name-light">OrderBy</span> often return{" "}
              <span className="package-name-light">IEnumerable</span>. These
              queries support deferred execution, meaning they are executed only
              when enumerated, which can improve performance for large datasets.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={linqEvenNumbersExample} language="csharp" />
        <h3 id="when-to-use-icollection">
          <strong>When can we use ICollection?</strong>
        </h3>
        <p>
          <strong>ICollection</strong> is the go-to option when you need more
          than just looking at the data. It extends{" "}
          <span className="package-name-light">IEnumerable</span> by adding
          features for modifying collections, querying metadata, and supporting
          synchronization. Here are the scenarios where{" "}
          <span className="package-name-light">ICollection</span> is the most
          appropriate choice:
        </p>
        <ul>
          <li>
            <p>
              <strong>You need to modify the collection:</strong> If you want to
              add new items or remove items from a list, ICollection provides
              methods like <span className="package-name-light">Add</span>,{" "}
              <span className="package-name-light">Remove</span>, and{" "}
              <span className="package-name-light">Clear</span>.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={iCollectionNamesExample} language="csharp" />
        <ul>
          <li>
            <p>
              <strong>You want to count/ size of Collection:</strong> The
              ICollection interface includes a Count property, which provides a
              convenient way to determine the number of items in a collection.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={iCollectionCountExample} language="csharp" />
        <ul>
          <li>
            <strong>You Need to Check Item Existence:</strong> The
            <span className="package-name">Contains</span> method provided by
            <span className="package-name">ICollection</span> allows you to
            determine whether a specific item exists in the collection.
          </li>
        </ul>
        <CodeBlockCustom code={iCollectionContainsExample} language="csharp" />
        <ul>
          <li>
            <strong>Building Custom Collections:</strong> When developing a
            custom collection type, implementing the ICollection interface is
            beneficial as it standardizes the basic operations such as add,
            remove, and count, utilizing generics for flexibility and type
            safety.
          </li>
        </ul>
        <CodeBlockCustom code={customCollectionCode} language="csharp" />
        <p>In the example above, ‘ T ’ could represent any class object.</p>
        <ul>
          <li>
            <p>
              <strong>Working with Intermediate-Level Collections:</strong>{" "}
              ICollection is commonly used in intermediate-level collections
              that need both enumeration and modification capabilities, such as{" "}
              <span className="package-name-light">List&lt;T&gt;</span> and{" "}
              <span className="package-name-light">HashSet&lt;T&gt;</span>.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={iCollectionPolymorphism} language="csharp" />
        <ul>
          <li>
            <p>
              <strong>You Need Thread-Safe Operations:</strong> The
              <strong> ICollection</strong> interface offers properties such as
              IsSynchronized and SyncRoot, which aid in the implementation of
              thread-safe operations. These are especially beneficial in the
              context of multi-threaded applications.
            </p>
          </li>
        </ul>
        <CodeBlockCustom code={iCollectionSyncRootExample} language="csharp" />
        <h3 id="best-practices-ienumerable-icollection">
          <strong>Best Practices for IEnumerable and ICollection</strong>
        </h3>
        <p>Here are a few tips for using these interfaces effectively:</p>
        <ol>
          <li>
            <p>
              <strong>Use IEnumerable for Read-Only Data:</strong> If you’re
              just reading the data and not changing it, go with IEnumerable .
            </p>
          </li>
          <li>
            <p>
              <strong>ICollection for Modifications:</strong> If you need to
              add, remove, or count items, ICollection gives you that
              flexibility.
            </p>
          </li>
          <li>
            <p>
              <strong>Keep Performance in Mind:</strong> When working with large
              datasets, <strong>IEnumerable</strong>’s lazy evaluation can
              improve performance by saving memory.
            </p>
          </li>
          <li>
            <p>
              <strong>Know Your Collection Type:</strong> Whether you’re using{" "}
              <span className="package-name-light">IEnumerable</span> or{" "}
              <span className="package-name-light">ICollection</span>, pick the
              right data structure for your needs, like{" "}
              <span className="package-name-light">List</span>,{" "}
              <span className="package-name-light">Dictionary</span>, or{" "}
              <span className="package-name-light">HashSet</span>.
            </p>
          </li>
          <li>
            <p>
              <strong>Consider Readability and Maintenance:</strong> Ensure the
              choice between{" "}
              <span className="package-name-light">IEnumerable</span> and{" "}
              <span className="package-name-light">ICollection</span> improves
              code readability and aligns with its purpose.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Use LINQ with{" "}
                <span className="package-name-light">IEnumerable</span>, Not{" "}
                <span className="package-name-light">ICollection</span>:
              </strong>{" "}
              LINQ is optimized for{" "}
              <span className="package-name-light">IEnumerable</span> but can
              still be used with{" "}
              <span className="package-name-light">ICollection</span>{" "}
              indirectly.
            </p>
          </li>
          <li>
            <p>
              <strong>When Need to Use Single Pass:</strong> Once you enumerate
              an <span className="package-name-light">IEnumerable</span>, you
              can’t re-enumerate it without retrieving it again.
            </p>
          </li>
        </ol>
        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>
        <p>
          Understanding the differences between{" "}
          <span className="package-name-light">IEnumerable</span> and{" "}
          <span className="package-name-light">ICollection</span> is essential
          when working with collections in C#. While{" "}
          <span className="package-name-light">IEnumerable</span> is ideal for
          simple, memory-efficient iteration,{" "}
          <span className="package-name-light">ICollection</span> provides
          additional control and flexibility for modifying collections. Choosing
          the appropriate interface can result in cleaner, more efficient, and
          maintainable code.
        </p>{" "}
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

export default IEnumerableVsICollectionBlog;
