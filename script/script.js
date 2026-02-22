// data job
let jobs = [
  {
    id: 1,
    company: "Google",
    position: "Front-end Developer",
    location: "Kuala Lumpur",
    Type: "Full-time",
    salary: "RM 5000 - RM 8000",
    description: "Develop scalable web applications using React.",
    status: "applied",
  },
  {
    id: 2,
    company: "Facebook",
    position: "Back-end Developer",
    location: "Singapore",
    Type: "Part-time",
    salary: "SGD 4000 - SGD 7000",
    description: "Build and maintain APIs using Node.js.",
    status: "applied",
  },
  {
    id: 3,
    company: "Apple",
    position: "iOS Developer",
    location: "San Francisco",
    Type: "Full-time",
    salary: "USD 7000 - USD 12000",
    description: "Develop and maintain iOS applications with Swift.",
    status: "applied",
  },
  {
    id: 4,
    company: "Microsoft",
    position: "Cloud Engineer",
    location: "Seattle",
    Type: "Contract",
    salary: "USD 6000 - USD 10000",
    description: "Work on Azure cloud infrastructure and deployment.",
    status: "applied",
  },
  {
    id: 5,
    company: "Amazon",
    position: "DevOps Engineer",
    location: "New York",
    Type: "Full-time",
    salary: "USD 6500 - USD 11000",
    description: "Manage CI/CD pipelines and AWS deployments.",
    status: "applied",
  },
  {
    id: 6,
    company: "Netflix",
    position: "UI/UX Designer",
    location: "Los Angeles",
    Type: "Full-time",
    salary: "USD 5000 - USD 9000",
    description: "Design user-friendly interfaces for streaming platform.",
    status: "applied",
  },
  {
    id: 7,
    company: "Tesla",
    position: "Software Engineer",
    location: "Austin",
    Type: "Internship",
    salary: "USD 4000 - USD 7000",
    description: "Develop software for autonomous vehicle systems.",
    status: "applied",
  },
  {
    id: 8,
    company: "Adobe",
    position: "Full-stack Developer",
    location: "San Jose",
    Type: "Full-time",
    salary: "USD 6000 - USD 10000",
    description: "Work on web applications using React and Node.js.",
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
         <span class="bg-green-200 text-black px-3 py-2 rounded text-sm">
          Interview
         </span>
      `;
    } else if (job.status === "rejected") {
      statusBadge = `
         <span class="bg-red-200 text-red-600 px-3 py-2 rounded text-sm">Rejected</span>
      `;
    } else {
      statusBadge = `
         <span class="bg-gray-200 text-black px-3 py-2 rounded text-sm">Not Applied</span>
      `;
    }

    card.innerHTML = `
       <h3 class="text-xl font-bold">${job.position}</h3>
        <div class="flex justify-end">
          <div><button class="deleteBtn bg-red-500 text-white px-3 py-1 rounded" data-id=${job.id}><i class="deleteBtn fa-regular fa-trash-can" data-id=${job.id}></i>Delete</button></div>
        </div>
       <div class="flex gap-4">
          <p>${job.company}</p> 
          <p>${job.location}</p>
       </div>
       
      <div class="flex gap-4 mt-3">
         <p class="text-[#64748B]">${job.Type}</p>
         <p class="mb-4 text-[#64748B]">${job.salary}</p>
      </div>
       <div class="mb-3 text-black font-bold">${statusBadge}</div>
       
       <p class="text-[#64748B]">${job.description}</p>
       

       <div class="flex gap-3 mt-4">
           <button class="interviewBtn bg-gray-100 text-green-400 font-semibold px-3 py-1 border-2 rounded" data-id=${job.id}>Interview</button>

           <button class="rejectedBtn bg-white text-red-600 font-semibold px-3 py-1 border-2 rounded" data-id=${job.id}>Rejected</button>  
           
       </div>
       
    `;

    jobContainer.appendChild(card);
  }

  updateDashboard();
}

// button section click

document.addEventListener("click", function (event) {

  const target = event.target;
  // tab button
  if (target.id === "allTab") {
    currentTab = "all";
    setActiveTab(target);
    renderJobs();
  }

  if (target.id === "interviewTab") {
    currentTab = "interview";
    setActiveTab(target);
    renderJobs();
  }

  if (target.id === "rejectedTab") {
    currentTab = "rejected";
    setActiveTab(target);
    renderJobs();
  }

  // interview

  if (target.classList.contains("interviewBtn")) {
    let id = Number(target.dataset.id);

    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === id) {
        jobs[i].status = "interview";
      }
    }
    renderJobs();
  }

  // rejected button

  if (target.classList.contains("rejectedBtn")) {
    let id = Number(target.dataset.id);

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
    tabs[i].classList.add("bg-gray-300", "text-black");
  }

  activeButton.classList.remove("bg-gray-300", "text-black");
  activeButton.classList.add("bg-black", "text-white");
}

renderJobs();
