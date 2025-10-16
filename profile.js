const profilePic = document.getElementById("profilePic");
    const fileInput = document.getElementById("fileInput");
    const saveBtn = document.getElementById("saveBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const output = document.getElementById("output");

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const bio = document.getElementById("bio");
    const website = document.getElementById("website");

    const defaultData = {
      username: username.value,
      email: email.value,
      bio: bio.value,
      website: website.value
    };

    // Click profile image to upload
    profilePic.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    // Save button
    saveBtn.addEventListener("click", () => {
      output.textContent = `✅ Saved Changes:
      Username: ${username.value}
      Email: ${email.value}
      Bio: ${bio.value}
      Website: ${website.value}`;
    });

    // Cancel button resets fields
    cancelBtn.addEventListener("click", () => {
      username.value = defaultData.username;
      email.value = defaultData.email;
      bio.value = defaultData.bio;
      website.value = defaultData.website;
      output.textContent = "❌ Changes canceled. Restored default values.";
    });
  