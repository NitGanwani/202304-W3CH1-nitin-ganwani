import './style.css';
import { allCharacters } from './charactersList';

const temp: HTMLUListElement = document.querySelector('.characters-list')!;

const kingTemplate = `<li class="character col">
    <div class="card character__card">
      <img src="/public/joffrey.jpg" alt="Joffrey Baratheon" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${allCharacters[0].name} ${allCharacters[0].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${allCharacters[0].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Años de reinado: ${allCharacters[0].kingYears}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">🤴</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`;

const fighterTemplate1 = `<li class="character col">
    <div class="card character__card">
      <img src="/public/jaime.jpg" alt="Jaime Lannister" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${allCharacters[1].name} ${allCharacters[1].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${allCharacters[1].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Arma: ${allCharacters[1].weapon}</li>
            <li>Destreza: ${allCharacters[1].skill}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">🤴</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`;

const fighterTemplate2 = `<li class="character col">
    <div class="card character__card">
      <img src="/public/jaime.jpg" alt="Jaime Lannister" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${allCharacters[1].name} ${allCharacters[1].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${allCharacters[1].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Arma: ${allCharacters[1].weapon}</li>
            <li>Destreza: ${allCharacters[1].skill}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">🤴</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`;

temp.innerHTML = kingTemplate + fighterTemplate1;
