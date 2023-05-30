import PropTypes from "prop-types";


/* eslint-disable react/prop-types */
export const CompanyView = ({ title, company }) => {
    const { name, fiscalNumber } = company;
    
    return (
    <div>
        <h3>{title}</h3>
        <ul className="list-group">
            <li className="list-group-item active">{ name }</li>
            <li className="list-group-item">{ fiscalNumber }</li>
        </ul>
    </div>
  )
};

CompanyView.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
}
