declare namespace imports.ui.extensionSystem {

	// Maps uuid -> importer object (extension directory tree)
	let extensions: any

	// Lists extension uuid's that are currently active;
	const runningExtensions: string[]
	// Arrays of uuids
	let enabledExtensions: string[] | undefined

	// Maps extension.uuid -> extension objects
	interface ExtensionObj {
		[uuid: string]: imports.ui.extension.Extension
	}

	let extensionObj: ExtensionObj

	const promises: Promise<imports.ui.extension.Extension>[]
	const ENABLED_EXTENSIONS_KEY = 'enabled-extensions';


	// Deprecated, kept for compatibility reasons
	function disableExtension(uuid: string): void

	// Deprecated, kept for compatibility reasons
	function enableExtension(uuid: string): void

	// Callback for extension.js
	function prepareExtensionUnload(extension: extension.Extension): void

	// Callback for extension.js
	function prepareExtensionReload(extension: extension.Extension): void

	// Callback for extension.js
	function finishExtensionLoad(extensionIndex: number): boolean


	function get_object_for_uuid(uuid: string): null | imports.ui.extension.Extension 

	function onEnabledExtensionsChanged(): void

	function initEnabledExtensions(): Promise<void>

	function unloadRemovedExtensions(): void

	function init(): Promise<void> 
}