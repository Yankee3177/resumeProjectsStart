import axios from 'axios';

export const bio = () => axios.get('/intro');

// Project Routes
export const recipeApp = () => axios.get('/projects/recipeApp');
export const sqlInterface = () => axios.get('/projects/sqlInterface');
export const stitchingDesign = () => axios.get('/projects/stitchingDesign');
export const caesarEncrypt = () => axios.get('/projects/caesarEncrypt');