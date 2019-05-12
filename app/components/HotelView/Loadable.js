/**
 *
 * Asynchronously loads the component for HotelView
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
