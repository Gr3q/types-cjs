declare namespace imports.gi.XApp {
  
    // https://projects.linuxmint.com/xapp/reference/XAppGtkWindow.html
    // A subclass of GtkWindow that allows additional communication with the window manager.
    class GtkWindow extends imports.gi.Gtk.Window  {
        constructor(options?: Partial<imports.gi.Gtk.WindowOptions>)
    }
}