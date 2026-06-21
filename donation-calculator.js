let donationType = "monthly";
let amount = 40;

function setType(type) {
    donationType = type;

    document
        .querySelectorAll(".tab")
        .forEach((btn) => btn.classList.remove("active"));

    if (type === "monthly") {
        document.querySelectorAll(".tab")[0].classList.add("active");
    } else {
        document.querySelectorAll(".tab")[1].classList.add("active");
    }

    updateUI();
}

function selectAmount(value) {
    amount = value;
    updateUI();
}

function customDonation() {
    amount = Number(document.getElementById("customAmount").value) || 0;

    updateUI();
}

function updateUI() {
    document.getElementById("amountDisplay").textContent = amount;

    document.getElementById("donationType").textContent =
        donationType === "monthly" ? "/month" : "one-time";

    // Example impact formula:
    // every $3.33 helps 1 person/year

    const people = Math.max(1, Math.round(amount / 3.33));

    document.getElementById("peopleCount").textContent = people;
}

updateUI();
