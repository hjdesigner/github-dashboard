
/* global document */

import getApi from './GetApiGithub';
import renderProfile from './UserData';

const profite = getApi('hjdesigner');
const elementProfile = document.querySelector('[data-id="profile"]');

profite.then(data => renderProfile(data, elementProfile));
