import React from "react";
import { useState } from "react";
import { act } from "react-dom/test-utils"; // react-dom/test-utils eklenmiş

const Form = () => {
  const [ischecked, setİsChecked] = useState(false);
  const [ishover, setisHover] = useState(false);
  /*
  
  *Eğer checkbox tickli değilse disabled özelliği true olacak
  *Eğer checkbox tick'li ise disabled özelliği false olacak
  *Butonun hover olmuşsa koşulları okudum anladımın üstüne <p> etiketini göster
  */

  return (
    <div className='d-flex justify-content-center gap-3 align-items-center my-4'>
      <input
        onChange={(e) =>
          act(() => {
            setİsChecked(e.target.checked);
          })
        }
        className='form check-input'
        type='checkbox'
      />
      <div className='terms'>
        <p
          className='bg-light text-black p-2 rounded'
          style={{ visibility: ishover ? "visible" : "hidden" }}
        >
          Size Gerçekten Birşey teslim etmeyeceğiz
        </p>
        <label htmlFor='' className='lead'>
          Koşulları okudum ve kabul ediyorum
        </label>
      </div>
      <button
        onMouseEnter={() =>
          act(() => {
            setisHover(true);
          })
        }
        onMouseLeave={() =>
          act(() => {
            setisHover(false);
          })
        }
        disabled={!ischecked}
        className='btn btn-warning'
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
