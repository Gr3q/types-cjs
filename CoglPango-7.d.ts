/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.CoglPango {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Renderer} instead.
	 */
	interface IRenderer {

	}

	type RendererInitOptionsMixin = Pango.RendererInitOptions
	export interface RendererInitOptions extends RendererInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Renderer} instead.
	 */
	type RendererMixin = IRenderer & Pango.Renderer;

	interface Renderer extends RendererMixin {}

	class Renderer {
		public constructor(options?: Partial<RendererInitOptions>);
	}

	type FontMap = PangoCairo.FontMap;

	/**
	 * This updates any internal glyph cache textures as necessary to be
	 * able to render the given #layout.
	 * 
	 * This api should be used to avoid mid-scene modifications of
	 * glyph-cache textures which can lead to undefined rendering results.
	 * @param layout A #PangoLayout
	 */
	function ensure_glyph_cache_for_layout(layout: Pango.Layout): void;

	/**
	 * Clears the glyph cache for #font_map.
	 * @param font_map a {@link FontMap}
	 */
	function font_map_clear_glyph_cache(font_map: FontMap): void;

	/**
	 * Create a #PangoContext for the given #font_map.
	 * @param font_map a {@link FontMap}
	 * @returns the newly created context: free with {@link GObject.unref}.
	 */
	function font_map_create_context(font_map: FontMap): Pango.Context;

	/**
	 * Retrieves the {@link Renderer} for the passed #font_map.
	 * @param font_map a {@link FontMap}
	 * @returns a #PangoRenderer
	 */
	function font_map_get_renderer(font_map: FontMap): Pango.Renderer;

	/**
	 * Retrieves whether the {@link Renderer} used by #font_map will use
	 * mipmapping when rendering the glyphs.
	 * @param font_map a {@link FontMap}
	 * @returns %TRUE if mipmapping is used, %FALSE otherwise.
	 */
	function font_map_get_use_mipmapping(font_map: FontMap): boolean;

	/**
	 * Creates a new font map.
	 * @returns the newly created #PangoFontMap
	 */
	function font_map_new(): Pango.FontMap;

	/**
	 * Sets the resolution for the #font_map. This is a scale factor
	 * between points specified in a #PangoFontDescription and Cogl units.
	 * The default value is %96, meaning that a 10 point font will be 13
	 * units high. (10 * 96. / 72. = 13.3).
	 * @param font_map a {@link FontMap}
	 * @param dpi The resolution in "dots per inch". (Physical inches aren't
	 *       actually involved; the terminology is conventional.)
	 */
	function font_map_set_resolution(font_map: FontMap, dpi: number): void;

	/**
	 * Sets whether the renderer for the passed font map should use
	 * mipmapping when rendering a #PangoLayout.
	 * @param font_map a {@link FontMap}
	 * @param value %TRUE to enable the use of mipmapping
	 */
	function font_map_set_use_mipmapping(font_map: FontMap, value: boolean): void;

	/**
	 * Draws a solidly coloured #layout on the given #framebuffer at (#x,
	 * #y) within the #framebuffer<!-- -->'s current model-view coordinate
	 * space.
	 * @param framebuffer A #CoglFramebuffer to draw too.
	 * @param layout a #PangoLayout
	 * @param x X coordinate to render the layout at
	 * @param y Y coordinate to render the layout at
	 * @param color color to use when rendering the layout
	 */
	function show_layout(framebuffer: Cogl.Framebuffer, layout: Pango.Layout, x: number, y: number, color: Cogl.Color): void;

	/**
	 * Draws a solidly coloured #line on the given #framebuffer at (#x,
	 * #y) within the #framebuffer<!-- -->'s current model-view coordinate
	 * space.
	 * @param framebuffer A #CoglFramebuffer to draw too.
	 * @param line a #PangoLayoutLine
	 * @param x X coordinate to render the line at
	 * @param y Y coordinate to render the line at
	 * @param color color to use when rendering the line
	 */
	function show_layout_line(framebuffer: Cogl.Framebuffer, line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void;

}