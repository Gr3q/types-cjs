/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.GeocodeGlib {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BoundingBox} instead.
	 */
	interface IBoundingBox {
		/**
		 * Bottom coordinate.
		 */
		bottom: number;
		/**
		 * Left coordinate.
		 */
		left: number;
		/**
		 * Right coordinate.
		 */
		right: number;
		/**
		 * Top coordinate.
		 */
		top: number;
		/**
		 * Compare two #GeocodeBoundingBox instances for equality. This compares all
		 * fields and only returns %TRUE if the instances are exactly equal.
		 * 
		 * Both instances must be non-%NULL.
		 * @param b another bounding box
		 * @returns %TRUE if the instances are equal, %FALSE otherwise
		 */
		equal(b: BoundingBox): boolean;
		/**
		 * Gets the bottom coordinate of #bbox.
		 * @returns the bottom coordinate of #bbox.
		 */
		get_bottom(): number;
		/**
		 * Gets the left coordinate of #bbox.
		 * @returns the left coordinate of #bbox.
		 */
		get_left(): number;
		/**
		 * Gets the right coordinate of #bbox.
		 * @returns the right coordinate of #bbox.
		 */
		get_right(): number;
		/**
		 * Gets the top coordinate of #bbox.
		 * @returns the top coordinate of #bbox.
		 */
		get_top(): number;
		connect(signal: "notify::bottom", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::left", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::right", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::top", callback: (owner: this, ...args: any) => void): number;

	}

	type BoundingBoxInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IBoundingBox,
		"bottom" |
		"left" |
		"right" |
		"top">;

	export interface BoundingBoxInitOptions extends BoundingBoxInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BoundingBox} instead.
	 */
	type BoundingBoxMixin = IBoundingBox & GObject.Object;

	/**
	 * All the fields in the #GeocodeLocation structure are private and should
	 * never be accessed directly.
	 */
	interface BoundingBox extends BoundingBoxMixin {}

	class BoundingBox {
		public constructor(options?: Partial<BoundingBoxInitOptions>);
		/**
		 * Creates a new #GeocodeBoundingBox object.
		 * @param top The left coordinate
		 * @param bottom The bottom coordinate
		 * @param left The left coordinate
		 * @param right The right coordinate
		 * @returns a new #GeocodeBoundingBox object. Use {@link GObject.unref} when done.
		 */
		public static new(top: number, bottom: number, left: number, right: number): BoundingBox;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Forward} instead.
	 */
	interface IForward {
		/**
		 * The number of requested results to a search query.
		 */
		answer_count: number;
		/**
		 * If set to #TRUE then only results in the #GeocodeForward:search-area
		 * bounding box are returned.
		 * If set to #FALSE the #GeocodeForward:search-area is treated like a
		 * preferred area for results.
		 */
		bounded: boolean;
		/**
		 * The bounding box that limits the search area.
		 * If #GeocodeForward:bounded property is set to #TRUE only results from
		 * this area is returned.
		 */
		search_area: BoundingBox;
		/**
		 * Gets the number of requested results for searches.
		 * @returns 
		 */
		get_answer_count(): number;
		/**
		 * Gets the #GeocodeForward:bounded property that regulates whether the
		 * #GeocodeForward:search-area property acts restricting or not.
		 * @returns 
		 */
		get_bounded(): boolean;
		/**
		 * Gets the area to limit searches within.
		 * @returns the search area, or %NULL if none is set
		 */
		get_search_area(): BoundingBox | null;
		/**
		 * Gets the result of a forward geocoding
		 * query using the current backend (see {@link Geocode.forward_set_backend}). By
		 * default the GNOME Nominatim server is used. See #GeocodeBackend for more
		 * information.
		 * 
		 * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
		 * @returns A list of
		 * places or %NULL in case of errors. Free the returned instances with
		 * {@link GObject.unref} and the list with g_list_free() when done.
		 */
		search(): Place[];
		/**
		 * Asynchronously performs a forward geocoding
		 * query using a web service. Use {@link Geocode.forward_search} to do the same
		 * thing synchronously.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * geocode_forward_search_finish() to get the result of the operation.
		 * @param cancellable optional #GCancellable forward, %NULL to ignore.
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		search_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes a forward geocoding operation. See {@link Geocode.forward_search_async}.
		 * @param res a #GAsyncResult.
		 * @returns A list of
		 * places or %NULL in case of errors. Free the returned instances with
		 * {@link GObject.unref} and the list with g_list_free() when done.
		 */
		search_finish(res: Gio.AsyncResult): Place[];
		/**
		 * Sets the number of requested results to #count.
		 * @param count the number of requested results, which must be greater than zero
		 */
		set_answer_count(count: number): void;
		/**
		 * Specifies the backend to use in the forward geocoding operation.
		 * 
		 * If none is given, the default GNOME Nominatim server is used.
		 * @param backend a #GeocodeBackend, or %NULL to use the
		 *    default one.
		 */
		set_backend(backend?: Backend | null): void;
		/**
		 * Set the #GeocodeForward:bounded property that regulates whether the
		 * #GeocodeForward:search-area property acts restricting or not.
		 * @param bounded #TRUE to restrict results to only items contained within the
		 * #GeocodeForward:search-area bounding box.
		 */
		set_bounded(bounded: boolean): void;
		/**
		 * Sets the area to limit searches within.
		 * @param box a bounding box to limit the search area.
		 */
		set_search_area(box: BoundingBox): void;
		connect(signal: "notify::answer-count", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::bounded", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::search-area", callback: (owner: this, ...args: any) => void): number;

	}

	type ForwardInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IForward,
		"answer_count" |
		"bounded" |
		"search_area">;

	export interface ForwardInitOptions extends ForwardInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Forward} instead.
	 */
	type ForwardMixin = IForward & GObject.Object;

	/**
	 * All the fields in the #GeocodeForward structure are private and should never be accessed directly.
	 */
	interface Forward extends ForwardMixin {}

	class Forward {
		public constructor(options?: Partial<ForwardInitOptions>);
		/**
		 * Creates a new #GeocodeForward to perform geocoding with. The
		 * #GHashTable is in the format used by Telepathy, and documented
		 * on <ulink url="http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location">Telepathy's specification site</ulink>.
		 * 
		 * See also: <ulink url="http://xmpp.org/extensions/xep-0080.html">XEP-0080 specification</ulink>.
		 * @param params a #GHashTable with string keys, and #GValue values.
		 * @returns a new #GeocodeForward. Use {@link GObject.unref} when done.
		 */
		public static new_for_params(params: string[]): Forward;
		/**
		 * Creates a new #GeocodeForward to perform forward geocoding with. The
		 * string is in free-form format.
		 * @param str a string containing a free-form description of the location
		 * @returns a new #GeocodeForward. Use {@link GObject.unref} when done.
		 */
		public static new_for_string(str: string): Forward;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Location} instead.
	 */
	interface ILocation {
		/**
		 * The accuracy of this location in meters.
		 */
		accuracy: number;
		/**
		 * The altitude of this location in meters.
		 */
		altitude: number;
		/**
		 * The Coordinate Reference System Identification of this location.
		 * Only the value 'wgs84' is currently valid.
		 */
		crs: LocationCRS;
		/**
		 * The description of this location.
		 */
		description: string;
		/**
		 * The latitude of this location in degrees.
		 */
		latitude: number;
		/**
		 * The longitude of this location in degrees.
		 */
		longitude: number;
		/**
		 * A timestamp in seconds since
		 * <ulink url="http://en.wikipedia.org/wiki/Unix_epoch">Epoch</ulink>,
		 * giving when the location was resolved from an address.
		 * 
		 * A value of 0 (zero) will be interpreted as the current time.
		 */
		timestamp: number;
		/**
		 * Compare two #GeocodeLocation instances for equality. This compares all fields
		 * and only returns %TRUE if the instances are exactly equal. For example, if
		 * both locations have the same physical coordinates, but one location has its
		 * #GeocodeLocation:description property set and the other does not, %FALSE
		 * will be returned. Similarly, if both locations have the same
		 * #GeocodeLocation:latitude, #GeocodeLocation:longitude and
		 * #GeocodeLocation:altitude, but a different #GeocodeLocation:accuracy or
		 * #GeocodeLocation:timestamp, %FALSE will be returned. Or if both locations
		 * have the same#GeocodeLocation:latitude and #GeocodeLocation:longitude but a
		 * different #GeocodeLocation:altitude, %FALSE will be returned.
		 * 
		 * Both instances must be non-%NULL.
		 * @param b another location
		 * @returns %TRUE if the instances are equal, %FALSE otherwise
		 */
		equal(b: Location): boolean;
		/**
		 * Gets the accuracy (in meters) of location #loc.
		 * @returns The accuracy of location #loc.
		 */
		get_accuracy(): number;
		/**
		 * Gets the altitude of location #loc.
		 * @returns The altitude of location #loc.
		 */
		get_altitude(): number;
		/**
		 * Gets the Coordinate Reference System Identification of location #loc.
		 * @returns The CRS of location #loc.
		 */
		get_crs(): LocationCRS;
		/**
		 * Gets the description of location #loc.
		 * @returns The description of location #loc.
		 */
		get_description(): string;
		/**
		 * Calculates the distance in km, along the curvature of the Earth,
		 * between 2 locations. Note that altitude changes are not
		 * taken into account.
		 * @param locb a #GeocodeLocation
		 * @returns a distance in km.
		 */
		get_distance_from(locb: Location): number;
		/**
		 * Gets the latitude of location #loc.
		 * @returns The latitude of location #loc.
		 */
		get_latitude(): number;
		/**
		 * Gets the longitude of location #loc.
		 * @returns The longitude of location #loc.
		 */
		get_longitude(): number;
		/**
		 * Gets the timestamp (in seconds since the Epoch) of location #loc. See
		 * #GeocodeLocation:timestamp.
		 * @returns The timestamp of location #loc.
		 */
		get_timestamp(): number;
		/**
		 * Sets the description of #loc to #description.
		 * @param description a description for the location
		 */
		set_description(description: string): void;
		/**
		 * Initialize a #GeocodeLocation object with the given #uri.
		 * 
		 * The URI should be in the geo scheme (RFC 5870) which in its simplest form
		 * looks like:
		 * 
		 * - geo:latitude,longitude
		 * 
		 * An <ulink
		 * url="http://developer.android.com/guide/components/intents-common.html#Maps">
		 * Android extension</ulink> to set a description is also supported in the form of:
		 * 
		 * - geo:0,0?q=latitude,longitude(description)
		 * @param uri a URI mapping out a location
		 * @returns %TRUE on success and %FALSE on error.
		 */
		set_from_uri(uri: string): boolean;
		/**
		 * Creates a URI representing #loc in the scheme specified in #scheme.
		 * @param scheme the scheme of the requested URI
		 * @returns a URI representing the location. The returned string should be freed
		 * with {@link G.free} when no longer needed.
		 */
		to_uri(scheme: LocationURIScheme): string;
		connect(signal: "notify::accuracy", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::altitude", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::crs", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::description", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::latitude", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::longitude", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::timestamp", callback: (owner: this, ...args: any) => void): number;

	}

	type LocationInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ILocation,
		"accuracy" |
		"altitude" |
		"crs" |
		"description" |
		"latitude" |
		"longitude" |
		"timestamp">;

	export interface LocationInitOptions extends LocationInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Location} instead.
	 */
	type LocationMixin = ILocation & GObject.Object;

	/**
	 * All the fields in the #GeocodeLocation structure are private and should never be accessed directly.
	 */
	interface Location extends LocationMixin {}

	class Location {
		public constructor(options?: Partial<LocationInitOptions>);
		/**
		 * Creates a new #GeocodeLocation object.
		 * @param latitude a valid latitude
		 * @param longitude a valid longitude
		 * @param accuracy accuracy of location in meters
		 * @returns a new #GeocodeLocation object. Use {@link GObject.unref} when done.
		 */
		public static new(latitude: number, longitude: number, accuracy: number): Location;
		/**
		 * Creates a new #GeocodeLocation object.
		 * @param latitude a valid latitude
		 * @param longitude a valid longitude
		 * @param accuracy accuracy of location in meters
		 * @param description a description for the location
		 * @returns a new #GeocodeLocation object. Use {@link GObject.unref} when done.
		 */
		public static new_with_description(latitude: number, longitude: number, accuracy: number, description: string): Location;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MockBackend} instead.
	 */
	interface IMockBackend {
		/**
		 * Add a query and corresponding result (or error) to the mock backend, meaning
		 * that if it receives a forward search for #params through
		 * {@link Geocode.backend_forward_search} (or its asynchronous variants), the mock
		 * backend will return the given #results or #error to the caller.
		 * 
		 * If a set of #params is added to the backend multiple times, the most
		 * recently provided #results and #error will be used.
		 * 
		 * Exactly one of #results and #error must be set. Empty result sets are
		 * represented as a %GEOCODE_ERROR_NO_MATCHES error.
		 * @param params query parameters to
		 *     respond to, in the same format as accepted by {@link Geocode.forward_search}
		 * @param results result set
		 *     to return for the query, or %NULL if #error is non-%NULL; result sets
		 *     must be in the same format as returned by {@link Geocode.forward_search}
		 * @param error error to return for the query, or %NULL if #results
		 *     should be returned instead; errors must match those returned by
		 *     {@link Geocode.forward_search}
		 */
		add_forward_result(params: string[], results?: Place[] | null, error?: GLib.Error | null): void;
		/**
		 * Add a query and corresponding result (or error) to the mock backend, meaning
		 * that if it receives a reverse search for #params through
		 * {@link Geocode.backend_reverse_resolve} (or its asynchronous variants), the mock
		 * backend will return the given #results or #error to the caller.
		 * 
		 * If a set of #params is added to the backend multiple times, the most
		 * recently provided #results and #error will be used.
		 * 
		 * Exactly one of #results and #error must be set. Empty result sets are
		 * represented as a %GEOCODE_ERROR_NOT_SUPPORTED error.
		 * @param params query parameters to
		 *     respond to, in the same format as accepted by {@link Geocode.reverse_resolve}
		 * @param results result set
		 *     to return for the query, or %NULL if #error is non-%NULL; result sets
		 *     must be in the same format as returned by {@link Geocode.reverse_resolve}
		 * @param error error to return for the query, or %NULL if #results
		 *     should be returned instead; errors must match those returned by
		 *     {@link Geocode.reverse_resolve}
		 */
		add_reverse_result(params: string[], results?: Place[] | null, error?: GLib.Error | null): void;
		/**
		 * Clear the set of stored results in the mock backend which have been added
		 * using {@link Geocode.mock_backend_add_forward_result} and
		 * geocode_mock_backend_add_reverse_result(). Additionally, clear the query log
		 * so far (see geocode_mock_backend_get_query_log()).
		 * 
		 * This effectively resets the mock backend to its initial state.
		 */
		clear(): void;
		/**
		 * Get the details of the forward and reverse queries which have been requested
		 * of the mock backend since the most recent call to
		 * {@link Geocode.mock_backend_clear}. The query details are provided as
		 * #GeocodeMockBackendQuery structures, which map the query parameters to
		 * either the result set or the error which geocode_backend_forward_search()
		 * or geocode_backend_reverse_resolve() (or their asynchronous variants)
		 * returned to the caller.
		 * 
		 * The results are provided in the order in which calls were made to
		 * geocode_backend_forward_search() and geocode_backend_reverse_resolve().
		 * Results for forward and reverse queries may be interleaved.
		 * @returns potentially
		 *     empty sequence of forward and reverse query details
		 */
		get_query_log(): MockBackendQuery[];
	}

	type MockBackendInitOptionsMixin = GObject.ObjectInitOptions & BackendInitOptions
	export interface MockBackendInitOptions extends MockBackendInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MockBackend} instead.
	 */
	type MockBackendMixin = IMockBackend & GObject.Object & Backend;

	/**
	 * All the fields in the #GeocodeMockBackend structure are private and should
	 * never be accessed directly.
	 */
	interface MockBackend extends MockBackendMixin {}

	class MockBackend {
		public constructor(options?: Partial<MockBackendInitOptions>);
		/**
		 * Creates a new mock backend implementation with no initial forward or reverse
		 * query results (so it will return an empty result set for all queries).
		 * @returns a new #GeocodeMockBackend
		 */
		public static new(): MockBackend;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Nominatim} instead.
	 */
	interface INominatim {
		/**
		 * The base URL of the Nominatim service, for example
		 * `https://nominatim.example.org`.
		 */
		base_url: string;
		/**
		 * E-mail address of the maintainer of the software making the
		 * geocoding requests to the  Nominatim server. This is used to contact
		 * them in the event of a problem with their usage. See
		 * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
		 */
		maintainer_email_address: string;
		/**
		 * User-Agent string to send with HTTP(S) requests, or %NULL to use the
		 * default user agent, which is derived from the geocode-glib version
		 * and #GApplication:id, for example: `geocode-glib/3.20 (MyAppId)`.
		 * 
		 * As per the
		 * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
		 * it should be set to a string which identifies the application which
		 * is using geocode-glib, and must be a valid
		 * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
		 * string.
		 */
		user_agent: string;

		connect(signal: "notify::base-url", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::maintainer-email-address", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::user-agent", callback: (owner: this, ...args: any) => void): number;

	}

	type NominatimInitOptionsMixin = GObject.ObjectInitOptions & BackendInitOptions & 
	Pick<INominatim,
		"base_url" |
		"maintainer_email_address" |
		"user_agent">;

	export interface NominatimInitOptions extends NominatimInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Nominatim} instead.
	 */
	type NominatimMixin = INominatim & GObject.Object & Backend;

	/**
	 * All the fields in the #GeocodeNominatim structure are private and should
	 * never be accessed directly.
	 */
	interface Nominatim extends NominatimMixin {}

	class Nominatim {
		public constructor(options?: Partial<NominatimInitOptions>);
		/**
		 * Creates a new backend implementation for an online Nominatim server. See
		 * the documentation for #GeocodeNominatim:base-url and
		 * #GeocodeNominatim:maintainer-email-address.
		 * @param base_url a the base URL of the Nominatim server.
		 * @param maintainer_email_address the email address of the software maintainer.
		 * @returns a new #GeocodeNominatim. Use {@link GObject.unref} when done.
		 */
		public static new(base_url: string, maintainer_email_address: string): Nominatim;
		/**
		 * Gets a reference to the default Nominatim server on nominatim.gnome.org.
		 * 
		 * This function is thread-safe.
		 * @returns a new #GeocodeNominatim. Use {@link GObject.unref} when done.
		 */
		public static get_gnome(): Nominatim;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Place} instead.
	 */
	interface IPlace {
		/**
		 * The local administrative area.
		 */
		administrative_area: string;
		/**
		 * A named area such as a campus or neighborhood.
		 */
		area: string;
		/**
		 * The bounding box for the place.
		 */
		bounding_box: BoundingBox;
		/**
		 * A specific building on a street or in an area.
		 */
		building: string;
		/**
		 * The continent.
		 */
		continent: string;
		/**
		 * The country.
		 */
		country: string;
		/**
		 * The country code.
		 */
		country_code: string;
		/**
		 * The county.
		 */
		county: string;
		/**
		 * #GIcon representing the #GeocodePlace.
		 */
		readonly icon: Gio.Icon;
		/**
		 * The location info for the place.
		 */
		location: Location;
		/**
		 * The name of the place.
		 */
		name: string;
		/**
		 * The OpenStreetMap id of the place.
		 */
		osm_id: string;
		/**
		 * The OpenStreetMap type of the place.
		 */
		osm_type: PlaceOsmType;
		/**
		 * The type of the place.
		 */
		place_type: PlaceType;
		/**
		 * The postal code.
		 */
		postal_code: string;
		/**
		 * The state.
		 */
		state: string;
		/**
		 * The street name.
		 */
		street: string;
		/**
		 * The street address.
		 */
		street_address: string;
		/**
		 * The town.
		 */
		town: string;
		/**
		 * Compare two #GeocodePlace instances for equality. This compares all fields
		 * and only returns %TRUE if the instances are exactly equal. For example, if
		 * both places have the same #GeocodePlace:location, but place #b has its
		 * #GeocodePlace:continent property set and place #a does not, %FALSE will be
		 * returned.
		 * 
		 * Both instances must be non-%NULL.
		 * @param b another place
		 * @returns %TRUE if the instances are equal, %FALSE otherwise
		 */
		equal(b: Place): boolean;
		/**
		 * Gets the local administrative area of the #place.
		 * @returns The local administrative area of the #place.
		 */
		get_administrative_area(): string;
		/**
		 * Gets the area of the #place.
		 * @returns The area of the #place.
		 */
		get_area(): string;
		/**
		 * Gets the bounding box for the place #place.
		 * @returns A #GeocodeBoundingBox, or NULL if boundaries are
		 * unknown.
		 */
		get_bounding_box(): BoundingBox;
		/**
		 * Gets the building of the #place.
		 * @returns The building of the #place.
		 */
		get_building(): string;
		/**
		 * Gets the continent of the #place.
		 * @returns The continent of the #place.
		 */
		get_continent(): string;
		/**
		 * Gets the country of the #place.
		 * @returns The country of the #place.
		 */
		get_country(): string;
		/**
		 * Gets the ISO-3166 country code of the #place.
		 * @returns The ISO-3166 country code of the #place, in upper case.
		 */
		get_country_code(): string;
		/**
		 * Gets the county of the #place.
		 * @returns The country of the #place.
		 */
		get_county(): string;
		/**
		 * Gets the #GIcon representing the #place.
		 * @returns The #GIcon representing the #place.
		 */
		get_icon(): Gio.Icon;
		/**
		 * Gets the associated location object.
		 * @returns The associated location object.
		 */
		get_location(): Location;
		/**
		 * Gets the name of the #place.
		 * @returns The name of the #place.
		 */
		get_name(): string;
		/**
		 * Gets the OpenStreetMap ID of the #place.
		 * @returns The osm ID of the #place.
		 */
		get_osm_id(): string;
		/**
		 * Gets the OpenStreetMap type of the #place.
		 * @returns The osm type of the #place.
		 */
		get_osm_type(): PlaceOsmType;
		/**
		 * Gets the type of the #place.
		 * @returns The type of the #place.
		 */
		get_place_type(): PlaceType;
		/**
		 * Gets the postal code of the #place.
		 * @returns The postal code of the #place.
		 */
		get_postal_code(): string;
		/**
		 * Gets the state of the #place.
		 * @returns The state of the #place.
		 */
		get_state(): string;
		/**
		 * Gets the street of the #place.
		 * @returns The street of the #place.
		 */
		get_street(): string;
		/**
		 * Gets the street address of the #place.
		 * @returns The street address of the #place.
		 */
		get_street_address(): string;
		/**
		 * Gets the town of the #place.
		 * @returns The town of the #place.
		 */
		get_town(): string;
		/**
		 * Sets the local administrative area of #place to #admin_area.
		 * @param admin_area an administrative area for the place
		 */
		set_administrative_area(admin_area: string): void;
		/**
		 * Sets the area of #place to #area.
		 * @param area a area
		 */
		set_area(area: string): void;
		/**
		 * Sets the #GeocodeBoundingBox for the place #place.
		 * @param bbox A #GeocodeBoundingBox for the place
		 */
		set_bounding_box(bbox: BoundingBox): void;
		/**
		 * Sets the building of #place to #building.
		 * @param building a building
		 */
		set_building(building: string): void;
		/**
		 * Sets the continent of #place to #continent.
		 * @param continent a continent for the place
		 */
		set_continent(continent: string): void;
		/**
		 * Sets the country of #place to #country.
		 * @param country a country for the place
		 */
		set_country(country: string): void;
		/**
		 * Sets the ISO country code of #place to #country_code.
		 * @param country_code an ISO country code for the place
		 */
		set_country_code(country_code: string): void;
		/**
		 * Sets the county of #place to #county.
		 * @param county a county for the place
		 */
		set_county(county: string): void;
		/**
		 * Sets the location of #place to #location.
		 * @param location A location
		 */
		set_location(location: Location): void;
		/**
		 * Sets the name of the #place to #name.
		 * @param name the name of place
		 */
		set_name(name: string): void;
		/**
		 * Sets the postal code of #place to #postal_code.
		 * @param postal_code a postal code for the place
		 */
		set_postal_code(postal_code: string): void;
		/**
		 * Sets the state of #place to #state.
		 * @param state a state for the place
		 */
		set_state(state: string): void;
		/**
		 * Sets the street of #place to #street.
		 * @param street a street
		 */
		set_street(street: string): void;
		/**
		 * Sets the street address of #place to #street_address.
		 * @param street_address a street address for the place
		 */
		set_street_address(street_address: string): void;
		/**
		 * Sets the town of #place to #town.
		 * @param town a town for the place
		 */
		set_town(town: string): void;
		connect(signal: "notify::administrative-area", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::area", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::bounding-box", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::building", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::continent", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::country", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::country-code", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::county", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::icon", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::location", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::osm-id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::osm-type", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::place-type", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::postal-code", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::state", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::street", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::street-address", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::town", callback: (owner: this, ...args: any) => void): number;

	}

	type PlaceInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IPlace,
		"administrative_area" |
		"area" |
		"bounding_box" |
		"building" |
		"continent" |
		"country" |
		"country_code" |
		"county" |
		"location" |
		"name" |
		"osm_id" |
		"osm_type" |
		"place_type" |
		"postal_code" |
		"state" |
		"street" |
		"street_address" |
		"town">;

	export interface PlaceInitOptions extends PlaceInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Place} instead.
	 */
	type PlaceMixin = IPlace & GObject.Object;

	/**
	 * All the fields in the #GeocodePlace structure are private and should never be accessed directly.
	 */
	interface Place extends PlaceMixin {}

	class Place {
		public constructor(options?: Partial<PlaceInitOptions>);
		/**
		 * Creates a new #GeocodePlace object.
		 * @param name the name of place
		 * @param place_type the type of place
		 * @returns a new #GeocodePlace object. Use {@link GObject.unref} when done.
		 */
		public static new(name: string, place_type: PlaceType): Place;
		/**
		 * Creates a new #GeocodePlace object.
		 * @param name the name of place
		 * @param place_type the type of place
		 * @param location the location info for the place
		 * @returns a new #GeocodePlace object. Use {@link GObject.unref} when done.
		 */
		public static new_with_location(name: string, place_type: PlaceType, location: Location): Place;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Reverse} instead.
	 */
	interface IReverse {
		/**
		 * Gets the result of a reverse geocoding
		 * query using the current backend (see {@link Geocode.reverse_set_backend}). By
		 * default the GNOME Nominatim server is used. See #GeocodeBackend for more
		 * information.
		 * 
		 * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
		 * returned. This typically happens if the coordinates to geocode are in the
		 * middle of the ocean.
		 * @returns A #GeocodePlace instance, or %NULL in case of
		 * errors. Free the returned instance with {@link #g.object_unref} when done.
		 */
		resolve(): Place;
		/**
		 * Asynchronously gets the result of a reverse geocoding
		 * query using a web service. Use {@link Geocode.reverse_resolve} to do the same
		 * thing synchronously.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * geocode_reverse_resolve_finish() to get the result of the operation.
		 * @param cancellable optional #GCancellable object, %NULL to ignore.
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		resolve_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes a reverse geocoding operation. See {@link Geocode.reverse_resolve_async}.
		 * @param res a #GAsyncResult.
		 * @returns A #GeocodePlace instance, or %NULL in case of
		 * errors. Free the returned instance with {@link #g.object_unref} when done.
		 */
		resolve_finish(res: Gio.AsyncResult): Place;
		/**
		 * Specifies the backend to use in the reverse geocoding operation.
		 * 
		 * If none is given, the default GNOME Nominatim server is used.
		 * @param backend a #GeocodeBackend, or %NULL to use the default one.
		 */
		set_backend(backend?: Backend | null): void;
	}

	type ReverseInitOptionsMixin = GObject.ObjectInitOptions
	export interface ReverseInitOptions extends ReverseInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Reverse} instead.
	 */
	type ReverseMixin = IReverse & GObject.Object;

	/**
	 * All the fields in the #GeocodeReverse structure are private and should never be accessed directly.
	 */
	interface Reverse extends ReverseMixin {}

	class Reverse {
		public constructor(options?: Partial<ReverseInitOptions>);
		/**
		 * Creates a new #GeocodeReverse to perform reverse geocoding with.
		 * Use {@link Geocode.reverse_resolve_async} to perform the resolution.
		 * @param location a #GeocodeLocation object
		 * @returns a new #GeocodeReverse. Use {@link GObject.unref} when done.
		 */
		public static new_for_location(location: Location): Reverse;
	}

	export interface BackendInterfaceInitOptions {}
	/**
	 * Interface which defines the basic operations for geocoding.
	 */
	interface BackendInterface {}
	class BackendInterface {
		public constructor(options?: Partial<BackendInterfaceInitOptions>);
		public readonly g_iface: GObject.TypeInterface;
		public readonly padding: any[];
		public forward_search: {(backend: Backend, params: string[], cancellable?: Gio.Cancellable | null): Place[];};
		public forward_search_async: {(backend: Backend, params: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;};
		public forward_search_finish: {(backend: Backend, result: Gio.AsyncResult): Place[];};
		public reverse_resolve: {(backend: Backend, params: string[], cancellable?: Gio.Cancellable | null): Place[];};
		public reverse_resolve_async: {(backend: Backend, params: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;};
		public reverse_resolve_finish: {(backend: Backend, result: Gio.AsyncResult): Place[];};
	}

	export interface MockBackendQueryInitOptions {}
	/**
	 * The details of a forward or reverse query which was performed on a
	 * #GeocodeMockBackend by application code. This includes the input (#params,
	 * #is_forward), and the output which was returned (#results or #error).
	 * 
	 * Empty result sets are represented by the %GEOCODE_ERROR_NO_MATCHES error
	 * (for forward queries) or the %GEOCODE_ERROR_NOT_SUPPORTED error (for reverse
	 * queries), rather than an empty #results list.
	 */
	interface MockBackendQuery {}
	class MockBackendQuery {
		public constructor(options?: Partial<MockBackendQueryInitOptions>);
		/**
		 * query parameters, in the format accepted by {@link Geocode.forward_search}
		 *     (if #is_forward is %TRUE) or geocode_reverse_resolve() (otherwise)
		 */
		public params: any[];
		/**
		 * %TRUE if this represents a call to {@link Geocode.forward_search};
		 *     %FALSE if it represents a call to geocode_reverse_resolve()
		 */
		public is_forward: boolean;
		/**
		 * results returned by the
		 *     query, or %NULL if an error was returned
		 */
		public results: Place[];
		/**
		 * error returned by the query, or %NULL if a result set
		 *     was returned
		 */
		public error: GLib.Error;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	interface IBackend {
		/**
		 * Gets the result of a forward geocoding query using the #backend.
		 * 
		 * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
		 * 
		 * This is a synchronous function, which means it may block on network requests.
		 * In most situations, the asynchronous version
		 * {@link (geocode.backend_forward_search_async}) is more appropriate. See its
		 * documentation for more information on usage.
		 * @param params a #GHashTable with string keys, and #GValue values.
		 * @param cancellable optional #GCancellable, %NULL to ignore.
		 * @returns A list of
		 * places or %NULL in case of errors. Free the returned instances with
		 * {@link GObject.unref} and the list with g_list_free() when done.
		 */
		forward_search(params: string[], cancellable?: Gio.Cancellable | null): Place[];
		/**
		 * Asynchronously performs a forward geocoding query using the #backend. Use
		 * {@link Geocode.backend_forward_search} to do the same thing synchronously.
		 * 
		 * The #params hash table is in the format used by Telepathy, and documented
		 * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
		 * 
		 * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * geocode_backend_forward_search_finish() to get the result of the operation.
		 * @param params a #GHashTable with string keys, and #GValue values.
		 * @param cancellable optional #GCancellable, %NULL to ignore.
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		forward_search_async(params: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes a forward geocoding operation. See
		 * {@link Geocode.backend_forward_search_async}.
		 * @param result a #GAsyncResult.
		 * @returns A list of
		 * places or %NULL in case of errors. Free the returned instances with
		 * {@link GObject.unref} and the list with g_list_free() when done.
		 */
		forward_search_finish(result: Gio.AsyncResult): Place[];
		/**
		 * Gets the result of a reverse geocoding query using the #backend.
		 * 
		 * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
		 * returned. This typically happens if the coordinates to geocode are in the
		 * middle of the ocean.
		 * 
		 * This is a synchronous function, which means it may block on network requests.
		 * In most situations, the asynchronous version,
		 * {@link Geocode.backend_forward_search_async}, is more appropriate. See its
		 * documentation for more information on usage.
		 * @param params a #GHashTable with string keys, and #GValue values.
		 * @param cancellable optional #GCancellable object, %NULL to ignore.
		 * @returns A list of
		 *    #GeocodePlace instances, or %NULL in case of errors. The list is ordered
		 *    by relevance, with most relevant results first. Free the returned
		 *    instances with {@link GObject.unref} and the list with g_list_free() when done.
		 */
		reverse_resolve(params: string[], cancellable?: Gio.Cancellable | null): Place[];
		/**
		 * Asynchronously gets the result of a reverse geocoding query using the
		 * backend.
		 * 
		 * Typically, a single result will be returned representing the place at a
		 * given latitude and longitude (the `lat` and `lon` keys to #params); but in
		 * some cases the results will be ambiguous and *multiple* results will be
		 * returned. They will be returned in order of relevance, with the most
		 * relevant result first in the list.
		 * 
		 * The #params hash table is in the format used by Telepathy, and documented
		 * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
		 * 
		 * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
		 * 
		 * Use {@link Geocode.backend_reverse_resolve} to do the same thing synchronously.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * geocode_backend_reverse_resolve_finish() to get the result of the operation.
		 * @param params a #GHashTable with string keys, and #GValue values.
		 * @param cancellable optional #GCancellable object, %NULL to ignore.
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
		 */
		reverse_resolve_async(params: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes a reverse geocoding operation. See {@link Geocode.backend_reverse_resolve_async}.
		 * @param result a #GAsyncResult.
		 * @returns A list of
		 *    #GeocodePlace instances, or %NULL in case of errors. The list is ordered
		 *    by relevance, with most relevant results first. Free the returned
		 *    instances with {@link GObject.unref} and the list with g_list_free() when done.
		 */
		reverse_resolve_finish(result: Gio.AsyncResult): Place[];
	}

	type BackendInitOptionsMixin  = {};
	export interface BackendInitOptions extends BackendInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	type BackendMixin = IBackend;

	/**
	 * All the fields in the #GeocodeBackend structure are private and should
	 * never be accessed directly.
	 */
	interface Backend extends BackendMixin {}

	class Backend {
		public constructor(options?: Partial<BackendInitOptions>);
	}



	/**
	 * Error codes returned by geocode-glib functions.
	 */
	enum Error {
		/**
		 * An error occured parsing the response from the web service.
		 */
		PARSE = 0,
		/**
		 * The request made was not supported.
		 */
		NOT_SUPPORTED = 1,
		/**
		 * The requests made didn't have any matches.
		 */
		NO_MATCHES = 2,
		/**
		 * The request made contained invalid arguments.
		 */
		INVALID_ARGUMENTS = 3,
		/**
		 * The server encountered an (possibly unrecoverable) internal error.
		 */
		INTERNAL_SERVER = 4
	}

	/**
	 * Coordinate Reference System Identification for a location.
	 */
	enum LocationCRS {
		/**
		 * CRS is World Geodetic System, standard for Earth.
		 */
		WGS84 = 0
	}

	/**
	 * The URI scheme for this location.
	 */
	enum LocationURIScheme {
		/**
		 * The 'geo' URI scheme, RFC 5870
		 */
		GEO = 0
	}

	/**
	 * Osm type of the place.
	 */
	enum PlaceOsmType {
		/**
		 * Unknown type
		 */
		UNKNOWN = 0,
		/**
		 * Defines a point in space.
		 */
		NODE = 1,
		/**
		 * Used to explain how other elements work together.
		 */
		RELATION = 2,
		/**
		 * Defines a linear feature and area boundaries.
		 */
		WAY = 3
	}

	/**
	 * Type of the place.
	 */
	enum PlaceType {
		/**
		 * Type is unknown for this place.
		 */
		UNKNOWN = 0,
		/**
		 * A building or house.
		 */
		BUILDING = 1,
		/**
		 * A street.
		 */
		STREET = 2,
		/**
		 * A populated settlement such as a city, town, village.
		 */
		TOWN = 3,
		/**
		 * One of the primary administrative areas within a country.
		 */
		STATE = 4,
		/**
		 * One of the secondary administrative areas within a country.
		 */
		COUNTY = 5,
		/**
		 * One of the tertiary administrative areas within a country.
		 */
		LOCAL_ADMINISTRATIVE_AREA = 6,
		/**
		 * A partial or full postal code.
		 */
		POSTAL_CODE = 7,
		/**
		 * One of the countries or dependent territories defined by the ISO 3166-1 standard.
		 */
		COUNTRY = 8,
		/**
		 * An island.
		 */
		ISLAND = 9,
		/**
		 * An airport.
		 */
		AIRPORT = 10,
		/**
		 * A railway station.
		 */
		RAILWAY_STATION = 11,
		/**
		 * A bus stop.
		 */
		BUS_STOP = 12,
		/**
		 * A high capacity highways designed to safely carry fast motor traffic.
		 */
		MOTORWAY = 13,
		/**
		 * A water feature such as a river, canal, lake, bay or ocean.
		 */
		DRAINAGE = 14,
		/**
		 * A land feature such as a park, mountain or beach.
		 */
		LAND_FEATURE = 15,
		/**
		 * A uncategorized place.
		 */
		MISCELLANEOUS = 16,
		/**
		 * An area covering multiple countries.
		 */
		SUPERNAME = 17,
		/**
		 * A point of interest such as a school, hospital or tourist attraction.
		 */
		POINT_OF_INTEREST = 18,
		/**
		 * A subdivision of a town such as a suburb or neighborhood.
		 */
		SUBURB = 19,
		/**
		 * A place known by a colloquial name.
		 */
		COLLOQUIAL = 20,
		/**
		 * An area known within a specific context such as MSA or area code.
		 */
		ZONE = 21,
		/**
		 * A historical primary administrative area within a country.
		 */
		HISTORICAL_STATE = 22,
		/**
		 * A historical secondary administrative area within a country.
		 */
		HISTORICAL_COUNTY = 23,
		/**
		 * One of the major land masses on the Earth.
		 */
		CONTINENT = 24,
		/**
		 * An area defined by the Olson standard (tz database).
		 */
		TIME_ZONE = 25,
		/**
		 * A housing development or subdivision known by name.
		 */
		ESTATE = 26,
		/**
		 * A historical populated settlement that is no longer known by its original name.
		 */
		HISTORICAL_TOWN = 27,
		/**
		 * One of the five major bodies of water on the Earth.
		 */
		OCEAN = 28,
		/**
		 * An area of open water smaller than an ocean.
		 */
		SEA = 29,
		/**
		 * Institution designed for learning under the supervision of teachers.
		 */
		SCHOOL = 30,
		/**
		 * All places of worship independently of the religion or denomination.
		 */
		PLACE_OF_WORSHIP = 31,
		/**
		 * Generally formal place with sit-down facilities selling full meals served by waiters.
		 */
		RESTAURANT = 32,
		/**
		 * A bar or pub.
		 */
		BAR = 33,
		/**
		 * A light rail station or tram stop.
		 */
		LIGHT_RAIL_STATION = 34
	}

	/**
	 * Gets the geocode-glib error quark.
	 * @returns a #GQuark.
	 */
	function error_quark(): GLib.Quark;
	/**
	 * Constant representing city-level accuracy.
	 * @returns Constant representing city-level accuracy.
	 */
	const LOCATION_ACCURACY_CITY: number;

	/**
	 * Constant representing continent-level accuracy.
	 * @returns Constant representing continent-level accuracy.
	 */
	const LOCATION_ACCURACY_CONTINENT: number;

	/**
	 * Constant representing country-level accuracy.
	 * @returns Constant representing country-level accuracy.
	 */
	const LOCATION_ACCURACY_COUNTRY: number;

	/**
	 * Constant representing region-level accuracy.
	 * @returns Constant representing region-level accuracy.
	 */
	const LOCATION_ACCURACY_REGION: number;

	/**
	 * Constant representing street-level accuracy.
	 * @returns Constant representing street-level accuracy.
	 */
	const LOCATION_ACCURACY_STREET: number;

	/**
	 * Constant representing unknown accuracy.
	 * @returns Constant representing unknown accuracy.
	 */
	const LOCATION_ACCURACY_UNKNOWN: number;

}