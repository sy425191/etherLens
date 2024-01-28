import { Router } from 'express';
import { accountDetails } from '../controllers/ether.controller.js';

const AddressRoute = Router();

AddressRoute.get('/:address', accountDetails);

export { AddressRoute}