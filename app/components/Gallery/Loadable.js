/**
 *
 * Asynchronously loads the component for Gallery
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
