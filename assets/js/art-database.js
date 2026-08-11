/**
 * art-database.js
 * Single source of truth for painting metadata: title, image, date,
 * size, and award/ownership info. Used by modal-handler.js (award text),
 * sidebar-left.html (full gallery), and index.html (recent works).
 *
 * Ordered oldest -> newest. Add new paintings to the bottom of this list;
 * "Recent Works" on index.html pulls the last 6 entries.
 */
var artDatabase = {
    "NotInMySubway.png": {
        title: "Not in my Subway",
        image: "assets/Art/NotInMySubway.png",
        date: "October 18, 2025",
        size: "20\"x16\"",
        award: "This painting was gifted and is now privately owned"
    },
    "GalaxyInGloss.png": {
        title: "A Galaxy in Gloss",
        image: "assets/Art/GalaxyInGloss.png",
        date: "October 27, 2025",
        size: "20\"x16\"",
        award: "This painting sold for $50 USD and is now privately owned"
    },
    "AGrassyBlend.png": {
        title: "A Grassy Blend",
        image: "assets/Art/AGrassyBlend.png",
        date: "October 27, 2025",
        size: "14\"x11\"",
        award: "This painting sold for $100 USD and is now privately owned"
    },
    "Violence.png": {
        title: "Violence",
        image: "assets/Art/Violence.png",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "Poison.png": {
        title: "Poison",
        image: "assets/Art/Poison.png",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "Blood.png": {
        title: "Blood",
        image: "assets/Art/Blood.png",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "Depression.png": {
        title: "Depression",
        image: "assets/Art/Depression.png",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "ConfettiConnections.png": {
        title: "Confetti Connections",
        image: "assets/Art/ConfettiConnections.png",
        date: "November 1, 2025",
        size: "30\"x40\"",
        award: "This painting sold for $75 USD and is now privately owned"
    },
    "HollowSoul.png": {
        title: "A Hollow Soul",
        image: "assets/Art/HollowSoul.png",
        date: "November 19, 2025",
        size: "36\"x26\"",
        award: "This painting sold for $300 USD and is now privately owned"
    },
    "ChildsPlay.png": {
        title: "Child's Play",
        image: "assets/Art/ChildsPlay.png",
        date: "January 14, 2026",
        size: "20\"x20\"",
        award: "No current information"
    },
    "MutedShine.png": {
        title: "Muted Shine",
        image: "assets/Art/MutedShine.png",
        date: "January 14, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "SpillGlass.png": {
        title: "Spill a Little in the Glass",
        image: "assets/Art/SpillGlass.png",
        date: "August 6, 2026",
        size: "14\"x18\"",
        award: "No current information"
    },
    "Conflict.png": {
        title: "Conflict",
        image: "assets/Art/Conflict.png",
        date: "August 6, 2026",
        size: "16\"x20\"",
        award: "No current information"
    },
    "MutedGlass.png": {
        title: "Muted Glass",
        image: "assets/Art/MutedGlass.png",
        date: "August 6, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "Spires.png": {
        title: "Spires",
        image: "assets/Art/Spires.png",
        date: "August 6, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "AMatch.png": {
        title: "A Match",
        image: "assets/Art/AMatch.png",
        date: "August 6, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "DarkDistricts.png": {
        title: "DarkDistricts",
        image: "assets/Art/DarkDistricts.png",
        date: "August 6, 2026",
        size: "16\"x20\"",
        award: "No current information"
    }
};
