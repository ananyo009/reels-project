const posts = [
  {
    likeCount: 120,
    isLiked: false,
    ismuted: true,
    commentCount: 15,
    shareCount: 5,
    username: "ananyo_mitra",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Solo leveling",
    video: "./reels/one.mp4",
    isFollowed: true,
  },
  {
    likeCount: 340,
    isLiked: true,
    ismuted: true,
    commentCount: 42,
    shareCount: 12,
    username: "Sambit_sen",
    profilePicture:
      "https://images.unsplash.com/photo-1565019026629-9c73064cdbcc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "New tech dropping soon 👀",
    video: "./reels/two.mp4",
    isFollowed: false,
  },
  {
    likeCount: 98,
    isLiked: false,
    ismuted: true,
    commentCount: 8,
    shareCount: 1,
    username: "foodie_life",
    profilePicture:
      "https://images.unsplash.com/photo-1545418776-a37fba72a75d?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Avengers and the breaking bad",
    video: "./reels/three.mp4",
    isFollowed: false,
  },
  {
    likeCount: 560,
    isLiked: false,
    commentCount: 67,
    ismuted: true,
    shareCount: 23,
    username: "Pritam_anuska",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1674112877123-c8419badc6a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "love at first sight",
    video: "./reels/four.mp4",
    isFollowed: true,
  },
  {
    likeCount: 205,
    isLiked: false,
    commentCount: 19,
    ismuted: true,
    shareCount: 7,
    username: "music_vibes",
    profilePicture:
      "https://images.pexels.com/photos/7047537/pexels-photo-7047537.jpeg",
    caption: "matt murdock the daredevil",
    video: "./reels/five.mp4",
    isFollowed: true,
  },
  {
    likeCount: 412,
    isLiked: true,
    ismuted: true,
    commentCount: 33,
    shareCount: 14,
    username: "coder_boy",
    profilePicture:
      "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg",
    caption: "Rolls royce it is",
    video: "./reels/six.mp4",
    isFollowed: false,
  },
  {
    likeCount: 75,
    isLiked: false,
    ismuted: true,
    commentCount: 4,
    shareCount: 0,
    username: "daily_quotes",
    profilePicture:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Messi the goat ...",
    video: "./reels/seven.mp4",
    isFollowed: true,
  },
  {
    likeCount: 890,
    isLiked: true,
    commentCount: 102,
    ismuted: true,
    shareCount: 40,
    username: "fitness_freak",
    profilePicture:
      "https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "The boys season 5 is coming soon",
    video: "./reels/eight.mp4",
    isFollowed: true,
  },
  {
    likeCount: 260,
    isLiked: false,
    ismuted: true,
    commentCount: 21,
    shareCount: 6,
    username: "gaming_world",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1677870728119-52aef052d7ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Advice from King Kohli",
    video: "./reels/nine.mp4",
    isFollowed: false,
  },
  {
    likeCount: 130,
    isLiked: false,
    ismuted: true,
    commentCount: 9,
    shareCount: 2,
    username: "art_corner",
    profilePicture:
      "https://images.unsplash.com/photo-1593382067395-ace3045a1547?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "The pain of regret is more than the pain of discipline",
    video: "./reels/ten.mp4",
    isFollowed: true,
  },
];


var reelsContainer = document.querySelector(".all-reels");



function addData() {
  let sum = "";

  posts.forEach(function (elem, idx) {
    sum += `
    <div class="reels">
                    <video autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
                    <div class="mute" id=${idx}>${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'
                    }
        </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${
                              elem.profilePicture
                            }" alt="" class="profile">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${
      elem.isFollowed ? "follow" : "unfollow"
    }</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${
                              elem.isLiked
                                ? '<i  class="love ri-heart-fill"></i>'
                                : '<i class="ri-heart-line"></i>'
                            }</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-plane-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                    </div>
                </div>
    `;
  });
  reelsContainer.innerHTML = sum;
}

addData();

