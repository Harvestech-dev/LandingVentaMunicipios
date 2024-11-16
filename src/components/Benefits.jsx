import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import benefits from '../Json/benefits.json'

import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';

function Benefits() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'StarPurple500RoundedIcon':
        return <StarPurple500RoundedIcon />;
      case 'GppGoodRoundedIcon':
        return <GppGoodRoundedIcon />;
      case 'TrendingUpRoundedIcon':
        return <TrendingUpRoundedIcon />;
      case 'FlashOnRoundedIcon':
        return <FlashOnRoundedIcon />;
      default:
        return null;
    }
  };
  
  return (
    <div className="section" id="benefits">
      <h2>Beneficios Clave</h2>
      <div className="container benefit-cards">
        {benefits.map((benefit, index) => (
          <Card key={index} className="benefit-card">
            <CardContent>
              <div className="benefit-icon">{getIcon(benefit.icon)}</div>
              <Typography variant="h5" className="benefit-title">
                {benefit.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {benefit.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
