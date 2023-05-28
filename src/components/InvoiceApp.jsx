import { getInvoiceService } from "../services/getInvoiceService"

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoiceService();
  const { name: nameClient, lastName, addres } = client;
  const { country, city, street, number } = addres;
  
  return (
    <>
        <h1>Ejemplo Factura</h1>
        <ul>
          <li>Id: { id }</li>
          <li>Name: { name }</li>
        </ul>

        <h3>Datos de el cliente</h3>
        <ul>
          <li>{ nameClient } { lastName }</li>
          <li>{ country }</li>
          <li>{ city }</li>
          <li>{ street }</li>
          <li>{ number }</li>
        </ul>

        <h3>Datos de la empresa</h3>
        <ul>
          <li>{ company.name }</li>
          <li>{ company.fiscalNumber }</li>
        </ul>
        <h4>Productos de la factura</h4>
    </>
  )
}
