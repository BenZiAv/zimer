import React, { useEffect, useState } from 'react';
import Header from './Header';
//import Footer from './Footer';
import './HomePage.css';
import axios from 'axios';


const HomePage = () => {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    // בכניסה לעמוד, שלח בקשה לשרת
    axios.get('/api/data')
      .then(response => {
        setServerData(response.data); // שמור את התשובה מהשרת במשתנה state
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='body1'>
      <Header className="header" />
      {/* <Footer className="footer" /> */ }
      {serverData && (
        <div>
          <p>מידע מהשרת: {serverData.message}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;