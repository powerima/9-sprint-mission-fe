import { useState } from 'react';
import styles from './App.module.css';

const initialUsers = [
      {
      "id": 226,
      "name": "푸바오 찾아 떠나는 청두 여행!!",
      "description": "제 딸 푸바오가 있는 쓰촨성 청두로 날아가 보세요!!!",
      "price": 99999999,
      "tags": [
        "푸바오",
        "러바오",
        "아이바오",
        "루이바오",
        "후이바오"
      ],
      "images": [
        "https://image.hanatour.com/usr/cms/resize/800_0/2024/08/11/10000/687449d1-4e4f-4952-b6d1-5342465880f5.jpg"
      ],
      "ownerId": 177,
      "favoriteCount": 47,
      "createdAt": "2024-09-23T11:25:06.306Z",
      "updatedAt": "2025-08-31T06:44:42.889Z"
    },
    {
      "id": 629,
      "name": "돌아와..너가 죽으면 안돼",
      "description": "젠슨형 우리좀 꺼내줘",
      "price": 113,
      "tags": [
        "S&P 투자사"
      ],
      "images": [
        "https://cdn.choicenews.co.kr/news/photo/202409/135215_98277_538.jpg"
      ],
      "ownerId": 895,
      "favoriteCount": 17,
      "createdAt": "2025-03-10T07:14:54.608Z",
      "updatedAt": "2025-08-18T09:08:43.465Z"
    },
    {
      "id": 199,
      "name": "아이폰 16 pro",
      "description": "따끈한 아이폰!",
      "price": 1290000,
      "tags": [],
      "images": [
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/98/1726837429259/iphone.jpg"
      ],
      "ownerId": 98,
      "favoriteCount": 15,
      "createdAt": "2024-09-20T13:03:49.397Z",
      "updatedAt": "2025-08-18T09:08:42.623Z"
    },
    {
      "id": 197,
      "name": "갤럭시 버즈3",
      "description": "버즈3 입니다~",
      "price": 500000,
      "tags": [
        "이어폰"
      ],
      "images": [
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/107/1726730417522/buds.jpg"
      ],
      "ownerId": 107,
      "favoriteCount": 13,
      "createdAt": "2024-09-19T07:20:17.749Z",
      "updatedAt": "2025-08-18T09:08:46.730Z"
    },

];

function App() {
  const [ users, setUsers ] = useState(initialUsers);
  const handleSortByName = () => {

  };

  const handleDelete = (userId) => {

  };

  const test = () => {
    console.log('users => ', users);
  };

  return (
    <div className={styles.appContainer}>
      <h1>베스트 상품</h1>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <div>
              <img className={styles.userThumbnail} src={user.images[0]}/>
              <strong>{user.description}</strong>
              <span>({user.price}원)</span>
              <span>♡{user.favoriteCount}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
