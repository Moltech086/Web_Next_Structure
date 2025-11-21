"use client";

import React, { useState } from "react";
import { AppIcons } from "@/data/appIcons";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import Image from "next/image";
import { Modal } from "react-bootstrap";

// code block data
const pythonInstallCode = `pip install requests beautifulsoup4 lxml`;
const webScrapingCode = `import requests
from bs4 import BeautifulSoup
import pandas as pd

# Step 1: Fetch the webpage
url = "https://quotes.toscrape.com/" # Real website for practicing web scraping
response = requests.get(url)

# Step 2: Check if the request was successful
if response.status_code == 200:
  html_content = response.text
else:
  print("Failed to retrieve the webpage.")
  exit()

# Step 3: Parse the HTML content
soup = BeautifulSoup(html_content, 'lxml')

# Step 4: Extract the desired data (quotes and authors)
quotes = soup.find_all('span', class_='text') # Extract quotes
authors = soup.find_all('small', class_='author') # Extract authors

# Step 4.1: Print the extracted data
print("Quotes and Authors:")
for quote, author in zip(quotes, authors):
  print(f'"{quote.get_text()}" - {author.get_text()}"')

# Step 5: Store the extracted data in a DataFrame
data = {
  "Quote": [quote.get_text() for quote in quotes],
  "Author": [author.get_text() for author in authors]
}

df = pd.DataFrame(data)

# Step 6: Save the data to a CSV file
df.to_csv("quotes_scraped.csv", index=False, encoding="utf-8")

print("Data successfully saved to 'quotes_scraped.csv'.")`;
const fetchStepCode = `# Step 1: Fetch the webpage
url = "https://quotes.toscrape.com/"  # Real website for practicing web scraping
response = requests.get(url)`;
const parseHtmlStepCode = `from bs4 import BeautifulSoup
# Step 3: Parse the HTML content
soup = BeautifulSoup(html_content, 'lxml')`;
const extractDataStepCode = `# Step 4: Extract the desired data (quotes and authors)
quotes = soup.find_all('span', class_='text')  # Extract quotes
authors = soup.find_all('small', class_='author')  # Extract authors`;
const saveToCsvCode = `import pandas as pd
# Step 5: Store the extracted data in a DataFrame
data = {
  "Quote": [quote.get_text() for quote in quotes],
  "Author": [author.get_text() for author in authors]
}

df = pd.DataFrame(data)

# Step 6: Save the data to a CSV file
df.to_csv("quotes_scraped.csv", index=False, encoding="utf-8")

print("Data successfully saved to 'quotes_scraped.csv'.")`;

