// HOME SWIPER
// var containerSwiper = new Swiper(".swiper-container", {
//   loop: true,
//   autoplay: {
//     delay: 5000,
//   },
// });

// HỆ TABS
let arTabs = Array.from(document.querySelectorAll(`.he-tab .tabs > li`));
let boDiv = document.querySelectorAll(`.he-tab .content-tab>div`);
const chuyenTab = (e) => {
  arTabs.forEach((r) => r.classList.remove(`cur-tab`));
  e.target.classList.add(`cur-tab`);

  let n = arTabs.indexOf(e.target);

  boDiv.forEach((b) => (b.style.display = `none`));
  boDiv[n].style.display = `flex`;
};

arTabs.forEach((a) => a.addEventListener(`click`, chuyenTab));

// QUALITY BUTTON
let qualityBtn = document.querySelectorAll(`.quality-btn button`);
const increaseDecrease = (e) => {
  let quality_frame = e.target.parentNode.querySelector(`input[type="number"]`);
  let n = parseInt(quality_frame.value);
  n += e.target.classList.contains(`increase`) ? 1 : -1;
  if (n < 1) n = 1;
  quality_frame.value = n;
  console.log(n);
};
qualityBtn.forEach((b) => b.addEventListener(`click`, increaseDecrease));
