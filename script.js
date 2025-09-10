const tabs = document.querySelectorAll('.tab');
const content = document.getElementById('content');

const contentMap = {
  'about': `
    <div class="hero-text">
      <h1>Waste shouldn’t be your business, it’s ours.</h1>
      <p>Stop wasting your time and let Orbit help you with your waste management needs.</p>
      <button class="start-journey-btn">Start your Orbit journey &rarr;</button>
    </div>
    <div class="service-cards">
      <div class="card">
        <img src="hazardous-waste.png" alt="Hazardous Waste Management" />
        <p>Hazardous Waste Management</p>
      </div>
      <div class="card">
        <img src="it-asset.png" alt="IT Asset, General Scrap & Recyclables Disposal" />
        <p>IT Asset, General Scrap & Recyclables Disposal</p>
      </div>
      <div class="card">
        <img src="waste-bins.png" alt="Waste Bins" />
        <p>Waste Bins</p>
      </div>
      <div class="card">
        <img src="hard-drive.png" alt="Hard Drive Degaussing" />
        <p>Hard Drive Degaussing</p>
      </div>
    </div>
  `,
  'waste-bins': `
    <h1>Waste Bins</h1>
    <p>Information and details related to Waste Bins services.</p>
    <!-- Add more content/images as needed -->
  `
};

// Add click event listeners to tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active to clicked tab
    tab.classList.add('active');
    // Replace content
    const selected = tab.getAttribute('data-tab');
    content.innerHTML = contentMap[selected] || '<p>Content not available.</p>';
  });
});
