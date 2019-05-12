/**
 *
 * Asynchronously loads the component for Nav
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
