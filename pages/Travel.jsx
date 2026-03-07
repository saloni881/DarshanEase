function Travel() {

  return (
    <div>

      <h2>Travel Ticket Booking</h2>

      <select className="form-control">
        <option>Bus</option>
        <option>Train</option>
        <option>Flight</option>
      </select>

      <br/>

      <input
        className="form-control"
        placeholder="From"
      />

      <br/>

      <input
        className="form-control"
        placeholder="To"
      />

      <br/>

      <input type="date" className="form-control"/>

      <br/>

      <button className="btn btn-primary">
        Search Tickets
      </button>

    </div>
  );
}

export default Travel;