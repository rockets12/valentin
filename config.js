const CONFIG = {
    valentineNam: "PIPILLL",

    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💗'], 
        bears: ['🧸', '🐻']                       
    },

    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I would like you to be your valentine❤️"           // Secret hover message
        },
        second: {
            text: "How much do you like me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },
    loveMessages: {
        extreme: "OMG, YEYYYYYY", 
        high: "HAHAHAHA YEYY 💝",             
        normal: "HEHE🥰"     
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💓",
        message: "Now come get your gift",
        emojis: "🎁💖🤗❤️" 
    },

    colors: {
        backgroundStart: "#F8E7F6",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#F8E7F6",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#B82132",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#09122C"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
