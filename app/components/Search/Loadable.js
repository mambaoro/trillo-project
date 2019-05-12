/**
 *
 * Asynchronously loads the component for Search
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
