function Darshan() {

  const temples = [
    "Tirupati Balaji",
    "Vaishno Devi",
    "Kashi Vishwanath",
    "Somnath"
  ];

  return (
    <div>

      <h2>Temple Darshan Booking</h2>

      <select className="form-control">
        <option>Select Temple</option>

        {temples.map((temple,index)=>(
          <option key={index}>{temple}</option>
        ))}

      </select>

      <br/>

      <input type="date" className="form-control"/>

      <br/>

      <button className="btn btn-warning">
        Check Availability
      </button>

    </div>
  );
}

export default Darshan;