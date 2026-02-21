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

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  //   create div for jobs

  for (let i = 0; i < filteredJobs.length; i++) {
    let job = filteredJobs[i];

    let card = document.createElement("div");
    card.className = "bg-gray-50 p-5 rounded-xl shadow";

    card.innerHTML = `
       <h3 class="text-xl font-bold">${job.position}</h3>
       <p>${job.company}</p>
       <p>${job.location} ${job.tyoe}</p>
       <p>${job.salary}</p>
       <p>${job.description}</p>
       
    `;
   
  }

 
}