const WebScraping = () => {
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
      <div className="   " id="main-content">
        <div className="machinelearning-header-image">
          <Image
            src={AppIcons.WebscrapingCoverImg}
            alt="Web Scraping with Python: A Step-by-Step Guide"
            width={1280}
            height={640}
            onClick={() =>
              handleImageClick(
                AppIcons.WebscrapingCoverImg,
                "Web Scraping with Python: A Step-by-Step Guide"
              )
            }
            style={{ cursor: "pointer", height: "auto" }}
          />
        </div>
        <p>
          Web scraping is the process of extracting data from websites, making
          it a powerful tool for gathering information for research, analysis,
          and application development. Whether you’re collecting market trends,
          monitoring competitors, or automating data entry, web scraping can
          save time and effort.
        </p>
        <p>
          Python is one of the most popular programming languages for web
          scraping, thanks to its simplicity and a vast ecosystem of libraries
          like
          <span className="package-name-light"> BeautifulSoup</span>,
          <span className="package-name-light"> Requests</span>,
          <span className="package-name-light"> Selenium</span>, and
          <span className="package-name-light"> Scrapy</span>.
        </p>
        <p>
          In this blog, we’ll walk you through the fundamentals of web scraping
          using Python, covering everything from setting up your environment to
          extracting data efficiently — all in a beginner-friendly manner.
        </p>
        <h3 id="what-is-web-scraping">
          <strong>What is Web Scraping?</strong>
        </h3>
        <p>
          Web scraping is an automated technique used to extract data from
          websites using code. Instead of manually copying information, web
          scraping enables you to gather data efficiently and systematically. It
          acts like a virtual assistant that browses websites and collects the
          required information in a structured format, saving both time and
          effort.
        </p>
        <h4>
          <strong>Why Use Web Scraping?</strong>
        </h4>
        <p>
          Web scraping is widely used for automating data collection and
          analysis. Here are some key reasons why it’s beneficial:
        </p>
        <ul>
          <li>
            <p>
              <strong>Automates Data Collection</strong> — Saves time by
              extracting large amounts of data quickly.
            </p>
          </li>
          <li>
            <p>
              <strong>Cost-Effective</strong> — Reduces the need for manual data
              entry, lowering operational costs.
            </p>
          </li>
          <li>
            <p>
              <strong>Competitive Advantage</strong> — Helps in market research,
              price comparison, and competitor analysis.
            </p>
          </li>
          <li>
            <p>
              <strong>Real-Time Data Gathering</strong> — Enables businesses to
              track trends, news, and updates dynamically.
            </p>
          </li>
          <li>
            <p>
              <strong>Lead Generation</strong> — Extracts potential customer
              information from online directories and social media.
            </p>
          </li>
          <li>
            <p>
              <strong>Sentiment Analysis</strong> — Helps analyze customer
              opinions from reviews and social platforms.
            </p>
          </li>
          <li>
            <p>
              <strong>SEO &amp; Content Research</strong> — Gathers insights on
              trending topics, keywords, and backlinks.
            </p>
          </li>
          <li>
            <p>
              <strong>Data-Driven Decision Making</strong> — Provides valuable
              insights for businesses and researchers.
            </p>
          </li>
          <li>
            <p>
              <strong>Integration with AI &amp; ML</strong> — Feeds structured
              data into machine learning models for better predictions.
            </p>
          </li>
          <li>
            <p>
              <strong>Scalability</strong> — Can handle large volumes of data,
              making it useful for big data applications.
            </p>
          </li>
        </ul>
        <h4>
          <strong>Is Web Scraping Legal?</strong>
        </h4>
        <p>
          While scraping publicly available data is generally acceptable,
          scraping private or protected data without permission can lead to
          legal consequences. Always check a website’s{" "}
          <code className="package-name-light">robots.txt</code> file to
          understand the scraping policies.
        </p>
        <h3 id="why-use-python">
          <strong>Why Use Python for Web Scraping?</strong>
        </h3>
        <p>
          Python is one of the most popular programming languages for scraping
          due to its simplicity and ecosystem. The primary tools available in
          Python for web scraping are:
        </p>
        <ul>
          <li>
            <p>
              <strong>Powerful Libraries</strong> — Tools like
              <strong> BeautifulSoup</strong>,<strong> Scrapy</strong>, and
              <strong> Selenium</strong> streamline scraping.
            </p>
          </li>
          <li>
            <p>
              <strong>Handles Dynamic Content</strong> — Scrapes
              JavaScript-heavy websites using
              <strong> Selenium</strong> or
              <strong> Playwright</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>Great Data Processing</strong> — Works well with
              <strong> Pandas</strong> and
              <strong> NumPy</strong> for data analysis.
            </p>
          </li>
          <li>
            <p>
              <strong>Automation &amp; Scheduling</strong> — Can automate tasks
              with cron jobs or schedulers.
            </p>
          </li>
        </ul>
        <p>
          Python’s flexibility, scalability, and ease of use make it the best
          choice for web scraping.
        </p>
        <h3 id="how-web-scraping-works">
          <strong>How Does Web Scraping Work?</strong>
        </h3>
        <p>Web scraping involves a number of steps, including:</p>
        <h4>
          <strong>Step 1: Identifying the website you want to scrape</strong>
        </h4>
        <p>
          The first step in web scraping is to identify the website you want to
          scrape. This could be a website that you are interested in, or a
          website that you need to scrape for work.
        </p>
        <h4>
          <strong>Step 2: Finding the data you want to extract</strong>
        </h4>
        <p>
          Once you have identified the website you want to scrape, you need to
          find the data you want to extract. This could be anything from product
          prices to news articles.
        </p>
        <h4>
          <strong>Step 3: Writing a script to extract the data</strong>
        </h4>
        <p>
          The next step is to write a script to extract the data. This script
          will need to be able to:
        </p>
        <ul>
          <li>
            <p>
              Identify the HTML elements that contain the data you want to
              extract.
            </p>
          </li>
          <li>
            <p>Extract the data from these elements.</p>
          </li>
          <li>
            <p>Store the data in a file or database.</p>
          </li>
        </ul>
        <h4>
          <strong>Step 4: Storing the data</strong>
        </h4>
        <p>
          The final step is to store the extracted data in a usable format, such
          as a CSV file or a database.
        </p>
        <h3 id="web-scraping-beautiful-soup">
          <strong>
            Step-by-Step Guide for Web Scraping Using Beautiful Soup
          </strong>
        </h3>
        <h4>
          <strong>Step 1: Setting Up Your Environment</strong>
        </h4>
        <p>
          Before you begin, ensure you have Python installed on your system. You
          can download it from python.org.
        </p>
        <p>Next, install the libraries we’ll use for scraping:</p>
        <CodeBlockCustom code={pythonInstallCode} language="bash" />

        <h4>
          <strong>Step 2: Understanding the Tools</strong>
        </h4>
        <ul>
          <li>
            <p>
              <strong>requests</strong> — Sends HTTP requests to retrieve
              webpage content.
            </p>
          </li>
          <li>
            <p>
              <strong>BeautifulSoup</strong> — Parses raw HTML data and helps
              extract specific elements (e.g., titles, links, tables).
            </p>
          </li>
          <li>
            <p>
              <strong>lxml</strong> — A high-speed parser used by{" "}
              <strong>Beautiful Soup</strong> for processing HTML efficiently.
            </p>
          </li>
        </ul>
        <h4>
          <strong>Step 3: Writing Your First Web Scraper and Save Data</strong>
        </h4>
        <p>
          Let’s scrape a simple website to extract data. Below is a Python
          script to scrape quotes from the <strong>“Quotes to Scrape”</strong>{" "}
          website.
        </p>
        <h6>
          <strong>Code Example:</strong>
        </h6>
        <CodeBlockCustom code={webScrapingCode} language="python" />

        <p>Let’s understand the example above.</p>

        <ol>
          <li>
            <p>
              <strong>Fetching the Webpage:</strong> We use the{" "}
              <span className="package-name-light">requests</span> library to
              send an HTTP request and retrieve the webpage content.
            </p>
            <p>
              The script uses{" "}
              <span className="package-name-light">requests.get</span>
              (url) to retrieve the HTML content from{" "}
              <span className="package-name-light">
                https://quotes.toscrape.com/
              </span>
              .
            </p>
            <CodeBlockCustom code={fetchStepCode} language="python" />
          </li>
          <li>
            <p>
              <strong>Checking the Response Status:</strong> If{" "}
              <span className="package-name-light">
                response.status_code == 200,
              </span>{" "}
              the HTML content is extracted; otherwise, the script exits.
            </p>
          </li>
          <li>
            <p>
              <strong> Parsing the HTML:</strong> BeautifulSoup helps us extract
              useful data from the HTML content.
            </p>
            <p>
              <span className="package-name-light">
                BeautifulSoup <span className="alert">html_content</span>,
                &apos;lxml&apos;{" "}
              </span>
              processes the raw HTML using the <strong>lxml parser</strong>,
              which is fast and efficient.
            </p>
          </li>
          <CodeBlockCustom code={parseHtmlStepCode} language="python" />
          <li>
            <p>
              {" "}
              <strong>Extracting Specific Data:</strong>
            </p>
            <ul>
              <li>
                <p>
                  <span className="package-name-light">
                    soup.find_all(&apos;span&apos;, class_=&apos;text&apos;)
                  </span>{" "}
                  finds all <strong>quotes</strong> within{" "}
                  <span className="package-name-light"> &lt; span &gt; </span>{" "}
                  tags.
                </p>
              </li>
              <li>
                <p>
                  <span className="package-name-light">
                    soup.find_all(&apos;small&apos;, class_=&apos;author&apos;)
                  </span>{" "}
                  finds <strong>author names</strong> within{" "}
                  <span className="package-name-light"> &lt; small &gt; </span>
                  tags.
                </p>
              </li>{" "}
            </ul>{" "}
          </li>{" "}
          <CodeBlockCustom code={extractDataStepCode} language="python" />
          <li>
            <p>
              {" "}
              <strong> Storing Scraped Data:</strong>
            </p>
            <p>
              Extracted data is often saved for further use. You can write the
              results to a CSV file like this:
            </p>
          </li>
          <CodeBlockCustom code={saveToCsvCode} language="python" />
        </ol>
        <h3 id="common-problems-and-solutions">
          <strong>Top 5 Common Problems in Web Scraping & Solutions</strong>
        </h3>
        <ol>
          <li>
            <strong>Dynamic Websites:</strong> Data is loaded via JavaScript,
            making it invisible to basic scrapers. Use <strong>Selenium</strong>
            , <strong>Playwright</strong>, or <strong>headless browsers</strong>{" "}
            to interact with JavaScript-loaded elements.
          </li>
          <li>
            <strong>CAPTCHAs & Bot Detection:</strong> Some websites use
            CAPTCHAs or detect automated requests, blocking scrapers. Use{" "}
            <strong>CAPTCHA-solving APIs</strong> (e.g., 2Captcha) or{" "}
            <strong>session persistence</strong> to reduce frequent challenges.
          </li>
          <li>
            <strong>Blocked Requests & IP Bans:</strong> Websites detect
            scrapers and block repeated requests. Use{" "}
            <strong>rotating proxies</strong>,{" "}
            <strong>user-agent spoofing</strong>, and{" "}
            <strong>randomized request intervals</strong> to mimic human
            behavior.
          </li>
          <li>
            <strong>Website Structure Changes:</strong> Websites update their
            HTML, breaking scrapers that rely on fixed element selectors. Use{" "}
            <strong>XPath</strong>, <strong>CSS selectors</strong>, and{" "}
            <strong>flexible parsing logic</strong> that adapts to minor
            structure changes.
          </li>
          <li>
            <strong>Login-Required Content:</strong> Some data is behind login
            forms or session-based authentication. Use <strong>Selenium</strong>{" "}
            for login automation or <strong>requests with session</strong>{" "}
            cookies for authenticated scraping.
          </li>
        </ol>

        <h3 id="web-scraping-best-practices">
          <strong>Best Practices for Web Scraping</strong>
        </h3>
        <ul>
          <li>
            <p>
              <strong>Respect robots.txt:</strong> Check the website’s{" "}
              <span className="package-name-light">robots.txt</span> file to see
              if scraping is allowed.
            </p>
          </li>
          <li>
            <p>
              <strong>Use Headers and User Agents:</strong> Some websites block
              bots. Bypass this by setting a custom{" "}
              <span className="package-name-light">user-agent</span>.
            </p>
          </li>
          <li>
            <p>
              <strong>Avoid Overloading the Server:</strong> Use delays like{" "}
              <span className="package-name-light">time.sleep()</span> to
              prevent making too many requests in a short period.
            </p>
          </li>
          <li>
            <p>
              <strong>Handle Exceptions and Errors:</strong> Websites may change
              structure; always write code that handles exceptions gracefully.
            </p>
          </li>
        </ul>

        <h3 id="advanced-tools-web-scraping">
          <strong>Advanced Tools for Web Scraping</strong>
        </h3>
        <ul>
          <li>
            <strong>Scrapy</strong> — A fast, scalable web scraping{" "}
            <strong>framework</strong> for large projects. Supports{" "}
            <strong>asynchronous scraping</strong>, data pipelines, and
            auto-throttling
          </li>
          <li>
            <strong>Selenium</strong>: Automates browser actions, useful for
            JavaScript-heavy websites. Ideal for scraping sites with{" "}
            <strong>logins, infinite scrolling, and CAPTCHAs</strong>
          </li>
          <li>
            <strong>BeautifulSoup</strong> — A lightweight HTML parser for{" "}
            <strong>static web pages</strong>. Best for extracting data from
            simple <strong>HTML documents</strong>.
          </li>
          <li>
            <strong>Playwright</strong> — A modern, fast headless browser for{" "}
            <strong>dynamic content</strong>. A better alternative to Selenium
            for <strong>handling JavaScript-based sites</strong>.
          </li>
          <li>
            <strong>Zyte (ScrapingHub)</strong> — A Python-friendly scraping{" "}
            <strong>API with smart proxy rotation</strong>. Avoids{" "}
            <strong>IP bans, bot detection, and CAPTCHAs</strong>.
          </li>
        </ul>
        <h3 id="conclusion">
          <strong>Conclusion</strong>
        </h3>
        <p>
          Web scraping with Python is a powerful tool for data collection. By
          combining
          <span className="package-name-light">requests</span>,
          <span className="package-name-light">BeautifulSoup</span>, and
          <span className="package-name-light">Selenium</span>, you can extract
          and structure data from the web efficiently. Always follow ethical
          practices and respect website policies to avoid legal issues.
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

export default WebScraping;
