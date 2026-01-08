var players = 2;
const radioButtons = document.querySelectorAll('input[name="player-count"]');
const counters = document.getElementById("counters");

function addTracker(parent, label) {
  const tracker = document.createElement("div");
  tracker.innerHTML = `
    <div class="d-flex flex-column gap-2">
      <input value="${label}"/>
      <div class="d-flex align-items-center justify-content-center gap-2">
        <button class="btn btn-outline-secondary btn-sm decrement">−</button>
        <input class="count" type="text" inputmode="numeric" value="40""/>
        <button class="btn btn-outline-secondary btn-sm increment">+</button>
      </div>
    </div>
  `;

  const input = tracker.querySelector(".count");
  const decrementBtn = tracker.querySelector(".decrement");
  const incrementBtn = tracker.querySelector(".increment");

  decrementBtn.addEventListener("click", () => {
    input.value = Number(input.value) - 1;
  });

  incrementBtn.addEventListener("click", () => {
    input.value = Number(input.value) + 1;
  });

  parent.appendChild(tracker);
}

function addCounters() {
  for (let i = 1; i <= players; i++) {
    const card = document.createElement("div");
    card.className = "d-flex justify-content-center";

    card.innerHTML = `
      <div class="card text-center d-inline-block">
        <div class="card-body">
          <h3 class="card-title">Player ${i}</h3>
          <div class="d-flex flex-column gap-4 trackers">
          </div>
          <button class="btn btn-outline-secondary w-100 add-tracker">Add Tracker</button>
        </div>
      </div>
      `;

    const trackers = card.querySelector(".trackers");
    const addTrackerBtn = card.querySelector(".add-tracker");

    addTrackerBtn.addEventListener("click", () => {
      addTracker(trackers, "HP");
    });

    addTracker(trackers, "HP");

    counters.appendChild(card);
  }
}

radioButtons.forEach((btn) => {
  btn.addEventListener("change", () => {
    players = btn.value;
    counters.innerHTML = "";
    addCounters();

    console.log(players);
  });
});

addCounters();
