import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #e63946; /* Red */
    color: #fff; /* White text */
    margin-left: 4px;
    &:hover {
      background-color: #ef476f; /* Lighter red on hover */
      border-color: #d62828; /* Border color change */
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #1e1e1e; /* Black */
    color: #fff; /* White text */
    margin-left: 4px;
    &:hover {
      background-color: #333; /* Darker black on hover */
      border-color: #333;
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #8e3b46; /* Dark Red */
    color: #fff; /* White text */
    &:hover {
      background-color: #ef476f; /* Lighter red on hover */
      border-color: #d62828;
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #003049; /* Dark Blue */
    color: #fff; /* White text */
    &:hover {
      background-color: #3d5a80; /* Lighter blue on hover */
      border-color: #003049;
      box-shadow: none;
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #540d6e; /* Purple */
    color: #fff; /* White text */
    &:hover {
      background-color: #c77dff; /* Lighter purple on hover */
      border-color: #7b1fa2;
      box-shadow: none;
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background-color: #a05195; /* Light Purple */
    color: #fff; /* White text */
    &:hover {
      background-color: #f0a6ca; /* Lighter purple on hover */
      border-color: #f0a6ca;
      box-shadow: none;
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #2a9d8f; /* Green */
    color: #fff; /* White text */
    &:hover {
      background-color: #4dccc6; /* Lighter green on hover */
      border-color: #2a9d8f;
      box-shadow: none;
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #4a2c1d; /* Brown */
    color: #fff; /* White text */
    &:hover {
      background-color: #87562b; /* Lighter brown on hover */
      border-color: #4a2c1d;
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #2b4162; /* Indigo */
    color: #fff; /* White text */
    &:hover {
      background-color: #567599; /* Lighter indigo on hover */
      border-color: #2b4162;
      box-shadow: none;
    }
  }
`;