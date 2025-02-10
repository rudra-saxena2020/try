document.addEventListener("DOMContentLoaded", function () {
    const cashcowButton = document.getElementById("cashcow-video");
    const reelsButton = document.getElementById("reels");
    const cashcowVideoList = document.querySelector(".cashcow-videos-list");
    const reelsVideoList = document.querySelector(".reels-list");
  
    cashcowVideoList.style.display = "grid";
    reelsVideoList.style.display = "none";
  
    cashcowButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
    reelsButton.style.backgroundColor = "";
  
    function pauseAllVideos(videoList) {
      const videos = videoList.querySelectorAll("video");
      videos.forEach((video) => {
        video.pause();
      });
    }
  
    cashcowButton.addEventListener("click", function () {
      cashcowButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
      reelsButton.style.backgroundColor = "";
  
      cashcowVideoList.style.display = "grid";
      reelsVideoList.style.display = "none";
  
      pauseAllVideos(reelsVideoList);
    });
  
    reelsButton.addEventListener("click", function () {
      reelsButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
      cashcowButton.style.backgroundColor = "";
  
      reelsVideoList.style.display = "grid";
      cashcowVideoList.style.display = "none";
  
      pauseAllVideos(cashcowVideoList);
    });
  
    const allVideos = document.querySelectorAll(
      ".cashcow-videos-list video, .reels-list video"
    );
    allVideos.forEach((video) => {
      video.addEventListener("click", function () {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
  
      video.addEventListener("play", function () {
        allVideos.forEach((otherVideo) => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });
  });
  