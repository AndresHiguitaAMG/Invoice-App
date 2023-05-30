/* eslint-disable react/prop-types */
export const ClientView = ({ title, client }) => {
    const { name: nameClient, lastName, addres } = client;
    const { country, city, street, number } = addres;

  return (
    <>
        <h3>{title}</h3>
        <ul className="list-group">
            <li className="list-group-item active">{ nameClient } { lastName }</li>
            <li className="list-group-item">{ country } / { city }</li>
            <li className="list-group-item">{ street }</li>
            <li className="list-group-item">{ number }</li>
        </ul>
    </>
  )
}
