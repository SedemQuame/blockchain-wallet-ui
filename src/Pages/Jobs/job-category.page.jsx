import React from "react";
import { useLocation } from "react-router-dom";
import JobCategory from "../../Components/Containers/job-category.components";
import Footer from "../../Components/Footer/footer.component";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ViewJobs() {
  let query = useQuery();
  let categories = ["Developer"];
  let jobs = [
    {
      image:
        "https://diversitymbamagazine.com/wp-content/uploads/2020/08/JP-Morgan-Chase-Logo.png",
      company: "JPMorgan Chase Bank",
      name: "Python Software Engineering Associate - Credit Technology",
      duration: "1 year",
      location: "London, England",
      salary: "$100,000",
      description:
        "The Credit Technology team is focused on delivering best in className IT solutions to the Credit Trading business where JP Morgan is a market leader. We are a team of around 300 people globally that partner closely with the quant research group and face off directly to the trading desks. Our core strength is providing technical expertise and software development skills that directly affect the ability of our business to generate revenue and remain the dominant player in the market. We are committed to hiring the brightest and best technical experts and in return can offer roles with direct trading and quant interaction on projects related to pricing and risk management.",
      companyOffer: [
        "A diverse, inclusive and flexible environment.",
        "A collaborative team of engineers eager to help each other achieve common goals.",
        "Close partnership with the Credit business.",
        "Fast paced, dynamic environment with significant opportunities for career growth.",
        "Cutting edge reactive programming paradigm that allows us to write asynchronous applications with greatly improved parallelism and concurrency.",
        "Close collaboration with colleagues in the business and UX to deliver usable functionality directly to traders through modern front end applications using HTML5 and JavaScript.",
        "Fully automated, mature, true continuous deployment - where developers can push code in seconds from within the development environment.",
      ],
      responsibilities: [
        "Develop strategic application alongside other team members.",
        "Peer review code quality, follow established SDLC and project governance processes.",
        "Build close business relationships with the stakeholders and manage delivery against business requirements.",
        "Work closely with other tech and business teams within and outside Credit, PF & CPG Lending technology group.",
        "BAU support and enhancement for the existing toolset to begin with and the strategic application going forward",
      ],
      essentialSkills: [
        "Strong OO programming concepts.",
        "Strong knowledge of Python.",
        "Creative, quick-thinking, pragmatic, with an aptitude for solving problems and an ability to quickly translate demands into sound technical requirements.",
        "Proven organisational skills, decisive priority management, strong teamwork ethic, excellent verbal & written communication skills.",
      ],
      desirableSkills: [
        "Excel/VBA.",
        "Perl scripting.",
        "Experience with C++ on Linux and Windows.",
        "Web UI technologies (HTML5, JavaScript, REACT etc.).",
        "RDBMS like Oracle or MySQL and strong database concepts.",
      ],
      experiences: [
        "The ideal candidate will likely be qualified to degree level in Computer Science, Maths or related science discipline.",
        "Credit SME or SME for another complex asset className.",
        "At least 3 years of experience with Technology development in a Front Office capacity.",
        "Curiosity to learn the Credit business and products.",
      ],
      aboutCompany:
        "J.P. Morgan is a global leader in financial services, providing strategic advice and products to the world's most prominent corporations, governments, wealthy individuals and institutional investors. Our first-className business in a first-className way approach to serving clients drives everything we do. We strive to build trusted, long-term partnerships to help our clients achieve their business objectives. We recognize that our people are our strength and the diverse talents they bring to our global workforce are directly linked to our success.",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/927911317498941440/43rkL2cB_400x400.jpg",
      company: "STEM Returners",
      name: "Associate Software Engineer Java",
      duration: "1 year",
      location: "New York, America",
      salary: "$30,000",
      description:
        "We’re looking for an Associate Software Engineer who loves solving problems to join the API Engineering Team here at RS Components. We’re building out a suite of APIs to support our eCommerce Business.",
      companyOffer: [
        "We have an outstanding benefits package, which includes:",
        "Flexible working arrangements (this is a fully remote role, if you would prefer coming to our offices in Corby/ London, you are welcome)",
        "Up to 10% annual bonus",
        "Up to 25 days holiday (with the option to purchase a further week)",
        "Extremely generous contributory pension scheme",
        "Discounted stock options",
        "Private healthcare, life assurance and daily access to a GP",
      ],
      responsibilities: [
        "Contributing to the team who will be designing, building, testing, automating, documenting, and supporting integral infrastructure and application components within our API platform, which may at times require a multi-disciplined focus depending on the work required.",
        "Deploying software and services through emerging DevOps tools such as Terraform.",
        "Contributing to design and implementation planning sessions.",
        "Supporting and maintaining legacy applications as required",
      ],
      essentialSkills: [
        "Development in Java, or Node JS",
        "Popular AWS Services (Lambda, EC2, S3, Route 53, API Gateway, IAM etc).",
        "Infrastructure as code (IaC) using Terraform (with Terragrunt).",
        "Cloud services - HashiCorp (Vault, Consul, Nomad), Kong.",
      ],
      desirableSkills: [
        "Knowledge or Experience of AWS – S3, EC2, SNS, SQS and SQL databases (Aurora PostrgeSQL), NoSQL databases (Dynamo).",
        "Understanding/Experience of test plans. test cases, system testing, regression testing.",
        "Introspection and observability tooling (Datadog).",
        "Familiarity with AWS Identity and Access Management (IAM).",
        "JMeter, Cucumber, Selenium, Postman.",
      ],
      experiences: [
        "The ideal candidate will likely be qualified to degree level in Computer Science, Maths or related science discipline.",
        "Credit SME or SME for another complex asset className.",
        "At least 3 years of experience with Technology development in a Front Office capacity.",
        "Curiosity to learn the Credit business and products.",
      ],
      aboutCompany:
        "We began in a north-west London garage supplying spare parts to radio repair shops back in 1937. Today, we’re using digital technology to revolutionise the way we do business and strengthen our position as the one-stop-shop for industrial parts and electronic components.",
    },
    {
      image:
        "data:image/png;base64,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",
      company: "Goldman Sachs",
      name: "AMD Private – Senior Software Engineer – London – Associate",
      duration: "2 year",
      location: "London, England",
      salary: "$92,000",
      description:
        "Goldman Sachs Asset Management is a global, broad and deep platform with diversified capabilities across public and private asset classes. We are a top 10 global asset manager with a leadership position across asset classes and key market segments. The Alternatives business use a diverse range of investment strategies, covering a wide range of asset classes across a wide range of geographies and sectors. GS Asset Management engineers collaborate with investing and finance professionals as a partnership to create quantitative computer models and web applications to support all aspects of investment and deal lifecycle needs. We create quantitative models and developing software applications to help structure, value, hedge, risk manage the investments in our portfolios. The team proactively collaborates with colleagues globally to ensure the most appropriate and scalable solutions are implemented to everyone’s benefit.",
      companyOffer: [
        "A diverse, inclusive and flexible environment.",
        "A collaborative team of engineers eager to help each other achieve common goals.",
        "Close partnership with the Credit business.",
        "Fast paced, dynamic environment with significant opportunities for career growth.",
        "Cutting edge reactive programming paradigm that allows us to write asynchronous applications with greatly improved parallelism and concurrency.",
        "Close collaboration with colleagues in the business and UX to deliver usable functionality directly to traders through modern front end applications using HTML5 and JavaScript.",
        "Fully automated, mature, true continuous deployment - where developers can push code in seconds from within the development environment.",
      ],
      responsibilities: [],
      essentialSkills: [
        "Meaningful experience in, but not limited to, any one of the following programming languages: Java, C++, Python, Javascript/Typescript, React/Redux, Angular",
        "Should include experience of working with some relational or non-relational database(s)",
        "Strong knowledge of data structures and algorithms",
        "Excellent object oriented, data modelling or functional analysis and design skills",
      ],
      desirableSkills: [
        "Comfortable multi-tasking, managing multiple stakeholders, and working as part of a global team",
        "Proven strong communication and interpersonal ability",
        "Experience building client- and consumer-facing products is a plus, but not essential",
        "Knowledge of existing strategic firmwide platforms is a plus, but not essential",
        "Experience building interactive web applications and an interest in adopting new cloud technologies [eg. AWS]",
      ],
      experiences: [
        "The ideal candidate will likely be qualified to degree level in Computer Science, Maths or related science discipline.",
        "Credit SME or SME for another complex asset className.",
        "At least 3 years of experience with Technology development in a Front Office capacity.",
        "Curiosity to learn the Credit business and products.",
      ],
      aboutCompany:
        "At Goldman Sachs, we commit our people, capital and ideas to help our clients, shareholders and the communities we serve to grow. Founded in 1869, we are a leading global investment banking, securities and investment management firm. Headquartered in New York, we maintain offices around the world. We believe who you are makes you better at what you do. We're committed to fostering and advancing diversity and inclusion in our own workplace and beyond by ensuring every individual within our firm has a number of opportunities to grow professionally and personally, from our training and development opportunities and firmwide networks to benefits, wellness and personal finance offerings and mindfulness programs. Learn more about our culture, benefits, and people at GS.com/careers. We’re committed to finding reasonable accommodations for candidates with special needs or disabilities during our recruiting process. Learn more: https://www.goldmansachs.com/careers/footer/disability-statement.html",
    },
  ];
  return (
    <>
      <div className="bg-light py-5">
        <div className="container">
          <h4>Browse Jobs</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Green square</li>
              <li className="breadcrumb-item active" aria-current="page">
                Browse Jobs - List Layout
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-9">
            <div className="px-2">
              {categories.map((category) => (
                <JobCategory
                  name={category}
                  endpoint={`/${category}`}
                  jobs={jobs}
                  isCategoryPage={false}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-3 border-start">
            <h5>Filters</h5>
            <hr />
            <form action="">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Keywords
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Location
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Job Type
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Freelance
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Full Time
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Internship
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Part Time
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Temporary
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Category
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                >
                  <option selected>Choose a category...</option>
                  <option value="1">Accounting/Finance</option>
                  <option value="2">Automative Jobs</option>
                  <option value="3">Construction/Facilities</option>
                  <option value="3">Education Training</option>
                  <option value="3">Healthcare</option>
                  <option value="3">Market & Customer Research</option>
                  <option value="3">Restaurant/Food Service</option>
                  <option value="3">Sales & Marketing</option>
                  <option value="3">Sales & Marketing</option>
                </select>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-success">Filter</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ViewJobs;
