import { getInvoiceService } from "./services/getInvoiceService";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
  const { id, name, client, company, items, total } = getInvoiceService();
  
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
          <TotalView 
            total={total}
          />
        </div>
      </div>
    </div>
    </>
  )
}
