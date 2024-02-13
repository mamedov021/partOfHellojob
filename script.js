window.onload = function () {
    slideOne();
    slideTwo();
    slide_3();
    slide_4();
  };
  
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;
  
  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
  }
  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
  }
  function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }
// ----------------------------------
  
  let slider_3 = document.getElementById("slider-3");
  let slider_4 = document.getElementById("slider-4");
  let displayVal_3 = document.getElementById("range3");
  let displayVal_4 = document.getElementById("range4");
  
  let sliderTrack_internship = document.querySelector(".slider-track_internship");
  let sliderMaxValue_internship = slider_3.max;
  
  function slide_3() {
    if (parseInt(slider_4.value) - parseInt(slider_3.value) <= minGap) {
      slider_3.value = parseInt(slider_4.value) - minGap;
    }
    displayVal_3.textContent = slider_3.value;
    fillColor_2();
  }
  
  function slide_4() {
    if (parseInt(slider_4.value) - parseInt(slider_3.value) <= minGap) {
        slider_4.value = parseInt(slider_3.value) + minGap;
      }
      displayVal_4.textContent = slider_4.value;
      fillColor_2();
    }
    
    function fillColor_2() {
      const percent1 = (slider_3.value / sliderMaxValue_internship) * 100;
      const percent2 = (slider_4.value / sliderMaxValue_internship) * 100;
      sliderTrack_internship.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
      console.log('salam');
    }
    
    
    
      const likeIcons = document.querySelectorAll('#like');
     const unlikeIcons = document.querySelectorAll('#unlike');
     
     likeIcons.forEach(likeIcon => {
         likeIcon.addEventListener('click', function(e) {
             e.preventDefault();
             this.style.display = 'none';
             unlikeIcons[Array.from(likeIcons).indexOf(this)].style.display = 'inline-block';
         });
     });
     
     unlikeIcons.forEach(unlikeIcon => {
         unlikeIcon.addEventListener('click', function(e) {
             e.preventDefault();
             this.style.display = 'none';
             likeIcons[Array.from(unlikeIcons).indexOf(this)].style.display = 'inline-block';
         });
     });