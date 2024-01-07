/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Geoclue {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClientProxy} instead.
	 */
	interface IClientProxy {

	}

	type ClientProxyInitOptionsMixin = Gio.DBusProxyInitOptions & ClientInitOptions & Gio.AsyncInitableInitOptions & Gio.DBusInterfaceInitOptions & Gio.InitableInitOptions
	export interface ClientProxyInitOptions extends ClientProxyInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClientProxy} instead.
	 */
	type ClientProxyMixin = IClientProxy & Gio.DBusProxy & Client & Gio.AsyncInitable & Gio.DBusInterface & Gio.Initable;

	/**
	 * The #GClueClientProxy structure contains only private data and should only be accessed using the provided API.
	 */
	interface ClientProxy extends ClientProxyMixin {}

	class ClientProxy {
		public constructor(options?: Partial<ClientProxyInitOptions>);
		/**
		 * Finishes an operation started with {@link Gclue.client_proxy_new}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.client_proxy_new}.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_finish(res: Gio.AsyncResult): ClientProxy;
		/**
		 * Finishes an operation started with {@link Gclue.client_proxy_new_for_bus}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.client_proxy_new_for_bus}.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy;
		/**
		 * Like {@link Gclue.client_proxy_new_sync} but takes a #GBusType instead of a #GDBusConnection.
		 * 
		 * The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_client_proxy_new_for_bus() for the asynchronous version of this constructor.
		 * @param bus_type A #GBusType.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique).
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ClientProxy;
		/**
		 * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See {@link G.dbus_proxy_new_sync} for more details.
		 * 
		 * The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_client_proxy_new() for the asynchronous version of this constructor.
		 * @param connection A #GDBusConnection.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique) or %NULL if #connection is not a message bus connection.
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ClientProxy;
		/**
		 * A utility function to create a #GClueClientProxy without having to deal with
		 * a #GClueManager. See also {@link Gclue.client_proxy_create_full} which improves
		 * resource management.
		 * 
		 * This is identitcal to calling gclue_client_proxy_create_full() without any
		 * flags set.
		 * 
		 * See #gclue_client_proxy_create_sync() for the synchronous, blocking version
		 * of this function.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the results are ready.
		 */
		public static create(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.client_proxy_create}.
		 * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to
		 *          {@link Gclue.client_proxy_create}.
		 * @returns The constructed proxy
		 * object or %NULL if #error is set.
		 */
		public static create_finish(result: Gio.AsyncResult): ClientProxy;
		/**
		 * A utility function to create a #GClueClientProxy without having to deal with
		 * a #GClueManager.
		 * 
		 * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
		 * that the client will be deleted again from the geoclue service when
		 * it is destroyed. This flag should be used unless you are doing explicit
		 * resource management.
		 * 
		 * See {@link #gclue.client_proxy_create_full_sync} for the synchronous, blocking
		 * version of this function.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param flags #GClueClientProxyCreateFlags to modify the creation.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the results are ready.
		 */
		public static create_full(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.client_proxy_create_full}.
		 * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to
		 *          {@link Gclue.client_proxy_create}.
		 * @returns The constructed proxy
		 * object or %NULL if #error is set.
		 */
		public static create_full_finish(result: Gio.AsyncResult): ClientProxy;
		/**
		 * The synchronous and blocking version of {@link #gclue.client_proxy_create_full}.
		 * 
		 * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
		 * that the client will be deleted again from the geoclue service when
		 * it is destroyed. This flag should be used unless you are doing explicit
		 * resource management.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param flags #GClueClientProxyCreateFlags to modify the creation.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy
		 * object or %NULL if #error is set.
		 */
		public static create_full_sync(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null): ClientProxy;
		/**
		 * The synchronous and blocking version of {@link #gclue.client_proxy_create}.
		 * See also gclue_client_proxy_create_full_sync() which improves resource
		 * management.
		 * 
		 * This function is identical to calling gclue_client_proxy_create_full_sync()
		 * without any flags set.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy
		 * object or %NULL if #error is set.
		 */
		public static create_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null): ClientProxy;
		/**
		 * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See {@link G.dbus_proxy_new} for more details.
		 * 
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_client_proxy_new_finish() to get the result of the operation.
		 * 
		 * See gclue_client_proxy_new_sync() for the synchronous, blocking version of this constructor.
		 * @param connection A #GDBusConnection.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique) or %NULL if #connection is not a message bus connection.
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
		 */
		public static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Like {@link Gclue.client_proxy_new} but takes a #GBusType instead of a #GDBusConnection.
		 * 
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_client_proxy_new_for_bus_finish() to get the result of the operation.
		 * 
		 * See gclue_client_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
		 * @param bus_type A #GBusType.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique).
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
		 */
		public static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClientSkeleton} instead.
	 */
	interface IClientSkeleton {

	}

	type ClientSkeletonInitOptionsMixin = Gio.DBusInterfaceSkeletonInitOptions & ClientInitOptions & Gio.DBusInterfaceInitOptions
	export interface ClientSkeletonInitOptions extends ClientSkeletonInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClientSkeleton} instead.
	 */
	type ClientSkeletonMixin = IClientSkeleton & Gio.DBusInterfaceSkeleton & Client & Gio.DBusInterface;

	/**
	 * The #GClueClientSkeleton structure contains only private data and should only be accessed using the provided API.
	 */
	interface ClientSkeleton extends ClientSkeletonMixin {}

	class ClientSkeleton {
		public constructor(options?: Partial<ClientSkeletonInitOptions>);
		/**
		 * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
		 * @returns The skeleton object.
		 */
		public static new(): ClientSkeleton;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LocationProxy} instead.
	 */
	interface ILocationProxy {

	}

	type LocationProxyInitOptionsMixin = Gio.DBusProxyInitOptions & LocationInitOptions & Gio.AsyncInitableInitOptions & Gio.DBusInterfaceInitOptions & Gio.InitableInitOptions
	export interface LocationProxyInitOptions extends LocationProxyInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LocationProxy} instead.
	 */
	type LocationProxyMixin = ILocationProxy & Gio.DBusProxy & Location & Gio.AsyncInitable & Gio.DBusInterface & Gio.Initable;

	/**
	 * The #GClueLocationProxy structure contains only private data and should only be accessed using the provided API.
	 */
	interface LocationProxy extends LocationProxyMixin {}

	class LocationProxy {
		public constructor(options?: Partial<LocationProxyInitOptions>);
		/**
		 * Finishes an operation started with {@link Gclue.location_proxy_new}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.location_proxy_new}.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_finish(res: Gio.AsyncResult): LocationProxy;
		/**
		 * Finishes an operation started with {@link Gclue.location_proxy_new_for_bus}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.location_proxy_new_for_bus}.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy;
		/**
		 * Like {@link Gclue.location_proxy_new_sync} but takes a #GBusType instead of a #GDBusConnection.
		 * 
		 * The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_location_proxy_new_for_bus() for the asynchronous version of this constructor.
		 * @param bus_type A #GBusType.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique).
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): LocationProxy;
		/**
		 * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See {@link G.dbus_proxy_new_sync} for more details.
		 * 
		 * The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_location_proxy_new() for the asynchronous version of this constructor.
		 * @param connection A #GDBusConnection.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique) or %NULL if #connection is not a message bus connection.
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): LocationProxy;
		/**
		 * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See {@link G.dbus_proxy_new} for more details.
		 * 
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_location_proxy_new_finish() to get the result of the operation.
		 * 
		 * See gclue_location_proxy_new_sync() for the synchronous, blocking version of this constructor.
		 * @param connection A #GDBusConnection.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique) or %NULL if #connection is not a message bus connection.
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
		 */
		public static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Like {@link Gclue.location_proxy_new} but takes a #GBusType instead of a #GDBusConnection.
		 * 
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_location_proxy_new_for_bus_finish() to get the result of the operation.
		 * 
		 * See gclue_location_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
		 * @param bus_type A #GBusType.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique).
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
		 */
		public static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LocationSkeleton} instead.
	 */
	interface ILocationSkeleton {

	}

	type LocationSkeletonInitOptionsMixin = Gio.DBusInterfaceSkeletonInitOptions & LocationInitOptions & Gio.DBusInterfaceInitOptions
	export interface LocationSkeletonInitOptions extends LocationSkeletonInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LocationSkeleton} instead.
	 */
	type LocationSkeletonMixin = ILocationSkeleton & Gio.DBusInterfaceSkeleton & Location & Gio.DBusInterface;

	/**
	 * The #GClueLocationSkeleton structure contains only private data and should only be accessed using the provided API.
	 */
	interface LocationSkeleton extends LocationSkeletonMixin {}

	class LocationSkeleton {
		public constructor(options?: Partial<LocationSkeletonInitOptions>);
		/**
		 * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
		 * @returns The skeleton object.
		 */
		public static new(): LocationSkeleton;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ManagerProxy} instead.
	 */
	interface IManagerProxy {

	}

	type ManagerProxyInitOptionsMixin = Gio.DBusProxyInitOptions & ManagerInitOptions & Gio.AsyncInitableInitOptions & Gio.DBusInterfaceInitOptions & Gio.InitableInitOptions
	export interface ManagerProxyInitOptions extends ManagerProxyInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ManagerProxy} instead.
	 */
	type ManagerProxyMixin = IManagerProxy & Gio.DBusProxy & Manager & Gio.AsyncInitable & Gio.DBusInterface & Gio.Initable;

	/**
	 * The #GClueManagerProxy structure contains only private data and should only be accessed using the provided API.
	 */
	interface ManagerProxy extends ManagerProxyMixin {}

	class ManagerProxy {
		public constructor(options?: Partial<ManagerProxyInitOptions>);
		/**
		 * Finishes an operation started with {@link Gclue.manager_proxy_new}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.manager_proxy_new}.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_finish(res: Gio.AsyncResult): ManagerProxy;
		/**
		 * Finishes an operation started with {@link Gclue.manager_proxy_new_for_bus}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.manager_proxy_new_for_bus}.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;
		/**
		 * Like {@link Gclue.manager_proxy_new_sync} but takes a #GBusType instead of a #GDBusConnection.
		 * 
		 * The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
		 * @param bus_type A #GBusType.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique).
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy;
		/**
		 * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See {@link G.dbus_proxy_new_sync} for more details.
		 * 
		 * The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_manager_proxy_new() for the asynchronous version of this constructor.
		 * @param connection A #GDBusConnection.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique) or %NULL if #connection is not a message bus connection.
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The constructed proxy object or %NULL if #error is set.
		 */
		public static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy;
		/**
		 * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See {@link G.dbus_proxy_new} for more details.
		 * 
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_manager_proxy_new_finish() to get the result of the operation.
		 * 
		 * See gclue_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
		 * @param connection A #GDBusConnection.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique) or %NULL if #connection is not a message bus connection.
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
		 */
		public static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Like {@link Gclue.manager_proxy_new} but takes a #GBusType instead of a #GDBusConnection.
		 * 
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_manager_proxy_new_for_bus_finish() to get the result of the operation.
		 * 
		 * See gclue_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
		 * @param bus_type A #GBusType.
		 * @param flags Flags from the #GDBusProxyFlags enumeration.
		 * @param name A bus name (well-known or unique).
		 * @param object_path An object path.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
		 */
		public static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ManagerSkeleton} instead.
	 */
	interface IManagerSkeleton {

	}

	type ManagerSkeletonInitOptionsMixin = Gio.DBusInterfaceSkeletonInitOptions & ManagerInitOptions & Gio.DBusInterfaceInitOptions
	export interface ManagerSkeletonInitOptions extends ManagerSkeletonInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ManagerSkeleton} instead.
	 */
	type ManagerSkeletonMixin = IManagerSkeleton & Gio.DBusInterfaceSkeleton & Manager & Gio.DBusInterface;

	/**
	 * The #GClueManagerSkeleton structure contains only private data and should only be accessed using the provided API.
	 */
	interface ManagerSkeleton extends ManagerSkeletonMixin {}

	class ManagerSkeleton {
		public constructor(options?: Partial<ManagerSkeletonInitOptions>);
		/**
		 * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
		 * @returns The skeleton object.
		 */
		public static new(): ManagerSkeleton;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Simple} instead.
	 */
	interface ISimple {
		/**
		 * The client proxy. This is %NULL if #simple is not using a client proxy
		 * (i-e when inside the Flatpak sandbox).
		 */
		readonly client: ClientProxy;
		/**
		 * The current distance threshold in meters. This value is used by the
		 * service when it gets new location info. If the distance moved is
		 * below the threshold, it won't emit the LocationUpdated signal.
		 * 
		 * When set to 0 (default), it always emits the signal.
		 */
		distance_threshold: number;
		/**
		 * The current location.
		 */
		readonly location: LocationProxy;
		/**
		 * The current time threshold in seconds. This value is used by the
		 * service when it gets new location info. If the time passed is
		 * below the threshold, it won't emit the LocationUpdated signal.
		 * 
		 * When set to 0 (default), it always emits the signal.
		 */
		time_threshold: number;
		/**
		 * Gets the client proxy, or %NULL if #simple is not using a client proxy (i-e
		 * when inside the Flatpak sandbox).
		 * @returns The client object.
		 */
		get_client(): ClientProxy | null;
		/**
		 * Gets the current location.
		 * @returns The last known location
		 * as #GClueLocation.
		 */
		get_location(): Location | null;
		connect(signal: "notify::client", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::distance-threshold", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::location", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::time-threshold", callback: (owner: this, ...args: any) => void): number;

	}

	type SimpleInitOptionsMixin = GObject.ObjectInitOptions & Gio.AsyncInitableInitOptions & 
	Pick<ISimple,
		"distance_threshold" |
		"time_threshold">;

	export interface SimpleInitOptions extends SimpleInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Simple} instead.
	 */
	type SimpleMixin = ISimple & GObject.Object & Gio.AsyncInitable;

	interface Simple extends SimpleMixin {}

	class Simple {
		public constructor(options?: Partial<SimpleInitOptions>);
		/**
		 * Finishes an operation started with {@link #gclue.simple_new}.
		 * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to
		 *          {@link #gclue.simple_new}.
		 * @returns The constructed proxy
		 * object or %NULL if #error is set.
		 */
		public static new_finish(result: Gio.AsyncResult): Simple;
		/**
		 * The synchronous and blocking version of {@link #gclue.simple_new}.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The new #GClueSimple object or
		 * %NULL if #error is set.
		 */
		public static new_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null): Simple;
		/**
		 * Finishes an operation started with {@link #gclue.simple_new_with_thresholds}.
		 * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to
		 *          {@link #gclue.simple_new_with_thresholds}.
		 * @returns The constructed proxy
		 * object or %NULL if #error is set.
		 */
		public static new_with_thresholds_finish(result: Gio.AsyncResult): Simple;
		/**
		 * The synchronous and blocking version of {@link #gclue.simple_new_with_thresholds}.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param time_threshold Time threshold in seconds, 0 for no limit.
		 * @param distance_threshold Distance threshold in meters, 0 for no limit.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns The new #GClueSimple object or
		 * %NULL if #error is set.
		 */
		public static new_with_thresholds_sync(desktop_id: string, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable?: Gio.Cancellable | null): Simple;
		/**
		 * Asynchronously creates a #GClueSimple instance. Use
		 * {@link #gclue.simple_new_finish} to get the created #GClueSimple instance.
		 * 
		 * See #gclue_simple_new_sync() for the synchronous, blocking version
		 * of this function.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the results are ready.
		 */
		public static new(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Asynchronously creates a #GClueSimple instance. Use
		 * {@link #gclue.simple_new_with_thresholds_finish} to get the created #GClueSimple instance.
		 * 
		 * See #gclue_simple_new_with_thresholds_sync() for the synchronous,
		 * blocking version of this function.
		 * @param desktop_id The desktop file id (the basename of the desktop file).
		 * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
		 * @param time_threshold Time threshold in seconds, 0 for no limit.
		 * @param distance_threshold Distance threshold in meters, 0 for no limit.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the results are ready.
		 */
		public static new_with_thresholds(desktop_id: string, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
	}

	export interface ClientIfaceInitOptions {}
	/**
	 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
	 */
	interface ClientIface {}
	class ClientIface {
		public constructor(options?: Partial<ClientIfaceInitOptions>);
		/**
		 * The parent interface.
		 */
		public readonly parent_iface: GObject.TypeInterface;
		public handle_start: {(object: Client, invocation: Gio.DBusMethodInvocation): boolean;};
		public handle_stop: {(object: Client, invocation: Gio.DBusMethodInvocation): boolean;};
		public get_active: {(object: Client): boolean;};
		public get_desktop_id: {(object: Client): string | null;};
		public get_distance_threshold: {(object: Client): number;};
		public get_location: {(object: Client): string | null;};
		public get_requested_accuracy_level: {(object: Client): number;};
		public get_time_threshold: {(object: Client): number;};
		public location_updated: {(object: Client, arg_old: string, arg_new: string): void;};
	}

	export interface LocationIfaceInitOptions {}
	/**
	 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
	 */
	interface LocationIface {}
	class LocationIface {
		public constructor(options?: Partial<LocationIfaceInitOptions>);
		/**
		 * The parent interface.
		 */
		public readonly parent_iface: GObject.TypeInterface;
		public get_accuracy: {(object: Location): number;};
		public get_altitude: {(object: Location): number;};
		public get_description: {(object: Location): string | null;};
		public get_heading: {(object: Location): number;};
		public get_latitude: {(object: Location): number;};
		public get_longitude: {(object: Location): number;};
		public get_speed: {(object: Location): number;};
		public get_timestamp: {(object: Location): GLib.Variant | null;};
	}

	export interface ManagerIfaceInitOptions {}
	/**
	 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
	 */
	interface ManagerIface {}
	class ManagerIface {
		public constructor(options?: Partial<ManagerIfaceInitOptions>);
		/**
		 * The parent interface.
		 */
		public readonly parent_iface: GObject.TypeInterface;
		public handle_add_agent: {(object: Manager, invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;};
		public handle_create_client: {(object: Manager, invocation: Gio.DBusMethodInvocation): boolean;};
		public handle_delete_client: {(object: Manager, invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;};
		public handle_get_client: {(object: Manager, invocation: Gio.DBusMethodInvocation): boolean;};
		public get_available_accuracy_level: {(object: Manager): number;};
		public get_in_use: {(object: Manager): boolean;};
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Client} instead.
	 */
	interface IClient {
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		active: boolean;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
		 */
		desktop_id: string;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
		 */
		distance_threshold: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		location: string;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
		 */
		requested_accuracy_level: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
		 */
		time_threshold: number;
		/**
		 * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on #proxy.
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_client_call_start_finish() to get the result of the operation.
		 * 
		 * See gclue_client_call_start_sync() for the synchronous, blocking version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
		 */
		call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.client_call_start}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.client_call_start}.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_start_finish(res: Gio.AsyncResult): boolean;
		/**
		 * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on #proxy. The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_client_call_start() for the asynchronous version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
		/**
		 * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on #proxy.
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_client_call_stop_finish() to get the result of the operation.
		 * 
		 * See gclue_client_call_stop_sync() for the synchronous, blocking version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
		 */
		call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.client_call_stop}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.client_call_stop}.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_stop_finish(res: Gio.AsyncResult): boolean;
		/**
		 * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on #proxy. The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_client_call_stop() for the asynchronous version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
		/**
		 * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
		 * 
		 * This method will free #invocation, you cannot use it afterwards.
		 * @param invocation A #GDBusMethodInvocation.
		 */
		complete_start(invocation: Gio.DBusMethodInvocation): void;
		/**
		 * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
		 * 
		 * This method will free #invocation, you cannot use it afterwards.
		 * @param invocation A #GDBusMethodInvocation.
		 */
		complete_stop(invocation: Gio.DBusMethodInvocation): void;
		/**
		 * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
		 * @param arg_old Argument to pass with the signal.
		 * @param arg_new Argument to pass with the signal.
		 */
		emit_location_updated(arg_old: string, arg_new: string): void;
		/**
		 * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method.
		 * 
		 * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to #invocation and eventually call gclue_client_complete_start() or e.g. g_dbus_method_invocation_return_error() on it) and no other signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - invocation: A #GDBusMethodInvocation. 
		 *  - returns %G_DBUS_METHOD_INVOCATION_HANDLED or %TRUE if the invocation was handled, %G_DBUS_METHOD_INVOCATION_UNHANDLED or %FALSE to let other signal handlers run. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "handle-start", callback: (owner: this, invocation: Gio.DBusMethodInvocation) => boolean): number;
		/**
		 * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method.
		 * 
		 * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to #invocation and eventually call gclue_client_complete_stop() or e.g. g_dbus_method_invocation_return_error() on it) and no other signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - invocation: A #GDBusMethodInvocation. 
		 *  - returns %G_DBUS_METHOD_INVOCATION_HANDLED or %TRUE if the invocation was handled, %G_DBUS_METHOD_INVOCATION_UNHANDLED or %FALSE to let other signal handlers run. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "handle-stop", callback: (owner: this, invocation: Gio.DBusMethodInvocation) => boolean): number;
		/**
		 * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> is received.
		 * 
		 * On the service-side, this signal can be used with e.g. {@link G.signal_emit_by_name} to make the object emit the D-Bus signal.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - arg_old: Argument. 
		 *  - arg_new: Argument. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "location-updated", callback: (owner: this, arg_old: string, arg_new: string) => void): number;

		connect(signal: "notify::active", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::desktop-id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::distance-threshold", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::location", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::requested-accuracy-level", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::time-threshold", callback: (owner: this, ...args: any) => void): number;

	}

	type ClientInitOptionsMixin = Pick<IClient,
		"active" |
		"desktop_id" |
		"distance_threshold" |
		"location" |
		"requested_accuracy_level" |
		"time_threshold">;

	export interface ClientInitOptions extends ClientInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Client} instead.
	 */
	type ClientMixin = IClient;

	/**
	 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
	 */
	interface Client extends ClientMixin {}

	class Client {
		public constructor(options?: Partial<ClientInitOptions>);
		/**
		 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
		 * @returns A #GDBusInterfaceInfo. Do not free.
		 */
		public static interface_info(): Gio.DBusInterfaceInfo;
		/**
		 * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
		 * The properties are overridden in the order they are defined.
		 * @param klass The class structure for a #GObject derived class.
		 * @param property_id_begin The property id to assign to the first overridden property.
		 * @returns The last property id.
		 */
		public static override_properties(klass: Manager, property_id_begin: number): number;
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Location} instead.
	 */
	interface ILocation {
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		accuracy: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		altitude: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		description: string;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		heading: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		latitude: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		longitude: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		speed: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		timestamp: GLib.Variant;

		connect(signal: "notify::accuracy", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::altitude", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::description", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::heading", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::latitude", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::longitude", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::speed", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::timestamp", callback: (owner: this, ...args: any) => void): number;

	}

	type LocationInitOptionsMixin = Pick<ILocation,
		"accuracy" |
		"altitude" |
		"description" |
		"heading" |
		"latitude" |
		"longitude" |
		"speed" |
		"timestamp">;

	export interface LocationInitOptions extends LocationInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Location} instead.
	 */
	type LocationMixin = ILocation;

	/**
	 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
	 */
	interface Location extends LocationMixin {}

	class Location {
		public constructor(options?: Partial<LocationInitOptions>);
		/**
		 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
		 * @returns A #GDBusInterfaceInfo. Do not free.
		 */
		public static interface_info(): Gio.DBusInterfaceInfo;
		/**
		 * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
		 * The properties are overridden in the order they are defined.
		 * @param klass The class structure for a #GObject derived class.
		 * @param property_id_begin The property id to assign to the first overridden property.
		 * @returns The last property id.
		 */
		public static override_properties(klass: Manager, property_id_begin: number): number;
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Manager} instead.
	 */
	interface IManager {
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		available_accuracy_level: number;
		/**
		 * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
		 * 
		 * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
		 */
		in_use: boolean;
		/**
		 * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on #proxy.
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_manager_call_add_agent_finish() to get the result of the operation.
		 * 
		 * See gclue_manager_call_add_agent_sync() for the synchronous, blocking version of this method.
		 * @param arg_id Argument to pass with the method invocation.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
		 */
		call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.manager_call_add_agent}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.manager_call_add_agent}.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_add_agent_finish(res: Gio.AsyncResult): boolean;
		/**
		 * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on #proxy. The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_manager_call_add_agent() for the asynchronous version of this method.
		 * @param arg_id Argument to pass with the method invocation.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
		/**
		 * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on #proxy.
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_manager_call_create_client_finish() to get the result of the operation.
		 * 
		 * See gclue_manager_call_create_client_sync() for the synchronous, blocking version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
		 */
		call_create_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.manager_call_create_client}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.manager_call_create_client}.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 * 
		 * Return location for return parameter or %NULL to ignore.
		 */
		call_create_client_finish(res: Gio.AsyncResult): [ boolean, string | null ];
		/**
		 * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on #proxy. The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_manager_call_create_client() for the asynchronous version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 * 
		 * Return location for return parameter or %NULL to ignore.
		 */
		call_create_client_sync(cancellable?: Gio.Cancellable | null): [ boolean, string | null ];
		/**
		 * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on #proxy.
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_manager_call_delete_client_finish() to get the result of the operation.
		 * 
		 * See gclue_manager_call_delete_client_sync() for the synchronous, blocking version of this method.
		 * @param arg_client Argument to pass with the method invocation.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
		 */
		call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.manager_call_delete_client}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.manager_call_delete_client}.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_delete_client_finish(res: Gio.AsyncResult): boolean;
		/**
		 * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on #proxy. The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_manager_call_delete_client() for the asynchronous version of this method.
		 * @param arg_client Argument to pass with the method invocation.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 */
		call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
		/**
		 * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on #proxy.
		 * When the operation is finished, #callback will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
		 * You can then call gclue_manager_call_get_client_finish() to get the result of the operation.
		 * 
		 * See gclue_manager_call_get_client_sync() for the synchronous, blocking version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
		 */
		call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an operation started with {@link Gclue.manager_call_get_client}.
		 * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to {@link Gclue.manager_call_get_client}.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 * 
		 * Return location for return parameter or %NULL to ignore.
		 */
		call_get_client_finish(res: Gio.AsyncResult): [ boolean, string | null ];
		/**
		 * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on #proxy. The calling thread is blocked until a reply is received.
		 * 
		 * See gclue_manager_call_get_client() for the asynchronous version of this method.
		 * @param cancellable A #GCancellable or %NULL.
		 * @returns %TRUE if the call succeeded, %FALSE if #error is set.
		 * 
		 * Return location for return parameter or %NULL to ignore.
		 */
		call_get_client_sync(cancellable?: Gio.Cancellable | null): [ boolean, string | null ];
		/**
		 * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
		 * 
		 * This method will free #invocation, you cannot use it afterwards.
		 * @param invocation A #GDBusMethodInvocation.
		 */
		complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
		/**
		 * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
		 * 
		 * This method will free #invocation, you cannot use it afterwards.
		 * @param invocation A #GDBusMethodInvocation.
		 * @param client Parameter to return.
		 */
		complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
		/**
		 * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
		 * 
		 * This method will free #invocation, you cannot use it afterwards.
		 * @param invocation A #GDBusMethodInvocation.
		 */
		complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
		/**
		 * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
		 * 
		 * This method will free #invocation, you cannot use it afterwards.
		 * @param invocation A #GDBusMethodInvocation.
		 * @param client Parameter to return.
		 */
		complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
		/**
		 * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method.
		 * 
		 * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to #invocation and eventually call gclue_manager_complete_add_agent() or e.g. g_dbus_method_invocation_return_error() on it) and no other signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - invocation: A #GDBusMethodInvocation. 
		 *  - arg_id: Argument passed by remote caller. 
		 *  - returns %G_DBUS_METHOD_INVOCATION_HANDLED or %TRUE if the invocation was handled, %G_DBUS_METHOD_INVOCATION_UNHANDLED or %FALSE to let other signal handlers run. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "handle-add-agent", callback: (owner: this, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean): number;
		/**
		 * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method.
		 * 
		 * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to #invocation and eventually call gclue_manager_complete_create_client() or e.g. g_dbus_method_invocation_return_error() on it) and no other signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - invocation: A #GDBusMethodInvocation. 
		 *  - returns %G_DBUS_METHOD_INVOCATION_HANDLED or %TRUE if the invocation was handled, %G_DBUS_METHOD_INVOCATION_UNHANDLED or %FALSE to let other signal handlers run. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "handle-create-client", callback: (owner: this, invocation: Gio.DBusMethodInvocation) => boolean): number;
		/**
		 * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method.
		 * 
		 * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to #invocation and eventually call gclue_manager_complete_delete_client() or e.g. g_dbus_method_invocation_return_error() on it) and no other signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - invocation: A #GDBusMethodInvocation. 
		 *  - arg_client: Argument passed by remote caller. 
		 *  - returns %G_DBUS_METHOD_INVOCATION_HANDLED or %TRUE if the invocation was handled, %G_DBUS_METHOD_INVOCATION_UNHANDLED or %FALSE to let other signal handlers run. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "handle-delete-client", callback: (owner: this, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean): number;
		/**
		 * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method.
		 * 
		 * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to #invocation and eventually call gclue_manager_complete_get_client() or e.g. g_dbus_method_invocation_return_error() on it) and no other signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - invocation: A #GDBusMethodInvocation. 
		 *  - returns %G_DBUS_METHOD_INVOCATION_HANDLED or %TRUE if the invocation was handled, %G_DBUS_METHOD_INVOCATION_UNHANDLED or %FALSE to let other signal handlers run. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "handle-get-client", callback: (owner: this, invocation: Gio.DBusMethodInvocation) => boolean): number;

		connect(signal: "notify::available-accuracy-level", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::in-use", callback: (owner: this, ...args: any) => void): number;

	}

	type ManagerInitOptionsMixin = Pick<IManager,
		"available_accuracy_level" |
		"in_use">;

	export interface ManagerInitOptions extends ManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Manager} instead.
	 */
	type ManagerMixin = IManager;

	/**
	 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
	 */
	interface Manager extends ManagerMixin {}

	class Manager {
		public constructor(options?: Partial<ManagerInitOptions>);
		/**
		 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
		 * @returns A #GDBusInterfaceInfo. Do not free.
		 */
		public static interface_info(): Gio.DBusInterfaceInfo;
		/**
		 * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
		 * The properties are overridden in the order they are defined.
		 * @param klass The class structure for a #GObject derived class.
		 * @param property_id_begin The property id to assign to the first overridden property.
		 * @returns The last property id.
		 */
		public static override_properties(klass: Manager, property_id_begin: number): number;
	}



	enum AccuracyLevel {
		NONE = 0,
		COUNTRY = 1,
		CITY = 4,
		NEIGHBORHOOD = 5,
		STREET = 6,
		EXACT = 8
	}

	enum ClientProxyCreateFlags {
		NONE = 0,
		AUTO_DELETE = 1
	}

	/**
	 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
	 * @returns A #GDBusInterfaceInfo. Do not free.
	 */
	function client_interface_info(): Gio.DBusInterfaceInfo;
	/**
	 * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
	 * The properties are overridden in the order they are defined.
	 * @param klass The class structure for a #GObject derived class.
	 * @param property_id_begin The property id to assign to the first overridden property.
	 * @returns The last property id.
	 */
	function client_override_properties(klass: Client, property_id_begin: number): number;
	/**
	 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
	 * @returns A #GDBusInterfaceInfo. Do not free.
	 */
	function location_interface_info(): Gio.DBusInterfaceInfo;
	/**
	 * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
	 * The properties are overridden in the order they are defined.
	 * @param klass The class structure for a #GObject derived class.
	 * @param property_id_begin The property id to assign to the first overridden property.
	 * @returns The last property id.
	 */
	function location_override_properties(klass: Location, property_id_begin: number): number;
	/**
	 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
	 * @returns A #GDBusInterfaceInfo. Do not free.
	 */
	function manager_interface_info(): Gio.DBusInterfaceInfo;
	/**
	 * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
	 * The properties are overridden in the order they are defined.
	 * @param klass The class structure for a #GObject derived class.
	 * @param property_id_begin The property id to assign to the first overridden property.
	 * @returns The last property id.
	 */
	function manager_override_properties(klass: Manager, property_id_begin: number): number;
}