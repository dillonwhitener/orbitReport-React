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

          function True() {
            return (
              <td>active</td>
            );
          }

          function False() {
            return (
              <td>inactive</td>
            );
          }

          function operationalStatus() {
            if (data.operational === true) {
              return (
                <True />
              );
            }
            return (
              <False />
            );
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
