import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

const Soslarr = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState([]);
  //Burda birden fazla arttırma yapacağımız için boş dizi yaptık count'ın useState'ini
  // Boş bir dizi ile başlatın
  useEffect(() => {
    const apiUrl = "http://localhost:3039/Scoops";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error("Veri getirme hatası:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <p>Tanesi 20₺</p>
      <h2 data-testid='deneme'>Çeşitler Ücreti:{count.length * 20}tl</h2>
      <div className='row gap-5 justify-content-between'>
        {data?.map((soslar) => (
          <Card
            key={soslar.id}
            soslar={soslar}
            count={count}
            setCount={setCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Soslarr;
