/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Cogl {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Bitmap} instead.
	 */
	interface IBitmap {
		get_format(): PixelFormat;
		get_height(): number;
		get_rowstride(): number;
		get_width(): number;
	}

	type BitmapInitOptionsMixin = ObjectInitOptions
	export interface BitmapInitOptions extends BitmapInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Bitmap} instead.
	 */
	type BitmapMixin = IBitmap & Object;

	interface Bitmap extends BitmapMixin {}

	class Bitmap {
		public constructor(options?: Partial<BitmapInitOptions>);
		/**
		 * Creates a bitmap using some existing data. The data is not copied
		 * so the application must keep the buffer alive for the lifetime of
		 * the {@link Bitmap}. This can be used for example with
		 * {@link Cogl.Framebuffer.read_pixels_into_bitmap} to read data directly
		 * into an application buffer with the specified rowstride.
		 * @param context A {@link Context}
		 * @param width The width of the bitmap.
		 * @param height The height of the bitmap.
		 * @param format The format of the pixel data.
		 * @param rowstride The rowstride of the bitmap (the number of bytes from
		 *   the start of one row of the bitmap to the next).
		 * @param data A pointer to the data. The bitmap will take ownership of this data.
		 * @returns A new {@link Bitmap}.
		 */
		public static new_for_data(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap;
		/**
		 * Wraps some image data that has been uploaded into a {@link Buffer} as
		 * a #CoglBitmap. The data is not copied in this process.
		 * @param buffer A {@link Buffer} containing image data
		 * @param format The {@link PixelFormat} defining the format of the image data
		 *          in the given #buffer.
		 * @param width The width of the image data in the given #buffer.
		 * @param height The height of the image data in the given #buffer.
		 * @param rowstride The rowstride in bytes of the image data in the given #buffer.
		 * @param offset The offset into the given #buffer to the first pixel that
		 *          should be considered part of the {@link Bitmap}.
		 * @returns a {@link Bitmap} encapsulating the given #buffer.
		 */
		public static new_from_buffer(buffer: any, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap;
		/**
		 * Loads an image file from disk. This function can be safely called from
		 * within a thread.
		 * @param filename the file to load.
		 * @returns a {@link Bitmap} to the new loaded
		 *               image data, or %NULL if loading the image failed.
		 */
		public static new_from_file(filename: string): Bitmap;
		/**
		 * Creates a new {@link Bitmap} with the given width, height and format.
		 * The initial contents of the bitmap are undefined.
		 * 
		 * The data for the bitmap will be stored in a newly created
		 * #CoglPixelBuffer. You can get a pointer to the pixel buffer using
		 * {@link Cogl.Bitmap.get_buffer}. The #CoglBuffer API can then be
		 * used to fill the bitmap with data.
		 * 
		 * <note>Cogl will try its best to provide a hardware array you can
		 * map, write into and effectively do a zero copy upload when creating
		 * a texture from it with cogl_texture_new_from_bitmap(). For various
		 * reasons, such arrays are likely to have a stride larger than width
		 * * bytes_per_pixel. The user must take the stride into account when
		 * writing into it. The stride can be retrieved with
		 * cogl_bitmap_get_rowstride().</note>
		 * @param context A {@link Context}
		 * @param width width of the bitmap in pixels
		 * @param height height of the bitmap in pixels
		 * @param format the format of the pixels the array will store
		 * @returns a {@link PixelBuffer} representing the
		 *               newly created array or %NULL on failure
		 */
		public static new_with_size(context: Context, width: number, height: number, format: PixelFormat): Bitmap;
		public static error_quark(): number;
		/**
		 * Parses an image file enough to extract the width and height
		 * of the bitmap.
		 * @param filename the file to check
		 * @returns %TRUE if the image was successfully parsed
		 * 
		 * return location for the bitmap width, or %NULL
		 * 
		 * return location for the bitmap height, or %NULL
		 */
		public static get_size_from_file(filename: string): [ boolean, number, number ];
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Context} instead.
	 */
	interface IContext {

	}

	type ContextInitOptionsMixin = ObjectInitOptions
	export interface ContextInitOptions extends ContextInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Context} instead.
	 */
	type ContextMixin = IContext & Object;

	interface Context extends ContextMixin {}

	class Context {
		public constructor(options?: Partial<ContextInitOptions>);
		/**
		 * Creates a new {@link Context} which acts as an application sandbox
		 * for any state objects that are allocated.
		 * @param display A {@link Display} pointer
		 * @returns A newly allocated {@link Context}
		 */
		public static new(display?: any | null): Context;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Object} instead.
	 */
	interface IObject {

	}

	type ObjectInitOptionsMixin  = {};
	export interface ObjectInitOptions extends ObjectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Object} instead.
	 */
	type ObjectMixin = IObject;

	interface Object extends ObjectMixin {}

	class Object {
		public constructor(options?: Partial<ObjectInitOptions>);
		/**
		 * Increases the reference count of #object by 1
		 * @param object a {@link Object}
		 * @returns the #object, with its reference count increased
		 */
		public static ref(object?: any | null): any | null;
		/**
		 * Drecreases the reference count of #object by 1; if the reference
		 * count reaches 0, the resources allocated by #object will be freed
		 * @param object a {@link Object}
		 */
		public static unref(object?: any | null): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Offscreen} instead.
	 */
	interface IOffscreen {

	}

	type OffscreenInitOptionsMixin = ObjectInitOptions & FramebufferInitOptions
	export interface OffscreenInitOptions extends OffscreenInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Offscreen} instead.
	 */
	type OffscreenMixin = IOffscreen & Object & Framebuffer;

	interface Offscreen extends OffscreenMixin {}

	class Offscreen {
		public constructor(options?: Partial<OffscreenInitOptions>);
		/**
		 * @deprecated
		 * Use cogl_offscreen_new_with_texture instead.
		 * 
		 * This creates an offscreen buffer object using the given #texture as the
		 * primary color buffer. It doesn't just initialize the contents of the
		 * offscreen buffer with the #texture; they are tightly bound so that
		 * drawing to the offscreen buffer effectivly updates the contents of the
		 * given texture. You don't need to destroy the offscreen buffer before
		 * you can use the #texture again.
		 * 
		 * <note>This only works with low-level {@link Texture} types such as
		 * #CoglTexture2D and not with meta-texture types such as
		 * #CoglTexture2DSliced.</note>
		 * @param texture A {@link Texture} pointer
		 * @returns a newly instantiated {@link Offscreen}
		 *   framebuffer or %NULL if it wasn't possible to create the
		 *   buffer.
		 */
		public static new_to_texture(texture: Texture): Offscreen;
		/**
		 * This creates an offscreen framebuffer object using the given
		 * #texture as the primary color buffer. It doesn't just initialize
		 * the contents of the offscreen buffer with the #texture; they are
		 * tightly bound so that drawing to the offscreen buffer effectively
		 * updates the contents of the given texture. You don't need to
		 * destroy the offscreen buffer before you can use the #texture again.
		 * 
		 * <note>This api only works with low-level {@link Texture} types such as
		 * #CoglTexture2D and not with meta-texture types such as
		 * #CoglTexture2DSliced.</note>
		 * 
		 * The storage for the framebuffer is actually allocated lazily
		 * so this function will never return %NULL to indicate a runtime
		 * error. This means it is still possible to configure the framebuffer
		 * before it is really allocated.
		 * 
		 * Simple applications without full error handling can simply rely on
		 * Cogl to lazily allocate the storage of framebuffers but you should
		 * be aware that if Cogl encounters an error (such as running out of
		 * GPU memory) then your application will simply abort with an error
		 * message. If you need to be able to catch such exceptions at runtime
		 * then you can explicitly allocate your framebuffer when you have
		 * finished configuring it by calling {@link Cogl.Framebuffer.allocate} and
		 * passing in a #GError argument to catch any exceptions.
		 * @param texture A {@link Texture} pointer
		 * @returns a newly instantiated {@link Offscreen}
		 *   framebuffer.
		 */
		public static new_with_texture(texture: Texture): Offscreen;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Onscreen} instead.
	 */
	interface IOnscreen {
		/**
		 * Installs a #callback function that will be called whenever the
		 * window system has lost the contents of a region of the onscreen
		 * buffer and the application should redraw it to repair the buffer.
		 * For example this may happen in a window system without a compositor
		 * if a window that was previously covering up the onscreen window has
		 * been moved causing a region of the onscreen to be exposed.
		 * 
		 * The #callback will be passed a {@link OnscreenDirtyInfo} struct which
		 * decribes a rectangle containing the newly dirtied region. Note that
		 * this may be called multiple times to describe a non-rectangular
		 * region composed of multiple smaller rectangles.
		 * 
		 * The dirty events are separate from %COGL_FRAME_EVENT_SYNC events so
		 * the application should also listen for this event before rendering
		 * the dirty region to ensure that the framebuffer is actually ready
		 * for rendering.
		 * @param callback A callback function to call for dirty events
		 * @param destroy An optional callback to destroy #user_data when the
		 *           #callback is removed or #onscreen is freed.
		 * @returns a {@link OnscreenDirtyClosure} pointer that can be used to
		 *               remove the callback and associated #user_data later.
		 */
		add_dirty_callback(callback: OnscreenDirtyCallback, destroy?: UserDataDestroyCallback | null): OnscreenDirtyClosure;
		/**
		 * Registers a #callback with #onscreen that will be called whenever
		 * the #onscreen framebuffer changes size.
		 * 
		 * The #callback can be removed using
		 * {@link Cogl.Onscreen.remove_resize_callback} passing the returned closure
		 * pointer.
		 * 
		 * <note>Since Cogl automatically updates the viewport of an #onscreen
		 * framebuffer that is resized, a resize callback can also be used to
		 * track when the viewport has been changed automatically by Cogl in
		 * case your application needs more specialized control over the
		 * viewport.</note>
		 * 
		 * <note>A resize callback will only ever be called while dispatching
		 * Cogl events from the system mainloop; so for example during
		 * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
		 * occur while an application might have arbitrary locks held for
		 * example.</note>
		 * @param callback A {@link OnscreenResizeCallback} to call when
		 *            the #onscreen changes size.
		 * @param destroy An optional callback to destroy #user_data
		 *           when the #callback is removed or #onscreen is freed.
		 * @returns a {@link OnscreenResizeClosure} pointer that can be used to
		 *               remove the callback and associated #user_data later.
		 */
		add_resize_callback(callback: OnscreenResizeCallback, destroy?: UserDataDestroyCallback | null): OnscreenResizeClosure;
		/**
		 * Gets the current age of the buffer contents.
		 * 
		 * This function allows applications to query the age of the current
		 * back buffer contents for a {@link Onscreen} as the number of frames
		 * elapsed since the contents were most recently defined.
		 * 
		 * These age values exposes enough information to applications about
		 * how Cogl internally manages back buffers to allow applications to
		 * re-use the contents of old frames and minimize how much must be
		 * redrawn for the next frame.
		 * 
		 * The back buffer contents can either be reported as invalid (has an
		 * age of 0) or it may be reported to be the same contents as from n
		 * frames prior to the current frame.
		 * 
		 * The queried value remains valid until the next buffer swap.
		 * 
		 * <note>One caveat is that under X11 the buffer age does not reflect
		 * changes to buffer contents caused by the window systems. X11
		 * applications must track Expose events to determine what buffer
		 * regions need to additionally be repaired each frame.</note>
		 * 
		 * The recommended way to take advantage of this buffer age api is to
		 * build up a circular buffer of length 3 for tracking damage regions
		 * over the last 3 frames and when starting a new frame look at the
		 * age of the buffer and combine the damage regions for the current
		 * frame with the damage regions of previous #age frames so you know
		 * everything that must be redrawn to update the old contents for the
		 * new frame.
		 * 
		 * <note>If the system doesn't not support being able to track the age
		 * of back buffers then this function will always return 0 which
		 * implies that the contents are undefined.</note>
		 * 
		 * <note>The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
		 * explicitly checked to determine if Cogl is currently tracking the
		 * age of #CoglOnscreen back buffer contents. If this feature is
		 * missing then this function will always return 0.</note>
		 * @returns The age of the buffer contents or 0 when the buffer
		 *               contents are undefined.
		 */
		get_buffer_age(): number;
		/**
		 * Gets the value of the framebuffers frame counter. This is
		 * a counter that increases by one each time
		 * {@link Cogl.Onscreen.swap_buffers} or cogl_onscreen_swap_region()
		 * is called.
		 * @returns the current frame counter value
		 */
		get_frame_counter(): number;
		/**
		 * Lets you query whether #onscreen has been marked as resizable via
		 * the {@link Cogl.Onscreen.set_resizable} api.
		 * 
		 * By default, if possible, a #onscreen will be created by Cogl
		 * as non resizable, but it is not guaranteed that this is always
		 * possible for all window systems.
		 * 
		 * <note>If cogl_onscreen_set_resizable(#onscreen, %TRUE) has been
		 * previously called then this function will return %TRUE, but it's
		 * possible that the current windowing system being used does not
		 * support window resizing (consider fullscreen windows on a phone or
		 * a TV). This function is not aware of whether resizing is truly
		 * meaningful with your window system, only whether the #onscreen has
		 * been marked as resizable.</note>
		 * @returns Returns whether #onscreen has been marked as
		 *               resizable or not.
		 */
		get_resizable(): boolean;
		/**
		 * This requests to make #onscreen invisible to the user.
		 * 
		 * Actually the precise semantics of this function depend on the
		 * window system currently in use, and if you don't have a
		 * multi-windowining system this function may in-fact do nothing.
		 * 
		 * This function does not implicitly allocate the given #onscreen
		 * framebuffer before hiding it.
		 * 
		 * <note>Since Cogl doesn't explicitly track the visibility status of
		 * onscreen framebuffers it wont try to avoid redundant window system
		 * requests e.g. to show an already visible window. This also means
		 * that it's acceptable to alternatively use native APIs to show and
		 * hide windows without confusing Cogl.</note>
		 */
		hide(): void;
		/**
		 * Removes a callback and associated user data that were previously
		 * registered using {@link Cogl.Onscreen.add_dirty_callback}.
		 * 
		 * If a destroy callback was passed to
		 * cogl_onscreen_add_dirty_callback() to destroy the user data then
		 * this will also get called.
		 * @param closure A {@link OnscreenDirtyClosure} returned from
		 *           {@link Cogl.Onscreen.add_dirty_callback}
		 */
		remove_dirty_callback(closure: OnscreenDirtyClosure): void;
		/**
		 * Removes a callback and associated user data that were previously
		 * registered using {@link Cogl.Onscreen.add_frame_callback}.
		 * 
		 * If a destroy callback was passed to
		 * cogl_onscreen_add_frame_callback() to destroy the user data then
		 * this will get called.
		 * @param closure A {@link FrameClosure} returned from
		 *           {@link Cogl.Onscreen.add_frame_callback}
		 */
		remove_frame_callback(closure: FrameClosure): void;
		/**
		 * Removes a resize #callback and #user_data pair that were previously
		 * associated with #onscreen via {@link Cogl.Onscreen.add_resize_callback}.
		 * @param closure An identifier returned from {@link Cogl.Onscreen.add_resize_callback}
		 */
		remove_resize_callback(closure: OnscreenResizeClosure): void;
		/**
		 * Lets you request Cogl to mark an #onscreen framebuffer as
		 * resizable or not.
		 * 
		 * By default, if possible, a #onscreen will be created by Cogl
		 * as non resizable, but it is not guaranteed that this is always
		 * possible for all window systems.
		 * 
		 * <note>Cogl does not know whether marking the #onscreen framebuffer
		 * is truly meaningful for your current window system (consider
		 * applications being run fullscreen on a phone or TV) so this
		 * function may not have any useful effect. If you are running on a
		 * multi windowing system such as X11 or Win32 or OSX then Cogl will
		 * request to the window system that users be allowed to resize the
		 * #onscreen, although it's still possible that some other window
		 * management policy will block this possibility.</note>
		 * 
		 * <note>Whenever an #onscreen framebuffer is resized the viewport
		 * will be automatically updated to match the new size of the
		 * framebuffer with an origin of (0,0). If your application needs more
		 * specialized control of the viewport it will need to register a
		 * resize handler using {@link Cogl.Onscreen.add_resize_callback} so that it
		 * can track when the viewport has been changed automatically.</note>
		 * @param resizable
		 */
		set_resizable(resizable: boolean): void;
		/**
		 * This requests to make #onscreen visible to the user.
		 * 
		 * Actually the precise semantics of this function depend on the
		 * window system currently in use, and if you don't have a
		 * multi-windowining system this function may in-fact do nothing.
		 * 
		 * This function will implicitly allocate the given #onscreen
		 * framebuffer before showing it if it hasn't already been allocated.
		 * 
		 * When using the Wayland winsys calling this will set the surface to
		 * a toplevel type which will make it appear. If the application wants
		 * to set a different type for the surface, it can avoid calling
		 * {@link Cogl.Onscreen.show} and set its own type directly with the Wayland
		 * client API via cogl_wayland_onscreen_get_surface().
		 * 
		 * <note>Since Cogl doesn't explicitly track the visibility status of
		 * onscreen framebuffers it wont try to avoid redundant window system
		 * requests e.g. to show an already visible window. This also means
		 * that it's acceptable to alternatively use native APIs to show and
		 * hide windows without confusing Cogl.</note>
		 */
		show(): void;
		/**
		 * Swaps the current back buffer being rendered too, to the front for display.
		 * 
		 * This function also implicitly discards the contents of the color, depth and
		 * stencil buffers as if {@link Cogl.Framebuffer.discard_buffers} were used. The
		 * significance of the discard is that you should not expect to be able to
		 * start a new frame that incrementally builds on the contents of the previous
		 * frame.
		 * 
		 * <note>It is highly recommended that applications use
		 * cogl_onscreen_swap_buffers_with_damage() instead whenever possible
		 * and also use the cogl_onscreen_get_buffer_age() api so they can
		 * perform incremental updates to older buffers instead of having to
		 * render a full buffer for every frame.</note>
		 */
		swap_buffers(): void;
		/**
		 * Swaps the current back buffer being rendered too, to the front for
		 * display and provides information to any system compositor about
		 * what regions of the buffer have changed (damage) with respect to
		 * the last swapped buffer.
		 * 
		 * This function has the same semantics as
		 * {@link Cogl.Framebuffer.swap_buffers} except that it additionally allows
		 * applications to pass a list of damaged rectangles which may be
		 * passed on to a compositor so that it can minimize how much of the
		 * screen is redrawn in response to this applications newly swapped
		 * front buffer.
		 * 
		 * For example if your application is only animating a small object in
		 * the corner of the screen and everything else is remaining static
		 * then it can help the compositor to know that only the bottom right
		 * corner of your newly swapped buffer has really changed with respect
		 * to your previously swapped front buffer.
		 * 
		 * If #n_rectangles is 0 then the whole buffer will implicitly be
		 * reported as damaged as if cogl_onscreen_swap_buffers() had been
		 * called.
		 * 
		 * This function also implicitly discards the contents of the color,
		 * depth and stencil buffers as if cogl_framebuffer_discard_buffers()
		 * were used. The significance of the discard is that you should not
		 * expect to be able to start a new frame that incrementally builds on
		 * the contents of the previous frame. If you want to perform
		 * incremental updates to older back buffers then please refer to the
		 * cogl_onscreen_get_buffer_age() api.
		 * 
		 * Whenever possible it is recommended that applications use this
		 * function instead of cogl_onscreen_swap_buffers() to improve
		 * performance when running under a compositor.
		 * 
		 * <note>It is highly recommended to use this API in conjunction with
		 * the cogl_onscreen_get_buffer_age() api so that your application can
		 * perform incremental rendering based on old back buffers.</note>
		 * @param rectangles An array of integer 4-tuples representing damaged
		 *              rectangles as (x, y, width, height) tuples.
		 * @param n_rectangles The number of 4-tuples to be read from #rectangles
		 */
		swap_buffers_with_damage(rectangles: number, n_rectangles: number): void;
		/**
		 * Swaps a region of the back buffer being rendered too, to the front for
		 * display.  #rectangles represents the region as array of #n_rectangles each
		 * defined by 4 sequential (x, y, width, height) integers.
		 * 
		 * This function also implicitly discards the contents of the color, depth and
		 * stencil buffers as if {@link Cogl.Framebuffer.discard_buffers} were used. The
		 * significance of the discard is that you should not expect to be able to
		 * start a new frame that incrementally builds on the contents of the previous
		 * frame.
		 * @param rectangles An array of integer 4-tuples representing rectangles as
		 *              (x, y, width, height) tuples.
		 * @param n_rectangles The number of 4-tuples to be read from #rectangles
		 */
		swap_region(rectangles: number, n_rectangles: number): void;
	}

	type OnscreenInitOptionsMixin = ObjectInitOptions & FramebufferInitOptions
	export interface OnscreenInitOptions extends OnscreenInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Onscreen} instead.
	 */
	type OnscreenMixin = IOnscreen & Object & Framebuffer;

	interface Onscreen extends OnscreenMixin {}

	class Onscreen {
		public constructor(options?: Partial<OnscreenInitOptions>);
		/**
		 * Instantiates an "unallocated" {@link Onscreen} framebuffer that may be
		 * configured before later being allocated, either implicitly when
		 * it is first used or explicitly via {@link Cogl.Framebuffer.allocate}.
		 * @param context A {@link Context}
		 * @param width The desired framebuffer width
		 * @param height The desired framebuffer height
		 * @returns A newly instantiated {@link Onscreen} framebuffer
		 */
		public static new(context: Context, width: number, height: number): Onscreen;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Pipeline} instead.
	 */
	interface IPipeline {
		/**
		 * Creates a new pipeline with the configuration copied from the
		 * source pipeline.
		 * 
		 * We would strongly advise developers to always aim to use
		 * {@link Cogl.Pipeline.copy} instead of cogl_pipeline_new() whenever there will
		 * be any similarity between two pipelines. Copying a pipeline helps Cogl
		 * keep track of a pipelines ancestry which we may use to help minimize GPU
		 * state changes.
		 * @returns a pointer to the newly allocated {@link Pipeline}
		 */
		copy(): Pipeline;
		/**
		 * Iterates all the layer indices of the given #pipeline.
		 * @param callback A {@link PipelineLayerCallback} to be
		 *            called for each layer index
		 */
		foreach_layer(callback: PipelineLayerCallback): void;
		get_alpha_test_function(): PipelineAlphaFunc;
		get_alpha_test_reference(): number;
		/**
		 * Retrieves the current pipeline color.
		 * @returns The location to store the color
		 */
		get_color(): Color;
		get_cull_face_mode(): PipelineCullFaceMode;
		/**
		 * The order of the vertices within a primitive specifies whether it
		 * is considered to be front or back facing. This function specifies
		 * which order is considered to be the front
		 * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
		 * primitives with vertices in a counter-clockwise order and
		 * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
		 * %COGL_WINDING_COUNTER_CLOCKWISE.
		 * @returns The #pipeline front face winding
		 * 
		 * Status: Unstable
		 */
		get_front_face_winding(): Winding;
		/**
		 * Retrieves the currently set magnification {@link PipelineFilter} set on
		 * the specified layer. The magnification filter determines how the
		 * layer should be sampled when up-scaled.
		 * 
		 * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
		 * changed using {@link Cogl.Pipeline.set_layer_filters}.
		 * @param layer_index the layer number to change.
		 * @returns The magnification {@link PipelineFilter} for the
		 *               specified layer.
		 */
		get_layer_mag_filter(layer_index: number): PipelineFilter;
		/**
		 * Retrieves the currently set minification {@link PipelineFilter} set on
		 * the specified layer. The miniifcation filter determines how the
		 * layer should be sampled when down-scaled.
		 * 
		 * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
		 * changed using {@link Cogl.Pipeline.set_layer_filters}.
		 * @param layer_index the layer number to change.
		 * @returns The minification {@link PipelineFilter} for the
		 *               specified layer.
		 */
		get_layer_min_filter(layer_index: number): PipelineFilter;
		/**
		 * Gets whether point sprite coordinate generation is enabled for this
		 * texture layer.
		 * @param layer_index the layer number to check.
		 * @returns whether the texture coordinates will be replaced with
		 * point sprite coordinates.
		 */
		get_layer_point_sprite_coords_enabled(layer_index: number): boolean;
		get_layer_texture(layer_index: number): Texture;
		/**
		 * Returns the wrap mode for the 's' coordinate of texture lookups on this
		 * layer.
		 * @param layer_index the layer number to change.
		 * @returns the wrap mode for the 's' coordinate of texture lookups on
		 * this layer.
		 */
		get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode;
		/**
		 * Returns the wrap mode for the 't' coordinate of texture lookups on this
		 * layer.
		 * @param layer_index the layer number to change.
		 * @returns the wrap mode for the 't' coordinate of texture lookups on
		 * this layer.
		 */
		get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode;
		/**
		 * Retrieves the number of layers defined for the given #pipeline
		 * @returns the number of layers
		 */
		get_n_layers(): number;
		get_per_vertex_point_size(): boolean;
		/**
		 * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
		 * used with the vertex buffer API.
		 * @returns the point size of the #pipeline.
		 */
		get_point_size(): number;
		/**
		 * This is used to get an integer representing the uniform with the
		 * name #uniform_name. The integer can be passed to functions such as
		 * {@link Cogl.Pipeline.set_uniform_1f} to set the value of a uniform.
		 * 
		 * This function will always return a valid integer. Ie, unlike
		 * OpenGL, it does not return -1 if the uniform is not available in
		 * this pipeline so it can not be used to test whether uniforms are
		 * present. It is not necessary to set the program on the pipeline
		 * before calling this function.
		 * @param uniform_name The name of a uniform
		 * @returns A integer representing the location of the given uniform.
		 */
		get_uniform_location(uniform_name: string): number;
		/**
		 * Queries what user program has been associated with the given
		 * #pipeline using {@link Cogl.Pipeline.set_user_program}.
		 * @returns The current user program or %NULL.
		 */
		get_user_program(): Handle;
		/**
		 * This function removes a layer from your pipeline
		 * @param layer_index Specifies the layer you want to remove
		 */
		remove_layer(layer_index: number): void;
		/**
		 * Before a primitive is blended with the framebuffer, it goes through an
		 * alpha test stage which lets you discard fragments based on the current
		 * alpha value. This function lets you change the function used to evaluate
		 * the alpha channel, and thus determine which fragments are discarded
		 * and which continue on to the blending stage.
		 * 
		 * The default is %COGL_PIPELINE_ALPHA_FUNC_ALWAYS
		 * @param alpha_func A {@link PipelineAlphaFunc} constant
		 * @param alpha_reference A reference point that the chosen alpha function uses
		 *   to compare incoming fragments to.
		 */
		set_alpha_test_function(alpha_func: PipelineAlphaFunc, alpha_reference: number): void;
		/**
		 * If not already familiar; please refer <link linkend="cogl-Blend-Strings">here</link>
		 * for an overview of what blend strings are, and their syntax.
		 * 
		 * Blending occurs after the alpha test function, and combines fragments with
		 * the framebuffer.
		 * 
		 * Currently the only blend function Cogl exposes is ADD(). So any valid
		 * blend statements will be of the form:
		 * 
		 * |[
		 *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
		 * ]|
		 * 
		 * This is the list of source-names usable as blend factors:
		 * <itemizedlist>
		 *   <listitem><para>SRC_COLOR: The color of the in comming fragment</para></listitem>
		 *   <listitem><para>DST_COLOR: The color of the framebuffer</para></listitem>
		 *   <listitem><para>CONSTANT: The constant set via cogl_pipeline_set_blend_constant()</para></listitem>
		 * </itemizedlist>
		 * 
		 * The source names can be used according to the
		 * <link linkend="cogl-Blend-String-syntax">color-source and factor syntax</link>,
		 * so for example "(1-SRC_COLOR[A])" would be a valid factor, as would
		 * "(CONSTANT[RGB])"
		 * 
		 * These can also be used as factors:
		 * <itemizedlist>
		 *   <listitem>0: (0, 0, 0, 0)</listitem>
		 *   <listitem>1: (1, 1, 1, 1)</listitem>
		 *   <listitem>SRC_ALPHA_SATURATE_FACTOR: (f,f,f,1) where f = MIN(SRC_COLOR[A],1-DST_COLOR[A])</listitem>
		 * </itemizedlist>
		 * 
		 * <note>Remember; all color components are normalized to the range [0, 1]
		 * before computing the result of blending.</note>
		 * 
		 * <example id="cogl-Blend-Strings-blend-unpremul">
		 *   <title>Blend Strings/1</title>
		 *   <para>Blend a non-premultiplied source over a destination with
		 *   premultiplied alpha:</para>
		 *   <programlisting>
		 * "RGB = ADD(SRC_COLOR*(SRC_COLOR[A]), DST_COLOR*(1-SRC_COLOR[A]))"
		 * "A   = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
		 *   </programlisting>
		 * </example>
		 * 
		 * <example id="cogl-Blend-Strings-blend-premul">
		 *   <title>Blend Strings/2</title>
		 *   <para>Blend a premultiplied source over a destination with
		 *   premultiplied alpha</para>
		 *   <programlisting>
		 * "RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
		 *   </programlisting>
		 * </example>
		 * 
		 * The default blend string is:
		 * |[
		 *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
		 * ]|
		 * 
		 * That gives normal alpha-blending when the calculated color for the pipeline
		 * is in premultiplied form.
		 * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>
		 *   describing the desired blend function.
		 * @returns %TRUE if the blend string was successfully parsed, and the
		 *   described blending is supported by the underlying driver/hardware. If
		 *   there was an error, %FALSE is returned and #error is set accordingly (if
		 *   present).
		 */
		set_blend(blend_string: string): boolean;
		/**
		 * When blending is setup to reference a CONSTANT blend factor then
		 * blending will depend on the constant set with this function.
		 * @param constant_color The constant color you want
		 */
		set_blend_constant(constant_color: Color): void;
		/**
		 * Sets the basic color of the pipeline, used when no lighting is enabled.
		 * 
		 * Note that if you don't add any layers to the pipeline then the color
		 * will be blended unmodified with the destination; the default blend
		 * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
		 * semi-transparent red. See {@link Cogl.Color.premultiply}.
		 * 
		 * The default value is (1.0, 1.0, 1.0, 1.0)
		 * @param color The components of the color
		 */
		set_color(color: Color): void;
		/**
		 * Sets the basic color of the pipeline, used when no lighting is enabled.
		 * 
		 * The default value is (1.0, 1.0, 1.0, 1.0)
		 * @param red The red component
		 * @param green The green component
		 * @param blue The blue component
		 * @param alpha The alpha component
		 */
		set_color4f(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Sets the basic color of the pipeline, used when no lighting is enabled.
		 * 
		 * The default value is (0xff, 0xff, 0xff, 0xff)
		 * @param red The red component
		 * @param green The green component
		 * @param blue The blue component
		 * @param alpha The alpha component
		 */
		set_color4ub(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Sets which faces will be culled when drawing. Face culling can be
		 * used to increase efficiency by avoiding drawing faces that would
		 * get overridden. For example, if a model has gaps so that it is
		 * impossible to see the inside then faces which are facing away from
		 * the screen will never be seen so there is no point in drawing
		 * them. This can be acheived by setting the cull face mode to
		 * %COGL_PIPELINE_CULL_FACE_MODE_BACK.
		 * 
		 * Face culling relies on the primitives being drawn with a specific
		 * order to represent which faces are facing inside and outside the
		 * model. This order can be specified by calling
		 * {@link Cogl.Pipeline.set_front_face_winding}.
		 * 
		 * Status: Unstable
		 * @param cull_face_mode The new mode to set
		 */
		set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void;
		/**
		 * The order of the vertices within a primitive specifies whether it
		 * is considered to be front or back facing. This function specifies
		 * which order is considered to be the front
		 * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
		 * primitives with vertices in a counter-clockwise order and
		 * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
		 * %COGL_WINDING_COUNTER_CLOCKWISE.
		 * 
		 * Status: Unstable
		 * @param front_winding the winding order
		 */
		set_front_face_winding(front_winding: Winding): void;
		/**
		 * If not already familiar; you can refer
		 * <link linkend="cogl-Blend-Strings">here</link> for an overview of what blend
		 * strings are and there syntax.
		 * 
		 * These are all the functions available for texture combining:
		 * <itemizedlist>
		 *   <listitem>REPLACE(arg0) = arg0</listitem>
		 *   <listitem>MODULATE(arg0, arg1) = arg0 x arg1</listitem>
		 *   <listitem>ADD(arg0, arg1) = arg0 + arg1</listitem>
		 *   <listitem>ADD_SIGNED(arg0, arg1) = arg0 + arg1 - 0.5</listitem>
		 *   <listitem>INTERPOLATE(arg0, arg1, arg2) = arg0 x arg2 + arg1 x (1 - arg2)</listitem>
		 *   <listitem>SUBTRACT(arg0, arg1) = arg0 - arg1</listitem>
		 *   <listitem>
		 *     <programlisting>
		 *  DOT3_RGB(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
		 *                              (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
		 *                              (arg0[B] - 0.5)) * (arg1[B] - 0.5))
		 *     </programlisting>
		 *   </listitem>
		 *   <listitem>
		 *     <programlisting>
		 *  DOT3_RGBA(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
		 *                               (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
		 *                               (arg0[B] - 0.5)) * (arg1[B] - 0.5))
		 *     </programlisting>
		 *   </listitem>
		 * </itemizedlist>
		 * 
		 * Refer to the
		 * <link linkend="cogl-Blend-String-syntax">color-source syntax</link> for
		 * describing the arguments. The valid source names for texture combining
		 * are:
		 * <variablelist>
		 *   <varlistentry>
		 *     <term>TEXTURE</term>
		 *     <listitem>Use the color from the current texture layer</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>TEXTURE_0, TEXTURE_1, etc</term>
		 *     <listitem>Use the color from the specified texture layer</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>CONSTANT</term>
		 *     <listitem>Use the color from the constant given with
		 *     {@link Cogl.Pipeline.set_layer_combine_constant}</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>PRIMARY</term>
		 *     <listitem>Use the color of the pipeline as set with
		 *     cogl_pipeline_set_color()</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>PREVIOUS</term>
		 *     <listitem>Either use the texture color from the previous layer, or
		 *     if this is layer 0, use the color of the pipeline as set with
		 *     cogl_pipeline_set_color()</listitem>
		 *   </varlistentry>
		 * </variablelist>
		 * 
		 * <refsect2 id="cogl-Layer-Combine-Examples">
		 *   <title>Layer Combine Examples</title>
		 *   <para>This is effectively what the default blending is:</para>
		 *   <informalexample><programlisting>
		 *   RGBA = MODULATE (PREVIOUS, TEXTURE)
		 *   </programlisting></informalexample>
		 *   <para>This could be used to cross-fade between two images, using
		 *   the alpha component of a constant as the interpolator. The constant
		 *   color is given by calling
		 *   cogl_pipeline_set_layer_combine_constant().</para>
		 *   <informalexample><programlisting>
		 *   RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
		 *   </programlisting></informalexample>
		 * </refsect2>
		 * 
		 * <note>You can't give a multiplication factor for arguments as you can
		 * with blending.</note>
		 * @param layer_index Specifies the layer you want define a combine function for
		 * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>
		 *    describing the desired texture combine function.
		 * @returns %TRUE if the blend string was successfully parsed, and the
		 *   described texture combining is supported by the underlying driver and
		 *   or hardware. On failure, %FALSE is returned and #error is set
		 */
		set_layer_combine(layer_index: number, blend_string: string): boolean;
		/**
		 * When you are using the 'CONSTANT' color source in a layer combine
		 * description then you can use this function to define its value.
		 * @param layer_index Specifies the layer you want to specify a constant used
		 *               for texture combining
		 * @param constant The constant color you want
		 */
		set_layer_combine_constant(layer_index: number, constant: Color): void;
		/**
		 * Changes the decimation and interpolation filters used when a texture is
		 * drawn at other scales than 100%.
		 * 
		 * <note>It is an error to pass anything other than
		 * %COGL_PIPELINE_FILTER_NEAREST or %COGL_PIPELINE_FILTER_LINEAR as
		 * magnification filters since magnification doesn't ever need to
		 * reference values stored in the mipmap chain.</note>
		 * @param layer_index the layer number to change.
		 * @param min_filter the filter used when scaling a texture down.
		 * @param mag_filter the filter used when magnifying a texture.
		 */
		set_layer_filters(layer_index: number, min_filter: PipelineFilter, mag_filter: PipelineFilter): void;
		/**
		 * This function lets you set a matrix that can be used to e.g. translate
		 * and rotate a single layer of a pipeline used to fill your geometry.
		 * @param layer_index the index for the layer inside #pipeline
		 * @param matrix the transformation matrix for the layer
		 */
		set_layer_matrix(layer_index: number, matrix: Matrix): void;
		set_layer_max_mipmap_level(layer: number, max_level: number): void;
		/**
		 * Sets the texture for this layer to be the default texture for the
		 * given type. The default texture is a 1x1 pixel white texture.
		 * 
		 * This function is mostly useful if you want to create a base
		 * pipeline that you want to create multiple copies from using
		 * {@link Cogl.Pipeline.copy}. In that case this function can be used to
		 * specify the texture type so that any pipeline copies can share the
		 * internal texture type state for efficiency.
		 * @param layer_index The layer number to modify
		 */
		set_layer_null_texture(layer_index: number): void;
		/**
		 * When rendering points, if #enable is %TRUE then the texture
		 * coordinates for this layer will be replaced with coordinates that
		 * vary from 0.0 to 1.0 across the primitive. The top left of the
		 * point will have the coordinates 0.0,0.0 and the bottom right will
		 * have 1.0,1.0. If #enable is %FALSE then the coordinates will be
		 * fixed for the entire point.
		 * @param layer_index the layer number to change.
		 * @param enable whether to enable point sprite coord generation.
		 * @returns %TRUE if the function succeeds, %FALSE otherwise.
		 */
		set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean;
		set_layer_texture(layer_index: number, texture: Texture): void;
		/**
		 * Sets the wrap mode for all three coordinates of texture lookups on
		 * this layer. This is equivalent to calling
		 * {@link Cogl.Pipeline.set_layer_wrap_mode_s} and
		 * cogl_pipeline_set_layer_wrap_mode_t() separately.
		 * @param layer_index the layer number to change.
		 * @param mode the new wrap mode
		 */
		set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void;
		/**
		 * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
		 * @param layer_index the layer number to change.
		 * @param mode the new wrap mode
		 */
		set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void;
		/**
		 * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
		 * @param layer_index the layer number to change.
		 * @param mode the new wrap mode
		 */
		set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void;
		/**
		 * Sets whether to use a per-vertex point size or to use the value set
		 * by {@link Cogl.Pipeline.set_point_size}. If per-vertex point size is
		 * enabled then the point size can be set for an individual point
		 * either by drawing with a {@link Attribute} with the name
		 * ‘cogl_point_size_in’ or by writing to the GLSL builtin
		 * ‘cogl_point_size_out’ from a vertex shader snippet.
		 * 
		 * If per-vertex point size is enabled and this attribute is not used
		 * and cogl_point_size_out is not written to then the results are
		 * undefined.
		 * @param enable whether to enable per-vertex point size
		 * @returns %TRUE if the change suceeded or %FALSE otherwise
		 */
		set_per_vertex_point_size(enable: boolean): boolean;
		/**
		 * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
		 * used with the attribute buffer API. Note that typically the GPU
		 * will only support a limited minimum and maximum range of point
		 * sizes. If the chosen point size is outside that range then the
		 * nearest value within that range will be used instead. The size of a
		 * point is in screen space so it will be the same regardless of any
		 * transformations.
		 * 
		 * If the point size is set to 0.0 then drawing points with the
		 * pipeline will have undefined results. This is the default value so
		 * if an application wants to draw points it must make sure to use a
		 * pipeline that has an explicit point size set on it.
		 * @param point_size the new point size.
		 */
		set_point_size(point_size: number): void;
		/**
		 * Sets a new value for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given value will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling {@link Cogl.Pipeline.get_uniform_location}.
		 * 
		 * This function should be used to set uniforms that are of type
		 * float. It can also be used to set a single member of a float array
		 * uniform.
		 * @param uniform_location The uniform's location identifier
		 * @param value The new value for the uniform
		 */
		set_uniform_1f(uniform_location: number, value: number): void;
		/**
		 * Sets a new value for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given value will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling {@link Cogl.Pipeline.get_uniform_location}.
		 * 
		 * This function should be used to set uniforms that are of type
		 * int. It can also be used to set a single member of a int array
		 * uniform or a sampler uniform.
		 * @param uniform_location The uniform's location identifier
		 * @param value The new value for the uniform
		 */
		set_uniform_1i(uniform_location: number, value: number): void;
		/**
		 * Sets new values for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given values will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling {@link Cogl.Pipeline.get_uniform_location}.
		 * 
		 * This function can be used to set any floating point type uniform,
		 * including float arrays and float vectors. For example, to set a
		 * single vec4 uniform you would use 4 for #n_components and 1 for
		 * #count. To set an array of 8 float values, you could use 1 for
		 * #n_components and 8 for #count.
		 * @param uniform_location The uniform's location identifier
		 * @param n_components The number of components in the corresponding uniform's type
		 * @param count The number of values to set
		 * @param value Pointer to the new values to set
		 */
		set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void;
		/**
		 * Sets new values for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given values will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling {@link Cogl.Pipeline.get_uniform_location}.
		 * 
		 * This function can be used to set any integer type uniform,
		 * including int arrays and int vectors. For example, to set a single
		 * ivec4 uniform you would use 4 for #n_components and 1 for
		 * #count. To set an array of 8 int values, you could use 1 for
		 * #n_components and 8 for #count.
		 * @param uniform_location The uniform's location identifier
		 * @param n_components The number of components in the corresponding uniform's type
		 * @param count The number of values to set
		 * @param value Pointer to the new values to set
		 */
		set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void;
		/**
		 * Sets new values for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given values will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling {@link Cogl.Pipeline.get_uniform_location}.
		 * 
		 * This function can be used to set any matrix type uniform, including
		 * matrix arrays. For example, to set a single mat4 uniform you would
		 * use 4 for #dimensions and 1 for #count. To set an array of 8
		 * mat3 values, you could use 3 for #dimensions and 8 for #count.
		 * 
		 * If #transpose is %FALSE then the matrix is expected to be in
		 * column-major order or if it is %TRUE then the matrix is in
		 * row-major order. You can pass a {@link Matrix} by calling by passing
		 * the result of cogl_matrix_get_array() in #value and setting
		 * #transpose to %FALSE.
		 * @param uniform_location The uniform's location identifier
		 * @param dimensions The size of the matrix
		 * @param count The number of values to set
		 * @param transpose Whether to transpose the matrix
		 * @param value Pointer to the new values to set
		 */
		set_uniform_matrix(uniform_location: number, dimensions: number, count: number, transpose: boolean, value: number): void;
		/**
		 * Associates a linked CoglProgram with the given pipeline so that the
		 * program can take full control of vertex and/or fragment processing.
		 * 
		 * This is an example of how it can be used to associate an ARBfp
		 * program with a {@link Pipeline}:
		 * |[
		 * CoglHandle shader;
		 * CoglHandle program;
		 * CoglPipeline *pipeline;
		 * 
		 * shader = cogl_create_shader (COGL_SHADER_TYPE_FRAGMENT);
		 * cogl_shader_source (shader,
		 *                     "!!ARBfp1.0\n"
		 *                     "MOV result.color,fragment.color;\n"
		 *                     "END\n");
		 * 
		 * program = cogl_create_program ();
		 * cogl_program_attach_shader (program, shader);
		 * cogl_program_link (program);
		 * 
		 * pipeline = cogl_pipeline_new ();
		 * cogl_pipeline_set_user_program (pipeline, program);
		 * 
		 * cogl_set_source_color4ub (0xff, 0x00, 0x00, 0xff);
		 * cogl_rectangle (0, 0, 100, 100);
		 * ]|
		 * 
		 * It is possibly worth keeping in mind that this API is not part of
		 * the long term design for how we want to expose shaders to Cogl
		 * developers (We are planning on deprecating the cogl_program and
		 * cogl_shader APIs in favour of a "snippet" framework) but in the
		 * meantime we hope this will handle most practical GLSL and ARBfp
		 * requirements.
		 * @param program A {@link Handle} to a linked CoglProgram
		 */
		set_user_program(program: Handle): void;
	}

	type PipelineInitOptionsMixin = ObjectInitOptions
	export interface PipelineInitOptions extends PipelineInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Pipeline} instead.
	 */
	type PipelineMixin = IPipeline & Object;

	interface Pipeline extends PipelineMixin {}

	class Pipeline {
		public constructor(options?: Partial<PipelineInitOptions>);
		/**
		 * Allocates and initializes a default simple pipeline that will color
		 * a primitive white.
		 * @param context a {@link Context}
		 * @returns a pointer to a new {@link Pipeline}
		 */
		public static new(context: Context): Pipeline;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2D} instead.
	 */
	interface ITexture2D {
		egl_image_external_alloc_finish(user_data?: any | null): void;
		egl_image_external_bind(): void;
	}

	type Texture2DInitOptionsMixin = ObjectInitOptions & TextureInitOptions
	export interface Texture2DInitOptions extends Texture2DInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2D} instead.
	 */
	type Texture2DMixin = ITexture2D & Object & Texture;

	interface Texture2D extends Texture2DMixin {}

	class Texture2D {
		public constructor(options?: Partial<Texture2DInitOptions>);
		/**
		 * Creates a low-level {@link Texture2D} texture based on data residing
		 * in a #CoglBitmap.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call {@link Cogl.Texture.allocate} to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is being used and can optimize how it is allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * @param bitmap A {@link Bitmap}
		 * @returns A newly allocated {@link Texture2D}
		 */
		public static new_from_bitmap(bitmap: Bitmap): Texture2D;
		/**
		 * Creates a low-level {@link Texture2D} texture based on data residing
		 * in memory.
		 * 
		 * <note>This api will always immediately allocate GPU memory for the
		 * texture and upload the given data so that the #data pointer does
		 * not need to remain valid once this function returns. This means it
		 * is not possible to configure the texture before it is allocated. If
		 * you do need to configure the texture before allocation (to specify
		 * constraints on the internal format for example) then you can
		 * instead create a #CoglBitmap for your data and use
		 * {@link Cogl.Texture.2d_new_from_bitmap} or use
		 * cogl_texture_2d_new_with_size() and then upload data using
		 * cogl_texture_set_data()</note>
		 * @param ctx A {@link Context}
		 * @param width width of texture in pixels
		 * @param height height of texture in pixels
		 * @param format the {@link PixelFormat} the buffer is stored in in RAM
		 * @param rowstride the memory offset in bytes between the starts of
		 *    scanlines in #data. A value of 0 will make Cogl automatically
		 *    calculate #rowstride from #width and #format.
		 * @param data pointer the memory region where the source buffer resides
		 * @returns A newly allocated {@link Texture2D}, or if
		 *          the size is not supported (because it is too large or a
		 *          non-power-of-two size that the hardware doesn't support)
		 *          it will return %NULL and set #error.
		 */
		public static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D;
		public static new_from_egl_image_external(ctx: Context, width: number, height: number, alloc: Texture2DEGLImageExternalAlloc): Texture2D;
		/**
		 * Creates a low-level {@link Texture2D} texture from an image file.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call {@link Cogl.Texture.allocate} to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is being used and can optimize how it is allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * @param ctx A {@link Context}
		 * @param filename the file to load
		 * @returns A newly created {@link Texture2D} or %NULL on failure
		 *               and #error will be updated.
		 */
		public static new_from_file(ctx: Context, filename: string): Texture2D;
		/**
		 * Creates a low-level {@link Texture2D} texture with a given #width and
		 * #height that your GPU can texture from directly.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call {@link Cogl.Texture.allocate} to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is being used and can optimize how it is allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * @param ctx A {@link Context}
		 * @param width Width of the texture to allocate
		 * @param height Height of the texture to allocate
		 * @returns A new {@link Texture2D} object with no storage yet allocated.
		 */
		public static new_with_size(ctx: Context, width: number, height: number): Texture2D;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2DSliced} instead.
	 */
	interface ITexture2DSliced {

	}

	type Texture2DSlicedInitOptionsMixin = ObjectInitOptions & TextureInitOptions
	export interface Texture2DSlicedInitOptions extends Texture2DSlicedInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2DSliced} instead.
	 */
	type Texture2DSlicedMixin = ITexture2DSliced & Object & Texture;

	interface Texture2DSliced extends Texture2DSlicedMixin {}

	class Texture2DSliced {
		public constructor(options?: Partial<Texture2DSlicedInitOptions>);
		/**
		 * Creates a new {@link Texture2DSliced} texture based on data residing
		 * in a bitmap.
		 * 
		 * A #CoglTexture2DSliced may internally be comprised of 1 or more
		 * #CoglTexture2D textures depending on GPU limitations.  For example
		 * if the GPU only supports power-of-two sized textures then a sliced
		 * texture will turn a non-power-of-two size into a combination of
		 * smaller power-of-two sized textures. If the requested texture size
		 * is larger than is supported by the hardware then the texture will
		 * be sliced into smaller textures that can be accessed by the
		 * hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call {@link Cogl.Texture.allocate} to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * later due to impossible slicing constraints if a negative
		 * #max_waste value is given. If the given virtual texture size is
		 * larger than is supported by the hardware but slicing is disabled
		 * the texture size would be too large to handle.</note>
		 * @param bmp A {@link Bitmap}
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @returns A newly created {@link Texture2DSliced}
		 *               or %NULL on failure and #error will be updated.
		 */
		public static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;
		/**
		 * Creates a new {@link Texture2DSliced} texture based on data residing
		 * in memory.
		 * 
		 * A #CoglTexture2DSliced may internally be comprised of 1 or more
		 * #CoglTexture2D textures depending on GPU limitations.  For example
		 * if the GPU only supports power-of-two sized textures then a sliced
		 * texture will turn a non-power-of-two size into a combination of
		 * smaller power-of-two sized textures. If the requested texture size
		 * is larger than is supported by the hardware then the texture will
		 * be sliced into smaller textures that can be accessed by the
		 * hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * <note>This api will always immediately allocate GPU memory for all
		 * the required texture slices and upload the given data so that the
		 * #data pointer does not need to remain valid once this function
		 * returns. This means it is not possible to configure the texture
		 * before it is allocated. If you do need to configure the texture
		 * before allocation (to specify constraints on the internal format
		 * for example) then you can instead create a #CoglBitmap for your
		 * data and use {@link Cogl.Texture.2d_sliced_new_from_bitmap} or use
		 * cogl_texture_2d_sliced_new_with_size() and then upload data using
		 * cogl_texture_set_data()</note>
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * due to impossible slicing constraints if a negative #max_waste
		 * value is given. If the given virtual texture size is larger than is
		 * supported by the hardware but slicing is disabled the texture size
		 * would be too large to handle.</note>
		 * @param ctx A {@link Context}
		 * @param width width of texture in pixels
		 * @param height height of texture in pixels
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @param format the {@link PixelFormat} the buffer is stored in in RAM
		 * @param rowstride the memory offset in bytes between the start of each
		 *    row in #data. A value of 0 will make Cogl automatically
		 *    calculate #rowstride from #width and #format.
		 * @param data pointer the memory region where the source buffer resides
		 * @returns A newly created {@link Texture2DSliced}
		 *               or %NULL on failure and #error will be updated.
		 */
		public static new_from_data(ctx: Context, width: number, height: number, max_waste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced;
		/**
		 * Creates a {@link Texture2DSliced} from an image file.
		 * 
		 * A #CoglTexture2DSliced may internally be comprised of 1 or more
		 * #CoglTexture2D textures depending on GPU limitations.  For example
		 * if the GPU only supports power-of-two sized textures then a sliced
		 * texture will turn a non-power-of-two size into a combination of
		 * smaller power-of-two sized textures. If the requested texture size
		 * is larger than is supported by the hardware then the texture will
		 * be sliced into smaller textures that can be accessed by the
		 * hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call {@link Cogl.Texture.allocate} to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * later due to impossible slicing constraints if a negative
		 * #max_waste value is given. If the given virtual texture size is
		 * larger than is supported by the hardware but slicing is disabled
		 * the texture size would be too large to handle.</note>
		 * @param ctx A {@link Context}
		 * @param filename the file to load
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @returns A newly created {@link Texture2DSliced}
		 *               or %NULL on failure and #error will be updated.
		 */
		public static new_from_file(ctx: Context, filename: string, max_waste: number): Texture2DSliced;
		/**
		 * Creates a {@link Texture2DSliced} that may internally be comprised of
		 * 1 or more #CoglTexture2D textures depending on GPU limitations.
		 * For example if the GPU only supports power-of-two sized textures
		 * then a sliced texture will turn a non-power-of-two size into a
		 * combination of smaller power-of-two sized textures. If the
		 * requested texture size is larger than is supported by the hardware
		 * then the texture will be sliced into smaller textures that can be
		 * accessed by the hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call {@link Cogl.Texture.allocate} to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * later due to impossible slicing constraints if a negative
		 * #max_waste value is given. If the given virtual texture size size
		 * is larger than is supported by the hardware but slicing is disabled
		 * the texture size would be too large to handle.</note>
		 * @param ctx A {@link Context}
		 * @param width The virtual width of your sliced texture.
		 * @param height The virtual height of your sliced texture.
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @returns A new {@link Texture2DSliced} object with no storage
		 *          allocated yet.
		 */
		public static new_with_size(ctx: Context, width: number, height: number, max_waste: number): Texture2DSliced;
	}

	export interface ColorInitOptions {}
	/**
	 * A structure for holding a color definition. The contents of
	 * the CoglColor structure are private and should never by accessed
	 * directly.
	 */
	interface Color {}
	class Color {
		public constructor(options?: Partial<ColorInitOptions>);
		/**
		 * Creates a new (empty) color
		 * @returns a newly-allocated {@link Color}. Use {@link Cogl.Color.free}
		 *   to free the allocated resources
		 */
		public static new(): Color;
		/**
		 * Compares two {@link Color}<!-- -->s and checks if they are the same.
		 * 
		 * This function can be passed to {@link G.hash_table_new} as the #key_equal_func
		 * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
		 * @param v1 a {@link Color}
		 * @param v2 a {@link Color}
		 * @returns %TRUE if the two colors are the same.
		 */
		public static equal(v1?: any | null, v2?: any | null): boolean;
		/**
		 * Converts a color expressed in HLS (hue, luminance and saturation)
		 * values into a {@link Color}.
		 * @param hue hue value, in the 0 .. 360 range
		 * @param saturation saturation value, in the 0 .. 1 range
		 * @param luminance luminance value, in the 0 .. 1 range
		 * @returns return location for a {@link Color}
		 */
		public static init_from_hsl(hue: number, saturation: number, luminance: number): Color;
		public readonly private_member_red: number;
		public readonly private_member_green: number;
		public readonly private_member_blue: number;
		public readonly private_member_alpha: number;
		public readonly private_member_padding0: number;
		public readonly private_member_padding1: number;
		public readonly private_member_padding2: number;
		/**
		 * Creates a copy of #color
		 * @returns a newly-allocated {@link Color}. Use {@link Cogl.Color.free}
		 *   to free the allocate resources
		 */
		public copy(): Color;
		/**
		 * Frees the resources allocated by {@link Cogl.Color.new} and cogl_color_copy()
		 */
		public free(): void;
		/**
		 * Retrieves the alpha channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the alpha channel of the passed color
		 */
		public get_alpha(): number;
		/**
		 * Retrieves the alpha channel of #color as a byte value
		 * between 0 and 255
		 * @returns the alpha channel of the passed color
		 */
		public get_alpha_byte(): number;
		/**
		 * Retrieves the alpha channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the alpha channel of the passed color
		 */
		public get_alpha_float(): number;
		/**
		 * Retrieves the blue channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the blue channel of the passed color
		 */
		public get_blue(): number;
		/**
		 * Retrieves the blue channel of #color as a byte value
		 * between 0 and 255
		 * @returns the blue channel of the passed color
		 */
		public get_blue_byte(): number;
		/**
		 * Retrieves the blue channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the blue channel of the passed color
		 */
		public get_blue_float(): number;
		/**
		 * Retrieves the green channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the green channel of the passed color
		 */
		public get_green(): number;
		/**
		 * Retrieves the green channel of #color as a byte value
		 * between 0 and 255
		 * @returns the green channel of the passed color
		 */
		public get_green_byte(): number;
		/**
		 * Retrieves the green channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the green channel of the passed color
		 */
		public get_green_float(): number;
		/**
		 * Retrieves the red channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the red channel of the passed color
		 */
		public get_red(): number;
		/**
		 * Retrieves the red channel of #color as a byte value
		 * between 0 and 255
		 * @returns the red channel of the passed color
		 */
		public get_red_byte(): number;
		/**
		 * Retrieves the red channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the red channel of the passed color
		 */
		public get_red_float(): number;
		/**
		 * Sets the values of the passed channels into a {@link Color}
		 * @param red value of the red channel, between 0 and 1.0
		 * @param green value of the green channel, between 0 and 1.0
		 * @param blue value of the blue channel, between 0 and 1.0
		 * @param alpha value of the alpha channel, between 0 and 1.0
		 */
		public init_from_4f(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Sets the values of the passed channels into a {@link Color}
		 * @param color_array a pointer to an array of 4 float color components
		 */
		public init_from_4fv(color_array: number): void;
		/**
		 * Sets the values of the passed channels into a {@link Color}.
		 * @param red value of the red channel, between 0 and 255
		 * @param green value of the green channel, between 0 and 255
		 * @param blue value of the blue channel, between 0 and 255
		 * @param alpha value of the alpha channel, between 0 and 255
		 */
		public init_from_4ub(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Converts a non-premultiplied color to a pre-multiplied color. For
		 * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
		 * and (0.5, 0, 0, 0.5) when premultiplied.
		 */
		public premultiply(): void;
		/**
		 * Sets the alpha channel of #color to #alpha.
		 * @param alpha a float value between 0.0f and 1.0f
		 */
		public set_alpha(alpha: number): void;
		/**
		 * Sets the alpha channel of #color to #alpha.
		 * @param alpha a byte value between 0 and 255
		 */
		public set_alpha_byte(alpha: number): void;
		/**
		 * Sets the alpha channel of #color to #alpha.
		 * @param alpha a float value between 0.0f and 1.0f
		 */
		public set_alpha_float(alpha: number): void;
		/**
		 * Sets the blue channel of #color to #blue.
		 * @param blue a float value between 0.0f and 1.0f
		 */
		public set_blue(blue: number): void;
		/**
		 * Sets the blue channel of #color to #blue.
		 * @param blue a byte value between 0 and 255
		 */
		public set_blue_byte(blue: number): void;
		/**
		 * Sets the blue channel of #color to #blue.
		 * @param blue a float value between 0.0f and 1.0f
		 */
		public set_blue_float(blue: number): void;
		/**
		 * Sets the green channel of #color to #green.
		 * @param green a float value between 0.0f and 1.0f
		 */
		public set_green(green: number): void;
		/**
		 * Sets the green channel of #color to #green.
		 * @param green a byte value between 0 and 255
		 */
		public set_green_byte(green: number): void;
		/**
		 * Sets the green channel of #color to #green.
		 * @param green a float value between 0.0f and 1.0f
		 */
		public set_green_float(green: number): void;
		/**
		 * Sets the red channel of #color to #red.
		 * @param red a float value between 0.0f and 1.0f
		 */
		public set_red(red: number): void;
		/**
		 * Sets the red channel of #color to #red.
		 * @param red a byte value between 0 and 255
		 */
		public set_red_byte(red: number): void;
		/**
		 * Sets the red channel of #color to #red.
		 * @param red a float value between 0.0f and 1.0f
		 */
		public set_red_float(red: number): void;
		/**
		 * Converts #color to the HLS format.
		 * 
		 * The #hue value is in the 0 .. 360 range. The #luminance and
		 * #saturation values are in the 0 .. 1 range.
		 * @returns return location for the hue value or %NULL
		 * 
		 * return location for the saturation value or %NULL
		 * 
		 * return location for the luminance value or %NULL
		 */
		public to_hsl(): [ hue: number, saturation: number, luminance: number ];
		/**
		 * Converts a pre-multiplied color to a non-premultiplied color. For
		 * example, semi-transparent red is (0.5, 0, 0, 0.5) when premultiplied
		 * and (1.0, 0, 0, 0.5) when non-premultiplied.
		 */
		public unpremultiply(): void;
	}

	export interface DebugObjectTypeInfoInitOptions {}
	/**
	 * This struct is used to pass information to the callback when
	 * {@link Cogl.debug.object_foreach_type} is called.
	 */
	interface DebugObjectTypeInfo {}
	class DebugObjectTypeInfo {
		public constructor(options?: Partial<DebugObjectTypeInfoInitOptions>);
		/**
		 * A human readable name for the type.
		 */
		public name: string;
		/**
		 * The number of objects of this type that are
		 *   currently in use
		 */
		public instance_count: number;
	}

	export interface DmaBufHandleInitOptions {}
	/**
	 * An opaque type that tracks the lifetime of a DMA buffer fd. Release
	 * with {@link Cogl.DmaBufHandle.free}.
	 */
	interface DmaBufHandle {}
	class DmaBufHandle {
		public constructor(options?: Partial<DmaBufHandleInitOptions>);
	}

	export interface FrameClosureInitOptions {}
	/**
	 * An opaque type that tracks a {@link FrameCallback} and associated user
	 * data. A #CoglFrameClosure pointer will be returned from
	 * {@link Cogl.Onscreen.add_frame_callback} and it allows you to remove a
	 * callback later using cogl_onscreen_remove_frame_callback().
	 */
	interface FrameClosure {}
	class FrameClosure {
		public constructor(options?: Partial<FrameClosureInitOptions>);
	}

	export interface MaterialInitOptions {}
	interface Material {}
	class Material {
		public constructor(options?: Partial<MaterialInitOptions>);
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.new} instead
		 * 
		 * Allocates and initializes a blank white material
		 * @returns a pointer to a new {@link Material}
		 */
		public static new(): Material;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_alpha_test_function} instead
		 * 
		 * Before a primitive is blended with the framebuffer, it goes through an
		 * alpha test stage which lets you discard fragments based on the current
		 * alpha value. This function lets you change the function used to evaluate
		 * the alpha channel, and thus determine which fragments are discarded
		 * and which continue on to the blending stage.
		 * 
		 * The default is %COGL_MATERIAL_ALPHA_FUNC_ALWAYS
		 * @param alpha_func A {@link MaterialAlphaFunc} constant
		 * @param alpha_reference A reference point that the chosen alpha function uses
		 *   to compare incoming fragments to.
		 */
		public set_alpha_test_function(alpha_func: MaterialAlphaFunc, alpha_reference: number): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_blend} instead
		 * 
		 * If not already familiar; please refer <link linkend="cogl-Blend-Strings">here</link>
		 * for an overview of what blend strings are, and their syntax.
		 * 
		 * Blending occurs after the alpha test function, and combines fragments with
		 * the framebuffer.
		 * 
		 * Currently the only blend function Cogl exposes is ADD(). So any valid
		 * blend statements will be of the form:
		 * 
		 * |[
		 *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
		 * ]|
		 * 
		 * <warning>The brackets around blend factors are currently not
		 * optional!</warning>
		 * 
		 * This is the list of source-names usable as blend factors:
		 * <itemizedlist>
		 *   <listitem><para>SRC_COLOR: The color of the in comming fragment</para></listitem>
		 *   <listitem><para>DST_COLOR: The color of the framebuffer</para></listitem>
		 *   <listitem><para>CONSTANT: The constant set via cogl_material_set_blend_constant()</para></listitem>
		 * </itemizedlist>
		 * 
		 * The source names can be used according to the
		 * <link linkend="cogl-Blend-String-syntax">color-source and factor syntax</link>,
		 * so for example "(1-SRC_COLOR[A])" would be a valid factor, as would
		 * "(CONSTANT[RGB])"
		 * 
		 * These can also be used as factors:
		 * <itemizedlist>
		 *   <listitem>0: (0, 0, 0, 0)</listitem>
		 *   <listitem>1: (1, 1, 1, 1)</listitem>
		 *   <listitem>SRC_ALPHA_SATURATE_FACTOR: (f,f,f,1) where f = MIN(SRC_COLOR[A],1-DST_COLOR[A])</listitem>
		 * </itemizedlist>
		 * 
		 * <note>Remember; all color components are normalized to the range [0, 1]
		 * before computing the result of blending.</note>
		 * 
		 * <example id="cogl-Blend-Strings-blend-unpremul">
		 *   <title>Blend Strings/1</title>
		 *   <para>Blend a non-premultiplied source over a destination with
		 *   premultiplied alpha:</para>
		 *   <programlisting>
		 * "RGB = ADD(SRC_COLOR*(SRC_COLOR[A]), DST_COLOR*(1-SRC_COLOR[A]))"
		 * "A   = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
		 *   </programlisting>
		 * </example>
		 * 
		 * <example id="cogl-Blend-Strings-blend-premul">
		 *   <title>Blend Strings/2</title>
		 *   <para>Blend a premultiplied source over a destination with
		 *   premultiplied alpha</para>
		 *   <programlisting>
		 * "RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
		 *   </programlisting>
		 * </example>
		 * 
		 * The default blend string is:
		 * |[
		 *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
		 * ]|
		 * 
		 * That gives normal alpha-blending when the calculated color for the material
		 * is in premultiplied form.
		 * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>
		 *   describing the desired blend function.
		 * @returns %TRUE if the blend string was successfully parsed, and the
		 *   described blending is supported by the underlying driver/hardware. If
		 *   there was an error, %FALSE is returned and #error is set accordingly (if
		 *   present).
		 */
		public set_blend(blend_string: string): boolean;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_blend_constant} instead
		 * 
		 * When blending is setup to reference a CONSTANT blend factor then
		 * blending will depend on the constant set with this function.
		 * @param constant_color The constant color you want
		 */
		public set_blend_constant(constant_color: Color): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_color} instead
		 * 
		 * Sets the basic color of the material, used when no lighting is enabled.
		 * 
		 * Note that if you don't add any layers to the material then the color
		 * will be blended unmodified with the destination; the default blend
		 * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
		 * semi-transparent red. See {@link Cogl.Color.premultiply}.
		 * 
		 * The default value is (1.0, 1.0, 1.0, 1.0)
		 * @param color The components of the color
		 */
		public set_color(color: Color): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_color4ub} instead
		 * 
		 * Sets the basic color of the material, used when no lighting is enabled.
		 * 
		 * The default value is (0xff, 0xff, 0xff, 0xff)
		 * @param red The red component
		 * @param green The green component
		 * @param blue The blue component
		 * @param alpha The alpha component
		 */
		public set_color4ub(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_layer} instead
		 * 
		 * In addition to the standard OpenGL lighting model a Cogl material may have
		 * one or more layers comprised of textures that can be blended together in
		 * order, with a number of different texture combine modes. This function
		 * defines a new texture layer.
		 * 
		 * The index values of multiple layers do not have to be consecutive; it is
		 * only their relative order that is important.
		 * 
		 * <note>In the future, we may define other types of material layers, such
		 * as purely GLSL based layers.</note>
		 * @param layer_index the index of the layer
		 * @param texture a {@link Handle} for the layer object
		 */
		public set_layer(layer_index: number, texture: Handle): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_layer_combine} instead
		 * 
		 * If not already familiar; you can refer
		 * <link linkend="cogl-Blend-Strings">here</link> for an overview of what blend
		 * strings are and there syntax.
		 * 
		 * These are all the functions available for texture combining:
		 * <itemizedlist>
		 *   <listitem>REPLACE(arg0) = arg0</listitem>
		 *   <listitem>MODULATE(arg0, arg1) = arg0 x arg1</listitem>
		 *   <listitem>ADD(arg0, arg1) = arg0 + arg1</listitem>
		 *   <listitem>ADD_SIGNED(arg0, arg1) = arg0 + arg1 - 0.5</listitem>
		 *   <listitem>INTERPOLATE(arg0, arg1, arg2) = arg0 x arg2 + arg1 x (1 - arg2)</listitem>
		 *   <listitem>SUBTRACT(arg0, arg1) = arg0 - arg1</listitem>
		 *   <listitem>
		 *     <programlisting>
		 *  DOT3_RGB(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
		 *                              (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
		 *                              (arg0[B] - 0.5)) * (arg1[B] - 0.5))
		 *     </programlisting>
		 *   </listitem>
		 *   <listitem>
		 *     <programlisting>
		 *  DOT3_RGBA(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
		 *                               (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
		 *                               (arg0[B] - 0.5)) * (arg1[B] - 0.5))
		 *     </programlisting>
		 *   </listitem>
		 * </itemizedlist>
		 * 
		 * Refer to the
		 * <link linkend="cogl-Blend-String-syntax">color-source syntax</link> for
		 * describing the arguments. The valid source names for texture combining
		 * are:
		 * <variablelist>
		 *   <varlistentry>
		 *     <term>TEXTURE</term>
		 *     <listitem>Use the color from the current texture layer</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>TEXTURE_0, TEXTURE_1, etc</term>
		 *     <listitem>Use the color from the specified texture layer</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>CONSTANT</term>
		 *     <listitem>Use the color from the constant given with
		 *     {@link Cogl.Material.set_layer_constant}</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>PRIMARY</term>
		 *     <listitem>Use the color of the material as set with
		 *     cogl_material_set_color()</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>PREVIOUS</term>
		 *     <listitem>Either use the texture color from the previous layer, or
		 *     if this is layer 0, use the color of the material as set with
		 *     cogl_material_set_color()</listitem>
		 *   </varlistentry>
		 * </variablelist>
		 * 
		 * <refsect2 id="cogl-Layer-Combine-Examples">
		 *   <title>Layer Combine Examples</title>
		 *   <para>This is effectively what the default blending is:</para>
		 *   <informalexample><programlisting>
		 *   RGBA = MODULATE (PREVIOUS, TEXTURE)
		 *   </programlisting></informalexample>
		 *   <para>This could be used to cross-fade between two images, using
		 *   the alpha component of a constant as the interpolator. The constant
		 *   color is given by calling cogl_material_set_layer_constant.</para>
		 *   <informalexample><programlisting>
		 *   RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
		 *   </programlisting></informalexample>
		 * </refsect2>
		 * 
		 * <note>You can't give a multiplication factor for arguments as you can
		 * with blending.</note>
		 * @param layer_index Specifies the layer you want define a combine function for
		 * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>
		 *    describing the desired texture combine function.
		 * @returns %TRUE if the blend string was successfully parsed, and the
		 *   described texture combining is supported by the underlying driver and
		 *   or hardware. On failure, %FALSE is returned and #error is set
		 */
		public set_layer_combine(layer_index: number, blend_string: string): boolean;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_layer_combine_constant}
		 * instead
		 * 
		 * When you are using the 'CONSTANT' color source in a layer combine
		 * description then you can use this function to define its value.
		 * @param layer_index Specifies the layer you want to specify a constant used
		 *               for texture combining
		 * @param constant The constant color you want
		 */
		public set_layer_combine_constant(layer_index: number, constant: Color): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_layer_filters} instead
		 * 
		 * Changes the decimation and interpolation filters used when a texture is
		 * drawn at other scales than 100%.
		 * @param layer_index the layer number to change.
		 * @param min_filter the filter used when scaling a texture down.
		 * @param mag_filter the filter used when magnifying a texture.
		 */
		public set_layer_filters(layer_index: number, min_filter: MaterialFilter, mag_filter: MaterialFilter): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_layer_matrix} instead
		 * 
		 * This function lets you set a matrix that can be used to e.g. translate
		 * and rotate a single layer of a material used to fill your geometry.
		 * @param layer_index the index for the layer inside #material
		 * @param matrix the transformation matrix for the layer
		 */
		public set_layer_matrix(layer_index: number, matrix: Matrix): void;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_layer_point_sprite_coords_enabled}
		 *                  instead
		 * 
		 * When rendering points, if #enable is %TRUE then the texture
		 * coordinates for this layer will be replaced with coordinates that
		 * vary from 0.0 to 1.0 across the primitive. The top left of the
		 * point will have the coordinates 0.0,0.0 and the bottom right will
		 * have 1.0,1.0. If #enable is %FALSE then the coordinates will be
		 * fixed for the entire point.
		 * @param layer_index the layer number to change.
		 * @param enable whether to enable point sprite coord generation.
		 * @returns %TRUE if the function succeeds, %FALSE otherwise.
		 */
		public set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean;
		/**
		 * @deprecated
		 * Use {@link Cogl.Pipeline.set_point_size} instead
		 * 
		 * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
		 * used with the vertex buffer API. Note that typically the GPU will
		 * only support a limited minimum and maximum range of point sizes. If
		 * the chosen point size is outside that range then the nearest value
		 * within that range will be used instead. The size of a point is in
		 * screen space so it will be the same regardless of any
		 * transformations. The default point size is 1.0.
		 * @param point_size the new point size.
		 */
		public set_point_size(point_size: number): void;
		/**
		 * @deprecated
		 * Use {@link Snippet} api instead instead
		 * 
		 * Associates a linked CoglProgram with the given material so that the
		 * program can take full control of vertex and/or fragment processing.
		 * 
		 * This is an example of how it can be used to associate an ARBfp
		 * program with a {@link Material}:
		 * |[
		 * CoglHandle shader;
		 * CoglHandle program;
		 * CoglMaterial *material;
		 * 
		 * shader = cogl_create_shader (COGL_SHADER_TYPE_FRAGMENT);
		 * cogl_shader_source (shader,
		 *                     "!!ARBfp1.0\n"
		 *                     "MOV result.color,fragment.color;\n"
		 *                     "END\n");
		 * 
		 * program = cogl_create_program ();
		 * cogl_program_attach_shader (program, shader);
		 * cogl_program_link (program);
		 * 
		 * material = cogl_material_new ();
		 * cogl_material_set_user_program (material, program);
		 * 
		 * cogl_set_source_color4ub (0xff, 0x00, 0x00, 0xff);
		 * cogl_rectangle (0, 0, 100, 100);
		 * ]|
		 * 
		 * It is possibly worth keeping in mind that this API is not part of
		 * the long term design for how we want to expose shaders to Cogl
		 * developers (We are planning on deprecating the cogl_program and
		 * cogl_shader APIs in favour of a "snippet" framework) but in the
		 * meantime we hope this will handle most practical GLSL and ARBfp
		 * requirements.
		 * @param program A {@link Handle} to a linked CoglProgram
		 */
		public set_user_program(program: Handle): void;
	}

	export interface MaterialLayerInitOptions {}
	interface MaterialLayer {}
	class MaterialLayer {
		public constructor(options?: Partial<MaterialLayerInitOptions>);
	}

	export interface MatrixInitOptions {}
	/**
	 * A CoglMatrix holds a 4x4 transform matrix. This is a single precision,
	 * column-major matrix which means it is compatible with what OpenGL expects.
	 * 
	 * A CoglMatrix can represent transforms such as, rotations, scaling,
	 * translation, sheering, and linear projections. You can combine these
	 * transforms by multiplying multiple matrices in the order you want them
	 * applied.
	 * 
	 * The transformation of a vertex (x, y, z, w) by a CoglMatrix is given by:
	 * 
	 * |[
	 *   x_new = xx * x + xy * y + xz * z + xw * w
	 *   y_new = yx * x + yy * y + yz * z + yw * w
	 *   z_new = zx * x + zy * y + zz * z + zw * w
	 *   w_new = wx * x + wy * y + wz * z + ww * w
	 * ]|
	 * 
	 * Where w is normally 1
	 * 
	 * <note>You must consider the members of the CoglMatrix structure read only,
	 * and all matrix modifications must be done via the cogl_matrix API. This
	 * allows Cogl to annotate the matrices internally. Violation of this will give
	 * undefined results. If you need to initialize a matrix with a constant other
	 * than the identity matrix you can use {@link Cogl.Matrix.init_from_array}.</note>
	 */
	interface Matrix {}
	class Matrix {
		public constructor(options?: Partial<MatrixInitOptions>);
		/**
		 * Compares two matrices to see if they represent the same
		 * transformation. Although internally the matrices may have different
		 * annotations associated with them and may potentially have a cached
		 * inverse matrix these are not considered in the comparison.
		 * @param v1 A 4x4 transformation matrix
		 * @param v2 A 4x4 transformation matrix
		 * @returns 
		 */
		public static equal(v1?: any | null, v2?: any | null): boolean;
		public xx: number;
		public yx: number;
		public zx: number;
		public wx: number;
		public xy: number;
		public yy: number;
		public zy: number;
		public wy: number;
		public xz: number;
		public yz: number;
		public zz: number;
		public wz: number;
		public xw: number;
		public yw: number;
		public zw: number;
		public ww: number;
		public readonly private_member_inv: number[];
		public readonly private_member_type: number;
		public readonly private_member_flags: number;
		public readonly private_member__padding3: number;
		/**
		 * Allocates a new {@link Matrix} on the heap and initializes it with
		 * the same values as #matrix.
		 * @returns A newly allocated {@link Matrix} which
		 * should be freed using {@link Cogl.Matrix.free}
		 */
		public copy(): Matrix;
		/**
		 * Frees a {@link Matrix} that was previously allocated via a call to
		 * {@link Cogl.Matrix.copy}.
		 */
		public free(): void;
		/**
		 * Multiplies #matrix by the given frustum perspective matrix.
		 * @param left X position of the left clipping plane where it
		 *   intersects the near clipping plane
		 * @param right X position of the right clipping plane where it
		 *   intersects the near clipping plane
		 * @param bottom Y position of the bottom clipping plane where it
		 *   intersects the near clipping plane
		 * @param top Y position of the top clipping plane where it intersects
		 *   the near clipping plane
		 * @param z_near The distance to the near clipping plane (Must be positive)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		public frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
		/**
		 * Casts #matrix to a float array which can be directly passed to OpenGL.
		 * @returns a pointer to the float array
		 */
		public get_array(): number;
		/**
		 * Gets the inverse transform of a given matrix and uses it to initialize
		 * a new {@link Matrix}.
		 * 
		 * <note>Although the first parameter is annotated as const to indicate
		 * that the transform it represents isn't modified this function may
		 * technically save a copy of the inverse transform within the given
		 * #CoglMatrix so that subsequent requests for the inverse transform may
		 * avoid costly inversion calculations.</note>
		 * @returns %TRUE if the inverse was successfully calculated or %FALSE
		 *   for degenerate transformations that can't be inverted (in this case the
		 *   #inverse matrix will simply be initialized with the identity matrix)
		 * 
		 * The destination for a 4x4 inverse transformation matrix
		 */
		public get_inverse(): [ boolean, Matrix ];
		/**
		 * Initializes #matrix with the contents of #array
		 * @param array A linear array of 16 floats (column-major order)
		 */
		public init_from_array(array: number): void;
		/**
		 * Initializes #matrix from a #graphene_euler_t rotation.
		 * @param euler A #graphene_euler_t
		 */
		public init_from_euler(euler: Graphene.Euler): void;
		/**
		 * Resets matrix to the identity matrix:
		 * 
		 * |[
		 *   .xx=1; .xy=0; .xz=0; .xw=0;
		 *   .yx=0; .yy=1; .yz=0; .yw=0;
		 *   .zx=0; .zy=0; .zz=1; .zw=0;
		 *   .wx=0; .wy=0; .wz=0; .ww=1;
		 * ]|
		 */
		public init_identity(): void;
		/**
		 * Resets matrix to the (tx, ty, tz) translation matrix:
		 * 
		 * |[
		 *   .xx=1; .xy=0; .xz=0; .xw=tx;
		 *   .yx=0; .yy=1; .yz=0; .yw=ty;
		 *   .zx=0; .zy=0; .zz=1; .zw=tz;
		 *   .wx=0; .wy=0; .wz=0; .ww=1;
		 * ]|
		 * @param tx x coordinate of the translation vector
		 * @param ty y coordinate of the translation vector
		 * @param tz z coordinate of the translation vector
		 */
		public init_translation(tx: number, ty: number, tz: number): void;
		/**
		 * Determines if the given matrix is an identity matrix.
		 * @returns %TRUE if #matrix is an identity matrix else %FALSE
		 */
		public is_identity(): boolean;
		/**
		 * Applies a view transform #matrix that positions the camera at
		 * the coordinate (#eye_position_x, #eye_position_y, #eye_position_z)
		 * looking towards an object at the coordinate (#object_x, #object_y,
		 * #object_z). The top of the camera is aligned to the given world up
		 * vector, which is normally simply (0, 1, 0) to map up to the
		 * positive direction of the y axis.
		 * 
		 * Because there is a lot of missleading documentation online for
		 * gluLookAt regarding the up vector we want to try and be a bit
		 * clearer here.
		 * 
		 * The up vector should simply be relative to your world coordinates
		 * and does not need to change as you move the eye and object
		 * positions.  Many online sources may claim that the up vector needs
		 * to be perpendicular to the vector between the eye and object
		 * position (partly because the man page is somewhat missleading) but
		 * that is not necessary for this function.
		 * 
		 * <note>You should never look directly along the world-up
		 * vector.</note>
		 * 
		 * <note>It is assumed you are using a typical projection matrix where
		 * your origin maps to the center of your viewport.</note>
		 * 
		 * <note>Almost always when you use this function it should be the first
		 * transform applied to a new modelview transform</note>
		 * @param eye_position_x The X coordinate to look from
		 * @param eye_position_y The Y coordinate to look from
		 * @param eye_position_z The Z coordinate to look from
		 * @param object_x The X coordinate of the object to look at
		 * @param object_y The Y coordinate of the object to look at
		 * @param object_z The Z coordinate of the object to look at
		 * @param world_up_x The X component of the world's up direction vector
		 * @param world_up_y The Y component of the world's up direction vector
		 * @param world_up_z The Z component of the world's up direction vector
		 */
		public look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void;
		/**
		 * Multiplies the two supplied matrices together and stores
		 * the resulting matrix inside #result.
		 * 
		 * <note>It is possible to multiply the #a matrix in-place, so
		 * #result can be equal to #a but can't be equal to #b.</note>
		 * @param a A 4x4 transformation matrix
		 * @param b A 4x4 transformation matrix
		 */
		public multiply(a: Matrix, b: Matrix): void;
		/**
		 * Multiplies #matrix by a parallel projection matrix.
		 * @param x_1 The x coordinate for the first vertical clipping plane
		 * @param y_1 The y coordinate for the first horizontal clipping plane
		 * @param x_2 The x coordinate for the second vertical clipping plane
		 * @param y_2 The y coordinate for the second horizontal clipping plane
		 * @param near The <emphasis>distance</emphasis> to the near clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 * @param far The <emphasis>distance</emphasis> to the far clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 */
		public orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
		/**
		 * Multiplies #matrix by the described perspective matrix
		 * 
		 * <note>You should be careful not to have to great a #z_far / #z_near
		 * ratio since that will reduce the effectiveness of depth testing
		 * since there wont be enough precision to identify the depth of
		 * objects near to each other.</note>
		 * @param fov_y Vertical field of view angle in degrees.
		 * @param aspect The (width over height) aspect ratio for display
		 * @param z_near The distance to the near clipping plane (Must be positive,
		 *   and must not be 0)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		public perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
		/**
		 * Projects an array of input points and writes the result to another
		 * array of output points. The input points can either have 2, 3 or 4
		 * components each. The output points always have 4 components (known
		 * as homogenous coordinates). The output array can simply point to
		 * the input array to do the transform in-place.
		 * 
		 * Here's an example with differing input/output strides:
		 * |[
		 * typedef struct {
		 *   float x,y;
		 *   uint8_t r,g,b,a;
		 *   float s,t,p;
		 * } MyInVertex;
		 * typedef struct {
		 *   uint8_t r,g,b,a;
		 *   float x,y,z;
		 * } MyOutVertex;
		 * MyInVertex vertices[N_VERTICES];
		 * MyOutVertex results[N_VERTICES];
		 * CoglMatrix matrix;
		 * 
		 * my_load_vertices (vertices);
		 * my_get_matrix (&matrix);
		 * 
		 * cogl_matrix_project_points (&matrix,
		 *                             2,
		 *                             sizeof (MyInVertex),
		 *                             &vertices[0].x,
		 *                             sizeof (MyOutVertex),
		 *                             &results[0].x,
		 *                             N_VERTICES);
		 * ]|
		 * @param n_components The number of position components for each input point.
		 *                (either 2, 3 or 4)
		 * @param stride_in The stride in bytes between input points.
		 * @param points_in A pointer to the first component of the first input point.
		 * @param stride_out The stride in bytes between output points.
		 * @param points_out A pointer to the first component of the first output point.
		 * @param n_points The number of points to transform.
		 */
		public project_points(n_components: number, stride_in: number, points_in: any | null, stride_out: number, points_out: any | null, n_points: number): void;
		/**
		 * Multiplies #matrix with a rotation matrix that applies a rotation
		 * of #angle degrees around the specified 3D vector.
		 * @param angle The angle you want to rotate in degrees
		 * @param x X component of your rotation vector
		 * @param y Y component of your rotation vector
		 * @param z Z component of your rotation vector
		 */
		public rotate(angle: number, x: number, y: number, z: number): void;
		/**
		 * Multiplies #matrix with a rotation transformation described by the
		 * given #graphene_euler_t.
		 * @param euler A euler describing a rotation
		 */
		public rotate_euler(euler: Graphene.Euler): void;
		/**
		 * Multiplies #matrix with a transform matrix that scales along the X,
		 * Y and Z axis.
		 * @param sx The X scale factor
		 * @param sy The Y scale factor
		 * @param sz The Z scale factor
		 */
		public scale(sx: number, sy: number, sz: number): void;
		/**
		 * Transforms a point whos position is given and returned as four float
		 * components.
		 */
		public transform_point(): void;
		/**
		 * Transforms an array of input points and writes the result to
		 * another array of output points. The input points can either have 2
		 * or 3 components each. The output points always have 3 components.
		 * The output array can simply point to the input array to do the
		 * transform in-place.
		 * 
		 * If you need to transform 4 component points see
		 * {@link Cogl.Matrix.project_points}.
		 * 
		 * Here's an example with differing input/output strides:
		 * |[
		 * typedef struct {
		 *   float x,y;
		 *   uint8_t r,g,b,a;
		 *   float s,t,p;
		 * } MyInVertex;
		 * typedef struct {
		 *   uint8_t r,g,b,a;
		 *   float x,y,z;
		 * } MyOutVertex;
		 * MyInVertex vertices[N_VERTICES];
		 * MyOutVertex results[N_VERTICES];
		 * CoglMatrix matrix;
		 * 
		 * my_load_vertices (vertices);
		 * my_get_matrix (&matrix);
		 * 
		 * cogl_matrix_transform_points (&matrix,
		 *                               2,
		 *                               sizeof (MyInVertex),
		 *                               &vertices[0].x,
		 *                               sizeof (MyOutVertex),
		 *                               &results[0].x,
		 *                               N_VERTICES);
		 * ]|
		 * @param n_components The number of position components for each input point.
		 *                (either 2 or 3)
		 * @param stride_in The stride in bytes between input points.
		 * @param points_in A pointer to the first component of the first input point.
		 * @param stride_out The stride in bytes between output points.
		 * @param points_out A pointer to the first component of the first output point.
		 * @param n_points The number of points to transform.
		 */
		public transform_points(n_components: number, stride_in: number, points_in: any | null, stride_out: number, points_out: any | null, n_points: number): void;
		/**
		 * Multiplies #matrix with a transform matrix that translates along
		 * the X, Y and Z axis.
		 * @param x The X translation you want to apply
		 * @param y The Y translation you want to apply
		 * @param z The Z translation you want to apply
		 */
		public translate(x: number, y: number, z: number): void;
		/**
		 * Replaces #matrix with its transpose. Ie, every element (i,j) in the
		 * new matrix is taken from element (j,i) in the old matrix.
		 */
		public transpose(): void;
		/**
		 * Multiplies #matrix by a view transform that maps the 2D coordinates
		 * (0,0) top left and (#width_2d,#height_2d) bottom right the full viewport
		 * size. Geometry at a depth of 0 will now lie on this 2D plane.
		 * 
		 * Note: this doesn't multiply the matrix by any projection matrix,
		 * but it assumes you have a perspective projection as defined by
		 * passing the corresponding arguments to {@link Cogl.Matrix.frustum}.
		 * 
		 * Toolkits such as Clutter that mix 2D and 3D drawing can use this to
		 * create a 2D coordinate system within a 3D perspective projected
		 * view frustum.
		 * @param left coord of left vertical clipping plane
		 * @param right coord of right vertical clipping plane
		 * @param bottom coord of bottom horizontal clipping plane
		 * @param top coord of top horizontal clipping plane
		 * @param z_near The distance to the near clip plane. Never pass 0 and always pass
		 *   a positive number.
		 * @param z_2d The distance to the 2D plane. (Should always be positive and
		 *   be between #z_near and the z_far value that was passed to
		 *   {@link Cogl.Matrix.frustum})
		 * @param width_2d The width of the 2D coordinate system
		 * @param height_2d The height of the 2D coordinate system
		 */
		public view_2d_in_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
		/**
		 * Multiplies #matrix by a view transform that maps the 2D coordinates
		 * (0,0) top left and (#width_2d,#height_2d) bottom right the full viewport
		 * size. Geometry at a depth of 0 will now lie on this 2D plane.
		 * 
		 * Note: this doesn't multiply the matrix by any projection matrix,
		 * but it assumes you have a perspective projection as defined by
		 * passing the corresponding arguments to {@link Cogl.Matrix.perspective}.
		 * 
		 * Toolkits such as Clutter that mix 2D and 3D drawing can use this to
		 * create a 2D coordinate system within a 3D perspective projected
		 * view frustum.
		 * @param fov_y A field of view angle for the Y axis
		 * @param aspect The ratio of width to height determining the field of view angle
		 *   for the x axis.
		 * @param z_near The distance to the near clip plane. Never pass 0 and always pass
		 *   a positive number.
		 * @param z_2d The distance to the 2D plane. (Should always be positive and
		 *   be between #z_near and the z_far value that was passed to
		 *   {@link Cogl.Matrix.frustum})
		 * @param width_2d The width of the 2D coordinate system
		 * @param height_2d The height of the 2D coordinate system
		 */
		public view_2d_in_perspective(fov_y: number, aspect: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
	}

	export interface OnscreenDirtyClosureInitOptions {}
	/**
	 * An opaque type that tracks a {@link OnscreenDirtyCallback} and associated
	 * user data. A #CoglOnscreenDirtyClosure pointer will be returned from
	 * {@link Cogl.Onscreen.add_dirty_callback} and it allows you to remove a
	 * callback later using cogl_onscreen_remove_dirty_callback().
	 */
	interface OnscreenDirtyClosure {}
	class OnscreenDirtyClosure {
		public constructor(options?: Partial<OnscreenDirtyClosureInitOptions>);
	}

	export interface OnscreenDirtyInfoInitOptions {}
	/**
	 * A structure passed to callbacks registered using
	 * {@link Cogl.Onscreen.add_dirty_callback}. The members describe a
	 * rectangle within the onscreen buffer that should be redrawn.
	 */
	interface OnscreenDirtyInfo {}
	class OnscreenDirtyInfo {
		public constructor(options?: Partial<OnscreenDirtyInfoInitOptions>);
		/**
		 * Left edge of the dirty rectangle
		 */
		public x: number;
		/**
		 * Top edge of the dirty rectangle, measured from the top of the window
		 */
		public y: number;
		/**
		 * Width of the dirty rectangle
		 */
		public width: number;
		/**
		 * Height of the dirty rectangle
		 */
		public height: number;
	}

	export interface OnscreenResizeClosureInitOptions {}
	/**
	 * An opaque type that tracks a {@link OnscreenResizeCallback} and
	 * associated user data. A #CoglOnscreenResizeClosure pointer will be
	 * returned from {@link Cogl.Onscreen.add_resize_callback} and it allows you
	 * to remove a callback later using
	 * cogl_onscreen_remove_resize_callback().
	 */
	interface OnscreenResizeClosure {}
	class OnscreenResizeClosure {
		public constructor(options?: Partial<OnscreenResizeClosureInitOptions>);
	}

	export interface TextureVertexInitOptions {}
	/**
	 * Used to specify vertex information when calling {@link Cogl.polygon}
	 */
	interface TextureVertex {}
	class TextureVertex {
		public constructor(options?: Partial<TextureVertexInitOptions>);
		/**
		 * Model x-coordinate
		 */
		public x: number;
		/**
		 * Model y-coordinate
		 */
		public y: number;
		/**
		 * Model z-coordinate
		 */
		public z: number;
		/**
		 * Texture x-coordinate
		 */
		public tx: number;
		/**
		 * Texture y-coordinate
		 */
		public ty: number;
		/**
		 * The color to use at this vertex. This is ignored if
		 *   use_color is %FALSE when calling {@link Cogl.polygon}
		 */
		public color: Color;
	}

	export interface UserDataKeyInitOptions {}
	/**
	 * A {@link UserDataKey} is used to declare a key for attaching data to a
	 * #CoglObject using cogl_object_set_user_data. The typedef only exists as a
	 * formality to make code self documenting since only the unique address of a
	 * #CoglUserDataKey is used.
	 * 
	 * Typically you would declare a static #CoglUserDataKey and set private data
	 * on an object something like this:
	 * 
	 * |[
	 * static CoglUserDataKey path_private_key;
	 * 
	 * static void
	 * destroy_path_private_cb (void *data)
	 * {
	 *   g_free (data);
	 * }
	 * 
	 * static void
	 * my_path_set_data (CoglPath *path, void *data)
	 * {
	 *   cogl_object_set_user_data (COGL_OBJECT (path),
	 *                              &private_key,
	 *                              data,
	 *                              destroy_path_private_cb);
	 * }
	 * ]|
	 */
	interface UserDataKey {}
	class UserDataKey {
		public constructor(options?: Partial<UserDataKeyInitOptions>);
		/**
		 * ignored.
		 */
		public unused: number;
	}

	export interface _ColorSizeCheckInitOptions {}
	interface _ColorSizeCheck {}
	class _ColorSizeCheck {
		public constructor(options?: Partial<_ColorSizeCheckInitOptions>);
		public compile_time_assert_CoglColor_size: string[];
	}

	export interface _MatrixSizeCheckInitOptions {}
	interface _MatrixSizeCheck {}
	class _MatrixSizeCheck {
		public constructor(options?: Partial<_MatrixSizeCheckInitOptions>);
		public compile_time_assert_CoglMatrix_size: string[];
	}

	export interface _TextureVertexSizeCheckInitOptions {}
	interface _TextureVertexSizeCheck {}
	class _TextureVertexSizeCheck {
		public constructor(options?: Partial<_TextureVertexSizeCheckInitOptions>);
		public compile_time_assert_CoglTextureVertex_size: string[];
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Framebuffer} instead.
	 */
	interface IFramebuffer {
		/**
		 * Explicitly allocates a configured {@link Framebuffer} allowing developers to
		 * check and handle any errors that might arise from an unsupported
		 * configuration so that fallback configurations may be tried.
		 * 
		 * <note>Many applications don't support any fallback options at least when
		 * they are initially developed and in that case the don't need to use this API
		 * since Cogl will automatically allocate a framebuffer when it first gets
		 * used.  The disadvantage of relying on automatic allocation is that the
		 * program will abort with an error message if there is an error during
		 * automatic allocation.</note>
		 * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
		 */
		allocate(): boolean;
		/**
		 * Clears all the auxiliary buffers identified in the #buffers mask, and if
		 * that includes the color buffer then the specified #color is used.
		 * @param buffers A mask of {@link BufferBit}<!-- -->'s identifying which auxiliary
		 *   buffers to clear
		 * @param color The color to clear the color buffer too if specified in
		 *         #buffers.
		 */
		clear(buffers: number, color: Color): void;
		/**
		 * Clears all the auxiliary buffers identified in the #buffers mask, and if
		 * that includes the color buffer then the specified #color is used.
		 * @param buffers A mask of {@link BufferBit}<!-- -->'s identifying which auxiliary
		 *   buffers to clear
		 * @param red The red component of color to clear the color buffer too if
		 *       specified in #buffers.
		 * @param green The green component of color to clear the color buffer too if
		 *         specified in #buffers.
		 * @param blue The blue component of color to clear the color buffer too if
		 *        specified in #buffers.
		 * @param alpha The alpha component of color to clear the color buffer too if
		 *         specified in #buffers.
		 */
		clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Declares that the specified #buffers no longer need to be referenced
		 * by any further rendering commands. This can be an important
		 * optimization to avoid subsequent frames of rendering depending on
		 * the results of a previous frame.
		 * 
		 * For example; some tile-based rendering GPUs are able to avoid allocating and
		 * accessing system memory for the depth and stencil buffer so long as these
		 * buffers are not required as input for subsequent frames and that can save a
		 * significant amount of memory bandwidth used to save and restore their
		 * contents to system memory between frames.
		 * 
		 * It is currently considered an error to try and explicitly discard the color
		 * buffer by passing %COGL_BUFFER_BIT_COLOR. This is because the color buffer is
		 * already implicitly discard when you finish rendering to a {@link Onscreen}
		 * framebuffer, and it's not meaningful to try and discard the color buffer of
		 * a #CoglOffscreen framebuffer since they are single-buffered.
		 * @param buffers A {@link BufferBit} mask of which ancillary buffers you want
		 *           to discard.
		 */
		discard_buffers(buffers: number): void;
		/**
		 * Draws a textured rectangle to #framebuffer with the given #pipeline
		 * state with the top left corner positioned at (#x_1, #y_1) and the
		 * bottom right corner positioned at (#x_2, #y_2). As a pipeline may
		 * contain multiple texture layers this interface lets you supply
		 * texture coordinates for each layer of the pipeline.
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * This is a high level drawing api that can handle any kind of
		 * {@link MetaTexture} texture for the first layer such as
		 * #CoglTexture2DSliced textures which may internally be comprised of
		 * multiple low-level textures.  This is unlike low-level drawing apis
		 * such as {@link Cogl.primitive_draw} which only support low level texture
		 * types that are directly supported by GPUs such as #CoglTexture2D.
		 * 
		 * <note>This api can not currently handle multiple high-level meta
		 * texture layers. The first layer may be a high level meta texture
		 * such as #CoglTexture2DSliced but all other layers much be low
		 * level textures such as #CoglTexture2D.
		 * 
		 * The top left texture coordinate for layer 0 of any pipeline will be
		 * (tex_coords[0], tex_coords[1]) and the bottom right coordinate will
		 * be (tex_coords[2], tex_coords[3]). The coordinates for layer 1
		 * would be (tex_coords[4], tex_coords[5]) (tex_coords[6],
		 * tex_coords[7]) and so on...
		 * 
		 * The given texture coordinates should always be normalized such that
		 * (0, 0) corresponds to the top left and (1, 1) corresponds to the
		 * bottom right. To map an entire texture across the rectangle pass
		 * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
		 * tex_coords[3]=1.
		 * 
		 * The first pair of coordinates are for the first layer (with the
		 * smallest layer index) and if you supply less texture coordinates
		 * than there are layers in the current source material then default
		 * texture coordinates (0.0, 0.0, 1.0, 1.0) are generated.
		 * @param pipeline A {@link Pipeline} state object
		 * @param x_1 x coordinate upper left on screen.
		 * @param y_1 y coordinate upper left on screen.
		 * @param x_2 x coordinate lower right on screen.
		 * @param y_2 y coordinate lower right on screen.
		 * @param tex_coords An array containing groups of
		 *   4 float values: [s_1, t_1, s_2, t_2] that are interpreted as two texture
		 *   coordinates; one for the top left texel, and one for the bottom right
		 *   texel. Each value should be between 0.0 and 1.0, where the coordinate
		 *   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the
		 *   bottom right.
		 * @param tex_coords_len The length of the #tex_coords array. (For one layer
		 *   and one group of texture coordinates, this would be 4)
		 */
		draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void;
		/**
		 * Draws a rectangle to #framebuffer with the given #pipeline state
		 * and with the top left corner positioned at (#x_1, #y_1) and the
		 * bottom right corner positioned at (#x_2, #y_2).
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * <note>If you want to describe a rectangle with a texture mapped on
		 * it then you can use
		 * {@link Cogl.Framebuffer.draw_textured_rectangle}.</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param x_1 X coordinate of the top-left corner
		 * @param y_1 Y coordinate of the top-left corner
		 * @param x_2 X coordinate of the bottom-right corner
		 * @param y_2 Y coordinate of the bottom-right corner
		 */
		draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
		/**
		 * Draws a series of rectangles to #framebuffer with the given
		 * #pipeline state in the same way that
		 * {@link Cogl.Framebuffer.draw_rectangle} does.
		 * 
		 * The top left corner of the first rectangle is positioned at
		 * (coordinates[0], coordinates[1]) and the bottom right corner is
		 * positioned at (coordinates[2], coordinates[3]). The positions for
		 * the second rectangle are (coordinates[4], coordinates[5]) and
		 * (coordinates[6], coordinates[7]) and so on...
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * As a general rule for better performance its recommended to use
		 * this this API instead of calling
		 * cogl_framebuffer_draw_textured_rectangle() separately for multiple
		 * rectangles if all of the rectangles will be drawn together with the
		 * same #pipeline state.
		 * @param pipeline A {@link Pipeline} state object
		 * @param coordinates an array of coordinates
		 *   containing groups of 4 float values: [x_1, y_1, x_2, y_2] that are
		 *   interpreted as two position coordinates; one for the top left of
		 *   the rectangle (x1, y1), and one for the bottom right of the
		 *   rectangle (x2, y2).
		 * @param n_rectangles number of rectangles defined in #coordinates.
		 */
		draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
		/**
		 * Draws a textured rectangle to #framebuffer using the given
		 * #pipeline state with the top left corner positioned at (#x_1, #y_1)
		 * and the bottom right corner positioned at (#x_2, #y_2). The top
		 * left corner will have texture coordinates of (#s_1, #t_1) and the
		 * bottom right corner will have texture coordinates of (#s_2, #t_2).
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * This is a high level drawing api that can handle any kind of
		 * {@link MetaTexture} texture such as #CoglTexture2DSliced textures
		 * which may internally be comprised of multiple low-level textures.
		 * This is unlike low-level drawing apis such as {@link Cogl.primitive_draw}
		 * which only support low level texture types that are directly
		 * supported by GPUs such as #CoglTexture2D.
		 * 
		 * <note>The given texture coordinates will only be used for the first
		 * texture layer of the pipeline and if your pipeline has more than
		 * one layer then all other layers will have default texture
		 * coordinates of #s_1=0.0 #t_1=0.0 #s_2=1.0 #t_2=1.0 </note>
		 * 
		 * The given texture coordinates should always be normalized such that
		 * (0, 0) corresponds to the top left and (1, 1) corresponds to the
		 * bottom right. To map an entire texture across the rectangle pass
		 * in #s_1=0, #t_1=0, #s_2=1, #t_2=1.
		 * @param pipeline A {@link Pipeline} state object
		 * @param x_1 x coordinate upper left on screen.
		 * @param y_1 y coordinate upper left on screen.
		 * @param x_2 x coordinate lower right on screen.
		 * @param y_2 y coordinate lower right on screen.
		 * @param s_1 S texture coordinate of the top-left coorner
		 * @param t_1 T texture coordinate of the top-left coorner
		 * @param s_2 S texture coordinate of the bottom-right coorner
		 * @param t_2 T texture coordinate of the bottom-right coorner
		 */
		draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void;
		/**
		 * Draws a series of rectangles to #framebuffer with the given
		 * #pipeline state in the same way that
		 * {@link Cogl.Framebuffer.draw_textured_rectangle} does.
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * This is a high level drawing api that can handle any kind of
		 * {@link MetaTexture} texture such as #CoglTexture2DSliced textures
		 * which may internally be comprised of multiple low-level textures.
		 * This is unlike low-level drawing apis such as cogl_primitive_draw()
		 * which only support low level texture types that are directly
		 * supported by GPUs such as #CoglTexture2D.
		 * 
		 * The top left corner of the first rectangle is positioned at
		 * (coordinates[0], coordinates[1]) and the bottom right corner is
		 * positioned at (coordinates[2], coordinates[3]). The top left
		 * texture coordinate is (coordinates[4], coordinates[5]) and the
		 * bottom right texture coordinate is (coordinates[6],
		 * coordinates[7]). The coordinates for subsequent rectangles
		 * are defined similarly by the subsequent coordinates.
		 * 
		 * As a general rule for better performance its recommended to use
		 * this this API instead of calling
		 * cogl_framebuffer_draw_textured_rectangle() separately for multiple
		 * rectangles if all of the rectangles will be drawn together with the
		 * same #pipeline state.
		 * 
		 * The given texture coordinates should always be normalized such that
		 * (0, 0) corresponds to the top left and (1, 1) corresponds to the
		 * bottom right. To map an entire texture across the rectangle pass
		 * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
		 * tex_coords[3]=1.
		 * @param pipeline A {@link Pipeline} state object
		 * @param coordinates an array containing
		 *   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]
		 *   that have the same meaning as the arguments for
		 *   {@link Cogl.Framebuffer.draw_textured_rectangle}.
		 * @param n_rectangles number of rectangles to #coordinates to draw
		 */
		draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
		/**
		 * This blocks the CPU until all pending rendering associated with the
		 * specified framebuffer has completed. It's very rare that developers should
		 * ever need this level of synchronization with the GPU and should never be
		 * used unless you clearly understand why you need to explicitly force
		 * synchronization.
		 * 
		 * One example might be for benchmarking purposes to be sure timing
		 * measurements reflect the time that the GPU is busy for not just the time it
		 * takes to queue rendering commands.
		 */
		finish(): void;
		/**
		 * Flushes #framebuffer to ensure the current batch of commands is
		 * submitted to the GPU.
		 * 
		 * Unlike {@link Cogl.Framebuffer.finish}, this does not block the CPU.
		 */
		flush(): void;
		/**
		 * Replaces the current projection matrix with a perspective matrix
		 * for a given viewing frustum defined by 4 side clip planes that
		 * all cross through the origin and 2 near and far clip planes.
		 * @param left X position of the left clipping plane where it
		 *   intersects the near clipping plane
		 * @param right X position of the right clipping plane where it
		 *   intersects the near clipping plane
		 * @param bottom Y position of the bottom clipping plane where it
		 *   intersects the near clipping plane
		 * @param top Y position of the top clipping plane where it intersects
		 *   the near clipping plane
		 * @param z_near The distance to the near clipping plane (Must be positive)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
		/**
		 * Retrieves the number of alpha bits of #framebuffer
		 * @returns the number of bits
		 */
		get_alpha_bits(): number;
		/**
		 * Retrieves the number of blue bits of #framebuffer
		 * @returns the number of bits
		 */
		get_blue_bits(): number;
		/**
		 * Can be used to query the {@link Context} a given #framebuffer was
		 * instantiated within. This is the #CoglContext that was passed to
		 * {@link Cogl.Onscreen.new} for example.
		 * @returns The {@link Context} that the given
		 *               #framebuffer was instantiated within.
		 */
		get_context(): Context;
		/**
		 * Retrieves the number of depth bits of #framebuffer
		 * @returns the number of bits
		 */
		get_depth_bits(): number;
		/**
		 * Queries whether depth buffer writing is enabled for #framebuffer. This
		 * can be controlled via {@link Cogl.Framebuffer.set_depth_write_enabled}.
		 * @returns %TRUE if depth writing is enabled or %FALSE if not.
		 */
		get_depth_write_enabled(): boolean;
		/**
		 * Returns whether dithering has been requested for the given #framebuffer.
		 * See {@link Cogl.Framebuffer.set_dither_enabled} for more details about dithering.
		 * 
		 * <note>This may return %TRUE even when the underlying #framebuffer
		 * display pipeline does not support dithering. This value only represents
		 * the user's request for dithering.</note>
		 * @returns %TRUE if dithering has been requested or %FALSE if not.
		 */
		get_dither_enabled(): boolean;
		/**
		 * Retrieves the number of green bits of #framebuffer
		 * @returns the number of bits
		 */
		get_green_bits(): number;
		/**
		 * Queries the current height of the given #framebuffer.
		 * @returns The height of #framebuffer.
		 */
		get_height(): number;
		get_is_stereo(): boolean;
		/**
		 * Stores the current model-view matrix in #matrix.
		 * @returns return location for the model-view matrix
		 */
		get_modelview_matrix(): Matrix;
		/**
		 * Stores the current projection matrix in #matrix.
		 * @returns return location for the projection matrix
		 */
		get_projection_matrix(): Matrix;
		/**
		 * Retrieves the number of red bits of #framebuffer
		 * @returns the number of bits
		 */
		get_red_bits(): number;
		/**
		 * Gets the number of points that are sampled per-pixel when
		 * rasterizing geometry. Usually by default this will return 0 which
		 * means that single-sample not multisample rendering has been chosen.
		 * When using a GPU supporting multisample rendering it's possible to
		 * increase the number of samples per pixel using
		 * {@link Cogl.Framebuffer.set_samples_per_pixel}.
		 * 
		 * Calling cogl_framebuffer_get_samples_per_pixel() before the
		 * framebuffer has been allocated will simply return the value set
		 * using cogl_framebuffer_set_samples_per_pixel(). After the
		 * framebuffer has been allocated the value will reflect the actual
		 * number of samples that will be made by the GPU.
		 * @returns The number of point samples made per pixel when
		 *          rasterizing geometry or 0 if single-sample rendering
		 *          has been chosen.
		 */
		get_samples_per_pixel(): number;
		/**
		 * Gets the current {@link StereoMode}, which defines which stereo buffers
		 * should be drawn to. See {@link Cogl.Framebuffer.set_stereo_mode}.
		 * @returns A {@link StereoMode}
		 */
		get_stereo_mode(): StereoMode;
		/**
		 * Queries the x, y, width and height components of the current viewport as set
		 * using {@link Cogl.Framebuffer.set_viewport} or the default values which are 0, 0,
		 * framebuffer_width and framebuffer_height.  The values are written into the
		 * given #viewport array.
		 * @returns A pointer to an
		 *            array of 4 floats to receive the (x, y, width, height)
		 *            components of the current viewport.
		 */
		get_viewport4fv(): number[];
		/**
		 * Queries the height of the viewport as set using {@link Cogl.Framebuffer.set_viewport}
		 * or the default value which is the height of the framebuffer.
		 * @returns The height of the viewport.
		 */
		get_viewport_height(): number;
		/**
		 * Queries the width of the viewport as set using {@link Cogl.Framebuffer.set_viewport}
		 * or the default value which is the width of the framebuffer.
		 * @returns The width of the viewport.
		 */
		get_viewport_width(): number;
		/**
		 * Queries the x coordinate of the viewport origin as set using {@link Cogl.Framebuffer.set_viewport}
		 * or the default value which is 0.
		 * @returns The x coordinate of the viewport origin.
		 */
		get_viewport_x(): number;
		/**
		 * Queries the y coordinate of the viewport origin as set using {@link Cogl.Framebuffer.set_viewport}
		 * or the default value which is 0.
		 * @returns The y coordinate of the viewport origin.
		 */
		get_viewport_y(): number;
		/**
		 * Queries the current width of the given #framebuffer.
		 * @returns The width of #framebuffer.
		 */
		get_width(): number;
		/**
		 * Resets the current model-view matrix to the identity matrix.
		 */
		identity_matrix(): void;
		/**
		 * Replaces the current projection matrix with an orthographic projection
		 * matrix.
		 * @param x_1 The x coordinate for the first vertical clipping plane
		 * @param y_1 The y coordinate for the first horizontal clipping plane
		 * @param x_2 The x coordinate for the second vertical clipping plane
		 * @param y_2 The y coordinate for the second horizontal clipping plane
		 * @param near The <emphasis>distance</emphasis> to the near clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 * @param far The <emphasis>distance</emphasis> to the far clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 */
		orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
		/**
		 * Replaces the current projection matrix with a perspective matrix
		 * based on the provided values.
		 * 
		 * <note>You should be careful not to have to great a #z_far / #z_near
		 * ratio since that will reduce the effectiveness of depth testing
		 * since there wont be enough precision to identify the depth of
		 * objects near to each other.</note>
		 * @param fov_y Vertical field of view angle in degrees.
		 * @param aspect The (width over height) aspect ratio for display
		 * @param z_near The distance to the near clipping plane (Must be positive,
		 *   and must not be 0)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
		/**
		 * Reverts the clipping region to the state before the last call to
		 * {@link Cogl.Framebuffer.push_scissor_clip}, cogl_framebuffer_push_rectangle_clip()
		 * cogl_framebuffer_push_path_clip(), or cogl_framebuffer_push_primitive_clip().
		 */
		pop_clip(): void;
		/**
		 * Restores the model-view matrix on the top of the matrix stack.
		 */
		pop_matrix(): void;
		/**
		 * Copies the current model-view matrix onto the matrix stack. The matrix
		 * can later be restored with {@link Cogl.Framebuffer.pop_matrix}.
		 */
		push_matrix(): void;
		/**
		 * Specifies a modelview transformed rectangular clipping area for all
		 * subsequent drawing operations. Any drawing commands that extend
		 * outside the rectangle will be clipped so that only the portion
		 * inside the rectangle will be displayed. The rectangle dimensions
		 * are transformed by the current model-view matrix.
		 * 
		 * The rectangle is intersected with the current clip region. To undo
		 * the effect of this function, call {@link Cogl.Framebuffer.pop_clip}.
		 * @param x_1 x coordinate for top left corner of the clip rectangle
		 * @param y_1 y coordinate for top left corner of the clip rectangle
		 * @param x_2 x coordinate for bottom right corner of the clip rectangle
		 * @param y_2 y coordinate for bottom right corner of the clip rectangle
		 */
		push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
		push_region_clip(region: cairo.Region): void;
		/**
		 * Specifies a rectangular clipping area for all subsequent drawing
		 * operations. Any drawing commands that extend outside the rectangle
		 * will be clipped so that only the portion inside the rectangle will
		 * be displayed. The rectangle dimensions are not transformed by the
		 * current model-view matrix.
		 * 
		 * The rectangle is intersected with the current clip region. To undo
		 * the effect of this function, call {@link Cogl.Framebuffer.pop_clip}.
		 * @param x left edge of the clip rectangle in window coordinates
		 * @param y top edge of the clip rectangle in window coordinates
		 * @param width width of the clip rectangle
		 * @param height height of the clip rectangle
		 */
		push_scissor_clip(x: number, y: number, width: number, height: number): void;
		/**
		 * This is a convenience wrapper around
		 * {@link Cogl.Framebuffer.read_pixels_into_bitmap} which allocates a
		 * temporary {@link Bitmap} to read pixel data directly into the given
		 * buffer. The rowstride of the buffer is assumed to be the width of
		 * the region times the bytes per pixel of the format. The source for
		 * the data is always taken from the color buffer. If you want to use
		 * any other rowstride or source, please use the
		 * cogl_framebuffer_read_pixels_into_bitmap() function directly.
		 * 
		 * The implementation of the function looks like this:
		 * 
		 * |[
		 * bitmap = cogl_bitmap_new_for_data (context,
		 *                                    width, height,
		 *                                    format,
		 *                                    /<!-- -->* rowstride *<!-- -->/
		 *                                    bpp * width,
		 *                                    pixels);
		 * cogl_framebuffer_read_pixels_into_bitmap (framebuffer,
		 *                                           x, y,
		 *                                           COGL_READ_PIXELS_COLOR_BUFFER,
		 *                                           bitmap);
		 * cogl_object_unref (bitmap);
		 * ]|
		 * @param x The x position to read from
		 * @param y The y position to read from
		 * @param width The width of the region of rectangles to read
		 * @param height The height of the region of rectangles to read
		 * @param format The pixel format to store the data in
		 * @param pixels The address of the buffer to store the data in
		 * @returns %TRUE if the read succeeded or %FALSE otherwise.
		 */
		read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): boolean;
		/**
		 * This reads a rectangle of pixels from the given framebuffer where
		 * position (0, 0) is the top left. The pixel at (x, y) is the first
		 * read, and a rectangle of pixels with the same size as the bitmap is
		 * read right and downwards from that point.
		 * 
		 * Currently Cogl assumes that the framebuffer is in a premultiplied
		 * format so if the format of #bitmap is non-premultiplied it will
		 * convert it. To read the pixel values without any conversion you
		 * should either specify a format that doesn't use an alpha channel or
		 * use one of the formats ending in PRE.
		 * @param x The x position to read from
		 * @param y The y position to read from
		 * @param source Identifies which auxillary buffer you want to read
		 *          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
		 * @param bitmap The bitmap to store the results in.
		 * @returns %TRUE if the read succeeded or %FALSE otherwise. The
		 *  function is only likely to fail if the bitmap points to a pixel
		 *  buffer and it could not be mapped.
		 */
		read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): boolean;
		/**
		 * When point sample rendering (also known as multisample rendering)
		 * has been enabled via {@link Cogl.Framebuffer.set_samples_per_pixel}
		 * then you can optionally call this function (or
		 * cogl_framebuffer_resolve_samples_region()) to explicitly resolve
		 * the point samples into values for the final color buffer.
		 * 
		 * Some GPUs will implicitly resolve the point samples during
		 * rendering and so this function is effectively a nop, but with other
		 * architectures it is desirable to defer the resolve step until the
		 * end of the frame.
		 * 
		 * Since Cogl will automatically ensure samples are resolved if the
		 * target color buffer is used as a source this API only needs to be
		 * used if explicit control is desired - perhaps because you want to
		 * ensure that the resolve is completed in advance to avoid later
		 * having to wait for the resolve to complete.
		 * 
		 * If you are performing incremental updates to a framebuffer you
		 * should consider using cogl_framebuffer_resolve_samples_region()
		 * instead to avoid resolving redundant pixels.
		 */
		resolve_samples(): void;
		/**
		 * When point sample rendering (also known as multisample rendering)
		 * has been enabled via {@link Cogl.Framebuffer.set_samples_per_pixel}
		 * then you can optionally call this function (or
		 * cogl_framebuffer_resolve_samples()) to explicitly resolve the point
		 * samples into values for the final color buffer.
		 * 
		 * Some GPUs will implicitly resolve the point samples during
		 * rendering and so this function is effectively a nop, but with other
		 * architectures it is desirable to defer the resolve step until the
		 * end of the frame.
		 * 
		 * Use of this API is recommended if incremental, small updates to
		 * a framebuffer are being made because by default Cogl will
		 * implicitly resolve all the point samples of the framebuffer which
		 * can result in redundant work if only a small number of samples have
		 * changed.
		 * 
		 * Because some GPUs implicitly resolve point samples this function
		 * only guarantees that at-least the region specified will be resolved
		 * and if you have rendered to a larger region then it's possible that
		 * other samples may be implicitly resolved.
		 * @param x top-left x coordinate of region to resolve
		 * @param y top-left y coordinate of region to resolve
		 * @param width width of region to resolve
		 * @param height height of region to resolve
		 */
		resolve_samples_region(x: number, y: number, width: number, height: number): void;
		/**
		 * Multiplies the current model-view matrix by one that rotates the
		 * model around the axis-vector specified by #x, #y and #z. The
		 * rotation follows the right-hand thumb rule so for example rotating
		 * by 10 degrees about the axis-vector (0, 0, 1) causes a small
		 * counter-clockwise rotation.
		 * @param angle Angle in degrees to rotate.
		 * @param x X-component of vertex to rotate around.
		 * @param y Y-component of vertex to rotate around.
		 * @param z Z-component of vertex to rotate around.
		 */
		rotate(angle: number, x: number, y: number, z: number): void;
		/**
		 * Multiplies the current model-view matrix by one that rotates
		 * according to the rotation described by #euler.
		 * @param euler A #graphene_euler_t
		 */
		rotate_euler(euler: Graphene.Euler): void;
		/**
		 * Multiplies the current model-view matrix by one that scales the x,
		 * y and z axes by the given values.
		 * @param x Amount to scale along the x-axis
		 * @param y Amount to scale along the y-axis
		 * @param z Amount to scale along the z-axis
		 */
		scale(x: number, y: number, z: number): void;
		/**
		 * Enables or disables depth buffer writing when rendering to #framebuffer.
		 * If depth writing is enabled for both the framebuffer and the rendering
		 * pipeline, and the framebuffer has an associated depth buffer, depth
		 * information will be written to this buffer during rendering.
		 * 
		 * Depth buffer writing is enabled by default.
		 * @param depth_write_enabled %TRUE to enable depth writing or %FALSE to disable
		 */
		set_depth_write_enabled(depth_write_enabled: boolean): void;
		/**
		 * Enables or disabled dithering if supported by the hardware.
		 * 
		 * Dithering is a hardware dependent technique to increase the visible
		 * color resolution beyond what the underlying hardware supports by playing
		 * tricks with the colors placed into the framebuffer to give the illusion
		 * of other colors. (For example this can be compared to half-toning used
		 * by some news papers to show varying levels of grey even though their may
		 * only be black and white are available).
		 * 
		 * If the current display pipeline for #framebuffer does not support dithering
		 * then this has no affect.
		 * 
		 * Dithering is enabled by default.
		 * @param dither_enabled %TRUE to enable dithering or %FALSE to disable
		 */
		set_dither_enabled(dither_enabled: boolean): void;
		/**
		 * Sets #matrix as the new model-view matrix.
		 * @param matrix the new model-view matrix
		 */
		set_modelview_matrix(matrix: Matrix): void;
		/**
		 * Sets #matrix as the new projection matrix.
		 * @param matrix the new projection matrix
		 */
		set_projection_matrix(matrix: Matrix): void;
		/**
		 * Requires that when rendering to #framebuffer then #n point samples
		 * should be made per pixel which will all contribute to the final
		 * resolved color for that pixel. The idea is that the hardware aims
		 * to get quality similar to what you would get if you rendered
		 * everything twice as big (for 4 samples per pixel) and then scaled
		 * that image back down with filtering. It can effectively remove the
		 * jagged edges of polygons and should be more efficient than if you
		 * were to manually render at a higher resolution and downscale
		 * because the hardware is often able to take some shortcuts. For
		 * example the GPU may only calculate a single texture sample for all
		 * points of a single pixel, and for tile based architectures all the
		 * extra sample data (such as depth and stencil samples) may be
		 * handled on-chip and so avoid increased demand on system memory
		 * bandwidth.
		 * 
		 * By default this value is usually set to 0 and that is referred to
		 * as "single-sample" rendering. A value of 1 or greater is referred
		 * to as "multisample" rendering.
		 * 
		 * <note>There are some semantic differences between single-sample
		 * rendering and multisampling with just 1 point sample such as it
		 * being redundant to use the {@link Cogl.Framebuffer.resolve_samples} and
		 * cogl_framebuffer_resolve_samples_region() apis with single-sample
		 * rendering.</note>
		 * 
		 * <note>It's recommended that
		 * cogl_framebuffer_resolve_samples_region() be explicitly used at the
		 * end of rendering to a point sample buffer to minimize the number of
		 * samples that get resolved. By default Cogl will implicitly resolve
		 * all framebuffer samples but if only a small region of a
		 * framebuffer has changed this can lead to redundant work being
		 * done.</note>
		 * @param samples_per_pixel The minimum number of samples per pixel
		 */
		set_samples_per_pixel(samples_per_pixel: number): void;
		/**
		 * Sets which stereo buffers should be drawn to. The default
		 * is %COGL_STEREO_BOTH, which means that both the left and
		 * right buffers will be affected by drawing. For this to have
		 * an effect, the display system must support stereo drawables,
		 * and the framebuffer must have been created with stereo
		 * enabled. (See {@link Cogl.Onscreen.template_set_stereo_enabled},
		 * cogl_framebuffer_get_is_stereo().)
		 * @param stereo_mode A {@link StereoMode} specifying which stereo buffers
		 *               should be drawn tow.
		 */
		set_stereo_mode(stereo_mode: StereoMode): void;
		/**
		 * Defines a scale and offset for everything rendered relative to the
		 * top-left of the destination framebuffer.
		 * 
		 * By default the viewport has an origin of (0,0) and width and height
		 * that match the framebuffer's size. Assuming a default projection and
		 * modelview matrix then you could translate the contents of a window
		 * down and right by leaving the viewport size unchanged by moving the
		 * offset to (10,10). The viewport coordinates are measured in pixels.
		 * If you left the x and y origin as (0,0) you could scale the windows
		 * contents down by specify and width and height that's half the real
		 * size of the framebuffer.
		 * 
		 * <note>Although the function takes floating point arguments, existing
		 * drivers only allow the use of integer values. In the future floating
		 * point values will be exposed via a checkable feature.</note>
		 * @param x The top-left x coordinate of the viewport origin (only integers
		 *     supported currently)
		 * @param y The top-left y coordinate of the viewport origin (only integers
		 *     supported currently)
		 * @param width The width of the viewport (only integers supported currently)
		 * @param height The height of the viewport (only integers supported currently)
		 */
		set_viewport(x: number, y: number, width: number, height: number): void;
		/**
		 * Multiplies the current model-view matrix by the given matrix.
		 * @param matrix the matrix to multiply with the current model-view
		 */
		transform(matrix: Matrix): void;
		/**
		 * Multiplies the current model-view matrix by one that translates the
		 * model along all three axes according to the given values.
		 * @param x Distance to translate along the x-axis
		 * @param y Distance to translate along the y-axis
		 * @param z Distance to translate along the z-axis
		 */
		translate(x: number, y: number, z: number): void;
	}

	type FramebufferInitOptionsMixin  = {};
	export interface FramebufferInitOptions extends FramebufferInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Framebuffer} instead.
	 */
	type FramebufferMixin = IFramebuffer;

	interface Framebuffer extends FramebufferMixin {}

	class Framebuffer {
		public constructor(options?: Partial<FramebufferInitOptions>);
		public static error_quark(): number;
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture} instead.
	 */
	interface ITexture {
		/**
		 * Explicitly allocates the storage for the given #texture which
		 * allows you to be sure that there is enough memory for the
		 * texture and if not then the error can be handled gracefully.
		 * 
		 * <note>Normally applications don't need to use this api directly
		 * since the texture will be implicitly allocated when data is set on
		 * the texture, or if the texture is attached to a {@link Offscreen}
		 * framebuffer and rendered too.</note>
		 * @returns %TRUE if the texture was successfully allocated,
		 *               otherwise %FALSE and #error will be updated if it
		 *               wasn't %NULL.
		 */
		allocate(): boolean;
		/**
		 * Queries what components the given #texture stores internally as set
		 * via {@link Cogl.Texture.set_components}.
		 * 
		 * For textures created by the ‘_with_size’ constructors the default
		 * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
		 * a %CoglBitmap or a data pointer default to the same components as
		 * the pixel format of the data.
		 * @returns 
		 */
		get_components(): TextureComponents;
		/**
		 * Copies the pixel data from a cogl texture to system memory.
		 * 
		 * <note>Don't pass the value of {@link Cogl.Texture.get_rowstride} as the
		 * #rowstride argument, the rowstride should be the rowstride you
		 * want for the destination #data buffer not the rowstride of the
		 * source texture</note>
		 * @param format the {@link PixelFormat} to store the texture as.
		 * @param rowstride the rowstride of #data in bytes or pass 0 to calculate
		 *             from the bytes-per-pixel of #format multiplied by the
		 *             #texture width.
		 * @param data memory location to write the #texture's contents,
		 * or %NULL to only query the data size through the return value.
		 * @returns the size of the texture data in bytes
		 */
		get_data(format: PixelFormat, rowstride: number, data?: number[] | null): number;
		/**
		 * Queries the GL handles for a GPU side texture through its {@link Texture}.
		 * 
		 * If the texture is spliced the data for the first sub texture will be
		 * queried.
		 * @returns %TRUE if the handle was successfully retrieved, %FALSE
		 *   if the handle was invalid
		 * 
		 * pointer to return location for the
		 *   textures GL handle, or %NULL.
		 * 
		 * pointer to return location for the
		 *   GL target type, or %NULL.
		 */
		get_gl_texture(): [ boolean, number | null, number | null ];
		/**
		 * Queries the height of a cogl texture.
		 * @returns the height of the GPU side texture in pixels
		 */
		get_height(): number;
		/**
		 * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
		 * texture.
		 * @returns the maximum waste
		 */
		get_max_waste(): number;
		/**
		 * Queries the pre-multiplied alpha status for internally stored red,
		 * green and blue components for the given #texture as set by
		 * {@link Cogl.Texture.set_premultiplied}.
		 * 
		 * By default the pre-multipled state is #TRUE.
		 * @returns %TRUE if red, green and blue components are
		 *               internally stored pre-multiplied by the alpha
		 *               value or %FALSE if not.
		 */
		get_premultiplied(): boolean;
		/**
		 * Queries the width of a cogl texture.
		 * @returns the width of the GPU side texture in pixels
		 */
		get_width(): number;
		/**
		 * Queries if a texture is sliced (stored as multiple GPU side tecture
		 * objects).
		 * @returns %TRUE if the texture is sliced, %FALSE if the texture
		 *   is stored as a single GPU texture
		 */
		is_sliced(): boolean;
		/**
		 * @deprecated
		 * Use {@link Cogl.sub_texture_new}
		 * 
		 * Creates a new texture which represents a subregion of another
		 * texture. The GL resources will be shared so that no new texture
		 * data is actually allocated.
		 * 
		 * Sub textures have undefined behaviour texture coordinates outside
		 * of the range [0,1] are used.
		 * 
		 * The sub texture will keep a reference to the full texture so you do
		 * not need to keep one separately if you only want to use the sub
		 * texture.
		 * @param sub_x X coordinate of the top-left of the subregion
		 * @param sub_y Y coordinate of the top-left of the subregion
		 * @param sub_width Width in pixels of the subregion
		 * @param sub_height Height in pixels of the subregion
		 * @returns A newly created {@link Texture} or
		 *               %NULL on failure
		 */
		new_from_sub_texture(sub_x: number, sub_y: number, sub_width: number, sub_height: number): Texture;
		/**
		 * Affects the internal storage format for this texture by specifying
		 * what components will be required for sampling later.
		 * 
		 * This api affects how data is uploaded to the GPU since unused
		 * components can potentially be discarded from source data.
		 * 
		 * For textures created by the ‘_with_size’ constructors the default
		 * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
		 * a %CoglBitmap or a data pointer default to the same components as
		 * the pixel format of the data.
		 * 
		 * Note that the %COGL_TEXTURE_COMPONENTS_RG format is not available
		 * on all drivers. The availability can be determined by checking for
		 * the %COGL_FEATURE_ID_TEXTURE_RG feature. If this format is used on
		 * a driver where it is not available then %COGL_TEXTURE_ERROR_FORMAT
		 * will be raised when the texture is allocated. Even if the feature
		 * is not available then %COGL_PIXEL_FORMAT_RG_88 can still be used as
		 * an image format as long as %COGL_TEXTURE_COMPONENTS_RG isn't used
		 * as the texture's components.
		 * @param components
		 */
		set_components(components: TextureComponents): void;
		/**
		 * #texture a {@link Texture}.
		 * Sets all the pixels for a given mipmap #level by copying the pixel
		 * data pointed to by the #data argument into the given #texture.
		 * 
		 * #data should point to the first pixel to copy corresponding
		 * to the top left of the mipmap #level being set.
		 * 
		 * If #rowstride equals 0 then it will be automatically calculated
		 * from the width of the mipmap level and the bytes-per-pixel for the
		 * given #format.
		 * 
		 * A mipmap #level of 0 corresponds to the largest, base image of a
		 * texture and #level 1 is half the width and height of level 0. If
		 * dividing any dimension of the previous level by two results in a
		 * fraction then round the number down (floor()), but clamp to 1
		 * something like this:
		 * 
		 * |[
		 *  next_width = MAX (1, floor (prev_width));
		 * ]|
		 * 
		 * You can determine the number of mipmap levels for a given texture
		 * like this:
		 * 
		 * |[
		 *  n_levels = 1 + floor (log2 (max_dimension));
		 * ]|
		 * 
		 * Where %max_dimension is the larger of cogl_texture_get_width() and
		 * cogl_texture_get_height().
		 * 
		 * It is an error to pass a #level number >= the number of levels that
		 * #texture can have according to the above calculation.
		 * 
		 * <note>Since the storage for a #CoglTexture is allocated lazily then
		 * if the given #texture has not previously been allocated then this
		 * api can return %FALSE and throw an exceptional #error if there is
		 * not enough memory to allocate storage for #texture.</note>
		 * @param format the {@link PixelFormat} used in the source #data buffer.
		 * @param rowstride rowstride of the source #data buffer (computed from
		 *             the texture width and #format if it equals 0)
		 * @param data the source data, pointing to the first top-left pixel to set
		 * @param level The mipmap level to update (Normally 0 for the largest,
		 *         base texture)
		 * @returns %TRUE if the data upload was successful, and
		 *               %FALSE otherwise
		 */
		set_data(format: PixelFormat, rowstride: number, data: number[], level: number): boolean;
		/**
		 * Affects the internal storage format for this texture by specifying
		 * whether red, green and blue color components should be stored as
		 * pre-multiplied alpha values.
		 * 
		 * This api affects how data is uploaded to the GPU since Cogl will
		 * convert source data to have premultiplied or unpremultiplied
		 * components according to this state.
		 * 
		 * For example if you create a texture via
		 * {@link Cogl.Texture.2d_new_with_size} and then upload data via
		 * cogl_texture_set_data() passing a source format of
		 * %COGL_PIXEL_FORMAT_RGBA_8888 then Cogl will internally multiply the
		 * red, green and blue components of the source data by the alpha
		 * component, for each pixel so that the internally stored data has
		 * pre-multiplied alpha components. If you instead upload data that
		 * already has pre-multiplied components by passing
		 * %COGL_PIXEL_FORMAT_RGBA_8888_PRE as the source format to
		 * cogl_texture_set_data() then the data can be uploaded without being
		 * converted.
		 * 
		 * By default the #premultipled state is #TRUE.
		 * @param premultiplied Whether any internally stored red, green or blue
		 *                 components are pre-multiplied by an alpha
		 *                 component.
		 */
		set_premultiplied(premultiplied: boolean): void;
		/**
		 * Sets the pixels in a rectangular subregion of #texture from an in-memory
		 * buffer containing pixel data.
		 * 
		 * <note>The region set can't be larger than the source #data</note>
		 * @param src_x upper left coordinate to use from source data.
		 * @param src_y upper left coordinate to use from source data.
		 * @param dst_x upper left destination horizontal coordinate.
		 * @param dst_y upper left destination vertical coordinate.
		 * @param dst_width width of destination region to write. (Must be less
		 *   than or equal to #width)
		 * @param dst_height height of destination region to write. (Must be less
		 *   than or equal to #height)
		 * @param width width of source data buffer.
		 * @param height height of source data buffer.
		 * @param format the {@link PixelFormat} used in the source buffer.
		 * @param rowstride rowstride of source buffer (computed from width if none
		 * specified)
		 * @param data the actual pixel data.
		 * @returns %TRUE if the subregion upload was successful, and
		 *   %FALSE otherwise
		 */
		set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number[]): boolean;
		/**
		 * Copies a specified source region from #bitmap to the position
		 * (#src_x, #src_y) of the given destination texture #handle.
		 * 
		 * <note>The region updated can't be larger than the source
		 * bitmap</note>
		 * @param src_x upper left coordinate to use from the source bitmap.
		 * @param src_y upper left coordinate to use from the source bitmap
		 * @param dst_x upper left destination horizontal coordinate.
		 * @param dst_y upper left destination vertical coordinate.
		 * @param dst_width width of destination region to write. (Must be less
		 *   than or equal to the bitmap width)
		 * @param dst_height height of destination region to write. (Must be less
		 *   than or equal to the bitmap height)
		 * @param bitmap The source bitmap to read from
		 * @returns %TRUE if the subregion upload was successful, and
		 *   %FALSE otherwise
		 */
		set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): boolean;
	}

	type TextureInitOptionsMixin  = {};
	export interface TextureInitOptions extends TextureInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture} instead.
	 */
	type TextureMixin = ITexture;

	interface Texture extends TextureMixin {}

	class Texture {
		public constructor(options?: Partial<TextureInitOptions>);
		public static error_quark(): number;
		/**
		 * @deprecated
		 * Use specific constructors such as
		 *                   {@link Cogl.Texture.2d_new_from_bitmap}
		 * 
		 * Creates a {@link Texture} from a #CoglBitmap.
		 * @param bitmap A {@link Bitmap} pointer
		 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
		 * @param internal_format the {@link PixelFormat} to use for the GPU storage of the
		 * texture
		 * @returns A newly created {@link Texture} or
		 *               %NULL on failure
		 */
		public static new_from_bitmap(bitmap: Bitmap, flags: TextureFlags, internal_format: PixelFormat): Texture;
		/**
		 * @deprecated
		 * Use specific constructors such as
		 *                   {@link Cogl.Texture.2d_new_from_data}
		 * 
		 * Creates a new {@link Texture} based on data residing in memory.
		 * @param width width of texture in pixels
		 * @param height height of texture in pixels
		 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
		 * @param format the {@link PixelFormat} the buffer is stored in in RAM
		 * @param internal_format the {@link PixelFormat} that will be used for storing
		 *    the buffer on the GPU. If COGL_PIXEL_FORMAT_ANY is given then a
		 *    premultiplied format similar to the format of the source data will
		 *    be used. The default blending equations of Cogl expect premultiplied
		 *    color data; the main use of passing a non-premultiplied format here
		 *    is if you have non-premultiplied source data and are going to adjust
		 *    the blend mode (see {@link Cogl.Material.set_blend}) or use the data for
		 *    something other than straight blending.
		 * @param rowstride the memory offset in bytes between the starts of
		 *    scanlines in #data
		 * @param data pointer the memory region where the source buffer resides
		 * @returns A newly created {@link Texture} or
		 *               %NULL on failure
		 */
		public static new_from_data(width: number, height: number, flags: TextureFlags, format: PixelFormat, internal_format: PixelFormat, rowstride: number, data: number[]): Texture;
		/**
		 * @deprecated
		 * Use specific constructors such as
		 *                   {@link Cogl.Texture.2d_new_from_file}
		 * 
		 * Creates a {@link Texture} from an image file.
		 * @param filename the file to load
		 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
		 * @param internal_format the {@link PixelFormat} to use for the GPU storage of the
		 *    texture. If %COGL_PIXEL_FORMAT_ANY is given then a premultiplied
		 *    format similar to the format of the source data will be used. The
		 *    default blending equations of Cogl expect premultiplied color data;
		 *    the main use of passing a non-premultiplied format here is if you
		 *    have non-premultiplied source data and are going to adjust the blend
		 *    mode (see {@link Cogl.Material.set_blend}) or use the data for something
		 *    other than straight blending.
		 * @returns A newly created {@link Texture} or
		 *               %NULL on failure
		 */
		public static new_from_file(filename: string, flags: TextureFlags, internal_format: PixelFormat): Texture;
		/**
		 * @deprecated
		 * Use specific constructors such as
		 *                   {@link Cogl.Texture.2d_new_with_size}
		 * 
		 * Creates a new {@link Texture} with the specified dimensions and pixel format.
		 * @param width width of texture in pixels.
		 * @param height height of texture in pixels.
		 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
		 * @param internal_format the {@link PixelFormat} to use for the GPU storage of the
		 *    texture.
		 * @returns A newly created {@link Texture} or %NULL on failure
		 */
		public static new_with_size(width: number, height: number, flags: TextureFlags, internal_format: PixelFormat): Texture;
	}



	/**
	 * Data types for the components of a vertex attribute.
	 */
	enum AttributeType {
		/**
		 * Data is the same size of a byte
		 */
		BYTE = 5120,
		/**
		 * Data is the same size of an
		 *   unsigned byte
		 */
		UNSIGNED_BYTE = 5121,
		/**
		 * Data is the same size of a short integer
		 */
		SHORT = 5122,
		/**
		 * Data is the same size of
		 *   an unsigned short integer
		 */
		UNSIGNED_SHORT = 5123,
		/**
		 * Data is the same size of a float
		 */
		FLOAT = 5126
	}

	/**
	 * Error codes that can be thrown when performing bitmap
	 * operations. Note that {@link GdkPixbuf.new_from_file} can also throw
	 * errors directly from the underlying image loading library. For
	 * example, if GdkPixbuf is used then errors #GdkPixbufError<!-- -->s
	 * will be used directly.
	 */
	enum BitmapError {
		/**
		 * Generic failure code, something went
		 *   wrong.
		 */
		FAILED = 0,
		/**
		 * Unknown image type.
		 */
		UNKNOWN_TYPE = 1,
		/**
		 * An image file was broken somehow.
		 */
		CORRUPT_IMAGE = 2
	}

	/**
	 * Error enumeration for the blend strings parser
	 */
	enum BlendStringError {
		/**
		 * Generic parse error
		 */
		PARSE_ERROR = 0,
		/**
		 * Argument parse error
		 */
		ARGUMENT_PARSE_ERROR = 1,
		/**
		 * Internal parser error
		 */
		INVALID_ERROR = 2,
		/**
		 * Blend string not
		 *   supported by the GPU
		 */
		GPU_UNSUPPORTED_ERROR = 3
	}

	/**
	 * When using depth testing one of these functions is used to compare
	 * the depth of an incoming fragment against the depth value currently
	 * stored in the depth buffer. The function is changed using
	 * {@link Cogl.depth_state_set_test_function}.
	 * 
	 * The test is only done when depth testing is explicitly enabled. (See
	 * cogl_depth_state_set_test_enabled())
	 */
	enum DepthTestFunction {
		/**
		 * Never passes.
		 */
		NEVER = 512,
		/**
		 * Passes if the fragment's depth
		 * value is less than the value currently in the depth buffer.
		 */
		LESS = 513,
		/**
		 * Passes if the fragment's depth
		 * value is equal to the value currently in the depth buffer.
		 */
		EQUAL = 514,
		/**
		 * Passes if the fragment's depth
		 * value is less or equal to the value currently in the depth buffer.
		 */
		LEQUAL = 515,
		/**
		 * Passes if the fragment's depth
		 * value is greater than the value currently in the depth buffer.
		 */
		GREATER = 516,
		/**
		 * Passes if the fragment's depth
		 * value is not equal to the value currently in the depth buffer.
		 */
		NOTEQUAL = 517,
		/**
		 * Passes if the fragment's depth
		 * value greater than or equal to the value currently in the depth buffer.
		 */
		GEQUAL = 518,
		/**
		 * Always passes.
		 */
		ALWAYS = 519
	}

	/**
	 * All the capabilities that can vary between different GPUs supported
	 * by Cogl. Applications that depend on any of these features should explicitly
	 * check for them using {@link Cogl.has.feature} or cogl_has_features().
	 */
	enum FeatureID {
		/**
		 * Set if
		 *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
		 *     {@link Cogl.indices_new}.
		 */
		OGL_FEATURE_ID_UNSIGNED_INT_INDICES = 0,
		/**
		 * Whether {@link Cogl.buffer_map} is
		 *     supported with CoglBufferAccess including read support.
		 */
		OGL_FEATURE_ID_MAP_BUFFER_FOR_READ = 1,
		/**
		 * Whether {@link Cogl.buffer_map} is
		 *     supported with CoglBufferAccess including write support.
		 */
		OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE = 2,
		/**
		 * Available if the window system supports reporting an event
		 *     for swap buffer completions.
		 */
		OGL_FEATURE_ID_SWAP_BUFFERS_EVENT = 3,
		/**
		 * Whether frame presentation
		 *    time stamps will be recorded in {@link FrameInfo} objects.
		 */
		OGL_FEATURE_ID_PRESENTATION_TIME = 4,
		OGL_FEATURE_ID_FENCE = 5,
		/**
		 * Support for
		 *    %COGL_TEXTURE_COMPONENTS_RG as the internal components of a
		 *    texture.
		 */
		OGL_FEATURE_ID_TEXTURE_RG = 6,
		/**
		 * Available if the age of {@link Onscreen} back
		 *    buffers are tracked and so {@link Cogl.Onscreen.get_buffer_age} can be
		 *    expected to return age values other than 0.
		 */
		OGL_FEATURE_ID_BUFFER_AGE = 7,
		OGL_FEATURE_ID_TEXTURE_EGL_IMAGE_EXTERNAL = 8
	}

	/**
	 * Return values for the {@link XlibFilterFunc} and #CoglWin32FilterFunc functions.
	 */
	enum FilterReturn {
		/**
		 * The event was not handled, continues the
		 *                        processing
		 */
		CONTINUE = 0,
		/**
		 * Remove the event, stops the processing
		 */
		REMOVE = 1
	}

	/**
	 * Identifiers that are passed to {@link FrameCallback} functions
	 * (registered using {@link Cogl.Onscreen.add_frame_callback}) that
	 * mark the progression of a frame in some way which usually
	 * means that new information will have been accumulated in the
	 * frame's corresponding #CoglFrameInfo object.
	 * 
	 * The last event that will be sent for a frame will be a
	 * #COGL_FRAME_EVENT_COMPLETE event and so these are a good
	 * opportunity to collect statistics about a frame since the
	 * #CoglFrameInfo should hold the most data at this point.
	 * 
	 * <note>A frame may not be completed before the next frame can start
	 * so applications should avoid needing to collect all statistics for
	 * a particular frame before they can start a new frame.</note>
	 */
	enum FrameEvent {
		/**
		 * Notifies that the system compositor has
		 *                         acknowledged a frame and is ready for a
		 *                         new frame to be created.
		 */
		SYNC = 1,
		/**
		 * Notifies that a frame has ended. This
		 *                             is a good time for applications to
		 *                             collect statistics about the frame
		 *                             since the {@link FrameInfo} should hold
		 *                             the most data at this point. No other
		 *                             events should be expected after a
		 *                             #COGL_FRAME_EVENT_COMPLETE event.
		 */
		COMPLETE = 2
	}

	enum FramebufferError {
		FRAMEBUFFER_ERROR_ALLOCATE = 0
	}

	/**
	 * All the error values that might be returned by
	 * {@link Cogl.get.graphics_reset_status}. Each value's meaning corresponds
	 * to the similarly named value defined in the ARB_robustness and
	 * NV_robustness_video_memory_purge extensions.
	 */
	enum GraphicsResetStatus {
		NO_ERROR = 0,
		GUILTY_CONTEXT_RESET = 1,
		INNOCENT_CONTEXT_RESET = 2,
		UNKNOWN_CONTEXT_RESET = 3,
		PURGED_CONTEXT_RESET = 4
	}

	/**
	 * You should aim to use the smallest data type that gives you enough
	 * range, since it reduces the size of your index array and can help
	 * reduce the demand on memory bandwidth.
	 * 
	 * Note that %COGL_INDICES_TYPE_UNSIGNED_INT is only supported if the
	 * %COGL_FEATURE_ID_UNSIGNED_INT_INDICES feature is available. This
	 * should always be available on OpenGL but on OpenGL ES it will only
	 * be available if the GL_OES_element_index_uint extension is
	 * advertized.
	 */
	enum IndicesType {
		/**
		 * Your indices are unsigned bytes
		 */
		BYTE = 0,
		/**
		 * Your indices are unsigned shorts
		 */
		SHORT = 1,
		/**
		 * Your indices are unsigned ints
		 */
		INT = 2
	}

	/**
	 * Alpha testing happens before blending primitives with the framebuffer and
	 * gives an opportunity to discard fragments based on a comparison with the
	 * incoming alpha value and a reference alpha value. The {@link MaterialAlphaFunc}
	 * determines how the comparison is done.
	 */
	enum MaterialAlphaFunc {
		/**
		 * Never let the fragment through.
		 */
		NEVER = 512,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is less than the reference alpha value
		 */
		LESS = 513,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value equals the reference alpha value
		 */
		EQUAL = 514,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is less than or equal to the reference alpha value
		 */
		LEQUAL = 515,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is greater than the reference alpha value
		 */
		GREATER = 516,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value does not equal the reference alpha value
		 */
		NOTEQUAL = 517,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is greater than or equal to the reference alpha value.
		 */
		GEQUAL = 518,
		/**
		 * Always let the fragment through.
		 */
		ALWAYS = 519
	}

	/**
	 * Texture filtering is used whenever the current pixel maps either to more
	 * than one texture element (texel) or less than one. These filter enums
	 * correspond to different strategies used to come up with a pixel color, by
	 * possibly referring to multiple neighbouring texels and taking a weighted
	 * average or simply using the nearest texel.
	 */
	enum MaterialFilter {
		/**
		 * Measuring in manhatten distance from the,
		 *   current pixel center, use the nearest texture texel
		 */
		NEAREST = 9728,
		/**
		 * Use the weighted average of the 4 texels
		 *   nearest the current pixel center
		 */
		LINEAR = 9729,
		/**
		 * Select the mimap level whose
		 *   texel size most closely matches the current pixel, and use the
		 *   %COGL_MATERIAL_FILTER_NEAREST criterion
		 */
		NEAREST_MIPMAP_NEAREST = 9984,
		/**
		 * Select the mimap level whose
		 *   texel size most closely matches the current pixel, and use the
		 *   %COGL_MATERIAL_FILTER_LINEAR criterion
		 */
		LINEAR_MIPMAP_NEAREST = 9985,
		/**
		 * Select the two mimap levels
		 *   whose texel size most closely matches the current pixel, use
		 *   the %COGL_MATERIAL_FILTER_NEAREST criterion on each one and take
		 *   their weighted average
		 */
		NEAREST_MIPMAP_LINEAR = 9986,
		/**
		 * Select the two mimap levels
		 *   whose texel size most closely matches the current pixel, use
		 *   the %COGL_MATERIAL_FILTER_LINEAR criterion on each one and take
		 *   their weighted average
		 */
		LINEAR_MIPMAP_LINEAR = 9987
	}

	/**
	 * The wrap mode specifies what happens when texture coordinates
	 * outside the range 0→1 are used. Note that if the filter mode is
	 * anything but %COGL_MATERIAL_FILTER_NEAREST then texels outside the
	 * range 0→1 might be used even when the coordinate is exactly 0 or 1
	 * because OpenGL will try to sample neighbouring pixels. For example
	 * if you are trying to render the full texture then you may get
	 * artifacts around the edges when the pixels from the other side are
	 * merged in if the wrap mode is set to repeat.
	 */
	enum MaterialWrapMode {
		/**
		 * The texture will be repeated. This
		 *   is useful for example to draw a tiled background.
		 */
		REPEAT = 10497,
		/**
		 * The coordinates outside the
		 *   range 0→1 will sample copies of the edge pixels of the
		 *   texture. This is useful to avoid artifacts if only one copy of
		 *   the texture is being rendered.
		 */
		CLAMP_TO_EDGE = 33071,
		/**
		 * Cogl will try to automatically
		 *   decide which of the above two to use. For {@link Cogl.rectangle}, it
		 *   will use repeat mode if any of the texture coordinates are
		 *   outside the range 0→1, otherwise it will use clamp to edge. For
		 *   cogl_polygon() it will always use repeat mode. For
		 *   cogl_vertex_buffer_draw() it will use repeat mode except for
		 *   layers that have point sprite coordinate generation enabled. This
		 *   is the default value.
		 */
		AUTOMATIC = 519
	}

	/**
	 * Alpha testing happens before blending primitives with the framebuffer and
	 * gives an opportunity to discard fragments based on a comparison with the
	 * incoming alpha value and a reference alpha value. The {@link PipelineAlphaFunc}
	 * determines how the comparison is done.
	 */
	enum PipelineAlphaFunc {
		/**
		 * Never let the fragment through.
		 */
		NEVER = 512,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is less than the reference alpha value
		 */
		LESS = 513,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value equals the reference alpha value
		 */
		EQUAL = 514,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is less than or equal to the reference alpha value
		 */
		LEQUAL = 515,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is greater than the reference alpha value
		 */
		GREATER = 516,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value does not equal the reference alpha value
		 */
		NOTEQUAL = 517,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is greater than or equal to the reference alpha value.
		 */
		GEQUAL = 518,
		/**
		 * Always let the fragment through.
		 */
		ALWAYS = 519
	}

	/**
	 * Specifies which faces should be culled. This can be set on a
	 * pipeline using {@link Cogl.Pipeline.set_cull_face_mode}.
	 */
	enum PipelineCullFaceMode {
		/**
		 * Neither face will be
		 *  culled. This is the default.
		 */
		NONE = 0,
		/**
		 * Front faces will be culled.
		 */
		FRONT = 1,
		/**
		 * Back faces will be culled.
		 */
		BACK = 2,
		/**
		 * All faces will be culled.
		 */
		BOTH = 3
	}

	/**
	 * Texture filtering is used whenever the current pixel maps either to more
	 * than one texture element (texel) or less than one. These filter enums
	 * correspond to different strategies used to come up with a pixel color, by
	 * possibly referring to multiple neighbouring texels and taking a weighted
	 * average or simply using the nearest texel.
	 */
	enum PipelineFilter {
		/**
		 * Measuring in manhatten distance from the,
		 *   current pixel center, use the nearest texture texel
		 */
		NEAREST = 9728,
		/**
		 * Use the weighted average of the 4 texels
		 *   nearest the current pixel center
		 */
		LINEAR = 9729,
		/**
		 * Select the mimap level whose
		 *   texel size most closely matches the current pixel, and use the
		 *   %COGL_PIPELINE_FILTER_NEAREST criterion
		 */
		NEAREST_MIPMAP_NEAREST = 9984,
		/**
		 * Select the mimap level whose
		 *   texel size most closely matches the current pixel, and use the
		 *   %COGL_PIPELINE_FILTER_LINEAR criterion
		 */
		LINEAR_MIPMAP_NEAREST = 9985,
		/**
		 * Select the two mimap levels
		 *   whose texel size most closely matches the current pixel, use
		 *   the %COGL_PIPELINE_FILTER_NEAREST criterion on each one and take
		 *   their weighted average
		 */
		NEAREST_MIPMAP_LINEAR = 9986,
		/**
		 * Select the two mimap levels
		 *   whose texel size most closely matches the current pixel, use
		 *   the %COGL_PIPELINE_FILTER_LINEAR criterion on each one and take
		 *   their weighted average
		 */
		LINEAR_MIPMAP_LINEAR = 9987
	}

	/**
	 * The wrap mode specifies what happens when texture coordinates
	 * outside the range 0→1 are used. Note that if the filter mode is
	 * anything but %COGL_PIPELINE_FILTER_NEAREST then texels outside the
	 * range 0→1 might be used even when the coordinate is exactly 0 or 1
	 * because OpenGL will try to sample neighbouring pixels. For example
	 * if you are trying to render the full texture then you may get
	 * artifacts around the edges when the pixels from the other side are
	 * merged in if the wrap mode is set to repeat.
	 */
	enum PipelineWrapMode {
		/**
		 * The texture will be repeated. This
		 *   is useful for example to draw a tiled background.
		 */
		REPEAT = 10497,
		MIRRORED_REPEAT = 33648,
		/**
		 * The coordinates outside the
		 *   range 0→1 will sample copies of the edge pixels of the
		 *   texture. This is useful to avoid artifacts if only one copy of
		 *   the texture is being rendered.
		 */
		CLAMP_TO_EDGE = 33071,
		/**
		 * Cogl will try to automatically
		 *   decide which of the above two to use. For {@link Cogl.rectangle}, it
		 *   will use repeat mode if any of the texture coordinates are
		 *   outside the range 0→1, otherwise it will use clamp to edge. For
		 *   cogl_polygon() it will always use repeat mode. For
		 *   cogl_vertex_buffer_draw() it will use repeat mode except for
		 *   layers that have point sprite coordinate generation enabled. This
		 *   is the default value.
		 */
		AUTOMATIC = 519
	}

	enum RendererError {
		XLIB_DISPLAY_OPEN = 0,
		BAD_CONSTRAINT = 1
	}

	/**
	 * Types of shaders
	 */
	enum ShaderType {
		/**
		 * A program for proccessing vertices
		 */
		VERTEX = 0,
		/**
		 * A program for processing fragments
		 */
		FRAGMENT = 1
	}

	/**
	 * Represents how draw should affect the two buffers
	 * of a stereo framebuffer. See {@link Cogl.Framebuffer.set_stereo_mode}.
	 */
	enum StereoMode {
		/**
		 * draw to both stereo buffers
		 */
		BOTH = 0,
		/**
		 * draw only to the left stereo buffer
		 */
		LEFT = 1,
		/**
		 * draw only to the left stereo buffer
		 */
		RIGHT = 2
	}

	/**
	 * Error enumeration for Cogl
	 * 
	 * The #COGL_SYSTEM_ERROR_UNSUPPORTED error can be thrown for a
	 * variety of reasons. For example:
	 * 
	 * <itemizedlist>
	 *  <listitem><para>You've tried to use a feature that is not
	 *   advertised by {@link Cogl.has.feature}.</para></listitem>
	 *  <listitem><para>The GPU can not handle the configuration you have
	 *   requested. An example might be if you try to use too many texture
	 *   layers in a single {@link Pipeline}</para></listitem>
	 *  <listitem><para>The driver does not support some
	 *   configuration.</para></listiem>
	 * </itemizedlist>
	 * 
	 * Currently this is only used by Cogl API marked as experimental so
	 * this enum should also be considered experimental.
	 */
	enum SystemError {
		/**
		 * You tried to use a feature or
		 *    configuration not currently available.
		 */
		UNSUPPORTED = 0,
		/**
		 * You tried to allocate a resource
		 *    such as a texture and there wasn't enough memory.
		 */
		NO_MEMORY = 1
	}

	/**
	 * See {@link Cogl.Texture.set_components}.
	 */
	enum TextureComponents {
		/**
		 * Only the alpha component
		 */
		A = 1,
		/**
		 * Red and green components. Note that
		 *   this can only be used if the %COGL_FEATURE_ID_TEXTURE_RG feature
		 *   is advertised.
		 */
		RG = 2,
		/**
		 * Red, green and blue components
		 */
		RGB = 3,
		/**
		 * Red, green, blue and alpha components
		 */
		RGBA = 4,
		/**
		 * Only a depth component
		 */
		DEPTH = 5
	}

	/**
	 * Error codes that can be thrown when allocating textures.
	 */
	enum TextureError {
		/**
		 * Unsupported size
		 */
		SIZE = 0,
		/**
		 * Unsupported format
		 */
		FORMAT = 1,
		BAD_PARAMETER = 2,
		/**
		 * A primitive texture type that is
		 *   unsupported by the driver was used
		 */
		TYPE = 3
	}

	/**
	 * Different ways of interpreting vertices when drawing.
	 */
	enum VerticesMode {
		/**
		 * FIXME, equivalent to
		 * <constant>GL_POINTS</constant>
		 */
		POINTS = 0,
		/**
		 * FIXME, equivalent to <constant>GL_LINES</constant>
		 */
		LINES = 1,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_LINE_LOOP</constant>
		 */
		LINE_LOOP = 2,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_LINE_STRIP</constant>
		 */
		LINE_STRIP = 3,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_TRIANGLES</constant>
		 */
		TRIANGLES = 4,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_TRIANGLE_STRIP</constant>
		 */
		TRIANGLE_STRIP = 5,
		/**
		 * FIXME, equivalent to <constant>GL_TRIANGLE_FAN</constant>
		 */
		TRIANGLE_FAN = 6
	}

	/**
	 * Enum used to represent the two directions of rotation. This can be
	 * used to set the front face for culling by calling
	 * {@link Cogl.Pipeline.set_front_face_winding}.
	 */
	enum Winding {
		/**
		 * Vertices are in a clockwise order
		 */
		CLOCKWISE = 0,
		/**
		 * Vertices are in a counter-clockwise order
		 */
		COUNTER_CLOCKWISE = 1
	}

	enum WinsysFeature {
		MULTIPLE_ONSCREEN = 0,
		SWAP_THROTTLE = 1,
		VBLANK_COUNTER = 2,
		VBLANK_WAIT = 3,
		TEXTURE_FROM_PIXMAP = 4,
		SWAP_BUFFERS_EVENT = 5,
		SWAP_REGION = 6,
		SWAP_REGION_THROTTLE = 7,
		SWAP_REGION_SYNCHRONIZED = 8,
		BUFFER_AGE = 9,
		SYNC_AND_COMPLETE_EVENT = 10,
		N_FEATURES = 11
	}

	/**
	 * Types of auxiliary buffers
	 */
	enum BufferBit {
		/**
		 * Selects the primary color buffer
		 */
		COLOR = 1,
		/**
		 * Selects the depth buffer
		 */
		DEPTH = 2,
		/**
		 * Selects the stencil buffer
		 */
		STENCIL = 4
	}

	/**
	 * Target flags for FBOs.
	 */
	enum BufferTarget {
		/**
		 * FIXME
		 */
		WINDOW_BUFFER = 2,
		/**
		 * FIXME
		 */
		OFFSCREEN_BUFFER = 4
	}

	enum EglImageFlags {
		NONE = 0,
		NO_GET_DATA = 1
	}

	/**
	 * Pixel formats used by Cogl. For the formats with a byte per
	 * component, the order of the components specify the order in
	 * increasing memory addresses. So for example
	 * %COGL_PIXEL_FORMAT_RGB_888 would have the red component in the
	 * lowest address, green in the next address and blue after that
	 * regardless of the endianness of the system.
	 * 
	 * For the formats with non byte aligned components the component
	 * order specifies the order within a 16-bit or 32-bit number from
	 * most significant bit to least significant. So for
	 * %COGL_PIXEL_FORMAT_RGB_565, the red component would be in bits
	 * 11-15, the green component would be in 6-11 and the blue component
	 * would be in 1-5. Therefore the order in memory depends on the
	 * endianness of the system.
	 * 
	 * When uploading a texture %COGL_PIXEL_FORMAT_ANY can be used as the
	 * internal format. Cogl will try to pick the best format to use
	 * internally and convert the texture data if necessary.
	 */
	enum PixelFormat {
		/**
		 * Any format
		 */
		ANY = 0,
		/**
		 * 8 bits alpha mask
		 */
		A_8 = 17,
		/**
		 * RGB, 16 bits
		 */
		RGB_565 = 4,
		/**
		 * RGBA, 16 bits
		 */
		RGBA_4444 = 21,
		/**
		 * RGBA, 16 bits
		 */
		RGBA_5551 = 22,
		/**
		 * Not currently supported
		 */
		YUV = 7,
		/**
		 * Single luminance component
		 */
		G_8 = 8,
		/**
		 * RG, 16 bits. Note that red-green textures
		 *   are only available if %COGL_FEATURE_ID_TEXTURE_RG is advertised.
		 *   See {@link Cogl.Texture.set_components} for details.
		 */
		RG_88 = 9,
		/**
		 * RGB, 24 bits
		 */
		RGB_888 = 2,
		/**
		 * BGR, 24 bits
		 */
		BGR_888 = 34,
		/**
		 * RGBA, 32 bits
		 */
		RGBA_8888 = 19,
		/**
		 * BGRA, 32 bits
		 */
		BGRA_8888 = 51,
		/**
		 * ARGB, 32 bits
		 */
		ARGB_8888 = 83,
		/**
		 * ABGR, 32 bits
		 */
		ABGR_8888 = 115,
		/**
		 * RGBA, 32 bits, 10 bpc
		 */
		RGBA_1010102 = 29,
		/**
		 * BGRA, 32 bits, 10 bpc
		 */
		BGRA_1010102 = 61,
		/**
		 * ARGB, 32 bits, 10 bpc
		 */
		ARGB_2101010 = 93,
		/**
		 * ABGR, 32 bits, 10 bpc
		 */
		ABGR_2101010 = 125,
		/**
		 * Premultiplied RGBA, 32 bits
		 */
		RGBA_8888_PRE = 147,
		/**
		 * Premultiplied BGRA, 32 bits
		 */
		BGRA_8888_PRE = 179,
		/**
		 * Premultiplied ARGB, 32 bits
		 */
		ARGB_8888_PRE = 211,
		/**
		 * Premultiplied ABGR, 32 bits
		 */
		ABGR_8888_PRE = 243,
		/**
		 * Premultiplied RGBA, 16 bits
		 */
		RGBA_4444_PRE = 149,
		/**
		 * Premultiplied RGBA, 16 bits
		 */
		RGBA_5551_PRE = 150,
		/**
		 * Premultiplied RGBA, 32 bits, 10 bpc
		 */
		RGBA_1010102_PRE = 157,
		/**
		 * Premultiplied BGRA, 32 bits, 10 bpc
		 */
		BGRA_1010102_PRE = 189,
		/**
		 * Premultiplied ARGB, 32 bits, 10 bpc
		 */
		ARGB_2101010_PRE = 221,
		/**
		 * Premultiplied ABGR, 32 bits, 10 bpc
		 */
		ABGR_2101010_PRE = 253,
		DEPTH_16 = 265,
		DEPTH_32 = 259,
		DEPTH_24_STENCIL_8 = 771
	}

	/**
	 * Flags for {@link Cogl.Framebuffer.read_pixels_into_bitmap}
	 */
	enum ReadPixelsFlags {
		/**
		 * Read from the color buffer
		 */
		READ_PIXELS_COLOR_BUFFER = 1
	}

	/**
	 * Flags to pass to the cogl_texture_new_* family of functions.
	 */
	enum TextureFlags {
		/**
		 * No flags specified
		 */
		NONE = 0,
		/**
		 * Disables the automatic generation of
		 *   the mipmap pyramid from the base level image whenever it is
		 *   updated. The mipmaps are only generated when the texture is
		 *   rendered with a mipmap filter so it should be free to leave out
		 *   this flag when using other filtering modes
		 */
		NO_AUTO_MIPMAP = 1,
		/**
		 * Disables the slicing of the texture
		 */
		NO_SLICING = 2,
		/**
		 * Disables the insertion of the texture inside
		 *   the texture atlas used by Cogl
		 */
		NO_ATLAS = 4
	}

	/**
	 * A callback function to use for {@link Cogl.debug.object_foreach_type}.
	 */
	interface DebugObjectForeachTypeCallback {
		/**
		 * A callback function to use for {@link Cogl.debug.object_foreach_type}.
		 * @param info A pointer to a struct containing information about the type.
		 */
		(info: DebugObjectTypeInfo): void;
	}

	/**
	 * A callback used with {@link Cogl.foreach.feature} for enumerating all
	 * context level features supported by Cogl.
	 */
	interface FeatureCallback {
		/**
		 * A callback used with {@link Cogl.foreach.feature} for enumerating all
		 * context level features supported by Cogl.
		 * @param feature A single feature currently supported by Cogl
		 */
		(feature: FeatureID): void;
	}

	/**
	 * Is a callback that can be registered via
	 * {@link Cogl.Onscreen.add_frame_callback} to be called when a frame
	 * progresses in some notable way.
	 * 
	 * Please see the documentation for {@link FrameEvent} and
	 * cogl_onscreen_add_frame_callback() for more details about what
	 * events can be notified.
	 */
	interface FrameCallback {
		/**
		 * Is a callback that can be registered via
		 * {@link Cogl.Onscreen.add_frame_callback} to be called when a frame
		 * progresses in some notable way.
		 * 
		 * Please see the documentation for {@link FrameEvent} and
		 * cogl_onscreen_add_frame_callback() for more details about what
		 * events can be notified.
		 * @param onscreen The onscreen that the frame is associated with
		 * @param event A {@link FrameEvent} notifying how the frame has progressed
		 * @param info The meta information, such as timing information, about
		 *        the frame that has progressed.
		 */
		(onscreen: Onscreen, event: FrameEvent, info: any): void;
	}

	/**
	 * Is a callback that can be registered via
	 * {@link Cogl.Onscreen.add_dirty_callback} to be called when the windowing
	 * system determines that a region of the onscreen window has been
	 * lost and the application should redraw it.
	 */
	interface OnscreenDirtyCallback {
		/**
		 * Is a callback that can be registered via
		 * {@link Cogl.Onscreen.add_dirty_callback} to be called when the windowing
		 * system determines that a region of the onscreen window has been
		 * lost and the application should redraw it.
		 * @param onscreen The onscreen that the frame is associated with
		 * @param info A {@link OnscreenDirtyInfo} struct containing the details of the
		 *   dirty area
		 */
		(onscreen: Onscreen, info: OnscreenDirtyInfo): void;
	}

	/**
	 * Is a callback type used with the
	 * {@link Cogl.Onscreen.add_resize_callback} allowing applications to be
	 * notified whenever an #onscreen framebuffer is resized.
	 * 
	 * <note>Cogl automatically updates the viewport of an #onscreen
	 * framebuffer that is resized so this callback is also an indication
	 * that the viewport has been modified too</note>
	 * 
	 * <note>A resize callback will only ever be called while dispatching
	 * Cogl events from the system mainloop; so for example during
	 * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
	 * occur while an application might have arbitrary locks held for
	 * example.</note>
	 */
	interface OnscreenResizeCallback {
		/**
		 * Is a callback type used with the
		 * {@link Cogl.Onscreen.add_resize_callback} allowing applications to be
		 * notified whenever an #onscreen framebuffer is resized.
		 * 
		 * <note>Cogl automatically updates the viewport of an #onscreen
		 * framebuffer that is resized so this callback is also an indication
		 * that the viewport has been modified too</note>
		 * 
		 * <note>A resize callback will only ever be called while dispatching
		 * Cogl events from the system mainloop; so for example during
		 * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
		 * occur while an application might have arbitrary locks held for
		 * example.</note>
		 * @param onscreen A {@link Onscreen} framebuffer that was resized
		 * @param width The new width of #onscreen
		 * @param height The new height of #onscreen
		 */
		(onscreen: Onscreen, width: number, height: number): void;
	}

	/**
	 * The callback prototype used with {@link Cogl.Pipeline.foreach_layer} for
	 * iterating all the layers of a #pipeline.
	 */
	interface PipelineLayerCallback {
		/**
		 * The callback prototype used with {@link Cogl.Pipeline.foreach_layer} for
		 * iterating all the layers of a #pipeline.
		 * @param pipeline The {@link Pipeline} whos layers are being iterated
		 * @param layer_index The current layer index
		 * @returns 
		 */
		(pipeline: Pipeline, layer_index: number): boolean;
	}

	interface Texture2DEGLImageExternalAlloc {
		(tex_2d: Texture2D): boolean;
	}

	interface XlibFilterFunc {
		(event: any, data?: any | null): FilterReturn;
	}

	/**
	 * Integer representation of an angle such that 1024 corresponds to
	 * full circle (i.e., 2 * pi).
	 */
	type Angle = number;

	/**
	 * Type used for storing references to cogl objects, the CoglHandle is
	 * a fully opaque type without any public data members.
	 */
	type Handle = any;

	/**
	 * When associating private data with a {@link Object} a callback can be
	 * given which will be called either if the object is destroyed or if
	 * {@link Cogl.Object.set_user_data} is called with NULL user_data for the
	 * same key.
	 */
	type UserDataDestroyCallback = GLib.DestroyNotify;

	function blend_string_error_quark(): number;
	/**
	 * #return FALSE for an immediately detected error, TRUE otherwise.
	 * 
	 * This blits a region of the color buffer of the source buffer
	 * to the destination buffer. This function should only be
	 * called if the COGL_PRIVATE_FEATURE_BLIT_FRAMEBUFFER feature is
	 * advertised.
	 * 
	 * The source and destination rectangles are defined in offscreen
	 * framebuffer orientation. When copying between an offscreen and
	 * onscreen framebuffers, the image is y-flipped accordingly.
	 * 
	 * The two buffers must have the same value types (e.g. floating-point,
	 * unsigned int, signed int, or fixed-point), but color formats do not
	 * need to match. This limitation comes from OpenGL ES 3.0 definition
	 * of glBlitFramebuffer.
	 * 
	 * Note that this function differs a lot from the glBlitFramebuffer
	 * function provided by the GL_EXT_framebuffer_blit extension. Notably
	 * it doesn't support having different sizes for the source and
	 * destination rectangle. This doesn't seem
	 * like a particularly useful feature. If the application wanted to
	 * scale the results it may make more sense to draw a primitive
	 * instead.
	 * 
	 * The GL function is documented to be affected by the scissor. This
	 * function therefore ensure that an empty clip stack is flushed
	 * before performing the blit which means the scissor is effectively
	 * ignored.
	 * 
	 * The function also doesn't support specifying the buffers to copy
	 * and instead only the color buffer is copied. When copying the depth
	 * or stencil buffers the extension on GLES2.0 only supports copying
	 * the full buffer which would be awkward to document with this
	 * API. If we wanted to support that feature it may be better to have
	 * a separate function to copy the entire buffer for a given mask.
	 * 
	 * The #c error argument is optional, it can be NULL. If it is not NULL
	 * and this function returns FALSE, an error object with a code from
	 * COGL_SYSTEM_ERROR will be created.
	 * @param src The source {@link Framebuffer}
	 * @param dest The destination {@link Framebuffer}
	 * @param src_x Source x position
	 * @param src_y Source y position
	 * @param dst_x Destination x position
	 * @param dst_y Destination y position
	 * @param width Width of region to copy
	 * @param height Height of region to copy
	 * @returns 
	 */
	function blit_framebuffer(src: Framebuffer, dest: Framebuffer, src_x: number, src_y: number, dst_x: number, dst_y: number, width: number, height: number): boolean;
	function clutter_winsys_has_feature_CLUTTER(feature: WinsysFeature): boolean;
	/**
	 * Compares two {@link Color}<!-- -->s and checks if they are the same.
	 * 
	 * This function can be passed to {@link G.hash_table_new} as the #key_equal_func
	 * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
	 * @param v1 a {@link Color}
	 * @param v2 a {@link Color}
	 * @returns %TRUE if the two colors are the same.
	 */
	function color_equal(v1: any | null, v2: any | null): boolean;
	/**
	 * Converts a color expressed in HLS (hue, luminance and saturation)
	 * values into a {@link Color}.
	 * @param hue hue value, in the 0 .. 360 range
	 * @param saturation saturation value, in the 0 .. 1 range
	 * @param luminance luminance value, in the 0 .. 1 range
	 * @returns return location for a {@link Color}
	 */
	function color_init_from_hsl(hue: number, saturation: number, luminance: number): Color;
	/**
	 * Create a new cogl program object that can be used to replace parts of the GL
	 * rendering pipeline with custom code.
	 * @returns a new cogl program.
	 */
	function create_program(): Handle;
	/**
	 * Create a new shader handle, use {@link Cogl.shader.source} to set the
	 * source code to be used on it.
	 * @param shader_type COGL_SHADER_TYPE_VERTEX or COGL_SHADER_TYPE_FRAGMENT.
	 * @returns a new shader handle.
	 */
	function create_shader(shader_type: ShaderType): Handle;
	/**
	 * Prints the contents of a {@link Matrix} to stdout.
	 * @param matrix A {@link Matrix}
	 */
	function debug_matrix_print(matrix: Matrix): void;
	/**
	 * Invokes #func once for each type of object that Cogl uses and
	 * passes a count of the number of objects for that type. This is
	 * intended to be used solely for debugging purposes to track down
	 * issues with objects leaking.
	 * @param func A callback function for each type
	 */
	function debug_object_foreach_type(func: DebugObjectForeachTypeCallback): void;
	/**
	 * Prints a list of all the object types that Cogl uses along with the
	 * number of objects of that type that are currently in use. This is
	 * intended to be used solely for debugging purposes to track down
	 * issues with objects leaking.
	 */
	function debug_object_print_instances(): void;
	function egl_texture_2d_new_from_image(ctx: Context, width: number, height: number, format: PixelFormat, image: any, flags: EglImageFlags): Texture2D;
	/**
	 * This function should only need to be called in exceptional circumstances.
	 * 
	 * As an optimization Cogl drawing functions may batch up primitives
	 * internally, so if you are trying to use raw GL outside of Cogl you stand a
	 * better chance of being successful if you ask Cogl to flush any batched
	 * geometry before making your state changes.
	 * 
	 * It only ensure that the underlying driver is issued all the commands
	 * necessary to draw the batched primitives. It provides no guarantees about
	 * when the driver will complete the rendering.
	 * 
	 * This provides no guarantees about the GL state upon returning and to avoid
	 * confusing Cogl you should aim to restore any changes you make before
	 * resuming use of Cogl.
	 * 
	 * If you are making state changes with the intention of affecting Cogl drawing
	 * primitives you are 100% on your own since you stand a good chance of
	 * conflicting with Cogl internals. For example clutter-gst which currently
	 * uses direct GL calls to bind ARBfp programs will very likely break when Cogl
	 * starts to use ARBfb programs itself for the material API.
	 */
	function flush(): void;
	/**
	 * Iterates through all the context level features currently supported
	 * for a given #context and for each feature #callback is called.
	 * @param context A {@link Context} pointer
	 * @param callback A {@link FeatureCallback} called for each
	 *            supported feature
	 */
	function foreach_feature(context: Context, callback: FeatureCallback): void;
	function framebuffer_error_quark(): number;
	/**
	 * Queries if backface culling has been enabled via
	 * {@link Cogl.set.backface_culling_enabled}
	 * @returns %TRUE if backface culling is enabled, and %FALSE otherwise
	 */
	function get_backface_culling_enabled(): boolean;
	/**
	 * Returns the current time value from Cogl's internal clock. This
	 * clock is used for measuring times such as the presentation time
	 * in a {@link FrameInfo}.
	 * 
	 * This method is meant for converting timestamps retrieved from Cogl
	 * to other time systems, and is not meant to be used as a standalone
	 * timing system. For that reason, if this function is called without
	 * having retrieved a valid (non-zero) timestamp from Cogl first, it
	 * may return 0 to indicate that Cogl has no active internal clock.
	 * @param context a {@link Context} pointer
	 * @returns the time value for the Cogl clock, in nanoseconds
	 *  from an arbitrary point in time, or 0 if Cogl doesn't have an
	 *  active internal clock.
	 */
	function get_clock_time(context: Context): number;
	/**
	 * Queries if depth testing has been enabled via {@link Cogl.set_depth_test_enable}
	 * @returns %TRUE if depth testing is enabled, and %FALSE otherwise
	 */
	function get_depth_test_enabled(): boolean;
	/**
	 * Returns the graphics reset status as reported by
	 * GetGraphicsResetStatusARB defined in the ARB_robustness extension.
	 * 
	 * Note that Cogl doesn't normally enable the ARB_robustness
	 * extension in which case this will only ever return
	 * #COGL_GRAPHICS_RESET_STATUS_NO_ERROR.
	 * 
	 * Applications must explicitly use a backend specific method to
	 * request that errors get reported such as X11's
	 * {@link Cogl.xlib.renderer_request_reset_on_video_memory_purge}.
	 * @param context a {@link Context} pointer
	 * @returns a {@link GraphicsResetStatus}
	 */
	function get_graphics_reset_status(context: Context): GraphicsResetStatus;
	/**
	 * Retrieves the #GOptionGroup used by Cogl to parse the command
	 * line options. Clutter uses this to handle the Cogl command line
	 * options during its initialization process.
	 * @returns a #GOptionGroup
	 */
	function get_option_group(): GLib.OptionGroup;
	/**
	 * Gets a pointer to a given GL or GL ES extension function. This acts
	 * as a wrapper around glXGetProcAddress() or whatever is the
	 * appropriate function for the current backend.
	 * 
	 * <note>This function should not be used to query core opengl API
	 * symbols since eglGetProcAddress for example doesn't allow this and
	 * and may return a junk pointer if you do.</note>
	 * @param name the name of the function.
	 * @returns a pointer to the requested function or %NULL if the
	 *   function is not available.
	 */
	function get_proc_address(name: string): GObject.Callback;
	function gtype_matrix_get_type(): GObject.Type;
	function handle_get_type(): GObject.Type;
	/**
	 * Checks if a given #feature is currently available
	 * 
	 * Cogl does not aim to be a lowest common denominator API, it aims to
	 * expose all the interesting features of GPUs to application which
	 * means applications have some responsibility to explicitly check
	 * that certain features are available before depending on them.
	 * @param context A {@link Context} pointer
	 * @param feature A {@link FeatureID}
	 * @returns %TRUE if the #feature is currently supported or %FALSE if
	 * not.
	 */
	function has_feature(context: Context, feature: FeatureID): boolean;
	/**
	 * Checks if a list of features are all currently available.
	 * 
	 * This checks all of the listed features using {@link Cogl.has.feature} and
	 * returns %TRUE if all the features are available or %FALSE
	 * otherwise.
	 * @param context A {@link Context} pointer
	 * @returns %TRUE if all the features are available, %FALSE
	 * otherwise.
	 */
	function has_features(context: Context): boolean;
	/**
	 * Checks whether #object is a {@link Bitmap}
	 * @param object a {@link Object} pointer
	 * @returns %TRUE if the passed #object represents a bitmap,
	 *   and %FALSE otherwise
	 */
	function is_bitmap(object: any | null): boolean;
	/**
	 * Gets whether the given object references an existing context object.
	 * @param object An object or %NULL
	 * @returns %TRUE if the #object references a {@link Context},
	 *   %FALSE otherwise
	 */
	function is_context(object: any | null): boolean;
	/**
	 * Gets whether the given object references a {@link Framebuffer}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Framebuffer}
	 *   and %FALSE otherwise.
	 */
	function is_framebuffer(object: any | null): boolean;
	/**
	 * Determines whether the given {@link Object} references an offscreen
	 * framebuffer object.
	 * @param object A pointer to a {@link Object}
	 * @returns %TRUE if #object is a {@link Offscreen} framebuffer,
	 *          %FALSE otherwise
	 */
	function is_offscreen(object: any | null): boolean;
	/**
	 * Gets whether the given object references a {@link Onscreen}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Onscreen}
	 *   and %FALSE otherwise.
	 */
	function is_onscreen(object: any | null): boolean;
	/**
	 * Gets whether the given #object references an existing pipeline object.
	 * @param object A {@link Object}
	 * @returns %TRUE if the #object references a {@link Pipeline},
	 *   %FALSE otherwise
	 */
	function is_pipeline(object: any | null): boolean;
	/**
	 * Gets whether the given handle references an existing program object.
	 * @param handle A CoglHandle
	 * @returns %TRUE if the handle references a program,
	 *   %FALSE otherwise
	 */
	function is_program(handle: Handle): boolean;
	/**
	 * Gets whether the given handle references an existing shader object.
	 * @param handle A CoglHandle
	 * @returns %TRUE if the handle references a shader,
	 *   %FALSE otherwise
	 */
	function is_shader(handle: Handle): boolean;
	/**
	 * Gets whether the given object references a texture object.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the #object references a texture, and
	 *   %FALSE otherwise
	 */
	function is_texture(object: any | null): boolean;
	/**
	 * Gets whether the given object references an existing {@link Texture2D}
	 * object.
	 * @param object A {@link Object}
	 * @returns %TRUE if the object references a {@link Texture2D},
	 *   %FALSE otherwise
	 */
	function is_texture_2d(object: any | null): boolean;
	/**
	 * Gets whether the given object references a {@link Texture2DSliced}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Texture2DSliced}
	 *   and %FALSE otherwise.
	 */
	function is_texture_2d_sliced(object: any | null): boolean;
	/**
	 * Compares two matrices to see if they represent the same
	 * transformation. Although internally the matrices may have different
	 * annotations associated with them and may potentially have a cached
	 * inverse matrix these are not considered in the comparison.
	 * @param v1 A 4x4 transformation matrix
	 * @param v2 A 4x4 transformation matrix
	 * @returns 
	 */
	function matrix_equal(v1: any | null, v2: any | null): boolean;
	/**
	 * Queries the number of bytes per pixel for a given format in the given plane.
	 * @param format The pixel format
	 * @param plane The index of the plane (should not be more than the number of planes
	 *         in the given format).
	 * @returns The number of bytes per pixel in the given format's given plane.
	 */
	function pixel_format_get_bytes_per_pixel(format: PixelFormat, plane: number): number;
	/**
	 * Returns the number of planes the given CoglPixelFormat specifies.
	 * @param format The format for which to get the number of planes
	 * @returns The no. of planes of #format (at most %COGL_PIXEL_FORMAT_MAX_PLANES)
	 */
	function pixel_format_get_n_planes(format: PixelFormat): number;
	/**
	 * Returns a string representation of #format, useful for debugging purposes.
	 * @param format a {@link PixelFormat}
	 * @returns A string representation of #format.
	 */
	function pixel_format_to_string(format: PixelFormat): string;
	/**
	 * Attaches a shader to a program object. A program can have multiple
	 * vertex or fragment shaders but only one of them may provide a
	 * main() function. It is allowed to use a program with only a vertex
	 * shader or only a fragment shader.
	 * @param program_handle a {@link Handle} for a shdaer program.
	 * @param shader_handle a {@link Handle} for a vertex of fragment shader.
	 */
	function program_attach_shader(program_handle: Handle, shader_handle: Handle): void;
	/**
	 * Retrieve the location (offset) of a uniform variable in a shader program,
	 * a uniform is a variable that is constant for all vertices/fragments for a
	 * shader object and is possible to modify as an external parameter.
	 * @param handle a {@link Handle} for a shader program.
	 * @param uniform_name the name of a uniform.
	 * @returns the offset of a uniform in a specified program.
	 */
	function program_get_uniform_location(handle: Handle, uniform_name: string): number;
	/**
	 * Links a program making it ready for use. Note that calling this
	 * function is optional. If it is not called the program will
	 * automatically be linked the first time it is used.
	 * @param handle a {@link Handle} for a shader program.
	 */
	function program_link(handle: Handle): void;
	/**
	 * Changes the value of a floating point uniform for the given linked
	 * #program.
	 * @param program A {@link Handle} for a linked program
	 * @param uniform_location the uniform location retrieved from
	 *    {@link Cogl.program.get_uniform_location}.
	 * @param value the new value of the uniform.
	 */
	function program_set_uniform_1f(program: Handle, uniform_location: number, value: number): void;
	/**
	 * Changes the value of an integer uniform for the given linked
	 * #program.
	 * @param program A {@link Handle} for a linked program
	 * @param uniform_location the uniform location retrieved from
	 *    {@link Cogl.program.get_uniform_location}.
	 * @param value the new value of the uniform.
	 */
	function program_set_uniform_1i(program: Handle, uniform_location: number, value: number): void;
	/**
	 * Changes the value of a float vector uniform, or uniform array for
	 * the given linked #program.
	 * @param program A {@link Handle} for a linked program
	 * @param uniform_location the uniform location retrieved from
	 *    {@link Cogl.program.get_uniform_location}.
	 * @param n_components The number of components for the uniform. For
	 * example with glsl you'd use 3 for a vec3 or 4 for a vec4.
	 * @param value the new value of the uniform[s].
	 */
	function program_set_uniform_float(program: Handle, uniform_location: number, n_components: number, value: number[]): void;
	/**
	 * Changes the value of a int vector uniform, or uniform array for
	 * the given linked #program.
	 * @param program A {@link Handle} for a linked program
	 * @param uniform_location the uniform location retrieved from
	 *    {@link Cogl.program.get_uniform_location}.
	 * @param n_components The number of components for the uniform. For
	 * example with glsl you'd use 3 for a vec3 or 4 for a vec4.
	 * @param value the new value of the uniform[s].
	 */
	function program_set_uniform_int(program: Handle, uniform_location: number, n_components: number, value: number[]): void;
	/**
	 * Changes the value of a matrix uniform, or uniform array in the
	 * given linked #program.
	 * @param program A {@link Handle} for a linked program
	 * @param uniform_location the uniform location retrieved from
	 *    {@link Cogl.program.get_uniform_location}.
	 * @param dimensions The dimensions of the matrix. So for for example pass
	 *    2 for a 2x2 matrix or 3 for 3x3.
	 * @param transpose Whether to transpose the matrix when setting the uniform.
	 * @param value the new value of the uniform.
	 */
	function program_set_uniform_matrix(program: Handle, uniform_location: number, dimensions: number, transpose: boolean, value: number[]): void;
	/**
	 * Sets whether textures positioned so that their backface is showing
	 * should be hidden. This can be used to efficiently draw two-sided
	 * textures or fully closed cubes without enabling depth testing. This
	 * only affects calls to the cogl_rectangle* family of functions and
	 * cogl_vertex_buffer_draw*. Backface culling is disabled by default.
	 * @param setting %TRUE to enable backface culling or %FALSE to disable.
	 */
	function set_backface_culling_enabled(setting: boolean): void;
	/**
	 * Sets whether depth testing is enabled. If it is disabled then the
	 * order that actors are layered on the screen depends solely on the
	 * order specified using {@link Clutter.Actor.raise} and
	 * clutter_actor_lower(), otherwise it will also take into account the
	 * actor's depth. Depth testing is disabled by default.
	 * @param setting %TRUE to enable depth testing or %FALSE to disable.
	 */
	function set_depth_test_enabled(setting: boolean): void;
	function set_tracing_disabled_on_thread(data: any | null): void;
	function set_tracing_enabled_on_thread(data: any | null, group: string, filename: string): void;
	function set_tracing_enabled_on_thread_with_fd(data: any | null, group: string, fd: number): void;
	/**
	 * Retrieves the type of a shader {@link Handle}
	 * @param handle {@link Handle} for a shader.
	 * @returns %COGL_SHADER_TYPE_VERTEX if the shader is a vertex processor
	 *          or %COGL_SHADER_TYPE_FRAGMENT if the shader is a frament processor
	 */
	function shader_get_type(handle: Handle): ShaderType;
	/**
	 * Replaces the current source associated with a shader with a new
	 * one.
	 * 
	 * Please see <link
	 * linkend="cogl-Shaders-and-Programmable-Pipeline.description">above</link>
	 * for a description of the recommended format for the shader code.
	 * @param shader {@link Handle} for a shader.
	 * @param source Shader source.
	 */
	function shader_source(shader: Handle, source: string): void;
	function texture_error_quark(): number;
	/**
	 * Creates a {@link Texture} from a #CoglBitmap.
	 * @param bitmap A {@link Bitmap} pointer
	 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
	 * @param internal_format the {@link PixelFormat} to use for the GPU storage of the
	 * texture
	 * @returns A newly created {@link Texture} or
	 *               %NULL on failure
	 */
	function texture_new_from_bitmap(bitmap: Bitmap, flags: TextureFlags, internal_format: PixelFormat): Texture;
	/**
	 * Creates a new {@link Texture} based on data residing in memory.
	 * @param width width of texture in pixels
	 * @param height height of texture in pixels
	 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
	 * @param format the {@link PixelFormat} the buffer is stored in in RAM
	 * @param internal_format the {@link PixelFormat} that will be used for storing
	 *    the buffer on the GPU. If COGL_PIXEL_FORMAT_ANY is given then a
	 *    premultiplied format similar to the format of the source data will
	 *    be used. The default blending equations of Cogl expect premultiplied
	 *    color data; the main use of passing a non-premultiplied format here
	 *    is if you have non-premultiplied source data and are going to adjust
	 *    the blend mode (see {@link Cogl.Material.set_blend}) or use the data for
	 *    something other than straight blending.
	 * @param rowstride the memory offset in bytes between the starts of
	 *    scanlines in #data
	 * @param data pointer the memory region where the source buffer resides
	 * @returns A newly created {@link Texture} or
	 *               %NULL on failure
	 */
	function texture_new_from_data(width: number, height: number, flags: TextureFlags, format: PixelFormat, internal_format: PixelFormat, rowstride: number, data: number[]): Texture;
	/**
	 * Creates a {@link Texture} from an image file.
	 * @param filename the file to load
	 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
	 * @param internal_format the {@link PixelFormat} to use for the GPU storage of the
	 *    texture. If %COGL_PIXEL_FORMAT_ANY is given then a premultiplied
	 *    format similar to the format of the source data will be used. The
	 *    default blending equations of Cogl expect premultiplied color data;
	 *    the main use of passing a non-premultiplied format here is if you
	 *    have non-premultiplied source data and are going to adjust the blend
	 *    mode (see {@link Cogl.Material.set_blend}) or use the data for something
	 *    other than straight blending.
	 * @returns A newly created {@link Texture} or
	 *               %NULL on failure
	 */
	function texture_new_from_file(filename: string, flags: TextureFlags, internal_format: PixelFormat): Texture;
	/**
	 * Creates a new {@link Texture} with the specified dimensions and pixel format.
	 * @param width width of texture in pixels.
	 * @param height height of texture in pixels.
	 * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
	 * @param internal_format the {@link PixelFormat} to use for the GPU storage of the
	 *    texture.
	 * @returns A newly created {@link Texture} or %NULL on failure
	 */
	function texture_new_with_size(width: number, height: number, flags: TextureFlags, internal_format: PixelFormat): Texture;
	/**
	 * Assuming you know the given #onscreen framebuffer is based on an x11 window
	 * this queries the XID of that window. If
	 * {@link Cogl.x11_onscreen_set_foreign_window_xid} was previously called then it
	 * will return that same XID otherwise it will be the XID of a window Cogl
	 * created internally. If the window has not been allocated yet and a foreign
	 * xid has not been set then it's undefined what value will be returned.
	 * 
	 * It's undefined what this function does if called when not using an x11 based
	 * renderer.
	 * @param onscreen A {@link Onscreen} framebuffer
	 * @returns 
	 */
	function x11_onscreen_get_window_xid(onscreen: Onscreen): number;
	/**
	 * Adds a callback function that will receive all native events. The
	 * function can stop further processing of the event by return
	 * %COGL_FILTER_REMOVE.
	 * @param renderer a {@link Renderer}
	 * @param func the callback function
	 */
	function xlib_renderer_add_filter(renderer: any, func: XlibFilterFunc): void;
	function xlib_renderer_get_display(renderer: any): any;
	function xlib_renderer_get_foreign_display(renderer: any): any;
	/**
	 * This function processes a single event; it can be used to hook into
	 * external event retrieval (for example that done by Clutter or
	 * GDK).
	 * @param renderer a {@link Renderer}
	 * @param event pointer to an XEvent structure
	 * @returns {@link FilterReturn}. %COGL_FILTER_REMOVE indicates that
	 * Cogl has internally handled the event and the caller should do no
	 * further processing. %COGL_FILTER_CONTINUE indicates that Cogl is
	 * either not interested in the event, or has used the event to update
	 * internal state without taking any exclusive action.
	 */
	function xlib_renderer_handle_event(renderer: any, event: any): FilterReturn;
	/**
	 * Removes a callback that was previously added with
	 * {@link Cogl.xlib.renderer_add_filter}.
	 * @param renderer a {@link Renderer}
	 * @param func the callback function
	 */
	function xlib_renderer_remove_filter(renderer: any, func: XlibFilterFunc): void;
	/**
	 * Sets whether Cogl should make use of the
	 * NV_robustness_video_memory_purge extension, if exposed by the
	 * driver, by initializing the GLX context appropriately.
	 * 
	 * The extension is only useful when running on certain versions of
	 * the NVIDIA driver. Quoting from the spec:
	 * 
	 * "The NVIDIA OpenGL driver architecture on Linux has a limitation:
	 *  resources located in video memory are not persistent across certain
	 *  events. VT switches, suspend/resume events, and mode switching
	 *  events may erase the contents of video memory. Any resource that
	 *  is located exclusively in video memory, such as framebuffer objects
	 *  (FBOs), will be lost."
	 * 
	 * "This extension provides a way for applications to discover when video
	 *  memory content has been lost, so that the application can re-populate
	 *  the video memory content as necessary."
	 * 
	 * "Any driver that exposes this extension is a driver that considers
	 *  video memory to be volatile. Once the driver stack has been
	 *  improved, the extension will no longer be exposed."
	 * 
	 * {@link Cogl.get.graphics_reset_status} needs to be called at least once
	 * every frame to find out if video memory was purged.
	 * 
	 * Note that this doesn't cause Cogl to enable robust buffer access
	 * but other context reset errors may still happen and be reported via
	 * cogl_get_graphics_reset_status() if external factors cause the
	 * driver to trigger them.
	 * 
	 * This defaults to %FALSE and is effective only if called before
	 * cogl_display_setup() .
	 * @param renderer a {@link Renderer}
	 * @param enable The new value
	 */
	function xlib_renderer_request_reset_on_video_memory_purge(renderer: any, enable: boolean): void;
	/**
	 * Sets a foreign Xlib display that Cogl will use for and Xlib based winsys
	 * backend.
	 * 
	 * Note that calling this function will automatically disable Cogl's
	 * event retrieval. Cogl still needs to see all of the X events so the
	 * application should also use {@link Cogl.xlib.renderer_handle_event} if it
	 * uses this function.
	 * @param renderer a {@link Renderer}
	 * @param display
	 */
	function xlib_renderer_set_foreign_display(renderer: any, display: any): void;
	const AFIRST_BIT: number;

	const A_BIT: number;

	const BGR_BIT: number;

	const DEPTH_BIT: number;

	/**
	 * The maximum number of planes of a pixel format (see also
	 * {@link Cogl.PixelFormat.get_planes}).
	 * @returns The maximum number of planes of a pixel format (see also
	 * {@link Cogl.PixelFormat.get_planes}).
	 */
	const PIXEL_FORMAT_MAX_PLANES: number;

	const PREMULT_BIT: number;

	const STENCIL_BIT: number;

	const TEXTURE_MAX_WASTE: number;

}