// reelsContainer.addEventListener("click", function (e, idx) {
//   var element = posts[e.target.id];
//   if (e.target.className == "like") {
//     if (!element.isLiked) {
//       element.likeCount += 1;
//       element.isLiked = true;
//     } else {
//       element.likeCount -= 1;
//       element.isLiked = false;
//     }
//     addData();
//   }
//   if (e.target.className == "follow") {
//     if (!element.isFollowed) {
//       element.isFollowed = true;
//     } else {
//       element.isFollowed = false;
//     }
//     addData();
//   }
//   if (e.target.className == "mute") {
//     if (!element.ismuted) {
//       element.ismuted = true;
//     } else {
//       element.ismuted = false;
//     }
//     addData();
//   }
// });


function handleScroll() {
  // Get all reel elements
  const reels = reelsContainer.querySelectorAll(".reels");
  // Calculate the index of the currently visible reel based on scroll position and container height
  const currentReelIndex = Math.round(
    reelsContainer.scrollTop / reelsContainer.clientHeight
  );

  reels.forEach((reel, index) => {
    const video = reel.querySelector("video");
    if (video) {
      // Check if the current reel is the one visible in the center
      if (index === currentReelIndex) {
        // UNMUTE the currently visible video
        posts[index].ismuted = false;
        // Important: Directly update the video element's muted state in the DOM
        video.muted = false;
        // Set the volume to max when unmuting
        video.volume = 1.0;
        // Ensure the data model is updated for the correct icon in the next render
      } else {
        // MUTE all other videos
        posts[index].ismuted = true;
        // Important: Directly update the video element's muted state in the DOM
        video.muted = true;
      }
    }
  });
  // Re-render the icons and other DOM elements based on the updated 'posts' array
  // Note: Re-rendering the *entire* container on scroll might be slightly inefficient
  // for high-performance apps, but it ensures all icons and UI states are correct.
  // A more performant solution would only update the icons, but for simplicity here,
  // we'll stick to re-rendering.
  updateIcons();
}

// A new function to re-render only the icons and state changes without recreating all HTML
function updateIcons() {
  const muteIcons = reelsContainer.querySelectorAll(".mute");
  const followButtons = reelsContainer.querySelectorAll(".follow");
  const likeIcons = reelsContainer.querySelectorAll(".like");

  posts.forEach((elem, idx) => {
    // Update Mute Icon
    if (muteIcons[idx]) {
      muteIcons[idx].innerHTML = elem.ismuted
        ? '<i class="ri-volume-mute-fill"></i>'
        : '<i class="ri-volume-up-fill"></i>';
    }

    // Update Follow Button Text
    if (followButtons[idx]) {
      followButtons[idx].textContent = elem.isFollowed ? "Unfollow" : "Follow";
    }

    // Update Like Icon and Count
    if (likeIcons[idx]) {
      const likeIconH4 = likeIcons[idx].querySelector(".like-icon");
      const likeCountH6 = likeIcons[idx].querySelector("h6");

      if (likeIconH4) {
        likeIconH4.innerHTML = elem.isLiked
          ? '<i class="love ri-heart-fill"></i>'
          : '<i class="ri-heart-line"></i>';
      }
      if (likeCountH6) {
        likeCountH6.textContent = elem.likeCount;
      }
    }
  });
}

addData();

// Attach the handleScroll function to the scroll event of the reels container
reelsContainer.addEventListener("scroll", handleScroll);

// Use a single event listener for like, follow, and mute toggles
reelsContainer.addEventListener("click", function (e) {
  // Safely find the post index from the clicked element's ID
  const id = e.target.id;
  if (!id) return; // Exit if the clicked element doesn't have an ID (i.e., not a target)

  const element = posts[id];
  if (!element) return; // Exit if the index is invalid

  if (e.target.className === "like") {
    if (!element.isLiked) {
      element.likeCount += 1;
      element.isLiked = true;
    } else {
      element.likeCount -= 1;
      element.isLiked = false;
    }
    // Only update icons instead of re-rendering the whole page
    updateIcons();
  } else if (e.target.className === "follow") {
    element.isFollowed = !element.isFollowed;
    // Only update icons
    updateIcons();
  } else if (e.target.className === "mute") {
    element.ismuted = !element.ismuted;

    // Also update the video element's DOM property directly for instant effect
    const video = e.target.closest(".reels").querySelector("video");
    if (video) {
      video.muted = element.ismuted;
    }

    // Update the icon
    updateIcons();
  }
});
