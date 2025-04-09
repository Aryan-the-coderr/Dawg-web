// Function to update the letter box and display the image related to the letter
function showLetter(letter) {
    // Change the letter in the letter box
    document.getElementById('letter-box').innerText = letter;

    // Show the corresponding image for the letter
    const imageContainer = document.getElementById('image-container');
    const image = document.getElementById('letter-image');

    switch(letter) {
        case 'A':
            image.src = 'images/apple.jpg';  // Use an apple image for "A"
            break;
        case 'B':
            image.src = 'images/ball.jpg';  // Use a ball image for "B"
            break;
        case 'C':
            image.src = 'images/cat.jpg';   // Use a cat image for "C"
            break;
        case 'D':
            image.src = 'images/dog.jpg';   // Use a dog image for "D"
            break;
        case 'E':
            image.src = 'images/elephant.jpg'; // Use an elephant image for "E"
            break;
        // Add more cases for other letters as needed
        default:
            image.src = '';
    }

    // Display the image
    imageContainer.style.display = 'flex';
}
