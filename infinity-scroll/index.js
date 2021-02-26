let list = document.querySelector('#list');
let loading = document.querySelector('.loadbar');
let number = 1;
let timer;

const renderItem = () => {
  for (let i=0; i<20; ++i) {
    let dom = `
    <tr>
      <th>${number}</th>
      <td>
        <p class="title">title</p>
        <p class="article">blah blah</p>
      </td>
    </tr>
  `;
    list.insertAdjacentHTML('beforeend', dom);
    number++;
  }
};


const renderList = () => resolve => {
  const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;
  setTimeout(() => resolve(renderItem()), getRandomSeconds());
}

// const onScroll = (e) => {
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(async () => {
//     console.log('scroll');
//     const {
//       scrollHeight,
//       scrollTop,
//       clientHeight
//     } = e.target.scrollingElement;
//     if (scrollTop + clientHeight >= scrollHeight*0.9) {
//       loading.classList.add('loading');
//       await new Promise(renderList());
//       loading.classList.remove('loading');
//     }
//   }, 300);
// };

const fetchMoreObserver = new IntersectionObserver(async ([{ isIntersecting }]) => {
  if (isIntersecting) {
    loading.classList.add('loading');
    await new Promise(renderList());
    loading.classList.remove('loading');
  }
});
fetchMoreObserver.observe(loading);

// window.onload = renderList();

// document.addEventListener('scroll', onScroll);