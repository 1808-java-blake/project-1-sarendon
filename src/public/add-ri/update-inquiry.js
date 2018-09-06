console.log('loading js');
function updateRequest(event) {
  event.preventDefault();

  const ri_id = document.getElementById('input-transid').value;
  const status = document.getElementById('input-status').value;
  const user = JSON.parse(localStorage.getItem('user'));


  const reinb = {

    ri_id,
    status

  }
  console.log(reinb);
  
  fetch('http://localhost:8888/ri/update_inquiries', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reinb)
  })
  .then(resp => {
    window.location = 'http://localhost:8888/home/home.html';
  })
  .catch(err => {
    console.log(err);
  });
}