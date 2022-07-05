axios-דרך נוספת ליישם את האיי פי איי
יש להוסיף זאת לטרמינל כך 
npm i axios
ואחכ import axios from 'axios';

React DOM Router-מאפשר ניתובים בין עמוד לעמוד באינטרנט מבלי לרענן את העמוד שלנו
ואז הולכים לטרמינל ורושמים npm install react-router-dom@6 (https://reactrouter.com/docs/en/v6/getting-started/tutorial)וכל זה מהאתר 
ואז שמים בimport 
index.js-
import { BrowserRouter,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
  </Routes>
</BrowserRouter>
);

app.js-
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
    <h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </nav>
  </div>
  );
}

BrowserRouter- המעטפת שבעצם מאפשרת לי להשתמש בפונקציונאליות של ריאקט דום ראוטר
Router-פשוט שם שונה ויתכן שניתקל זאת כך גם BrowserRouter אותו הדבר כמו 
Link-hrf מה שמאפשר לי לקשר את העמודים , כלומר בקישוריות בין קומפוננטה לקומפוננטה  
Route- המעבר היזואלי, הניתוב בין קומפוננטה לקומפונטטה
Switch-הכוונה של רוט כלומר אם יש לי תפריט של דרופ דאון אז זה מציג לי את זה