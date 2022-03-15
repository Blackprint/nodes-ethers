// This script will run first, and then the other files
// depends on blackprint.config.js configuration

//> Required, this should be run before importing modules
//> Blackprint will know if it need to load other interface module
// Let the Blackprint Editor know the source URL where
// the registerNode and registerInterface belongs to
let Blackprint = window.Blackprint.loadScope({
	// You can find the URL on Blackprint menu -> Modules
	// This will also be exported to JSON if this module's nodes is being used
	url: import.meta.url,

	// This will autoload (*.sf.mjs) and (*.sf.css) file for Browser
	hasInterface: true,
});

// Prepare stuff when the page is loading
// maybe like loading our dependencies for the nodes


// Dependency should be loaded after Blackprint.loadScope
/* Parallely load dependencies from CDN here (optional) */
//>> imports(...) =>  sf.loader.mjs(...) or [import(..), ..];
var [ Ethers ] = await imports([
	"https://cdn.jsdelivr.net/npm/ethers@5.5.2/dist/ethers.esm.min.js"
]);


/* or wait until the browser was loaded all script and the DOM was ready
 * without load another dependency
 *
 * Warning: When using this, you must modify wrapped:'mjs' to wrapped:'async-mjs'
 * on blackprint.config.js, to avoid circular waiting (because this module also waiting)
 *
 * Info: imports.task() == sf.loader.task;
 */
// await imports.task();

// Global shared context
let Context = Blackprint.createContext('Ethers');

// This is needed to avoid duplicated event listener when using hot reload
// Event listener that registered with same slot will be replaced
Context.EventSlot = {slot: 'my-private-event-slot'};