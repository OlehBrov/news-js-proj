import { refs } from "./refs";
export default function onResize(mql) {
    
    console.log(mql)
  refs.item.forEach(singleItem => {
    if (mql.matches) {
      singleItem.style.backgroundColor = 'blue';
    } else {
      singleItem.style.backgroundColor = 'red';
    }
  });
};
