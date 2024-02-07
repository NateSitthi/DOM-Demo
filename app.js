// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded"), function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
  }
    // optionally update when fields update
    document.getElementById('name').addEventListener('change', function (eventData) {
      let nameOutput = document.getElementById('nameOutput');
      // console.log(eventData);
      nameOutput.innerText = eventData.target.value;
    });
    document.getElementById('type').addEventListener('change', function (eventData) {
      let nameOutput = document.getElementById('nameOutput');
      let info = document.getElementById('info');
      nameOutput.innerText = formData.name;
      info.innerText = formData.type;
    })

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault();
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);
        // output as an object
        console.log(Object.fromEntries(formData));
      
        // ...or iterate through the name-value pairs
        for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
      // });
    // Log readiness to console
      let nameOutput = document.getElementById('nameOutput');
      let info = document.getElementById('info');
      nameOutput.innerText = formData.name;
      info.innerText = formData.type;

    console.log("Ready");
});

function processForm(form){

}