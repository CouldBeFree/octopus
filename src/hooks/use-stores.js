import React from 'react';
import { storesContext } from '../helpers/context';

export const useStores = () => React.useContext(storesContext);
