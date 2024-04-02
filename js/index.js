        // Define the texts to display with typewriter effect
        const feedHopeText = "Feed Hope,";
        const endHungerText = "End Hunger";

        // Get the elements where the typewriter effect will be applied
        const feedHopeElement = document.getElementById("typewriter-feed-hope");
        const endHungerElement = document.getElementById("typewriter-end-hunger");

        // Function to display text with typewriter effect
        function typeWriter(text, element, speed) {
            let index = 0;
            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
            }
            element.textContent = ""; // Clear the previous text
            type();
        }

        // Start the typewriter effect for Feed Hope
        typeWriter(feedHopeText, feedHopeElement, 100);

        // Start the typewriter effect for End Hunger after a delay
        setTimeout(() => {
            typeWriter(endHungerText, endHungerElement, 100);
        }, feedHopeText.length * 100); // Wait until Feed Hope text finishes typing