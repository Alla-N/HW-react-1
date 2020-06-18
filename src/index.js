import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const presidents1 = ["Andrew Jackson", "Martin Van Buren", "William Henry Harrison"];
const presidents2 = [
    {
        firstName: "John",
        lastName: "Tyler",
        presidentIndex: 10,
    },
    {
        firstName: "James",
        lastName: "K. Polk",
        presidentIndex: 11,
    },
    {
        firstName: "Zachary",
        lastName: "Taylor",
        presidentIndex: 12,
    },
    {
        firstName: "Millard",
        lastName: "Fillmore",
        presidentIndex: 13,
    },
    {
        firstName: "Franklin",
        lastName: "Pierce",
        presidentIndex: 14,
    },
];

const data = [
    {
        "id": "666958530825467",
        "title": "Friday open-air party w/ Lucarelli, Mihas and Yarik JR | Hide",
        "place": "Hide",
        "date": "2020-06-12T20:00:00.000Z"
    },
    {
        "id": "786185895252176",
        "title": "Захист скверу імені Чкалова",
        "place": "Сквер Им. Чкалова",
        "date": "2020-06-10T09:00:00.000Z"
    },
    {
        "id": "623921328209118",
        "title": "Живая музыка на летней террасе",
        "place": "От Заката до Рассвета",
        "date": "2020-06-24T17:00:00.000Z"
    },
    {
        "id": "909559356190295",
        "title": "Amer (2009)",
        "place": "Кіноклуб Кіноха",
        "date": "2020-06-13T15:00:00.000Z"
    },
    {
        "id": "589272605321022",
        "title": "В парк Межигорье на теплоходе",
        "place": "Причал №6, Почтовая пл.",
        "date": "2020-06-13T07:45:00.000Z"
    }
];

const liStyle = {
    backgroundColor: '#ddd',
    margin: '1em 0',
    fontWeight: 'bold'
};

function getTime(date) {
  const time = new Date(date).getHours();
  if (time >= 5 && time < 12) {
    return 'Утро'
  } else if (time >= 12 && time < 18) {
    return 'День';
  } else if (time >= 18 && time < 22) {
    return 'Вечер';
  } else {
    return 'Ночь';
  }
}

ReactDOM.render(
    <React.StrictMode>

        <ul>
            <li>George Washington</li>
            <li>John Adams</li>
            <li>Thomas Jefferson</li>
        </ul>
        <ol start="4">
            <li>James Madison</li>
            <li>James Monroe</li>
            <li>John Quincy Adams</li>
        </ol>
        <ul style={liStyle}>
            {
                presidents1.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
        <ul>
            {
                presidents2.filter(i => i.presidentIndex % 2 !== 0).map((item) => {
                    return <li key={item.presidentIndex}>{
                        `${item.lastName}, ${item.firstName}, ${item.presidentIndex}-й.`
                    }</li>
                })
            }
        </ul>
      <ul>
        {
          data.sort((a, b) => new Date(a.date) - new Date(b.date)).map((item) => {
            const date = new Date(item.date);
            return <li key={item.id} style={date < Date.now() ? {opacity: 0.5} : null}>
              <a href={`https://www.facebook.com/events/${item.id}/`} target="_blank">
                {item.title}
              </a>
              <br/>
                {
                getTime(item.date)
                }
              <span>{(new Date(item.date)).toLocaleString()}</span>
              <br/>
              <span>{item.place}</span>
            </li>
          })
        }
      </ul>

      <form action="https://postman-echo.com/post" method="POST">
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" name="name" placeholder="Имя"/>
        <label htmlFor="password">Пароль</label>
        <input id="password" type="password" name="password" placeholder="Пароль"/>
        <label htmlFor="base">Базовый тариф</label>
        <input id="base" type="radio" name="plane" value="base"/>
        <label htmlFor="premium">Премиум тариф</label>
        <input id="premium" type="radio" name="plane" value="premium"/>
        <label htmlFor="news">Присылайте мне новости на почту</label>
        <input id="news" type="checkbox" value="newsLetter"/>
        <button type="submit">Купить</button>
      </form>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
