
import { countries, getDataAsync } from './countries.js';
import { createAllCards, saveCountry, loadSaved } from './dom.js';

await getDataAsync();
createAllCards();
saveCountry()
loadSaved();

