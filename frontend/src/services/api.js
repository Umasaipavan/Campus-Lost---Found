const API_BASE = 'http://localhost:8081/api';

export async function fetchHealth() {
  const response = await fetch(`${API_BASE}/health`);
  return response.json();
}
