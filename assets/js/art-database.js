/**
 * art-database.js
 * Single source of truth for painting metadata: title, image, date,
 * size, and award/ownership info. Used by modal-handler.js (award text),
 * sidebar-left.html (full gallery), and index.html (recent works).
 *
 * `image` is the full-resolution original, used by the modal/lightbox.
 * `thumb` is a small, compressed copy (assets/Art/thumbs/) used only for
 * the gallery grid thumbnails, so the grid doesn't download full-res files
 * just to show a few-hundred-pixel-wide box.
 *
 * Ordered oldest -> newest. Add new paintings to the bottom of this list;
 * "Recent Works" on index.html pulls the last 6 entries.
 */
var artDatabase = {
    "NotInMySubway.png": {
        title: "Not in my Subway",
        image: "assets/Art/NotInMySubway.png",
        thumb: "assets/Art/thumbs/NotInMySubway.jpg",
        date: "October 18, 2025",
        size: "20\"x16\"",
        award: "This painting was gifted and is now privately owned"
    },
    "GalaxyInGloss.png": {
        title: "A Galaxy in Gloss",
        image: "assets/Art/GalaxyInGloss.png",
        thumb: "assets/Art/thumbs/GalaxyInGloss.jpg",
        date: "October 27, 2025",
        size: "20\"x16\"",
        award: "This painting sold for $50 USD and is now privately owned"
    },
    "AGrassyBlend.png": {
        title: "A Grassy Blend",
        image: "assets/Art/AGrassyBlend.png",
        thumb: "assets/Art/thumbs/AGrassyBlend.jpg",
        date: "October 27, 2025",
        size: "14\"x11\"",
        award: "This painting sold for $100 USD and is now privately owned"
    },
    "Violence.png": {
        title: "Violence",
        image: "assets/Art/Violence.png",
        thumb: "assets/Art/thumbs/Violence.jpg",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "Poison.png": {
        title: "Poison",
        image: "assets/Art/Poison.png",
        thumb: "assets/Art/thumbs/Poison.jpg",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "Blood.png": {
        title: "Blood",
        image: "assets/Art/Blood.png",
        thumb: "assets/Art/thumbs/Blood.jpg",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "Depression.png": {
        title: "Depression",
        image: "assets/Art/Depression.png",
        thumb: "assets/Art/thumbs/Depression.jpg",
        date: "October 28, 2025",
        size: "14\"x11\"",
        award: "No current information"
    },
    "ConfettiConnections.png": {
        title: "Confetti Connections",
        image: "assets/Art/ConfettiConnections.png",
        thumb: "assets/Art/thumbs/ConfettiConnections.jpg",
        date: "November 1, 2025",
        size: "30\"x40\"",
        award: "This painting sold for $75 USD and is now privately owned"
    },
    "HollowSoul.png": {
        title: "A Hollow Soul",
        image: "assets/Art/HollowSoul.png",
        thumb: "assets/Art/thumbs/HollowSoul.jpg",
        date: "November 19, 2025",
        size: "36\"x26\"",
        award: "This painting sold for $300 USD and is now privately owned"
    },
    "ChildsPlay.png": {
        title: "Child's Play",
        image: "assets/Art/ChildsPlay.png",
        thumb: "assets/Art/thumbs/ChildsPlay.jpg",
        date: "January 14, 2026",
        size: "20\"x20\"",
        award: "No current information"
    },
    "MutedShine.png": {
        title: "Muted Shine",
        image: "assets/Art/MutedShine.png",
        thumb: "assets/Art/thumbs/MutedShine.jpg",
        date: "January 18, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "SpillGloss.png": {
        title: "Spill a Little in the Gloss",
        image: "assets/Art/SpillGloss.png",
        thumb: "assets/Art/thumbs/SpillGlass.jpg",
        date: "August 6, 2026",
        size: "14\"x18\"",
        award: "No current information"
    },
    "Conflict.png": {
        title: "Conflict",
        image: "assets/Art/Conflict.png",
        thumb: "assets/Art/thumbs/Conflict.jpg",
        date: "August 6, 2026",
        size: "16\"x20\"",
        award: "No current information"
    },
    "MutedGlass.png": {
        title: "Muted Glass",
        image: "assets/Art/MutedGlass.png",
        thumb: "assets/Art/thumbs/MutedGlass.jpg",
        date: "August 6, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "BrokenSpires.png": {
        title: "Broken Spires",
        image: "assets/Art/BrokenSpires.png",
        thumb: "assets/Art/thumbs/Spires.jpg",
        date: "August 6, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "BridgesUnbroken.png": {
        title: "Bridges Unbroken",
        image: "assets/Art/BridgesUnbroken.png",
        thumb: "assets/Art/thumbs/BridgesUnbroken.jpg",
        date: "August 6, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "AMatch.png": {
        title: "A Match",
        image: "assets/Art/AMatch.png",
        thumb: "assets/Art/thumbs/AMatch.jpg",
        date: "August 6, 2026",
        size: "20\"x16\"",
        award: "No current information"
    },
    "DarkDistricts.png": {
        title: "Dark Districts",
        image: "assets/Art/DarkDistricts.png",
        thumb: "assets/Art/thumbs/DarkDistricts.jpg",
        date: "August 6, 2026",
        size: "16\"x20\"",
        award: "No current information"
    }
};
