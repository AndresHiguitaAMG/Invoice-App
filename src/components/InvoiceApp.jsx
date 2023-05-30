import { getInvoiceService } from "../services/getInvoiceService"
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoiceService();
  
  return (
    <>
    <div className="container">
      <div className="card my-3">
        <div className="card-header">
          Ejemplo Factura
        </div>
        <div className="card-body">
          <InvoiceView
            id={id}
            name={name}
          />
          <div className="row my-3">
            <div className="col">
              <ClientView 
                client={client}
                title="Datos de el cliente"
              />
            </div>
            
            <div className="col">
              <CompanyView 
                company={company}
                title="Datos de la empresa"
              />
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
