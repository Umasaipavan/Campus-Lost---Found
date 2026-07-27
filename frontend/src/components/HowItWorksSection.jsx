const steps = [
  { number: '1', title: 'Post a lost or found report', description: 'Tell campus exactly what you lost or found so the community can help.' },
  { number: '2', title: 'Browse verified item listings', description: 'Search by category, location, and status to find matches fast.' },
  { number: '3', title: 'Connect and recover securely', description: 'Use in-app messages and claim instructions to complete the recovery.' }
];

function HowItWorksSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <p className="section-sup">Easy workflow</p>
          <h2 className="section-title">Three simple steps from report to recovery.</h2>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.number} className="process-card">
              <div className="process-icon">{step.number}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
