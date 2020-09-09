import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const qlist = [
    drink.strMeasure1,
    drink.strMeasure2,
    drink.strMeasure3,
    drink.strMeasure4,
    drink.strMeasure5,
  ];
  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");
  const q = get(".q");
  img.src = image;
  document.title = `${name} Cocktail Recipe`;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<ul><i class="far fa-check-square"></i>${item}</ul>`;
    })
    .join(" ");
  q.innerHTML = qlist
    .map((item) => {
      if (!item) return;
      return `<li></i>${item}</li>`;
    })
    .join(" ");
  console.log(drink);
};
export default displayDrink;
