// data job

let jobs = [
  {
    id: 1,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
  {
    id: 2,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
  {
    id: 3,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
  {
    id: 4,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
  {
    id: 5,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
  {
    id: 6,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
  {
    id: 7,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
  {
    id: 8,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "all",
  },
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
// console.log(jobContainer);

const emptyState = document.getElementById("emptyState");
// console.log(emptyState);

function renderJobs() {
  jobContainer.innerHTML = "";

  let filteredJobs = [];

  if (currentTab === "all") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter(function (job) {
      return job.status === currentTab;
    });
  }

  document.getElementById("tabCount").innerText = filteredJobs.length;
}
