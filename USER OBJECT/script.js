// Create User Object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john@example.com",

    // Method
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Display User Details
function showUser() {
    document.getElementById("output").innerHTML = `
        <h3>User Details</h3>
        <p><strong>Name:</strong> ${user.getFullName()}</p>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
}

// Modify Existing Property
function modifyUser() {
    user.age = 30;
    user.email = "john.doe@gmail.com";

    document.getElementById("output").innerHTML = `
        <h3>User Modified</h3>
        <p>Age updated to ${user.age}</p>
        <p>Email updated to ${user.email}</p>
    `;
}

// Add New Property
function addProperty() {
    user.city = "New York";

    document.getElementById("output").innerHTML = `
        <h3>New Property Added</h3>
        <p>City: ${user.city}</p>
    `;
}