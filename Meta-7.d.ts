/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Meta {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	interface IBackend {
		/**
		 * Gets the global {@link Dnd} that's managed by this backend.
		 * @returns the {@link Dnd}
		 */
		get_dnd(): Dnd;
		get_remote_access_controller(): RemoteAccessController;
		get_settings(): Settings;
		/**
		 * Gets the global #ClutterStage that's managed by this backend.
		 * @returns the #ClutterStage
		 */
		get_stage(): Clutter.Actor;
		is_rendering_hardware_accelerated(): boolean;
		lock_layout_group(idx: number): void;
		set_keymap(layouts: string, variants: string, options: string): void;
		set_numlock(numlock_state: boolean): void;
		connect(signal: "gpu-added", callback: (owner: this, gpu: any) => void): number;
		connect(signal: "keymap-changed", callback: (owner: this) => void): number;
		connect(signal: "keymap-layout-group-changed", callback: (owner: this, object: number) => void): number;
		connect(signal: "last-device-changed", callback: (owner: this, object: Clutter.InputDevice) => void): number;
		connect(signal: "lid-is-closed-changed", callback: (owner: this, object: boolean) => void): number;

	}

	type BackendInitOptionsMixin = GObject.ObjectInitOptions & Gio.InitableInitOptions
	export interface BackendInitOptions extends BackendInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	type BackendMixin = IBackend & GObject.Object & Gio.Initable;

	interface Backend extends BackendMixin {}

	class Backend {
		public constructor(options?: Partial<BackendInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Background} instead.
	 */
	interface IBackground {
		meta_display: Display;
		set_blend(file1: Gio.File, file2: Gio.File, blend_factor: number, style: GDesktopEnums.BackgroundStyle): void;
		set_color(color: Clutter.Color): void;
		/**
		 * Set the background to #file
		 * @param file a #GFile representing the background file
		 * @param style the background style to apply
		 */
		set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle): void;
		set_gradient(shading_direction: GDesktopEnums.BackgroundShading, color: Clutter.Color, second_color: Clutter.Color): void;
		connect(signal: "changed", callback: (owner: this) => void): number;

		connect(signal: "notify::meta-display", callback: (owner: this, ...args: any) => void): number;

	}

	type BackgroundInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IBackground,
		"meta_display">;

	export interface BackgroundInitOptions extends BackgroundInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Background} instead.
	 */
	type BackgroundMixin = IBackground & GObject.Object;

	/**
	 * This class handles tracking and painting the root window background.
	 * By integrating with {@link WindowGroup} we can avoid painting parts of
	 * the background that are obscured by other windows.
	 */
	interface Background extends BackgroundMixin {}

	class Background {
		public constructor(options?: Partial<BackgroundInitOptions>);
		public static new(display: Display): Background;
		public static refresh_all(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundActor} instead.
	 */
	interface IBackgroundActor {
		meta_display: Display;
		monitor: number;

		connect(signal: "notify::meta-display", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::monitor", callback: (owner: this, ...args: any) => void): number;

	}

	type BackgroundActorInitOptionsMixin = Clutter.ActorInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions & 
	Pick<IBackgroundActor,
		"meta_display" |
		"monitor">;

	export interface BackgroundActorInitOptions extends BackgroundActorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundActor} instead.
	 */
	type BackgroundActorMixin = IBackgroundActor & Clutter.Actor & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	/**
	 * This class handles tracking and painting the root window background.
	 * By integrating with {@link WindowGroup} we can avoid painting parts of
	 * the background that are obscured by other windows.
	 */
	interface BackgroundActor extends BackgroundActorMixin {}

	class BackgroundActor {
		public constructor(options?: Partial<BackgroundActorInitOptions>);
		/**
		 * Creates a new actor to draw the background for the given monitor.
		 * @param display
		 * @param monitor Index of the monitor for which to draw the background
		 * @returns the newly created background actor
		 */
		public static new(display: Display, monitor: number): Clutter.Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundContent} instead.
	 */
	interface IBackgroundContent {
		background: Background;
		brightness: number;
		gradient: boolean;
		gradient_height: number;
		gradient_max_darkness: number;
		meta_display: Display;
		monitor: number;
		vignette: boolean;
		vignette_sharpness: number;
		set_background(background: Background): void;
		set_gradient(enabled: boolean, height: number, tone_start: number): void;
		set_vignette(enabled: boolean, brightness: number, sharpness: number): void;
		connect(signal: "notify::background", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::brightness", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gradient", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gradient-height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gradient-max-darkness", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::meta-display", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::monitor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::vignette", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::vignette-sharpness", callback: (owner: this, ...args: any) => void): number;

	}

	type BackgroundContentInitOptionsMixin = GObject.ObjectInitOptions & Clutter.ContentInitOptions & 
	Pick<IBackgroundContent,
		"background" |
		"brightness" |
		"gradient" |
		"gradient_height" |
		"gradient_max_darkness" |
		"meta_display" |
		"monitor" |
		"vignette" |
		"vignette_sharpness">;

	export interface BackgroundContentInitOptions extends BackgroundContentInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundContent} instead.
	 */
	type BackgroundContentMixin = IBackgroundContent & GObject.Object & Clutter.Content;

	/**
	 * This class handles tracking and painting the root window background.
	 * By integrating with {@link WindowGroup} we can avoid painting parts of
	 * the background that are obscured by other windows.
	 */
	interface BackgroundContent extends BackgroundContentMixin {}

	class BackgroundContent {
		public constructor(options?: Partial<BackgroundContentInitOptions>);
		/**
		 * Creates a new actor to draw the background for the given monitor.
		 * @param display
		 * @param monitor Index of the monitor for which to draw the background
		 * @returns the newly created background actor
		 */
		public static new(display: Display, monitor: number): Clutter.Content;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundGroup} instead.
	 */
	interface IBackgroundGroup {

	}

	type BackgroundGroupInitOptionsMixin = Clutter.ActorInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions
	export interface BackgroundGroupInitOptions extends BackgroundGroupInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundGroup} instead.
	 */
	type BackgroundGroupMixin = IBackgroundGroup & Clutter.Actor & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface BackgroundGroup extends BackgroundGroupMixin {}

	class BackgroundGroup {
		public constructor(options?: Partial<BackgroundGroupInitOptions>);
		public static new(): Clutter.Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundImage} instead.
	 */
	interface IBackgroundImage {
		/**
		 * This function is a convenience function for checking for success,
		 * without having to call {@link Meta.BackgroundImage.get_texture} and
		 * handle the return of a Cogl type.
		 * @returns %TRUE if loading completed successfully, otherwise %FALSE
		 */
		get_success(): boolean;
		get_texture(): Cogl.Texture;
		is_loaded(): boolean;
		connect(signal: "loaded", callback: (owner: this) => void): number;

	}

	type BackgroundImageInitOptionsMixin = GObject.ObjectInitOptions
	export interface BackgroundImageInitOptions extends BackgroundImageInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundImage} instead.
	 */
	type BackgroundImageMixin = IBackgroundImage & GObject.Object;

	/**
	 * {@link BackgroundImage} is an object that represents a loaded or loading background image.
	 */
	interface BackgroundImage extends BackgroundImageMixin {}

	class BackgroundImage {
		public constructor(options?: Partial<BackgroundImageInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundImageCache} instead.
	 */
	interface IBackgroundImageCache {
		/**
		 * Loads an image to use as a background, or returns a reference to an
		 * image that is already in the process of loading or loaded. In either
		 * case, what is returned is a {@link BackgroundImage} which can be dereferenced
		 * to get a #CoglTexture. If {@link Meta.BackgroundImage.is_loaded} returns %TRUE,
		 * the background is loaded, otherwise the MetaBackgroundImage::loaded
		 * signal will be emitted exactly once. The 'loaded' state means that the
		 * loading process finished, whether it succeeded or failed.
		 * @param file #GFile to load
		 * @returns a {@link BackgroundImage} to dereference to get the loaded texture
		 */
		load(file: Gio.File): BackgroundImage;
		/**
		 * Remove an entry from the cache; this would be used if monitoring
		 * showed that the file changed.
		 * @param file file to remove from the cache
		 */
		purge(file: Gio.File): void;
	}

	type BackgroundImageCacheInitOptionsMixin = GObject.ObjectInitOptions
	export interface BackgroundImageCacheInitOptions extends BackgroundImageCacheInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackgroundImageCache} instead.
	 */
	type BackgroundImageCacheMixin = IBackgroundImageCache & GObject.Object;

	/**
	 * {@link BackgroundImageCache} caches loading of textures for backgrounds; there's actually
	 * nothing background specific about it, other than it is tuned to work well for
	 * large images as typically are used for backgrounds.
	 */
	interface BackgroundImageCache extends BackgroundImageCacheMixin {}

	class BackgroundImageCache {
		public constructor(options?: Partial<BackgroundImageCacheInitOptions>);
		public static get_default(): BackgroundImageCache;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Barrier} instead.
	 */
	interface IBarrier {
		directions: BarrierDirection;
		display: Display;
		x1: number;
		x2: number;
		y1: number;
		y2: number;
		destroy(): void;
		is_active(): boolean;
		/**
		 * In XI2.3, pointer barriers provide a feature where they can
		 * be temporarily released so that the pointer goes through
		 * them. Pass a {@link BarrierEvent} to release the barrier for
		 * this event sequence.
		 * @param event The event to release the pointer for
		 */
		release(event: BarrierEvent): void;
		/**
		 * When a pointer barrier is hit, this will trigger. This
		 * requires an XI2-enabled server.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: A {@link BarrierEvent} that has the details of how
		 * the barrier was hit. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "hit", callback: (owner: this, event: BarrierEvent) => void): number;
		/**
		 * When a pointer barrier hitbox was left, this will trigger.
		 * This requires an XI2-enabled server.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: A {@link BarrierEvent} that has the details of how
		 * the barrier was left. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "left", callback: (owner: this, event: BarrierEvent) => void): number;

		connect(signal: "notify::directions", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::display", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::x1", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::x2", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y1", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::y2", callback: (owner: this, ...args: any) => void): number;

	}

	type BarrierInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IBarrier,
		"directions" |
		"display" |
		"x1" |
		"x2" |
		"y1" |
		"y2">;

	export interface BarrierInitOptions extends BarrierInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Barrier} instead.
	 */
	type BarrierMixin = IBarrier & GObject.Object;

	/**
	 * The <structname>MetaBarrier</structname> structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface Barrier extends BarrierMixin {}

	class Barrier {
		public constructor(options?: Partial<BarrierInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Compositor} instead.
	 */
	interface ICompositor {
		backend: Backend;
		display: Display;
		add_window(window: Window): void;
		destroy(): void;
		filter_keybinding(binding: KeyBinding): boolean;
		flash_display(display: Display): void;
		hide_tile_preview(): void;
		hide_window(window: Window, effect: CompEffect): void;
		manage(): void;
		queue_frame_drawn(window: Window, no_delay_frame: boolean): void;
		remove_window(window: Window): void;
		show_tile_preview(window: Window, tile_rect: Rectangle, tile_monitor_number: number): void;
		show_window(window: Window, effect: CompEffect): void;
		show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void;
		show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Rectangle): void;
		size_change_window(window: Window, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle): void;
		switch_workspace(from: Workspace, to: Workspace, direction: MotionDirection): void;
		sync_stack(stack: any[]): void;
		sync_updates_frozen(window: Window): void;
		sync_window_geometry(window: Window, did_placement: boolean): void;
		unmanage(): void;
		window_opacity_changed(window: Window): void;
		window_shape_changed(window: Window): void;
		connect(signal: "notify::backend", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::display", callback: (owner: this, ...args: any) => void): number;

	}

	type CompositorInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ICompositor,
		"backend" |
		"display">;

	export interface CompositorInitOptions extends CompositorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Compositor} instead.
	 */
	type CompositorMixin = ICompositor & GObject.Object;

	interface Compositor extends CompositorMixin {}

	class Compositor {
		public constructor(options?: Partial<CompositorInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CursorTracker} instead.
	 */
	interface ICursorTracker {
		backend: Backend;
		get_hot(): [ x: number, y: number ];
		get_pointer(x: number, y: number, mods: Clutter.ModifierType): void;
		get_pointer_visible(): boolean;
		get_sprite(): Cogl.Texture;
		set_pointer_visible(visible: boolean): void;
		connect(signal: "cursor-changed", callback: (owner: this) => void): number;
		/**
		 * Notifies when the cursor has moved to a new location.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - x: The new X coordinate of the cursor 
		 *  - y: The new Y coordinate of the cursor 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "cursor-moved", callback: (owner: this, x: number, y: number) => void): number;
		connect(signal: "visibility-changed", callback: (owner: this) => void): number;

		connect(signal: "notify::backend", callback: (owner: this, ...args: any) => void): number;

	}

	type CursorTrackerInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ICursorTracker,
		"backend">;

	export interface CursorTrackerInitOptions extends CursorTrackerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CursorTracker} instead.
	 */
	type CursorTrackerMixin = ICursorTracker & GObject.Object;

	interface CursorTracker extends CursorTrackerMixin {}

	class CursorTracker {
		public constructor(options?: Partial<CursorTrackerInitOptions>);
		/**
		 * Retrieves the cursor tracker object for #display.
		 * @param display the {@link Display}
		 * @returns 
		 */
		public static get_for_display(display: Display): CursorTracker;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Display} instead.
	 */
	interface IDisplay {
		readonly focus_window: Window;
		/**
		 * Save the specified serial and ignore crossing events with that
		 * serial for the purpose of focus-follows-mouse. This can be used
		 * for certain changes to the window hierarchy that we don't want
		 * to change the focus window, even if they cause the pointer to
		 * end up in a new window.
		 * @param serial the serial to ignore
		 */
		add_ignored_crossing_serial(serial: number): void;
		/**
		 * Add a keybinding at runtime. The key #name in #schema needs to be of
		 * type %G_VARIANT_TYPE_STRING_ARRAY, with each string describing a
		 * keybinding in the form of "&lt;Control&gt;a" or "&lt;Shift&gt;&lt;Alt&gt;F1". The parser
		 * is fairly liberal and allows lower or upper case, and also abbreviations
		 * such as "&lt;Ctl&gt;" and "&lt;Ctrl&gt;". If the key is set to the empty list or a
		 * list with a single element of either "" or "disabled", the keybinding is
		 * disabled.
		 * 
		 * Use {@link Meta.Display.remove_keybinding} to remove the binding.
		 * @param name the binding's name
		 * @param settings the #GSettings object where #name is stored
		 * @param flags flags to specify binding details
		 * @param handler function to run when the keybinding is invoked
		 * @param free_data function to free #user_data
		 * @returns the corresponding keybinding action if the keybinding was
		 *          added successfully, otherwise %META_KEYBINDING_ACTION_NONE
		 */
		add_keybinding(name: string, settings: Gio.Settings, flags: KeyBindingFlags, handler: KeyHandlerFunc, free_data: GLib.DestroyNotify): number;
		begin_grab_op(window: Window, op: GrabOp, pointer_already_grabbed: boolean, frame_action: boolean, button: number, modmask: number, timestamp: number, root_x: number, root_y: number): boolean;
		/**
		 * Sets the mouse-mode flag to %FALSE, which means that motion events are
		 * no longer ignored in mouse or sloppy focus.
		 * This is an internal function. It should be used only for reimplementing
		 * keybindings, and only in a manner compatible with core code.
		 */
		clear_mouse_mode(): void;
		close(timestamp: number): void;
		end_grab_op(timestamp: number): void;
		focus_default_window(timestamp: number): void;
		freeze_keyboard(timestamp: number): void;
		get_compositor(): Compositor;
		/**
		 * Gets the index of the monitor that currently has the mouse pointer.
		 * @returns a monitor index
		 */
		get_current_monitor(): number;
		get_current_time(): number;
		get_current_time_roundtrip(): number;
		/**
		 * Get our best guess as to the "currently" focused window (that is,
		 * the window that we expect will be focused at the point when the X
		 * server processes our next request).
		 * @returns The current focus window
		 */
		get_focus_window(): Window;
		/**
		 * Gets the current grab operation, if any.
		 * @returns the current grab operation, or %META_GRAB_OP_NONE if
		 * Mutter doesn't currently have a grab. %META_GRAB_OP_COMPOSITOR will
		 * be returned if a compositor-plugin modal operation is in effect
		 * (See {@link Mutter.begin_modal_for_plugin})
		 */
		get_grab_op(): GrabOp;
		/**
		 * Get the keybinding action bound to #keycode. Builtin keybindings
		 * have a fixed associated {@link KeyBindingAction}, for bindings added
		 * dynamically the function will return the keybinding action
		 * {@link Meta.Display.add_keybinding} returns on registration.
		 * @param keycode Raw keycode
		 * @param mask Event mask
		 * @returns The action that should be taken for the given key, or
		 * %META_KEYBINDING_ACTION_NONE.
		 */
		get_keybinding_action(keycode: number, mask: number): number;
		get_last_user_time(): number;
		/**
		 * Stores the location and size of the indicated #monitor in #geometry.
		 * @param monitor the monitor number
		 * @returns location to store the monitor geometry
		 */
		get_monitor_geometry(monitor: number): Rectangle;
		/**
		 * Determines whether there is a fullscreen window obscuring the specified
		 * monitor. If there is a fullscreen window, the desktop environment will
		 * typically hide any controls that might obscure the fullscreen window.
		 * 
		 * You can get notification when this changes by connecting to
		 * MetaDisplay::in-fullscreen-changed.
		 * @param monitor the monitor number
		 * @returns %TRUE if there is a fullscreen window covering the specified monitor.
		 */
		get_monitor_in_fullscreen(monitor: number): boolean;
		get_monitor_index_for_rect(rect: Rectangle): number;
		get_monitor_neighbor_index(which_monitor: number, dir: DisplayDirection): number;
		/**
		 * Gets the monitor scaling value for the given #monitor.
		 * @param monitor the monitor number
		 * @returns the monitor scaling value
		 */
		get_monitor_scale(monitor: number): number;
		/**
		 * Gets the number of monitors that are joined together to form #display.
		 * @returns the number of monitors
		 */
		get_n_monitors(): number;
		get_pad_action_label(pad: Clutter.InputDevice, action_type: PadActionType, action_number: number): string;
		/**
		 * Gets the index of the primary monitor on this #display.
		 * @returns a monitor index
		 */
		get_primary_monitor(): number;
		get_selection(): Selection;
		/**
		 * Retrieve the size of the display.
		 * @returns The width of the screen
		 * 
		 * The height of the screen
		 */
		get_size(): [ width: number, height: number ];
		get_sound_player(): SoundPlayer;
		get_startup_notification(): StartupNotification;
		/**
		 * Determine the active window that should be displayed for Alt-TAB.
		 * @param type type of tab list
		 * @param workspace origin workspace
		 * @returns Current window
		 */
		get_tab_current(type: TabList, workspace: Workspace): Window;
		/**
		 * Determine the list of windows that should be displayed for Alt-TAB
		 * functionality.  The windows are returned in most recently used order.
		 * If #workspace is not %NULL, the list only contains windows that are on
		 * #workspace or have the demands-attention hint set; otherwise it contains
		 * all windows.
		 * @param type type of tab list
		 * @param workspace origin workspace
		 * @returns List of windows
		 */
		get_tab_list(type: TabList, workspace: Workspace | null): Window[];
		/**
		 * Determine the next window that should be displayed for Alt-TAB
		 * functionality.
		 * @param type type of tab list
		 * @param workspace origin workspace
		 * @param window starting window
		 * @param backward If %TRUE, look for the previous window.
		 * @returns Next window
		 */
		get_tab_next(type: TabList, workspace: Workspace, window: Window | null, backward: boolean): Window;
		get_workspace_manager(): WorkspaceManager;
		get_x11_display(): X11Display;
		grab_accelerator(accelerator: string, flags: KeyBindingFlags): number;
		/**
		 * Tells whether the event sequence is the used for pointer emulation
		 * and single-touch interaction.
		 * @param sequence a #ClutterEventSequence
		 * @returns #TRUE if the sequence emulates pointer behavior
		 */
		is_pointer_emulating_sequence(sequence: Clutter.EventSequence | null): boolean;
		/**
		 * Remove keybinding #name; the function will fail if #name is not a known
		 * keybinding or has not been added with {@link Meta.Display.add_keybinding}.
		 * @param name name of the keybinding to remove
		 * @returns %TRUE if the binding has been removed successfully,
		 *          otherwise %FALSE
		 */
		remove_keybinding(name: string): boolean;
		request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void;
		set_cursor(cursor: Cursor): void;
		set_input_focus(window: Window, focus_frame: boolean, timestamp: number): void;
		/**
		 * Sorts a set of windows according to their current stacking order. If windows
		 * from multiple screens are present in the set of input windows, then all the
		 * windows on screen 0 are sorted below all the windows on screen 1, and so forth.
		 * Since the stacking order of override-redirect windows isn't controlled by
		 * Metacity, if override-redirect windows are in the input, the result may not
		 * correspond to the actual stacking order in the X server.
		 * 
		 * An example of using this would be to sort the list of transient dialogs for a
		 * window into their current stacking order.
		 * @param windows Set of windows
		 * @returns Input windows sorted by stacking order, from lowest to highest
		 */
		sort_windows_by_stacking(windows: Window[]): Window[];
		supports_extended_barriers(): boolean;
		unfreeze_keyboard(timestamp: number): void;
		ungrab_accelerator(action_id: number): boolean;
		ungrab_keyboard(timestamp: number): void;
		unset_input_focus(timestamp: number): void;
		/**
		 * Xserver time can wraparound, thus comparing two timestamps needs to take
		 * this into account. If no wraparound has occurred, this is equivalent to
		 *   time1 < time2
		 * Otherwise, we need to account for the fact that wraparound can occur
		 * and the fact that a timestamp of 0 must be special-cased since it
		 * means "older than anything else".
		 * 
		 * Note that this is NOT an equivalent for time1 <= time2; if that's what
		 * you need then you'll need to swap the order of the arguments and negate
		 * the result.
		 * @param time1 An event timestamp
		 * @param time2 An event timestamp
		 * @returns 
		 */
		xserver_time_is_before(time1: number, time2: number): boolean;
		connect(signal: "accelerator-activated", callback: (owner: this, object: number, p0: Clutter.InputDevice, p1: number) => void): number;
		connect(signal: "closing", callback: (owner: this) => void): number;
		connect(signal: "cursor-updated", callback: (owner: this) => void): number;
		connect(signal: "gl-video-memory-purged", callback: (owner: this) => void): number;
		connect(signal: "grab-op-begin", callback: (owner: this, object: Display, p0: Window, p1: GrabOp) => void): number;
		connect(signal: "grab-op-end", callback: (owner: this, object: Display, p0: Window, p1: GrabOp) => void): number;
		connect(signal: "in-fullscreen-changed", callback: (owner: this) => void): number;
		connect(signal: "init-xserver", callback: (owner: this, object: Gio.Task) => boolean): number;
		/**
		 * The ::modifiers-accelerator-activated signal will be emitted when
		 * a special modifiers-only keybinding is activated.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - returns %TRUE means that the keyboard device should remain
		 *    frozen and %FALSE for the default behavior of unfreezing the
		 *    keyboard. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "modifiers-accelerator-activated", callback: (owner: this) => boolean): number;
		connect(signal: "overlay-key", callback: (owner: this) => void): number;
		connect(signal: "pad-mode-switch", callback: (owner: this, object: Clutter.InputDevice, p0: number, p1: number) => void): number;
		connect(signal: "restacked", callback: (owner: this) => void): number;
		/**
		 * The ::restart signal is emitted to indicate that compositor
		 * should reexec the process. This is
		 * emitted when meta_restart() is called, either by Mutter
		 * internally or by the embedding compositor. See also
		 * ::show-restart-message.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - returns %FALSE to indicate that the compositor could not
		 *  be restarted. When the compositor is restarted, the signal
		 *  should not return. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "restart", callback: (owner: this) => boolean): number;
		connect(signal: "show-osd", callback: (owner: this, object: number, p0: string, p1: string) => void): number;
		/**
		 * Requests the pad button mapping OSD to be shown.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - pad: the pad device 
		 *  - settings: the pad device settings 
		 *  - layout_path: path to the layout image 
		 *  - edition_mode: Whether the OSD should be shown in edition mode 
		 *  - monitor_idx: Monitor to show the OSD on 
		 *  - returns The OSD actor 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "show-pad-osd", callback: (owner: this, pad: Clutter.InputDevice, settings: Gio.Settings, layout_path: string, edition_mode: boolean, monitor_idx: number) => Clutter.Actor | null): number;
		connect(signal: "show-resize-popup", callback: (owner: this, object: boolean, p0: Rectangle, p1: number, p2: number) => boolean): number;
		/**
		 * The ::show-restart-message signal will be emitted to indicate
		 * that the compositor should show a message during restart. This is
		 * emitted when meta_restart() is called, either by Mutter
		 * internally or by the embedding compositor.  The message should be
		 * immediately added to the Clutter stage in its final form -
		 * ::restart will be emitted to exit the application and leave the
		 * stage contents frozen as soon as the the stage is painted again.
		 * 
		 * On case of failure to restart, this signal will be emitted again
		 * with %NULL for #message.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - message: The message to display, or %NULL
		 *  to clear a previous restart message. 
		 *  - returns %TRUE means the message was added to the stage; %FALSE
		 *   indicates that the compositor did not show the message. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "show-restart-message", callback: (owner: this, message: string | null) => boolean): number;
		connect(signal: "showing-desktop-changed", callback: (owner: this) => void): number;
		connect(signal: "window-created", callback: (owner: this, object: Window) => void): number;
		connect(signal: "window-demands-attention", callback: (owner: this, object: Window) => void): number;
		connect(signal: "window-entered-monitor", callback: (owner: this, object: number, p0: Window) => void): number;
		connect(signal: "window-left-monitor", callback: (owner: this, object: number, p0: Window) => void): number;
		connect(signal: "window-marked-urgent", callback: (owner: this, object: Window) => void): number;
		connect(signal: "workareas-changed", callback: (owner: this) => void): number;
		connect(signal: "x11-display-closing", callback: (owner: this) => void): number;
		connect(signal: "x11-display-opened", callback: (owner: this) => void): number;
		connect(signal: "x11-display-setup", callback: (owner: this) => void): number;

		connect(signal: "notify::focus-window", callback: (owner: this, ...args: any) => void): number;

	}

	type DisplayInitOptionsMixin = GObject.ObjectInitOptions
	export interface DisplayInitOptions extends DisplayInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Display} instead.
	 */
	type DisplayMixin = IDisplay & GObject.Object;

	interface Display extends DisplayMixin {}

	class Display {
		public constructor(options?: Partial<DisplayInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Dnd} instead.
	 */
	interface IDnd {

		connect(signal: "dnd-enter", callback: (owner: this) => void): number;
		connect(signal: "dnd-leave", callback: (owner: this) => void): number;
		connect(signal: "dnd-position-change", callback: (owner: this, object: number, p0: number) => void): number;

	}

	type DndInitOptionsMixin = GObject.ObjectInitOptions
	export interface DndInitOptions extends DndInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Dnd} instead.
	 */
	type DndMixin = IDnd & GObject.Object;

	interface Dnd extends DndMixin {}

	class Dnd {
		public constructor(options?: Partial<DndInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IdleMonitor} instead.
	 */
	interface IIdleMonitor {
		/**
		 * The device to listen to idletime on.
		 */
		device: Clutter.InputDevice;
		add_idle_watch(interval_msec: number, callback: IdleMonitorWatchFunc | null, notify: GLib.DestroyNotify): number;
		add_user_active_watch(callback: IdleMonitorWatchFunc | null, notify: GLib.DestroyNotify): number;
		get_idletime(): number;
		/**
		 * Removes an idle time watcher, previously added by
		 * {@link Meta.IdleMonitor.add_idle_watch} or
		 * meta_idle_monitor_add_user_active_watch().
		 * @param id A watch ID
		 */
		remove_watch(id: number): void;
		connect(signal: "notify::device", callback: (owner: this, ...args: any) => void): number;

	}

	type IdleMonitorInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IIdleMonitor,
		"device">;

	export interface IdleMonitorInitOptions extends IdleMonitorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IdleMonitor} instead.
	 */
	type IdleMonitorMixin = IIdleMonitor & GObject.Object;

	interface IdleMonitor extends IdleMonitorMixin {}

	class IdleMonitor {
		public constructor(options?: Partial<IdleMonitorInitOptions>);
		public static get_core(): IdleMonitor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LaunchContext} instead.
	 */
	interface ILaunchContext {
		display: Display;
		timestamp: number;
		workspace: Workspace;
		set_timestamp(timestamp: number): void;
		set_workspace(workspace: Workspace): void;
		connect(signal: "notify::display", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::timestamp", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::workspace", callback: (owner: this, ...args: any) => void): number;

	}

	type LaunchContextInitOptionsMixin = Gio.AppLaunchContextInitOptions & 
	Pick<ILaunchContext,
		"display" |
		"timestamp" |
		"workspace">;

	export interface LaunchContextInitOptions extends LaunchContextInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LaunchContext} instead.
	 */
	type LaunchContextMixin = ILaunchContext & Gio.AppLaunchContext;

	interface LaunchContext extends LaunchContextMixin {}

	class LaunchContext {
		public constructor(options?: Partial<LaunchContextInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MonitorManager} instead.
	 */
	interface IMonitorManager {
		backend: Backend;
		readonly panel_orientation_managed: boolean;
		can_switch_config(): boolean;
		/**
		 * Returns whether the built-in display (i.e. a laptop panel) is turned on.
		 * @returns 
		 */
		get_is_builtin_display_on(): boolean;
		get_monitor_for_connector(connector: string): number;
		get_panel_orientation_managed(): boolean;
		get_switch_config(): MonitorSwitchConfigType;
		switch_config(config_type: MonitorSwitchConfigType): void;
		connect(signal: "confirm-display-change", callback: (owner: this) => void): number;
		connect(signal: "monitors-changed", callback: (owner: this) => void): number;
		connect(signal: "monitors-changed-internal", callback: (owner: this) => void): number;
		connect(signal: "power-save-mode-changed", callback: (owner: this) => void): number;

		connect(signal: "notify::backend", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::panel-orientation-managed", callback: (owner: this, ...args: any) => void): number;

	}

	type MonitorManagerInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IMonitorManager,
		"backend">;

	export interface MonitorManagerInitOptions extends MonitorManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MonitorManager} instead.
	 */
	type MonitorManagerMixin = IMonitorManager & GObject.Object;

	interface MonitorManager extends MonitorManagerMixin {}

	class MonitorManager {
		public constructor(options?: Partial<MonitorManagerInitOptions>);
		/**
		 * Accessor for the singleton MetaMonitorManager.
		 * @returns The only {@link MonitorManager} there is.
		 */
		public static get(): MonitorManager;
		public static get_display_configuration_timeout(): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Plugin} instead.
	 */
	interface IPlugin {
		/**
		 * This function is used to grab the keyboard and mouse for the exclusive
		 * use of the plugin. Correct operation requires that both the keyboard
		 * and mouse are grabbed, or thing will break. (In particular, other
		 * passive X grabs in Meta can trigger but not be handled by the normal
		 * keybinding handling code.) However, the plugin can establish the keyboard
		 * and/or mouse grabs ahead of time and pass in the
		 * %META_MODAL_POINTER_ALREADY_GRABBED and/or %META_MODAL_KEYBOARD_ALREADY_GRABBED
		 * options. This facility is provided for two reasons: first to allow using
		 * this function to establish modality after a passive grab, and second to
		 * allow using obscure features of XGrabPointer() and XGrabKeyboard() without
		 * having to add them to this API.
		 * @param options flags that modify the behavior of the modal grab
		 * @param timestamp the timestamp used for establishing grabs
		 * @returns whether we successfully grabbed the keyboard and
		 *  mouse and made the plugin modal.
		 */
		begin_modal(options: ModalOptions, timestamp: number): boolean;
		complete_display_change(ok: boolean): void;
		destroy_completed(actor: WindowActor): void;
		/**
		 * Ends the modal operation begun with {@link Meta.Plugin.begin_modal}. This
		 * ungrabs both the mouse and keyboard even when
		 * %META_MODAL_POINTER_ALREADY_GRABBED or
		 * %META_MODAL_KEYBOARD_ALREADY_GRABBED were provided as options
		 * when beginnning the modal operation.
		 * @param timestamp the time used for releasing grabs
		 */
		end_modal(timestamp: number): void;
		/**
		 * Gets the {@link Display} corresponding to a plugin.
		 * @returns the {@link Display} for the plugin
		 */
		get_display(): Display;
		get_info(): PluginInfo;
		map_completed(actor: WindowActor): void;
		minimize_completed(actor: WindowActor): void;
		size_change_completed(actor: WindowActor): void;
		switch_workspace_completed(): void;
		unminimize_completed(actor: WindowActor): void;
	}

	type PluginInitOptionsMixin = GObject.ObjectInitOptions
	export interface PluginInitOptions extends PluginInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Plugin} instead.
	 */
	type PluginMixin = IPlugin & GObject.Object;

	interface Plugin extends PluginMixin {}

	class Plugin {
		public constructor(options?: Partial<PluginInitOptions>);
		public static manager_set_plugin_type(gtype: GObject.Type): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RemoteAccessController} instead.
	 */
	interface IRemoteAccessController {
		/**
		 * Inhibits remote access sessions from being created and running. Any active
		 * remote access session will be terminated.
		 */
		inhibit_remote_access(): void;
		/**
		 * Uninhibits remote access sessions from being created and running. If this was
		 * the last inhibitation that was inhibited, new remote access sessions can now
		 * be created.
		 */
		uninhibit_remote_access(): void;
		connect(signal: "new-handle", callback: (owner: this, object: RemoteAccessHandle) => void): number;

	}

	type RemoteAccessControllerInitOptionsMixin = GObject.ObjectInitOptions
	export interface RemoteAccessControllerInitOptions extends RemoteAccessControllerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RemoteAccessController} instead.
	 */
	type RemoteAccessControllerMixin = IRemoteAccessController & GObject.Object;

	interface RemoteAccessController extends RemoteAccessControllerMixin {}

	class RemoteAccessController {
		public constructor(options?: Partial<RemoteAccessControllerInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RemoteAccessHandle} instead.
	 */
	interface IRemoteAccessHandle {
		is_recording: boolean;
		get_disable_animations(): boolean;
		/**
		 * Stop the associated remote access session.
		 */
		stop(): void;
		connect(signal: "stopped", callback: (owner: this) => void): number;

		connect(signal: "notify::is-recording", callback: (owner: this, ...args: any) => void): number;

	}

	type RemoteAccessHandleInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IRemoteAccessHandle,
		"is_recording">;

	export interface RemoteAccessHandleInitOptions extends RemoteAccessHandleInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RemoteAccessHandle} instead.
	 */
	type RemoteAccessHandleMixin = IRemoteAccessHandle & GObject.Object;

	interface RemoteAccessHandle extends RemoteAccessHandleMixin {}

	class RemoteAccessHandle {
		public constructor(options?: Partial<RemoteAccessHandleInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Selection} instead.
	 */
	interface ISelection {
		/**
		 * Returns the list of supported mimetypes for the given selection type.
		 * @param selection_type Selection to query
		 * @returns The supported mimetypes
		 */
		get_mimetypes(selection_type: SelectionType): string[];
		/**
		 * Sets #owner as the owner of the selection given by #selection_type,
		 * unsets any previous owner there was.
		 * @param selection_type Selection type
		 * @param owner New selection owner
		 */
		set_owner(selection_type: SelectionType, owner: SelectionSource): void;
		/**
		 * Requests a transfer of #mimetype on the selection given by
		 * #selection_type.
		 * @param selection_type Selection type
		 * @param mimetype Mimetype to transfer
		 * @param size Maximum size to transfer, -1 for unlimited
		 * @param output Output stream to write contents to
		 * @param cancellable Cancellable
		 * @param callback User callback
		 */
		transfer_async(selection_type: SelectionType, mimetype: string, size: number, output: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes the transfer of a queried mimetype.
		 * @param result The async result
		 * @returns #TRUE if the transfer was successful.
		 */
		transfer_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Unsets #owner as the owner the selection given by #selection_type. If
		 * #owner does not own the selection, nothing is done.
		 * @param selection_type Selection type
		 * @param owner Owner to unset
		 */
		unset_owner(selection_type: SelectionType, owner: SelectionSource): void;
		connect(signal: "owner-changed", callback: (owner: this, object: number, p0: SelectionSource) => void): number;

	}

	type SelectionInitOptionsMixin = GObject.ObjectInitOptions
	export interface SelectionInitOptions extends SelectionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Selection} instead.
	 */
	type SelectionMixin = ISelection & GObject.Object;

	interface Selection extends SelectionMixin {}

	class Selection {
		public constructor(options?: Partial<SelectionInitOptions>);
		public static new(display: Display): Selection;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SelectionSource} instead.
	 */
	interface ISelectionSource {
		/**
		 * Returns the list of supported mimetypes.
		 * @returns The supported mimetypes
		 */
		get_mimetypes(): string[];
		/**
		 * Returns #TRUE if the source is active on a selection.
		 * @returns #TRUE if the source owns a selection.
		 */
		is_active(): boolean;
		read_async(mimetype: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes a read from the selection source.
		 * @param result The async result
		 * @returns The resulting #GInputStream
		 */
		read_finish(result: Gio.AsyncResult): Gio.InputStream;
		connect(signal: "activated", callback: (owner: this) => void): number;
		connect(signal: "deactivated", callback: (owner: this) => void): number;

	}

	type SelectionSourceInitOptionsMixin = GObject.ObjectInitOptions
	export interface SelectionSourceInitOptions extends SelectionSourceInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SelectionSource} instead.
	 */
	type SelectionSourceMixin = ISelectionSource & GObject.Object;

	interface SelectionSource extends SelectionSourceMixin {}

	class SelectionSource {
		public constructor(options?: Partial<SelectionSourceInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SelectionSourceMemory} instead.
	 */
	interface ISelectionSourceMemory {

	}

	type SelectionSourceMemoryInitOptionsMixin = SelectionSourceInitOptions
	export interface SelectionSourceMemoryInitOptions extends SelectionSourceMemoryInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SelectionSourceMemory} instead.
	 */
	type SelectionSourceMemoryMixin = ISelectionSourceMemory & SelectionSource;

	interface SelectionSourceMemory extends SelectionSourceMemoryMixin {}

	class SelectionSourceMemory {
		public constructor(options?: Partial<SelectionSourceMemoryInitOptions>);
		public static new(mimetype: string, content: GLib.Bytes): SelectionSource;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShadowFactory} instead.
	 */
	interface IShadowFactory {
		/**
		 * Gets the shadow parameters for a particular class of shadows
		 * for either the focused or unfocused state. If the class name
		 * does not name an existing class, default values will be returned
		 * without printing an error.
		 * @param class_name name of the class of shadow to get the params for
		 * @param focused whether the shadow is for a focused window
		 * @returns location to store the current parameter values
		 */
		get_params(class_name: string, focused: boolean): ShadowParams;
		/**
		 * Gets the appropriate shadow object for drawing shadows for the
		 * specified window shape. The region that we are shadowing is specified
		 * as a combination of a size-invariant extracted shape and the size.
		 * In some cases, the same shadow object can be shared between sizes;
		 * in other cases a different shadow object is used for each size.
		 * @param shape the size-invariant shape of the window's region
		 * @param width the actual width of the window's region
		 * @param height the actual height of the window's region
		 * @param class_name name of the class of window shadows
		 * @param focused whether the shadow is for a focused window
		 * @returns a newly referenced {@link Shadow}; unref with
		 *  {@link Meta.Shadow.unref}
		 */
		get_shadow(shape: WindowShape, width: number, height: number, class_name: string, focused: boolean): Shadow;
		/**
		 * Updates the shadow parameters for a particular class of shadows
		 * for either the focused or unfocused state. If the class name
		 * does not name an existing class, a new class will be created
		 * (the other focus state for that class will have default values
		 * assigned to it.)
		 * @param class_name name of the class of shadow to set the params for.
		 *  the default shadow classes are the names of the different
		 *  theme frame types (normal, dialog, modal_dialog, utility,
		 *  border, menu, attached) and in addition, popup-menu
		 *  and dropdown-menu.
		 * @param focused whether the shadow is for a focused window
		 * @param params new parameter values
		 */
		set_params(class_name: string, focused: boolean, params: ShadowParams): void;
		connect(signal: "changed", callback: (owner: this) => void): number;

	}

	type ShadowFactoryInitOptionsMixin = GObject.ObjectInitOptions
	export interface ShadowFactoryInitOptions extends ShadowFactoryInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShadowFactory} instead.
	 */
	type ShadowFactoryMixin = IShadowFactory & GObject.Object;

	/**
	 * {@link ShadowFactory} is used to create window shadows. It caches shadows internally
	 * so that multiple shadows created for the same shape with the same radius will
	 * share the same MetaShadow.
	 */
	interface ShadowFactory extends ShadowFactoryMixin {}

	class ShadowFactory {
		public constructor(options?: Partial<ShadowFactoryInitOptions>);
		public static new(): ShadowFactory;
		public static get_default(): ShadowFactory;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShapedTexture} instead.
	 */
	interface IShapedTexture {
		/**
		 * Flattens the two layers of the shaped texture into one ARGB32
		 * image by alpha blending the two images, and returns the flattened
		 * image.
		 * @param clip A clipping rectangle, to help prevent extra processing.
		 * In the case that the clipping rectangle is partially or fully
		 * outside the bounds of the texture, the rectangle will be clipped.
		 * @returns a new cairo surface to be freed with
		 * {@link Cairo.Surface.destroy}.
		 */
		get_image(clip: cairo.RectangleInt | null): cairo.Surface | null;
		get_texture(): Cogl.Texture;
		set_create_mipmaps(create_mipmaps: boolean): void;
		set_mask_texture(mask_texture: Cogl.Texture): void;
		connect(signal: "size-changed", callback: (owner: this) => void): number;

	}

	type ShapedTextureInitOptionsMixin = GObject.ObjectInitOptions & Clutter.ContentInitOptions
	export interface ShapedTextureInitOptions extends ShapedTextureInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShapedTexture} instead.
	 */
	type ShapedTextureMixin = IShapedTexture & GObject.Object & Clutter.Content;

	interface ShapedTexture extends ShapedTextureMixin {}

	class ShapedTexture {
		public constructor(options?: Partial<ShapedTextureInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SoundPlayer} instead.
	 */
	interface ISoundPlayer {
		/**
		 * Plays a sound from a file.
		 * @param file file to play
		 * @param description description of the played sound
		 * @param cancellable cancellable for the request
		 */
		play_from_file(file: Gio.File, description: string, cancellable: Gio.Cancellable | null): void;
		/**
		 * Plays a sound from the sound theme.
		 * @param name sound theme name of the event
		 * @param description description of the event
		 * @param cancellable cancellable for the request
		 */
		play_from_theme(name: string, description: string, cancellable: Gio.Cancellable | null): void;
	}

	type SoundPlayerInitOptionsMixin = GObject.ObjectInitOptions
	export interface SoundPlayerInitOptions extends SoundPlayerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SoundPlayer} instead.
	 */
	type SoundPlayerMixin = ISoundPlayer & GObject.Object;

	interface SoundPlayer extends SoundPlayerMixin {}

	class SoundPlayer {
		public constructor(options?: Partial<SoundPlayerInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stage} instead.
	 */
	interface IStage {

		connect(signal: "actors-painted", callback: (owner: this) => void): number;

	}

	type StageInitOptionsMixin = Clutter.StageInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions
	export interface StageInitOptions extends StageInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stage} instead.
	 */
	type StageMixin = IStage & Clutter.Stage & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface Stage extends StageMixin {}

	class Stage {
		public constructor(options?: Partial<StageInitOptions>);
		public static is_focused(display: Display): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StartupNotification} instead.
	 */
	interface IStartupNotification {
		display: Display;
		/**
		 * Creates an app launch context.
		 * @returns a launch context.
		 */
		create_launcher(): LaunchContext;
		get_sequences(): any[];
		connect(signal: "changed", callback: (owner: this, object: any | null) => void): number;

		connect(signal: "notify::display", callback: (owner: this, ...args: any) => void): number;

	}

	type StartupNotificationInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IStartupNotification,
		"display">;

	export interface StartupNotificationInitOptions extends StartupNotificationInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StartupNotification} instead.
	 */
	type StartupNotificationMixin = IStartupNotification & GObject.Object;

	interface StartupNotification extends StartupNotificationMixin {}

	class StartupNotification {
		public constructor(options?: Partial<StartupNotificationInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StartupSequence} instead.
	 */
	interface IStartupSequence {
		application_id: string;
		icon_name: string;
		id: string;
		name: string;
		timestamp: number;
		wmclass: string;
		workspace: number;
		complete(): void;
		get_application_id(): string;
		get_completed(): boolean;
		get_icon_name(): string;
		get_id(): string;
		get_name(): string;
		get_timestamp(): number;
		get_wmclass(): string;
		get_workspace(): number;
		connect(signal: "complete", callback: (owner: this) => void): number;

		connect(signal: "notify::application-id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::icon-name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::timestamp", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::wmclass", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::workspace", callback: (owner: this, ...args: any) => void): number;

	}

	type StartupSequenceInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IStartupSequence,
		"application_id" |
		"icon_name" |
		"id" |
		"name" |
		"timestamp" |
		"wmclass" |
		"workspace">;

	export interface StartupSequenceInitOptions extends StartupSequenceInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StartupSequence} instead.
	 */
	type StartupSequenceMixin = IStartupSequence & GObject.Object;

	interface StartupSequence extends StartupSequenceMixin {}

	class StartupSequence {
		public constructor(options?: Partial<StartupSequenceInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WaylandClient} instead.
	 */
	interface IWaylandClient {
		hide_from_window_list(window: Window): void;
		owns_window(window: Window): boolean;
		/**
		 * Shows again this window in window lists, like taskbars, pagers...
		 * @param window a MetaWindow
		 */
		show_in_window_list(window: Window): void;
		/**
		 * Creates a #GSubprocess given a provided varargs list of arguments. It also
		 * sets up a new Wayland socket and sets the environment variable WAYLAND_SOCKET
		 * to make the new process to use it.
		 * @param display the current MetaDisplay
		 * @param error Error
		 * @param argv0 Command line arguments
		 * @returns A new #GSubprocess, or %NULL on error (and #error
		 * will be set)
		 */
		spawn(display: Display, error: GLib.Error | null, argv0: string): Gio.Subprocess;
		/**
		 * Creates a #GSubprocess given a provided array of arguments, launching a new
		 * process with the binary specified in the first element of argv, and with the
		 * rest of elements as parameters. It also sets up a new Wayland socket and sets
		 * the environment variable WAYLAND_SOCKET to make the new process to use it.
		 * @param display the current MetaDisplay
		 * @param argv Command line arguments
		 * @returns A new #GSubprocess, or %NULL on error (and #error
		 * will be set)
		 */
		spawnv(display: Display, argv: string[]): Gio.Subprocess;
	}

	type WaylandClientInitOptionsMixin = GObject.ObjectInitOptions
	export interface WaylandClientInitOptions extends WaylandClientInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WaylandClient} instead.
	 */
	type WaylandClientMixin = IWaylandClient & GObject.Object;

	interface WaylandClient extends WaylandClientMixin {}

	class WaylandClient {
		public constructor(options?: Partial<WaylandClientInitOptions>);
		/**
		 * Creates a new {@link WaylandClient}. The GSubprocesslauncher passed is
		 * stored internally and will be used to launch the subprocess.
		 * @param launcher a GSubprocessLauncher to use to launch the subprocess
		 * @returns A {@link WaylandClient} or %NULL if %error is set. Free with
		 * {@link GObject.unref}.
		 */
		public static new(launcher: Gio.SubprocessLauncher): WaylandClient;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Window} instead.
	 */
	interface IWindow {
		readonly above: boolean;
		// readonly appears_focused: boolean;
		readonly decorated: boolean;
		readonly demands_attention: boolean;
		readonly fullscreen: boolean;
		readonly gtk_app_menu_object_path: string;
		readonly gtk_application_id: string;
		readonly gtk_application_object_path: string;
		readonly gtk_menubar_object_path: string;
		readonly gtk_unique_bus_name: string;
		readonly gtk_window_object_path: string;
		readonly icon: any;
		readonly maximized_horizontally: boolean;
		readonly maximized_vertically: boolean;
		readonly mini_icon: any;
		readonly minimized: boolean;
		readonly mutter_hints: string;
		readonly on_all_workspaces: boolean;
		readonly resizeable: boolean;
		readonly skip_taskbar: boolean;
		readonly title: string;
		readonly urgent: boolean;
		readonly user_time: number;
		readonly window_type: WindowType;
		readonly wm_class: string;
		activate(current_time: number): void;
		activate_with_workspace(current_time: number, workspace: Workspace): void;
		allows_move(): boolean;
		allows_resize(): boolean;
		/**
		 * Determines if the window should be drawn with a focused appearance. This is
		 * true for focused windows but also true for windows with a focused modal
		 * dialog attached.
		 * @returns %TRUE if the window should be drawn with a focused frame
		 */
		appears_focused(): boolean;
		begin_grab_op(op: GrabOp, frame_action: boolean, timestamp: number): void;
		can_close(): boolean;
		can_maximize(): boolean;
		can_minimize(): boolean;
		can_shade(): boolean;
		change_workspace(workspace: Workspace): void;
		change_workspace_by_index(space_index: number, append: boolean): void;
		check_alive(timestamp: number): void;
		/**
		 * Converts a desired bounds of the client window into the corresponding bounds
		 * of the window frame (excluding invisible borders and client side shadows.)
		 * @param client_rect client rectangle in root coordinates
		 * @returns location to store the computed corresponding frame bounds.
		 */
		client_rect_to_frame_rect(client_rect: Rectangle): Rectangle;
		compute_group(): void;
		delete(timestamp: number): void;
		/**
		 * Follow the chain of parents of #window, skipping transient windows,
		 * and return the "root" window which has no non-transient parent.
		 * @returns The root ancestor window
		 */
		find_root_ancestor(): Window;
		focus(timestamp: number): void;
		/**
		 * If #window is transient, call #func with the window for which it's transient,
		 * repeatedly until either we find a non-transient window, or #func returns %FALSE.
		 * @param func Called for each window which is a transient parent of #window
		 */
		foreach_ancestor(func: WindowForeachFunc): void;
		/**
		 * Call #func for every window which is either transient for #window, or is
		 * a transient of a window which is in turn transient for #window.
		 * The order of window enumeration is not defined.
		 * 
		 * Iteration will stop if #func at any point returns %FALSE.
		 * @param func Called for each window which is a transient of #window (transitively)
		 */
		foreach_transient(func: WindowForeachFunc): void;
		/**
		 * Converts a desired frame bounds for a window into the bounds of the client
		 * window.
		 * @param frame_rect desired frame bounds for the window
		 * @returns location to store the computed corresponding client rectangle.
		 */
		frame_rect_to_client_rect(frame_rect: Rectangle): Rectangle;
		/**
		 * Gets the rectangle that the pixmap or buffer of #window occupies.
		 * 
		 * For X11 windows, this is the server-side geometry of the toplevel
		 * window.
		 * 
		 * For Wayland windows, this is the bounding rectangle of the attached
		 * buffer.
		 * @returns pointer to an allocated {@link Rectangle}
		 */
		get_buffer_rect(): Rectangle;
		/**
		 * Returns name of the client machine from which this windows was created,
		 * if known (obtained from the WM_CLIENT_MACHINE property).
		 * @returns the machine name, or NULL; the string is
		 * owned by the window manager and should not be freed or modified by the
		 * caller.
		 */
		get_client_machine(): string;
		/**
		 * Returns the {@link WindowClientType} of the window.
		 * @returns The root ancestor window
		 */
		get_client_type(): WindowClientType;
		/**
		 * Gets the compositor's wrapper object for #window.
		 * @returns the wrapper object.
		 */
		get_compositor_private(): WindowActor;
		get_description(): string;
		get_display(): Display;
		get_frame(): Frame;
		/**
		 * Gets a region representing the outer bounds of the window's frame.
		 * @returns a #cairo_region_t
		 *  holding the outer bounds of the window, or %NULL if the window
		 *  doesn't have a frame.
		 */
		get_frame_bounds(): cairo.Region | null;
		/**
		 * Gets the rectangle that bounds #window that is what the user thinks of
		 * as the edge of the window. This doesn't include any extra reactive
		 * area that we or the client adds to the window, or any area that the
		 * client adds to draw a client-side shadow.
		 * @returns pointer to an allocated {@link Rectangle}
		 */
		get_frame_rect(): Rectangle;
		/**
		 * Gets the type of window decorations that should be used for this window.
		 * @returns the frame type
		 */
		get_frame_type(): FrameType;
		get_group(): Group;
		get_gtk_app_menu_object_path(): string;
		get_gtk_application_id(): string;
		get_gtk_application_object_path(): string;
		get_gtk_menubar_object_path(): string;
		get_gtk_theme_variant(): string;
		get_gtk_unique_bus_name(): string;
		get_gtk_window_object_path(): string;
		/**
		 * Gets the location of the icon corresponding to the window. The location
		 * will be provided set by the task bar or other user interface element
		 * displaying the icon, and is relative to the root window.
		 * @returns %TRUE if the icon geometry was successfully retrieved.
		 * 
		 * rectangle into which to store the returned geometry.
		 */
		get_icon_geometry(): [ boolean, Rectangle ];
		/**
		 * Returns the window id associated with window.
		 * @returns The window id
		 */
		get_id(): number;
		get_layer(): StackLayer;
		/**
		 * Gets the current maximization state of the window, as combination
		 * of the %META_MAXIMIZE_HORIZONTAL and %META_MAXIMIZE_VERTICAL flags;
		 * @returns current maximization state
		 */
		get_maximized(): MaximizeFlags;
		/**
		 * Gets index of the monitor that this window is on.
		 * @returns The index of the monitor in the screens monitor list, or -1
		 * if the window has been recently unmanaged and does not have a monitor.
		 */
		get_monitor(): number;
		/**
		 * Gets the current value of the _MUTTER_HINTS property.
		 * 
		 * The purpose of the hints is to allow fine-tuning of the Window Manager and
		 * Compositor behaviour on per-window basis, and is intended primarily for
		 * hints that are plugin-specific.
		 * 
		 * The property is a list of colon-separated key=value pairs. The key names for
		 * any plugin-specific hints must be suitably namespaced to allow for shared
		 * use; 'mutter-' key prefix is reserved for internal use, and must not be used
		 * by plugins.
		 * @returns the _MUTTER_HINTS string, or %NULL if no hints
		 * are set.
		 */
		get_mutter_hints(): string;
		/**
		 * Returns the pid of the process that created this window, if available
		 * to the windowing system.
		 * 
		 * Note that the value returned by this is vulnerable to spoofing attacks
		 * by the client.
		 * @returns the pid, or 0 if not known.
		 */
		get_pid(): number;
		get_role(): string;
		/**
		 * Gets an unique id for a sandboxed app (currently flatpaks and snaps are
		 * supported).
		 * @returns the sandboxed application ID or %NULL
		 */
		get_sandboxed_app_id(): string;
		/**
		 * The stable sequence number is a monotonicially increasing
		 * unique integer assigned to each {@link Window} upon creation.
		 * 
		 * This number can be useful for sorting windows in a stable
		 * fashion.
		 * @returns Internal sequence number for this window
		 */
		get_stable_sequence(): number;
		get_startup_id(): string;
		/**
		 * Returns the matching tiled window on the same monitor as #window. This is
		 * the topmost tiled window in a complementary tile mode that is:
		 * 
		 *  - on the same monitor;
		 *  - on the same workspace;
		 *  - spanning the remaining monitor width;
		 *  - there is no 3rd window stacked between both tiled windows that's
		 *    partially visible in the common edge.
		 * @returns the matching tiled window or
		 * %NULL if it doesn't exist.
		 */
		get_tile_match(): Window | null;
		get_title(): string;
		/**
		 * Returns the {@link Window} for the window that is pointed to by the
		 * WM_TRANSIENT_FOR hint on this window (see XGetTransientForHint()
		 * or XSetTransientForHint()). Metacity keeps transient windows above their
		 * parents. A typical usage of this hint is for a dialog that wants to stay
		 * above its associated window.
		 * @returns the window this window is transient for, or
		 * %NULL if the WM_TRANSIENT_FOR hint is unset or does not point to a toplevel
		 * window that Metacity knows about.
		 */
		get_transient_for(): Window;
		/**
		 * The user time represents a timestamp for the last time the user
		 * interacted with this window.  Note this property is only available
		 * for non-override-redirect windows.
		 * 
		 * The property is set by Mutter initially upon window creation,
		 * and updated thereafter on input events (key and button presses) seen by Mutter,
		 * client updates to the _NET_WM_USER_TIME property (if later than the current time)
		 * and when focusing the window.
		 * @returns The last time the user interacted with this window.
		 */
		get_user_time(): number;
		get_window_type(): WindowType;
		/**
		 * Return the current value of the name part of WM_CLASS X property.
		 * @returns 
		 */
		get_wm_class(): string;
		/**
		 * Return the current value of the instance part of WM_CLASS X property.
		 * @returns 
		 */
		get_wm_class_instance(): string;
		/**
		 * Get the work area for all monitors for #window.
		 * @returns a location to store the work area
		 */
		get_work_area_all_monitors(): Rectangle;
		/**
		 * Get the work area for the monitor #window is currently on.
		 * @returns a location to store the work area
		 */
		get_work_area_current_monitor(): Rectangle;
		/**
		 * Get the work area for #window, given the monitor index
		 * #which_monitor.
		 * @param which_monitor a moniotr to get the work area for
		 * @returns a location to store the work area
		 */
		get_work_area_for_monitor(which_monitor: number): Rectangle;
		/**
		 * Gets the {@link Workspace} that the window is currently displayed on.
		 * If the window is on all workspaces, returns the currently active
		 * workspace.
		 * @returns the {@link Workspace} for the window
		 */
		get_workspace(): Workspace;
		get_xwindow(): xlib.Window;
		group_leader_changed(): void;
		has_focus(): boolean;
		is_above(): boolean;
		is_always_on_all_workspaces(): boolean;
		/**
		 * The function determines whether #window is an ancestor of #transient; it does
		 * so by traversing the #transient's ancestors until it either locates #window
		 * or reaches an ancestor that is not transient.
		 * @param _transient a {@link Window}
		 * @returns %TRUE if window is an ancestor of transient.
		 */
		is_ancestor_of_transient(_transient: Window): boolean;
		/**
		 * Tests if #window is should be attached to its parent window.
		 * (If the "attach_modal_dialogs" option is not enabled, this will
		 * always return %FALSE.)
		 * @returns whether #window should be attached to its parent
		 */
		is_attached_dialog(): boolean;
		/**
		 * Check if if the window has decorations drawn by the client.
		 * (window->decorated refers only to whether we should add decorations)
		 * @returns 
		 */
		is_client_decorated(): boolean;
		is_fullscreen(): boolean;
		is_hidden(): boolean;
		is_monitor_sized(): boolean;
		is_on_all_workspaces(): boolean;
		is_on_primary_monitor(): boolean;
		is_override_redirect(): boolean;
		is_remote(): boolean;
		is_screen_sized(): boolean;
		is_shaded(): boolean;
		/**
		 * Gets whether this window should be ignored by task lists.
		 * @returns %TRUE if the skip bar hint is set.
		 */
		is_skip_taskbar(): boolean;
		kill(): void;
		located_on_workspace(workspace: Workspace): boolean;
		lower(): void;
		make_above(): void;
		make_fullscreen(): void;
		maximize(directions: MaximizeFlags): void;
		minimize(): void;
		/**
		 * Moves the window to the desired location on window's assigned
		 * workspace, using the northwest edge of the frame as the reference,
		 * instead of the actual window's origin, but only if a frame is present.
		 * Otherwise, acts identically to {@link Meta.Window.move}.
		 * @param user_op bool to indicate whether or not this is a user operation
		 * @param root_x_nw desired x pos
		 * @param root_y_nw desired y pos
		 */
		move_frame(user_op: boolean, root_x_nw: number, root_y_nw: number): void;
		/**
		 * Resizes the window so that its outer bounds (including frame)
		 * fit within the given rect
		 * @param user_op bool to indicate whether or not this is a user operation
		 * @param root_x_nw new x
		 * @param root_y_nw new y
		 * @param w desired width
		 * @param h desired height
		 */
		move_resize_frame(user_op: boolean, root_x_nw: number, root_y_nw: number, w: number, h: number): void;
		/**
		 * Moves the window to the monitor with index #monitor, keeping
		 * the relative position of the window's top left corner.
		 * @param monitor desired monitor index
		 */
		move_to_monitor(monitor: number): void;
		raise(): void;
		set_compositor_private(priv: GObject.Object): void;
		set_demands_attention(): void;
		/**
		 * Sets or unsets the location of the icon corresponding to the window. If
		 * set, the location should correspond to a dock, task bar or other user
		 * interface element displaying the icon, and is relative to the root window.
		 * @param rect rectangle with the desired geometry or %NULL.
		 */
		set_icon_geometry(rect: Rectangle | null): void;
		shade(timestamp: number): void;
		shove_titlebar_onscreen(): void;
		showing_on_its_workspace(): boolean;
		shutdown_group(): void;
		stick(): void;
		titlebar_is_onscreen(): boolean;
		unmake_above(): void;
		unmake_fullscreen(): void;
		unmaximize(directions: MaximizeFlags): void;
		unminimize(): void;
		unset_demands_attention(): void;
		unshade(timestamp: number): void;
		unstick(): void;
		connect(signal: "focus", callback: (owner: this) => void): number;
		/**
		 * This is emitted when the position of a window might
		 * have changed. Specifically, this is emitted when the
		 * position of the toplevel window has changed, or when
		 * the position of the client window has changed.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "position-changed", callback: (owner: this) => void): number;
		connect(signal: "raised", callback: (owner: this) => void): number;
		/**
		 * This is emitted after a window has been shown.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "shown", callback: (owner: this) => void): number;
		/**
		 * This is emitted when the size of a window might
		 * have changed. Specifically, this is emitted when the
		 * size of the toplevel window has changed, or when the
		 * size of the client window has changed.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "size-changed", callback: (owner: this) => void): number;
		connect(signal: "unmanaged", callback: (owner: this) => void): number;
		connect(signal: "unmanaging", callback: (owner: this) => void): number;
		connect(signal: "workspace-changed", callback: (owner: this) => void): number;

		connect(signal: "notify::above", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::appears-focused", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::decorated", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::demands-attention", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::fullscreen", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gtk-app-menu-object-path", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gtk-application-id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gtk-application-object-path", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gtk-menubar-object-path", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gtk-unique-bus-name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::gtk-window-object-path", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::icon", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::maximized-horizontally", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::maximized-vertically", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::mini-icon", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::minimized", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::mutter-hints", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::on-all-workspaces", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::resizeable", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::skip-taskbar", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::title", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::urgent", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::user-time", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::window-type", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::wm-class", callback: (owner: this, ...args: any) => void): number;

	}

	type WindowInitOptionsMixin = GObject.ObjectInitOptions
	export interface WindowInitOptions extends WindowInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Window} instead.
	 */
	type WindowMixin = IWindow & GObject.Object;

	interface Window extends WindowMixin {}

	class Window {
		public constructor(options?: Partial<WindowInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowActor} instead.
	 */
	interface IWindowActor {
		meta_window: Window;
		/**
		 * Freezes the {@link WindowActor}, which inhibits updates and geometry
		 * changes of the window. This property is refcounted, so make sure
		 * to call {@link Meta.WindowActor.thaw} the exact same amount of times
		 * as this function to allow updates again.
		 */
		freeze(): void;
		/**
		 * Flattens the layers of #self into one ARGB32 image by alpha blending
		 * the images, and returns the flattened image.
		 * @param clip A clipping rectangle, to help prevent extra processing.
		 * In the case that the clipping rectangle is partially or fully
		 * outside the bounds of the actor, the rectangle will be clipped.
		 * @returns a new cairo surface to be freed with
		 * {@link Cairo.Surface.destroy}.
		 */
		get_image(clip: cairo.RectangleInt | null): cairo.Surface | null;
		/**
		 * Gets the {@link Window} object that the the #MetaWindowActor is displaying
		 * @returns the displayed {@link Window}
		 */
		get_meta_window(): Window;
		/**
		 * Gets the ClutterActor that is used to display the contents of the window,
		 * or NULL if no texture is shown yet, because the window is not mapped.
		 * @returns the #ClutterActor for the contents
		 */
		get_texture(): ShapedTexture;
		/**
		 * Gets whether the X window that the actor was displaying has been destroyed
		 * @returns %TRUE when the window is destroyed, otherwise %FALSE
		 */
		is_destroyed(): boolean;
		sync_visibility(): void;
		/**
		 * Thaws/unfreezes the {@link WindowActor} to allow updates and geometry
		 * changes after a window was frozen using {@link Meta.WindowActor.freeze}.
		 */
		thaw(): void;
		/**
		 * Notify that one or more of the surfaces of the window have been damaged.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "damaged", callback: (owner: this) => void): number;
		/**
		 * The ::effects-completed signal will be emitted once all pending compositor
		 * effects are completed.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "effects-completed", callback: (owner: this) => void): number;
		/**
		 * The ::first-frame signal will be emitted the first time a frame
		 * of window contents has been drawn by the application and Mutter
		 * has had the chance to drawn that frame to the screen. If the
		 * window starts off initially hidden, obscured, or on on a
		 * different workspace, the ::first-frame signal will be emitted
		 * even though the user doesn't see the contents.
		 * 
		 * MetaDisplay::window-created is a good place to connect to this
		 * signal - at that point, the MetaWindowActor for the window
		 * exists, but the window has reliably not yet been drawn.
		 * Connecting to an existing window that has already been drawn to
		 * the screen is not useful.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "first-frame", callback: (owner: this) => void): number;
		connect(signal: "thawed", callback: (owner: this) => void): number;

		connect(signal: "notify::meta-window", callback: (owner: this, ...args: any) => void): number;

	}

	type WindowActorInitOptionsMixin = Clutter.ActorInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions & 
	Pick<IWindowActor,
		"meta_window">;

	export interface WindowActorInitOptions extends WindowActorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowActor} instead.
	 */
	type WindowActorMixin = IWindowActor & Clutter.Actor & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface WindowActor extends WindowActorMixin {}

	class WindowActor {
		public constructor(options?: Partial<WindowActorInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowGroup} instead.
	 */
	interface IWindowGroup {

	}

	type WindowGroupInitOptionsMixin = Clutter.ActorInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions
	export interface WindowGroupInitOptions extends WindowGroupInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowGroup} instead.
	 */
	type WindowGroupMixin = IWindowGroup & Clutter.Actor & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface WindowGroup extends WindowGroupMixin {}

	class WindowGroup {
		public constructor(options?: Partial<WindowGroupInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Workspace} instead.
	 */
	interface IWorkspace {
		readonly active: boolean;
		readonly n_windows: number;
		readonly workspace_index: number;
		activate(timestamp: number): void;
		/**
		 * Switches to #workspace and possibly activates the window #focus_this.
		 * 
		 * The window #focus_this is activated by calling {@link Meta.Window.activate}
		 * which will unminimize it and transient parents, raise it and give it
		 * the focus.
		 * 
		 * If a window is currently being moved by the user, it will be
		 * moved to #workspace.
		 * 
		 * The advantage of calling this function instead of meta_workspace_activate()
		 * followed by meta_window_activate() is that it happens as a unit, so
		 * no other window gets focused first before #focus_this.
		 * @param focus_this the {@link Window} to be focused, or %NULL
		 * @param timestamp timestamp for #focus_this
		 */
		activate_with_focus(focus_this: Window, timestamp: number): void;
		/**
		 * Gets the {@link Display} that the workspace is part of.
		 * @returns the {@link Display} for the workspace
		 */
		get_display(): Display;
		/**
		 * Calculate and retrieve the workspace that is next to #workspace,
		 * according to #direction and the current workspace layout, as set
		 * by {@link Meta.screen_override_workspace_layout}.
		 * @param direction a {@link MotionDirection}, relative to #workspace
		 * @returns the workspace next to #workspace, or
		 *   #workspace itself if the neighbor would be outside the layout
		 */
		get_neighbor(direction: MotionDirection): Workspace;
		/**
		 * Stores the work area in #area.
		 * @returns location to store the work area
		 */
		get_work_area_all_monitors(): Rectangle;
		/**
		 * Stores the work area for #which_monitor on #workspace
		 * in #area.
		 * @param which_monitor a monitor index
		 * @returns location to store the work area
		 */
		get_work_area_for_monitor(which_monitor: number): Rectangle;
		index(): number;
		/**
		 * Gets windows contained on the workspace, including workspace->windows
		 * and also sticky windows. Override-redirect windows are not included.
		 * @returns the list of windows.
		 */
		list_windows(): Window[];
		/**
		 * Sets a list of struts that will be used in addition to the struts
		 * of the windows in the workspace when computing the work area of
		 * the workspace.
		 * @param struts list of {@link Strut}
		 */
		set_builtin_struts(struts: Strut[]): void;
		connect(signal: "window-added", callback: (owner: this, object: Window) => void): number;
		connect(signal: "window-removed", callback: (owner: this, object: Window) => void): number;

		connect(signal: "notify::active", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::n-windows", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::workspace-index", callback: (owner: this, ...args: any) => void): number;

	}

	type WorkspaceInitOptionsMixin = GObject.ObjectInitOptions
	export interface WorkspaceInitOptions extends WorkspaceInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Workspace} instead.
	 */
	type WorkspaceMixin = IWorkspace & GObject.Object;

	interface Workspace extends WorkspaceMixin {}

	class Workspace {
		public constructor(options?: Partial<WorkspaceInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WorkspaceManager} instead.
	 */
	interface IWorkspaceManager {
		readonly layout_columns: number;
		readonly layout_rows: number;
		readonly n_workspaces: number;
		/**
		 * Append a new workspace to the workspace manager and (optionally) switch to that
		 * display.
		 * @param activate %TRUE if the workspace should be switched to after creation
		 * @param timestamp if switching to a new workspace, timestamp to be used when
		 *   focusing a window on the new workspace. (Doesn't hurt to pass a valid
		 *   timestamp when available even if not switching workspaces.)
		 * @returns the newly appended workspace.
		 */
		append_new_workspace(activate: boolean, timestamp: number): Workspace;
		get_active_workspace(): Workspace;
		get_active_workspace_index(): number;
		get_n_workspaces(): number;
		/**
		 * Gets the workspace object for one of a workspace manager's workspaces given the workspace
		 * index. It's valid to call this function with an out-of-range index and it
		 * will robustly return %NULL.
		 * @param index index of one of the display's workspaces
		 * @returns the workspace object with specified
		 *   index, or %NULL if the index is out of range.
		 */
		get_workspace_by_index(index: number): Workspace | null;
		get_workspaces(): Workspace[];
		/**
		 * Explicitly set the layout of workspaces. Once this has been called, the contents of the
		 * _NET_DESKTOP_LAYOUT property on the root window are completely ignored.
		 * @param starting_corner the corner at which the first workspace is found
		 * @param vertical_layout if %TRUE the workspaces are laid out in columns rather than rows
		 * @param n_rows number of rows of workspaces, or -1 to determine the number of rows from
		 *   #n_columns and the total number of workspaces
		 * @param n_columns number of columns of workspaces, or -1 to determine the number of columns from
		 *   #n_rows and the total number of workspaces
		 */
		override_workspace_layout(starting_corner: DisplayCorner, vertical_layout: boolean, n_rows: number, n_columns: number): void;
		remove_workspace(workspace: Workspace, timestamp: number): void;
		/**
		 * Reorder a workspace to a new index. If the workspace is currently active
		 * the "active-workspace-changed" signal will be emitted.
		 * If the workspace's index is the same as #new_index or the workspace
		 * will not be found in the list, this function will return.
		 * 
		 * Calling this function will also emit the "workspaces-reordered" signal.
		 * @param workspace a {@link Workspace} to reorder
		 * @param new_index the new index of the passed workspace
		 */
		reorder_workspace(workspace: Workspace, new_index: number): void;
		connect(signal: "active-workspace-changed", callback: (owner: this) => void): number;
		connect(signal: "showing-desktop-changed", callback: (owner: this) => void): number;
		connect(signal: "workspace-added", callback: (owner: this, object: number) => void): number;
		connect(signal: "workspace-removed", callback: (owner: this, object: number) => void): number;
		connect(signal: "workspace-switched", callback: (owner: this, object: number, p0: number, p1: MotionDirection) => void): number;
		connect(signal: "workspaces-reordered", callback: (owner: this) => void): number;

		connect(signal: "notify::layout-columns", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::layout-rows", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::n-workspaces", callback: (owner: this, ...args: any) => void): number;

	}

	type WorkspaceManagerInitOptionsMixin = GObject.ObjectInitOptions
	export interface WorkspaceManagerInitOptions extends WorkspaceManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WorkspaceManager} instead.
	 */
	type WorkspaceManagerMixin = IWorkspaceManager & GObject.Object;

	interface WorkspaceManager extends WorkspaceManagerMixin {}

	class WorkspaceManager {
		public constructor(options?: Partial<WorkspaceManagerInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link X11Display} instead.
	 */
	interface IX11Display {
		clear_stage_input_region(): void;
		get_damage_event_base(): number;
		get_screen_number(): number;
		get_shape_event_base(): number;
		get_xdisplay(): xlib.Display;
		get_xinput_opcode(): number;
		get_xroot(): xlib.Window;
		has_shape(): boolean;
		lookup_group(group_leader: xlib.Window): Group;
		set_cm_selection(): void;
		set_stage_input_region(region: xfixes.XserverRegion): void;
		xwindow_is_a_no_focus_window(xwindow: xlib.Window): boolean;
	}

	type X11DisplayInitOptionsMixin = GObject.ObjectInitOptions
	export interface X11DisplayInitOptions extends X11DisplayInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link X11Display} instead.
	 */
	type X11DisplayMixin = IX11Display & GObject.Object;

	interface X11Display extends X11DisplayMixin {}

	class X11Display {
		public constructor(options?: Partial<X11DisplayInitOptions>);
	}

	export interface BarrierEventInitOptions {}
	interface BarrierEvent {}
	class BarrierEvent {
		public constructor(options?: Partial<BarrierEventInitOptions>);
		public readonly ref_count: number;
		/**
		 * A unique integer ID identifying a
		 * consecutive series of motions at or along the barrier
		 */
		public event_id: number;
		/**
		 * Server time, in milliseconds, since the last event
		 * sent for this barrier
		 */
		public dt: number;
		/**
		 * Server time, in milliseconds
		 */
		public time: number;
		/**
		 * The cursor X position in screen coordinates
		 */
		public x: number;
		/**
		 * The cursor Y position in screen coordinates.
		 */
		public y: number;
		/**
		 * If the cursor hadn't been constrained, the delta
		 * of X movement past the barrier, in screen coordinates
		 */
		public dx: number;
		/**
		 * If the cursor hadn't been constrained, the delta
		 * of X movement past the barrier, in screen coordinates
		 */
		public dy: number;
		/**
		 * A boolean flag, %TRUE if this event generated
		 * by the pointer leaving the barrier as a result of a client
		 * calling {@link Meta.Barrier.release} (will be set only for
		 * MetaBarrier::leave signals)
		 */
		public released: boolean;
		/**
		 * A boolean flag, %TRUE if the pointer was grabbed
		 * at the time this event was sent
		 */
		public grabbed: boolean;
	}

	export interface ButtonLayoutInitOptions {}
	interface ButtonLayout {}
	class ButtonLayout {
		public constructor(options?: Partial<ButtonLayoutInitOptions>);
		public left_buttons: ButtonFunction[];
		public left_buttons_has_spacer: boolean[];
		public right_buttons: ButtonFunction[];
		public right_buttons_has_spacer: boolean[];
	}

	export interface CloseDialogInterfaceInitOptions {}
	interface CloseDialogInterface {}
	class CloseDialogInterface {
		public constructor(options?: Partial<CloseDialogInterfaceInitOptions>);
		public readonly parent_iface: GObject.TypeInterface;
		public show: {(dialog: CloseDialog): void;};
		public hide: {(dialog: CloseDialog): void;};
		public focus: {(dialog: CloseDialog): void;};
	}

	export interface EdgeInitOptions {}
	interface Edge {}
	class Edge {
		public constructor(options?: Partial<EdgeInitOptions>);
		/**
		 * {@link Rectangle} with the bounds of the edge
		 */
		public rect: Rectangle;
		/**
		 * Side
		 */
		public side_type: Side;
		/**
		 * To what belongs the edge
		 */
		public edge_type: EdgeType;
	}

	export interface FrameInitOptions {}
	interface Frame {}
	class Frame {
		public constructor(options?: Partial<FrameInitOptions>);
	}

	export interface FrameBordersInitOptions {}
	interface FrameBorders {}
	class FrameBorders {
		public constructor(options?: Partial<FrameBordersInitOptions>);
		/**
		 * inner visible portion of frame border
		 */
		public visible: Gtk.Border;
		/**
		 * outer invisible portion of frame border
		 */
		public invisible: Gtk.Border;
		/**
		 * sum of the two borders above
		 */
		public total: Gtk.Border;
		public clear(): void;
	}

	export interface GroupInitOptions {}
	interface Group {}
	class Group {
		public constructor(options?: Partial<GroupInitOptions>);
		public get_size(): number;
		public get_startup_id(): string;
		public list_windows(): Window[];
		public property_notify(event: any): boolean;
		public update_layers(): void;
	}

	export interface InhibitShortcutsDialogInterfaceInitOptions {}
	interface InhibitShortcutsDialogInterface {}
	class InhibitShortcutsDialogInterface {
		public constructor(options?: Partial<InhibitShortcutsDialogInterfaceInitOptions>);
		public readonly parent_iface: GObject.TypeInterface;
		public show: {(dialog: InhibitShortcutsDialog): void;};
		public hide: {(dialog: InhibitShortcutsDialog): void;};
	}

	export interface KeyBindingInitOptions {}
	interface KeyBinding {}
	class KeyBinding {
		public constructor(options?: Partial<KeyBindingInitOptions>);
		public get_mask(): number;
		public get_modifiers(): VirtualModifier;
		public get_name(): string;
		public is_builtin(): boolean;
		public is_reversed(): boolean;
	}

	export interface PluginInfoInitOptions {}
	interface PluginInfo {}
	class PluginInfo {
		public constructor(options?: Partial<PluginInfoInitOptions>);
		/**
		 * name of the plugin
		 */
		public name: string;
		/**
		 * version of the plugin
		 */
		public version: string;
		/**
		 * author of the plugin
		 */
		public author: string;
		/**
		 * license of the plugin
		 */
		public license: string;
		/**
		 * description of the plugin
		 */
		public description: string;
	}

	export interface PluginVersionInitOptions {}
	interface PluginVersion {}
	class PluginVersion {
		public constructor(options?: Partial<PluginVersionInitOptions>);
		/**
		 * major component of the version number of Meta with which the plugin was compiled
		 */
		public version_major: number;
		/**
		 * minor component of the version number of Meta with which the plugin was compiled
		 */
		public version_minor: number;
		/**
		 * micro component of the version number of Meta with which the plugin was compiled
		 */
		public version_micro: number;
		/**
		 * version of the plugin API
		 */
		public version_api: number;
	}

	export interface RectangleInitOptions {}
	interface Rectangle {}
	class Rectangle {
		public constructor(options?: Partial<RectangleInitOptions>);
		/**
		 * X coordinate of the top-left corner
		 */
		public x: number;
		/**
		 * Y coordinate of the top-left corner
		 */
		public y: number;
		/**
		 * Width of the rectangle
		 */
		public width: number;
		/**
		 * Height of the rectangle
		 */
		public height: number;
		public area(): number;
		public contains_rect(inner_rect: Rectangle): boolean;
		public copy(): Rectangle;
		public could_fit_rect(inner_rect: Rectangle): boolean;
		public equal(src2: Rectangle): boolean;
		public free(): void;
		public horiz_overlap(rect2: Rectangle): boolean;
		public intersect(src2: Rectangle): [ boolean, Rectangle ];
		public overlap(rect2: Rectangle): boolean;
		public union(rect2: Rectangle): Rectangle;
		public vert_overlap(rect2: Rectangle): boolean;
	}

	export interface SettingsInitOptions {}
	interface Settings {}
	class Settings {
		public constructor(options?: Partial<SettingsInitOptions>);
		public get_font_dpi(): number;
		public get_ui_scaling_factor(): number;
	}

	export interface ShadowInitOptions {}
	/**
	 * {@link Shadow} holds a shadow texture along with information about how to
	 * apply that texture to draw a window texture. (E.g., it knows how big the
	 * unscaled borders are on each side of the shadow texture.)
	 */
	interface Shadow {}
	class Shadow {
		public constructor(options?: Partial<ShadowInitOptions>);
		/**
		 * Computes the bounds of the pixels that will be affected by
		 * {@link Meta.Shadow.paint}
		 * @param window_x x position of the region to paint a shadow for
		 * @param window_y y position of the region to paint a shadow for
		 * @param window_width actual width of the region to paint a shadow for
		 * @param window_height actual height of the region to paint a shadow for
		 * @param bounds
		 */
		public get_bounds(window_x: number, window_y: number, window_width: number, window_height: number, bounds: cairo.RectangleInt): void;
		/**
		 * Paints the shadow at the given position, for the specified actual
		 * size of the region. (Since a {@link Shadow} can be shared between
		 * different sizes with the same extracted #MetaWindowShape the
		 * size needs to be passed in here.)
		 * @param framebuffer
		 * @param window_x x position of the region to paint a shadow for
		 * @param window_y y position of the region to paint a shadow for
		 * @param window_width actual width of the region to paint a shadow for
		 * @param window_height actual height of the region to paint a shadow for
		 * @param opacity
		 * @param clip if non-%NULL specifies the visible portion
		 *   of the shadow.
		 * @param clip_strictly if %TRUE, drawing will be clipped strictly
		 *   to #clip, otherwise, it will be only used to optimize
		 *   drawing.
		 */
		public paint(framebuffer: Cogl.Framebuffer, window_x: number, window_y: number, window_width: number, window_height: number, opacity: number, clip: cairo.Region | null, clip_strictly: boolean): void;
		public ref(): Shadow;
		public unref(): void;
	}

	export interface ShadowParamsInitOptions {}
	/**
	 * The {@link ShadowParams} structure holds information about how to draw
	 * a particular style of shadow.
	 */
	interface ShadowParams {}
	class ShadowParams {
		public constructor(options?: Partial<ShadowParamsInitOptions>);
		/**
		 * the radius (gaussian standard deviation) of the shadow
		 */
		public radius: number;
		/**
		 * if >= 0, the shadow doesn't extend above the top
		 *  of the shape, and fades out over the given number of pixels
		 */
		public top_fade: number;
		/**
		 * horizontal offset of the shadow with respect to the
		 *  shape being shadowed, in pixels
		 */
		public x_offset: number;
		/**
		 * vertical offset of the shadow with respect to the
		 *  shape being shadowed, in pixels
		 */
		public y_offset: number;
		/**
		 * opacity of the shadow, from 0 to 255
		 */
		public opacity: number;
	}

	export interface StrutInitOptions {}
	interface Strut {}
	class Strut {
		public constructor(options?: Partial<StrutInitOptions>);
		/**
		 * {@link Rectangle} the #MetaStrut is on
		 */
		public rect: Rectangle;
		/**
		 * {@link Side} the #MetaStrut is on
		 */
		public side: Side;
	}

	export interface ThemeInitOptions {}
	interface Theme {}
	class Theme {
		public constructor(options?: Partial<ThemeInitOptions>);
		public static get_default(): Theme;
		public static new(): Theme;
		public free(): void;
	}

	export interface WindowShapeInitOptions {}
	/**
	 * {@link WindowShape} represents a 9-sliced region with borders on all sides that
	 * are unscaled, and a constant central region that is scaled. For example,
	 * the regions representing two windows that are rounded rectangles,
	 * with the same corner radius but different sizes, have the
	 * same MetaWindowShape.
	 * #MetaWindowShape is designed to be used as part of a hash table key, so has
	 * efficient hash and equal functions.
	 */
	interface WindowShape {}
	class WindowShape {
		public constructor(options?: Partial<WindowShapeInitOptions>);
		public static new(region: cairo.Region): WindowShape;
		public equal(shape_b: WindowShape): boolean;
		public get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void;
		public hash(): number;
		public ref(): WindowShape;
		/**
		 * Converts the shape to to a cairo_region_t using the given width
		 * and height for the central scaled region.
		 * @param center_width size of the central region horizontally
		 * @param center_height size of the central region vertically
		 * @returns a newly created region
		 */
		public to_region(center_width: number, center_height: number): cairo.Region;
		public unref(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CloseDialog} instead.
	 */
	interface ICloseDialog {
		window: Window;
		/**
		 * Call whenever #dialog should receive keyboard focus,
		 * usually when the window would.
		 */
		focus(): void;
		/**
		 * Hides the close dialog.
		 */
		hide(): void;
		/**
		 * Returns whether #dialog is currently visible.
		 * @returns #TRUE if #dialog is visible.
		 */
		is_visible(): boolean;
		/**
		 * Responds and closes the dialog. To be called by {@link CloseDialog}
		 * implementations.
		 * @param response a {@link CloseDialogResponse}
		 */
		response(response: CloseDialogResponse): void;
		/**
		 * Shows the close dialog.
		 */
		show(): void;
		connect(signal: "response", callback: (owner: this, object: CloseDialogResponse) => void): number;

		connect(signal: "notify::window", callback: (owner: this, ...args: any) => void): number;

	}

	type CloseDialogInitOptionsMixin = Pick<ICloseDialog,
		"window">;

	export interface CloseDialogInitOptions extends CloseDialogInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CloseDialog} instead.
	 */
	type CloseDialogMixin = ICloseDialog;

	interface CloseDialog extends CloseDialogMixin {}

	class CloseDialog {
		public constructor(options?: Partial<CloseDialogInitOptions>);
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InhibitShortcutsDialog} instead.
	 */
	interface IInhibitShortcutsDialog {
		window: Window;
		/**
		 * Hides the inhibit shortcuts dialog.
		 */
		hide(): void;
		/**
		 * Responds and closes the dialog. To be called by {@link InhibitShortcutsDialog}
		 * implementations.
		 * @param response a {@link InhibitShortcutsDialogResponse}
		 */
		response(response: InhibitShortcutsDialogResponse): void;
		/**
		 * Shows the inhibit shortcuts dialog.
		 */
		show(): void;
		connect(signal: "response", callback: (owner: this, object: InhibitShortcutsDialogResponse) => void): number;

		connect(signal: "notify::window", callback: (owner: this, ...args: any) => void): number;

	}

	type InhibitShortcutsDialogInitOptionsMixin = Pick<IInhibitShortcutsDialog,
		"window">;

	export interface InhibitShortcutsDialogInitOptions extends InhibitShortcutsDialogInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InhibitShortcutsDialog} instead.
	 */
	type InhibitShortcutsDialogMixin = IInhibitShortcutsDialog;

	interface InhibitShortcutsDialog extends InhibitShortcutsDialogMixin {}

	class InhibitShortcutsDialog {
		public constructor(options?: Partial<InhibitShortcutsDialogInitOptions>);
	}



	/**
	 * Function a window button can have.  Note, you can't add stuff here
	 * without extending the theme format to draw a new function and
	 * breaking all existing themes.
	 */
	enum ButtonFunction {
		/**
		 * Menu
		 */
		MENU = 0,
		/**
		 * Minimize
		 */
		MINIMIZE = 1,
		/**
		 * Maximize
		 */
		MAXIMIZE = 2,
		/**
		 * Close
		 */
		CLOSE = 3,
		/**
		 * Marks the end of the {@link ButtonFunction} enumeration
		 */
		LAST = 4
	}

	enum CloseDialogResponse {
		WAIT = 0,
		FORCE_CLOSE = 1
	}

	/**
	 * Indicates the appropriate effect to show the user for
	 * {@link Meta.Compositor.show_window} and meta_compositor_hide_window()
	 */
	enum CompEffect {
		/**
		 * The window is newly created
		 *   (also used for a window that was previously on a different
		 *   workspace and is changed to become visible on the active
		 *   workspace.)
		 */
		CREATE = 0,
		/**
		 * The window should be shown
		 *   as unminimizing from its icon geometry.
		 */
		UNMINIMIZE = 1,
		/**
		 * The window is being destroyed
		 */
		DESTROY = 2,
		/**
		 * The window should be shown
		 *   as minimizing to its icon geometry.
		 */
		MINIMIZE = 3,
		/**
		 * No effect, the window should be
		 *   shown or hidden immediately.
		 */
		NONE = 4
	}

	enum Cursor {
		NONE = 0,
		/**
		 * Default cursor
		 */
		DEFAULT = 1,
		/**
		 * Resize northern edge cursor
		 */
		NORTH_RESIZE = 2,
		/**
		 * Resize southern edge cursor
		 */
		SOUTH_RESIZE = 3,
		/**
		 * Resize western edge cursor
		 */
		WEST_RESIZE = 4,
		/**
		 * Resize eastern edge cursor
		 */
		EAST_RESIZE = 5,
		/**
		 * Resize south-eastern corner cursor
		 */
		SE_RESIZE = 6,
		/**
		 * Resize south-western corner cursor
		 */
		SW_RESIZE = 7,
		/**
		 * Resize north-eastern corner cursor
		 */
		NE_RESIZE = 8,
		/**
		 * Resize north-western corner cursor
		 */
		NW_RESIZE = 9,
		/**
		 * Move or resize cursor
		 */
		MOVE_OR_RESIZE_WINDOW = 10,
		/**
		 * Busy cursor
		 */
		BUSY = 11,
		/**
		 * DND in drag cursor
		 */
		DND_IN_DRAG = 12,
		/**
		 * DND move cursor
		 */
		DND_MOVE = 13,
		/**
		 * DND copy cursor
		 */
		DND_COPY = 14,
		/**
		 * DND unsupported target
		 */
		DND_UNSUPPORTED_TARGET = 15,
		/**
		 * pointing hand
		 */
		POINTING_HAND = 16,
		/**
		 * crosshair (action forbidden)
		 */
		CROSSHAIR = 17,
		/**
		 * I-beam (text input)
		 */
		IBEAM = 18,
		/**
		 * Invisible cursor
		 */
		BLANK = 19,
		LAST = 20
	}

	enum DisplayCorner {
		/**
		 * top-left corner
		 */
		TOPLEFT = 0,
		/**
		 * top-right corner
		 */
		TOPRIGHT = 1,
		/**
		 * bottom-left corner
		 */
		BOTTOMLEFT = 2,
		/**
		 * bottom-right corner
		 */
		BOTTOMRIGHT = 3
	}

	enum DisplayDirection {
		/**
		 * up
		 */
		UP = 0,
		/**
		 * down
		 */
		DOWN = 1,
		/**
		 * left
		 */
		LEFT = 2,
		/**
		 * right
		 */
		RIGHT = 3
	}

	enum EdgeType {
		/**
		 * Whether the edge belongs to a window
		 */
		WINDOW = 0,
		/**
		 * Whether the edge belongs to a monitor
		 */
		MONITOR = 1,
		/**
		 * Whether the edge belongs to a screen
		 */
		SCREEN = 2
	}

	enum ExitCode {
		/**
		 * Success
		 */
		SUCCESS = 0,
		/**
		 * Error
		 */
		ERROR = 1
	}

	enum FrameType {
		/**
		 * Normal frame
		 */
		NORMAL = 0,
		/**
		 * Dialog frame
		 */
		DIALOG = 1,
		/**
		 * Modal dialog frame
		 */
		MODAL_DIALOG = 2,
		/**
		 * Utility frame
		 */
		UTILITY = 3,
		/**
		 * Menu frame
		 */
		MENU = 4,
		/**
		 * Border frame
		 */
		BORDER = 5,
		/**
		 * Attached frame
		 */
		ATTACHED = 6,
		/**
		 * Marks the end of the {@link FrameType} enumeration
		 */
		LAST = 7
	}

	enum GrabOp {
		/**
		 * None
		 */
		NONE = 0,
		WINDOW_BASE = 1,
		/**
		 * Compositor asked for grab
		 */
		COMPOSITOR = 2,
		WAYLAND_POPUP = 3,
		FRAME_BUTTON = 4,
		/**
		 * Moving with pointer
		 */
		MOVING = 1,
		/**
		 * Resizing NW with pointer
		 */
		RESIZING_NW = 36865,
		/**
		 * Resizing N with pointer
		 */
		RESIZING_N = 32769,
		/**
		 * Resizing NE with pointer
		 */
		RESIZING_NE = 40961,
		/**
		 * Resizing E with pointer
		 */
		RESIZING_E = 8193,
		/**
		 * Resizing SW with pointer
		 */
		RESIZING_SW = 20481,
		/**
		 * Resizing S with pointer
		 */
		RESIZING_S = 16385,
		/**
		 * Resizing SE with pointer
		 */
		RESIZING_SE = 24577,
		/**
		 * Resizing W with pointer
		 */
		RESIZING_W = 4097,
		/**
		 * Moving with keyboard
		 */
		KEYBOARD_MOVING = 257,
		/**
		 * Resizing with keyboard
		 */
		KEYBOARD_RESIZING_UNKNOWN = 769,
		/**
		 * Resizing NS with keyboard
		 */
		KEYBOARD_RESIZING_NW = 37121,
		/**
		 * Resizing N with keyboard
		 */
		KEYBOARD_RESIZING_N = 33025,
		/**
		 * Resizing NE with keyboard
		 */
		KEYBOARD_RESIZING_NE = 41217,
		/**
		 * Resizing E with keyboard
		 */
		KEYBOARD_RESIZING_E = 8449,
		/**
		 * Resizing SW with keyboard
		 */
		KEYBOARD_RESIZING_SW = 20737,
		/**
		 * Resizing S with keyboard
		 */
		KEYBOARD_RESIZING_S = 16641,
		/**
		 * Resizing SE with keyboard
		 */
		KEYBOARD_RESIZING_SE = 24833,
		/**
		 * Resizing W with keyboard
		 */
		KEYBOARD_RESIZING_W = 4353
	}

	enum Gravity {
		NONE = 0,
		NORTH_WEST = 1,
		NORTH = 2,
		NORTH_EAST = 3,
		WEST = 4,
		CENTER = 5,
		EAST = 6,
		SOUTH_WEST = 7,
		SOUTH = 8,
		SOUTH_EAST = 9,
		STATIC = 10
	}

	enum InhibitShortcutsDialogResponse {
		ALLOW = 0,
		DENY = 1
	}

	enum KeyBindingAction {
		/**
		 * FILLME
		 */
		NONE = 0,
		/**
		 * FILLME
		 */
		WORKSPACE_1 = 1,
		/**
		 * FILLME
		 */
		WORKSPACE_2 = 2,
		/**
		 * FILLME
		 */
		WORKSPACE_3 = 3,
		/**
		 * FILLME
		 */
		WORKSPACE_4 = 4,
		/**
		 * FILLME
		 */
		WORKSPACE_5 = 5,
		/**
		 * FILLME
		 */
		WORKSPACE_6 = 6,
		/**
		 * FILLME
		 */
		WORKSPACE_7 = 7,
		/**
		 * FILLME
		 */
		WORKSPACE_8 = 8,
		/**
		 * FILLME
		 */
		WORKSPACE_9 = 9,
		/**
		 * FILLME
		 */
		WORKSPACE_10 = 10,
		/**
		 * FILLME
		 */
		WORKSPACE_11 = 11,
		/**
		 * FILLME
		 */
		WORKSPACE_12 = 12,
		/**
		 * FILLME
		 */
		WORKSPACE_LEFT = 13,
		/**
		 * FILLME
		 */
		WORKSPACE_RIGHT = 14,
		/**
		 * FILLME
		 */
		WORKSPACE_UP = 15,
		/**
		 * FILLME
		 */
		WORKSPACE_DOWN = 16,
		/**
		 * FILLME
		 */
		WORKSPACE_LAST = 17,
		/**
		 * FILLME
		 */
		SWITCH_APPLICATIONS = 18,
		/**
		 * FILLME
		 */
		SWITCH_APPLICATIONS_BACKWARD = 19,
		/**
		 * FILLME
		 */
		SWITCH_GROUP = 20,
		/**
		 * FILLME
		 */
		SWITCH_GROUP_BACKWARD = 21,
		/**
		 * FILLME
		 */
		SWITCH_WINDOWS = 22,
		/**
		 * FILLME
		 */
		SWITCH_WINDOWS_BACKWARD = 23,
		/**
		 * FILLME
		 */
		SWITCH_PANELS = 24,
		/**
		 * FILLME
		 */
		SWITCH_PANELS_BACKWARD = 25,
		/**
		 * FILLME
		 */
		CYCLE_GROUP = 26,
		/**
		 * FILLME
		 */
		CYCLE_GROUP_BACKWARD = 27,
		/**
		 * FILLME
		 */
		CYCLE_WINDOWS = 28,
		/**
		 * FILLME
		 */
		CYCLE_WINDOWS_BACKWARD = 29,
		/**
		 * FILLME
		 */
		CYCLE_PANELS = 30,
		/**
		 * FILLME
		 */
		CYCLE_PANELS_BACKWARD = 31,
		/**
		 * FILLME
		 */
		SHOW_DESKTOP = 32,
		/**
		 * FILLME
		 */
		PANEL_MAIN_MENU = 33,
		/**
		 * FILLME
		 */
		PANEL_RUN_DIALOG = 34,
		/**
		 * FILLME
		 */
		TOGGLE_RECORDING = 35,
		/**
		 * FILLME
		 */
		SET_SPEW_MARK = 36,
		/**
		 * FILLME
		 */
		ACTIVATE_WINDOW_MENU = 37,
		/**
		 * FILLME
		 */
		TOGGLE_FULLSCREEN = 38,
		/**
		 * FILLME
		 */
		TOGGLE_MAXIMIZED = 39,
		/**
		 * FILLME
		 */
		TOGGLE_TILED_LEFT = 40,
		/**
		 * FILLME
		 */
		TOGGLE_TILED_RIGHT = 41,
		/**
		 * FILLME
		 */
		TOGGLE_ABOVE = 42,
		/**
		 * FILLME
		 */
		MAXIMIZE = 43,
		/**
		 * FILLME
		 */
		UNMAXIMIZE = 44,
		/**
		 * FILLME
		 */
		TOGGLE_SHADED = 45,
		/**
		 * FILLME
		 */
		MINIMIZE = 46,
		/**
		 * FILLME
		 */
		CLOSE = 47,
		/**
		 * FILLME
		 */
		BEGIN_MOVE = 48,
		/**
		 * FILLME
		 */
		BEGIN_RESIZE = 49,
		/**
		 * FILLME
		 */
		TOGGLE_ON_ALL_WORKSPACES = 50,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_1 = 51,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_2 = 52,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_3 = 53,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_4 = 54,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_5 = 55,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_6 = 56,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_7 = 57,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_8 = 58,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_9 = 59,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_10 = 60,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_11 = 61,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_12 = 62,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_LEFT = 63,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_RIGHT = 64,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_UP = 65,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_DOWN = 66,
		/**
		 * FILLME
		 */
		MOVE_TO_WORKSPACE_LAST = 67,
		/**
		 * FILLME
		 */
		MOVE_TO_MONITOR_LEFT = 68,
		/**
		 * FILLME
		 */
		MOVE_TO_MONITOR_RIGHT = 69,
		/**
		 * FILLME
		 */
		MOVE_TO_MONITOR_UP = 70,
		/**
		 * FILLME
		 */
		MOVE_TO_MONITOR_DOWN = 71,
		/**
		 * FILLME
		 */
		RAISE_OR_LOWER = 72,
		/**
		 * FILLME
		 */
		RAISE = 73,
		/**
		 * FILLME
		 */
		LOWER = 74,
		/**
		 * FILLME
		 */
		MAXIMIZE_VERTICALLY = 75,
		/**
		 * FILLME
		 */
		MAXIMIZE_HORIZONTALLY = 76,
		/**
		 * FILLME
		 */
		MOVE_TO_CORNER_NW = 77,
		/**
		 * FILLME
		 */
		MOVE_TO_CORNER_NE = 78,
		/**
		 * FILLME
		 */
		MOVE_TO_CORNER_SW = 79,
		/**
		 * FILLME
		 */
		MOVE_TO_CORNER_SE = 80,
		/**
		 * FILLME
		 */
		MOVE_TO_SIDE_N = 81,
		/**
		 * FILLME
		 */
		MOVE_TO_SIDE_S = 82,
		/**
		 * FILLME
		 */
		MOVE_TO_SIDE_E = 83,
		/**
		 * FILLME
		 */
		MOVE_TO_SIDE_W = 84,
		/**
		 * FILLME
		 */
		MOVE_TO_CENTER = 85,
		/**
		 * FILLME
		 */
		OVERLAY_KEY = 86,
		/**
		 * FILLME
		 */
		LOCATE_POINTER_KEY = 87,
		ISO_NEXT_GROUP = 88,
		/**
		 * FILLME
		 */
		ALWAYS_ON_TOP = 89,
		SWITCH_MONITOR = 90,
		ROTATE_MONITOR = 91,
		/**
		 * FILLME
		 */
		LAST = 92
	}

	enum LaterType {
		/**
		 * call in a resize processing phase that is done
		 *   before GTK+ repainting (including window borders) is done.
		 */
		RESIZE = 0,
		/**
		 * used by Mutter to compute which windows should be mapped
		 */
		CALC_SHOWING = 1,
		/**
		 * used by Mutter to see if there's a fullscreen window
		 */
		CHECK_FULLSCREEN = 2,
		/**
		 * used by Mutter to send it's idea of the stacking order to the server
		 */
		SYNC_STACK = 3,
		/**
		 * call before the stage is redrawn
		 */
		BEFORE_REDRAW = 4,
		/**
		 * call at a very low priority (can be blocked
		 *    by running animations or redrawing applications)
		 */
		IDLE = 5
	}

	enum LocaleDirection {
		LTR = 0,
		RTL = 1
	}

	enum MonitorSwitchConfigType {
		ALL_MIRROR = 0,
		ALL_LINEAR = 1,
		EXTERNAL = 2,
		BUILTIN = 3,
		UNKNOWN = 4
	}

	enum MotionDirection {
		/**
		 * Upwards motion
		 */
		UP = -1,
		/**
		 * Downwards motion
		 */
		DOWN = -2,
		/**
		 * Motion to the left
		 */
		LEFT = -3,
		/**
		 * Motion to the right
		 */
		RIGHT = -4,
		/**
		 * Motion up and to the left
		 */
		UP_LEFT = -5,
		/**
		 * Motion up and to the right
		 */
		UP_RIGHT = -6,
		/**
		 * Motion down and to the left
		 */
		DOWN_LEFT = -7,
		/**
		 * Motion down and to the right
		 */
		DOWN_RIGHT = -8
	}

	enum PadActionType {
		BUTTON = 0,
		RING = 1,
		STRIP = 2
	}

	enum Preference {
		/**
		 * mouse button modifiers
		 */
		MOUSE_BUTTON_MODS = 0,
		/**
		 * focus mode
		 */
		FOCUS_MODE = 1,
		/**
		 * focus new windows
		 */
		FOCUS_NEW_WINDOWS = 2,
		/**
		 * attach modal dialogs
		 */
		ATTACH_MODAL_DIALOGS = 3,
		/**
		 * raise on click
		 */
		RAISE_ON_CLICK = 4,
		/**
		 * action double click titlebar
		 */
		ACTION_DOUBLE_CLICK_TITLEBAR = 5,
		/**
		 * action middle click titlebar
		 */
		ACTION_MIDDLE_CLICK_TITLEBAR = 6,
		/**
		 * action right click titlebar
		 */
		ACTION_RIGHT_CLICK_TITLEBAR = 7,
		/**
		 * auto-raise
		 */
		AUTO_RAISE = 8,
		/**
		 * auto-raise delay
		 */
		AUTO_RAISE_DELAY = 9,
		/**
		 * focus change on pointer rest
		 */
		FOCUS_CHANGE_ON_POINTER_REST = 10,
		/**
		 * title-bar font
		 */
		TITLEBAR_FONT = 11,
		/**
		 * number of workspaces
		 */
		NUM_WORKSPACES = 12,
		/**
		 * dynamic workspaces
		 */
		DYNAMIC_WORKSPACES = 13,
		/**
		 * keybindings
		 */
		KEYBINDINGS = 14,
		/**
		 * disable workarounds
		 */
		DISABLE_WORKAROUNDS = 15,
		/**
		 * button layout
		 */
		BUTTON_LAYOUT = 16,
		/**
		 * workspace names
		 */
		WORKSPACE_NAMES = 17,
		/**
		 * visual bell
		 */
		VISUAL_BELL = 18,
		/**
		 * audible bell
		 */
		AUDIBLE_BELL = 19,
		/**
		 * visual bell type
		 */
		VISUAL_BELL_TYPE = 20,
		/**
		 * GNOME accessibility
		 */
		GNOME_ACCESSIBILITY = 21,
		/**
		 * GNOME animations
		 */
		GNOME_ANIMATIONS = 22,
		/**
		 * cursor theme
		 */
		CURSOR_THEME = 23,
		/**
		 * cursor size
		 */
		CURSOR_SIZE = 24,
		/**
		 * resize with right button
		 */
		RESIZE_WITH_RIGHT_BUTTON = 25,
		/**
		 * edge tiling
		 */
		EDGE_TILING = 26,
		/**
		 * force fullscreen
		 */
		FORCE_FULLSCREEN = 27,
		/**
		 * workspaces only on primary
		 */
		WORKSPACES_ONLY_ON_PRIMARY = 28,
		/**
		 * draggable border width
		 */
		DRAGGABLE_BORDER_WIDTH = 29,
		/**
		 * auto-maximize
		 */
		AUTO_MAXIMIZE = 30,
		/**
		 * center new windows
		 */
		CENTER_NEW_WINDOWS = 31,
		/**
		 * drag threshold
		 */
		DRAG_THRESHOLD = 32,
		/**
		 * show pointer location
		 */
		LOCATE_POINTER = 33,
		CHECK_ALIVE_TIMEOUT = 34
	}

	enum SelectionType {
		SELECTION_PRIMARY = 0,
		SELECTION_CLIPBOARD = 1,
		SELECTION_DND = 2,
		N_SELECTION_TYPES = 3
	}

	enum ShadowMode {
		AUTO = 0,
		FORCED_OFF = 1,
		FORCED_ON = 2
	}

	enum Side {
		/**
		 * Left side
		 */
		LEFT = 1,
		/**
		 * Right side
		 */
		RIGHT = 2,
		/**
		 * Top side
		 */
		TOP = 4,
		/**
		 * Bottom side
		 */
		BOTTOM = 8
	}

	enum SizeChange {
		MAXIMIZE = 0,
		UNMAXIMIZE = 1,
		FULLSCREEN = 2,
		UNFULLSCREEN = 3
	}

	/**
	 * Layers a window can be in.
	 * These MUST be in the order of stacking.
	 */
	enum StackLayer {
		/**
		 * Desktop layer
		 */
		DESKTOP = 0,
		/**
		 * Bottom layer
		 */
		BOTTOM = 1,
		/**
		 * Normal layer
		 */
		NORMAL = 2,
		/**
		 * Top layer
		 */
		TOP = 4,
		/**
		 * Dock layer
		 */
		DOCK = 4,
		/**
		 * Override-redirect layer
		 */
		OVERRIDE_REDIRECT = 7,
		/**
		 * Marks the end of the {@link StackLayer} enumeration
		 */
		LAST = 8
	}

	enum TabList {
		/**
		 * Normal windows
		 */
		NORMAL = 0,
		/**
		 * Dock windows
		 */
		DOCKS = 1,
		/**
		 * Groups
		 */
		GROUP = 2,
		/**
		 * All windows
		 */
		NORMAL_ALL = 3
	}

	enum TabShowType {
		/**
		 * Show icon (Alt-Tab mode)
		 */
		ICON = 0,
		/**
		 * Show instantly (Alt-Esc mode)
		 */
		INSTANTLY = 1
	}

	enum WindowClientType {
		/**
		 * A Wayland based window
		 */
		WAYLAND = 0,
		/**
		 * An X11 based window
		 */
		X11 = 1
	}

	/**
	 * Menu the compositor should display for a given window
	 */
	enum WindowMenuType {
		/**
		 * the window manager menu
		 */
		WM = 0,
		/**
		 * the (fallback) app menu
		 */
		APP = 1
	}

	enum WindowType {
		/**
		 * Normal
		 */
		NORMAL = 0,
		/**
		 * Desktop
		 */
		DESKTOP = 1,
		/**
		 * Dock
		 */
		DOCK = 2,
		/**
		 * Dialog
		 */
		DIALOG = 3,
		/**
		 * Modal dialog
		 */
		MODAL_DIALOG = 4,
		/**
		 * Toolbar
		 */
		TOOLBAR = 5,
		/**
		 * Menu
		 */
		MENU = 6,
		/**
		 * Utility
		 */
		UTILITY = 7,
		/**
		 * Splashcreen
		 */
		SPLASHSCREEN = 8,
		/**
		 * Dropdown menu
		 */
		DROPDOWN_MENU = 9,
		/**
		 * Popup menu
		 */
		POPUP_MENU = 10,
		/**
		 * Tooltip
		 */
		TOOLTIP = 11,
		/**
		 * Notification
		 */
		NOTIFICATION = 12,
		/**
		 * Combobox
		 */
		COMBO = 13,
		/**
		 * Drag and drop
		 */
		DND = 14,
		/**
		 * Other override-redirect window type
		 */
		OVERRIDE_OTHER = 15
	}

	enum BarrierDirection {
		/**
		 * Positive direction in the X axis
		 */
		POSITIVE_X = 1,
		/**
		 * Positive direction in the Y axis
		 */
		POSITIVE_Y = 2,
		/**
		 * Negative direction in the X axis
		 */
		NEGATIVE_X = 4,
		/**
		 * Negative direction in the Y axis
		 */
		NEGATIVE_Y = 8
	}

	enum DebugPaintFlag {
		/**
		 * default
		 */
		NONE = 0,
		/**
		 * paint opaque regions
		 */
		OPAQUE_REGION = 1
	}

	enum DebugTopic {
		/**
		 * verbose logging
		 */
		VERBOSE = -1,
		/**
		 * focus
		 */
		FOCUS = 1,
		/**
		 * workarea
		 */
		WORKAREA = 2,
		/**
		 * stack
		 */
		STACK = 4,
		/**
		 * themes
		 */
		THEMES = 8,
		/**
		 * session management
		 */
		SM = 16,
		/**
		 * events
		 */
		EVENTS = 32,
		/**
		 * window state
		 */
		WINDOW_STATE = 64,
		/**
		 * window operations
		 */
		WINDOW_OPS = 128,
		/**
		 * geometry
		 */
		GEOMETRY = 256,
		/**
		 * window placement
		 */
		PLACEMENT = 512,
		/**
		 * ping
		 */
		PING = 1024,
		/**
		 * Xinerama
		 */
		XINERAMA = 2048,
		/**
		 * keybindings
		 */
		KEYBINDINGS = 4096,
		/**
		 * sync
		 */
		SYNC = 8192,
		/**
		 * errors
		 */
		ERRORS = 16384,
		/**
		 * startup
		 */
		STARTUP = 32768,
		/**
		 * preferences
		 */
		PREFS = 65536,
		/**
		 * groups
		 */
		GROUPS = 131072,
		/**
		 * resizing
		 */
		RESIZING = 262144,
		/**
		 * shapes
		 */
		SHAPES = 524288,
		/**
		 * compositor
		 */
		COMPOSITOR = 1048576,
		/**
		 * edge resistance
		 */
		EDGE_RESISTANCE = 2097152,
		DBUS = 4194304,
		INPUT = 8388608
	}

	enum Direction {
		/**
		 * Left
		 */
		LEFT = 1,
		/**
		 * Right
		 */
		RIGHT = 2,
		/**
		 * Top
		 */
		TOP = 4,
		/**
		 * Bottom
		 */
		BOTTOM = 8,
		/**
		 * Up
		 */
		UP = 4,
		/**
		 * Down
		 */
		DOWN = 8,
		/**
		 * Horizontal
		 */
		HORIZONTAL = 3,
		/**
		 * Vertical
		 */
		VERTICAL = 12
	}

	enum FrameFlags {
		/**
		 * frame allows delete
		 */
		ALLOWS_DELETE = 1,
		/**
		 * frame allows menu
		 */
		ALLOWS_MENU = 2,
		/**
		 * frame allows minimize
		 */
		ALLOWS_MINIMIZE = 4,
		/**
		 * frame allows maximize
		 */
		ALLOWS_MAXIMIZE = 8,
		/**
		 * frame allows vertical resize
		 */
		ALLOWS_VERTICAL_RESIZE = 16,
		/**
		 * frame allows horizontal resize
		 */
		ALLOWS_HORIZONTAL_RESIZE = 32,
		/**
		 * frame has focus
		 */
		HAS_FOCUS = 64,
		/**
		 * frame is shaded
		 */
		SHADED = 128,
		/**
		 * frame is stuck
		 */
		STUCK = 256,
		/**
		 * frame is maximized
		 */
		MAXIMIZED = 512,
		/**
		 * frame allows shade
		 */
		ALLOWS_SHADE = 1024,
		/**
		 * frame allows move
		 */
		ALLOWS_MOVE = 2048,
		/**
		 * frame allows fullscreen
		 */
		FULLSCREEN = 4096,
		/**
		 * frame is above
		 */
		ABOVE = 8192,
		/**
		 * frame is tiled to the left
		 */
		TILED_LEFT = 16384,
		/**
		 * frame is tiled to the right
		 */
		TILED_RIGHT = 32768
	}

	enum KeyBindingFlags {
		/**
		 * none
		 */
		NONE = 0,
		/**
		 * per-window
		 */
		PER_WINDOW = 1,
		/**
		 * built-in
		 */
		BUILTIN = 2,
		/**
		 * is reversed
		 */
		IS_REVERSED = 4,
		/**
		 * always active
		 */
		NON_MASKABLE = 8,
		IGNORE_AUTOREPEAT = 16,
		/**
		 * not grabbed automatically
		 */
		NO_AUTO_GRAB = 32
	}

	enum MaximizeFlags {
		/**
		 * Horizontal
		 */
		HORIZONTAL = 1,
		/**
		 * Vertical
		 */
		VERTICAL = 2,
		/**
		 * Both
		 */
		BOTH = 3
	}

	/**
	 * Options that can be provided when calling {@link Meta.Plugin.begin_modal}.
	 */
	enum ModalOptions {
		/**
		 * if set the pointer is already
		 *   grabbed by the plugin and should not be grabbed again.
		 */
		POINTER_ALREADY_GRABBED = 1,
		/**
		 * if set the keyboard is already
		 *   grabbed by the plugin and should not be grabbed again.
		 */
		KEYBOARD_ALREADY_GRABBED = 2
	}

	enum VirtualModifier {
		/**
		 * Shift mask
		 */
		SHIFT_MASK = 32,
		/**
		 * Control mask
		 */
		CONTROL_MASK = 64,
		/**
		 * Alt mask
		 */
		ALT_MASK = 128,
		/**
		 * Meta mask
		 */
		META_MASK = 256,
		/**
		 * Super mask
		 */
		SUPER_MASK = 512,
		/**
		 * Hyper mask
		 */
		HYPER_MASK = 1024,
		/**
		 * Mod2 mask
		 */
		MOD2_MASK = 2048,
		/**
		 * Mod3 mask
		 */
		MOD3_MASK = 4096,
		/**
		 * Mod4 mask
		 */
		MOD4_MASK = 8192,
		/**
		 * Mod5 mask
		 */
		MOD5_MASK = 16384
	}

	interface IdleMonitorWatchFunc {
		(monitor: IdleMonitor, watch_id: number): void;
	}

	interface KeyHandlerFunc {
		(display: Display, window: Window, event: any | null, binding: KeyBinding): void;
	}

	interface PrefsChangedFunc {
		(pref: Preference): void;
	}

	interface WindowForeachFunc {
		(window: Window): boolean;
	}

	/**
	 * Tells mutter to activate the session. When mutter is a
	 * display server, this tells logind to switch over to
	 * the new session.
	 * @returns 
	 */
	function activate_session(): boolean;

	function add_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void;

	function add_debug_paint_flag(flag: DebugPaintFlag): void;

	/**
	 * Ensure log messages for the given topic #topic
	 * will be printed.
	 * @param topic Topic for which logging will be started
	 */
	function add_verbose_topic(topic: DebugTopic): void;

	function bug(format: string): void;

	function clutter_init(): void;

	function debug_spew_real(format: string): void;

	/**
	 * Disables unredirection, can be useful in situations where having
	 * unredirected windows is undesirable like when recording a video.
	 * @param display a {@link Display}
	 */
	function disable_unredirect_for_display(display: Display): void;

	/**
	 * Enables unredirection which reduces the overhead for apps like games.
	 * @param display a {@link Display}
	 */
	function enable_unredirect_for_display(display: Display): void;

	function exit(code: ExitCode): void;

	function external_binding_name_for_action(keybinding_action: number): string;

	function fatal(format: string): void;

	function focus_stage_window(display: Display, timestamp: number): void;

	/**
	 * Converts a frame type enum value to the name string that would
	 * appear in the theme definition file.
	 * @param type a {@link FrameType}
	 * @returns the string value
	 */
	function frame_type_to_string(type: FrameType): string;

	function g_utf8_strndup(src: string, n: number): string;

	/**
	 * Accessor for the singleton MetaBackend.
	 * @returns The only {@link Backend} there is.
	 */
	function get_backend(): Backend;

	function get_debug_paint_flags(): DebugPaintFlag;

	function get_feedback_group_for_display(display: Display): Clutter.Actor;

	function get_locale_direction(): LocaleDirection;

	/**
	 * Returns a #GOptionContext initialized with mutter-related options.
	 * Parse the command-line args with this before calling meta_init().
	 * @returns the #GOptionContext
	 */
	function get_option_context(): GLib.OptionContext;

	function get_replace_current_wm(): boolean;

	function get_stage_for_display(display: Display): Clutter.Actor;

	function get_top_window_group_for_display(display: Display): Clutter.Actor;

	function get_window_actors(display: Display): Clutter.Actor[];

	function get_window_group_for_display(display: Display): Clutter.Actor;

	function gravity_to_string(gravity: Gravity): string;

	/**
	 * Initialize mutter. Call this after {@link Meta.get.option_context} and
	 * meta_plugin_manager_set_plugin_type(), and before meta_run().
	 */
	function init(): void;

	function is_debugging(): boolean;

	/**
	 * Returns %TRUE if this instance of Mutter comes from Mutter
	 * restarting itself (for example to enable/disable stereo.)
	 * See meta_restart(). If this is the case, any startup visuals
	 * or animations should be suppressed.
	 * @returns 
	 */
	function is_restart(): boolean;

	/**
	 * Returns whether X synchronisation is currently enabled.
	 * 
	 * FIXME: This is *only* called by {@link Meta.Display.open}, but by that time
	 * we have already turned syncing on or off on startup, and we don't
	 * have any way to do so while Mutter is running, so it's rather
	 * pointless.
	 * @returns %TRUE if we must wait for events whenever we send X requests;
	 * %FALSE otherwise.
	 */
	function is_syncing(): boolean;

	function is_verbose(): boolean;

	function is_wayland_compositor(): boolean;

	/**
	 * Allows users to register a custom handler for a
	 * builtin key binding.
	 * @param name The name of the keybinding to set
	 * @param handler The new handler function
	 * @param free_data Will be called when this handler is overridden.
	 * @returns %TRUE if the binding known as #name was found,
	 * %FALSE otherwise.
	 */
	function keybindings_set_custom_handler(name: string, handler: KeyHandlerFunc | null, free_data: GLib.DestroyNotify): boolean;

	/**
	 * Sets up a callback  to be called at some later time. #when determines the
	 * particular later occasion at which it is called. This is much like {@link G.idle_add},
	 * except that the functions interact properly with clutter event handling.
	 * If a "later" function is added from a clutter event handler, and is supposed
	 * to be run before the stage is redrawn, it will be run before that redraw
	 * of the stage, not the next one.
	 * @param when enumeration value determining the phase at which to run the callback
	 * @param func callback to run later
	 * @param data data to pass to the callback
	 * @param notify function to call to destroy #data when it is no longer in use, or %NULL
	 * @returns an integer ID (guaranteed to be non-zero) that can be used
	 *  to cancel the callback and prevent it from being run.
	 */
	function later_add(when: LaterType, func: GLib.SourceFunc, data: any | null, notify: GLib.DestroyNotify): number;

	/**
	 * Removes a callback added with {@link Meta.later.add}
	 * @param later_id the integer ID returned from {@link Meta.later.add}
	 */
	function later_remove(later_id: number): void;

	function pop_no_msg_prefix(): void;

	function preference_to_string(pref: Preference): string;

	function prefs_add_listener(func: PrefsChangedFunc): void;

	function prefs_bell_is_audible(): boolean;

	function prefs_change_workspace_name(i: number, name: string): void;

	function prefs_get_action_double_click_titlebar(): GDesktopEnums.TitlebarAction;

	function prefs_get_action_middle_click_titlebar(): GDesktopEnums.TitlebarAction;

	function prefs_get_action_right_click_titlebar(): GDesktopEnums.TitlebarAction;

	function prefs_get_attach_modal_dialogs(): boolean;

	function prefs_get_auto_maximize(): boolean;

	function prefs_get_auto_raise(): boolean;

	function prefs_get_auto_raise_delay(): number;

	function prefs_get_button_layout(): ButtonLayout;

	function prefs_get_center_new_windows(): boolean;

	function prefs_get_check_alive_timeout(): number;

	function prefs_get_compositing_manager(): boolean;

	function prefs_get_cursor_size(): number;

	function prefs_get_cursor_theme(): string;

	function prefs_get_disable_workarounds(): boolean;

	function prefs_get_drag_threshold(): number;

	function prefs_get_draggable_border_width(): number;

	function prefs_get_dynamic_workspaces(): boolean;

	function prefs_get_edge_tiling(): boolean;

	function prefs_get_focus_change_on_pointer_rest(): boolean;

	function prefs_get_focus_mode(): GDesktopEnums.FocusMode;

	function prefs_get_focus_new_windows(): GDesktopEnums.FocusNewWindows;

	function prefs_get_force_fullscreen(): boolean;

	function prefs_get_gnome_accessibility(): boolean;

	function prefs_get_gnome_animations(): boolean;

	function prefs_get_keybinding_action(name: string): KeyBindingAction;

	function prefs_get_mouse_button_menu(): number;

	function prefs_get_mouse_button_mods(): VirtualModifier;

	function prefs_get_mouse_button_resize(): number;

	function prefs_get_num_workspaces(): number;

	function prefs_get_raise_on_click(): boolean;

	function prefs_get_show_fallback_app_menu(): boolean;

	function prefs_get_titlebar_font(): Pango.FontDescription;

	function prefs_get_visual_bell(): boolean;

	function prefs_get_visual_bell_type(): GDesktopEnums.VisualBellType;

	function prefs_get_workspace_name(i: number): string;

	function prefs_get_workspaces_only_on_primary(): boolean;

	function prefs_init(): void;

	function prefs_remove_listener(func: PrefsChangedFunc): void;

	function prefs_set_force_fullscreen(whether: boolean): void;

	function prefs_set_num_workspaces(n_workspaces: number): void;

	function prefs_set_show_fallback_app_menu(whether: boolean): void;

	function push_no_msg_prefix(): void;

	/**
	 * Stops Mutter. This tells the event loop to stop processing; it is
	 * rather dangerous to use this because this will leave the user with
	 * no window manager. We generally do this only if, for example, the
	 * session manager asks us to; we assume the session manager knows
	 * what it's talking about.
	 * @param code The success or failure code to return to the calling process.
	 */
	function quit(code: ExitCode): void;

	function rect(x: number, y: number, width: number, height: number): Rectangle;

	/**
	 * Registers mutter with the session manager.  Call this after completing your own
	 * initialization.
	 * 
	 * This should be called when the session manager can safely continue to the
	 * next phase of startup and potentially display windows.
	 */
	function register_with_session(): void;

	function remove_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void;

	function remove_debug_paint_flag(flag: DebugPaintFlag): void;

	/**
	 * Stop printing log messages for the given topic #topic.  Note
	 * that this method does not stack with {@link Meta.add.verbose_topic};
	 * i.e. if two calls to meta_add_verbose_topic() for the same
	 * topic are made, one call to meta_remove_verbose_topic() will
	 * remove it.
	 * @param topic Topic for which logging will be stopped
	 */
	function remove_verbose_topic(topic: DebugTopic): void;

	/**
	 * Starts the process of restarting the compositor. Note that Mutter's
	 * involvement here is to make the restart visually smooth for the
	 * user - it cannot itself safely reexec a program that embeds libmuttter.
	 * So in order for this to work, the compositor must handle two
	 * signals -  MetaDisplay::show-restart-message, to display the
	 * message passed here on the Clutter stage, and ::restart to actually
	 * reexec the compositor.
	 * @param message message to display to the user, or %NULL
	 */
	function restart(message: string | null): void;

	/**
	 * Runs mutter. Call this after completing initialization that doesn't require
	 * an event loop.
	 * @returns mutter's exit status
	 */
	function run(): number;

	/**
	 * Set the value to use for the _GNOME_WM_KEYBINDINGS property. To take
	 * effect, it is necessary to call this function before meta_init().
	 * @param wm_keybindings value for _GNOME_WM_KEYBINDINGS
	 */
	function set_gnome_wm_keybindings(wm_keybindings: string): void;

	/**
	 * Set the value to use for the _NET_WM_NAME property. To take effect,
	 * it is necessary to call this function before meta_init().
	 * @param wm_name value for _NET_WM_NAME
	 */
	function set_wm_name(wm_name: string): void;

	function show_dialog(type: string, message: string, timeout: string, display: string, ok_text: string, cancel_text: string, icon_name: string, transient_for: number, columns: any[], entries: any[]): GLib.Pid;

	function test_init(): void;

	function theme_get_default(): Theme;

	function theme_new(): Theme;

	function topic_real(topic: DebugTopic, format: string): void;

	function unsigned_long_equal(v1: any | null, v2: any | null): number;

	function unsigned_long_hash(v: any | null): number;

	function verbose_real(format: string): void;

	function warning(format: string): void;

	function x11_error_trap_pop(x11_display: X11Display): void;

	function x11_error_trap_pop_with_return(x11_display: X11Display): number;

	function x11_error_trap_push(x11_display: X11Display): void;

	function x11_init_gdk_display(): boolean;

	const CURRENT_TIME: number;

	const DEFAULT_ICON_NAME: string;

	const ICON_HEIGHT: number;

	const ICON_WIDTH: number;

	const MAJOR_VERSION: number;

	const MICRO_VERSION: number;

	const MINI_ICON_HEIGHT: number;

	const MINI_ICON_WIDTH: number;

	const MINOR_VERSION: number;

	const PLUGIN_API_VERSION: number;

	const PRIORITY_BEFORE_REDRAW: number;

	const PRIORITY_PREFS_NOTIFY: number;

	const PRIORITY_REDRAW: number;

	const PRIORITY_RESIZE: number;

	const VIRTUAL_CORE_KEYBOARD_ID: number;

	const VIRTUAL_CORE_POINTER_ID: number;

}