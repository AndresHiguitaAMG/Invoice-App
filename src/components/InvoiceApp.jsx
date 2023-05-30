import { getInvoiceService } from "../services/getInvoiceService"
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ListItemsView } from "./ListItemsView";

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
          <ListItemsView
            items={items}
            title="Productos de la factura"
          />
        </div>
      </div>
    </div>
    </>
  )
}
