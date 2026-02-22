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
    status: "applied",
  },
  {
    id: 2,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
  },
  {
    id: 3,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
  },
  {
    id: 4,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
  },
  {
    id: 5,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
  },
  {
    id: 6,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
  },
  {
    id: 7,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
  },
  {
    id: 8,
    company: "Google",
    position: "Front-end developer",
    location: "Kuala Lumpur",
    Type: "full time",
    salary: "RM 5000- RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
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

  // updated dashboard

  function updateDashboard() {
    document.getElementById("totalCount").innerText = jobs.length;

    let interviewTotal = jobs.filter(function (job) {
      return job.status === "interview";
    });

    let rejectedTotal = jobs.filter(function (job) {
      return job.status === "rejected";
    });

    document.getElementById("interviewCount").innerText = interviewTotal.length;
    document.getElementById("rejectedCount").innerText = rejectedTotal.length;
  }

  //   create div for jobs

  for (let i = 0; i < filteredJobs.length; i++) {
    let job = filteredJobs[i];

    let card = document.createElement("div");
    card.className = "bg-gray-50 p-5 rounded-xl shadow mt-4";

    let statusBadge = "";

    if (job.status === "interview") {
      statusBadge = `
         <span class="bg-green-100 text-green-600 px-3 py-2 rounded text-sm">
          INTERVIEW
         </span>
      `;
    } else if (job.status === "rejected") {
      statusBadge = `
         <span class="bg-red-200 text-red-600 px-3 py-2 rounded text-sm">Rejected</span>
      `;
    } else {
      statusBadge = `
         <span class="bg-gray-200 text-gray-600 px-3 py-2 rounded text-sm">Nt Applied</span>
      `;
    }

    card.innerHTML = `
       <h3 class="text-xl font-bold">${job.position}</h3>
        <div class="flex justify-end">
          <div><button class="deleteBtn bg-red-500 text-white px-3 py-1 rounded" data-id=${job.id}><i class="deleteBtn fa-regular fa-trash-can" data-id=${job.id}></i>Delete</button></div>
        </div>
       <p>${job.company}</p>
       <p>${job.location} ${job.Type}</p>
       <p class="mb-4">${job.salary}</p>

       <div class="mb-3">${statusBadge}</div>
       
       <p>${job.description}</p>
       

       <div class="flex gap-3 mt-4">
           <button class="interviewBtn bg-green-500 text-white px-3 py-1 rounded" data-id=${job.id}>Interview</button>
           <button class="rejectedBtn bg-green-500 text-white px-3 py-1 rounded" data-id=${job.id}>Rejected</button>  
           
       </div>
       
    `;

    jobContainer.appendChild(card);
  }

  updateDashboard();
}

// button section click

document.addEventListener("click", function (event) {
  // tab button
  if (event.target.id === "allTab") {
    currentTab = "all";
    setActiveTab(event.target);
    renderJobs();
  }

  if (event.target.id === "interviewTab") {
    currentTab = "interview";
    setActiveTab(event.target);
    renderJobs();
  }

  if (event.target.id === "rejectedTab") {
    currentTab = "rejected";
    setActiveTab(event.target);
    renderJobs();
  }

  // interview

  if (event.target.classList.contains("interviewBtn")) {
    let id = Number(event.target.dataset.id);

    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === id) {
        jobs[i].status = "interview";
      }
    }
    renderJobs();
  }

  // rejected button

  if (event.target.classList.contains("rejectedBtn")) {
    let id = Number(event.target.dataset.id);

    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === id) {
        jobs[i].status = "rejected";
      }
    }
    renderJobs();
  }

  // delete button

  if (event.target.classList.contains("deleteBtn")) {
    let id = Number(event.target.dataset.id);

    jobs = jobs.filter(function (job) {
      return job.id !== id;
    });

    renderJobs();
  }
});

// active tab

function setActiveTab(activeButton) {
  let tabs = document.querySelectorAll(".tab-btn");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("bg-black", "text-white");
    tabs[i].classList.add("bg-gray-200");
  }

  activeButton.classList.remove("bg-gray-200");
  activeButton.classList.add("bg-black", "text-white");
}

renderJobs();
