// Get references to DOM elements for chat functionality
const chat = document.getElementById('chat');
const input = document.getElementById('input');
const sendButton = document.getElementById('sendButton');
const micButton = document.getElementById('micButton');
let isRecording = false; // Track recording state

/**
 * SEND MESSAGE FUNCTION
 * This function handles sending a message when user clicks send button or presses Enter
 * It takes the text from input field, adds it to chat, clears input, and simulates bot response
 */
function sendMessage() {
    const message = input.value.trim(); // Get message text and remove extra spaces
    if (message) { // Only send if message is not empty
        addMessage(message, 'user'); // Add user message to chat
        input.value = ''; // Clear the input field
        // Simulate bot response after 1 second delay
        setTimeout(() => {
            addMessage('Thanks for your message!', 'bot');
        }, 1000);
    }
}

/**
 * ADD MESSAGE TO CHAT FUNCTION
 * This function creates a new message element and adds it to the chat area
 * @param {string} text - The message text to display
 * @param {string} sender - Either 'user' or 'bot' to determine message styling and position
 */
function addMessage(text, sender) {
    // Create the main message container
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`; // Add CSS classes for styling
    
    // Create avatar element for the sender
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    
    // Create text container for the message content
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    textDiv.textContent = text; // Set the message text
    
    // Assemble the message by adding avatar and text to container
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(textDiv);
    chat.appendChild(messageDiv); // Add complete message to chat area
    chat.scrollTop = chat.scrollHeight; // Scroll to bottom to show newest message
}

/**
 * TOGGLE RECORDING FUNCTION
 * This function starts or stops voice recording based on current state
 * It's called when user clicks the microphone button
 */
function toggleRecording() {
    if (!isRecording) {
        startRecording(); // Start recording if not currently recording
    } else {
        stopRecording(); // Stop recording if currently recording
    }
}

/**
 * START RECORDING FUNCTION
 * This function initializes speech recognition and starts listening to user's voice
 * It uses the browser's built-in Speech Recognition API
 */
function startRecording() {
    // Check if browser supports speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        // Create speech recognition object (works in Chrome/Edge)
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        // Configure speech recognition settings
        recognition.continuous = false; // Stop after one sentence
        recognition.interimResults = false; // Only final results, no partial ones
        recognition.lang = 'en-US'; // Set language to English

        // EVENT: When recording starts
        recognition.onstart = function() {
            isRecording = true; // Update recording state
            micButton.classList.add('recording'); // Add visual feedback (red color, pulse)
            micButton.innerHTML = '<i class="fas fa-stop"></i>'; // Change icon to stop
            micButton.title = 'Stop recording'; // Update tooltip
        };

        // EVENT: When speech is successfully recognized
        recognition.onresult = function(event) {
            // Get the transcribed text from the speech
            const transcript = event.results[0][0].transcript;
            input.value = transcript; // Put the text in the input field
        };

        // EVENT: When recording ends (automatically or manually)
        recognition.onend = function() {
            stopRecording(); // Clean up and reset UI
        };

        // EVENT: When an error occurs during recognition
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error); // Log error for debugging
            stopRecording(); // Clean up and reset UI
            alert('Voice recording failed. Please try again.'); // Show user-friendly error
        };

        recognition.start(); // Begin listening for speech
    } else {
        // Show error if browser doesn't support speech recognition
        alert('Speech recognition is not supported in your browser.');
    }
}

/**
 * STOP RECORDING FUNCTION
 * This function stops the recording and resets the microphone button to normal state
 */
function stopRecording() {
    isRecording = false; // Update recording state
    micButton.classList.remove('recording'); // Remove visual feedback
    micButton.innerHTML = '<i class="fas fa-microphone"></i>'; // Reset to microphone icon
    micButton.title = 'Start voice recording'; // Reset tooltip
}

// EVENT LISTENERS - These connect user actions to functions
sendButton.addEventListener('click', sendMessage); // Send message when send button clicked
micButton.addEventListener('click', toggleRecording); // Toggle recording when mic button clicked

// Listen for Enter key press in input field to send message
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

/**
 * FRIEND SELECTION FUNCTIONALITY
 * This section handles clicking on friends in the friends list
 * When a friend is clicked, it becomes active and changes the chat title
 */
const friendItems = document.querySelectorAll('.friend-item'); // Get all friend items
friendItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all friends
        friendItems.forEach(f => f.classList.remove('active'));
        // Add active class to clicked friend
        this.classList.add('active');
        // Get friend's name and update chat title
        const friendName = this.querySelector('.friend-name').textContent;
        document.querySelector('.title').textContent = friendName;
        // Clear chat when switching friends
        chat.innerHTML = '';
    });
});

/**
 * SEARCH FUNCTIONALITY
 * This section handles searching through the friends list
 * As user types, it filters friends based on name matching
 */
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase(); // Get search text in lowercase
    // Check each friend item
    friendItems.forEach(item => {
        const friendName = item.querySelector('.friend-name').textContent.toLowerCase();
        // Show friend if name contains search term, hide if not
        if (friendName.includes(searchTerm)) {
            item.style.display = 'flex'; // Show friend
        } else {
            item.style.display = 'none'; // Hide friend
        }
    });
});