const Card = ({ soslar, count, setCount }) => {
  const found = count.filter((item) => item.name === soslar.name);
  const amount = found.length;
  const handleReset = () => {
    const clearArray = count.filter((item) => item.name !== soslar.name);
    setCount(clearArray);
  };
  return (
    <div
      style={{ width: "150px" }}
      className='d-flex flex-column align-items-center gap-2'
    >
      {soslar ? (
        <>
          <img src={soslar.imagePath} alt='Çeşit' className='img-fluid' />
          <label>{soslar.name}</label>
          <div className='d-flex flex-row gap-2 align-items-center mt-2'>
            <button className='btn btn-danger' onClick={() => handleReset()}>
              Sıfırla
            </button>
            <span className='fs-2'>{amount}</span>
            <button
              className='btn btn-success'
              onClick={() => setCount([...count, soslar])}
            >
              Arttir
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
