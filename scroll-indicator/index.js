const scrollBar = document.querySelector('#progress-bar');
let contents = document.querySelector('.contents');

const createContent = () => {
  const dom = `
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
      consequuntur corrupti eaque doloribus similique corporis nihil
      consectetur numquam. Unde possimus nemo, adipisci inventore voluptatibus
      est voluptate voluptatem quis neque? Voluptatum!
    </p>
  `
  for (let i=0; i<30; ++i) {
    contents.insertAdjacentHTML('afterbegin', dom);
  }
}

const scrollIndicator = (e) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = e.target.scrollingElement;

  const contentHeight = scrollHeight - clientHeight;
  const percent = (scrollTop / contentHeight) * 100;

  scrollBar.style.width = `${percent}%`;
}

// load 50 article
window.addEventListener('DOMContentLoaded', createContent);
// add scroll event
window.addEventListener('scroll', scrollIndicator);