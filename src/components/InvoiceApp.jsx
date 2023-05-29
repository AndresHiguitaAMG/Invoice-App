import { getInvoiceService } from "../services/getInvoiceService"

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoiceService();
  const { name: nameClient, lastName, addres } = client;
  const { country, city, street, number } = addres;
  
  return (
    <>
    <div className="container">
      <div className="card my-3">
        <div className="card-header">
          Ejemplo Factura
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Id: { id }</li>
            <li className="list-group-item">Name: { name }</li>
          </ul>
          
          <div className="row my-3">
            <div className="col">
              <h3>Datos de el cliente</h3>
              <ul className="list-group">
                <li className="list-group-item active">{ nameClient } { lastName }</li>
                <li className="list-group-item">{ country } / { city }</li>
                <li className="list-group-item">{ street }</li>
                <li className="list-group-item">{ number }</li>
              </ul>
            </div>
            
            <div className="col">
              <h3>Datos de la empresa</h3>
              <ul className="list-group">
                <li className="list-group-item active">{ company.name }</li>
                <li className="list-group-item">{ company.fiscalNumber }</li>
              </ul>
            </div>
          </div>
          
          <h4>Productos de la factura</h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
              </tr>
              </thead>
              <tbody>
                {
                items.map(({ id, product, price, quantity }) => (
                  // eslint-disable-next-line react/jsx-key
                  <tr key={ id }>
                    <td>{ product }</td>
                    <td>{ price }</td>
                    <td>{ quantity }</td>
                  </tr>
                  )
               )
            }
            </tbody>
            </table>
        </div>
      </div>
    </div>
    </>
  )
}
