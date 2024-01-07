declare namespace imports.gi.GObject {

    interface IObject {
        /** added to the Prototype in ui/environment.js! */
        is_finalized(): boolean

        constructor: {
            $gtype: imports.gi.GObject.Type; 
        }

        /**
		 * A convenience function to connect multiple signals at once.
		 * 
		 * The signal specs expected by this function have the form
		 * "modifier::signal_name", where modifier can be one of the following:
		 * - signal: equivalent to g_signal_connect_data (..., NULL, G_CONNECT_DEFAULT)
		 * - object-signal, object_signal: equivalent to g_signal_connect_object (..., G_CONNECT_DEFAULT)
		 * - swapped-signal, swapped_signal: equivalent to g_signal_connect_data (..., NULL, G_CONNECT_SWAPPED)
		 * - swapped_object_signal, swapped-object-signal: equivalent to g_signal_connect_object (..., G_CONNECT_SWAPPED)
		 * - signal_after, signal-after: equivalent to g_signal_connect_data (..., NULL, G_CONNECT_AFTER)
		 * - object_signal_after, object-signal-after: equivalent to g_signal_connect_object (..., G_CONNECT_AFTER)
		 * - swapped_signal_after, swapped-signal-after: equivalent to g_signal_connect_data (..., NULL, G_CONNECT_SWAPPED | G_CONNECT_AFTER)
		 * - swapped_object_signal_after, swapped-object-signal-after: equivalent to g_signal_connect_object (..., G_CONNECT_SWAPPED | G_CONNECT_AFTER)
		 * 
		 * |[<!-- language="C" -->
		 *   menu->toplevel = g_object_connect (g_object_new (GTK_TYPE_WINDOW,
		 * 						   "type", GTK_WINDOW_POPUP,
		 * 						   "child", menu,
		 * 						   NULL),
		 * 				     "signal::event", gtk_menu_window_event, menu,
		 * 				     "signal::size_request", gtk_menu_window_size_request, menu,
		 * 				     "signal::destroy", gtk_widget_destroyed, &menu->toplevel,
		 * 				     NULL);
		 * ]|
		 * @param signal_spec the spec for the first signal
		 * @returns #object
		 */
		connect(signal_spec: string): Object;
		/**
		 * A convenience function to disconnect multiple signals at once.
		 * 
		 * The signal specs expected by this function have the form
		 * "any_signal", which means to disconnect any signal with matching
		 * callback and data, or "any_signal::signal_name", which only
		 * disconnects the signal named "signal_name".
		 * @param id returned ID of the connect function
		 */
		disconnect(id: number): void;
    }
}