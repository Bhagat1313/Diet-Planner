document.getElementById("dietForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value;
    let calories = document.getElementById("calories").value;
    let category = document.getElementById("category").value;

    // Create new list item
    let li = document.createElement("li");
    li.textContent = `${name} - ${calories} kcal (${category})`;

    // Add to list
    document.getElementById("dietList").appendChild(li);

    // Clear form fields
    document.getElementById("dietForm").reset();
});
