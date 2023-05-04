import React from "react";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const uiLink = styled(Link)`
text-decoration: none; 
hover {text-decoration: underline;};
font-size: 20px;
/* font: 400 20px / 100% Inter;  */
color: #7AAFFF;
`;