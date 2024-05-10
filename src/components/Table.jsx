import './styling.css'

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {sat.map((data, idx) => {

          function operationalStatus(){
            if (data.operational === true) {
              return <td>active</td>
            } else {
              return <td>inactive</td>
          }
        }
        
          return (
            <tr key={idx}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              {operationalStatus()}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;
