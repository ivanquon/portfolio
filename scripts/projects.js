fetch("../assets/data/projects.json")
  .then((response) => response.json())
  .then((projects) => {
    var projectsContainer = document.getElementById("projectList");
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");

      // Create HTML structure for each project
      projectDiv.innerHTML = `
            <div class="card">
                <div class="row g-0">
                    <div class="col-lg">
                        <div class="image-container">
                            <img src="${
                              project.image
                            }" class="img-fluid rounded-start" alt="${
        project.alt
      }">
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body row">
                            <h2 class="card-title col">
                            <strong>${project.name}</strong>
                            </h2>
                            <div class="col ml-auto text-end">
                                <p>${project.startdate} - ${project.enddate}</p>
                            </div>
                            <ul class="mx-3">
                            ${project.bullets
                              .map((bullet) => `<li>${bullet}</li>`)
                              .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      `;

      // Append each project to the container
      projectsContainer.appendChild(projectDiv);
    });
  });
