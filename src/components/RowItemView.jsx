/* eslint-disable react/prop-types */
export const RowItemView = ({ product, price, quantity  }) => {
  return (
    <>
        <tr>
            <td>{ product }</td>
            <td>{ price }</td>
            <td>{ quantity }</td>
        </tr>
    </>
  )
}
