const actsData = [
  {
    title: "Right to Information Act, 2005",
    description: "This act enables citizens to request information from public authorities, promoting transparency and accountability in governance.",
    
  
  },
  {
    title: "Goods and Services Tax (GST) Act, 2017",
    description: "Implemented to simplify the taxation system in India, GST subsumed various indirect taxes into one unified tax regime."
  },
  {
    title: "The Aadhaar Act, 2016",
    description: "Introduced to provide a unique identity number, Aadhaar, to residents of India, aiming to streamline the delivery of subsidies and benefits."
  },
  {
    title: "The Companies Act, 2013",
    description: "Governs the incorporation, regulation, and winding up of companies in India, aiming to improve corporate governance and ease of doing business."
  },
  {
    title: "The National Food Security Act, 2013",
    description: "Aims to provide subsidized food grains to eligible beneficiaries, ensuring food security for millions of Indians living below the poverty line."
  },
];

function createActCard(act) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = act.title;

  const description = document.createElement("p");
  description.textContent = act.description;

  const button = document.createElement("button");
  button.textContent = "Compliances";
  button.classList.add("description-btn");
  button.onclick = function() {
    window.location.href = 'compliance.html';
  };

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(button);

  return card;
}

document.addEventListener("DOMContentLoaded", function () {
  fetchActs();
});

function fetchActs() {
  fetch("api.php")
      .then(response => response.json())
      .then(data => displayActs(data))
      .catch(error => console.error("Error fetching acts:", error));
}

function displayActs(acts) {
  const actsContainer = document.getElementById("actsContainer");

  // Clear previous acts
  actsContainer.innerHTML = "";

  // Display acts
  acts.forEach(act => {
      const actElement = document.createElement("div");
      actElement.innerHTML = `
          <div class="act">
              <h2>${act.title}</h2>
              <p>${act.description}</p>
              <p><strong>Date:</strong> ${act.date}</p>
              <p><strong>Category:</strong> ${act.category}</p>
              <p><strong>Ministry:</strong> ${act.ministry}</p>
              <p><strong>State:</strong> ${act.state}</p>
              <p><strong>Ministry Selection:</strong> ${act.ministry_selection}</p>
          </div>
      `;
      actsContainer.appendChild(actElement);
  });
}






function displayActs(acts) {
  const actsContainer = document.getElementById("actsContainer");
  actsContainer.innerHTML = "";

  acts.forEach(act => {
    const actCard = createActCard(act);
    actsContainer.appendChild(actCard);
  });
}

function searchActs(event) {
  const searchInput = event.target.value.toLowerCase();
  
  const matchingActs = actsData.filter(act => {
    return (
      act.title.toLowerCase().includes(searchInput) ||
      act.description.toLowerCase().includes(searchInput)
    );
  });

  displayActs(matchingActs);
}

window.addEventListener("load", () => {
  displayActs(actsData);
  document.getElementById("searchInput").addEventListener("input", searchActs);
});
