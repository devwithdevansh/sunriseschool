const formData = {
  studentName: 'Frontend Test',
  parentName: 'Test Parent',
  phone: '9998887776',
  email: 'frontend@example.com',
  class: 'Class 1-5',
  message: 'This is simulating the exact frontend fetch request'
};

fetch('http://localhost:5000/api/inquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
.then(async response => {
  console.log("Response OK:", response.ok);
  console.log("Status:", response.status);
  const data = await response.json();
  console.log("Data:", data);
})
.catch(err => console.error("Error:", err));
