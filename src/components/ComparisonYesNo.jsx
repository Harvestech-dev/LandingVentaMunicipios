import React from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import plans from '../Json/comparison.json'

function ComparisonYesNo() {

  const featureNames = Object.keys(plans[0].features); // Obtener las características de las primeras opciones

  return (
    <div className="comparison-table">
      <h2>Comparativa de Planes</h2>
      <table>
        <thead>
          <tr>
            <th>Características</th>
            {plans.map((plan, index) => (
              <th key={index}>{plan.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureNames.map((feature, index) => (
            <tr key={index}>
              <td>{feature}</td>
              {plans.map((plan, planIndex) => (
                <td key={planIndex}>{plan.features[feature] === "Sí" ? <CheckRoundedIcon size='large' color='success'/>: <CloseRoundedIcon color='error'/>}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonYesNo;
