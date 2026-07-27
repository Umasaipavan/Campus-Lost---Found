const stats = [
  { label: 'Total Items', value: '1,240' },
  { label: 'Lost Items', value: '496' },
  { label: 'Found Items', value: '632' },
  { label: 'Recoveries', value: '312' },
  { label: 'Active Users', value: '8,700' }
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-header">
          <p className="section-sup">Trusted on campus</p>
          <h2 className="section-title">Campus recovery works better when it’s centralized.</h2>
        </div>
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
