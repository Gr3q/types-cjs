declare namespace imports.ui.extension {

    type ExtensionManager = typeof appletManager | typeof deskletManager | typeof searchProviderManager | typeof extensionSystem

    enum State {
        INITIALIZING,
        LOADED,
        ERROR,
        OUT_OF_DATE
    }

    interface ExtensionSystemExtensionType {
        name: 'Extension',
        folder: 'extensions',
        requiredFunctions: ["init", "disable", "enable"],
        requiredProperties: ["uuid", "name", "description", "cinnamon-version"],
        niceToHaveProperties: ["url"],
        roles: {},
        callbacks: {
            finishExtensionLoad: typeof imports.ui.extensionSystem['finishExtensionLoad'],
            prepareExtensionUnload: typeof imports.ui.extensionSystem['prepareExtensionUnload'],
            prepareExtensionReload: typeof imports.ui.extensionSystem['prepareExtensionReload']
        },
        userDir: string,
        legacyMeta: LegacyMeta
    }

    interface AppletExtensionsType {
        name: 'Applet',
        folder: 'applets',
        requiredFunctions: ["main"],
        requiredProperties: ["uuid", "name", "description"],
        niceToHaveProperties: [],
        roles: {
            notifications: null,
            windowlist: null,
            panellauncher: null,
            tray: null
        },
        callbacks: {
            finishExtensionLoad: typeof imports.ui.appletManager['finishExtensionLoad'],
            prepareExtensionUnload: typeof imports.ui.appletManager['prepareExtensionUnload'],
            prepareExtensionReload: typeof imports.ui.appletManager['prepareExtensionReload']
        },
        userDir: string,
        legacyMeta: LegacyMeta
    }

    interface DeskletExtensionType {
        name: 'Desklet',
        folder: 'desklets',
        requiredFunctions: ["main"],
        requiredProperties: ["uuid", "name", "description"],
        niceToHaveProperties: [],
        roles: {
            notifications: null,
            windowlist: null
        },
        callbacks: {
            finishExtensionLoad: typeof imports.ui.deskletManager['finishExtensionLoad'],
            prepareExtensionUnload: typeof imports.ui.deskletManager['prepareExtensionUnload'],
            prepareExtensionReload: typeof imports.ui.deskletManager['prepareExtensionReload']
        },
        userDir: string,
        legacyMeta: LegacyMeta
    }

    interface SearchProviderExtensionType {
        name: 'Search provider',
        folder: 'search_providers',
        requiredFunctions: ["perform_search", "on_result_selected"],
        requiredProperties: ["uuid", "name", "description"],
        niceToHaveProperties: [],
        roles: {},
        callbacks: {
            finishExtensionLoad: typeof imports.ui.searchProviderManager['finishExtensionLoad'],
            prepareExtensionUnload: typeof imports.ui.searchProviderManager['prepareExtensionUnload'],
            prepareExtensionReload: undefined
        },
        userDir: string,
        legacyMeta: LegacyMeta
    }

    /**
     * 
     * @name: Upper case first character name for printing messages
     *        Also converted to lowercase to find the correct javascript file
     * @folder: The folder name within the system and user cinnamon folders
     * @requiredFunctions: Functions that must exist in the main javascript file
     * @requiredProperties: Properties that must be set in the metadata.json file
     * @niceToHaveProperties: Properties that are encouraged to be set in the metadata.json file
     * @roles: Roles an extension can assume. Values will be set internally, set to null.
     *         key => name of the role, value => reference to the extension object
     * @callbacks: Callbacks used to do some manual actions on load / unload
     *
     * Extension types with some attributes helping to load these extension types.
     * Properties are nested, with lowerCamelCase properties (e.g. requiredFunctions) as sub-properties of CAPITAL one (EXTENSION). Thus they are referred to as, e.g., Type.EXTENSION.requiredFunctions
     * 
     */
    type ExtensionType = ExtensionSystemExtensionType | AppletExtensionsType | DeskletExtensionType | SearchProviderExtensionType

    function _createExtensionType(name: string, folder: string, manager: ExtensionManager, overrides: Partial<ExtensionType>): ExtensionType

    let startTime: number | undefined
    const extensions: Extension[]

    interface LegacyMeta {
        [uuid: string]: {
            path: string | null
        }
    }

    // using class here to get an enum-like tpye with objects as values. See: https://stackoverflow.com/a/51398471/11603006
    class Type {
        static readonly EXTENSION: ExtensionSystemExtensionType
        static readonly APPLET: AppletExtensionsType
        static readonly DESKLET: DeskletExtensionType
        static readonly SEARCH_PROVIDER: SearchProviderExtensionType
    }

    interface MetaDummy {
        name: string,
        description: string,
        state: State,
        path: string | null,
        error: string
    }

    /** Create a dummy metadata object when metadata parsing failed or was not done yet. */
    function createMetaDummy(uuid: string, path: string | null, state: State): MetaDummy

    function getExtension(uuid: string): Extension | null

    function formatError(uuid: string, message: string): void

    function logError(message: string | null | undefined, uuid: string, error?: Error, state?: State): Error

    function ensureFileExists(file: gi.Gio.File): void

    class Extension {
        public name: string
        public uuid: string
        public dir: imports.gi.Gio.File
        public upperType: string
        public lowerType: string
        public theme: null | imports.gi.St.Theme
        public stylesheet: null | string
        public iconDirectory: null | string
        public meta: imports.ui.extension.MetaDummy | Meta
        public moduleIndex: number
        public roleProvider: any | null

        constructor(type: imports.ui.extension.ExtensionType, uuid: string)
        finalize: () => void
        validateMetaData: () => void
        checkProperties: (properties: string[], fatal?: boolean) => void
        loadStylesheet: (file: imports.gi.Gio.File) => void
        unloadStylesheet: () => void
        loadIconDirectory: (file: imports.gi.Gio.File) => void
        unloadIconDirectory: () => void
        lockRole: (roleProvider: any) => boolean
        unlockRole: () => void
    }

    /**
    * versionCheck:
    * @required: an array of minimum versions we are compatible with
    * @current: the version we have
    *
    * Check if a component is compatible for an extension.
    * @required is an array, and at least one version must be lower than the current version.
    * @current must be in the format <major>.<minor>.<point>.<micro>
    * <micro> is always ignored
    * <point> is ignored if not specified (so you can target the whole release)
    * <minor> and <major> must match
    * Each target version must be at least <major> and <minor>
    */
    function versionCheck(required: string[], current: string): boolean

    /**
     * versionLeq:
     * @a the first version
     * @b the second version
     *
     * Returns: whether a <= b
     * 
     */
    function versionLeq(a: string, b: string): boolean

    /** Returns a string version of a State value */
    function getMetaStateString(state: State): string

    /**
     * 
     * loadExtension
     * 
     * @param uuid uuid of xlet
     * @param type type of xlet
     */
    function loadExtension(uuid: string, type: Type): Promise<Extension>

    /**
     * unloadExtension:
     * 
     * @param uuid uuid of xlet
     * @param type type of xlet
     * @param deleteConfig delete also config files, defaults to true
     * @param reload 
     */
    function unloadExtension(uuid: string, type: Type, deleteConfig?: boolean, reload?: boolean): void

    function forgetExtension(extensionIndex: number, uuid: string, type: Type, forgetMeta: boolean): void

    /**
     * reloadExtension:
     *
     * @uuid uuid of xlet
     * @type type of xlet
     *
     * Reloads an xlet. Useful when the source has changed.
     */
    function reloadExtension(uuid: string, type: Type): void

    function findExtensionDirectory(uuid: string, userDir: string, folder: string): imports.gi.Gio.File | null

    function getMedata(uuid: string, type: Type): Promise<Meta>

    function loadMetadata(args: {
        state: imports.ui.extension.State,
        path: string,
        uuid: string,
        userDir: string,
        folder: string,
        force: boolean
    }): Promise<Meta>

    function findExtensionSubdirectory(dir: gi.Gio.File): Promise<gi.Gio.File>

    function get_max_instances(uuid: string, type: Type): number
}