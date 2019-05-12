/**
 *
 * Asynchronously loads the component for Logo
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
