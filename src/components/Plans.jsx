import { Button } from "@mui/material";

import '../Styles/plans.css'

import plans from '../Json/plans.json'

 function Plans() {

  return (
    <div className="section" id="plans">
      <h2>Planes a medida</h2>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <Button cx={{}}variant='contained' color="primary">Elegir plan</Button>
            <Button cx={{}}variant='outlined' color="primary">Más Informacion</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
