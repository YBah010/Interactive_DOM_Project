// ==========================================
// JavaScript Interactivity Assignment
// ==========================================


// Requirement 1:
// Button changes visible content

const changeMessageButton =
    document.getElementById("change-message-button");

const messageText =
    document.getElementById("message-text");

if (changeMessageButton && messageText) {

    changeMessageButton.addEventListener("click", function () {

        messageText.textContent =
            "Welcome! JavaScript successfully changed this message.";

    });

}



// Requirement 2:
// Style changes in real time as user types

const nameInput =
    document.getElementById("name-input");

const namePreview =
    document.getElementById("name-preview");

if (nameInput && namePreview) {

    nameInput.addEventListener("input", function () {

        const enteredName =
            nameInput.value.trim();

        if (enteredName !== "") {

            namePreview.textContent =
                "Hello, " + enteredName + "!";

            namePreview.classList.add(
                "name-preview-active"
            );

        } else {

            namePreview.textContent =
                "Your name will appear here.";

            namePreview.classList.remove(
                "name-preview-active"
            );

        }

    });

}



// Requirement 3:
// Dynamic list

const skillInput =
    document.getElementById("skill-input");

const addSkillButton =
    document.getElementById("add-skill-button");

const skillsList =
    document.getElementById("skills-list");

if (skillInput && addSkillButton && skillsList) {

    function addSkill() {

        const skillText =
            skillInput.value.trim();

        // Do not add empty items
        if (skillText === "") {
            return;
        }


        // Create a new list item
        const newSkill =
            document.createElement("li");


        // Create text for the new skill
        const skillName =
            document.createElement("span");

        skillName.textContent =
            skillText;


        // Bonus: create Remove button
        const removeButton =
            document.createElement("button");

        removeButton.type =
            "button";

        removeButton.textContent =
            "Remove";

        removeButton.classList.add(
            "remove-skill-button"
        );


        // Remove the item when clicked
        removeButton.addEventListener(
            "click",
            function () {

                newSkill.remove();

            }
        );


        newSkill.classList.add(
            "dynamic-skill"
        );


        // Add text and button to list item
        newSkill.appendChild(
            skillName
        );

        newSkill.appendChild(
            removeButton
        );


        // Add new item to the list
        skillsList.appendChild(
            newSkill
        );


        // Clear the input
        skillInput.value =
            "";

        skillInput.focus();

    }


    // Add skill with button
    addSkillButton.addEventListener(
        "click",
        addSkill
    );


    // Also allow Enter key
    skillInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                addSkill();

            }

        }
    );

}