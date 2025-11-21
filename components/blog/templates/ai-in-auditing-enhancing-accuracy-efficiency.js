"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { blogConfig } from "@/data/blogs/ai-in-auditing-enhancing-accuracy-efficiency";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";

const AiinAuditing = () => {
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
      <>
        <div
          className="order-one CSharpBlogPost new-blogs-detail-main-content-centar"
          id="main-content"
        >
          <div className="blog-header-image mt-0">
            <Image
              src={AppIcons.AiinAuditing}
              alt="Ai in Auditing Cover Image"
              loading="lazy"
              width={1280}
              height={640}
              style={{ height: "auto", cursor: "pointer" }}
              onClick={() =>
                handleImageClick(
                  AppIcons.AiinAuditing,
                  "Ai in Auditing Cover Image"
                )
              }
            />
          </div>
          <div>
            <h2 id ="introduction"> 
              <strong>
                The Role of <span >AI</span> in Auditing:Enhancing
                <span className="highlight-strong"> Accuracy and Efficiency</span>
              </strong>
            </h2>
            <p>
              If you&apos;ve experienced a financial audit, you know the drill:
              multiple spreadsheets, gathering data from different systems,
              staying up late to double-check reconciliations, and yet worried
              that something might slip through the gaps.
            </p>
            <p>
              Audits are important, but the process can be slow, expensive, and
              too much to manage. The truth is, traditional methods can&apos;t
              keep up anymore. Your business generates thousands (or millions)
              of transactions, vendor contracts, and compliance records every
              year. Sampling a small portion just isn&apos;t enough to catch
              hidden risks or fraud.
            </p>
            <p>
              That&apos;s where <span >AI</span> comes in.{" "}
              <span >AI</span> can scan entire datasets in
              minutes, detect unanticipated payments, and even analyze contracts
              to find risky clauses. This is much faster than going through
              information by hand. It doesn&apos;t take the role of auditors; it
              helps them work faster, find more risks, and make decisions
              instead of filling out forms.
            </p>
            <p>
              In this blog, we&apos;ll break down what{" "}
              <span >AI</span> in auditing really means,
              how it&apos;s already helping finance teams save time and reduce
              risk, and how you can take the first steps toward bringing it into
              your audit process.
            </p>

            <h3 id="business-challenges">
              <strong>
                Business Challenges That Push Firms Toward{" "}
                <span>AI</span>
              </strong>
            </h3>
            <p>
              For many small and medium-sized firms, audits aren&apos;t simply
              something they have to do; they&apos;re a pain. There is
              significant pressure: less people, tighter finances, and more
              rules every year.
            </p>
            <p>Here are the problems that usually impact the hardest:</p>
            <ol>
              <li>
                <strong id="data-overload">Drowning in Data</strong>
                <p>
                  Even if you&apos;re not a Fortune 500 company, the amount of
                  financial data is overwhelming. Bank feeds,{" "}
                  <span className="highlight-strong">ERP</span> records, payroll
                  systems, and vendor contracts all pile up. Traditional audits
                  only test a slice of this information, leaving plenty of blind
                  spots where issues can hide.
                </p>
              </li>
              <li>
                <strong id="manual-work">Too Much Manual Work</strong>
                <p>
                  Every finance manager is going to tell you the same thing: it
                  takes a long time to pull invoices, match records, and
                  reconcile numbers. It occurs over and over again, is full of
                  errors, and takes skilled individuals away from duties that
                  may really help the company grow.
                </p>
              </li>
              <li>
                <strong id="audit-costs">Audits Cost Too Much and Take Too Long</strong>
                <p>
                  Every audit cycle eats into both time and money. Preparing
                  for results slows down decision-making. For smaller companies,
                  that delay can directly impact cash flow and growth.
                </p>
              </li>
              <li>
                <strong id="fraud">Fraud Isn t Always Obvious</strong>
                <p>
                  Fraud today doesn t always show up as a fake invoice.
                  Sometimes its a pattern of small vendor payments, or an
                  unusual contract term hidden in the fine print. These are easy
                  to miss if youre only checking a fraction of your data.

                </p>
              </li>
              <li>
                <strong id="regulations">Regulations Keep Tightening</strong>
                <p>
                  Governments and regulators require reports to be sent in
                  faster and documents to be clearer than before. It&apos;s not
                  only stressful to meet those standards by hand, but it also
                  puts you at danger of not following the rules, getting
                  penalized, and harming your reputation.
                </p>
              </li>
            </ol>

            <h3 id="ai-tools">
              <strong>
                What <span>AI</span>-Powered Audit Tools
                Are and How They Work
              </strong>
            </h3>
            <p>
              It&apos;s not about machines doing the work of auditors,
              especially when it comes to <span >AI</span>{" "}
              in auditing. It&apos;s about using smart technology to do the hard
              work with data so that financial teams can focus on making
              decisions and applying their judgment.
            </p>
            <p>This is how they actually help:</p>
            <ol>
              <li>
                <strong id="transaction-checks">
                  Checks on every transaction that are done effortlessly
                </strong>
                <p>
                  <span >AI</span> can look at all of your
                  payments, bills, and entries instead of just a few. It finds
                  anything that seems suspect right away, so your team
                  doesn&apos;t have to look through a lot of spreadsheets.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    <span className="highlight-strong">For example</span>, you accidentally pay a vendor twice.
                  </strong>{" "}
                  If it&apos;s not in the audit sample, this might not be
                  noticed. <span >AI</span> finds the
                  duplicate right away and warns you before you lose money.
                </p>
              </li>
              <li>
                <strong id="pattern-detection">Finding strange patterns in payments</strong>
                <p>
                  <span >AI</span> is good at spotting
                  things that don&apos;t seem right. It may compare what
                  you&apos;re doing now to what you&apos;ve done in the past and
                  instantly tell you what&apos;s &quot;off.&quot;
                </p>
                <p>
                  👉{" "}
                  <strong>
                    <span className="highlight-strong">For example</span>, a small vendor that generally sends one invoice
                    a month sends five invoices in two weeks.
                  </strong>{" "}
                  Or, payments start pouring in in even amounts, like $5,000
                  every time, which could be a sign that something is wrong.
                </p>
              </li>
              <li>
                <strong id="contract-review">Reading contracts and other papers for you</strong>
                <p>
                  It takes a long time to read through contracts and agreements.{" "}
                  <span >AI</span> can examine these papers
                  and find clauses that are dangerous, permissions that are
                  absent, or terms that don&apos;t match business policy.
                </p>
                <p>👉
                  <span className="highlight-strong">For example</span>, your vendor contract stipulates that discounts
                  should apply after 100 units, but the invoices don&apos;t show
                  them. <span >AI</span> shows you the
                  difference so you can do something about it.
                </p>
              </li>
              <li>
                <strong id="continuous-monitoring">
                  Monitoring all the time instead of at the end of the year
                </strong>
                <p>
                  Audits come once or twice a year, but hazards don&apos;t wait
                  for that time. <span >AI</span> systems
                  can keep an eye on your data all the time and let you know
                  right away if something strange happens.
                </p>
                <p>👉
                  <span className="highlight-strong">For example</span>, a payment is made to a new vendor without a
                  contract. The technology flags it right away so that you may
                  take action instead of waiting for the end-of-year audit.
                </p>
              </li>
            </ol>
<h3>  <strong>
    Example :</strong></h3>
            <h4 className="mt-4">
              <strong>
               A Simple Example: Watching Small Vendor Payments
              </strong>
            </h4>
            <p>
              Imagine you run a mid-sized company that works with dozens of
              small vendors — local suppliers, freelance accountants,{" "}
              <span className="highlight-strong">IT</span> contractors. Most of these
              invoices are for a few hundred or a few thousand dollars, so they
              often don&apos;t get much attention during audits.
            </p>
            <p>
              Here&apos;s what happens with{" "}
              <span >AI</span> in place:
            </p>
            <ul>
              <li>Every payment is scanned — not just a sample.</li>
              <li>
                The system notices that one vendor, who normally sends one
                invoice per month, has suddenly sent five invoices in just two
                weeks.
              </li>
              <li>
                It also picks up that all those invoices are for neat, round
                numbers like $5,000 — a pattern that looks suspicious.
              </li>
              <li>
                At the same time, it checks the vendor&apos;s contract and finds
                no agreement that justifies this sudden jump in billing.
              </li>
            </ul>
            <p>
              Instead of slipping through until year-end, your audit team gets
              an instant alert:
            </p>
            <blockquote>
              &quot;Vendor <span className="highlight-strong">ABC</span>{" "}
              shows unusual billing activity. Please review invoices
              #123–127.&quot;
            </blockquote>
            <p>
              Within hours, the issue is caught and addressed — saving both
              money and stress.
            </p>

            <h3 id="misconceptions">
              <strong>
                Clearing the Misconceptions About{" "}
                <span>AI</span> in Auditing
              </strong>
            </h3>
            <p>
              People typically worry when they hear about{" "}
              <span >AI</span> in audits. They think,
              &quot;Is this going to replace auditors?&quot; The answer is
              simple: <strong>no, it won&apos;t.</strong>
            </p>
            <p>
              <span >AI</span> isn&apos;t going to steal
              employment. It&apos;s here to do the hard, boring work for you so
              you can focus on making decisions and judging things. Let&apos;s
              clear out several things that people often get wrong:
            </p>
            <ul>
              <li>
                <strong>
                  <span >AI</span> doesn&apos;t take the
                  position of human auditors.
                </strong>{" "}
                It can find strange payments or dangerous clauses, but it
                can&apos;t figure out the whole story. Every audit still relies
                on human judgment.
              </li>
              <li>
                <strong>
                  <span >AI</span> isn&apos;t perfect.
                </strong>{" "}
                It works with the data you give it. If the data is messy,
                results can be messy too. That&apos;s why oversight and
                validation are always needed.
              </li>
              <li>
                <strong>
                  <span >AI</span> isn&apos;t a quick
                  remedy that works like magic.
                </strong>{" "}
                It needs clear steps and good data. Think of it as something you
                work with, not something you push once and forget.
              </li>
              <li>
                <strong>
                  <span >AI</span> isn&apos;t just for
                  large companies.
                </strong>{" "}
                It can also be used by smaller companies.{" "}
                <span >AI</span> is accessible to every day
                finance teams thanks to tools that work with applications like{" "}
                <span className="highlight-strong">QuickBooks</span>,{" "}
                <span className="highlight-strong">Dynamics</span>, or{" "}
                <span className="highlight-strong">NetSuite</span>.
              </li>
            </ul>
            <p>
              👉{" "}
              <strong>
                <span >AI</span> is more like an assistant
                that never gets weary in real life.
              </strong>{" "}
              It does the boring work of scanning, comparing, and flagging, so
              your team can focus on what really matters: keeping the business
              safe, making wiser decisions, and lowering risks.
            </p>

            <h3 id="preparation">
              <strong>
                What You Need in Place Before Bringing{" "}
                <span>AI</span> into Auditing
              </strong>
            </h3>
            <p>
              <span >AI</span> can make audits faster,
              sharper, and less stressful — but it&apos;s not a magic switch you
              flip on day one. To really get value, your business needs a few
              basics ready. Think of it as preparing the ground before planting.
            </p>
            <ul>
              <li>
                <strong>Tidy, Reliable Data</strong>
                <p>
                  <span >AI</span> is only as good as the
                  information you feed it. If invoices, payments, or contracts
                  are messy, spread across systems, or full of errors, the
                  results won&apos;t be reliable.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    Imagine trying to cook a meal with half the ingredients
                    missing or mislabeled — the outcome won&apos;t taste right.
                  </strong>
                </p>
              </li>
              <li>
                <strong>One Place for Documents</strong>
                <p>
                  Your contracts, vendor files, and key paperwork should live in
                  a single, organized spot. Instead of being buried in emails or
                  scattered across folders, they should be easy for both people
                  and systems to find. Cloud storage or your{" "}
                  <span className="highlight-strong">ERP&apos;s</span> document center
                  works well for this.
                </p>
              </li>
              <li>
                <strong>Some Reporting Basics</strong>
                <p>
                  You don&apos;t need fancy dashboards, but having simple
                  reports or a tool like{" "}
                  <span className="highlight-strong">Excel</span>,{" "}
                  <span className="highlight-strong">Power BI</span>, or{" "}
                  <span className="highlight-strong">Tableau</span> makes it easier to
                  plug <span >AI</span> insights into what
                  you already track. If your team can already see summaries of
                  data, <span >AI</span> can add deeper
                  insights on top.
                </p>
              </li>
              <li>
                <strong>Clear Roles and Responsibilities</strong>
                <p>
                  <span >AI</span> can raise a red flag —
                  but it won&apos;t decide what to do with it. That&apos;s still
                  up to your team. Decide who checks alerts, who approves next
                  steps, and how decisions get documented. This avoids confusion
                  later.
                </p>
              </li>
              <li>
                <strong>A Team That&apos;s Open to Change</strong>
                <p>
                  The most important ingredient isn&apos;t technical — it&apos;s
                  mindset. Your team should see{" "}
                  <span >AI</span> as a helper, not a
                  threat. A bit of training and honest communication make
                  adoption smoother and build confidence.
                </p>
              </li>
            </ul>

            <h3 id="getting-started">
              <strong>
                A Simple Guide for Small Businesses to Start Using{" "}
                <span>AI</span> in Auditing
              </strong>
            </h3>
            <p>
              If you own a small firm, you might think that &quot;adopting{" "}
              <span >AI</span>&quot; is something only huge
              companies do. You can start small and yet get big results, though.
            </p>
            <p>
              This is a step-by-step plan that makes sense for smaller
              businesses:
            </p>
            <ol>
              <li>
                <strong>Start With One Everyday Problem</strong>
                <p>
                  Don&apos;t think about &quot;
                  <span >AI</span> everywhere.&quot; Think
                  about one headache.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    Maybe you&apos;ve had vendors accidentally paid twice. Or
                    payroll reports that take hours to check.
                  </strong>{" "}
                  Or supplier invoices that don&apos;t match the contract. Pick
                  the one that slows you down the most — that&apos;s your
                  starting point.
                </p>
              </li>
              <li>
                <strong>Use the Tools You Already Have</strong>
                <p>
                  You don&apos;t have to get a whole new system. You can connect
                  simple <span >AI</span> add-ons to{" "}
                  <span className="highlight-strong">QuickBooks</span>,{" "}
                  <span className="highlight-strong">Xero</span>, or{" "}
                  <span className="highlight-strong">Dynamics</span> that look for
                  mistakes or strange activity in transactions.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    <span className="highlight-strong">For example</span>, <span >AI</span> can let
                    you know if the same invoice number shows up again before
                    you click &quot;pay.&quot;
                  </strong>
                </p>
              </li>
              <li>
                <strong>Test It for a Few Months</strong>
                <p>
                  Run <span >AI</span> alongside your
                  normal process for 3–6 months. Don&apos;t change everything at
                  once. Just let it watch and see what it catches.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    Example: If in three months it spots five duplicate payments
                    or ten invoices missing approvals, you&apos;ve already saved
                    money and time.
                  </strong>
                </p>
              </li>
              <li>
                <strong>Teach Your Team the Basics</strong>
                <p>
                  Your team doesn&apos;t need to &quot;learn{" "}
                  <span >AI</span>.&quot; They only need to
                  know:
                </p>
                <ul>
                  <li>How to read alerts</li>
                  <li>How to double-check flagged items</li>
                  <li>Who should approve fixes</li>
                </ul>
                <p>A short training or walkthrough is enough.</p>
              </li>
              <li>
                <strong>Add More Areas One at a Time</strong>
                <p>
                  Once you see the value, it slowly grows: First, vendors;
                  subsequently, payroll; and last, contracts. Every stage makes
                  your process stronger without putting too much stress on the
                  crew.
                </p>
              </li>
              <li>
                <strong>Keep a Simple Record</strong>
                <p>
                  For every issue flagged, write down what was done. This way,
                  if an auditor or regulator asks, you can show a clear trail of
                  actions.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    Example: “Invoice #456 flagged as duplicate — reviewed by
                    finance, canceled, and corrected.”
                  </strong>
                </p>
              </li>
            </ol>

            <h3 id="costs">
              <strong>
                The Cost of Adopting <span>AI</span> in
                Auditing
              </strong>
            </h3>
            <p>
              One of the first questions small business owners ask is:
              &quot;This sounds great, but how much is it going to cost
              me?&quot; The honest answer is — it depends on how you start, but{" "}
              <strong>
                it&apos;s usually not as expensive as people fear.
              </strong>
            </p>
            <p>Here&apos;s what to expect in plain English:</p>
            <ul>
              <li>
                <strong>The Software</strong>
                <p>
                  Most <span >AI</span> audit tools run on
                  a subscription, just like the apps you already pay for. If
                  you&apos;re using{" "}
                  <span className="highlight-strong">QuickBooks</span>,{" "}
                  <span className="highlight-strong">Xero</span>, or{" "}
                  <span className="highlight-strong">Dynamics</span>, you can add on{" "}
                  <span >AI</span> tools that scan
                  transactions.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    For a small business, this often works out to a few hundred
                    dollars a month — less than what you might lose on a single
                    unnoticed duplicate payment.
                  </strong>
                </p>
              </li>
              <li>
                <strong>The Setup</strong>
                <p>
                  If your records are already digital and organized, setup is
                  usually quick and affordable. If things are scattered across
                  emails and spreadsheets, you may need a bit of cleanup first.
                </p>
                <p>
                  👉{" "}
                  <strong>
                    Think of it like organizing your closet before buying a new
                    outfit — the better organized you are, the smoother it goes.
                  </strong>
                </p>
              </li>
              <li>
                <strong>Training Your Team</strong>
                <p>
                  Your staff don&apos;t need to &quot;learn{" "}
                  <span >AI</span>.&quot; They only need to
                  know how to read the alerts and double-check flagged items.
                  Most companies get this done with a couple of short sessions.
                </p>
              </li>
              <li>
                <strong>Keeping It Running</strong>
                <p>
                  <span >AI</span> tools don&apos;t need
                  much babysitting. Most updates happen in the background. You
                  may tweak a few settings now and then, but ongoing costs are
                  usually built into the subscription.
                </p>
              </li>
            </ul>

            <h3 id="auditor-vs-ai">
              <strong>
                What an Auditor Does and What{" "}
                <span>AI</span> Does After Adoption
              </strong>
            </h3>
            <p>
              One of the major worries when a corporation uses{" "}
              <span >AI</span> for auditing is, &quot;What
              will the auditor do if the system is already checking
              everything?&quot; The answer is easy:{" "}
              <span >AI</span> and auditors work together.{" "}
              <span >AI</span> handles the boring,
              repetitive tasks, and auditors focus on trust, advise, and
              judgment.
            </p>

            <h4 className="mt-4">
              <strong>
                What <span >AI</span> Does
              </strong>
            </h4>
            <ul>
              <li>
                Quickly goes through all transactions, invoices, and contracts
              </li>
              <li>
                Finds items that don&apos;t seem right, like payments that are
                the same or unexpected changes in vendor activity
              </li>
              <li>Looks at data all the time, not just during audits</li>
              <li>Brings together patterns so the team knows where to look</li>
            </ul>
            <p>
              <strong>
                <span >AI</span> is like an assistant who
                never gets weary; it filters through the noise and shows you
                what you need to pay attention to.
              </strong>
            </p>

            <h4 className="mt-4">
              <strong>What Auditors Still Do and Will Always Do</strong>
            </h4>
            <ul>
              <li>
                Check out the marked items and decide which ones are serious
                problems and which ones aren&apos;t
              </li>
              <li>
                Ask the hard questions and apply your expert judgment that{" "}
                <span >AI</span> can&apos;t replace
              </li>
              <li>
                When problems come up, talk to management, vendors, and
                regulators
              </li>
              <li>
                Give independent proof that the books are fair and correct
              </li>
              <li>
                Help the business figure out ways to make things better and
                lower hazards
              </li>
            </ul>
            <p>
              <strong>
                Auditors add a human touch — context, common sense, and
                responsibility that no software can give.
              </strong>
            </p>

            <h5>
              <strong>The New Way to Work Together</strong>
            </h5>
            <p>
              Auditors spend less time on spreadsheets and paperwork and more
              time looking at risks and giving advice to management.{" "}
              <span >AI</span> does the hard work in the
              background, and auditors make judgments that help the firm grow.
              To put it simply:{" "}
              <strong>
                <span >AI</span> discovers the signals and
                auditors make the decisions.
              </strong>
            </p>

            <h3 id="future">
              <strong>
                Future of Auditing with <span>AI</span>
              </strong>
            </h3>
            <p>
              Auditing has already started to change, and the shift will only
              get bigger in the coming years. Instead of being a stressful,
              once-a-year exercise, audits will become more continuous, more
              accurate, and much more useful for businesses.
            </p>
            <ul>
              <li>
                <strong>Ongoing Audits, Not Just Year-End Rush</strong>
                <p>
                  Traditionally, most companies only worry about audits at the
                  end of the year. With <span >AI</span>,
                  checking can happen every day. That means fewer last-minute
                  surprises and fewer sleepless nights before deadlines.
                </p>
              </li>
              <li>
                <strong>Spotting Risks Before They Happen</strong>
                <p>
                  Right now, audits mostly point out mistakes after they&apos;ve
                  already been made. In the future,{" "}
                  <span >AI</span> will help spot early
                  warning signs — like a vendor suddenly changing their billing
                  pattern — before it becomes a real problem.
                </p>
              </li>
              <li>
                <strong>Making Fraud Harder to Hide</strong>
                <p>
                  Fraud often hides in small details that humans miss. By
                  scanning contracts, invoices, and payments together,{" "}
                  <span >AI</span> will make it much
                  tougher for fraudulent activity to slip through unnoticed.
                </p>
              </li>
              <li>
                <strong>Auditors Becoming Advisors</strong>
                <p>
                  As <span >AI</span> takes care of
                  repetitive checking, auditors will have more time to guide
                  business leaders. Instead of only reviewing numbers,
                  they&apos;ll spend more time advising on how to reduce risks,
                  improve processes, and make better financial decisions.
                </p>
              </li>
              <li>
                <strong>Insights That Help the Whole Business</strong>
                <p>
                  Audit findings won&apos;t just sit in reports anymore.
                  They&apos;ll feed back into day-to-day operations — helping
                  businesses negotiate better contracts, manage vendors more
                  carefully, and improve payroll accuracy.
                </p>
              </li>
            </ul>

            <h3 id="conclusion">
              <strong>
                Conclusion: <span>AI</span> as a Partner, Not a
                Replacement
              </strong>
            </h3>
            <p>
              <span >AI</span> is not here to replace
              auditors — it&apos;s here to make their work sharper, faster, and
              less stressful. By scanning every transaction, spotting unusual
              activity, and keeping watch all year round,{" "}
              <span >AI</span> handles the heavy lifting
              that humans shouldn&apos;t have to. Auditors, on the other hand,
              bring what machines never can: context, judgment, and trust.
              Together, they create audits that are not only more accurate but
              also more valuable for the business.
            </p>
            <p>
              For small and mid-sized companies, this isn&apos;t something
              reserved for the Fortune 500 anymore. With tools that connect
              directly to systems like{" "}
              <span className="highlight-strong">QuickBooks</span>,{" "}
              <span className="highlight-strong">Xero</span>, and{" "}
              <span className="highlight-strong">Dynamics</span>,{" "}
              <span >AI</span> auditing is within reach
              today.
            </p>
          </div>

          <div className="separate-cta your-custom-class">
            <div className="icon-sec">
              <Image
                src={AppIcons.ctaBgCommonIcon}
                alt="CTA Icon Image"
                loading="lazy"
                priority={false}
                className="img-fluid"
              />
            </div>
            <div className="desc-sec">
              <p>
                👉 Ready to explore how AI can simplify your audits and reduce
                risks? Get in touch with us today to schedule a free
                consultation.
              </p>

              <div className="button-sec">
                <Link
                  rel="canonical"
                  className="service-btn"
                  href="/contact-us"
                >
                  <span>Let&apos;s Connect</span>
                  <Iconify icon="weui:arrow-filled" width={20} />
                </Link>
              </div>
            </div>
          </div>
          <div id="faqs" className="blog-faq mt-5">
            <ServiceFAQ
              items={blogConfig.faqData.faqItems}
              title={blogConfig.faqData.faqTitle}
            />
          </div>
        </div>

        {/* blog content ends here */}
      </>

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

export default AiinAuditing;
