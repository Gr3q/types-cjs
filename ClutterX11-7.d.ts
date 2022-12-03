/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.ClutterX11 {
	export interface XInputDeviceInitOptions {}
	interface XInputDevice {}
	class XInputDevice {
		public constructor(options?: Partial<XInputDeviceInitOptions>);
	}

	/**
	 * Return values for the {@link FilterFunc} function.
	 */
	enum FilterReturn {
		/**
		 * The event was not handled, continues the
		 *   processing
		 */
		CONTINUE = 0,
		/**
		 * Native event translated into a Clutter
		 *   event, stops the processing
		 */
		TRANSLATE = 1,
		/**
		 * Remove the event, stops the processing
		 */
		REMOVE = 2
	}

	/**
	 * Filter function for X11 native events.
	 */
	interface FilterFunc {
		/**
		 * Filter function for X11 native events.
		 * @param xev Native X11 event structure
		 * @param cev Clutter event structure
		 * @returns the result of the filtering
		 */
		(xev: xlib.XEvent, cev: Clutter.Event): FilterReturn;
	}

	/**
	 * Adds an event filter function.
	 * @param func a filter function
	 */
	function add_filter(func: FilterFunc): void;
	/**
	 * Retrieves the pointer to the default display.
	 * @returns the default display
	 */
	function get_default_display(): xlib.Display;
	/**
	 * Gets the number of the default X Screen object.
	 * @returns the number of the default screen
	 */
	function get_default_screen(): number;
	/**
	 * Retrieves the root window.
	 * @returns the id of the root window
	 */
	function get_root_window(): xlib.Window;
	/**
	 * Retrieves whether the Clutter X11 backend will create stereo
	 * stages if possible.
	 * @returns %TRUE if stereo stages are used if possible
	 */
	function get_use_stereo_stage(): boolean;
	/**
	 * Removes the given filter function.
	 * @param func a filter function
	 */
	function remove_filter(func: FilterFunc): void;
	/**
	 * Sets the display connection Clutter should use; must be called
	 * before clutter_init(), clutter_init_with_args() or other functions
	 * pertaining Clutter's initialization process.
	 * 
	 * If you are parsing the command line arguments by retrieving Clutter's
	 * #GOptionGroup with clutter_get_option_group() and calling
	 * g_option_context_parse() yourself, you should also call
	 * clutter_x11_set_display() before g_option_context_parse().
	 * @param xdpy pointer to a X display connection.
	 */
	function set_display(xdpy: xlib.Display): void;
	/**
	 * Sets whether the backend object for Clutter stages, will,
	 * if possible, be created with the ability to support stereo drawing
	 * (drawing separate images for the left and right eyes).
	 * 
	 * This function must be called before clutter_init() is called.
	 * During paint callbacks, cogl_framebuffer_is_stereo() can be called
	 * on the framebuffer retrieved by cogl_get_draw_framebuffer() to
	 * determine if stereo support was successfully enabled, and
	 * cogl_framebuffer_set_stereo_mode() to determine which buffers
	 * will be drawn to.
	 * 
	 * Note that this function *does not* cause the stage to be drawn
	 * multiple times with different perspective transformations and thus
	 * appear in 3D, it simply enables individual ClutterActors to paint
	 * different images for the left and and right eye.
	 * @param use_stereo %TRUE if the stereo stages should be used if possible.
	 */
	function set_use_stereo_stage(use_stereo: boolean): void;
	/**
	 * Traps every X error until {@link ClutterX11.untrap.x_errors} is called.
	 */
	function trap_x_errors(): void;
	/**
	 * Removes the X error trap and returns the current status.
	 * @returns the trapped error code, or 0 for success
	 */
	function untrap_x_errors(): number;
}