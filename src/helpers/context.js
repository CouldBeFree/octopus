import React from 'react';
import store from '../store';

export const storesContext = React.createContext({
	...store,
});
