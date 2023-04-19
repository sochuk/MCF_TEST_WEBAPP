
const api_url =
    "https://localhost:7193/api/";

$(document).ready(function () {
    var select = document.getElementById('location_storage');
    var dataLocation = getLocationStorage(api_url + 'MstStorageLocation')
    for (var i in dataLocation) {
        $(select).append('<option value=' + data[i] + '>' + data[i] + '</option>');
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", onSubmit);
});

async function onSubmit(event) {
   await postData();
    event.preventDefault();
  }

async function postData() {
    await fetch(api_url + 'TrBpkb', {
        method: "POST",
        body: JSON.stringify({
            AgreementNumber: document.getElementById('agreement_number').value,
            BpkbNo: document.getElementById('bpkb_no').value,
            BranchId: document.getElementById('branch_id').value,
            BpkbDate: document.getElementById('bpkb_date').value,
            FakturNo: document.getElementById('faktur_no').value,
            FakturDate: document.getElementById('faktur_date').value,
            LocationId: document.getElementById('location_id').value,
            BpkbDateIn: document.getElementById('bpkb_date_in').value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

async function getLocationStorage(url) {
    const response = await fetch(url);
    var data = await response.json();

    return data;
}