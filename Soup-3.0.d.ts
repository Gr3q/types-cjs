/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Soup {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Auth} instead.
	 */
	interface IAuth {
		/**
		 * The authority (host:port) being authenticated to.
		 */
		authority: string;
		/**
		 * Whether or not the auth has been authenticated.
		 */
		// readonly is_authenticated: boolean;
		/**
		 * Whether or not the auth has been cancelled.
		 */
		// readonly is_cancelled: boolean;
		/**
		 * Whether or not the auth is for a proxy server.
		 */
		// is_for_proxy: boolean;
		/**
		 * The authentication realm.
		 */
		realm: string;
		/**
		 * The authentication scheme name.
		 */
		readonly scheme_name: string;
		/**
		 * Call this on an auth to authenticate it.
		 * 
		 * Normally this will cause the auth's message to be requeued with the new
		 * authentication info.
		 * @param username the username provided by the user or client
		 * @param password the password provided by the user or client
		 */
		authenticate(username: string, password: string): void;
		/**
		 * Tests if #auth is able to authenticate by providing credentials to the
		 * [method#Auth.authenticate].
		 * @returns %TRUE if #auth is able to accept credentials.
		 */
		can_authenticate(): boolean;
		/**
		 * Call this on an auth to cancel it.
		 * 
		 * You need to cancel an auth to complete an asynchronous authenticate operation
		 * when no credentials are provided ([method#Auth.authenticate] is not called).
		 * The {@link Auth} will be cancelled on dispose if it hans't been authenticated.
		 */
		cancel(): void;
		/**
		 * Returns the authority (host:port) that #auth is associated with.
		 * @returns the authority
		 */
		get_authority(): string;
		/**
		 * Generates an appropriate "Authorization" header for #msg.
		 * 
		 * (The session will only call this if [method#Auth.is_authenticated] returned
		 * %TRUE.)
		 * @param msg the {@link Message} to be authorized
		 * @returns the "Authorization" header, which must be freed.
		 */
		get_authorization(msg: Message): string;
		/**
		 * Gets an opaque identifier for #auth.
		 * 
		 * The identifier can be used as a hash key or the like. {@link Auth} objects from
		 * the same server with the same identifier refer to the same authentication
		 * domain (eg, the URLs associated with them take the same usernames and
		 * passwords).
		 * @returns the identifier
		 */
		get_info(): string;
		/**
		 * Returns a list of paths on the server which #auth extends over.
		 * 
		 * (All subdirectories of these paths are also assumed to be part
		 * of #auth's protection space, unless otherwise discovered not to
		 * be.)
		 * @param source_uri the URI of the request that #auth was generated in
		 *   response to.
		 * @returns the list of
		 *   paths, which can be freed with [method#Auth.free_protection_space].
		 */
		get_protection_space(source_uri: GLib.Uri): string[];
		/**
		 * Returns #auth's realm.
		 * 
		 * This is an identifier that distinguishes separate authentication spaces on a
		 * given server, and may be some string that is meaningful to the user.
		 * (Although it is probably not localized.)
		 * @returns the realm name
		 */
		get_realm(): string;
		/**
		 * soup_auth_get_scheme_name: (attributes org.gtk.Method.get_property=scheme-name)
		 * Returns #auth's scheme name. (Eg, "Basic", "Digest", or "NTLM")
		 * @returns the scheme name
		 */
		get_scheme_name(): string;
		/**
		 * Tests if #auth has been given a username and password.
		 * @returns %TRUE if #auth has been given a username and password
		 */
		is_authenticated(): boolean;
		/**
		 * Tests if #auth has been cancelled
		 * @returns %TRUE if #auth has been cancelled
		 */
		is_cancelled(): boolean;
		/**
		 * Tests whether or not #auth is associated with a proxy server rather
		 * than an "origin" server.
		 * @returns %TRUE or %FALSE
		 */
		is_for_proxy(): boolean;
		/**
		 * Tests if #auth is ready to make a request for #msg with.
		 * 
		 * For most auths, this is equivalent to [method#Auth.is_authenticated], but for
		 * some auth types (eg, NTLM), the auth may be sendable (eg, as an
		 * authentication request) even before it is authenticated.
		 * @param msg a {@link Message}
		 * @returns %TRUE if #auth is ready to make a request with.
		 */
		is_ready(msg: Message): boolean;
		/**
		 * Updates #auth with the information from #msg and #auth_header,
		 * possibly un-authenticating it.
		 * 
		 * As with [ctor#Auth.new], this is normally only used by [class#Session].
		 * @param msg the {@link Message} #auth is being updated for
		 * @param auth_header the WWW-Authenticate/Proxy-Authenticate header
		 * @returns %TRUE if #auth is still a valid (but potentially
		 *   unauthenticated) {@link Auth}. %FALSE if something about #auth_params
		 *   could not be parsed or incorporated into #auth at all.
		 */
		update(msg: Message, auth_header: string): boolean;
		connect(signal: "notify::authority", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::is-authenticated", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::is-cancelled", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::is-for-proxy", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::realm", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::scheme-name", callback: (owner: this, ...args: any) => void): number;

	}

	type AuthInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IAuth,
		"authority" |
		"is_for_proxy" |
		"realm">;

	export interface AuthInitOptions extends AuthInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Auth} instead.
	 */
	type AuthMixin = IAuth & GObject.Object;

	/**
	 * The abstract base class for handling authentication.
	 * 
	 * Specific HTTP Authentication mechanisms are implemented by its subclasses,
	 * but applications never need to be aware of the specific subclasses being
	 * used.
	 * 
	 * {@link Auth} objects store the authentication data associated with a given bit
	 * of web space. They are created automatically by [class#Session].
	 */
	interface Auth extends AuthMixin {}

	class Auth {
		public constructor(options?: Partial<AuthInitOptions>);
		/**
		 * Creates a new {@link Auth} of type #type with the information from
		 * #msg and #auth_header.
		 * 
		 * This is called by [class#Session]; you will normally not create auths
		 * yourself.
		 * @param type the type of auth to create (a subtype of {@link Auth})
		 * @param msg the {@link Message} the auth is being created for
		 * @param auth_header the WWW-Authenticate/Proxy-Authenticate header
		 * @returns the new {@link Auth}, or %NULL if it could
		 *   not be created
		 */
		public static new(type: GObject.Type, msg: Message, auth_header: string): Auth | null;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthBasic} instead.
	 */
	interface IAuthBasic {

	}

	type AuthBasicInitOptionsMixin = AuthInitOptions
	export interface AuthBasicInitOptions extends AuthBasicInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthBasic} instead.
	 */
	type AuthBasicMixin = IAuthBasic & Auth;

	/**
	 * HTTP "Basic" authentication.
	 * 
	 * [class#Session]s support this by default; if you want to disable
	 * support for it, call [method#Session.remove_feature_by_type],
	 * passing %SOUP_TYPE_AUTH_BASIC.
	 */
	interface AuthBasic extends AuthBasicMixin {}

	class AuthBasic {
		public constructor(options?: Partial<AuthBasicInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDigest} instead.
	 */
	interface IAuthDigest {

	}

	type AuthDigestInitOptionsMixin = AuthInitOptions
	export interface AuthDigestInitOptions extends AuthDigestInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDigest} instead.
	 */
	type AuthDigestMixin = IAuthDigest & Auth;

	/**
	 * HTTP "Digest" authentication.
	 * 
	 * [class#Session]s support this by default; if you want to disable
	 * support for it, call [method#Session.remove_feature_by_type]
	 * passing %SOUP_TYPE_AUTH_DIGEST.
	 */
	interface AuthDigest extends AuthDigestMixin {}

	class AuthDigest {
		public constructor(options?: Partial<AuthDigestInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDomain} instead.
	 */
	interface IAuthDomain {
		/**
		 * The [callback#AuthDomainFilter] for the domain.
		 */
		filter: AuthDomainFilter;
		/**
		 * Data to pass to the [callback#AuthDomainFilter].
		 */
		filter_data: any;
		/**
		 * The [callback#AuthDomainGenericAuthCallback].
		 */
		generic_auth_callback: AuthDomainGenericAuthCallback;
		/**
		 * The data to pass to the [callback#AuthDomainGenericAuthCallback].
		 */
		generic_auth_data: any;
		/**
		 * Whether or not this is a proxy auth domain.
		 */
		proxy: boolean;
		/**
		 * The realm of this auth domain.
		 */
		realm: string;
		/**
		 * Checks if #msg contains appropriate authorization for #domain to
		 * accept it.
		 * 
		 * Mirroring [method#AuthDomain.covers], this does not check whether or not
		 * #domain *cares* if #msg is authorized.
		 * 
		 * This is used by [class#Server] internally and is probably of no use to
		 * anyone else.
		 * @param msg a {@link ServerMessage}
		 * @returns the username that #msg has authenticated
		 *   as, if in fact it has authenticated. %NULL otherwise.
		 */
		accepts(msg: ServerMessage): string | null;
		/**
		 * Adds #path to #domain.
		 * 
		 * Requests under #path on #domain's server will require authentication (unless
		 * overridden by [method#AuthDomain.remove_path] or
		 * [method#AuthDomain.set_filter]).
		 * @param path the path to add to #domain
		 */
		add_path(path: string): void;
		/**
		 * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to #msg.
		 * 
		 * It requests that the client authenticate, and sets #msg's status accordingly.
		 * 
		 * This is used by [class#Server] internally and is probably of no use to
		 * anyone else.
		 * @param msg a {@link ServerMessage}
		 */
		challenge(msg: ServerMessage): void;
		/**
		 * Checks if #msg authenticates to #domain via #username and
		 * #password.
		 * 
		 * This would normally be called from a
		 * [callback#AuthDomainGenericAuthCallback].
		 * @param msg a {@link ServerMessage}
		 * @param username a username
		 * @param password a password
		 * @returns whether or not the message is authenticated
		 */
		check_password(msg: ServerMessage, username: string, password: string): boolean;
		/**
		 * Checks if #domain requires #msg to be authenticated (according to
		 * its paths and filter function).
		 * 
		 * This does not actually look at whether #msg *is* authenticated, merely
		 * whether or not it needs to be.
		 * 
		 * This is used by [class#Server] internally and is probably of no use to
		 * anyone else.
		 * @param msg a {@link ServerMessage}
		 * @returns %TRUE if #domain requires #msg to be authenticated
		 */
		covers(msg: ServerMessage): boolean;
		/**
		 * Gets the realm name associated with #domain.
		 * @returns #domain's realm
		 */
		get_realm(): string;
		/**
		 * Removes #path from #domain.
		 * 
		 * Requests under #path on #domain's server will NOT require
		 * authentication.
		 * 
		 * This is not simply an undo-er for [method#AuthDomain.add_path]; it
		 * can be used to "carve out" a subtree that does not require
		 * authentication inside a hierarchy that does. Note also that unlike
		 * with [method#AuthDomain.add_path], this cannot be overridden by
		 * adding a filter, as filters can only bypass authentication that
		 * would otherwise be required, not require it where it would
		 * otherwise be unnecessary.
		 * @param path the path to remove from #domain
		 */
		remove_path(path: string): void;
		/**
		 * Adds #filter as an authentication filter to #domain.
		 * 
		 * The filter gets a chance to bypass authentication for certain requests that
		 * would otherwise require it. Eg, it might check the message's path in some way
		 * that is too complicated to do via the other methods, or it might check the
		 * message's method, and allow GETs but not PUTs.
		 * 
		 * The filter function returns %TRUE if the request should still
		 * require authentication, or %FALSE if authentication is unnecessary
		 * for this request.
		 * 
		 * To help prevent security holes, your filter should return %TRUE by
		 * default, and only return %FALSE under specifically-tested
		 * circumstances, rather than the other way around. Eg, in the example
		 * above, where you want to authenticate PUTs but not GETs, you should
		 * check if the method is GET and return %FALSE in that case, and then
		 * return %TRUE for all other methods (rather than returning %TRUE for
		 * PUT and %FALSE for all other methods). This way if it turned out
		 * (now or later) that some paths supported additional methods besides
		 * GET and PUT, those methods would default to being NOT allowed for
		 * unauthenticated users.
		 * 
		 * You can also set the filter by setting the SoupAuthDomain:filter
		 * and [property#AuthDomain:filter-data properties], which can also be
		 * used to set the filter at construct time.
		 * @param filter the auth filter for #domain
		 */
		set_filter(filter: AuthDomainFilter): void;
		/**
		 * Sets #auth_callback as an authentication-handling callback for #domain.
		 * 
		 * Whenever a request comes in to #domain which cannot be authenticated via a
		 * domain-specific auth callback (eg, [callback#AuthDomainDigestAuthCallback]),
		 * the generic auth callback will be invoked. See
		 * [callback#AuthDomainGenericAuthCallback] for information on what the callback
		 * should do.
		 * @param auth_callback the auth callback
		 */
		set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void;
		connect(signal: "notify::filter", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::filter-data", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::generic-auth-callback", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::generic-auth-data", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::proxy", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::realm", callback: (owner: this, ...args: any) => void): number;

	}

	type AuthDomainInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IAuthDomain,
		"filter" |
		"filter_data" |
		"generic_auth_callback" |
		"generic_auth_data" |
		"proxy" |
		"realm">;

	export interface AuthDomainInitOptions extends AuthDomainInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDomain} instead.
	 */
	type AuthDomainMixin = IAuthDomain & GObject.Object;

	/**
	 * Server-side authentication.
	 * 
	 * A {@link AuthDomain} manages authentication for all or part of a
	 * [class#Server]. To make a server require authentication, first create
	 * an appropriate subclass of #SoupAuthDomain, and then add it to the
	 * server with [method#Server.add_auth_domain].
	 * 
	 * In order for an auth domain to have any effect, you must add one or more
	 * paths to it (via [method#AuthDomain.add_path]). To require authentication for
	 * all ordinary requests, add the path `"/"`. (Note that this does not include
	 * the special `"*"` URI (eg, "OPTIONS *"), which must be added as a separate
	 * path if you want to cover it.)
	 * 
	 * If you need greater control over which requests should and shouldn't be
	 * authenticated, add paths covering everything you *might* want authenticated,
	 * and then use a filter ([method#AuthDomain.set_filter] to bypass
	 * authentication for those requests that don't need it.
	 */
	interface AuthDomain extends AuthDomainMixin {}

	class AuthDomain {
		public constructor(options?: Partial<AuthDomainInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDomainBasic} instead.
	 */
	interface IAuthDomainBasic {
		/**
		 * The [callback#AuthDomainBasicAuthCallback].
		 */
		auth_callback: AuthDomainBasicAuthCallback;
		/**
		 * The data to pass to the [callback#AuthDomainBasicAuthCallback].
		 */
		auth_data: any;
		/**
		 * Sets the callback that #domain will use to authenticate incoming
		 * requests.
		 * 
		 * For each request containing authorization, #domain will invoke the callback,
		 * and then either accept or reject the request based on #callback's return
		 * value.
		 * 
		 * You can also set the auth callback by setting the
		 * [property#AuthDomainBasic:auth-callback] and
		 * [property#AuthDomainBasic:auth-data] properties, which can also be used to
		 * set the callback at construct time.
		 * @param callback the callback
		 */
		set_auth_callback(callback: AuthDomainBasicAuthCallback): void;
		connect(signal: "notify::auth-callback", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::auth-data", callback: (owner: this, ...args: any) => void): number;

	}

	type AuthDomainBasicInitOptionsMixin = AuthDomainInitOptions & 
	Pick<IAuthDomainBasic,
		"auth_callback" |
		"auth_data">;

	export interface AuthDomainBasicInitOptions extends AuthDomainBasicInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDomainBasic} instead.
	 */
	type AuthDomainBasicMixin = IAuthDomainBasic & AuthDomain;

	/**
	 * Server-side "Basic" authentication.
	 * 
	 * {@link AuthDomainBasic} handles the server side of HTTP "Basic" (ie,
	 * cleartext password) authentication.
	 */
	interface AuthDomainBasic extends AuthDomainBasicMixin {}

	class AuthDomainBasic {
		public constructor(options?: Partial<AuthDomainBasicInitOptions>);
		/**
		 * Creates a {@link AuthDomainBasic}.
		 * 
		 * You must set the [property#AuthDomain:realm] property, to indicate the realm
		 * name to be returned with the authentication challenge to the client. Other
		 * parameters are optional.
		 * @param optname1 name of first option, or %NULL
		 * @returns the new {@link AuthDomain}
		 */
		public static new(optname1: string): AuthDomain;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDomainDigest} instead.
	 */
	interface IAuthDomainDigest {
		/**
		 * The [callback#AuthDomainDigestAuthCallback].
		 */
		auth_callback: AuthDomainDigestAuthCallback;
		/**
		 * The data to pass to the [callback#AuthDomainDigestAuthCallback].
		 */
		auth_data: any;
		/**
		 * Sets the callback that #domain will use to authenticate incoming
		 * requests.
		 * 
		 * For each request containing authorization, #domain will
		 * invoke the callback, and then either accept or reject the request
		 * based on #callback's return value.
		 * 
		 * You can also set the auth callback by setting the
		 * [property#AuthDomainDigest:auth-callback] and
		 * [property#AuthDomainDigest:auth-data] properties, which can also be used to
		 * set the callback at construct time.
		 * @param callback the callback
		 */
		set_auth_callback(callback: AuthDomainDigestAuthCallback): void;
		connect(signal: "notify::auth-callback", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::auth-data", callback: (owner: this, ...args: any) => void): number;

	}

	type AuthDomainDigestInitOptionsMixin = AuthDomainInitOptions & 
	Pick<IAuthDomainDigest,
		"auth_callback" |
		"auth_data">;

	export interface AuthDomainDigestInitOptions extends AuthDomainDigestInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthDomainDigest} instead.
	 */
	type AuthDomainDigestMixin = IAuthDomainDigest & AuthDomain;

	/**
	 * Server-side "Digest" authentication.
	 * 
	 * {@link AuthDomainDigest} handles the server side of HTTP "Digest"
	 * authentication.
	 */
	interface AuthDomainDigest extends AuthDomainDigestMixin {}

	class AuthDomainDigest {
		public constructor(options?: Partial<AuthDomainDigestInitOptions>);
		/**
		 * Creates a {@link AuthDomainDigest}.
		 * 
		 * You must set the [property#AuthDomain:realm] property, to indicate the realm name to
		 * be returned with the authentication challenge to the client. Other parameters
		 * are optional.
		 * @param optname1 name of first option, or %NULL
		 * @returns the new {@link AuthDomain}
		 */
		public static new(optname1: string): AuthDomain;
		/**
		 * Encodes the username/realm/password triplet for Digest
		 * authentication.
		 * 
		 * That is, it returns a stringified MD5 hash of
		 * #username, #realm, and #password concatenated together. This is
		 * the form that is needed as the return value of
		 * {@link AuthDomainDigest}'s auth handler.
		 * 
		 * For security reasons, you should store the encoded hash, rather
		 * than storing the cleartext password itself and calling this method
		 * only when you need to verify it. This way, if your server is
		 * compromised, the attackers will not gain access to cleartext
		 * passwords which might also be usable at other sites. (Note also
		 * that the encoded password returned by this method is identical to
		 * the encoded password stored in an Apache .htdigest file.)
		 * @param username a username
		 * @param realm an auth realm name
		 * @param password the password for #username in #realm
		 * @returns the encoded password
		 */
		public static encode_password(username: string, realm: string, password: string): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthManager} instead.
	 */
	interface IAuthManager {
		/**
		 * Clear all credentials cached by #manager.
		 */
		clear_cached_credentials(): void;
		/**
		 * Records that #auth is to be used under #uri, as though a
		 * WWW-Authenticate header had been received at that URI.
		 * 
		 * This can be used to "preload" #manager's auth cache, to avoid an extra HTTP
		 * round trip in the case where you know ahead of time that a 401 response will
		 * be returned.
		 * 
		 * This is only useful for authentication types where the initial
		 * Authorization header does not depend on any additional information
		 * from the server. (Eg, Basic or NTLM, but not Digest.)
		 * @param uri the #GUri under which #auth is to be used
		 * @param auth the {@link Auth} to use
		 */
		use_auth(uri: GLib.Uri, auth: Auth): void;
	}

	type AuthManagerInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions
	export interface AuthManagerInitOptions extends AuthManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthManager} instead.
	 */
	type AuthManagerMixin = IAuthManager & GObject.Object & SessionFeature;

	/**
	 * HTTP client-side authentication handler.
	 * 
	 * {@link AuthManager} is the [iface#SessionFeature] that handles HTTP
	 * authentication for a [class#Session].
	 * 
	 * A #SoupAuthManager is added to the session by default, and normally
	 * you don't need to worry about it at all. However, if you want to
	 * disable HTTP authentication, you can remove the feature from the
	 * session with [method#Session.remove_feature_by_type] or disable it on
	 * individual requests with [method#Message.disable_feature].
	 * 
	 * You can use this with [method#Session.remove_feature_by_type] or
	 * [method#Message.disable_feature].
	 * 
	 * (Although this type has only been publicly visible since libsoup 2.42, it has
	 * always existed in the background, and you can use `g_type_from_name
	 * ("SoupAuthManager")` to get its [alias#GLib.Type] in earlier releases.)
	 */
	interface AuthManager extends AuthManagerMixin {}

	class AuthManager {
		public constructor(options?: Partial<AuthManagerInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthNTLM} instead.
	 */
	interface IAuthNTLM {

	}

	type AuthNTLMInitOptionsMixin = AuthInitOptions
	export interface AuthNTLMInitOptions extends AuthNTLMInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthNTLM} instead.
	 */
	type AuthNTLMMixin = IAuthNTLM & Auth;

	/**
	 * HTTP-based NTLM authentication.
	 * 
	 * [class#Session]s do not support this type by default; if you want to
	 * enable support for it, call [method#Session.add_feature_by_type],
	 * passing %SOUP_TYPE_AUTH_NTLM.
	 */
	interface AuthNTLM extends AuthNTLMMixin {}

	class AuthNTLM {
		public constructor(options?: Partial<AuthNTLMInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthNegotiate} instead.
	 */
	interface IAuthNegotiate {

	}

	type AuthNegotiateInitOptionsMixin = AuthInitOptions
	export interface AuthNegotiateInitOptions extends AuthNegotiateInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthNegotiate} instead.
	 */
	type AuthNegotiateMixin = IAuthNegotiate & Auth;

	/**
	 * HTTP-based GSS-Negotiate authentication, as defined by
	 * [RFC 4559](https://datatracker.ietf.org/doc/html/rfc4559).
	 * 
	 * [class#Session]s do not support this type by default; if you want to
	 * enable support for it, call [method#Session.add_feature_by_type],
	 * passing %SOUP_TYPE_AUTH_NEGOTIATE.
	 * 
	 * This auth type will only work if libsoup was compiled with GSSAPI
	 * support; you can check [func#AuthNegotiate.supported] to see if it
	 * was.
	 */
	interface AuthNegotiate extends AuthNegotiateMixin {}

	class AuthNegotiate {
		public constructor(options?: Partial<AuthNegotiateInitOptions>);
		/**
		 * Indicates whether libsoup was built with GSSAPI support.
		 * 
		 * If this is %FALSE, %SOUP_TYPE_AUTH_NEGOTIATE will still be defined and can
		 * still be added to a [class#Session], but libsoup will never attempt to
		 * actually use this auth type.
		 * @returns %TRUE if supported otherwise %FALSE
		 */
		public static supported(): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Cache} instead.
	 */
	interface ICache {
		/**
		 * The directory to store the cache files.
		 */
		cache_dir: string;
		/**
		 * Whether the cache is private or shared.
		 */
		cache_type: CacheType;
		/**
		 * Will remove all entries in the #cache plus all the cache files.
		 * 
		 * This is not thread safe and must be called only from the thread that created the {@link Cache}
		 */
		clear(): void;
		/**
		 * Synchronously writes the cache index out to disk.
		 * 
		 * Contrast with [method#Cache.flush], which writes pending cache *entries* to
		 * disk.
		 * 
		 * You must call this before exiting if you want your cache data to
		 * persist between sessions.
		 * 
		 * This is not thread safe and must be called only from the thread that created the {@link Cache}
		 */
		dump(): void;
		/**
		 * Forces all pending writes in the #cache to be
		 * committed to disk.
		 * 
		 * For doing so it will iterate the [struct#GLib.MainContext] associated with
		 * #cache's session as long as needed.
		 * 
		 * Contrast with [method#Cache.dump], which writes out the cache index file.
		 */
		flush(): void;
		/**
		 * Gets the maximum size of the cache.
		 * @returns the maximum size of the cache, in bytes.
		 */
		get_max_size(): number;
		/**
		 * Loads the contents of #cache's index into memory.
		 * 
		 * This is not thread safe and must be called only from the thread that created the {@link Cache}
		 */
		load(): void;
		/**
		 * Sets the maximum size of the cache.
		 * @param max_size the maximum size of the cache, in bytes
		 */
		set_max_size(max_size: number): void;
		connect(signal: "notify::cache-dir", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::cache-type", callback: (owner: this, ...args: any) => void): number;

	}

	type CacheInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions & 
	Pick<ICache,
		"cache_dir" |
		"cache_type">;

	export interface CacheInitOptions extends CacheInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Cache} instead.
	 */
	type CacheMixin = ICache & GObject.Object & SessionFeature;

	/**
	 * File-based cache for HTTP resources.
	 */
	interface Cache extends CacheMixin {}

	class Cache {
		public constructor(options?: Partial<CacheInitOptions>);
		/**
		 * Creates a new {@link Cache}.
		 * @param cache_dir the directory to store the cached data, or %NULL
		 *   to use the default one. Note that since the cache isn't safe to access for
		 *   multiple processes at once, and the default directory isn't namespaced by
		 *   process, clients are strongly discouraged from passing %NULL.
		 * @param cache_type the {@link CacheType} of the cache
		 * @returns a new {@link Cache}
		 */
		public static new(cache_dir: string | null, cache_type: CacheType): Cache;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContentDecoder} instead.
	 */
	interface IContentDecoder {

	}

	type ContentDecoderInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions
	export interface ContentDecoderInitOptions extends ContentDecoderInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContentDecoder} instead.
	 */
	type ContentDecoderMixin = IContentDecoder & GObject.Object & SessionFeature;

	/**
	 * Handles decoding of HTTP messages.
	 * 
	 * {@link ContentDecoder} handles adding the "Accept-Encoding" header on
	 * outgoing messages, and processing the "Content-Encoding" header on
	 * incoming ones. Currently it supports the "gzip", "deflate", and "br"
	 * content codings.
	 * 
	 * A #SoupContentDecoder will automatically be
	 * added to the session by default. (You can use
	 * [method#Session.remove_feature_by_type] if you don't
	 * want this.)
	 * 
	 * If #SoupContentDecoder successfully decodes the Content-Encoding,
	 * the message body will contain the decoded data; however, the message headers
	 * will be unchanged (and so "Content-Encoding" will still be present,
	 * "Content-Length" will describe the original encoded length, etc).
	 * 
	 * If "Content-Encoding" contains any encoding types that
	 * #SoupContentDecoder doesn't recognize, then none of the encodings
	 * will be decoded.
	 * 
	 * (Note that currently there is no way to (automatically) use
	 * Content-Encoding when sending a request body, or to pick specific
	 * encoding types to support.)
	 */
	interface ContentDecoder extends ContentDecoderMixin {}

	class ContentDecoder {
		public constructor(options?: Partial<ContentDecoderInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContentSniffer} instead.
	 */
	interface IContentSniffer {
		/**
		 * Sniffs #buffer to determine its Content-Type.
		 * 
		 * The result may also be influenced by the Content-Type declared in #msg's
		 * response headers.
		 * @param msg the message to sniff
		 * @param buffer a buffer containing the start of #msg's response body
		 * @returns the sniffed Content-Type of #buffer; this will never be %NULL,
		 *   but may be `application/octet-stream`.
		 * 
		 * return
		 *   location for Content-Type parameters (eg, "charset"), or %NULL
		 */
		sniff(msg: Message, buffer: GLib.Bytes): [ string, string[] | null ];
	}

	type ContentSnifferInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions
	export interface ContentSnifferInitOptions extends ContentSnifferInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContentSniffer} instead.
	 */
	type ContentSnifferMixin = IContentSniffer & GObject.Object & SessionFeature;

	/**
	 * Sniffs the mime type of messages.
	 * 
	 * A {@link ContentSniffer} tries to detect the actual content type of
	 * the files that are being downloaded by looking at some of the data
	 * before the [class#Message] emits its [signal#Message::got-headers] signal.
	 * #SoupContentSniffer implements [iface#SessionFeature], so you can add
	 * content sniffing to a session with [method#Session.add_feature] or
	 * [method#Session.add_feature_by_type].
	 */
	interface ContentSniffer extends ContentSnifferMixin {}

	class ContentSniffer {
		public constructor(options?: Partial<ContentSnifferInitOptions>);
		/**
		 * Creates a new {@link ContentSniffer}.
		 * @returns a new {@link ContentSniffer}
		 */
		public static new(): ContentSniffer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieJar} instead.
	 */
	interface ICookieJar {
		/**
		 * The policy the jar should follow to accept or reject cookies.
		 */
		accept_policy: CookieJarAcceptPolicy;
		/**
		 * Whether or not the cookie jar is read-only.
		 */
		read_only: boolean;
		/**
		 * Adds #cookie to #jar.
		 * 
		 * Emits the [signal#CookieJar::changed] signal if we are modifying
		 * an existing cookie or adding a valid new cookie ('valid' means
		 * that the cookie's expire date is not in the past).
		 * 
		 * #cookie will be 'stolen' by the jar, so don't free it afterwards.
		 * @param cookie a {@link Cookie}
		 */
		add_cookie(cookie: Cookie): void;
		/**
		 * Adds #cookie to #jar.
		 * 
		 * Emits the [signal#CookieJar::changed] signal if we are modifying an existing
		 * cookie or adding a valid new cookie ('valid' means that the cookie's expire
		 * date is not in the past).
		 * 
		 * #first_party will be used to reject cookies coming from third party
		 * resources in case such a security policy is set in the #jar.
		 * 
		 * #uri will be used to reject setting or overwriting secure cookies
		 * from insecure origins. %NULL is treated as secure.
		 * 
		 * #cookie will be 'stolen' by the jar, so don't free it afterwards.
		 * @param cookie a {@link Cookie}
		 * @param uri the URI setting the cookie
		 * @param first_party the URI for the main document
		 */
		add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void;
		/**
		 * Adds #cookie to #jar.
		 * 
		 * Emits the [signal#CookieJar::changed] signal if we are modifying
		 * an existing cookie or adding a valid new cookie ('valid' means
		 * that the cookie's expire date is not in the past).
		 * 
		 * #first_party will be used to reject cookies coming from third party
		 * resources in case such a security policy is set in the #jar.
		 * 
		 * #cookie will be 'stolen' by the jar, so don't free it afterwards.
		 * 
		 * For secure cookies to work properly you may want to use
		 * [method#CookieJar.add_cookie_full].
		 * @param first_party the URI for the main document
		 * @param cookie a {@link Cookie}
		 */
		add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void;
		/**
		 * Constructs a [struct#GLib.List] with every cookie inside the #jar.
		 * 
		 * The cookies in the list are a copy of the original, so
		 * you have to free them when you are done with them.
		 * @returns a #GSList
		 *   with all the cookies in the #jar.
		 */
		all_cookies(): Cookie[];
		/**
		 * Deletes #cookie from #jar.
		 * 
		 * Emits the [signal#CookieJar::changed] signal.
		 * @param cookie a {@link Cookie}
		 */
		delete_cookie(cookie: Cookie): void;
		/**
		 * Gets #jar's [enum#CookieJarAcceptPolicy].
		 * @returns the {@link CookieJarAcceptPolicy} set in the #jar
		 */
		get_accept_policy(): CookieJarAcceptPolicy;
		/**
		 * Retrieves the list of cookies that would be sent with a request to #uri
		 * as a [struct#GLib.List] of {@link Cookie} objects.
		 * 
		 * If #for_http is %TRUE, the return value will include cookies marked
		 * "HttpOnly" (that is, cookies that the server wishes to keep hidden
		 * from client-side scripting operations such as the JavaScript
		 * document.cookies property). Since #SoupCookieJar sets the Cookie
		 * header itself when making the actual HTTP request, you should
		 * almost certainly be setting #for_http to %FALSE if you are calling
		 * this.
		 * @param uri a #GUri
		 * @param for_http whether or not the return value is being passed directly
		 *   to an HTTP operation
		 * @returns a #GSList
		 *   with the cookies in the #jar that would be sent with a request to #uri.
		 */
		get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[];
		/**
		 * This is an extended version of [method#CookieJar.get_cookie_list] that
		 * provides more information required to use SameSite cookies.
		 * 
		 * See the [SameSite cookies
		 * spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00) for
		 * more detailed information.
		 * @param uri a #GUri
		 * @param top_level a #GUri for the top level document
		 * @param site_for_cookies a #GUri indicating the origin to get cookies for
		 * @param for_http whether or not the return value is being passed directly
		 *   to an HTTP operation
		 * @param is_safe_method if the HTTP method is safe, as defined by RFC 7231, ignored when #for_http is %FALSE
		 * @param is_top_level_navigation whether or not the HTTP request is part of
		 *   top level navigation
		 * @returns a #GSList
		 *   with the cookies in the #jar that would be sent with a request to #uri.
		 */
		get_cookie_list_with_same_site_info(uri: GLib.Uri, top_level: GLib.Uri | null, site_for_cookies: GLib.Uri | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[];
		/**
		 * Retrieves (in Cookie-header form) the list of cookies that would
		 * be sent with a request to #uri.
		 * 
		 * If #for_http is %TRUE, the return value will include cookies marked
		 * "HttpOnly" (that is, cookies that the server wishes to keep hidden
		 * from client-side scripting operations such as the JavaScript
		 * document.cookies property). Since {@link CookieJar} sets the Cookie
		 * header itself when making the actual HTTP request, you should
		 * almost certainly be setting #for_http to %FALSE if you are calling
		 * this.
		 * @param uri a #GUri
		 * @param for_http whether or not the return value is being passed directly
		 *   to an HTTP operation
		 * @returns the cookies, in string form, or %NULL if
		 *   there are no cookies for #uri.
		 */
		get_cookies(uri: GLib.Uri, for_http: boolean): string | null;
		/**
		 * Gets whether #jar stores cookies persistenly.
		 * @returns %TRUE if #jar storage is persistent or %FALSE otherwise.
		 */
		is_persistent(): boolean;
		/**
		 * Sets #policy as the cookie acceptance policy for #jar.
		 * @param policy a {@link CookieJarAcceptPolicy}
		 */
		set_accept_policy(policy: CookieJarAcceptPolicy): void;
		/**
		 * Adds #cookie to #jar, exactly as though it had appeared in a
		 * Set-Cookie header returned from a request to #uri.
		 * 
		 * Keep in mind that if the [enum#CookieJarAcceptPolicy] set is either
		 * %SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY or
		 * %SOUP_COOKIE_JAR_ACCEPT_GRANDFATHERED_THIRD_PARTY you'll need to use
		 * [method#CookieJar.set_cookie_with_first_party], otherwise the jar
		 * will have no way of knowing if the cookie is being set by a third
		 * party or not.
		 * @param uri the URI setting the cookie
		 * @param cookie the stringified cookie to set
		 */
		set_cookie(uri: GLib.Uri, cookie: string): void;
		/**
		 * Adds #cookie to #jar, exactly as though it had appeared in a
		 * Set-Cookie header returned from a request to #uri.
		 * 
		 * #first_party will be used to reject cookies coming from third party resources
		 * in case such a security policy is set in the #jar.
		 * @param uri the URI setting the cookie
		 * @param first_party the URI for the main document
		 * @param cookie the stringified cookie to set
		 */
		set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void;
		/**
		 * Emitted when #jar changes.
		 * 
		 * If a cookie has been added,
		 * #new_cookie will contain the newly-added cookie and
		 * #old_cookie will be %NULL. If a cookie has been deleted,
		 * #old_cookie will contain the to-be-deleted cookie and
		 * #new_cookie will be %NULL. If a cookie has been changed,
		 * #old_cookie will contain its old value, and #new_cookie its
		 * new value.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - old_cookie: the old {@link Cookie} value 
		 *  - new_cookie: the new #SoupCookie value 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "changed", callback: (owner: this, old_cookie: Cookie, new_cookie: Cookie) => void): number;

		connect(signal: "notify::accept-policy", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::read-only", callback: (owner: this, ...args: any) => void): number;

	}

	type CookieJarInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions & 
	Pick<ICookieJar,
		"accept_policy" |
		"read_only">;

	export interface CookieJarInitOptions extends CookieJarInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieJar} instead.
	 */
	type CookieJarMixin = ICookieJar & GObject.Object & SessionFeature;

	/**
	 * Automatic cookie handling for SoupSession.
	 * 
	 * A {@link CookieJar} stores [struct#Cookie]s and arrange for them to be sent with
	 * the appropriate [class#Message]s. #SoupCookieJar implements
	 * [iface#SessionFeature], so you can add a cookie jar to a session with
	 * [method#Session.add_feature] or [method#Session.add_feature_by_type].
	 * 
	 * Note that the base #SoupCookieJar class does not support any form
	 * of long-term cookie persistence.
	 */
	interface CookieJar extends CookieJarMixin {}

	class CookieJar {
		public constructor(options?: Partial<CookieJarInitOptions>);
		/**
		 * Creates a new {@link CookieJar}.
		 * 
		 * The base #SoupCookieJar class does not support persistent storage of cookies;
		 * use a subclass for that.
		 * @returns a new {@link CookieJar}
		 */
		public static new(): CookieJar;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieJarDB} instead.
	 */
	interface ICookieJarDB {
		/**
		 * Cookie-storage filename.
		 */
		filename: string;

		connect(signal: "notify::filename", callback: (owner: this, ...args: any) => void): number;

	}

	type CookieJarDBInitOptionsMixin = CookieJarInitOptions & SessionFeatureInitOptions & 
	Pick<ICookieJarDB,
		"filename">;

	export interface CookieJarDBInitOptions extends CookieJarDBInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieJarDB} instead.
	 */
	type CookieJarDBMixin = ICookieJarDB & CookieJar & SessionFeature;

	/**
	 * Database-based Cookie Jar.
	 * 
	 * {@link CookieJarDB} is a [class#CookieJar] that reads cookies from and writes
	 * them to a sqlite database in the new Mozilla format.
	 * 
	 * (This is identical to `SoupCookieJarSqlite` in
	 * libsoup-gnome; it has just been moved into libsoup proper, and
	 * renamed to avoid conflicting.)
	 */
	interface CookieJarDB extends CookieJarDBMixin {}

	class CookieJarDB {
		public constructor(options?: Partial<CookieJarDBInitOptions>);
		/**
		 * Creates a {@link CookieJarDB}.
		 * 
		 * #filename will be read in at startup to create an initial set of cookies. If
		 * #read_only is %FALSE, then the non-session cookies will be written to
		 * #filename when the [signal#CookieJar::changed] signal is emitted from the
		 * jar. (If #read_only is %TRUE, then the cookie jar will only be used for this
		 * session, and changes made to it will be lost when the jar is destroyed.)
		 * @param filename the filename to read to/write from, or %NULL
		 * @param read_only %TRUE if #filename is read-only
		 * @returns the new {@link CookieJar}
		 */
		public static new(filename: string, read_only: boolean): CookieJar;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieJarText} instead.
	 */
	interface ICookieJarText {
		/**
		 * Cookie-storage filename.
		 */
		filename: string;

		connect(signal: "notify::filename", callback: (owner: this, ...args: any) => void): number;

	}

	type CookieJarTextInitOptionsMixin = CookieJarInitOptions & SessionFeatureInitOptions & 
	Pick<ICookieJarText,
		"filename">;

	export interface CookieJarTextInitOptions extends CookieJarTextInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieJarText} instead.
	 */
	type CookieJarTextMixin = ICookieJarText & CookieJar & SessionFeature;

	/**
	 * Text-file-based ("cookies.txt") Cookie Jar
	 * 
	 * {@link CookieJarText} is a [class#CookieJar] that reads cookies from and writes
	 * them to a text file in format similar to Mozilla's "cookies.txt".
	 */
	interface CookieJarText extends CookieJarTextMixin {}

	class CookieJarText {
		public constructor(options?: Partial<CookieJarTextInitOptions>);
		/**
		 * Creates a {@link CookieJarText}.
		 * 
		 * #filename will be read in at startup to create an initial set of cookies. If
		 * #read_only is %FALSE, then the non-session cookies will be written to
		 * #filename when the [signal#CookieJar::changed] signal is emitted from the
		 * jar. (If #read_only is %TRUE, then the cookie jar will only be used for this
		 * session, and changes made to it will be lost when the jar is destroyed.)
		 * @param filename the filename to read to/write from
		 * @param read_only %TRUE if #filename is read-only
		 * @returns the new {@link CookieJar}
		 */
		public static new(filename: string, read_only: boolean): CookieJar;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link HSTSEnforcer} instead.
	 */
	interface IHSTSEnforcer {
		/**
		 * Gets a list of domains for which there are policies in #enforcer.
		 * @param session_policies whether to include session policies
		 * @returns a newly allocated
		 *   list of domains. Use [func#GLib.List.free_full] and [func#GLib.free] to free the
		 *   list.
		 */
		get_domains(session_policies: boolean): string[];
		/**
		 * Gets a list with the policies in #enforcer.
		 * @param session_policies whether to include session policies
		 * @returns a newly
		 *   allocated list of policies. Use [func#GLib.List.free_full] and
		 *   [method#HSTSPolicy.free] to free the list.
		 */
		get_policies(session_policies: boolean): HSTSPolicy[];
		/**
		 * Gets whether #hsts_enforcer has a currently valid policy for #domain.
		 * @param domain a domain.
		 * @returns %TRUE if access to #domain should happen over HTTPS, false
		 *   otherwise.
		 */
		has_valid_policy(domain: string): boolean;
		/**
		 * Gets whether #hsts_enforcer stores policies persistenly.
		 * @returns %TRUE if #hsts_enforcer storage is persistent or %FALSE otherwise.
		 */
		is_persistent(): boolean;
		/**
		 * Sets #policy to #hsts_enforcer.
		 * 
		 * If #policy is expired, any existing HSTS policy for its host will be removed
		 * instead. If a policy existed for this host, it will be replaced. Otherwise,
		 * the new policy will be inserted. If the policy is a session policy, that is,
		 * one created with [ctor#HSTSPolicy.new_session_policy], the policy will not
		 * expire and will be enforced during the lifetime of #hsts_enforcer's
		 * [class#Session].
		 * @param policy the policy of the HSTS host
		 */
		set_policy(policy: HSTSPolicy): void;
		/**
		 * Sets a session policy for #domain.
		 * 
		 * A session policy is a policy that is permanent to the lifetime of
		 * #hsts_enforcer's [class#Session] and doesn't expire.
		 * @param domain policy domain or hostname
		 * @param include_subdomains %TRUE if the policy applies on sub domains
		 */
		set_session_policy(domain: string, include_subdomains: boolean): void;
		/**
		 * Emitted when #hsts_enforcer changes.
		 * 
		 * If a policy has been added,
		 * #new_policy will contain the newly-added policy and
		 * #old_policy will be %NULL. If a policy has been deleted,
		 * #old_policy will contain the to-be-deleted policy and
		 * #new_policy will be %NULL. If a policy has been changed,
		 * #old_policy will contain its old value, and #new_policy its
		 * new value.
		 * 
		 * Note that you shouldn't modify the policies from a callback to
		 * this signal.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - old_policy: the old {@link HSTSPolicy} value 
		 *  - new_policy: the new #SoupHSTSPolicy value 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "changed", callback: (owner: this, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void): number;

	}

	type HSTSEnforcerInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions
	export interface HSTSEnforcerInitOptions extends HSTSEnforcerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link HSTSEnforcer} instead.
	 */
	type HSTSEnforcerMixin = IHSTSEnforcer & GObject.Object & SessionFeature;

	/**
	 * Automatic HTTP Strict Transport Security enforcing for [class#Session].
	 * 
	 * A {@link HSTSEnforcer} stores HSTS policies and enforces them when
	 * required. #SoupHSTSEnforcer implements [iface#SessionFeature], so you
	 * can add an HSTS enforcer to a session with
	 * [method#Session.add_feature] or [method#Session.add_feature_by_type].
	 * 
	 * #SoupHSTSEnforcer keeps track of all the HTTPS destinations that,
	 * when connected to, return the Strict-Transport-Security header with
	 * valid values. #SoupHSTSEnforcer will forget those destinations
	 * upon expiry or when the server requests it.
	 * 
	 * When the [class#Session] the #SoupHSTSEnforcer is attached to queues or
	 * restarts a message, the #SoupHSTSEnforcer will rewrite the URI to HTTPS if
	 * the destination is a known HSTS host and is contacted over an insecure
	 * transport protocol (HTTP). Users of #SoupHSTSEnforcer are advised to listen
	 * to changes in the [property#Message:uri] property in order to be aware of
	 * changes in the message URI.
	 * 
	 * Note that #SoupHSTSEnforcer does not support any form of long-term
	 * HSTS policy persistence. See [class#HSTSEnforcerDB] for a persistent
	 * enforcer.
	 */
	interface HSTSEnforcer extends HSTSEnforcerMixin {}

	class HSTSEnforcer {
		public constructor(options?: Partial<HSTSEnforcerInitOptions>);
		/**
		 * Creates a new {@link HSTSEnforcer}.
		 * 
		 * The base #SoupHSTSEnforcer class does not support persistent storage of HSTS
		 * policies, see [class#HSTSEnforcerDB] for that.
		 * @returns a new {@link HSTSEnforcer}
		 */
		public static new(): HSTSEnforcer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link HSTSEnforcerDB} instead.
	 */
	interface IHSTSEnforcerDB {
		/**
		 * The filename of the SQLite database where HSTS policies are stored.
		 */
		filename: string;

		connect(signal: "notify::filename", callback: (owner: this, ...args: any) => void): number;

	}

	type HSTSEnforcerDBInitOptionsMixin = HSTSEnforcerInitOptions & SessionFeatureInitOptions & 
	Pick<IHSTSEnforcerDB,
		"filename">;

	export interface HSTSEnforcerDBInitOptions extends HSTSEnforcerDBInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link HSTSEnforcerDB} instead.
	 */
	type HSTSEnforcerDBMixin = IHSTSEnforcerDB & HSTSEnforcer & SessionFeature;

	/**
	 * Persistent HTTP Strict Transport Security enforcer.
	 * 
	 * {@link HSTSEnforcerDB} is a [class#HSTSEnforcer] that uses a SQLite
	 * database as a backend for persistency.
	 */
	interface HSTSEnforcerDB extends HSTSEnforcerDBMixin {}

	class HSTSEnforcerDB {
		public constructor(options?: Partial<HSTSEnforcerDBInitOptions>);
		/**
		 * Creates a {@link HSTSEnforcerDB}.
		 * 
		 * #filename will be read in during the initialization of a
		 * #SoupHSTSEnforcerDB, in order to create an initial set of HSTS
		 * policies. If the file doesn't exist, a new database will be created
		 * and initialized. Changes to the policies during the lifetime of a
		 * #SoupHSTSEnforcerDB will be written to #filename when
		 * [signal#HSTSEnforcer::changed] is emitted.
		 * @param filename the filename of the database to read/write from.
		 * @returns the new {@link HSTSEnforcer}
		 */
		public static new(filename: string): HSTSEnforcer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Logger} instead.
	 */
	interface ILogger {
		/**
		 * The level of logging output.
		 */
		level: LoggerLogLevel;
		/**
		 * If [property#Logger:level] is %SOUP_LOGGER_LOG_BODY, this gives
		 * the maximum number of bytes of the body that will be logged.
		 * (-1 means "no limit".)
		 */
		max_body_size: number;
		/**
		 * Get the maximum body size for #logger.
		 * @returns the maximum body size, or -1 if unlimited
		 */
		get_max_body_size(): number;
		/**
		 * Sets the maximum body size for #logger (-1 means no limit).
		 * @param max_body_size the maximum body size to log
		 */
		set_max_body_size(max_body_size: number): void;
		/**
		 * Sets up an alternate log printing routine, if you don't want
		 * the log to go to `stdout`.
		 * @param printer the callback for printing logging output
		 */
		set_printer(printer: LoggerPrinter): void;
		/**
		 * Sets up a filter to determine the log level for a given request.
		 * 
		 * For each HTTP request #logger will invoke #request_filter to
		 * determine how much (if any) of that request to log. (If you do not
		 * set a request filter, #logger will just always log requests at the
		 * level passed to [ctor#Logger.new].)
		 * @param request_filter the callback for request debugging
		 */
		set_request_filter(request_filter: LoggerFilter): void;
		/**
		 * Sets up a filter to determine the log level for a given response.
		 * 
		 * For each HTTP response #logger will invoke #response_filter to
		 * determine how much (if any) of that response to log. (If you do not
		 * set a response filter, #logger will just always log responses at
		 * the level passed to [ctor#Logger.new].)
		 * @param response_filter the callback for response debugging
		 */
		set_response_filter(response_filter: LoggerFilter): void;
		connect(signal: "notify::level", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-body-size", callback: (owner: this, ...args: any) => void): number;

	}

	type LoggerInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions & 
	Pick<ILogger,
		"level" |
		"max_body_size">;

	export interface LoggerInitOptions extends LoggerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Logger} instead.
	 */
	type LoggerMixin = ILogger & GObject.Object & SessionFeature;

	/**
	 * Debug logging support
	 * 
	 * {@link Logger} watches a [class#Session] and logs the HTTP traffic that
	 * it generates, for debugging purposes. Many applications use an
	 * environment variable to determine whether or not to use
	 * #SoupLogger, and to determine the amount of debugging output.
	 * 
	 * To use #SoupLogger, first create a logger with [ctor#Logger.new], optionally
	 * configure it with [method#Logger.set_request_filter],
	 * [method#Logger.set_response_filter], and [method#Logger.set_printer], and
	 * then attach it to a session (or multiple sessions) with
	 * [method#Session.add_feature].
	 * 
	 * By default, the debugging output is sent to `stdout`, and looks something
	 * like:
	 * 
	 * ```
	 * > POST /unauth HTTP/1.1
	 * > Soup-Debug-Timestamp: 1200171744
	 * > Soup-Debug: SoupSession 1 (0x612190), SoupMessage 1 (0x617000), GSocket 1 (0x612220)
	 * > Host: localhost
	 * > Content-Type: text/plain
	 * > Connection: close
	 * 
	 * &lt; HTTP/1.1 201 Created
	 * &lt; Soup-Debug-Timestamp: 1200171744
	 * &lt; Soup-Debug: SoupMessage 1 (0x617000)
	 * &lt; Date: Sun, 12 Jan 2008 21:02:24 GMT
	 * &lt; Content-Length: 0
	 * ```
	 * 
	 * The `Soup-Debug-Timestamp` line gives the time (as a `time_t`) when the
	 * request was sent, or the response fully received.
	 * 
	 * The `Soup-Debug` line gives further debugging information about the
	 * [class#Session], [class#Message], and [class#Gio.Socket] involved; the hex
	 * numbers are the addresses of the objects in question (which may be useful if
	 * you are running in a debugger). The decimal IDs are simply counters that
	 * uniquely identify objects across the lifetime of the #SoupLogger. In
	 * particular, this can be used to identify when multiple messages are sent
	 * across the same connection.
	 * 
	 * Currently, the request half of the message is logged just before
	 * the first byte of the request gets written to the network (from the
	 * [signal#Message::starting] signal).
	 * 
	 * The response is logged just after the last byte of the response body is read
	 * from the network (from the [signal#Message::got-body] or
	 * [signal#Message::got-informational] signal), which means that the
	 * [signal#Message::got-headers] signal, and anything triggered off it (such as
	 * #SoupMessage::authenticate) will be emitted *before* the response headers are
	 * actually logged.
	 * 
	 * If the response doesn't happen to trigger the [signal#Message::got-body] nor
	 * [signal#Message::got-informational] signals due to, for example, a
	 * cancellation before receiving the last byte of the response body, the
	 * response will still be logged on the event of the [signal#Message::finished]
	 * signal.
	 */
	interface Logger extends LoggerMixin {}

	class Logger {
		public constructor(options?: Partial<LoggerInitOptions>);
		/**
		 * Creates a new {@link Logger} with the given debug level.
		 * 
		 * If you need finer control over what message parts are and aren't
		 * logged, use [method#Logger.set_request_filter] and
		 * [method#Logger.set_response_filter].
		 * @param level the debug level
		 * @returns a new {@link Logger}
		 */
		public static new(level: LoggerLogLevel): Logger;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Message} instead.
	 */
	interface IMessage {
		/**
		 * The [struct#GLib.Uri] loaded in the application when the message was
		 * queued.
		 */
		first_party: GLib.Uri;
		/**
		 * Various message options.
		 */
		flags: MessageFlags;
		/**
		 * The HTTP protocol version to use.
		 */
		readonly http_version: HTTPVersion;
		/**
		 * Whether the message is an OPTIONS ping.
		 * 
		 * The {@link Message} is intended to be used to send
		 * `OPTIONS *` to a server. When set to %TRUE, the
		 * path of [property#Message:uri] will be ignored and
		 * [property#Message:method] set to %SOUP_METHOD_OPTIONS.
		 */
		is_options_ping: boolean;
		/**
		 * Set when the message is navigating between top level domains.
		 */
		is_top_level_navigation: boolean;
		/**
		 * The message's HTTP method.
		 */
		method: string;
		/**
		 * Sets the priority of the {@link Message}. See
		 * [method#Message.set_priority] for further details.
		 */
		priority: MessagePriority;
		/**
		 * The HTTP response reason phrase.
		 */
		readonly reason_phrase: string;
		/**
		 * The remote [class#Gio.SocketAddress] of the connection associated
		 * with the message.
		 */
		readonly remote_address: Gio.SocketAddress;
		/**
		 * The HTTP request headers.
		 */
		readonly request_headers: MessageHeaders;
		/**
		 * The HTTP response headers.
		 */
		readonly response_headers: MessageHeaders;
		/**
		 * Site used to compare cookies against. Used for SameSite cookie support.
		 */
		site_for_cookies: GLib.Uri;
		/**
		 * The HTTP response status code.
		 */
		readonly status_code: number;
		/**
		 * The Name of TLS ciphersuite negotiated for this message connection.
		 */
		readonly tls_ciphersuite_name: string;
		/**
		 * The peer's [class#Gio.TlsCertificate] associated with the message.
		 */
		readonly tls_peer_certificate: Gio.TlsCertificate;
		/**
		 * The verification errors on [property#Message:tls-peer-certificate].
		 */
		readonly tls_peer_certificate_errors: Gio.TlsCertificateFlags;
		/**
		 * The TLS protocol version negotiated for the message connection.
		 */
		readonly tls_protocol_version: Gio.TlsProtocolVersion;
		/**
		 * The message's Request-URI.
		 */
		uri: GLib.Uri;
		/**
		 * Adds #flags to the set of #msg's flags.
		 * @param flags a set of {@link MessageFlags} values
		 */
		add_flags(flags: MessageFlags): void;
		/**
		 * Disables the actions of [iface#SessionFeature]s with the
		 * given #feature_type (or a subclass of that type) on #msg.
		 * 
		 * #msg is processed as though the feature(s) hadn't been added to the
		 * session. Eg, passing #SOUP_TYPE_CONTENT_SNIFFER for #feature_type
		 * will disable Content-Type sniffing on the message.
		 * 
		 * You must call this before queueing #msg on a session; calling it on
		 * a message that has already been queued is undefined. In particular,
		 * you cannot call this on a message that is being requeued after a
		 * redirect or authentication.
		 * @param feature_type the #GType of a {@link SessionFeature}
		 */
		disable_feature(feature_type: GObject.Type): void;
		/**
		 * Returns the unique idenfier for the last connection used.
		 * 
		 * This may be 0 if it was a cached resource or it has not gotten
		 * a connection yet.
		 * @returns An id or 0 if no connection.
		 */
		get_connection_id(): number;
		/**
		 * Gets #msg's first-party [struct#GLib.Uri].
		 * @returns the #msg's first party #GUri
		 */
		get_first_party(): GLib.Uri;
		/**
		 * Gets the flags on #msg.
		 * @returns the flags
		 */
		get_flags(): MessageFlags;
		/**
		 * Returns whether HTTP/1 version is currently demanded for the #msg send.
		 * @returns %TRUE, when HTTP/1 is demanded, %FALSE otherwise.
		 */
		get_force_http1(): boolean;
		/**
		 * Gets the HTTP version of #msg.
		 * 
		 * This is the minimum of the version from the request and the version from the
		 * response.
		 * @returns the HTTP version
		 */
		get_http_version(): HTTPVersion;
		/**
		 * Gets whether #msg is intended to be used to send `OPTIONS *` to a server.
		 * @returns %TRUE if the message is options ping, or %FALSE otherwise
		 */
		get_is_options_ping(): boolean;
		/**
		 * Returns if this message is set as a top level navigation.
		 * 
		 * Used for same-site policy checks.
		 * @returns Whether the current request is a top-level navitation
		 */
		get_is_top_level_navigation(): boolean;
		/**
		 * Returns the method of this message.
		 * @returns A method such as %SOUP_METHOD_GET
		 */
		get_method(): string;
		/**
		 * Get the [struct#MessageMetrics] of #msg.
		 * 
		 * If the flag %SOUP_MESSAGE_COLLECT_METRICS is not enabled for #msg this will
		 * return %NULL.
		 * @returns a {@link MessageMetrics}
		 */
		get_metrics(): MessageMetrics | null;
		/**
		 * Retrieves the [enum#MessagePriority].
		 * 
		 * If not set this value defaults to #SOUP_MESSAGE_PRIORITY_NORMAL.
		 * @returns the priority of the message.
		 */
		get_priority(): MessagePriority;
		/**
		 * Returns the reason phrase for the status of this message.
		 * @returns the phrase
		 */
		get_reason_phrase(): string | null;
		/**
		 * Get the remote [class#Gio.SocketAddress] of the connection associated with
		 * the message.
		 * 
		 * The returned address can be %NULL if the connection hasn't been established
		 * yet, or the resource was loaded from the disk cache. In case of proxy
		 * connections, the remote address returned is a [class#Gio.ProxyAddress]. If
		 * [property#Session:remote-connectable] is set the returned address id for the
		 * connection to the session's remote connectable.
		 * @returns a #GSocketAddress or %NULL if the connection
		 *     hasn't been established
		 */
		get_remote_address(): Gio.SocketAddress | null;
		/**
		 * Returns the headers sent with the request.
		 * @returns The {@link MessageHeaders}
		 */
		get_request_headers(): MessageHeaders;
		/**
		 * Returns the headers recieved with the response.
		 * @returns The {@link MessageHeaders}
		 */
		get_response_headers(): MessageHeaders;
		/**
		 * Gets #msg's site for cookies #GUri.
		 * @returns the #msg's site for cookies #GUri
		 */
		get_site_for_cookies(): GLib.Uri;
		/**
		 * Returns the set status of this message.
		 * @returns The {@link Status}
		 */
		get_status(): Status;
		/**
		 * Gets the name of the TLS ciphersuite negotiated for #msg's connection.
		 * @returns the name of the TLS ciphersuite,
		 *   or %NULL if #msg's connection is not SSL.
		 */
		get_tls_ciphersuite_name(): string;
		/**
		 * Gets the peer's [class#Gio.TlsCertificate] associated with #msg's connection.
		 * 
		 * Note that this is not set yet during the emission of
		 * [signal#Message::accept-certificate] signal.
		 * @returns #msg's TLS peer certificate,
		 *   or %NULL if #msg's connection is not SSL.
		 */
		get_tls_peer_certificate(): Gio.TlsCertificate | null;
		/**
		 * Gets the errors associated with validating #msg's TLS peer certificate.
		 * Note that this is not set yet during the emission of
		 * [signal#Message::accept-certificate] signal.
		 * @returns a #GTlsCertificateFlags with #msg's TLS peer certificate errors.
		 */
		get_tls_peer_certificate_errors(): Gio.TlsCertificateFlags;
		/**
		 * Gets the TLS protocol version negotiated for #msg's connection.
		 * 
		 * If the message connection is not SSL, %G_TLS_PROTOCOL_VERSION_UNKNOWN is returned.
		 * @returns a #GTlsProtocolVersion
		 */
		get_tls_protocol_version(): Gio.TlsProtocolVersion;
		/**
		 * Gets #msg's URI.
		 * @returns the URI #msg is targeted for.
		 */
		get_uri(): GLib.Uri;
		/**
		 * Get whether [iface#SessionFeature]s of the given #feature_type
		 * (or a subclass of that type) are disabled on #msg.
		 * 
		 * See [method#Message.disable_feature].
		 * @param feature_type the #GType of a {@link SessionFeature}
		 * @returns %TRUE if feature is disabled, or %FALSE otherwise.
		 */
		is_feature_disabled(feature_type: GObject.Type): boolean;
		/**
		 * Determines whether or not #msg's connection can be kept alive for
		 * further requests after processing #msg.
		 * 
		 * The result is based on the HTTP version, Connection header, etc.
		 * @returns %TRUE or %FALSE.
		 */
		is_keepalive(): boolean;
		/**
		 * Queries if #flags are present in the set of #msg's flags.
		 * @param flags a set of {@link MessageFlags} values
		 * @returns %TRUE if #flags are enabled in #msg
		 */
		query_flags(flags: MessageFlags): boolean;
		/**
		 * Removes #flags from the set of #msg's flags.
		 * @param flags a set of {@link MessageFlags} values
		 */
		remove_flags(flags: MessageFlags): void;
		/**
		 * Sets #first_party as the main document #GUri for #msg.
		 * 
		 * For details of when and how this is used refer to the documentation for
		 * [enum#CookieJarAcceptPolicy].
		 * @param first_party the #GUri for the #msg's first party
		 */
		set_first_party(first_party: GLib.Uri): void;
		/**
		 * Sets the specified flags on #msg.
		 * @param flags a set of {@link MessageFlags} values
		 */
		set_flags(flags: MessageFlags): void;
		/**
		 * Sets whether HTTP/1 version should be used when sending this message.
		 * Some connections can still override it, if needed.
		 * 
		 * Note the value is unset after the message send is finished.
		 * @param value value to set
		 */
		set_force_http1(value: boolean): void;
		/**
		 * Set whether #msg is intended to be used to send `OPTIONS *` to a server.
		 * 
		 * When set to %TRUE, the path of [property#Message:uri] will be ignored and
		 * [property#Message:method] set to %SOUP_METHOD_OPTIONS.
		 * @param is_options_ping the value to set
		 */
		set_is_options_ping(is_options_ping: boolean): void;
		/**
		 * Sets whether the current request is a top-level navitation.
		 * 
		 * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
		 * for more information.
		 * @param is_top_level_navigation if %TRUE indicate the current request is a top-level navigation
		 */
		set_is_top_level_navigation(is_top_level_navigation: boolean): void;
		/**
		 * Set #msg's HTTP method to #method.
		 * @param method the value to set
		 */
		set_method(method: string): void;
		/**
		 * Sets the priority of a message.
		 * 
		 * Note that this won't have any effect unless used before the message is added
		 * to the session's message processing queue.
		 * 
		 * The message will be placed just before any other previously added
		 * message with lower priority (messages with the same priority are
		 * processed on a FIFO basis).
		 * 
		 * Setting priorities does not currently work with synchronous messages
		 * because in the synchronous/blocking case, priority ends up being determined
		 * semi-randomly by thread scheduling.
		 * @param priority the {@link MessagePriority}
		 */
		set_priority(priority: MessagePriority): void;
		/**
		 * Set the request body of a {@link Message}.
		 * 
		 * If #content_type is %NULL and #stream is not %NULL the Content-Type header will
		 * not be changed if present.
		 * The request body needs to be set again in case #msg is restarted
		 * (in case of redirection or authentication).
		 * @param content_type MIME Content-Type of the body, or %NULL if unknown
		 * @param stream a #GInputStream to read the request body from
		 * @param content_length the byte length of #stream or -1 if unknown
		 */
		set_request_body(content_type: string | null, stream: Gio.InputStream | null, content_length: number): void;
		/**
		 * Set the request body of a {@link Message} from [struct#GLib.Bytes].
		 * 
		 * If #content_type is %NULL and #bytes is not %NULL the Content-Type header will
		 * not be changed if present.
		 * The request body needs to be set again in case #msg is restarted
		 * (in case of redirection or authentication).
		 * @param content_type MIME Content-Type of the body, or %NULL if unknown
		 * @param bytes a #GBytes with the request body data
		 */
		set_request_body_from_bytes(content_type?: string | null, bytes?: GLib.Bytes | null): void;
		/**
		 * Sets #site_for_cookies as the policy URL for same-site cookies for #msg.
		 * 
		 * It is either the URL of the top-level document or %NULL depending on whether
		 * the registrable domain of this document's URL matches the registrable domain
		 * of its parent's/opener's URL. For the top-level document it is set to the
		 * document's URL.
		 * 
		 * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
		 * for more information.
		 * @param site_for_cookies the #GUri for the #msg's site for cookies
		 */
		set_site_for_cookies(site_for_cookies?: GLib.Uri | null): void;
		/**
		 * Sets the #certificate to be used by #msg's connection when a
		 * client certificate is requested during the TLS handshake.
		 * 
		 * You can call this as a response to [signal#Message::request-certificate]
		 * signal, or before the connection is started. If #certificate is %NULL
		 * the handshake will continue without providing a GTlsCertificate.
		 * Note that the [class#Gio.TlsCertificate] set by this function will be ignored if
		 * [property#Session:tls-interaction] is not %NULL.
		 * @param certificate the #GTlsCertificate to set, or %NULL
		 */
		set_tls_client_certificate(certificate?: Gio.TlsCertificate | null): void;
		/**
		 * Sets #msg's URI to #uri.
		 * 
		 * If #msg has already been sent and you want to re-send it with the new URI,
		 * you need to send it again.
		 * @param uri the new #GUri
		 */
		set_uri(uri: GLib.Uri): void;
		/**
		 * Completes a certificate password request.
		 * 
		 * You must call this as a response to
		 * [signal#Message::request-certificate-password] signal, to notify #msg that
		 * the [class#Gio.TlsPassword] has already been updated.
		 */
		tls_client_certificate_password_request_complete(): void;
		/**
		 * Emitted during the #msg's connection TLS handshake
		 * after an unacceptable TLS certificate has been received.
		 * 
		 * You can return %TRUE to accept #tls_certificate despite
		 * #tls_errors.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - tls_peer_certificate: the peer's #GTlsCertificate 
		 *  - tls_peer_errors: the tls errors of #tls_certificate 
		 *  - returns %TRUE to accept the TLS certificate and stop other
		 *   handlers from being invoked, or %FALSE to propagate the
		 *   event further. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "accept-certificate", callback: (owner: this, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean): number;
		/**
		 * Emitted when the message requires authentication.
		 * 
		 * If credentials are available call [method#Auth.authenticate] on
		 * #auth. If these credentials fail, the signal will be emitted again,
		 * with #retrying set to %TRUE, which will continue until you return
		 * without calling [method#Auth.authenticate] on #auth.
		 * 
		 * Note that this may be emitted before #msg's body has been
		 * fully read.
		 * 
		 * You can authenticate #auth asynchronously by calling
		 * [method#GObject.Object.ref] on #auth and returning %TRUE. The operation will
		 * complete once either [method#Auth.authenticate] or
		 * [method#Auth.cancel] are called.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - auth: the {@link Auth} to authenticate 
		 *  - retrying: %TRUE if this is the second (or later) attempt 
		 *  - returns %TRUE to stop other handlers from being invoked
		 *   or %FALSE to propagate the event further. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "authenticate", callback: (owner: this, auth: Auth, retrying: boolean) => boolean): number;
		/**
		 * This signal is emitted after [signal#Message::got-headers].
		 * 
		 * If content sniffing is disabled, or no content sniffing will be
		 * performed, due to the sniffer deciding to trust the
		 * Content-Type sent by the server, this signal is emitted
		 * immediately after [signal#Message::got-headers], and #type is
		 * %NULL.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - type: the content type that we got from sniffing 
		 *  - params: a #GHashTable with the parameters 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "content-sniffed", callback: (owner: this, type: string, params: string[]) => void): number;
		/**
		 * Emitted when all HTTP processing is finished for a message.
		 * 
		 * (After [signal#Message::got_body]).
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "finished", callback: (owner: this) => void): number;
		/**
		 * Emitted after receiving the complete message response body.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "got-body", callback: (owner: this) => void): number;
		/**
		 * Emitted after reading a portion of the message
		 * body from the network.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - chunk_size: the number of bytes read 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "got-body-data", callback: (owner: this, chunk_size: number) => void): number;
		/**
		 * Emitted after receiving the Status-Line and response headers.
		 * 
		 * See also [method#Message.add_header_handler] and
		 * [method#Message.add_status_code_handler], which can be used to
		 * connect to a subset of emissions of this signal.
		 * 
		 * If you cancel or requeue #msg while processing this signal,
		 * then the current HTTP I/O will be stopped after this signal
		 * emission finished, and #msg's connection will be closed.
		 * (If you need to requeue a message--eg, after handling
		 * authentication or redirection--it is usually better to
		 * requeue it from a [signal#Message::got-body] handler rather
		 * than a [signal#Message::got_headers] handler, so that the
		 * existing HTTP connection can be reused.)
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "got-headers", callback: (owner: this) => void): number;
		/**
		 * Emitted after receiving a 1xx (Informational) response for
		 * a (client-side) message.
		 * 
		 * The response_headers will be filled in with the headers associated
		 * with the informational response; however, those header values will be
		 * erased after this signal is done.
		 * 
		 * If you cancel or requeue #msg while processing this signal,
		 * then the current HTTP I/O will be stopped after this signal
		 * emission finished, and #msg's connection will be closed.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "got-informational", callback: (owner: this) => void): number;
		/**
		 * Emitted when [class#HSTSEnforcer] has upgraded the protocol
		 * for #msg to HTTPS as a result of matching its domain with
		 * a HSTS policy.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "hsts-enforced", callback: (owner: this) => void): number;
		/**
		 * Emitted to indicate that some network-related event
		 * related to #msg has occurred.
		 * 
		 * This essentially proxies the [signal#Gio.SocketClient::event] signal,
		 * but only for events that occur while #msg "owns" the connection; if
		 * #msg is sent on an existing persistent connection, then this signal
		 * will not be emitted. (If you want to force the message to be sent on
		 * a new connection, set the %SOUP_MESSAGE_NEW_CONNECTION flag on it.)
		 * 
		 * See [signal#Gio.SocketClient::event] for more information on what
		 * the different values of #event correspond to, and what
		 * #connection will be in each case.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - event: the network event 
		 *  - connection: the current state of the network connection 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "network-event", callback: (owner: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void): number;
		/**
		 * Emitted during the #msg's connection TLS handshake when
		 * #tls_connection requests a certificate from the client.
		 * 
		 * You can set the client certificate by calling
		 * [method#Message.set_tls_client_certificate] and returning %TRUE. It's
		 * possible to handle the request asynchornously by returning %TRUE and
		 * call [method#Message.set_tls_client_certificate] later once the
		 * certificate is available. Note that this signal is not emitted if
		 * [property#Session:tls-interaction] was set, or if
		 * [method#Message.set_tls_client_certificate] was called before the
		 * connection TLS handshake started.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - tls_connection: the #GTlsClientConnection 
		 *  - returns %TRUE to handle the request, or %FALSE to make the connection
		 *   fail with %G_TLS_ERROR_CERTIFICATE_REQUIRED. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-certificate", callback: (owner: this, tls_connection: Gio.TlsClientConnection) => boolean): number;
		/**
		 * Emitted during the #msg's connection TLS handshake when
		 * #tls_connection requests a certificate password from the client.
		 * 
		 * You can set the certificate password on #password, then call
		 * [method#Message.tls_client_certificate_password_request_complete] and
		 * return %TRUE to handle the signal synchronously. It's possible to
		 * handle the request asynchornously by calling
		 * [method#GObject.Object.ref] on #password, then returning %TRUE and
		 * call
		 * [method#Message.tls_client_certificate_password_request_complete]
		 * later after setting the password on #password. Note that this signal
		 * is not emitted if [property#Session:tls-interaction] was set.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - tls_password: the #GTlsPassword 
		 *  - returns %TRUE to handle the request, or %FALSE to make the connection
		 *   fail with %G_TLS_ERROR_CERTIFICATE_REQUIRED. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-certificate-password", callback: (owner: this, tls_password: Gio.TlsPassword) => boolean): number;
		/**
		 * Emitted when a request that was already sent once is now
		 * being sent again.
		 * 
		 * e.g. because the first attempt received a
		 * redirection response, or because we needed to use
		 * authentication.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "restarted", callback: (owner: this) => void): number;
		/**
		 * Emitted just before a message is sent.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "starting", callback: (owner: this) => void): number;
		/**
		 * Emitted immediately after writing the complete body for a
		 * message.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-body", callback: (owner: this) => void): number;
		/**
		 * Emitted immediately after writing a portion of the message
		 * body to the network.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - chunk_size: the number of bytes written 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-body-data", callback: (owner: this, chunk_size: number) => void): number;
		/**
		 * Emitted immediately after writing the request headers for a
		 * message.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-headers", callback: (owner: this) => void): number;

		connect(signal: "notify::first-party", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::flags", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::http-version", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::is-options-ping", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::is-top-level-navigation", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::method", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::priority", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::reason-phrase", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::remote-address", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::request-headers", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::response-headers", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::site-for-cookies", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::status-code", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-ciphersuite-name", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-peer-certificate", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-peer-certificate-errors", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-protocol-version", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::uri", callback: (owner: this, ...args: any) => void): number;

	}

	type MessageInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IMessage,
		"first_party" |
		"flags" |
		"is_options_ping" |
		"is_top_level_navigation" |
		"method" |
		"priority" |
		"site_for_cookies" |
		"uri">;

	export interface MessageInitOptions extends MessageInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Message} instead.
	 */
	type MessageMixin = IMessage & GObject.Object;

	/**
	 * Represents an HTTP message being sent or received.
	 * 
	 * A {@link Message} represents an HTTP message that is being sent or
	 * received.
	 * 
	 * You would create a #SoupMessage with [ctor#Message.new] or
	 * [ctor#Message.new_from_uri], set up its fields appropriately, and send it.
	 * 
	 * [property#Message:status-code] will normally be a [enum#Status] value, eg,
	 * %SOUP_STATUS_OK, though of course it might actually be an unknown status
	 * code. [property#Message:reason-phrase] is the actual text returned from the
	 * server, which may or may not correspond to the "standard" description of
	 * #status_code. At any rate, it is almost certainly not localized, and not very
	 * descriptive even if it is in the user's language; you should not use
	 * [property#Message:reason-phrase] in user-visible messages. Rather, you should
	 * look at [property#Message:status-code], and determine an end-user-appropriate
	 * message based on that and on what you were trying to do.
	 * 
	 * Note that libsoup's terminology here does not quite match the HTTP
	 * specification: in RFC 2616, an "HTTP-message" is *either* a Request, *or* a
	 * Response. In libsoup, a #SoupMessage combines both the request and the
	 * response.
	 */
	interface Message extends MessageMixin {}

	class Message {
		public constructor(options?: Partial<MessageInitOptions>);
		/**
		 * Creates a new empty {@link Message}, which will connect to #uri.
		 * @param method the HTTP method for the created request
		 * @param uri_string the destination endpoint (as a string)
		 * @returns the new {@link Message} (or %NULL if #uri
		 *   could not be parsed).
		 */
		public static new(method: string, uri_string: string): Message | null;
		/**
		 * Creates a new {@link Message} and sets it up to send the given #encoded_form
		 * to #uri via #method. If #method is "GET", it will include the form data
		 * into #uri's query field, and if #method is "POST" or "PUT", it will be set as
		 * request body.
		 * 
		 * This function takes the ownership of #encoded_form, that will be released
		 * with [func#GLib.free] when no longer in use. See also [func#form_encode],
		 * [func#form_encode_hash] and [func#form_encode_datalist].
		 * @param method the HTTP method for the created request (GET, POST or PUT)
		 * @param uri_string the destination endpoint (as a string)
		 * @param encoded_form a encoded form
		 * @returns the new {@link Message}, or %NULL if
		 *   #uri_string could not be parsed or #method is not "GET, "POST" or "PUT"
		 */
		public static new_from_encoded_form(method: string, uri_string: string, encoded_form: string): Message | null;
		/**
		 * Creates a new {@link Message} and sets it up to send #multipart to
		 * #uri_string via POST.
		 * @param uri_string the destination endpoint
		 * @param multipart a {@link Multipart}
		 * @returns the new {@link Message}, or %NULL if #uri_string
		 *   could not be parsed
		 */
		public static new_from_multipart(uri_string: string, multipart: Multipart): Message | null;
		/**
		 * Creates a new empty {@link Message}, which will connect to #uri.
		 * @param method the HTTP method for the created request
		 * @param uri the destination endpoint
		 * @returns the new {@link Message}
		 */
		public static new_from_uri(method: string, uri: GLib.Uri): Message;
		/**
		 * Creates a new {@link Message} to send `OPTIONS *` to a server. The path of
		 * #base_uri will be ignored.
		 * @param base_uri the destination endpoint
		 * @returns the new {@link Message}
		 */
		public static new_options_ping(base_uri: GLib.Uri): Message;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MultipartInputStream} instead.
	 */
	interface IMultipartInputStream {
		/**
		 * The [class#Message].
		 */
		message: Message;
		/**
		 * Obtains the headers for the part currently being processed.
		 * 
		 * Note that the [struct#MessageHeaders] that are returned are owned by the
		 * {@link MultipartInputStream} and will be replaced when a call is made to
		 * [method#MultipartInputStream.next_part] or its async counterpart, so if
		 * keeping the headers is required, a copy must be made.
		 * 
		 * Note that if a part had no headers at all an empty [struct#MessageHeaders]
		 * will be returned.
		 * @returns a {@link MessageHeaders}
		 *   containing the headers for the part currently being processed or
		 *   %NULL if the headers failed to parse.
		 */
		get_headers(): MessageHeaders | null;
		/**
		 * Obtains an input stream for the next part.
		 * 
		 * When dealing with a multipart response the input stream needs to be wrapped
		 * in a {@link MultipartInputStream} and this function or its async counterpart
		 * need to be called to obtain the first part for reading.
		 * 
		 * After calling this function,
		 * [method#MultipartInputStream.get_headers] can be used to obtain the
		 * headers for the first part. A read of 0 bytes indicates the end of
		 * the part; a new call to this function should be done at that point,
		 * to obtain the next part.
		 * @param cancellable a #GCancellable
		 * @returns a new #GInputStream, or
		 *   %NULL if there are no more parts
		 */
		next_part(cancellable?: Gio.Cancellable | null): Gio.InputStream | null;
		/**
		 * Obtains a [class#Gio.InputStream] for the next request.
		 * 
		 * See [method#MultipartInputStream.next_part] for details on the workflow.
		 * @param io_priority the I/O priority for the request.
		 * @param cancellable a #GCancellable.
		 * @param callback callback to call when request is satisfied.
		 */
		next_part_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an asynchronous request for the next part.
		 * @param result a #GAsyncResult.
		 * @returns a newly created
		 *   [class#Gio.InputStream] for reading the next part or %NULL if there are no
		 *   more parts.
		 */
		next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null;
		connect(signal: "notify::message", callback: (owner: this, ...args: any) => void): number;

	}

	type MultipartInputStreamInitOptionsMixin = Gio.FilterInputStreamInitOptions & Gio.PollableInputStreamInitOptions & 
	Pick<IMultipartInputStream,
		"message">;

	export interface MultipartInputStreamInitOptions extends MultipartInputStreamInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MultipartInputStream} instead.
	 */
	type MultipartInputStreamMixin = IMultipartInputStream & Gio.FilterInputStream & Gio.PollableInputStream;

	/**
	 * Handles streams of multipart messages.
	 * 
	 * This adds support for the multipart responses. For handling the
	 * multiple parts the user needs to wrap the [class#Gio.InputStream] obtained by
	 * sending the request with a [class#MultipartInputStream] and use
	 * [method#MultipartInputStream.next_part] before reading. Responses
	 * which are not wrapped will be treated like non-multipart responses.
	 * 
	 * Note that although {@link MultipartInputStream} is a [class#Gio.InputStream],
	 * you should not read directly from it, and the results are undefined
	 * if you do.
	 */
	interface MultipartInputStream extends MultipartInputStreamMixin {}

	class MultipartInputStream {
		public constructor(options?: Partial<MultipartInputStreamInitOptions>);
		/**
		 * Creates a new {@link MultipartInputStream} that wraps the
		 * [class#Gio.InputStream] obtained by sending the [class#Message].
		 * 
		 * Reads should not be done directly through this object, use the input streams
		 * returned by [method#MultipartInputStream.next_part] or its async
		 * counterpart instead.
		 * @param msg the {@link Message} the response is related to.
		 * @param base_stream the #GInputStream returned by sending the request.
		 * @returns a new {@link MultipartInputStream}
		 */
		public static new(msg: Message, base_stream: Gio.InputStream): MultipartInputStream;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Server} instead.
	 */
	interface IServer {
		/**
		 * If %TRUE, percent-encoding in the Request-URI path will not be
		 * automatically decoded.
		 */
		raw_paths: boolean;
		/**
		 * Server header.
		 * 
		 * If non-%NULL, the value to use for the "Server" header on
		 * [class#ServerMessage]s processed by this server.
		 * 
		 * The Server header is the server equivalent of the
		 * User-Agent header, and provides information about the
		 * server and its components. It contains a list of one or
		 * more product tokens, separated by whitespace, with the most
		 * significant product token coming first. The tokens must be
		 * brief, ASCII, and mostly alphanumeric (although "-", "_",
		 * and "." are also allowed), and may optionally include a "/"
		 * followed by a version string. You may also put comments,
		 * enclosed in parentheses, between or after the tokens.
		 * 
		 * Some HTTP server implementations intentionally do not use
		 * version numbers in their Server header, so that
		 * installations running older versions of the server don't
		 * end up advertising their vulnerability to specific security
		 * holes.
		 * 
		 * As with [property#Session:user_agent], if you set a
		 * [property#Server:server-header] property that has trailing
		 * whitespace, {@link Server} will append its own product token (eg,
		 * `libsoup/2.3.2`) to the end of the header for you.
		 */
		server_header: string;
		/**
		 * A [enum#Gio.TlsAuthenticationMode] for SSL/TLS client authentication.
		 */
		tls_auth_mode: Gio.TlsAuthenticationMode;
		/**
		 * A [class#Gio.TlsCertificate[] that has a
		 * [property#Gio.TlsCertificate:private-key] set.
		 * 
		 * If this is set, then the server will be able to speak
		 * https in addition to (or instead of) plain http.
		 */
		tls_certificate: Gio.TlsCertificate;
		/**
		 * A [class#Gio.TlsDatabase] to use for validating SSL/TLS client
		 * certificates.
		 */
		tls_database: Gio.TlsDatabase;
		/**
		 * Adds a new client stream to the #server.
		 * @param stream a #GIOStream
		 * @param local_addr the local #GSocketAddress associated with the
		 *   #stream
		 * @param remote_addr the remote #GSocketAddress associated with the
		 *   #stream
		 * @returns %TRUE on success, %FALSE if the stream could not be
		 *   accepted or any other error occurred (in which case #error will be
		 *   set).
		 */
		accept_iostream(stream: Gio.IOStream, local_addr?: Gio.SocketAddress | null, remote_addr?: Gio.SocketAddress | null): boolean;
		/**
		 * Adds an authentication domain to #server.
		 * 
		 * Each auth domain will have the chance to require authentication for each
		 * request that comes in; normally auth domains will require authentication for
		 * requests on certain paths that they have been set up to watch, or that meet
		 * other criteria set by the caller. If an auth domain determines that a request
		 * requires authentication (and the request doesn't contain authentication),
		 * #server will automatically reject the request with an appropriate status (401
		 * Unauthorized or 407 Proxy Authentication Required). If the request used the
		 * SoupServer:100-continue Expectation, #server will reject it before the
		 * request body is sent.
		 * @param auth_domain a {@link AuthDomain}
		 */
		add_auth_domain(auth_domain: AuthDomain): void;
		/**
		 * Adds an "early" handler to #server for requests prefixed by #path.
		 * 
		 * Note that "normal" and "early" handlers are matched up together, so if you
		 * add a normal handler for "/foo" and an early handler for "/foo/bar", then a
		 * request to "/foo/bar" (or any path below it) will run only the early handler.
		 * (But if you add both handlers at the same path, then both will get run.)
		 * 
		 * For requests under #path (that have not already been assigned a
		 * status code by a [class#AuthDomain] or a signal handler), #callback
		 * will be invoked after receiving the request headers, but before
		 * receiving the request body; the message's method and
		 * request-headers properties will be set.
		 * 
		 * Early handlers are generally used for processing requests with request bodies
		 * in a streaming fashion. If you determine that the request will contain a
		 * message body, normally you would call [method#MessageBody.set_accumulate] on
		 * the message's request-body to turn off request-body accumulation, and connect
		 * to the message's [signal#ServerMessage::got-chunk] signal to process each
		 * chunk as it comes in.
		 * 
		 * To complete the message processing after the full message body has
		 * been read, you can either also connect to [signal#ServerMessage::got-body],
		 * or else you can register a non-early handler for #path as well. As
		 * long as you have not set the status-code by the time
		 * [signal#ServerMessage::got-body] is emitted, the non-early handler will be
		 * run as well.
		 * @param path the toplevel path for the handler
		 * @param callback callback to invoke for
		 *   requests under #path
		 */
		add_early_handler(path: string | null, callback: ServerCallback): void;
		/**
		 * Adds a handler to #server for requests prefixed by #path.
		 * 
		 * If #path is %NULL or "/", then this will be the default handler for all
		 * requests that don't have a more specific handler. (Note though that if you
		 * want to handle requests to the special "*" URI, you must explicitly register
		 * a handler for "*"; the default handler will not be used for that case.)
		 * 
		 * For requests under #path (that have not already been assigned a
		 * status code by a [class#AuthDomain], an early server handler, or a
		 * signal handler), #callback will be invoked after receiving the
		 * request body; the [class#ServerMessage]'s method, request-headers,
		 * and request-body properties will be set.
		 * 
		 * After determining what to do with the request, the callback must at a minimum
		 * call [method#ServerMessage.set_status] on the message to set the response
		 * status code. Additionally, it may set response headers and/or fill in the
		 * response body.
		 * 
		 * If the callback cannot fully fill in the response before returning
		 * (eg, if it needs to wait for information from a database, or
		 * another network server), it should call [method#ServerMessage.pause]
		 * to tell #server to not send the response right away. When the
		 * response is ready, call [method#ServerMessage.unpause] to cause it
		 * to be sent.
		 * 
		 * To send the response body a bit at a time using "chunked" encoding, first
		 * call [method#MessageHeaders.set_encoding] to set %SOUP_ENCODING_CHUNKED on
		 * the response-headers. Then call [method#MessageBody.append] (or
		 * [method#MessageBody.append_bytes])) to append each chunk as it becomes ready,
		 * and [method#ServerMessage.unpause] to make sure it's running. (The server
		 * will automatically pause the message if it is using chunked encoding but no
		 * more chunks are available.) When you are done, call
		 * [method#MessageBody.complete] to indicate that no more chunks are coming.
		 * @param path the toplevel path for the handler
		 * @param callback callback to invoke for
		 *   requests under #path
		 */
		add_handler(path: string | null, callback: ServerCallback): void;
		/**
		 * Add support for a WebSocket extension of the given #extension_type.
		 * 
		 * When a WebSocket client requests an extension of #extension_type,
		 * a new [class#WebsocketExtension] of type #extension_type will be created
		 * to handle the request.
		 * 
		 * Note that [class#WebsocketExtensionDeflate] is supported by default, use
		 * [method#Server.remove_websocket_extension] if you want to disable it.
		 * @param extension_type a #GType
		 */
		add_websocket_extension(extension_type: GObject.Type): void;
		/**
		 * Adds a WebSocket handler to #server for requests prefixed by #path.
		 * 
		 * If #path is %NULL or "/", then this will be the default handler for all
		 * requests that don't have a more specific handler.
		 * 
		 * When a path has a WebSocket handler registered, #server will check
		 * incoming requests for WebSocket handshakes after all other handlers
		 * have run (unless some earlier handler has already set a status code
		 * on the message), and update the request's status, response headers,
		 * and response body accordingly.
		 * 
		 * If #origin is non-%NULL, then only requests containing a matching
		 * "Origin" header will be accepted. If #protocols is non-%NULL, then
		 * only requests containing a compatible "Sec-WebSocket-Protocols"
		 * header will be accepted. More complicated requirements can be
		 * handled by adding a normal handler to #path, and having it perform
		 * whatever checks are needed and
		 * setting a failure status code if the handshake should be rejected.
		 * @param path the toplevel path for the handler
		 * @param origin the origin of the connection
		 * @param protocols the protocols
		 *   supported by this handler
		 * @param callback callback to invoke for
		 *   successful WebSocket requests under #path
		 */
		add_websocket_handler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void;
		/**
		 * Closes and frees #server's listening sockets.
		 * 
		 * Note that if there are currently requests in progress on #server, that they
		 * will continue to be processed if #server's [struct#GLib.MainContext] is still
		 * running.
		 * 
		 * You can call [method#Server.listen], etc, after calling this function
		 * if you want to start listening again.
		 */
		disconnect(): void;
		/**
		 * Gets #server's list of listening sockets.
		 * 
		 * You should treat these sockets as read-only; writing to or
		 * modifiying any of these sockets may cause #server to malfunction.
		 * @returns a
		 *   list of listening sockets.
		 */
		get_listeners(): Gio.Socket[];
		/**
		 * Gets the #server SSL/TLS client authentication mode.
		 * @returns a #GTlsAuthenticationMode
		 */
		get_tls_auth_mode(): Gio.TlsAuthenticationMode;
		/**
		 * Gets the #server SSL/TLS certificate.
		 * @returns a #GTlsCertificate or %NULL
		 */
		get_tls_certificate(): Gio.TlsCertificate | null;
		/**
		 * Gets the #server SSL/TLS database.
		 * @returns a #GTlsDatabase
		 */
		get_tls_database(): Gio.TlsDatabase | null;
		/**
		 * Gets a list of URIs corresponding to the interfaces #server is
		 * listening on.
		 * 
		 * These will contain IP addresses, not hostnames, and will also indicate
		 * whether the given listener is http or https.
		 * 
		 * Note that if you used [method#Server.listen_all] the returned URIs will use
		 * the addresses `0.0.0.0` and `::`, rather than actually returning separate
		 * URIs for each interface on the system.
		 * @returns a list of #GUris, which you
		 *   must free when you are done with it.
		 */
		get_uris(): GLib.Uri[];
		/**
		 * Checks whether #server is capable of https.
		 * 
		 * In order for a server to run https, you must call
		 * [method#Server.set_tls_certificate], or set the
		 * [property#Server:tls-certificate] property, to provide it with a
		 * certificate to use.
		 * 
		 * If you are using the deprecated single-listener APIs, then a return value of
		 * %TRUE indicates that the {@link Server} serves https exclusively. If you are
		 * using [method#Server.listen], etc, then a %TRUE return value merely indicates
		 * that the server is *able* to do https, regardless of whether it actually
		 * currently is or not. Use [method#Server.get_uris] to see if it currently has
		 * any https listeners.
		 * @returns %TRUE if #server is configured to serve https.
		 */
		is_https(): boolean;
		/**
		 * Attempts to set up #server to listen for connections on #address.
		 * 
		 * If #options includes %SOUP_SERVER_LISTEN_HTTPS, and #server has
		 * been configured for TLS, then #server will listen for https
		 * connections on this port. Otherwise it will listen for plain http.
		 * 
		 * You may call this method (along with the other "listen" methods)
		 * any number of times on a server, if you want to listen on multiple
		 * ports, or set up both http and https service.
		 * 
		 * After calling this method, #server will begin accepting and processing
		 * connections as soon as the appropriate [struct#GLib.MainContext] is run.
		 * 
		 * Note that this API does not make use of dual IPv4/IPv6 sockets; if
		 * #address is an IPv6 address, it will only accept IPv6 connections.
		 * You must configure IPv4 listening separately.
		 * @param address the address of the interface to listen on
		 * @param options listening options for this server
		 * @returns %TRUE on success, %FALSE if #address could not be
		 *   bound or any other error occurred (in which case #error will be
		 *   set).
		 */
		listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean;
		/**
		 * Attempts to set up #server to listen for connections on all interfaces
		 * on the system.
		 * 
		 * That is, it listens on the addresses `0.0.0.0` and/or `::`, depending on
		 * whether #options includes %SOUP_SERVER_LISTEN_IPV4_ONLY,
		 * %SOUP_SERVER_LISTEN_IPV6_ONLY, or neither.) If #port is specified, #server
		 * will listen on that port. If it is 0, #server will find an unused port to
		 * listen on. (In that case, you can use [method#Server.get_uris] to find out
		 * what port it ended up choosing.
		 * 
		 * See [method#Server.listen] for more details.
		 * @param port the port to listen on, or 0
		 * @param options listening options for this server
		 * @returns %TRUE on success, %FALSE if #port could not be bound
		 *   or any other error occurred (in which case #error will be set).
		 */
		listen_all(port: number, options: ServerListenOptions): boolean;
		/**
		 * Attempts to set up #server to listen for connections on "localhost".
		 * 
		 * That is, `127.0.0.1` and/or `::1`, depending on whether #options includes
		 * %SOUP_SERVER_LISTEN_IPV4_ONLY, %SOUP_SERVER_LISTEN_IPV6_ONLY, or neither). If
		 * #port is specified, #server will listen on that port. If it is 0, #server
		 * will find an unused port to listen on. (In that case, you can use
		 * [method#Server.get_uris] to find out what port it ended up choosing.
		 * 
		 * See [method#Server.listen] for more details.
		 * @param port the port to listen on, or 0
		 * @param options listening options for this server
		 * @returns %TRUE on success, %FALSE if #port could not be bound
		 *   or any other error occurred (in which case #error will be set).
		 */
		listen_local(port: number, options: ServerListenOptions): boolean;
		/**
		 * Attempts to set up #server to listen for connections on #socket.
		 * 
		 * See [method#Server.listen] for more details.
		 * @param socket a listening #GSocket
		 * @param options listening options for this server
		 * @returns %TRUE on success, %FALSE if an error occurred (in
		 *   which case #error will be set).
		 */
		listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean;
		/**
		 * @deprecated
		 * Use {@link Soup.ServerMessage.pause} instead.
		 * 
		 * Pauses I/O on #msg.
		 * 
		 * This can be used when you need to return from the server handler without
		 * having the full response ready yet. Use [method#Server.unpause_message] to
		 * resume I/O.
		 * 
		 * This must only be called on a [class#ServerMessage] which was created by the
		 * {@link Server} and are currently doing I/O, such as those passed into a
		 * [callback#ServerCallback] or emitted in a [signal#Server::request-read]
		 * signal.
		 * @param msg a {@link ServerMessage} associated with #server.
		 */
		pause_message(msg: ServerMessage): void;
		/**
		 * Removes #auth_domain from #server.
		 * @param auth_domain a {@link AuthDomain}
		 */
		remove_auth_domain(auth_domain: AuthDomain): void;
		/**
		 * Removes all handlers (early and normal) registered at #path.
		 * @param path the toplevel path for the handler
		 */
		remove_handler(path: string): void;
		/**
		 * Removes support for WebSocket extension of type #extension_type (or any subclass of
		 * #extension_type) from #server.
		 * @param extension_type a #GType
		 */
		remove_websocket_extension(extension_type: GObject.Type): void;
		/**
		 * Sets #server's #GTlsAuthenticationMode to use for SSL/TLS client authentication.
		 * @param mode a #GTlsAuthenticationMode
		 */
		set_tls_auth_mode(mode: Gio.TlsAuthenticationMode): void;
		/**
		 * Sets #server up to do https, using the given SSL/TLS #certificate.
		 * @param certificate a #GTlsCertificate
		 */
		set_tls_certificate(certificate: Gio.TlsCertificate): void;
		/**
		 * Sets #server's #GTlsDatabase to use for validating SSL/TLS client certificates.
		 * @param tls_database a #GTlsDatabase
		 */
		set_tls_database(tls_database: Gio.TlsDatabase): void;
		/**
		 * @deprecated
		 * Use {@link Soup.ServerMessage.unpause} instead.
		 * 
		 * Resumes I/O on #msg.
		 * 
		 * Use this to resume after calling [method#Server.pause_message], or after
		 * adding a new chunk to a chunked response.
		 * 
		 * I/O won't actually resume until you return to the main loop.
		 * 
		 * This must only be called on a [class#ServerMessage] which was created by the
		 * {@link Server} and are currently doing I/O, such as those passed into a
		 * [callback#ServerCallback] or emitted in a [signal#Server::request-read]
		 * signal.
		 * @param msg a {@link ServerMessage} associated with #server.
		 */
		unpause_message(msg: ServerMessage): void;
		/**
		 * Emitted when processing has failed for a message.
		 * 
		 * This could mean either that it could not be read (if
		 * [signal#Server::request-read] has not been emitted for it yet), or that
		 * the response could not be written back (if [signal#Server::request-read]
		 * has been emitted but [signal#Server::request-finished] has not been).
		 * 
		 * #message is in an undefined state when this signal is
		 * emitted; the signal exists primarily to allow the server to
		 * free any state that it may have allocated in
		 * [signal#Server::request-started].
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - message: the message 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-aborted", callback: (owner: this, message: ServerMessage) => void): number;
		/**
		 * Emitted when the server has finished writing a response to
		 * a request.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - message: the message 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-finished", callback: (owner: this, message: ServerMessage) => void): number;
		/**
		 * Emitted when the server has successfully read a request.
		 * 
		 * #message will have all of its request-side information
		 * filled in, and if the message was authenticated, #client
		 * will have information about that. This signal is emitted
		 * before any (non-early) handlers are called for the message,
		 * and if it sets the message's #status_code, then normal
		 * handler processing will be skipped.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - message: the message 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-read", callback: (owner: this, message: ServerMessage) => void): number;
		/**
		 * Emitted when the server has started reading a new request.
		 * 
		 * #message will be completely blank; not even the
		 * Request-Line will have been read yet. About the only thing
		 * you can usefully do with it is connect to its signals.
		 * 
		 * If the request is read successfully, this will eventually
		 * be followed by a [signal#Server::request_read signal]. If a
		 * response is then sent, the request processing will end with
		 * a [signal#Server::request-finished] signal. If a network error
		 * occurs, the processing will instead end with
		 * [signal#Server::request-aborted].
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - message: the new message 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-started", callback: (owner: this, message: ServerMessage) => void): number;

		connect(signal: "notify::raw-paths", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::server-header", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-auth-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-certificate", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-database", callback: (owner: this, ...args: any) => void): number;

	}

	type ServerInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IServer,
		"raw_paths" |
		"server_header" |
		"tls_auth_mode" |
		"tls_certificate" |
		"tls_database">;

	export interface ServerInitOptions extends ServerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Server} instead.
	 */
	type ServerMixin = IServer & GObject.Object;

	/**
	 * A HTTP server.
	 * 
	 * {@link Server} implements a simple HTTP server.
	 * 
	 * To begin, create a server using [ctor#Server.new]. Add at least one
	 * handler by calling [method#Server.add_handler] or
	 * [method#Server.add_early_handler]; the handler will be called to
	 * process any requests underneath the path you pass. (If you want all
	 * requests to go to the same handler, just pass "/" (or %NULL) for
	 * the path.)
	 * 
	 * When a new connection is accepted (or a new request is started on
	 * an existing persistent connection), the #SoupServer will emit
	 * [signal#Server::request-started] and then begin processing the request
	 * as described below, but note that once the message is assigned a
	 * status-code, then callbacks after that point will be
	 * skipped. Note also that it is not defined when the callbacks happen
	 * relative to various [class#ServerMessage] signals.
	 * 
	 * Once the headers have been read, #SoupServer will check if there is
	 * a [class#AuthDomain] `(qv)` covering the Request-URI; if so, and if the
	 * message does not contain suitable authorization, then the
	 * [class#AuthDomain] will set a status of %SOUP_STATUS_UNAUTHORIZED on
	 * the message.
	 * 
	 * After checking for authorization, #SoupServer will look for "early"
	 * handlers (added with [method#Server.add_early_handler]) matching the
	 * Request-URI. If one is found, it will be run; in particular, this
	 * can be used to connect to signals to do a streaming read of the
	 * request body.
	 * 
	 * (At this point, if the request headers contain `Expect:
	 * 100-continue`, and a status code has been set, then
	 * #SoupServer will skip the remaining steps and return the response.
	 * If the request headers contain `Expect:
	 * 100-continue` and no status code has been set,
	 * #SoupServer will return a %SOUP_STATUS_CONTINUE status before
	 * continuing.)
	 * 
	 * The server will then read in the response body (if present). At
	 * this point, if there are no handlers at all defined for the
	 * Request-URI, then the server will return %SOUP_STATUS_NOT_FOUND to
	 * the client.
	 * 
	 * Otherwise (assuming no previous step assigned a status to the
	 * message) any "normal" handlers (added with
	 * [method#Server.add_handler]) for the message's Request-URI will be
	 * run.
	 * 
	 * Then, if the path has a WebSocket handler registered (and has
	 * not yet been assigned a status), #SoupServer will attempt to
	 * validate the WebSocket handshake, filling in the response and
	 * setting a status of %SOUP_STATUS_SWITCHING_PROTOCOLS or
	 * %SOUP_STATUS_BAD_REQUEST accordingly.
	 * 
	 * If the message still has no status code at this point (and has not
	 * been paused with [method#ServerMessage.pause]), then it will be
	 * given a status of %SOUP_STATUS_INTERNAL_SERVER_ERROR (because at
	 * least one handler ran, but returned without assigning a status).
	 * 
	 * Finally, the server will emit [signal#Server::request-finished] (or
	 * [signal#Server::request-aborted] if an I/O error occurred before
	 * handling was completed).
	 * 
	 * If you want to handle the special "*" URI (eg, "OPTIONS *"), you
	 * must explicitly register a handler for "*"; the default handler
	 * will not be used for that case.
	 * 
	 * If you want to process https connections in addition to (or instead
	 * of) http connections, you can set the [property#Server:tls-certificate]
	 * property.
	 * 
	 * Once the server is set up, make one or more calls to
	 * [method#Server.listen], [method#Server.listen_local], or
	 * [method#Server.listen_all] to tell it where to listen for
	 * connections. (All ports on a #SoupServer use the same handlers; if
	 * you need to handle some ports differently, such as returning
	 * different data for http and https, you'll need to create multiple
	 * `SoupServer`s, or else check the passed-in URI in the handler
	 * function.).
	 * 
	 * #SoupServer will begin processing connections as soon as you return
	 * to (or start) the main loop for the current thread-default
	 * [struct#GLib.MainContext].
	 */
	interface Server extends ServerMixin {}

	class Server {
		public constructor(options?: Partial<ServerInitOptions>);
		/**
		 * Creates a new {@link Server}.
		 * 
		 * This is exactly equivalent to calling [ctor#GObject.Object.new] and
		 * specifying %SOUP_TYPE_SERVER as the type.
		 * @param optname1 name of first property to set
		 * @returns a new {@link Server}. If you are using
		 *   certain legacy properties, this may also return %NULL if an error
		 *   occurs.
		 */
		public static new(optname1: string): Server | null;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ServerMessage} instead.
	 */
	interface IServerMessage {
		/**
		 * The peer's #GTlsCertificate associated with the message
		 */
		readonly tls_peer_certificate: Gio.TlsCertificate;
		/**
		 * The verification errors on {@link ServerMessage.tls_peer_certificate}
		 */
		readonly tls_peer_certificate_errors: Gio.TlsCertificateFlags;
		/**
		 * Get the HTTP version of #msg.
		 * @returns a {@link HTTPVersion}.
		 */
		get_http_version(): HTTPVersion;
		/**
		 * Retrieves the [class#Gio.SocketAddress] associated with the local end
		 * of a connection.
		 * @returns the #GSocketAddress
		 *   associated with the local end of a connection, it may be
		 *   %NULL if you used [method#Server.accept_iostream].
		 */
		get_local_address(): Gio.SocketAddress | null;
		/**
		 * Get the HTTP method of #msg.
		 * @returns the HTTP method.
		 */
		get_method(): string;
		/**
		 * Get the HTTP reason phrase of #msg.
		 * @returns the reason phrase.
		 */
		get_reason_phrase(): string | null;
		/**
		 * Retrieves the [class#Gio.SocketAddress] associated with the remote end
		 * of a connection.
		 * @returns the #GSocketAddress
		 *   associated with the remote end of a connection, it may be
		 *   %NULL if you used [class#Server.accept_iostream].
		 */
		get_remote_address(): Gio.SocketAddress | null;
		/**
		 * Retrieves the IP address associated with the remote end of a
		 * connection.
		 * @returns the IP address associated with the remote
		 *   end of a connection, it may be %NULL if you used
		 *   [method#Server.accept_iostream].
		 */
		get_remote_host(): string | null;
		/**
		 * Get the request body of #msg.
		 * @returns a {@link MessageBody}.
		 */
		get_request_body(): MessageBody;
		/**
		 * Get the request headers of #msg.
		 * @returns a {@link MessageHeaders} with the request headers.
		 */
		get_request_headers(): MessageHeaders;
		/**
		 * Get the response body of #msg.
		 * @returns a {@link MessageBody}.
		 */
		get_response_body(): MessageBody;
		/**
		 * Get the response headers of #msg.
		 * @returns a {@link MessageHeaders} with the response headers.
		 */
		get_response_headers(): MessageHeaders;
		/**
		 * Retrieves the [class#Gio.Socket] that #msg is associated with.
		 * 
		 * If you are using this method to observe when multiple requests are
		 * made on the same persistent HTTP connection (eg, as the ntlm-test
		 * test program does), you will need to pay attention to socket
		 * destruction as well (eg, by using weak references), so that you do
		 * not get fooled when the allocator reuses the memory address of a
		 * previously-destroyed socket to represent a new socket.
		 * @returns the #GSocket that #msg is
		 *   associated with, %NULL if you used [method#Server.accept_iostream].
		 */
		get_socket(): Gio.Socket | null;
		/**
		 * Get the HTTP status code of #msg.
		 * @returns the HTTP status code.
		 */
		get_status(): number;
		/**
		 * Gets the peer's #GTlsCertificate associated with #msg's connection.
		 * Note that this is not set yet during the emission of
		 * SoupServerMessage::accept-certificate signal.
		 * @returns #msg's TLS peer certificate,
		 *    or %NULL if #msg's connection is not SSL.
		 */
		get_tls_peer_certificate(): Gio.TlsCertificate | null;
		/**
		 * Gets the errors associated with validating #msg's TLS peer certificate.
		 * Note that this is not set yet during the emission of
		 * SoupServerMessage::accept-certificate signal.
		 * @returns a #GTlsCertificateFlags with #msg's TLS peer certificate errors.
		 */
		get_tls_peer_certificate_errors(): Gio.TlsCertificateFlags;
		/**
		 * Get #msg's URI.
		 * @returns a #GUri
		 */
		get_uri(): GLib.Uri;
		/**
		 * Gets if #msg represents an OPTIONS message with the path `*`.
		 * @returns %TRUE if is an OPTIONS ping
		 */
		is_options_ping(): boolean;
		/**
		 * Pauses I/O on #msg.
		 * 
		 * This can be used when you need to return from the server handler without
		 * having the full response ready yet. Use [method#ServerMessage.unpause] to
		 * resume I/O.
		 */
		pause(): void;
		/**
		 * Set the HTTP version of #msg.
		 * @param version a {@link HTTPVersion}
		 */
		set_http_version(version: HTTPVersion): void;
		/**
		 * Sets #msg's status_code to #status_code and adds a Location header
		 * pointing to #redirect_uri. Use this from a [class#Server] when you
		 * want to redirect the client to another URI.
		 * 
		 * #redirect_uri can be a relative URI, in which case it is
		 * interpreted relative to #msg's current URI. In particular, if
		 * #redirect_uri is just a path, it will replace the path
		 * *and query* of #msg's URI.
		 * @param status_code a 3xx status code
		 * @param redirect_uri the URI to redirect #msg to
		 */
		set_redirect(status_code: number, redirect_uri: string): void;
		/**
		 * Convenience function to set the response body of a {@link ServerMessage}. If
		 * #content_type is %NULL, the response body must be empty as well.
		 * @param content_type MIME Content-Type of the body
		 * @param resp_use a {@link MemoryUse} describing how to handle #resp_body
		 * @param resp_body 
		 *   a data buffer containing the body of the message response.
		 */
		set_response(content_type: string | null, resp_use: MemoryUse, resp_body?: number[] | null): void;
		/**
		 * Sets #msg's status code to #status_code.
		 * 
		 * If #status_code is a known value and #reason_phrase is %NULL, the
		 * reason_phrase will be set automatically.
		 * @param status_code an HTTP status code
		 * @param reason_phrase a reason phrase
		 */
		set_status(status_code: number, reason_phrase?: string | null): void;
		/**
		 * "Steals" the HTTP connection associated with #msg from its {@link Server}. This
		 * happens immediately, regardless of the current state of the connection; if
		 * the response to #msg has not yet finished being sent, then it will be
		 * discarded; you can steal the connection from a
		 * [signal#ServerMessage::wrote-informational] or
		 * [signal#ServerMessage::wrote-body] signal handler if you need to wait for
		 * part or all of the response to be sent.
		 * 
		 * Note that when calling this function from C, #msg will most
		 * likely be freed as a side effect.
		 * @returns the #GIOStream formerly associated
		 *   with #msg (or %NULL if #msg was no longer associated with a
		 *   connection). No guarantees are made about what kind of #GIOStream
		 *   is returned.
		 */
		steal_connection(): Gio.IOStream;
		/**
		 * Resumes I/O on #msg.
		 * 
		 * Use this to resume after calling [method#ServerMessage.pause], or after
		 * adding a new chunk to a chunked response. I/O won't actually resume until you
		 * return to the main loop.
		 */
		unpause(): void;
		/**
		 * Emitted during the #msg's connection TLS handshake
		 * after client TLS certificate has been received.
		 * You can return %TRUE to accept #tls_certificate despite
		 * #tls_errors.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - tls_peer_certificate: the peer's #GTlsCertificate 
		 *  - tls_peer_errors: the tls errors of #tls_certificate 
		 *  - returns %TRUE to accept the TLS certificate and stop other
		 *   handlers from being invoked, or %FALSE to propagate the
		 *   event further. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "accept-certificate", callback: (owner: this, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean): number;
		/**
		 * Emitted when the #msg's socket is connected and the TLS handshake completed.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "connected", callback: (owner: this) => void): number;
		/**
		 * Emitted when the #msg's socket is disconnected.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "disconnected", callback: (owner: this) => void): number;
		/**
		 * Emitted when all HTTP processing is finished for a message.
		 * (After [signal#ServerMessage::wrote-body]).
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "finished", callback: (owner: this) => void): number;
		/**
		 * Emitted after receiving the complete request body.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "got-body", callback: (owner: this) => void): number;
		/**
		 * Emitted after receiving a chunk of a message body.
		 * 
		 * Note that "chunk" in this context means any subpiece of the body, not
		 * necessarily the specific HTTP 1.1 chunks sent by the other side.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - chunk: the just-read chunk 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "got-chunk", callback: (owner: this, chunk: GLib.Bytes) => void): number;
		/**
		 * Emitted after receiving the Request-Line and request headers.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "got-headers", callback: (owner: this) => void): number;
		/**
		 * Emitted immediately after writing the complete response body for a
		 * message.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-body", callback: (owner: this) => void): number;
		/**
		 * Emitted immediately after writing a portion of the message
		 * body to the network.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - chunk_size: the number of bytes written 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-body-data", callback: (owner: this, chunk_size: number) => void): number;
		/**
		 * Emitted immediately after writing a body chunk for a message.
		 * 
		 * Note that this signal is not parallel to
		 * [signal#ServerMessage::got-chunk]; it is emitted only when a complete
		 * chunk (added with [method#MessageBody.append] or
		 * [method#MessageBody.append_bytes] has been written. To get
		 * more useful continuous progress information, use
		 * [signal#ServerMessage::wrote-body-data].
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-chunk", callback: (owner: this) => void): number;
		/**
		 * Emitted immediately after writing the response headers for a
		 * message.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-headers", callback: (owner: this) => void): number;
		/**
		 * Emitted immediately after writing a 1xx (Informational) response.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "wrote-informational", callback: (owner: this) => void): number;

		connect(signal: "notify::tls-peer-certificate", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-peer-certificate-errors", callback: (owner: this, ...args: any) => void): number;

	}

	type ServerMessageInitOptionsMixin = GObject.ObjectInitOptions
	export interface ServerMessageInitOptions extends ServerMessageInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ServerMessage} instead.
	 */
	type ServerMessageMixin = IServerMessage & GObject.Object;

	/**
	 * An HTTP server request and response pair.
	 * 
	 * A SoupServerMessage represents an HTTP message that is being sent or
	 * received on a [class#Server].
	 * 
	 * [class#Server] will create `SoupServerMessage`s automatically for
	 * incoming requests, which your application will receive via handlers.
	 * 
	 * Note that libsoup's terminology here does not quite match the HTTP
	 * specification: in RFC 2616, an "HTTP-message" is *either* a Request, *or* a
	 * Response. In libsoup, a {@link ServerMessage} combines both the request and the
	 * response.
	 */
	interface ServerMessage extends ServerMessageMixin {}

	class ServerMessage {
		public constructor(options?: Partial<ServerMessageInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Session} instead.
	 */
	interface ISession {
		/**
		 * If non-%NULL, the value to use for the "Accept-Language" header
		 * on [class#Message]s sent from this session.
		 * 
		 * Setting this will disable [property#Session:accept-language-auto].
		 */
		accept_language: string;
		/**
		 * If %TRUE, {@link Session} will automatically set the string
		 * for the "Accept-Language" header on every [class#Message]
		 * sent, based on the return value of [func#GLib.get_language_names].
		 * 
		 * Setting this will override any previous value of
		 * [property#Session:accept-language].
		 */
		accept_language_auto: boolean;
		/**
		 * Connection lifetime (in seconds) when idle. Any connection
		 * left idle longer than this will be closed.
		 * 
		 * Although you can change this property at any time, it will
		 * only affect newly-created connections, not currently-open
		 * ones. You can call [method#Session.abort] after setting this
		 * if you want to ensure that all future connections will have
		 * this timeout value.
		 */
		idle_timeout: number;
		/**
		 * Sets the [class#Gio.InetSocketAddress] to use for the client side of
		 * the connection.
		 * 
		 * Use this property if you want for instance to bind the
		 * local socket to a specific IP address.
		 */
		local_address: Gio.InetSocketAddress;
		/**
		 * The maximum number of connections that the session can open at once.
		 */
		max_conns: number;
		/**
		 * The maximum number of connections that the session can open at once
		 * to a given host.
		 */
		max_conns_per_host: number;
		/**
		 * A [iface#Gio.ProxyResolver] to use with this session.
		 * 
		 * If no proxy resolver is set, then the default proxy resolver
		 * will be used. See [func#Gio.ProxyResolver.get_default].
		 * You can set it to %NULL if you don't want to use proxies, or
		 * set it to your own [iface#Gio.ProxyResolver] if you want to control
		 * what proxies get used.
		 */
		proxy_resolver: Gio.ProxyResolver;
		/**
		 * Sets a socket to make outgoing connections on. This will override the default
		 * behaviour of opening TCP/IP sockets to the hosts specified in the URIs.
		 * 
		 * This function is not required for common HTTP usage, but only when connecting
		 * to a HTTP service that is not using standard TCP/IP sockets. An example of
		 * this is a local service that uses HTTP over UNIX-domain sockets, in that case
		 * a [class#Gio.UnixSocketAddress] can be passed to this function.
		 */
		remote_connectable: Gio.SocketConnectable;
		/**
		 * The timeout (in seconds) for socket I/O operations
		 * (including connecting to a server, and waiting for a reply
		 * to an HTTP request).
		 * 
		 * Although you can change this property at any time, it will
		 * only affect newly-created connections, not currently-open
		 * ones. You can call [method#Session.abort] after setting this
		 * if you want to ensure that all future connections will have
		 * this timeout value.
		 * 
		 * Not to be confused with [property#Session:idle-timeout] (which is
		 * the length of time that idle persistent connections will be
		 * kept open).
		 */
		timeout: number;
		/**
		 * Sets the [class#Gio.TlsDatabase] to use for validating SSL/TLS
		 * certificates.
		 * 
		 * If no certificate database is set, then the default database will be
		 * used. See [method#Gio.TlsBackend.get_default_database].
		 */
		tls_database: Gio.TlsDatabase;
		/**
		 * A [class#Gio.TlsInteraction] object that will be passed on to any
		 * [class#Gio.TlsConnection]s created by the session.
		 * 
		 * This can be used to provide client-side certificates, for example.
		 */
		tls_interaction: Gio.TlsInteraction;
		/**
		 * User-Agent string.
		 * 
		 * If non-%NULL, the value to use for the "User-Agent" header
		 * on [class#Message]s sent from this session.
		 * 
		 * RFC 2616 says: "The User-Agent request-header field
		 * contains information about the user agent originating the
		 * request. This is for statistical purposes, the tracing of
		 * protocol violations, and automated recognition of user
		 * agents for the sake of tailoring responses to avoid
		 * particular user agent limitations. User agents SHOULD
		 * include this field with requests."
		 * 
		 * The User-Agent header contains a list of one or more
		 * product tokens, separated by whitespace, with the most
		 * significant product token coming first. The tokens must be
		 * brief, ASCII, and mostly alphanumeric (although "-", "_",
		 * and "." are also allowed), and may optionally include a "/"
		 * followed by a version string. You may also put comments,
		 * enclosed in parentheses, between or after the tokens.
		 * 
		 * If you set a [property#Session:user-agent] property that has trailing
		 * whitespace, {@link Session} will append its own product token
		 * (eg, `libsoup/2.3.2`) to the end of the
		 * header for you.
		 */
		user_agent: string;
		/**
		 * Cancels all pending requests in #session and closes all idle
		 * persistent connections.
		 */
		abort(): void;
		/**
		 * Adds #feature's functionality to #session. You cannot add multiple
		 * features of the same [alias#GLib.Type] to a session.
		 * 
		 * See the main {@link Session} documentation for information on what
		 * features are present in sessions by default.
		 * @param feature an object that implements {@link SessionFeature}
		 */
		add_feature(feature: SessionFeature): void;
		/**
		 * If #feature_type is the type of a class that implements
		 * [iface#SessionFeature], this creates a new feature of that type and
		 * adds it to #session as with [method#Session.add_feature]. You can use
		 * this when you don't need to customize the new feature in any way.
		 * Adding multiple features of the same #feature_type is not allowed.
		 * 
		 * If #feature_type is not a [iface#SessionFeature] type, this gives each
		 * existing feature on #session the chance to accept #feature_type as
		 * a "subfeature". This can be used to add new [class#Auth] types, for instance.
		 * 
		 * See the main {@link Session} documentation for information on what
		 * features are present in sessions by default.
		 * @param feature_type a #GType
		 */
		add_feature_by_type(feature_type: GObject.Type): void;
		/**
		 * Get the value used by #session for the "Accept-Language" header on new
		 * requests.
		 * @returns the accept language string
		 */
		get_accept_language(): string | null;
		/**
		 * Gets whether #session automatically sets the "Accept-Language" header on new
		 * requests.
		 * @returns %TRUE if #session sets "Accept-Language" header automatically, or
		 *   %FALSE otherwise.
		 */
		get_accept_language_auto(): boolean;
		/**
		 * Gets the [class#Message] of the #result asynchronous operation This is useful
		 * to get the [class#Message] of an asynchronous operation started by #session
		 * from its [callback#Gio.AsyncReadyCallback].
		 * @param result the #GAsyncResult passed to your callback
		 * @returns a {@link Message} or
		 *   %NULL if #result is not a valid #session async operation result.
		 */
		get_async_result_message(result: Gio.AsyncResult): Message | null;
		/**
		 * Gets the feature in #session of type #feature_type.
		 * @param feature_type the #GType of the feature to get
		 * @returns a {@link SessionFeature}, or %NULL. The
		 *   feature is owned by #session.
		 */
		get_feature(feature_type: GObject.Type): SessionFeature | null;
		/**
		 * Gets the feature in #session of type #feature_type, provided
		 * that it is not disabled for #msg.
		 * @param feature_type the #GType of the feature to get
		 * @param msg a {@link Message}
		 * @returns a {@link SessionFeature}. The feature is
		 *   owned by #session.
		 */
		get_feature_for_message(feature_type: GObject.Type, msg: Message): SessionFeature | null;
		/**
		 * Get the timeout in seconds for idle connection lifetime currently used by
		 * #session.
		 * @returns the timeout in seconds
		 */
		get_idle_timeout(): number;
		/**
		 * Get the [class#Gio.InetSocketAddress] to use for the client side of
		 * connections in #session.
		 * @returns a #GInetSocketAddress
		 */
		get_local_address(): Gio.InetSocketAddress | null;
		/**
		 * Get the maximum number of connections that #session can open at once.
		 * @returns the maximum number of connections
		 */
		get_max_conns(): number;
		/**
		 * Get the maximum number of connections that #session can open at once to a
		 * given host.
		 * @returns the maximum number of connections per host
		 */
		get_max_conns_per_host(): number;
		/**
		 * Get the [iface#Gio.ProxyResolver] currently used by #session.
		 * @returns a #GProxyResolver or %NULL if proxies
		 *   are disabled in #session
		 */
		get_proxy_resolver(): Gio.ProxyResolver | null;
		/**
		 * Gets the remote connectable if one set.
		 * @returns the #GSocketConnectable
		 */
		get_remote_connectable(): Gio.SocketConnectable | null;
		/**
		 * Get the timeout in seconds for socket I/O operations currently used by
		 * #session.
		 * @returns the timeout in seconds
		 */
		get_timeout(): number;
		/**
		 * Get the [class#Gio.TlsDatabase] currently used by #session.
		 * @returns a #GTlsDatabase
		 */
		get_tls_database(): Gio.TlsDatabase | null;
		/**
		 * Get the [class#Gio.TlsInteraction] currently used by #session.
		 * @returns a #GTlsInteraction
		 */
		get_tls_interaction(): Gio.TlsInteraction | null;
		/**
		 * Get the value used by #session for the "User-Agent" header on new requests.
		 * @returns the user agent string
		 */
		get_user_agent(): string | null;
		/**
		 * Tests if #session has at a feature of type #feature_type (which can
		 * be the type of either a [iface#SessionFeature], or else a subtype of
		 * some class managed by another feature, such as [class#Auth]).
		 * @param feature_type the #GType of the class of features to check for
		 * @returns %TRUE or %FALSE
		 */
		has_feature(feature_type: GObject.Type): boolean;
		/**
		 * Start a preconnection to #msg.
		 * 
		 * Once the connection is done, it will remain in idle state so that it can be
		 * reused by future requests. If there's already an idle connection for the
		 * given #msg host, the operation finishes successfully without creating a new
		 * connection. If a new request for the given #msg host is made while the
		 * preconnect is still ongoing, the request will take the ownership of the
		 * connection and the preconnect operation will finish successfully (if there's
		 * a connection error it will be handled by the request).
		 * 
		 * The operation finishes when the connection is done or an error occurred.
		 * @param msg a {@link Message}
		 * @param io_priority the I/O priority of the request
		 * @param cancellable a #GCancellable
		 * @param callback the callback to invoke when the operation finishes
		 */
		preconnect_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Complete a preconnect async operation started with [method#Session.preconnect_async].
		 * @param result the #GAsyncResult passed to your callback
		 * @returns %TRUE if the preconnect succeeded, or %FALSE in case of error.
		 */
		preconnect_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Removes #feature's functionality from #session.
		 * @param feature a feature that has previously been added to #session
		 */
		remove_feature(feature: SessionFeature): void;
		/**
		 * Removes all features of type #feature_type (or any subclass of
		 * #feature_type) from #session.
		 * @param feature_type a #GType
		 */
		remove_feature_by_type(feature_type: GObject.Type): void;
		/**
		 * Synchronously sends #msg and waits for the beginning of a response.
		 * 
		 * On success, a [class#Gio.InputStream] will be returned which you can use to
		 * read the response body. ("Success" here means only that an HTTP
		 * response was received and understood; it does not necessarily mean
		 * that a 2xx class status code was received.)
		 * 
		 * If non-%NULL, #cancellable can be used to cancel the request;
		 * [method#Session.send] will return a %G_IO_ERROR_CANCELLED error. Note that
		 * with requests that have side effects (eg, `POST`, `PUT`, `DELETE`) it is
		 * possible that you might cancel the request after the server acts on it, but
		 * before it returns a response, leaving the remote resource in an unknown
		 * state.
		 * 
		 * If #msg is requeued due to a redirect or authentication, the
		 * initial (`3xx/401/407`) response body will be suppressed, and
		 * [method#Session.send] will only return once a final response has been
		 * received.
		 * @param msg a {@link Message}
		 * @param cancellable a #GCancellable
		 * @returns a #GInputStream for reading the
		 *   response body, or %NULL on error.
		 */
		send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream;
		/**
		 * Synchronously sends #msg and reads the response body.
		 * 
		 * On success, a [struct#GLib.Bytes] will be returned with the response body.
		 * This function should only be used when the resource to be retrieved
		 * is not too long and can be stored in memory.
		 * 
		 * See [method#Session.send] for more details on the general semantics.
		 * @param msg a {@link Message}
		 * @param cancellable a #GCancellable
		 * @returns a #GBytes, or %NULL on error.
		 */
		send_and_read(msg: Message, cancellable?: Gio.Cancellable | null): GLib.Bytes;
		/**
		 * Asynchronously sends #msg and reads the response body.
		 * 
		 * When #callback is called, then either #msg has been sent, and its response
		 * body read, or else an error has occurred. This function should only be used
		 * when the resource to be retrieved is not too long and can be stored in
		 * memory. Call [method#Session.send_and_read_finish] to get a
		 * [struct#GLib.Bytes] with the response body.
		 * 
		 * See [method#Session.send] for more details on the general semantics.
		 * @param msg a {@link Message}
		 * @param io_priority the I/O priority of the request
		 * @param cancellable a #GCancellable
		 * @param callback the callback to invoke
		 */
		send_and_read_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Gets the response to a [method#Session.send_and_read_async].
		 * 
		 * If successful, returns a [struct#GLib.Bytes] with the response body.
		 * @param result the #GAsyncResult passed to your callback
		 * @returns a #GBytes, or %NULL on error.
		 */
		send_and_read_finish(result: Gio.AsyncResult): GLib.Bytes;
		/**
		 * Synchronously sends #msg and splices the response body stream into #out_stream.
		 * 
		 * See [method#Session.send] for more details on the general semantics.
		 * @param msg a {@link Message}
		 * @param out_stream a #GOutputStream
		 * @param flags a set of #GOutputStreamSpliceFlags
		 * @param cancellable a #GCancellable
		 * @returns a #gssize containing the size of the data spliced, or -1 if an error occurred.
		 */
		send_and_splice(msg: Message, out_stream: Gio.OutputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number;
		/**
		 * Asynchronously sends #msg and splices the response body stream into #out_stream.
		 * When #callback is called, then either #msg has been sent and its response body
		 * spliced, or else an error has occurred.
		 * 
		 * See [method#Session.send] for more details on the general semantics.
		 * @param msg a {@link Message}
		 * @param out_stream a #GOutputStream
		 * @param flags a set of #GOutputStreamSpliceFlags
		 * @param io_priority the I/O priority of the request
		 * @param cancellable a #GCancellable
		 * @param callback the callback to invoke
		 */
		send_and_splice_async(msg: Message, out_stream: Gio.OutputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Gets the response to a [method#Session.send_and_splice_async].
		 * @param result the #GAsyncResult passed to your callback
		 * @returns a #gssize containing the size of the data spliced, or -1 if an error occurred.
		 */
		send_and_splice_finish(result: Gio.AsyncResult): number;
		/**
		 * Asynchronously sends #msg and waits for the beginning of a response.
		 * 
		 * When #callback is called, then either #msg has been sent, and its response
		 * headers received, or else an error has occurred. Call
		 * [method#Session.send_finish] to get a [class#Gio.InputStream] for reading the
		 * response body.
		 * 
		 * See [method#Session.send] for more details on the general semantics.
		 * @param msg a {@link Message}
		 * @param io_priority the I/O priority of the request
		 * @param cancellable a #GCancellable
		 * @param callback the callback to invoke
		 */
		send_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Gets the response to a [method#Session.send_async] call.
		 * 
		 * If successful returns a [class#Gio.InputStream] that can be used to read the
		 * response body.
		 * @param result the #GAsyncResult passed to your callback
		 * @returns a #GInputStream for reading the
		 *   response body, or %NULL on error.
		 */
		send_finish(result: Gio.AsyncResult): Gio.InputStream;
		/**
		 * Set the value to use for the "Accept-Language" header on [class#Message]s
		 * sent from #session.
		 * 
		 * If #accept_language is %NULL then no "Accept-Language" will be included in
		 * requests. See [property#Session:accept-language] for more information.
		 * @param accept_language the languages string
		 */
		set_accept_language(accept_language: string): void;
		/**
		 * Set whether #session will automatically set the "Accept-Language" header on
		 * requests using a value generated from system languages based on
		 * [func#GLib.get_language_names].
		 * 
		 * See [property#Session:accept-language-auto] for more information.
		 * @param accept_language_auto the value to set
		 */
		set_accept_language_auto(accept_language_auto: boolean): void;
		/**
		 * Set a timeout in seconds for idle connection lifetime to be used by #session
		 * on new connections.
		 * 
		 * See [property#Session:idle-timeout] for more information.
		 * @param timeout a timeout in seconds
		 */
		set_idle_timeout(timeout: number): void;
		/**
		 * Set a [iface#Gio.ProxyResolver] to be used by #session on new connections.
		 * 
		 * If #proxy_resolver is %NULL then no proxies will be used. See
		 * [property#Session:proxy-resolver] for more information.
		 * @param proxy_resolver a #GProxyResolver or %NULL
		 */
		set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;
		/**
		 * Set a timeout in seconds for socket I/O operations to be used by #session
		 * on new connections.
		 * 
		 * See [property#Session:timeout] for more information.
		 * @param timeout a timeout in seconds
		 */
		set_timeout(timeout: number): void;
		/**
		 * Set a [class#GIo.TlsDatabase] to be used by #session on new connections.
		 * 
		 * If #tls_database is %NULL then certificate validation will always fail. See
		 * [property#Session:tls-database] for more information.
		 * @param tls_database a #GTlsDatabase
		 */
		set_tls_database(tls_database?: Gio.TlsDatabase | null): void;
		/**
		 * Set a [class#Gio.TlsInteraction] to be used by #session on new connections.
		 * 
		 * If #tls_interaction is %NULL then client certificate validation will always
		 * fail.
		 * 
		 * See [property#Session:tls-interaction] for more information.
		 * @param tls_interaction a #GTlsInteraction
		 */
		set_tls_interaction(tls_interaction?: Gio.TlsInteraction | null): void;
		/**
		 * Set the value to use for the "User-Agent" header on [class#Message]s sent
		 * from #session.
		 * 
		 * If #user_agent has trailing whitespace, #session will append its own product
		 * token (eg, `libsoup/3.0.0`) to the end of the header for you. If #user_agent
		 * is %NULL then no "User-Agent" will be included in requests. See
		 * [property#Session:user-agent] for more information.
		 * @param user_agent the user agent string
		 */
		set_user_agent(user_agent: string): void;
		/**
		 * Asynchronously creates a [class#WebsocketConnection] to communicate with a
		 * remote server.
		 * 
		 * All necessary WebSocket-related headers will be added to #msg, and
		 * it will then be sent and asynchronously processed normally
		 * (including handling of redirection and HTTP authentication).
		 * 
		 * If the server returns "101 Switching Protocols", then #msg's status
		 * code and response headers will be updated, and then the WebSocket
		 * handshake will be completed. On success,
		 * [method#Session.websocket_connect_finish] will return a new
		 * [class#WebsocketConnection]. On failure it will return a #GError.
		 * 
		 * If the server returns a status other than "101 Switching Protocols", then
		 * #msg will contain the complete response headers and body from the server's
		 * response, and [method#Session.websocket_connect_finish] will return
		 * %SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET.
		 * @param msg {@link Message} indicating the WebSocket server to connect to
		 * @param origin origin of the connection
		 * @param protocols a
		 *   %NULL-terminated array of protocols supported
		 * @param io_priority the I/O priority of the request
		 * @param cancellable a #GCancellable
		 * @param callback the callback to invoke
		 */
		websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Gets the [class#WebsocketConnection] response to a
		 * [method#Session.websocket_connect_async] call.
		 * 
		 * If successful, returns a [class#WebsocketConnection] that can be used to
		 * communicate with the server.
		 * @param result the #GAsyncResult passed to your callback
		 * @returns a new {@link WebsocketConnection}, or
		 *   %NULL on error.
		 */
		websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection;
		/**
		 * Emitted when a request is queued on #session.
		 * 
		 * When sending a request, first [signal#Session::request-queued]
		 * is emitted, indicating that the session has become aware of
		 * the request.
		 * 
		 * After a connection is available to send the request various
		 * [class#Message] signals are emitted as the message is
		 * processed. If the message is requeued, it will emit
		 * [signal#Message::restarted], which will then be followed by other
		 * [class#Message] signals when the message is re-sent.
		 * 
		 * Eventually, the message will emit [signal#Message::finished].
		 * Normally, this signals the completion of message
		 * processing. However, it is possible that the application
		 * will requeue the message from the "finished" handler.
		 * In that case the process will loop back.
		 * 
		 * Eventually, a message will reach "finished" and not be
		 * requeued. At that point, the session will emit
		 * [signal#Session::request-unqueued] to indicate that it is done
		 * with the message.
		 * 
		 * To sum up: [signal#Session::request-queued] and
		 * [signal#Session::request-unqueued] are guaranteed to be emitted
		 * exactly once, but [signal#Message::finished] (and all of the other
		 * [class#Message] signals) may be invoked multiple times for a given
		 * message.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - msg: the request that was queued 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-queued", callback: (owner: this, msg: Message) => void): number;
		/**
		 * Emitted when a request is removed from #session's queue,
		 * indicating that #session is done with it.
		 * 
		 * See [signal#Session::request-queued] for a detailed description of
		 * the message lifecycle within a session.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - msg: the request that was unqueued 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "request-unqueued", callback: (owner: this, msg: Message) => void): number;

		connect(signal: "notify::accept-language", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::accept-language-auto", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::idle-timeout", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::local-address", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-conns", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-conns-per-host", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::proxy-resolver", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::remote-connectable", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::timeout", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-database", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::tls-interaction", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::user-agent", callback: (owner: this, ...args: any) => void): number;

	}

	type SessionInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ISession,
		"accept_language" |
		"accept_language_auto" |
		"idle_timeout" |
		"local_address" |
		"max_conns" |
		"max_conns_per_host" |
		"proxy_resolver" |
		"remote_connectable" |
		"timeout" |
		"tls_database" |
		"tls_interaction" |
		"user_agent">;

	export interface SessionInitOptions extends SessionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Session} instead.
	 */
	type SessionMixin = ISession & GObject.Object;

	/**
	 * Soup session state object.
	 * 
	 * {@link Session} is the object that controls client-side HTTP. A
	 * #SoupSession encapsulates all of the state that libsoup is keeping
	 * on behalf of your program; cached HTTP connections, authentication
	 * information, etc. It also keeps track of various global options
	 * and features that you are using.
	 * 
	 * Most applications will only need a single #SoupSession; the primary
	 * reason you might need multiple sessions is if you need to have
	 * multiple independent authentication contexts. (Eg, you are
	 * connecting to a server and authenticating as two different users at
	 * different times; the easiest way to ensure that each [class#Message]
	 * is sent with the authentication information you intended is to use
	 * one session for the first user, and a second session for the other
	 * user.)
	 * 
	 * Additional #SoupSession functionality is provided by
	 * [iface#SessionFeature] objects, which can be added to a session with
	 * [method#Session.add_feature] or [method#Session.add_feature_by_type]
	 * For example, [class#Logger] provides support for
	 * logging HTTP traffic, [class#ContentDecoder] provides support for
	 * compressed response handling, and [class#ContentSniffer] provides
	 * support for HTML5-style response body content sniffing.
	 * Additionally, subtypes of [class#Auth] can be added
	 * as features, to add support for additional authentication types.
	 * 
	 * All `SoupSession`s are created with a [class#AuthManager], and support
	 * for %SOUP_TYPE_AUTH_BASIC and %SOUP_TYPE_AUTH_DIGEST. Additionally,
	 * sessions using the plain #SoupSession class (rather than one of its deprecated
	 * subtypes) have a [class#ContentDecoder] by default.
	 * 
	 * Note that all async methods will invoke their callbacks on the thread-default
	 * context at the time of the function call.
	 */
	interface Session extends SessionMixin {}

	class Session {
		public constructor(options?: Partial<SessionInitOptions>);
		/**
		 * Creates a {@link Session} with the default options.
		 * @returns the new session.
		 */
		public static new(): Session;
		/**
		 * Creates a {@link Session} with the specified options.
		 * @param optname1 name of first property to set
		 * @returns the new session.
		 */
		public static new_with_options(optname1: string): Session;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketConnection} instead.
	 */
	interface IWebsocketConnection {
		/**
		 * The type of connection (client/server).
		 */
		connection_type: WebsocketConnectionType;
		/**
		 * List of [class#WebsocketExtension] objects that are active in the connection.
		 */
		extensions: any;
		/**
		 * The underlying IO stream the WebSocket is communicating
		 * over.
		 * 
		 * The input and output streams must be pollable streams.
		 */
		io_stream: Gio.IOStream;
		/**
		 * Interval in seconds on when to send a ping message which will
		 * serve as a keepalive message.
		 * 
		 * If set to 0 the keepalive message is disabled.
		 */
		keepalive_interval: number;
		/**
		 * The maximum payload size for incoming packets.
		 * 
		 * The protocol expects or 0 to not limit it.
		 */
		max_incoming_payload_size: number;
		/**
		 * The client's Origin.
		 */
		origin: string;
		/**
		 * The chosen protocol, or %NULL if a protocol was not agreed
		 * upon.
		 */
		protocol: string;
		/**
		 * The current state of the WebSocket.
		 */
		readonly state: WebsocketState;
		/**
		 * The URI of the WebSocket.
		 * 
		 * For servers this represents the address of the WebSocket,
		 * and for clients it is the address connected to.
		 */
		uri: GLib.Uri;
		/**
		 * Close the connection in an orderly fashion.
		 * 
		 * Note that until the [signal#WebsocketConnection::closed] signal fires, the connection
		 * is not yet completely closed. The close message is not even sent until the
		 * main loop runs.
		 * 
		 * The #code and #data are sent to the peer along with the close request.
		 * If #code is %SOUP_WEBSOCKET_CLOSE_NO_STATUS a close message with no body
		 * (without code and data) is sent.
		 * Note that the #data must be UTF-8 valid.
		 * @param code close code
		 * @param data close data
		 */
		close(code: number, data?: string | null): void;
		/**
		 * Get the close code received from the WebSocket peer.
		 * 
		 * This only becomes valid once the WebSocket is in the
		 * %SOUP_WEBSOCKET_STATE_CLOSED state. The value will often be in the
		 * [enum#WebsocketCloseCode] enumeration, but may also be an application
		 * defined close code.
		 * @returns the close code or zero.
		 */
		get_close_code(): number;
		/**
		 * Get the close data received from the WebSocket peer.
		 * 
		 * This only becomes valid once the WebSocket is in the
		 * %SOUP_WEBSOCKET_STATE_CLOSED state. The data may be freed once
		 * the main loop is run, so copy it if you need to keep it around.
		 * @returns the close data or %NULL
		 */
		get_close_data(): string;
		/**
		 * Get the connection type (client/server) of the connection.
		 * @returns the connection type
		 */
		get_connection_type(): WebsocketConnectionType;
		/**
		 * Get the extensions chosen via negotiation with the peer.
		 * @returns a #GList of {@link WebsocketExtension} objects
		 */
		get_extensions(): WebsocketExtension[];
		/**
		 * Get the I/O stream the WebSocket is communicating over.
		 * @returns the WebSocket's I/O stream.
		 */
		get_io_stream(): Gio.IOStream;
		/**
		 * Gets the keepalive interval in seconds or 0 if disabled.
		 * @returns the keepalive interval.
		 */
		get_keepalive_interval(): number;
		/**
		 * Gets the maximum payload size allowed for incoming packets.
		 * @returns the maximum payload size.
		 */
		get_max_incoming_payload_size(): number;
		/**
		 * Get the origin of the WebSocket.
		 * @returns the origin
		 */
		get_origin(): string | null;
		/**
		 * Get the protocol chosen via negotiation with the peer.
		 * @returns the chosen protocol
		 */
		get_protocol(): string | null;
		/**
		 * Get the current state of the WebSocket.
		 * @returns the state
		 */
		get_state(): WebsocketState;
		/**
		 * Get the URI of the WebSocket.
		 * 
		 * For servers this represents the address of the WebSocket, and
		 * for clients it is the address connected to.
		 * @returns the URI
		 */
		get_uri(): GLib.Uri;
		/**
		 * Send a binary message to the peer.
		 * 
		 * If #length is 0, #data may be %NULL.
		 * 
		 * The message is queued to be sent and will be sent when the main loop
		 * is run.
		 * @param data the message contents
		 */
		send_binary(data?: number[] | null): void;
		/**
		 * Send a message of the given #type to the peer. Note that this method,
		 * allows to send text messages containing %NULL characters.
		 * 
		 * The message is queued to be sent and will be sent when the main loop
		 * is run.
		 * @param type the type of message contents
		 * @param message the message data as #GBytes
		 */
		send_message(type: WebsocketDataType, message: GLib.Bytes): void;
		/**
		 * Send a %NULL-terminated text (UTF-8) message to the peer.
		 * 
		 * If you need to send text messages containing %NULL characters use
		 * [method#WebsocketConnection.send_message] instead.
		 * 
		 * The message is queued to be sent and will be sent when the main loop
		 * is run.
		 * @param text the message contents
		 */
		send_text(text: string): void;
		/**
		 * Sets the interval in seconds on when to send a ping message which will serve
		 * as a keepalive message.
		 * 
		 * If set to 0 the keepalive message is disabled.
		 * @param interval the interval to send a ping message or 0 to disable it
		 */
		set_keepalive_interval(interval: number): void;
		/**
		 * Sets the maximum payload size allowed for incoming packets.
		 * 
		 * It does not limit the outgoing packet size.
		 * @param max_incoming_payload_size the maximum payload size
		 */
		set_max_incoming_payload_size(max_incoming_payload_size: number): void;
		/**
		 * Emitted when the connection has completely closed.
		 * 
		 * This happens either due to an orderly close from the peer, one
		 * initiated via [method#WebsocketConnection.close] or a fatal error
		 * condition that caused a close.
		 * 
		 * This signal will be emitted once.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "closed", callback: (owner: this) => void): number;
		/**
		 * This signal will be emitted during an orderly close.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "closing", callback: (owner: this) => void): number;
		/**
		 * Emitted when an error occurred on the WebSocket.
		 * 
		 * This may be fired multiple times. Fatal errors will be followed by
		 * the [signal#WebsocketConnection::closed] signal being emitted.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - error: the error that occured 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "error", callback: (owner: this, error: GLib.Error) => void): number;
		/**
		 * Emitted when we receive a message from the peer.
		 * 
		 * As a convenience, the #message data will always be
		 * %NULL-terminated, but the NUL byte will not be included in
		 * the length count.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - type: the type of message contents 
		 *  - message: the message data 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "message", callback: (owner: this, type: number, message: GLib.Bytes) => void): number;
		/**
		 * Emitted when we receive a Pong frame (solicited or
		 * unsolicited) from the peer.
		 * 
		 * As a convenience, the #message data will always be
		 * %NULL-terminated, but the NUL byte will not be included in
		 * the length count.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - message: the application data (if any) 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "pong", callback: (owner: this, message: GLib.Bytes) => void): number;

		connect(signal: "notify::connection-type", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::extensions", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::io-stream", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::keepalive-interval", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::max-incoming-payload-size", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::origin", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::protocol", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::state", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::uri", callback: (owner: this, ...args: any) => void): number;

	}

	type WebsocketConnectionInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IWebsocketConnection,
		"connection_type" |
		"extensions" |
		"io_stream" |
		"keepalive_interval" |
		"max_incoming_payload_size" |
		"origin" |
		"protocol" |
		"uri">;

	export interface WebsocketConnectionInitOptions extends WebsocketConnectionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketConnection} instead.
	 */
	type WebsocketConnectionMixin = IWebsocketConnection & GObject.Object;

	/**
	 * The WebSocket Protocol
	 * 
	 * Provides support for the [WebSocket](http://tools.ietf.org/html/rfc6455)
	 * protocol.
	 * 
	 * To connect to a WebSocket server, create a [class#Session] and call
	 * [method#Session.websocket_connect_async]. To accept WebSocket
	 * connections, create a [class#Server] and add a handler to it with
	 * [method#Server.add_websocket_handler].
	 * 
	 * (Lower-level support is available via
	 * [func#websocket_client_prepare_handshake] and
	 * [func#websocket_client_verify_handshake], for handling the client side of the
	 * WebSocket handshake, and [func#websocket_server_process_handshake] for
	 * handling the server side.)
	 * 
	 * {@link WebsocketConnection} handles the details of WebSocket communication. You
	 * can use [method#WebsocketConnection.send_text] and
	 * [method#WebsocketConnection.send_binary] to send data, and the
	 * [signal#WebsocketConnection::message] signal to receive data.
	 * (#SoupWebsocketConnection currently only supports asynchronous I/O.)
	 */
	interface WebsocketConnection extends WebsocketConnectionMixin {}

	class WebsocketConnection {
		public constructor(options?: Partial<WebsocketConnectionInitOptions>);
		/**
		 * Creates a {@link WebsocketConnection} on #stream with the given active #extensions.
		 * 
		 * This should be called after completing the handshake to begin using the WebSocket
		 * protocol.
		 * @param stream a #GIOStream connected to the WebSocket server
		 * @param uri the URI of the connection
		 * @param type the type of connection (client/side)
		 * @param origin the Origin of the client
		 * @param protocol the subprotocol in use
		 * @param extensions a #GList of {@link WebsocketExtension} objects
		 * @returns a new {@link WebsocketConnection}
		 */
		public static new(stream: Gio.IOStream, uri: GLib.Uri, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketExtension} instead.
	 */
	interface IWebsocketExtension {
		/**
		 * Configures #extension with the given #params.
		 * @param connection_type either %SOUP_WEBSOCKET_CONNECTION_CLIENT or %SOUP_WEBSOCKET_CONNECTION_SERVER
		 * @param params the parameters
		 * @returns %TRUE if extension could be configured with the given parameters, or %FALSE otherwise
		 */
		configure(connection_type: WebsocketConnectionType, params?: any[] | null): boolean;
		/**
		 * Get the parameters strings to be included in the request header.
		 * 
		 * If the extension doesn't include any parameter in the request, this function
		 * returns %NULL.
		 * @returns a new allocated string with the parameters
		 */
		get_request_params(): string | null;
		/**
		 * Get the parameters strings to be included in the response header.
		 * 
		 * If the extension doesn't include any parameter in the response, this function
		 * returns %NULL.
		 * @returns a new allocated string with the parameters
		 */
		get_response_params(): string | null;
		/**
		 * Process a message after it's received.
		 * 
		 * If the payload isn't changed the given #payload is just returned, otherwise
		 * [method#GLib.Bytes.unref] is called on the given #payload and a new
		 * [struct#GLib.Bytes] is returned with the new data.
		 * 
		 * Extensions using reserved bits of the header will reset them in #header.
		 * @param payload the payload data
		 * @returns the message payload data, or %NULL in case of error
		 */
		process_incoming_message(payload: GLib.Bytes): GLib.Bytes;
		/**
		 * Process a message before it's sent.
		 * 
		 * If the payload isn't changed the given #payload is just returned, otherwise
		 * [method#Glib.Bytes.unref] is called on the given #payload and a new
		 * [struct#GLib.Bytes] is returned with the new data.
		 * 
		 * Extensions using reserved bits of the header will change them in #header.
		 * @param payload the payload data
		 * @returns the message payload data, or %NULL in case of error
		 */
		process_outgoing_message(payload: GLib.Bytes): GLib.Bytes;
	}

	type WebsocketExtensionInitOptionsMixin = GObject.ObjectInitOptions
	export interface WebsocketExtensionInitOptions extends WebsocketExtensionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketExtension} instead.
	 */
	type WebsocketExtensionMixin = IWebsocketExtension & GObject.Object;

	/**
	 * A WebSocket extension
	 * 
	 * {@link WebsocketExtension} is the base class for WebSocket extension objects.
	 */
	interface WebsocketExtension extends WebsocketExtensionMixin {}

	class WebsocketExtension {
		public constructor(options?: Partial<WebsocketExtensionInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketExtensionDeflate} instead.
	 */
	interface IWebsocketExtensionDeflate {

	}

	type WebsocketExtensionDeflateInitOptionsMixin = WebsocketExtensionInitOptions
	export interface WebsocketExtensionDeflateInitOptions extends WebsocketExtensionDeflateInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketExtensionDeflate} instead.
	 */
	type WebsocketExtensionDeflateMixin = IWebsocketExtensionDeflate & WebsocketExtension;

	/**
	 * A SoupWebsocketExtensionDeflate is a [class#WebsocketExtension]
	 * implementing permessage-deflate (RFC 7692).
	 * 
	 * This extension is used by default in a [class#Session] when [class#WebsocketExtensionManager]
	 * feature is present, and always used by [class#Server].
	 */
	interface WebsocketExtensionDeflate extends WebsocketExtensionDeflateMixin {}

	class WebsocketExtensionDeflate {
		public constructor(options?: Partial<WebsocketExtensionDeflateInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketExtensionManager} instead.
	 */
	interface IWebsocketExtensionManager {

	}

	type WebsocketExtensionManagerInitOptionsMixin = GObject.ObjectInitOptions & SessionFeatureInitOptions
	export interface WebsocketExtensionManagerInitOptions extends WebsocketExtensionManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsocketExtensionManager} instead.
	 */
	type WebsocketExtensionManagerMixin = IWebsocketExtensionManager & GObject.Object & SessionFeature;

	/**
	 * SoupWebsocketExtensionManager is the [iface#SessionFeature] that handles WebSockets
	 * extensions for a [class#Session].
	 * 
	 * A {@link WebsocketExtensionManager} is added to the session by default, and normally
	 * you don't need to worry about it at all. However, if you want to
	 * disable WebSocket extensions, you can remove the feature from the
	 * session with [method#Session.remove_feature_by_type] or disable it on
	 * individual requests with [method#Message.disable_feature].
	 */
	interface WebsocketExtensionManager extends WebsocketExtensionManagerMixin {}

	class WebsocketExtensionManager {
		public constructor(options?: Partial<WebsocketExtensionManagerInitOptions>);
	}

	export interface CookieInitOptions {}
	/**
	 * Implements HTTP cookies, as described by
	 * [RFC 6265](http://tools.ietf.org/html/rfc6265.txt).
	 * 
	 * To have a [class#Session] handle cookies for your appliction
	 * automatically, use a [class#CookieJar].
	 * 
	 * #name and #value will be set for all cookies. If the cookie is
	 * generated from a string that appears to have no name, then #name
	 * will be the empty string.
	 * 
	 * #domain and #path give the host or domain, and path within that
	 * host/domain, to restrict this cookie to. If #domain starts with
	 * ".", that indicates a domain (which matches the string after the
	 * ".", or any hostname that has #domain as a suffix). Otherwise, it
	 * is a hostname and must match exactly.
	 * 
	 * #expires will be non-%NULL if the cookie uses either the original
	 * "expires" attribute, or the newer "max-age" attribute. If #expires
	 * is %NULL, it indicates that neither "expires" nor "max-age" was
	 * specified, and the cookie expires at the end of the session.
	 * 
	 * If #http_only is set, the cookie should not be exposed to untrusted
	 * code (eg, javascript), so as to minimize the danger posed by
	 * cross-site scripting attacks.
	 */
	interface Cookie {}
	class Cookie {
		public constructor(options?: Partial<CookieInitOptions>);
		/**
		 * Creates a new {@link Cookie} with the given attributes.
		 * 
		 * Use [method#Cookie.set_secure] and [method#Cookie.set_http_only] if you
		 * need to set those attributes on the returned cookie.
		 * 
		 * If #domain starts with ".", that indicates a domain (which matches
		 * the string after the ".", or any hostname that has #domain as a
		 * suffix). Otherwise, it is a hostname and must match exactly.
		 * 
		 * #max_age is used to set the "expires" attribute on the cookie; pass
		 * -1 to not include the attribute (indicating that the cookie expires
		 * with the current session), 0 for an already-expired cookie, or a
		 * lifetime in seconds. You can use the constants
		 * %SOUP_COOKIE_MAX_AGE_ONE_HOUR, %SOUP_COOKIE_MAX_AGE_ONE_DAY,
		 * %SOUP_COOKIE_MAX_AGE_ONE_WEEK and %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or
		 * multiples thereof) to calculate this value. (If you really care
		 * about setting the exact time that the cookie will expire, use
		 * [method#Cookie.set_expires].)
		 * 
		 * As of version 3.4.0 the default value of a cookie's same-site-policy
		 * is %SOUP_SAME_SITE_POLICY_LAX.
		 * @param name cookie name
		 * @param value cookie value
		 * @param domain cookie domain or hostname
		 * @param path cookie path, or %NULL
		 * @param max_age max age of the cookie, or -1 for a session cookie
		 * @returns a new {@link Cookie}.
		 */
		public static new(name: string, value: string, domain: string, path: string, max_age: number): Cookie;
		/**
		 * Parses #header and returns a {@link Cookie}.
		 * 
		 * If #header contains multiple cookies, only the first one will be parsed.
		 * 
		 * If #header does not have "path" or "domain" attributes, they will
		 * be defaulted from #origin. If #origin is %NULL, path will default
		 * to "/", but domain will be left as %NULL. Note that this is not a
		 * valid state for a #SoupCookie, and you will need to fill in some
		 * appropriate string for the domain if you want to actually make use
		 * of the cookie.
		 * 
		 * As of version 3.4.0 the default value of a cookie's same-site-policy
		 * is %SOUP_SAME_SITE_POLICY_LAX.
		 * @param header a cookie string (eg, the value of a Set-Cookie header)
		 * @param origin origin of the cookie
		 * @returns a new {@link Cookie}, or %NULL if it could
		 *   not be parsed, or contained an illegal "domain" attribute for a
		 *   cookie originating from #origin.
		 */
		public static parse(header: string, origin?: GLib.Uri | null): Cookie | null;
		/**
		 * Tests if #cookie should be sent to #uri.
		 * 
		 * (At the moment, this does not check that #cookie's domain matches
		 * #uri, because it assumes that the caller has already done that.
		 * But don't rely on that; it may change in the future.)
		 * @param uri a #GUri
		 * @returns %TRUE if #cookie should be sent to #uri, %FALSE if not
		 */
		public applies_to_uri(uri: GLib.Uri): boolean;
		/**
		 * Copies #cookie.
		 * @returns a copy of #cookie
		 */
		public copy(): Cookie;
		/**
		 * Checks if the #cookie's domain and #host match.
		 * 
		 * The domains match if #cookie should be sent when making a request to #host,
		 * or that #cookie should be accepted when receiving a response from #host.
		 * @param host a URI
		 * @returns %TRUE if the domains match, %FALSE otherwise
		 */
		public domain_matches(host: string): boolean;
		/**
		 * Tests if #cookie1 and #cookie2 are equal.
		 * 
		 * Note that currently, this does not check that the cookie domains
		 * match. This may change in the future.
		 * @param cookie2 a {@link Cookie}
		 * @returns whether the cookies are equal.
		 */
		public equal(cookie2: Cookie): boolean;
		/**
		 * Frees #cookie.
		 */
		public free(): void;
		/**
		 * Gets #cookie's domain.
		 * @returns #cookie's domain
		 */
		public get_domain(): string;
		/**
		 * Gets #cookie's expiration time.
		 * @returns #cookie's expiration time, which is
		 *   owned by #cookie and should not be modified or freed.
		 */
		public get_expires(): GLib.DateTime | null;
		/**
		 * Gets #cookie's HttpOnly attribute.
		 * @returns #cookie's HttpOnly attribute
		 */
		public get_http_only(): boolean;
		/**
		 * Gets #cookie's name.
		 * @returns #cookie's name
		 */
		public get_name(): string;
		/**
		 * Gets #cookie's path.
		 * @returns #cookie's path
		 */
		public get_path(): string;
		/**
		 * Returns the same-site policy for this cookie.
		 * @returns a {@link SameSitePolicy}
		 */
		public get_same_site_policy(): SameSitePolicy;
		/**
		 * Gets #cookie's secure attribute.
		 * @returns #cookie's secure attribute
		 */
		public get_secure(): boolean;
		/**
		 * Gets #cookie's value.
		 * @returns #cookie's value
		 */
		public get_value(): string;
		/**
		 * Sets #cookie's domain to #domain.
		 * @param domain the new domain
		 */
		public set_domain(domain: string): void;
		/**
		 * Sets #cookie's expiration time to #expires.
		 * 
		 * If #expires is %NULL, #cookie will be a session cookie and will expire at the
		 * end of the client's session.
		 * 
		 * (This sets the same property as [method#Cookie.set_max_age].)
		 * @param expires the new expiration time, or %NULL
		 */
		public set_expires(expires: GLib.DateTime): void;
		/**
		 * Sets #cookie's HttpOnly attribute to #http_only.
		 * 
		 * If %TRUE, #cookie will be marked as "http only", meaning it should not be
		 * exposed to web page scripts or other untrusted code.
		 * @param http_only the new value for the HttpOnly attribute
		 */
		public set_http_only(http_only: boolean): void;
		/**
		 * Sets #cookie's max age to #max_age.
		 * 
		 * If #max_age is -1, the cookie is a session cookie, and will expire at the end
		 * of the client's session. Otherwise, it is the number of seconds until the
		 * cookie expires. You can use the constants %SOUP_COOKIE_MAX_AGE_ONE_HOUR,
		 * %SOUP_COOKIE_MAX_AGE_ONE_DAY, %SOUP_COOKIE_MAX_AGE_ONE_WEEK and
		 * %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or multiples thereof) to calculate this value.
		 * (A value of 0 indicates that the cookie should be considered
		 * already-expired.)
		 * 
		 * This sets the same property as [method#Cookie.set_expires].
		 * @param max_age the new max age
		 */
		public set_max_age(max_age: number): void;
		/**
		 * Sets #cookie's name to #name.
		 * @param name the new name
		 */
		public set_name(name: string): void;
		/**
		 * Sets #cookie's path to #path.
		 * @param path the new path
		 */
		public set_path(path: string): void;
		/**
		 * When used in conjunction with
		 * [method#CookieJar.get_cookie_list_with_same_site_info] this sets the policy
		 * of when this cookie should be exposed.
		 * @param policy a {@link SameSitePolicy}
		 */
		public set_same_site_policy(policy: SameSitePolicy): void;
		/**
		 * Sets #cookie's secure attribute to #secure.
		 * 
		 * If %TRUE, #cookie will only be transmitted from the client to the server over
		 * secure (https) connections.
		 * @param secure the new value for the secure attribute
		 */
		public set_secure(secure: boolean): void;
		/**
		 * Sets #cookie's value to #value.
		 * @param value the new value
		 */
		public set_value(value: string): void;
		/**
		 * Serializes #cookie in the format used by the Cookie header (ie, for
		 * returning a cookie from a [class#Session] to a server).
		 * @returns the header
		 */
		public to_cookie_header(): string;
		/**
		 * Serializes #cookie in the format used by the Set-Cookie header.
		 * 
		 * i.e. for sending a cookie from a [class#Server] to a client.
		 * @returns the header
		 */
		public to_set_cookie_header(): string;
	}

	export interface HSTSPolicyInitOptions {}
	/**
	 * {@link HSTSPolicy} implements HTTP policies, as described by
	 * [RFC 6797](http://tools.ietf.org/html/rfc6797).
	 * 
	 * #domain represents the host that this policy applies to. The domain
	 * must be IDNA-canonicalized. [ctor#HSTSPolicy.new] and related methods
	 * will do this for you.
	 * 
	 * #max_age contains the 'max-age' value from the Strict Transport
	 * Security header and indicates the time to live of this policy,
	 * in seconds.
	 * 
	 * #expires will be non-%NULL if the policy has been set by the host and
	 * hence has an expiry time. If #expires is %NULL, it indicates that the
	 * policy is a permanent session policy set by the user agent.
	 * 
	 * If #include_subdomains is %TRUE, the Strict Transport Security policy
	 * must also be enforced on subdomains of #domain.
	 */
	interface HSTSPolicy {}
	class HSTSPolicy {
		public constructor(options?: Partial<HSTSPolicyInitOptions>);
		/**
		 * Creates a new {@link HSTSPolicy} with the given attributes.
		 * 
		 * #domain is a domain on which the strict transport security policy
		 * represented by this object must be enforced.
		 * 
		 * #max_age is used to set the "expires" attribute on the policy; pass
		 * %SOUP_HSTS_POLICY_MAX_AGE_PAST for an already-expired policy, or a
		 * lifetime in seconds.
		 * 
		 * If #include_subdomains is %TRUE, the strict transport security policy
		 * must also be enforced on all subdomains of #domain.
		 * @param domain policy domain or hostname
		 * @param max_age max age of the policy
		 * @param include_subdomains %TRUE if the policy applies on subdomains
		 * @returns a new {@link HSTSPolicy}.
		 */
		public static new(domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy;
		/**
		 * Parses #msg's first "Strict-Transport-Security" response header and
		 * returns a {@link HSTSPolicy}.
		 * @param msg a {@link Message}
		 * @returns a new {@link HSTSPolicy}, or %NULL if no valid
		 *   "Strict-Transport-Security" response header was found.
		 */
		public static new_from_response(msg: Message): HSTSPolicy | null;
		/**
		 * Full version of [ctor#HSTSPolicy.new], to use with an existing
		 * expiration date.
		 * 
		 * See [ctor#HSTSPolicy.new] for details.
		 * @param domain policy domain or hostname
		 * @param max_age max age of the policy
		 * @param expires the date of expiration of the policy or %NULL for a permanent policy
		 * @param include_subdomains %TRUE if the policy applies on subdomains
		 * @returns a new {@link HSTSPolicy}.
		 */
		public static new_full(domain: string, max_age: number, expires: GLib.DateTime, include_subdomains: boolean): HSTSPolicy;
		/**
		 * Creates a new session {@link HSTSPolicy} with the given attributes.
		 * 
		 * A session policy is a policy that is valid during the lifetime of
		 * the [class#HSTSEnforcer] it is added to. Contrary to regular policies,
		 * it has no expiration date and is not stored in persistent
		 * enforcers. These policies are useful for user-agent to load their
		 * own or user-defined rules.
		 * 
		 * #domain is a domain on which the strict transport security policy
		 * represented by this object must be enforced.
		 * 
		 * If #include_subdomains is %TRUE, the strict transport security policy
		 * must also be enforced on all subdomains of #domain.
		 * @param domain policy domain or hostname
		 * @param include_subdomains %TRUE if the policy applies on sub domains
		 * @returns a new {@link HSTSPolicy}.
		 */
		public static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy;
		/**
		 * Copies #policy.
		 * @returns a copy of #policy
		 */
		public copy(): HSTSPolicy;
		/**
		 * Tests if #policy1 and #policy2 are equal.
		 * @param policy2 a {@link HSTSPolicy}
		 * @returns whether the policies are equal.
		 */
		public equal(policy2: HSTSPolicy): boolean;
		/**
		 * Frees #policy.
		 */
		public free(): void;
		/**
		 * Gets #policy's domain.
		 * @returns #policy's domain.
		 */
		public get_domain(): string;
		/**
		 * Returns the expiration date for #policy.
		 * @returns A #GDateTime or %NULL if unset
		 */
		public get_expires(): GLib.DateTime;
		/**
		 * Returns the max age for #policy.
		 * @returns Max age in seconds
		 */
		public get_max_age(): number;
		/**
		 * Gets whether #policy include its subdomains.
		 * @returns %TRUE if #policy includes subdomains, %FALSE otherwise.
		 */
		public includes_subdomains(): boolean;
		/**
		 * Gets whether #policy is expired.
		 * 
		 * Permanent policies never expire.
		 * @returns %TRUE if #policy is expired, %FALSE otherwise.
		 */
		public is_expired(): boolean;
		/**
		 * Gets whether #policy is a non-permanent, non-expirable session policy.
		 * 
		 * See [ctor#HSTSPolicy.new_session_policy] for details.
		 * @returns %TRUE if #policy is permanent, %FALSE otherwise
		 */
		public is_session_policy(): boolean;
	}

	export interface MessageBodyInitOptions {}
	/**
	 * {@link MessageBody} represents the request or response body of a
	 * [class#Message].
	 * 
	 * Note that while #length always reflects the full length of the
	 * message body, #data is normally %NULL, and will only be filled in
	 * after [method#MessageBody.flatten] is called. For client-side
	 * messages, this automatically happens for the response body after it
	 * has been fully read. Likewise, for server-side
	 * messages, the request body is automatically filled in after being
	 * read.
	 * 
	 * As an added bonus, when #data is filled in, it is always terminated
	 * with a `\0` byte (which is not reflected in #length).
	 */
	interface MessageBody {}
	class MessageBody {
		public constructor(options?: Partial<MessageBodyInitOptions>);
		/**
		 * Creates a new {@link MessageBody}.
		 * 
		 * [class#Message] uses this internally; you
		 * will not normally need to call it yourself.
		 * @returns a new {@link MessageBody}.
		 */
		public static new(): MessageBody;
		/**
		 * the data
		 */
		public data: number[];
		/**
		 * length of #data
		 */
		public length: number;
		/**
		 * Appends #length bytes from #data to #body.
		 * 
		 * This function is exactly equivalent to [method#MessageBody.append]
		 * with %SOUP_MEMORY_TAKE as second argument; it exists mainly for
		 * convenience and simplifying language bindings.
		 * @param data data to append
		 */
		public append(data: number[]): void;
		/**
		 * Appends the data from #buffer to #body.
		 * @param buffer a #GBytes
		 */
		public append_bytes(buffer: GLib.Bytes): void;
		/**
		 * Tags #body as being complete.
		 * 
		 * Call this when using chunked encoding after you have appended the last chunk.
		 */
		public complete(): void;
		/**
		 * Fills in #body's data field with a buffer containing all of the
		 * data in #body.
		 * 
		 * Adds an additional `\0` byte not counted by #body's
		 * length field.
		 * @returns a #GBytes containing the same data as #body.
		 *   (You must [method#GLib.Bytes.unref] this if you do not want it.)
		 */
		public flatten(): GLib.Bytes;
		/**
		 * Gets the accumulate flag on #body.
		 * 
		 * See [method#MessageBody.set_accumulate. for details.
		 * @returns the accumulate flag for #body.
		 */
		public get_accumulate(): boolean;
		/**
		 * Gets a [struct#GLib.Bytes] containing data from #body starting at #offset.
		 * 
		 * The size of the returned chunk is unspecified. You can iterate
		 * through the entire body by first calling
		 * [method#MessageBody.get_chunk] with an offset of 0, and then on each
		 * successive call, increment the offset by the length of the
		 * previously-returned chunk.
		 * 
		 * If #offset is greater than or equal to the total length of #body,
		 * then the return value depends on whether or not
		 * [method#MessageBody.complete] has been called or not; if it has,
		 * then [method#MessageBody.get_chunk] will return a 0-length chunk
		 * (indicating the end of #body). If it has not, then
		 * [method#MessageBody.get_chunk] will return %NULL (indicating that
		 * #body may still potentially have more data, but that data is not
		 * currently available).
		 * @param offset an offset
		 * @returns a #GBytes
		 */
		public get_chunk(offset: number): GLib.Bytes | null;
		/**
		 * Handles the {@link MessageBody} part of receiving a chunk of data from
		 * the network.
		 * 
		 * Normally this means appending #chunk to #body, exactly as with
		 * [method#MessageBody.append_bytes], but if you have set #body's accumulate
		 * flag to %FALSE, then that will not happen.
		 * 
		 * This is a low-level method which you should not normally need to
		 * use.
		 * @param chunk a #GBytes received from the network
		 */
		public got_chunk(chunk: GLib.Bytes): void;
		/**
		 * Atomically increments the reference count of #body by one.
		 * @returns the passed in {@link MessageBody}
		 */
		public ref(): MessageBody;
		/**
		 * Sets or clears the accumulate flag on #body.
		 * 
		 * (The default value is %TRUE.) If set to %FALSE, #body's data field will not
		 * be filled in after the body is fully sent/received, and the chunks that make
		 * up #body may be discarded when they are no longer needed.
		 * 
		 * If you set the flag to %FALSE on the [class#Message] request_body of a
		 * client-side message, it will block the accumulation of chunks into
		 * #body's data field, but it will not normally cause the chunks to
		 * be discarded after being written like in the server-side
		 * [class#Message] response_body case, because the request body needs to
		 * be kept around in case the request needs to be sent a second time
		 * due to redirection or authentication.
		 * @param accumulate whether or not to accumulate body chunks in #body
		 */
		public set_accumulate(accumulate: boolean): void;
		/**
		 * Deletes all of the data in #body.
		 */
		public truncate(): void;
		/**
		 * Atomically decrements the reference count of #body by one.
		 * 
		 * When the reference count reaches zero, the resources allocated by
		 * #body are freed
		 */
		public unref(): void;
		/**
		 * Handles the {@link MessageBody} part of writing a chunk of data to the
		 * network.
		 * 
		 * Normally this is a no-op, but if you have set #body's accumulate flag to
		 * %FALSE, then this will cause #chunk to be discarded to free up memory.
		 * 
		 * This is a low-level method which you should not need to use, and
		 * there are further restrictions on its proper use which are not
		 * documented here.
		 * @param chunk a #GBytes returned from [method#MessageBody.get_chunk]
		 */
		public wrote_chunk(chunk: GLib.Bytes): void;
	}

	export interface MessageHeadersInitOptions {}
	/**
	 * The HTTP message headers associated with a request or response.
	 */
	interface MessageHeaders {}
	class MessageHeaders {
		public constructor(options?: Partial<MessageHeadersInitOptions>);
		/**
		 * Creates a {@link MessageHeaders}.
		 * 
		 * ([class#Message] does this automatically for its own headers. You would only
		 * need to use this method if you are manually parsing or generating message
		 * headers.)
		 * @param type the type of headers
		 * @returns a new {@link MessageHeaders}
		 */
		public static new(type: MessageHeadersType): MessageHeaders;
		/**
		 * Appends a new header with name #name and value #value to #hdrs.
		 * 
		 * (If there is an existing header with name #name, then this creates a second
		 * one, which is only allowed for list-valued headers; see also
		 * [method#MessageHeaders.replace].)
		 * 
		 * The caller is expected to make sure that #name and #value are
		 * syntactically correct.
		 * @param name the header name to add
		 * @param value the new value of #name
		 */
		public append(name: string, value: string): void;
		/**
		 * Removes all the headers listed in the Connection header.
		 */
		public clean_connection_headers(): void;
		/**
		 * Clears #hdrs.
		 */
		public clear(): void;
		/**
		 * Calls #func once for each header value in #hdrs.
		 * 
		 * Beware that unlike [method#MessageHeaders.get_list], this processes the
		 * headers in exactly the way they were added, rather than
		 * concatenating multiple same-named headers into a single value.
		 * (This is intentional; it ensures that if you call
		 * [method#MessageHeaders.append] multiple times with the same name,
		 * then the I/O code will output multiple copies of the header when
		 * sending the message to the remote implementation, which may be
		 * required for interoperability in some cases.)
		 * 
		 * You may not modify the headers from #func.
		 * @param func callback function to run for each header
		 */
		public foreach(func: MessageHeadersForeachFunc): void;
		/**
		 * Frees the array of ranges returned from [method#MessageHeaders.get_ranges].
		 * @param ranges an array of {@link Range}
		 */
		public free_ranges(ranges: Range): void;
		/**
		 * Looks up the "Content-Disposition" header in #hdrs, parses it, and
		 * returns its value in *#disposition and *#params.
		 * 
		 * #params can be %NULL if you are only interested in the disposition-type.
		 * 
		 * In HTTP, the most common use of this header is to set a
		 * disposition-type of "attachment", to suggest to the browser that a
		 * response should be saved to disk rather than displayed in the
		 * browser. If #params contains a "filename" parameter, this is a
		 * suggestion of a filename to use. (If the parameter value in the
		 * header contains an absolute or relative path, libsoup will truncate
		 * it down to just the final path component, so you do not need to
		 * test this yourself.)
		 * 
		 * Content-Disposition is also used in "multipart/form-data", however
		 * this is handled automatically by [struct#Multipart] and the associated
		 * form methods.
		 * @returns %TRUE if #hdrs contains a "Content-Disposition"
		 *   header, %FALSE if not (in which case *#disposition and *#params
		 *   will be unchanged).
		 * 
		 * return location for the
		 *   disposition-type, or %NULL
		 * 
		 * return
		 *   location for the Content-Disposition parameters, or %NULL
		 */
		public get_content_disposition(): [ boolean, string, string[] ];
		/**
		 * Gets the message body length that #hdrs declare.
		 * 
		 * This will only be non-0 if [method#MessageHeaders.get_encoding] returns
		 * %SOUP_ENCODING_CONTENT_LENGTH.
		 * @returns the message body length declared by #hdrs.
		 */
		public get_content_length(): number;
		/**
		 * Parses #hdrs's Content-Range header and returns it in #start,
		 * #end, and #total_length. If the total length field in the header
		 * was specified as "*", then #total_length will be set to -1.
		 * @returns %TRUE if #hdrs contained a "Content-Range" header
		 *   containing a byte range which could be parsed, %FALSE otherwise.
		 * 
		 * return value for the start of the range
		 * 
		 * return value for the end of the range
		 * 
		 * return value for the total length of the
		 *   resource, or %NULL if you don't care.
		 */
		public get_content_range(): [ boolean, number, number, number | null ];
		/**
		 * Looks up the "Content-Type" header in #hdrs, parses it, and returns
		 * its value in *#content_type and *#params.
		 * 
		 * #params can be %NULL if you are only interested in the content type itself.
		 * @returns a string with the value of the
		 *   "Content-Type" header or %NULL if #hdrs does not contain that
		 *   header or it cannot be parsed (in which case *#params will be
		 *   unchanged).
		 * 
		 * 
		 *   return location for the Content-Type parameters (eg, "charset"), or
		 *   %NULL
		 */
		public get_content_type(): [ string | null, string[] | null ];
		/**
		 * Gets the message body encoding that #hdrs declare.
		 * 
		 * This may not always correspond to the encoding used on the wire; eg, a HEAD
		 * response may declare a Content-Length or Transfer-Encoding, but it will never
		 * actually include a body.
		 * @returns the encoding declared by #hdrs.
		 */
		public get_encoding(): Encoding;
		/**
		 * Gets the expectations declared by #hdrs's "Expect" header.
		 * 
		 * Currently this will either be %SOUP_EXPECTATION_CONTINUE or
		 * %SOUP_EXPECTATION_UNRECOGNIZED.
		 * @returns the contents of #hdrs's "Expect" header
		 */
		public get_expectations(): Expectation;
		/**
		 * Gets the type of headers.
		 * @returns the header's type.
		 */
		public get_headers_type(): MessageHeadersType;
		/**
		 * Gets the value of header #name in #hdrs.
		 * 
		 * Use this for headers whose values are comma-delimited lists, and which are
		 * therefore allowed to appear multiple times in the headers. For
		 * non-list-valued headers, use [method#MessageHeaders.get_one].
		 * 
		 * If #name appears multiple times in #hdrs,
		 * [method#MessageHeaders.get_list] will concatenate all of the values
		 * together, separated by commas. This is sometimes awkward to parse
		 * (eg, WWW-Authenticate, Set-Cookie), but you have to be able to deal
		 * with it anyway, because the HTTP spec explicitly states that this
		 * transformation is allowed, and so an upstream proxy could do the
		 * same thing.
		 * @param name header name
		 * @returns the header's value or %NULL if not found.
		 */
		public get_list(name: string): string | null;
		/**
		 * Gets the value of header #name in #hdrs.
		 * 
		 * Use this for headers whose values are *not* comma-delimited lists, and which
		 * therefore can only appear at most once in the headers. For list-valued
		 * headers, use [method#MessageHeaders.get_list].
		 * 
		 * If #hdrs does erroneously contain multiple copies of the header, it
		 * is not defined which one will be returned. (Ideally, it will return
		 * whichever one makes libsoup most compatible with other HTTP
		 * implementations.)
		 * @param name header name
		 * @returns the header's value or %NULL if not found.
		 */
		public get_one(name: string): string | null;
		/**
		 * Parses #hdrs's Range header and returns an array of the requested
		 * byte ranges.
		 * 
		 * The returned array must be freed with [method#MessageHeaders.free_ranges].
		 * 
		 * If #total_length is non-0, its value will be used to adjust the
		 * returned ranges to have explicit start and end values, and the
		 * returned ranges will be sorted and non-overlapping. If
		 * #total_length is 0, then some ranges may have an end value of -1,
		 * as described under [struct#Range], and some of the ranges may be
		 * redundant.
		 * 
		 * Beware that even if given a #total_length, this function does not
		 * check that the ranges are satisfiable.
		 * 
		 * {@link Server} has built-in handling for range requests. If your
		 * server handler returns a %SOUP_STATUS_OK response containing the
		 * complete response body (rather than pausing the message and
		 * returning some of the response body later), and there is a Range
		 * header in the request, then libsoup will automatically convert the
		 * response to a %SOUP_STATUS_PARTIAL_CONTENT response containing only
		 * the range(s) requested by the client.
		 * 
		 * The only time you need to process the Range header yourself is if
		 * either you need to stream the response body rather than returning
		 * it all at once, or you do not already have the complete response
		 * body available, and only want to generate the parts that were
		 * actually requested by the client.
		 * @param total_length the total_length of the response body
		 * @returns %TRUE if #hdrs contained a syntactically-valid
		 *   "Range" header, %FALSE otherwise (in which case #range and #length
		 *   will not be set).
		 * 
		 * return location for an array
		 *   of {@link Range}
		 */
		public get_ranges(total_length: number): [ boolean, Range[] ];
		/**
		 * Checks whether the list-valued header #name is present in #hdrs,
		 * and contains a case-insensitive match for #token.
		 * 
		 * (If #name is present in #hdrs, then this is equivalent to calling
		 * [func#header_contains] on its value.)
		 * @param name header name
		 * @param token token to look for
		 * @returns %TRUE if the header is present and contains #token,
		 *   %FALSE otherwise.
		 */
		public header_contains(name: string, token: string): boolean;
		/**
		 * Checks whether the header #name is present in #hdrs and is
		 * (case-insensitively) equal to #value.
		 * @param name header name
		 * @param value expected value
		 * @returns %TRUE if the header is present and its value is
		 *   #value, %FALSE otherwise.
		 */
		public header_equals(name: string, value: string): boolean;
		/**
		 * Atomically increments the reference count of #hdrs by one.
		 * @returns the passed in {@link MessageHeaders}
		 */
		public ref(): MessageHeaders;
		/**
		 * Removes #name from #hdrs.
		 * 
		 * If there are multiple values for #name, they are all removed.
		 * @param name the header name to remove
		 */
		public remove(name: string): void;
		/**
		 * Replaces the value of the header #name in #hdrs with #value.
		 * 
		 * See also [method#MessageHeaders.append].
		 * 
		 * The caller is expected to make sure that #name and #value are
		 * syntactically correct.
		 * @param name the header name to replace
		 * @param value the new value of #name
		 */
		public replace(name: string, value: string): void;
		/**
		 * Sets the "Content-Disposition" header in #hdrs to #disposition,
		 * optionally with additional parameters specified in #params.
		 * 
		 * See [method#MessageHeaders.get_content_disposition] for a discussion
		 * of how Content-Disposition is used in HTTP.
		 * @param disposition the disposition-type
		 * @param params additional parameters
		 */
		public set_content_disposition(disposition: string, params?: string[] | null): void;
		/**
		 * Sets the message body length that #hdrs will declare, and sets
		 * #hdrs's encoding to %SOUP_ENCODING_CONTENT_LENGTH.
		 * 
		 * You do not normally need to call this; if #hdrs is set to use
		 * Content-Length encoding, libsoup will automatically set its
		 * Content-Length header for you immediately before sending the
		 * headers. One situation in which this method is useful is when
		 * generating the response to a HEAD request; Calling
		 * [method#MessageHeaders.set_content_length] allows you to put the
		 * correct content length into the response without needing to waste
		 * memory by filling in a response body which won't actually be sent.
		 * @param content_length the message body length
		 */
		public set_content_length(content_length: number): void;
		/**
		 * Sets #hdrs's Content-Range header according to the given values.
		 * 
		 * (Note that #total_length is the total length of the entire resource
		 * that this is a range of, not simply #end - #start + 1.)
		 * 
		 * [class#Server] has built-in handling for range requests, and you do
		 * not normally need to call this function youself. See
		 * [method#MessageHeaders.get_ranges] for more details.
		 * @param start the start of the range
		 * @param end the end of the range
		 * @param total_length the total length of the resource, or -1 if unknown
		 */
		public set_content_range(start: number, end: number, total_length: number): void;
		/**
		 * Sets the "Content-Type" header in #hdrs to #content_type.
		 * 
		 * Accepts additional parameters specified in #params.
		 * @param content_type the MIME type
		 * @param params additional parameters
		 */
		public set_content_type(content_type: string, params?: string[] | null): void;
		/**
		 * Sets the message body encoding that #hdrs will declare.
		 * 
		 * In particular, you should use this if you are going to send a request or
		 * response in chunked encoding.
		 * @param encoding a {@link Encoding}
		 */
		public set_encoding(encoding: Encoding): void;
		/**
		 * Sets #hdrs's "Expect" header according to #expectations.
		 * 
		 * Currently %SOUP_EXPECTATION_CONTINUE is the only known expectation
		 * value. You should set this value on a request if you are sending a
		 * large message body (eg, via POST or PUT), and want to give the
		 * server a chance to reject the request after seeing just the headers
		 * (eg, because it will require authentication before allowing you to
		 * post, or because you're POSTing to a URL that doesn't exist). This
		 * saves you from having to transmit the large request body when the
		 * server is just going to ignore it anyway.
		 * @param expectations the expectations to set
		 */
		public set_expectations(expectations: Expectation): void;
		/**
		 * Sets #hdrs's Range header to request the indicated range.
		 * 
		 * #start and #end are interpreted as in a [struct#Range].
		 * 
		 * If you need to request multiple ranges, use
		 * [method#MessageHeaders.set_ranges].
		 * @param start the start of the range to request
		 * @param end the end of the range to request
		 */
		public set_range(start: number, end: number): void;
		/**
		 * Sets #hdrs's Range header to request the indicated ranges.
		 * 
		 * If you only want to request a single range, you can use
		 * [method#MessageHeaders.set_range].
		 * @param ranges an array of {@link Range}
		 * @param length the length of #range
		 */
		public set_ranges(ranges: Range, length: number): void;
		/**
		 * Atomically decrements the reference count of #hdrs by one.
		 * 
		 * When the reference count reaches zero, the resources allocated by
		 * #hdrs are freed
		 */
		public unref(): void;
	}

	export interface MessageHeadersIterInitOptions {}
	/**
	 * An opaque type used to iterate over a %SoupMessageHeaders
	 * structure.
	 * 
	 * After intializing the iterator with [func#MessageHeadersIter.init], call
	 * [method#MessageHeadersIter.next] to fetch data from it.
	 * 
	 * You may not modify the headers while iterating over them.
	 */
	interface MessageHeadersIter {}
	class MessageHeadersIter {
		public constructor(options?: Partial<MessageHeadersIterInitOptions>);
		/**
		 * Initializes #iter for iterating #hdrs.
		 * @param hdrs a %SoupMessageHeaders
		 * @returns a pointer to a %SoupMessageHeadersIter
		 *   structure
		 */
		public static init(hdrs: MessageHeaders): MessageHeadersIter;
		public readonly dummy: any[];
		/**
		 * Yields the next name/value pair in the [struct#MessageHeaders] being
		 * iterated by #iter.
		 * 
		 * If #iter has already yielded the last header, then
		 * [method#MessageHeadersIter.next] will return %FALSE and #name and #value
		 * will be unchanged.
		 * @returns %TRUE if another name and value were returned, %FALSE
		 *   if the end of the headers has been reached.
		 * 
		 * pointer to a variable to return
		 *   the header name in
		 * 
		 * pointer to a variable to return
		 *   the header value in
		 */
		public next(): [ boolean, string, string ];
	}

	export interface MessageMetricsInitOptions {}
	/**
	 * Contains metrics collected while loading a [class#Message] either from the
	 * network or the disk cache.
	 * 
	 * Metrics are not collected by default for a [class#Message], you need to add the
	 * flag %SOUP_MESSAGE_COLLECT_METRICS to enable the feature.
	 * 
	 * Temporal metrics are expressed as a monotonic time and always start with a
	 * fetch start event and finish with response end. All other events are optional.
	 * An event can be 0 because it hasn't happened yet, because it's optional or
	 * because the load failed before the event reached.
	 * 
	 * Size metrics are expressed in bytes and are updated while the [class#Message] is
	 * being loaded. You can connect to different [class#Message] signals to get the
	 * final result of every value.
	 */
	interface MessageMetrics {}
	class MessageMetrics {
		public constructor(options?: Partial<MessageMetricsInitOptions>);
		/**
		 * Copies #metrics.
		 * @returns a copy of #metrics
		 */
		public copy(): MessageMetrics;
		/**
		 * Frees #metrics.
		 */
		public free(): void;
		/**
		 * Get the time immediately after the [class#Message] completed the
		 * connection to the server. This includes the time for the proxy
		 * negotiation and TLS handshake.
		 * 
		 * It will be 0 if no network connection was required to fetch the resource (a
		 * persistent connection was used or resource was loaded from the local disk
		 * cache).
		 * @returns the connection end time
		 */
		public get_connect_end(): number;
		/**
		 * Get the time immediately before the [class#Message] started to
		 * establish the connection to the server.
		 * 
		 * It will be 0 if no network connection was required to fetch the resource (a
		 * persistent connection was used or resource was loaded from the local disk
		 * cache).
		 * @returns the connection start time
		 */
		public get_connect_start(): number;
		/**
		 * Get the time immediately after the [class#Message] completed the
		 * domain lookup name for the resource.
		 * 
		 * It will be 0 if no domain lookup was required to fetch the resource (a
		 * persistent connection was used or resource was loaded from the local disk
		 * cache).
		 * @returns the domain lookup end time
		 */
		public get_dns_end(): number;
		/**
		 * Get the time immediately before the [class#Message] started the
		 * domain lookup name for the resource.
		 * 
		 * It will be 0 if no domain lookup was required to fetch the resource (a
		 * persistent connection was used or resource was loaded from the local disk
		 * cache).
		 * @returns the domain lookup start time
		 */
		public get_dns_start(): number;
		/**
		 * Get the time immediately before the [class#Message] started to
		 * fetch a resource either from a remote server or local disk cache.
		 * @returns the fetch start time
		 */
		public get_fetch_start(): number;
		/**
		 * Get the number of bytes sent to the network for the request body.
		 * 
		 * This is the size of the body sent, after encodings are applied, so it might
		 * be greater than the value returned by
		 * [method#MessageMetrics.get_request_body_size]. This value is available right
		 * before [signal#Message::wrote-body] signal is emitted, but you might get an
		 * intermediate value if called before.
		 * @returns the request body bytes sent
		 */
		public get_request_body_bytes_sent(): number;
		/**
		 * Get the request body size in bytes. This is the size of the original body
		 * given to the request before any encoding is applied.
		 * 
		 * This value is available right before [signal#Message::wrote-body] signal is
		 * emitted, but you might get an intermediate value if called before.
		 * @returns the request body size
		 */
		public get_request_body_size(): number;
		/**
		 * Get the number of bytes sent to the network for the request headers.
		 * 
		 * This value is available right before [signal#Message::wrote-headers] signal
		 * is emitted, but you might get an intermediate value if called before.
		 * @returns the request headers bytes sent
		 */
		public get_request_header_bytes_sent(): number;
		/**
		 * Get the time immediately before the [class#Message] started the
		 * request of the resource from the server or the local disk cache.
		 * @returns the request start time
		 */
		public get_request_start(): number;
		/**
		 * Get the number of bytes received from the network for the response body.
		 * 
		 * This value is available right before [signal#Message::got-body] signal is
		 * emitted, but you might get an intermediate value if called before. For
		 * resources loaded from the disk cache this value is always 0.
		 * @returns the response body bytes received
		 */
		public get_response_body_bytes_received(): number;
		/**
		 * Get the response body size in bytes.
		 * 
		 * This is the size of the body as given to the user after all encodings are
		 * applied, so it might be greater than the value returned by
		 * [method#MessageMetrics.get_response_body_bytes_received]. This value is
		 * available right before [signal#Message::got-body] signal is emitted, but you
		 * might get an intermediate value if called before.
		 * @returns the response body size
		 */
		public get_response_body_size(): number;
		/**
		 * Get the time immediately after the [class#Message] received the last
		 * bytes of the response from the server or the local disk cache.
		 * 
		 * In case of load failure, this returns the time immediately before the
		 * fetch is aborted.
		 * @returns the response end time
		 */
		public get_response_end(): number;
		/**
		 * Get the number of bytes received from the network for the response headers.
		 * 
		 * This value is available right before [signal#Message::got-headers] signal
		 * is emitted, but you might get an intermediate value if called before.
		 * For resources loaded from the disk cache this value is always 0.
		 * @returns the response headers bytes received
		 */
		public get_response_header_bytes_received(): number;
		/**
		 * Get the time immediately after the [class#Message] received the first
		 * bytes of the response from the server or the local disk cache.
		 * @returns the response start time
		 */
		public get_response_start(): number;
		/**
		 * Get the time immediately before the [class#Message] started the
		 * TLS handshake.
		 * 
		 * It will be 0 if no TLS handshake was required to fetch the resource
		 * (connection was not secure, a persistent connection was used or resource was
		 * loaded from the local disk cache).
		 * @returns the tls start time
		 */
		public get_tls_start(): number;
	}

	export interface MultipartInitOptions {}
	/**
	 * Represents a multipart HTTP message body, parsed according to the
	 * syntax of RFC 2046.
	 * 
	 * Of particular interest to HTTP are `multipart/byte-ranges` and
	 * `multipart/form-data`,
	 * 
	 * Although the headers of a {@link Multipart} body part will contain the
	 * full headers from that body part, libsoup does not interpret them
	 * according to MIME rules. For example, each body part is assumed to
	 * have "binary" Content-Transfer-Encoding, even if its headers
	 * explicitly state otherwise. In other words, don't try to use
	 * #SoupMultipart for handling real MIME multiparts.
	 */
	interface Multipart {}
	class Multipart {
		public constructor(options?: Partial<MultipartInitOptions>);
		/**
		 * Creates a new empty {@link Multipart} with a randomly-generated
		 * boundary string.
		 * 
		 * Note that #mime_type must be the full MIME type, including "multipart/".
		 * 
		 * See also: [ctor#Message.new_from_multipart].
		 * @param mime_type the MIME type of the multipart to create.
		 * @returns a new empty {@link Multipart} of the given #mime_type
		 */
		public static new(mime_type: string): Multipart;
		/**
		 * Parses #headers and #body to form a new {@link Multipart}
		 * @param headers the headers of the HTTP message to parse
		 * @param body the body of the HTTP message to parse
		 * @returns a new {@link Multipart} (or %NULL if the
		 *   message couldn't be parsed or wasn't multipart).
		 */
		public static new_from_message(headers: MessageHeaders, body: GLib.Bytes): Multipart | null;
		/**
		 * Adds a new MIME part containing #body to #multipart
		 * 
		 * Uses "Content-Disposition: form-data", as per the HTML forms specification.
		 * @param control_name the name of the control associated with this file
		 * @param filename the name of the file, or %NULL if not known
		 * @param content_type the MIME type of the file, or %NULL if not known
		 * @param body the file data
		 */
		public append_form_file(control_name: string, filename: string | null, content_type: string | null, body: GLib.Bytes): void;
		/**
		 * Adds a new MIME part containing #data to #multipart.
		 * 
		 * Uses "Content-Disposition: form-data", as per the HTML forms specification.
		 * @param control_name the name of the control associated with #data
		 * @param data the body data
		 */
		public append_form_string(control_name: string, data: string): void;
		/**
		 * Adds a new MIME part to #multipart with the given headers and body.
		 * 
		 * (The multipart will make its own copies of #headers and #body, so
		 * you should free your copies if you are not using them for anything
		 * else.)
		 * @param headers the MIME part headers
		 * @param body the MIME part body
		 */
		public append_part(headers: MessageHeaders, body: GLib.Bytes): void;
		/**
		 * Frees #multipart.
		 */
		public free(): void;
		/**
		 * Gets the number of body parts in #multipart.
		 * @returns the number of body parts in #multipart
		 */
		public get_length(): number;
		/**
		 * Gets the indicated body part from #multipart.
		 * @param part the part number to get (counting from 0)
		 * @returns %TRUE on success, %FALSE if #part is out of range (in
		 *   which case #headers and #body won't be set)
		 * 
		 * return location for the MIME part
		 *   headers
		 * 
		 * return location for the MIME part
		 *   body
		 */
		public get_part(part: number): [ boolean, MessageHeaders, GLib.Bytes ];
		/**
		 * Serializes #multipart to #dest_headers and #dest_body.
		 * @param dest_headers the headers of the HTTP message to serialize #multipart to
		 * @returns the body of the HTTP message to serialize #multipart to
		 */
		public to_message(dest_headers: MessageHeaders): GLib.Bytes;
	}

	export interface RangeInitOptions {}
	/**
	 * Represents a byte range as used in the Range header.
	 * 
	 * If #end is non-negative, then #start and #end represent the bounds
	 * of of the range, counting from 0. (Eg, the first 500 bytes would be
	 * represented as #start = 0 and #end = 499.)
	 * 
	 * If #end is -1 and #start is non-negative, then this represents a
	 * range starting at #start and ending with the last byte of the
	 * requested resource body. (Eg, all but the first 500 bytes would be
	 * #start = 500, and #end = -1.)
	 * 
	 * If #end is -1 and #start is negative, then it represents a "suffix
	 * range", referring to the last -#start bytes of the resource body.
	 * (Eg, the last 500 bytes would be #start = -500 and #end = -1.)
	 */
	interface Range {}
	class Range {
		public constructor(options?: Partial<RangeInitOptions>);
		/**
		 * the start of the range
		 */
		public start: number;
		/**
		 * the end of the range
		 */
		public end: number;
	}

	export interface SessionFeatureInterfaceInitOptions {}
	/**
	 * The interface implemented by [iface#SessionFeature]s.
	 */
	interface SessionFeatureInterface {}
	class SessionFeatureInterface {
		public constructor(options?: Partial<SessionFeatureInterfaceInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SessionFeature} instead.
	 */
	interface ISessionFeature {

	}

	type SessionFeatureInitOptionsMixin  = {};
	export interface SessionFeatureInitOptions extends SessionFeatureInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SessionFeature} instead.
	 */
	type SessionFeatureMixin = ISessionFeature;

	/**
	 * Interface for miscellaneous [class#Session] features.
	 * 
	 * {@link SessionFeature} is the interface used by classes that extend
	 * the functionality of a [class#Session]. Some features like HTTP
	 * authentication handling are implemented internally via
	 * `SoupSessionFeature`s. Other features can be added to the session
	 * by the application. (Eg, [class#Logger], [class#CookieJar].)
	 * 
	 * See [method#Session.add_feature], etc, to add a feature to a session.
	 */
	interface SessionFeature extends SessionFeatureMixin {}

	class SessionFeature {
		public constructor(options?: Partial<SessionFeatureInitOptions>);
	}



	/**
	 * The type of cache; this affects what kinds of responses will be
	 * saved.
	 */
	enum CacheType {
		/**
		 * a single-user cache
		 */
		SINGLE_USER = 0,
		/**
		 * a shared cache
		 */
		SHARED = 1
	}

	/**
	 * The policy for accepting or rejecting cookies returned in
	 * responses.
	 */
	enum CookieJarAcceptPolicy {
		/**
		 * accept all cookies unconditionally.
		 */
		ALWAYS = 0,
		/**
		 * reject all cookies unconditionally.
		 */
		NEVER = 1,
		/**
		 * accept all cookies set by the main
		 *   document loaded in the application using libsoup. An example of the most
		 *   common case, web browsers, would be: If http://www.example.com is the page
		 *   loaded, accept all cookies set by example.com, but if a resource from
		 *   http://www.third-party.com is loaded from that page reject any cookie that
		 *   it could try to set. For libsoup to be able to tell apart first party
		 *   cookies from the rest, the application must call
		 *   [method#Message.set_first_party] on each outgoing [class#Message], setting
		 *   the [struct#GLib.Uri] of the main document. If no first party is set in a
		 *   message when this policy is in effect, cookies will be assumed to be third
		 *   party by default.
		 */
		NO_THIRD_PARTY = 2,
		/**
		 * accept all cookies set by
		 *   the main document loaded in the application using libsoup, and from domains
		 *   that have previously set at least one cookie when loaded as the main
		 *   document. An example of the most common case, web browsers, would be: if
		 *   http://www.example.com is the page loaded, accept all cookies set by
		 *   example.com, but if a resource from http://www.third-party.com is loaded
		 *   from that page, reject any cookie that it could try to set unless it
		 *   already has a cookie in the cookie jar. For libsoup to be able to tell
		 *   apart first party cookies from the rest, the application must call
		 *   [method#Message.set_first_party] on each outgoing {@link Message}, setting the
		 *   [struct#GLib.Uri] of the main document. If no first party is set in a
		 *   message when this policy is in effect, cookies will be assumed to be third
		 *   party by default.
		 */
		GRANDFATHERED_THIRD_PARTY = 3
	}

	/**
	 * Date formats that [func#date_time_to_string] can use.
	 * 
	 * #SOUP_DATE_HTTP and #SOUP_DATE_COOKIE always coerce the time to
	 * UTC.
	 * 
	 * This enum may be extended with more values in future releases.
	 */
	enum DateFormat {
		/**
		 * RFC 1123 format, used by the HTTP "Date" header. Eg
		 *   "Sun, 06 Nov 1994 08:49:37 GMT".
		 */
		HTTP = 1,
		/**
		 * The format for the "Expires" timestamp in the
		 *   Netscape cookie specification. Eg, "Sun, 06-Nov-1994 08:49:37 GMT".
		 */
		COOKIE = 2
	}

	/**
	 * How a message body is encoded for transport
	 */
	enum Encoding {
		/**
		 * unknown / error
		 */
		UNRECOGNIZED = 0,
		/**
		 * no body is present (which is not the same as a
		 *   0-length body, and only occurs in certain places)
		 */
		NONE = 1,
		/**
		 * Content-Length encoding
		 */
		CONTENT_LENGTH = 2,
		/**
		 * Response body ends when the connection is closed
		 */
		EOF = 3,
		/**
		 * chunked encoding (currently only supported
		 *   for response)
		 */
		CHUNKED = 4,
		/**
		 * multipart/byteranges (Reserved for future
		 *   use: NOT CURRENTLY IMPLEMENTED)
		 */
		BYTERANGES = 5
	}

	/**
	 * Indicates the HTTP protocol version being used.
	 */
	enum HTTPVersion {
		/**
		 * HTTP 1.0 (RFC 1945)
		 */
		HTTP_1_0 = 0,
		/**
		 * HTTP 1.1 (RFC 2616)
		 */
		HTTP_1_1 = 1,
		/**
		 * HTTP 2.0 (RFC 7540)
		 */
		HTTP_2_0 = 2
	}

	/**
	 * Describes the level of logging output to provide.
	 */
	enum LoggerLogLevel {
		/**
		 * No logging
		 */
		NONE = 0,
		/**
		 * Log the Request-Line or Status-Line and
		 *   the Soup-Debug pseudo-headers
		 */
		MINIMAL = 1,
		/**
		 * Log the full request/response headers
		 */
		HEADERS = 2,
		/**
		 * Log the full headers and request/response bodies
		 */
		BODY = 3
	}

	/**
	 * The lifetime of the memory being passed.
	 */
	enum MemoryUse {
		/**
		 * The memory is statically allocated and
		 *   constant; libsoup can use the passed-in buffer directly and not
		 *   need to worry about it being modified or freed.
		 */
		STATIC = 0,
		/**
		 * The caller has allocated the memory and libsoup
		 *   will assume ownership of it and free it with [func#GLib.free].
		 */
		TAKE = 1,
		/**
		 * The passed-in data belongs to the caller and
		 *   libsoup will copy it into new memory leaving the caller free
		 *   to reuse the original memory.
		 */
		COPY = 2
	}

	/**
	 * Value passed to [ctor#MessageHeaders.new] to set certain default
	 * behaviors.
	 */
	enum MessageHeadersType {
		/**
		 * request headers
		 */
		REQUEST = 0,
		/**
		 * response headers
		 */
		RESPONSE = 1,
		/**
		 * multipart body part headers
		 */
		MULTIPART = 2
	}

	/**
	 * Priorities that can be set on a [class#Message] to instruct the message queue
	 * to process it before any other message with lower priority.
	 */
	enum MessagePriority {
		/**
		 * The lowest priority, the messages
		 *   with this priority will be the last ones to be attended.
		 */
		VERY_LOW = 0,
		/**
		 * Use this for low priority messages, a
		 *   {@link Message} with the default priority will be processed first.
		 */
		LOW = 1,
		/**
		 * The default priotity, this is the
		 *   priority assigned to the {@link Message} by default.
		 */
		NORMAL = 2,
		/**
		 * High priority, a {@link Message} with
		 *   this priority will be processed before the ones with the default
		 *   priority.
		 */
		HIGH = 3,
		/**
		 * The highest priority, use this
		 *   for very urgent {@link Message} as they will be the first ones to be
		 *   attended.
		 */
		VERY_HIGH = 4
	}

	/**
	 * Represents the same-site policies of a cookie.
	 */
	enum SameSitePolicy {
		/**
		 * The cookie is exposed with both cross-site and same-site requests
		 */
		NONE = 0,
		/**
		 * The cookie is withheld on cross-site requests but exposed on cross-site navigations
		 */
		LAX = 1,
		/**
		 * The cookie is only exposed for same-site requests
		 */
		STRICT = 2
	}

	/**
	 * A {@link Session} error.
	 */
	enum SessionError {
		/**
		 * the server's response could not
		 *   be parsed
		 */
		PARSING = 0,
		/**
		 * the server's response was in an
		 *   unsupported format
		 */
		ENCODING = 1,
		/**
		 * the message has been redirected
		 *   too many times
		 */
		TOO_MANY_REDIRECTS = 2,
		/**
		 * the message has been restarted
		 *   too many times
		 */
		TOO_MANY_RESTARTS = 3,
		/**
		 * failed to redirect message because
		 *   Location header was missing or empty in response
		 */
		REDIRECT_NO_LOCATION = 4,
		/**
		 * failed to redirect message because
		 *   Location header contains an invalid URI
		 */
		REDIRECT_BAD_URI = 5,
		/**
		 * the message is already in the
		 *   session queue. Messages can only be reused after unqueued.
		 */
		MESSAGE_ALREADY_IN_QUEUE = 6
	}

	/**
	 * These represent the known HTTP status code values, plus various
	 * network and internal errors.
	 * 
	 * Note that no libsoup functions take or return this type directly;
	 * any function that works with status codes will accept unrecognized
	 * status codes as well.
	 */
	enum Status {
		/**
		 * No status available. (Eg, the message has not
		 * been sent yet)
		 */
		NONE = 0,
		/**
		 * 100 Continue (HTTP)
		 */
		CONTINUE = 100,
		/**
		 * 101 Switching Protocols (HTTP)
		 */
		SWITCHING_PROTOCOLS = 101,
		/**
		 * 102 Processing (WebDAV)
		 */
		PROCESSING = 102,
		/**
		 * 200 Success (HTTP). Also used by many lower-level
		 * soup routines to indicate success.
		 */
		OK = 200,
		/**
		 * 201 Created (HTTP)
		 */
		CREATED = 201,
		/**
		 * 202 Accepted (HTTP)
		 */
		ACCEPTED = 202,
		/**
		 * 203 Non-Authoritative Information
		 * (HTTP)
		 */
		NON_AUTHORITATIVE = 203,
		/**
		 * 204 No Content (HTTP)
		 */
		NO_CONTENT = 204,
		/**
		 * 205 Reset Content (HTTP)
		 */
		RESET_CONTENT = 205,
		/**
		 * 206 Partial Content (HTTP)
		 */
		PARTIAL_CONTENT = 206,
		/**
		 * 207 Multi-Status (WebDAV)
		 */
		MULTI_STATUS = 207,
		/**
		 * 300 Multiple Choices (HTTP)
		 */
		MULTIPLE_CHOICES = 300,
		/**
		 * 301 Moved Permanently (HTTP)
		 */
		MOVED_PERMANENTLY = 301,
		/**
		 * 302 Found (HTTP)
		 */
		FOUND = 302,
		/**
		 * 302 Moved Temporarily (old name,
		 * RFC 2068)
		 */
		MOVED_TEMPORARILY = 302,
		/**
		 * 303 See Other (HTTP)
		 */
		SEE_OTHER = 303,
		/**
		 * 304 Not Modified (HTTP)
		 */
		NOT_MODIFIED = 304,
		/**
		 * 305 Use Proxy (HTTP)
		 */
		USE_PROXY = 305,
		/**
		 * 306 [Unused] (HTTP)
		 */
		NOT_APPEARING_IN_THIS_PROTOCOL = 306,
		/**
		 * 307 Temporary Redirect (HTTP)
		 */
		TEMPORARY_REDIRECT = 307,
		/**
		 * 308 Permanent Redirect (HTTP)
		 */
		PERMANENT_REDIRECT = 308,
		/**
		 * 400 Bad Request (HTTP)
		 */
		BAD_REQUEST = 400,
		/**
		 * 401 Unauthorized (HTTP)
		 */
		UNAUTHORIZED = 401,
		/**
		 * 402 Payment Required (HTTP)
		 */
		PAYMENT_REQUIRED = 402,
		/**
		 * 403 Forbidden (HTTP)
		 */
		FORBIDDEN = 403,
		/**
		 * 404 Not Found (HTTP)
		 */
		NOT_FOUND = 404,
		/**
		 * 405 Method Not Allowed (HTTP)
		 */
		METHOD_NOT_ALLOWED = 405,
		/**
		 * 406 Not Acceptable (HTTP)
		 */
		NOT_ACCEPTABLE = 406,
		/**
		 * 407 Proxy Authentication
		 * Required (HTTP)
		 */
		PROXY_AUTHENTICATION_REQUIRED = 407,
		/**
		 * shorter alias for
		 * %SOUP_STATUS_PROXY_AUTHENTICATION_REQUIRED
		 */
		PROXY_UNAUTHORIZED = 407,
		/**
		 * 408 Request Timeout (HTTP)
		 */
		REQUEST_TIMEOUT = 408,
		/**
		 * 409 Conflict (HTTP)
		 */
		CONFLICT = 409,
		/**
		 * 410 Gone (HTTP)
		 */
		GONE = 410,
		/**
		 * 411 Length Required (HTTP)
		 */
		LENGTH_REQUIRED = 411,
		/**
		 * 412 Precondition Failed (HTTP)
		 */
		PRECONDITION_FAILED = 412,
		/**
		 * 413 Request Entity Too Large
		 * (HTTP)
		 */
		REQUEST_ENTITY_TOO_LARGE = 413,
		/**
		 * 414 Request-URI Too Long (HTTP)
		 */
		REQUEST_URI_TOO_LONG = 414,
		/**
		 * 415 Unsupported Media Type
		 * (HTTP)
		 */
		UNSUPPORTED_MEDIA_TYPE = 415,
		/**
		 * 416 Requested Range
		 * Not Satisfiable (HTTP)
		 */
		REQUESTED_RANGE_NOT_SATISFIABLE = 416,
		/**
		 * shorter alias for
		 * %SOUP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE
		 */
		INVALID_RANGE = 416,
		/**
		 * 417 Expectation Failed (HTTP)
		 */
		EXPECTATION_FAILED = 417,
		/**
		 * 421 Misdirected Request
		 */
		MISDIRECTED_REQUEST = 421,
		/**
		 * 422 Unprocessable Entity
		 * (WebDAV)
		 */
		UNPROCESSABLE_ENTITY = 422,
		/**
		 * 423 Locked (WebDAV)
		 */
		LOCKED = 423,
		/**
		 * 424 Failed Dependency (WebDAV)
		 */
		FAILED_DEPENDENCY = 424,
		/**
		 * 500 Internal Server Error
		 * (HTTP)
		 */
		INTERNAL_SERVER_ERROR = 500,
		/**
		 * 501 Not Implemented (HTTP)
		 */
		NOT_IMPLEMENTED = 501,
		/**
		 * 502 Bad Gateway (HTTP)
		 */
		BAD_GATEWAY = 502,
		/**
		 * 503 Service Unavailable (HTTP)
		 */
		SERVICE_UNAVAILABLE = 503,
		/**
		 * 504 Gateway Timeout (HTTP)
		 */
		GATEWAY_TIMEOUT = 504,
		/**
		 * 505 HTTP Version Not
		 * Supported (HTTP)
		 */
		HTTP_VERSION_NOT_SUPPORTED = 505,
		/**
		 * 507 Insufficient Storage
		 * (WebDAV)
		 */
		INSUFFICIENT_STORAGE = 507,
		/**
		 * 510 Not Extended (RFC 2774)
		 */
		NOT_EXTENDED = 510
	}

	/**
	 * Error codes for %SOUP_TLD_ERROR.
	 */
	enum TLDError {
		/**
		 * A hostname was syntactically
		 *   invalid.
		 */
		INVALID_HOSTNAME = 0,
		/**
		 * The passed-in "hostname" was
		 *   actually an IP address (and thus has no base domain or
		 *   public suffix).
		 */
		IS_IP_ADDRESS = 1,
		/**
		 * The passed-in hostname
		 *   did not have enough components. Eg, calling
		 *   [func#tld_get_base_domain] on <literal>"co.uk"</literal>.
		 */
		NOT_ENOUGH_DOMAINS = 2,
		/**
		 * The passed-in hostname has
		 *   no recognized public suffix.
		 */
		NO_BASE_DOMAIN = 3,
		/**
		 * The Public Suffix List was not
		 *   available.
		 */
		NO_PSL_DATA = 4
	}

	/**
	 * Enum values passed to [func#uri_copy] to indicate the components of
	 * the URI that should be updated with the given values.
	 */
	enum URIComponent {
		/**
		 * no component
		 */
		NONE = 0,
		/**
		 * the URI scheme component
		 */
		SCHEME = 1,
		/**
		 * the URI user component
		 */
		USER = 2,
		/**
		 * the URI password component
		 */
		PASSWORD = 3,
		/**
		 * the URI authentication parameters component
		 */
		AUTH_PARAMS = 4,
		/**
		 * the URI host component
		 */
		HOST = 5,
		/**
		 * the URI port component
		 */
		PORT = 6,
		/**
		 * the URI path component
		 */
		PATH = 7,
		/**
		 * the URI query component
		 */
		QUERY = 8,
		/**
		 * the URI fragment component
		 */
		FRAGMENT = 9
	}

	/**
	 * Pre-defined close codes that can be passed to
	 * [method#WebsocketConnection.close] or received from
	 * [method#WebsocketConnection.get_close_code].
	 * 
	 * However, other codes are also allowed.
	 */
	enum WebsocketCloseCode {
		/**
		 * a normal, non-error close
		 */
		NORMAL = 1000,
		/**
		 * the client/server is going away
		 */
		GOING_AWAY = 1001,
		/**
		 * a protocol error occurred
		 */
		PROTOCOL_ERROR = 1002,
		/**
		 * the endpoint received data
		 *   of a type that it does not support.
		 */
		UNSUPPORTED_DATA = 1003,
		/**
		 * reserved value indicating that
		 *   no close code was present; must not be sent.
		 */
		NO_STATUS = 1005,
		/**
		 * reserved value indicating that
		 *   the connection was closed abnormally; must not be sent.
		 */
		ABNORMAL = 1006,
		/**
		 * the endpoint received data that
		 *   was invalid (eg, non-UTF-8 data in a text message).
		 */
		BAD_DATA = 1007,
		/**
		 * generic error code
		 *   indicating some sort of policy violation.
		 */
		POLICY_VIOLATION = 1008,
		/**
		 * the endpoint received a message
		 *   that is too big to process.
		 */
		TOO_BIG = 1009,
		/**
		 * the client is closing the
		 *   connection because the server failed to negotiate a required
		 *   extension.
		 */
		NO_EXTENSION = 1010,
		/**
		 * the server is closing the
		 *   connection because it was unable to fulfill the request.
		 */
		SERVER_ERROR = 1011,
		/**
		 * reserved value indicating that
		 *   the TLS handshake failed; must not be sent.
		 */
		TLS_HANDSHAKE = 1015
	}

	/**
	 * The type of a [class#WebsocketConnection].
	 */
	enum WebsocketConnectionType {
		/**
		 * unknown/invalid connection
		 */
		UNKNOWN = 0,
		/**
		 * a client-side connection
		 */
		CLIENT = 1,
		/**
		 * a server-side connection
		 */
		SERVER = 2
	}

	/**
	 * The type of data contained in a [signal#WebsocketConnection::message] signal.
	 */
	enum WebsocketDataType {
		/**
		 * UTF-8 text
		 */
		TEXT = 1,
		/**
		 * binary data
		 */
		BINARY = 2
	}

	/**
	 * WebSocket-related errors.
	 */
	enum WebsocketError {
		/**
		 * a generic error
		 */
		FAILED = 0,
		/**
		 * attempted to handshake with a
		 *   server that does not appear to understand WebSockets.
		 */
		NOT_WEBSOCKET = 1,
		/**
		 * the WebSocket handshake failed
		 *   because some detail was invalid (eg, incorrect accept key).
		 */
		BAD_HANDSHAKE = 2,
		/**
		 * the WebSocket handshake failed
		 *   because the "Origin" header was not an allowed value.
		 */
		BAD_ORIGIN = 3
	}

	/**
	 * The state of the WebSocket connection.
	 */
	enum WebsocketState {
		/**
		 * the connection is ready to send messages
		 */
		OPEN = 1,
		/**
		 * the connection is in the process of
		 *   closing down; messages may be received, but not sent
		 */
		CLOSING = 2,
		/**
		 * the connection is completely closed down
		 */
		CLOSED = 3
	}

	/**
	 * Indicates if a message should or shouldn't be cached.
	 */
	enum Cacheability {
		/**
		 * The message should be cached
		 */
		CACHEABLE = 1,
		/**
		 * The message shouldn't be cached
		 */
		UNCACHEABLE = 2,
		/**
		 * The messages cache should be invalidated
		 */
		INVALIDATES = 4,
		/**
		 * The messages cache should be updated
		 */
		VALIDATES = 8
	}

	/**
	 * Represents the parsed value of the "Expect" header.
	 */
	enum Expectation {
		/**
		 * any unrecognized expectation
		 */
		UNRECOGNIZED = 1,
		/**
		 * "100-continue"
		 */
		CONTINUE = 2
	}

	/**
	 * Various flags that can be set on a {@link Message} to alter its
	 * behavior.
	 */
	enum MessageFlags {
		/**
		 * The session should not follow redirect
		 *   (3xx) responses received by this message.
		 */
		NO_REDIRECT = 2,
		/**
		 * Requests that the message should be
		 *   sent on a newly-created connection, not reusing an existing
		 *   persistent connection. Note that messages with non-idempotent
		 *   [property#Message:method]s behave this way by default, unless
		 *   #SOUP_MESSAGE_IDEMPOTENT is set.
		 */
		NEW_CONNECTION = 4,
		/**
		 * The message is considered idempotent,
		 *   regardless its [property#Message:method], and allows reuse of existing
		 *   idle connections, instead of always requiring a new one, unless
		 *   #SOUP_MESSAGE_NEW_CONNECTION is set.
		 */
		IDEMPOTENT = 8,
		/**
		 * The [class#AuthManager] should not use
		 *   the credentials cache for this message, neither to use cached credentials
		 *   to automatically authenticate this message nor to cache the credentials
		 *   after the message is successfully authenticated. This applies to both server
		 *   and proxy authentication. Note that [signal#Message::authenticate] signal will
		 *   be emitted, if you want to disable authentication for a message use
		 *   [method#Message.disable_feature] passing #SOUP_TYPE_AUTH_MANAGER instead.
		 */
		DO_NOT_USE_AUTH_CACHE = 16,
		/**
		 * Metrics will be collected for this message.
		 */
		COLLECT_METRICS = 32
	}

	/**
	 * Options to pass to [method#Server.listen], etc.
	 * 
	 * %SOUP_SERVER_LISTEN_IPV4_ONLY and %SOUP_SERVER_LISTEN_IPV6_ONLY
	 * only make sense with [method#Server.listen_all] and
	 * [method#Server.listen_local], not plain [method#Server.listen] (which
	 * simply listens on whatever kind of socket you give it). And you
	 * cannot specify both of them in a single call.
	 */
	enum ServerListenOptions {
		/**
		 * Listen for https connections rather
		 *   than plain http.
		 */
		HTTPS = 1,
		/**
		 * Only listen on IPv4 interfaces.
		 */
		IPV4_ONLY = 2,
		/**
		 * Only listen on IPv6 interfaces.
		 */
		IPV6_ONLY = 4
	}

	/**
	 * Callback used by {@link AuthDomainBasic} for authentication purposes.
	 * 
	 * The application should verify that #username and #password and valid
	 * and return %TRUE or %FALSE.
	 * 
	 * If you are maintaining your own password database (rather than
	 * using the password to authenticate against some other system like
	 * PAM or a remote server), you should make sure you know what you are
	 * doing. In particular, don't store cleartext passwords, or
	 * easily-computed hashes of cleartext passwords, even if you don't
	 * care that much about the security of your server, because users
	 * will frequently use the same password for multiple sites, and so
	 * compromising any site with a cleartext (or easily-cracked) password
	 * database may give attackers access to other more-interesting sites
	 * as well.
	 */
	interface AuthDomainBasicAuthCallback {
		/**
		 * Callback used by {@link AuthDomainBasic} for authentication purposes.
		 * 
		 * The application should verify that #username and #password and valid
		 * and return %TRUE or %FALSE.
		 * 
		 * If you are maintaining your own password database (rather than
		 * using the password to authenticate against some other system like
		 * PAM or a remote server), you should make sure you know what you are
		 * doing. In particular, don't store cleartext passwords, or
		 * easily-computed hashes of cleartext passwords, even if you don't
		 * care that much about the security of your server, because users
		 * will frequently use the same password for multiple sites, and so
		 * compromising any site with a cleartext (or easily-cracked) password
		 * database may give attackers access to other more-interesting sites
		 * as well.
		 * @param domain the domain
		 * @param msg the message being authenticated
		 * @param username the username provided by the client
		 * @param password the password provided by the client
		 * @returns %TRUE if #username and #password are valid
		 */
		(domain: AuthDomainBasic, msg: ServerMessage, username: string, password: string): boolean;
	}

	/**
	 * Callback used by {@link AuthDomainDigest} for authentication purposes.
	 * 
	 * The application should look up #username in its password database,
	 * and return the corresponding encoded password (see
	 * [func#AuthDomainDigest.encode_password].
	 */
	interface AuthDomainDigestAuthCallback {
		/**
		 * Callback used by {@link AuthDomainDigest} for authentication purposes.
		 * 
		 * The application should look up #username in its password database,
		 * and return the corresponding encoded password (see
		 * [func#AuthDomainDigest.encode_password].
		 * @param domain the domain
		 * @param msg the message being authenticated
		 * @param username the username provided by the client
		 * @returns the encoded password, or %NULL if
		 *   #username is not a valid user. #domain will free the password when
		 *   it is done with it.
		 */
		(domain: AuthDomainDigest, msg: ServerMessage, username: string): string | null;
	}

	/**
	 * The prototype for a {@link AuthDomain} filter.
	 * 
	 * See [method#AuthDomain.set_filter] for details.
	 */
	interface AuthDomainFilter {
		/**
		 * The prototype for a {@link AuthDomain} filter.
		 * 
		 * See [method#AuthDomain.set_filter] for details.
		 * @param domain a {@link AuthDomain}
		 * @param msg a {@link ServerMessage}
		 * @returns %TRUE if #msg requires authentication, %FALSE if not.
		 */
		(domain: AuthDomain, msg: ServerMessage): boolean;
	}

	/**
	 * The prototype for a {@link AuthDomain} generic authentication callback.
	 * 
	 * The callback should look up the user's password, call
	 * [method#AuthDomain.check_password], and use the return value from that method
	 * as its own return value.
	 * 
	 * In general, for security reasons, it is preferable to use the
	 * auth-domain-specific auth callbacks (eg,
	 * [callback#AuthDomainBasicAuthCallback] and
	 * [callback#AuthDomainDigestAuthCallback]), because they don't require
	 * keeping a cleartext password database. Most users will use the same
	 * password for many different sites, meaning if any site with a
	 * cleartext password database is compromised, accounts on other
	 * servers might be compromised as well. For many of the cases where
	 * [class#Server] is used, this is not really relevant, but it may still
	 * be worth considering.
	 */
	interface AuthDomainGenericAuthCallback {
		/**
		 * The prototype for a {@link AuthDomain} generic authentication callback.
		 * 
		 * The callback should look up the user's password, call
		 * [method#AuthDomain.check_password], and use the return value from that method
		 * as its own return value.
		 * 
		 * In general, for security reasons, it is preferable to use the
		 * auth-domain-specific auth callbacks (eg,
		 * [callback#AuthDomainBasicAuthCallback] and
		 * [callback#AuthDomainDigestAuthCallback]), because they don't require
		 * keeping a cleartext password database. Most users will use the same
		 * password for many different sites, meaning if any site with a
		 * cleartext password database is compromised, accounts on other
		 * servers might be compromised as well. For many of the cases where
		 * [class#Server] is used, this is not really relevant, but it may still
		 * be worth considering.
		 * @param domain a {@link AuthDomain}
		 * @param msg the {@link ServerMessage} being authenticated
		 * @param username the username from #msg
		 * @returns %TRUE if #msg is authenticated, %FALSE if not.
		 */
		(domain: AuthDomain, msg: ServerMessage, username: string): boolean;
	}

	/**
	 * The prototype for a logging filter.
	 * 
	 * The filter callback will be invoked for each request or response, and should
	 * analyze it and return a [enum#LoggerLogLevel] value indicating how much of
	 * the message to log.
	 */
	interface LoggerFilter {
		/**
		 * The prototype for a logging filter.
		 * 
		 * The filter callback will be invoked for each request or response, and should
		 * analyze it and return a [enum#LoggerLogLevel] value indicating how much of
		 * the message to log.
		 * @param logger the {@link Logger}
		 * @param msg the message being logged
		 * @returns a [enum#LoggerLogLevel] value indicating how much of the message to
		 *   log
		 */
		(logger: Logger, msg: Message): LoggerLogLevel;
	}

	/**
	 * The prototype for a custom printing callback.
	 * 
	 * #level indicates what kind of information is being printed. Eg, it
	 * will be %SOUP_LOGGER_LOG_HEADERS if #data is header data.
	 * 
	 * #direction is either '<', '>', or ' ', and #data is the single line
	 * to print; the printer is expected to add a terminating newline.
	 * 
	 * To get the effect of the default printer, you would do:
	 * 
	 * ```c
	 * printf ("%c %s\n", direction, data);
	 * ```
	 */
	interface LoggerPrinter {
		/**
		 * The prototype for a custom printing callback.
		 * 
		 * #level indicates what kind of information is being printed. Eg, it
		 * will be %SOUP_LOGGER_LOG_HEADERS if #data is header data.
		 * 
		 * #direction is either '<', '>', or ' ', and #data is the single line
		 * to print; the printer is expected to add a terminating newline.
		 * 
		 * To get the effect of the default printer, you would do:
		 * 
		 * ```c
		 * printf ("%c %s\n", direction, data);
		 * ```
		 * @param logger the {@link Logger}
		 * @param level the level of the information being printed.
		 * @param direction a single-character prefix to #data
		 * @param data data to print
		 */
		(logger: Logger, level: LoggerLogLevel, direction: string, data: string): void;
	}

	/**
	 * The callback passed to [method#MessageHeaders.foreach].
	 */
	interface MessageHeadersForeachFunc {
		/**
		 * The callback passed to [method#MessageHeaders.foreach].
		 * @param name the header name
		 * @param value the header value
		 */
		(name: string, value: string): void;
	}

	/**
	 * A callback used to handle requests to a [class#Server].
	 * 
	 * #path and #query contain the likewise-named components of the
	 * Request-URI, subject to certain assumptions. By default,
	 * [class#Server] decodes all percent-encoding in the URI path, such that
	 * `"/foo%2Fbar"` is treated the same as `"/foo/bar"`. If your
	 * server is serving resources in some non-POSIX-filesystem namespace,
	 * you may want to distinguish those as two distinct paths. In that
	 * case, you can set the [property#Server:raw-paths] property when creating
	 * the [class#Server], and it will leave those characters undecoded.
	 * 
	 * #query contains the query component of the Request-URI parsed according to
	 * the rules for HTML form handling. Although this is the only commonly-used
	 * query string format in HTTP, there is nothing that actually requires that
	 * HTTP URIs use that format; if your server needs to use some other format, you
	 * can just ignore #query, and call [method#Message.get_uri] and parse the URI's
	 * query field yourself.
	 * 
	 * See [method#Server.add_handler] and [method#Server.add_early_handler]
	 * for details of what handlers can/should do.
	 */
	interface ServerCallback {
		/**
		 * A callback used to handle requests to a [class#Server].
		 * 
		 * #path and #query contain the likewise-named components of the
		 * Request-URI, subject to certain assumptions. By default,
		 * [class#Server] decodes all percent-encoding in the URI path, such that
		 * `"/foo%2Fbar"` is treated the same as `"/foo/bar"`. If your
		 * server is serving resources in some non-POSIX-filesystem namespace,
		 * you may want to distinguish those as two distinct paths. In that
		 * case, you can set the [property#Server:raw-paths] property when creating
		 * the [class#Server], and it will leave those characters undecoded.
		 * 
		 * #query contains the query component of the Request-URI parsed according to
		 * the rules for HTML form handling. Although this is the only commonly-used
		 * query string format in HTTP, there is nothing that actually requires that
		 * HTTP URIs use that format; if your server needs to use some other format, you
		 * can just ignore #query, and call [method#Message.get_uri] and parse the URI's
		 * query field yourself.
		 * 
		 * See [method#Server.add_handler] and [method#Server.add_early_handler]
		 * for details of what handlers can/should do.
		 * @param server the {@link Server}
		 * @param msg the message being processed
		 * @param path the path component of #msg's Request-URI
		 * @param query the parsed query
		 *   component of #msg's Request-URI
		 */
		(server: Server, msg: ServerMessage, path: string, query?: string[] | null): void;
	}

	/**
	 * A callback used to handle WebSocket requests to a {@link Server}.
	 * 
	 * The callback will be invoked after sending the handshake response back to the
	 * client (and is only invoked if the handshake was successful).
	 * 
	 * #path contains the path of the Request-URI, subject to the same
	 * rules as [callback#ServerCallback] `(qv)`.
	 */
	interface ServerWebsocketCallback {
		/**
		 * A callback used to handle WebSocket requests to a {@link Server}.
		 * 
		 * The callback will be invoked after sending the handshake response back to the
		 * client (and is only invoked if the handshake was successful).
		 * 
		 * #path contains the path of the Request-URI, subject to the same
		 * rules as [callback#ServerCallback] `(qv)`.
		 * @param server the {@link Server}
		 * @param msg the {@link ServerMessage}
		 * @param path the path component of #msg's Request-URI
		 * @param connection the newly created WebSocket connection
		 */
		(server: Server, msg: ServerMessage, path: string, connection: WebsocketConnection): void;
	}

	/**
	 * Like [func#CHECK_VERSION], but the check for soup_check_version is
	 * at runtime instead of compile time.
	 * 
	 * This is useful for compiling against older versions of libsoup, but using
	 * features from newer versions.
	 * @param major the major version to check
	 * @param minor the minor version to check
	 * @param micro the micro version to check
	 * @returns %TRUE if the version of the libsoup currently loaded
	 *   is the same as or newer than the passed-in version.
	 */
	function check_version(major: number, minor: number, micro: number): boolean;
	/**
	 * Parses #header and returns a {@link Cookie}.
	 * 
	 * If #header contains multiple cookies, only the first one will be parsed.
	 * 
	 * If #header does not have "path" or "domain" attributes, they will
	 * be defaulted from #origin. If #origin is %NULL, path will default
	 * to "/", but domain will be left as %NULL. Note that this is not a
	 * valid state for a #SoupCookie, and you will need to fill in some
	 * appropriate string for the domain if you want to actually make use
	 * of the cookie.
	 * 
	 * As of version 3.4.0 the default value of a cookie's same-site-policy
	 * is %SOUP_SAME_SITE_POLICY_LAX.
	 * @param header a cookie string (eg, the value of a Set-Cookie header)
	 * @param origin origin of the cookie
	 * @returns a new {@link Cookie}, or %NULL if it could
	 *   not be parsed, or contained an illegal "domain" attribute for a
	 *   cookie originating from #origin.
	 */
	function cookie_parse(header: string, origin: GLib.Uri | null): Cookie | null;
	/**
	 * Frees #cookies.
	 * @param cookies a #GSList of {@link Cookie}
	 */
	function cookies_free(cookies: Cookie[]): void;
	/**
	 * Parses #msg's Cookie request header and returns a [struct#GLib.SList] of
	 * `SoupCookie`s.
	 * 
	 * As the "Cookie" header, unlike "Set-Cookie", only contains cookie names and
	 * values, none of the other {@link Cookie} fields will be filled in. (Thus, you
	 * can't generally pass a cookie returned from this method directly to
	 * [func#cookies_to_response].)
	 * @param msg a {@link Message} containing a "Cookie" request header
	 * @returns a #GSList of
	 *   `SoupCookie`s, which can be freed with [method#Cookie.free].
	 */
	function cookies_from_request(msg: Message): Cookie[];
	/**
	 * Parses #msg's Set-Cookie response headers and returns a [struct#GLib.SList]
	 * of `SoupCookie`s.
	 * 
	 * Cookies that do not specify "path" or "domain" attributes will have their
	 * values defaulted from #msg.
	 * @param msg a {@link Message} containing a "Set-Cookie" response header
	 * @returns a #GSList of
	 *   `SoupCookie`s, which can be freed with [method#Cookie.free].
	 */
	function cookies_from_response(msg: Message): Cookie[];
	/**
	 * Serializes a [struct#GLib.SList] of {@link Cookie} into a string suitable for
	 * setting as the value of the "Cookie" header.
	 * @param cookies a #GSList of {@link Cookie}
	 * @returns the serialization of #cookies
	 */
	function cookies_to_cookie_header(cookies: Cookie[]): string;
	/**
	 * Adds the name and value of each cookie in #cookies to #msg's
	 * "Cookie" request.
	 * 
	 * If #msg already has a "Cookie" request header, these cookies will be appended
	 * to the cookies already present. Be careful that you do not append the same
	 * cookies twice, eg, when requeuing a message.
	 * @param cookies a #GSList of {@link Cookie}
	 * @param msg a {@link Message}
	 */
	function cookies_to_request(cookies: Cookie[], msg: Message): void;
	/**
	 * Appends a "Set-Cookie" response header to #msg for each cookie in
	 * #cookies.
	 * 
	 * This is in addition to any other "Set-Cookie" headers
	 * #msg may already have.
	 * @param cookies a #GSList of {@link Cookie}
	 * @param msg a {@link Message}
	 */
	function cookies_to_response(cookies: Cookie[], msg: Message): void;
	/**
	 * Parses #date_string and tries to extract a date from it.
	 * 
	 * This recognizes all of the "HTTP-date" formats from RFC 2616, RFC 2822 dates,
	 * and reasonable approximations thereof. (Eg, it is lenient about whitespace,
	 * leading "0"s, etc.)
	 * @param date_string The date as a string
	 * @returns a new #GDateTime, or %NULL if #date_string
	 *   could not be parsed.
	 */
	function date_time_new_from_http_string(date_string: string): GLib.DateTime | null;
	/**
	 * Converts #date to a string in the format described by #format.
	 * @param date a #GDateTime
	 * @param format the format to generate the date in
	 * @returns #date as a string or %NULL
	 */
	function date_time_to_string(date: GLib.DateTime, format: DateFormat): string;
	/**
	 * Decodes #form.
	 * 
	 * which is an urlencoded dataset as defined in the HTML 4.01 spec.
	 * @param encoded_form data of type "application/x-www-form-urlencoded"
	 * @returns a hash
	 *   table containing the name/value pairs from #encoded_form, which you
	 *   can free with [func#GLib.HashTable.destroy].
	 */
	function form_decode(encoded_form: string): string[];
	/**
	 * Decodes the "multipart/form-data" request in #multipart.
	 * 
	 * this is a convenience method for the case when you have a single file upload
	 * control in a form. (Or when you don't have any file upload controls, but are
	 * still using "multipart/form-data" anyway.) Pass the name of the file upload
	 * control in #file_control_name, and [func#form_decode_multipart] will extract
	 * the uploaded file data into #filename, #content_type, and #file. All of the
	 * other form control data will be returned (as strings, as with
	 * [func#form_decode] in the returned [struct#GLib.HashTable].
	 * 
	 * You may pass %NULL for #filename, #content_type and/or #file if you do not
	 * care about those fields. [func#form_decode_multipart] may also
	 * return %NULL in those fields if the client did not provide that
	 * information. You must free the returned filename and content-type
	 * with [func#GLib.free], and the returned file data with [method#Glib.Bytes.unref].
	 * 
	 * If you have a form with more than one file upload control, you will
	 * need to decode it manually, using [ctor#Multipart.new_from_message]
	 * and [method#Multipart.get_part].
	 * @param multipart a {@link Multipart}
	 * @param file_control_name the name of the HTML file upload control
	 * @returns 
	 *   a hash table containing the name/value pairs (other than
	 *   #file_control_name) from #msg, which you can free with
	 *   [func#GLib.HashTable.destroy]. On error, it will return %NULL.
	 * 
	 * return location for the name of the uploaded file
	 * 
	 * return location for the MIME type of the uploaded file
	 * 
	 * return location for the uploaded file data
	 */
	function form_decode_multipart(multipart: Multipart, file_control_name: string | null): [ string[] | null, string | null, string | null, GLib.Bytes | null ];
	/**
	 * Encodes the given field names and values into a value of type
	 * "application/x-www-form-urlencoded".
	 * 
	 * Encodes as defined in the HTML 4.01 spec.
	 * 
	 * This method requires you to know the names of the form fields (or
	 * at the very least, the total number of fields) at compile time; for
	 * working with dynamic forms, use [func#form_encode_hash] or
	 * [func#form_encode_datalist].
	 * 
	 * See also: [ctor#Message.new_from_encoded_form].
	 * @param first_field name of the first form field
	 * @returns the encoded form
	 */
	function form_encode(first_field: string): string;
	/**
	 * Encodes #form_data_set into a value of type
	 * "application/x-www-form-urlencoded".
	 * 
	 * Encodes as defined in the HTML 4.01 spec. Unlike [func#form_encode_hash],
	 * this preserves the ordering of the form elements, which may be required in
	 * some situations.
	 * 
	 * See also: [ctor#Message.new_from_encoded_form].
	 * @param form_data_set a datalist containing name/value pairs
	 * @returns the encoded form
	 */
	function form_encode_datalist(form_data_set: GLib.Data): string;
	/**
	 * Encodes #form_data_set into a value of type
	 * "application/x-www-form-urlencoded".
	 * 
	 * Encodes as defined in the HTML 4.01 spec.
	 * 
	 * Note that the HTML spec states that "The control names/values are
	 * listed in the order they appear in the document." Since this method
	 * takes a hash table, it cannot enforce that; if you care about the
	 * ordering of the form fields, use [func#form_encode_datalist].
	 * 
	 * See also: [ctor#Message.new_from_encoded_form].
	 * @param form_data_set a hash table containing
	 *   name/value pairs (as strings)
	 * @returns the encoded form
	 */
	function form_encode_hash(form_data_set: string[]): string;
	/**
	 * See [func#form_encode].
	 * 
	 * This is mostly an internal method, used by various other methods such as
	 * [func#form_encode].
	 * 
	 * See also: [ctor#Message.new_from_encoded_form].
	 * @param first_field name of the first form field
	 * @param args pointer to additional values, as in [func#form_encode]
	 * @returns the encoded form
	 */
	function form_encode_valist(first_field: string, args: any[]): string;
	/**
	 * Returns the major version number of the libsoup library.
	 * 
	 * e.g. in libsoup version 2.42.0 this is 2.
	 * 
	 * This function is in the library, so it represents the libsoup library
	 * your code is running against. Contrast with the #SOUP_MAJOR_VERSION
	 * macro, which represents the major version of the libsoup headers you
	 * have included when compiling your code.
	 * @returns the major version number of the libsoup library
	 */
	function get_major_version(): number;
	/**
	 * Returns the micro version number of the libsoup library.
	 * 
	 * e.g. in libsoup version 2.42.0 this is 0.
	 * 
	 * This function is in the library, so it represents the libsoup library
	 * your code is running against. Contrast with the #SOUP_MICRO_VERSION
	 * macro, which represents the micro version of the libsoup headers you
	 * have included when compiling your code.
	 * @returns the micro version number of the libsoup library
	 */
	function get_micro_version(): number;
	/**
	 * Returns the minor version number of the libsoup library.
	 * 
	 * e.g. in libsoup version 2.42.0 this is 42.
	 * 
	 * This function is in the library, so it represents the libsoup library
	 * your code is running against. Contrast with the #SOUP_MINOR_VERSION
	 * macro, which represents the minor version of the libsoup headers you
	 * have included when compiling your code.
	 * @returns the minor version number of the libsoup library
	 */
	function get_minor_version(): number;
	/**
	 * Parses #header to see if it contains the token #token (matched
	 * case-insensitively).
	 * 
	 * Note that this can't be used with lists that have qvalues.
	 * @param header An HTTP header suitable for parsing with
	 *   [func#header_parse_list]
	 * @param token a token
	 * @returns whether or not #header contains #token
	 */
	function header_contains(header: string, token: string): boolean;
	/**
	 * Frees #list.
	 * @param list a #GSList returned from [func#header_parse_list] or
	 * [func#header_parse_quality_list]
	 */
	function header_free_list(list: any[]): void;
	/**
	 * Frees #param_list.
	 * @param param_list a #GHashTable returned from
	 *   [func#header_parse_param_list] or [func#header_parse_semi_param_list]
	 */
	function header_free_param_list(param_list: string[]): void;
	/**
	 * Appends something like `name=value` to #string, taking care to quote #value
	 * if needed, and if so, to escape any quotes or backslashes in #value.
	 * 
	 * Alternatively, if #value is a non-ASCII UTF-8 string, it will be
	 * appended using RFC5987 syntax. Although in theory this is supposed
	 * to work anywhere in HTTP that uses this style of parameter, in
	 * reality, it can only be used portably with the Content-Disposition
	 * "filename" parameter.
	 * 
	 * If #value is %NULL, this will just append #name to #string.
	 * @param string a #GString being used to construct an HTTP header value
	 * @param name a parameter name
	 * @param value a parameter value, or %NULL
	 */
	function header_g_string_append_param(string: GLib.String, name: string, value: string | null): void;
	/**
	 * Appends something like `name="value"` to
	 * #string, taking care to escape any quotes or backslashes in #value.
	 * 
	 * If #value is (non-ASCII) UTF-8, this will instead use RFC 5987
	 * encoding, just like [func#header_g_string_append_param].
	 * @param string a #GString being used to construct an HTTP header value
	 * @param name a parameter name
	 * @param value a parameter value
	 */
	function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void;
	/**
	 * Parses a header whose content is described by RFC2616 as `#something`.
	 * 
	 * "something" does not itself contain commas, except as part of quoted-strings.
	 * @param header a header value
	 * @returns a #GSList of
	 *   list elements, as allocated strings
	 */
	function header_parse_list(header: string): string[];
	/**
	 * Parses a header which is a comma-delimited list of something like:
	 * `token [ "=" ( token | quoted-string ) ]`.
	 * 
	 * Tokens that don't have an associated value will still be added to
	 * the resulting hash table, but with a %NULL value.
	 * 
	 * This also handles RFC5987 encoding (which in HTTP is mostly used
	 * for giving UTF8-encoded filenames in the Content-Disposition
	 * header).
	 * @param header a header value
	 * @returns a
	 *   #GHashTable of list elements, which can be freed with
	 *   [func#header_free_param_list].
	 */
	function header_parse_param_list(header: string): string[];
	/**
	 * A strict version of [func#header_parse_param_list]
	 * that bails out if there are duplicate parameters.
	 * 
	 * Note that this function will treat RFC5987-encoded
	 * parameters as duplicated if an ASCII version is also
	 * present. For header fields that might contain
	 * RFC5987-encoded parameters, use
	 * [func#header_parse_param_list] instead.
	 * @param header a header value
	 * @returns 
	 *   a #GHashTable of list elements, which can be freed with
	 *   [func#header_free_param_list] or %NULL if there are duplicate
	 *   elements.
	 */
	function header_parse_param_list_strict(header: string): string[] | null;
	/**
	 * Parses a header whose content is a list of items with optional
	 * "qvalue"s (eg, Accept, Accept-Charset, Accept-Encoding,
	 * Accept-Language, TE).
	 * 
	 * If #unacceptable is not %NULL, then on return, it will contain the
	 * items with qvalue 0. Either way, those items will be removed from
	 * the main list.
	 * @param header a header value
	 * @returns a #GSList of
	 *   acceptable values (as allocated strings), highest-qvalue first.
	 * 
	 * on
	 *   return, will contain a list of unacceptable values
	 */
	function header_parse_quality_list(header: string): [ string[], string[] | null ];
	/**
	 * Parses a header which is a semicolon-delimited list of something
	 * like: `token [ "=" ( token | quoted-string ) ]`.
	 * 
	 * Tokens that don't have an associated value will still be added to
	 * the resulting hash table, but with a %NULL value.
	 * 
	 * This also handles RFC5987 encoding (which in HTTP is mostly used
	 * for giving UTF8-encoded filenames in the Content-Disposition
	 * header).
	 * @param header a header value
	 * @returns a
	 *   #GHashTable of list elements, which can be freed with
	 *   [func#header_free_param_list].
	 */
	function header_parse_semi_param_list(header: string): string[];
	/**
	 * A strict version of [func#header_parse_semi_param_list]
	 * that bails out if there are duplicate parameters.
	 * 
	 * Note that this function will treat RFC5987-encoded
	 * parameters as duplicated if an ASCII version is also
	 * present. For header fields that might contain
	 * RFC5987-encoded parameters, use
	 * [func#header_parse_semi_param_list] instead.
	 * @param header a header value
	 * @returns 
	 *   a #GHashTable of list elements, which can be freed with
	 *   [func#header_free_param_list] or %NULL if there are duplicate
	 *   elements.
	 */
	function header_parse_semi_param_list_strict(header: string): string[] | null;
	/**
	 * Parses the headers of an HTTP request or response in #str and
	 * stores the results in #dest.
	 * 
	 * Beware that #dest may be modified even on failure.
	 * 
	 * This is a low-level method; normally you would use
	 * [func#headers_parse_request] or [func#headers_parse_response].
	 * @param str the header string (including the Request-Line or Status-Line,
	 *   but not the trailing blank line)
	 * @param len length of #str
	 * @param dest {@link MessageHeaders} to store the header values in
	 * @returns success or failure
	 */
	function headers_parse(str: string, len: number, dest: MessageHeaders): boolean;
	/**
	 * Parses the headers of an HTTP request in #str and stores the
	 * results in #req_method, #req_path, #ver, and #req_headers.
	 * 
	 * Beware that #req_headers may be modified even on failure.
	 * @param str the headers (up to, but not including, the trailing blank line)
	 * @param len length of #str
	 * @param req_headers {@link MessageHeaders} to store the header values in
	 * @returns %SOUP_STATUS_OK if the headers could be parsed, or an
	 *   HTTP error to be returned to the client if they could not be.
	 * 
	 * if non-%NULL, will be filled in with the
	 *   request method
	 * 
	 * if non-%NULL, will be filled in with the
	 *   request path
	 * 
	 * if non-%NULL, will be filled in with the HTTP
	 *   version
	 */
	function headers_parse_request(str: string, len: number, req_headers: MessageHeaders): [ number, string | null, string | null, HTTPVersion | null ];
	/**
	 * Parses the headers of an HTTP response in #str and stores the
	 * results in #ver, #status_code, #reason_phrase, and #headers.
	 * 
	 * Beware that #headers may be modified even on failure.
	 * @param str the headers (up to, but not including, the trailing blank line)
	 * @param len length of #str
	 * @param headers {@link MessageHeaders} to store the header values in
	 * @returns success or failure.
	 * 
	 * if non-%NULL, will be filled in with the HTTP
	 *   version
	 * 
	 * if non-%NULL, will be filled in with
	 *   the status code
	 * 
	 * if non-%NULL, will be filled in with
	 *   the reason phrase
	 */
	function headers_parse_response(str: string, len: number, headers: MessageHeaders): [ boolean, HTTPVersion | null, number | null, string | null ];
	/**
	 * Parses the HTTP Status-Line string in #status_line into #ver,
	 * #status_code, and #reason_phrase.
	 * 
	 * #status_line must be terminated by either "\0" or "\r\n".
	 * @param status_line an HTTP Status-Line
	 * @returns %TRUE if #status_line was parsed successfully.
	 * 
	 * if non-%NULL, will be filled in with the HTTP
	 *   version
	 * 
	 * if non-%NULL, will be filled in with
	 *   the status code
	 * 
	 * if non-%NULL, will be filled in with
	 *   the reason phrase
	 */
	function headers_parse_status_line(status_line: string): [ boolean, HTTPVersion | null, number | null, string | null ];
	/**
	 * Initializes #iter for iterating #hdrs.
	 * @param hdrs a %SoupMessageHeaders
	 * @returns a pointer to a %SoupMessageHeadersIter
	 *   structure
	 */
	function message_headers_iter_init(hdrs: MessageHeaders): MessageHeadersIter;
	/**
	 * Registers error quark for SoupSession if needed.
	 * @returns Error quark for SoupSession.
	 */
	function session_error_quark(): GLib.Quark;
	/**
	 * Looks up the stock HTTP description of #status_code.
	 * 
	 * *There is no reason for you to ever use this
	 * function.* If you wanted the textual description for the
	 * [property#Message:status-code] of a given [class#Message], you should just
	 * look at the message's [property#Message:reason-phrase]. However, you
	 * should only do that for use in debugging messages; HTTP reason
	 * phrases are not localized, and are not generally very descriptive
	 * anyway, and so they should never be presented to the user directly.
	 * Instead, you should create you own error messages based on the
	 * status code, and on what you were trying to do.
	 * @param status_code an HTTP status code
	 * @returns the (terse, English) description of #status_code
	 */
	function status_get_phrase(status_code: number): string;
	/**
	 * Looks whether the #domain passed as argument is a public domain
	 * suffix (.org, .com, .co.uk, etc) or not.
	 * 
	 * Prior to libsoup 2.46, this function required that #domain be in
	 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
	 * UTF-8 or ASCII format.
	 * @param domain a domain name
	 * @returns %TRUE if it is a public domain, %FALSE otherwise.
	 */
	function tld_domain_is_public_suffix(domain: string): boolean;
	/**
	 * Registers error quark for {@link Soup.tld.get_base_domain} if needed.
	 * @returns Error quark for Soup TLD functions.
	 */
	function tld_error_quark(): GLib.Quark;
	/**
	 * Finds the base domain for a given #hostname
	 * 
	 * The base domain is composed by the top level domain (such as .org, .com,
	 * .co.uk, etc) plus the second level domain, for example for
	 * myhost.mydomain.com it will return mydomain.com.
	 * 
	 * Note that %NULL will be returned for private URLs (those not ending
	 * with any well known TLD) because choosing a base domain for them
	 * would be totally arbitrary.
	 * 
	 * Prior to libsoup 2.46, this function required that #hostname be in
	 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
	 * UTF-8 or ASCII format (and the return value will be in the same
	 * format).
	 * @param hostname a hostname
	 * @returns a pointer to the start of the base domain in #hostname. If
	 *   an error occurs, %NULL will be returned and #error set.
	 */
	function tld_get_base_domain(hostname: string): string;
	/**
	 * As of 3.4.0 this will detect the default ports of HTTP(s) and WS(S)
	 * URIs when copying and set it to the default port of the new scheme.
	 * So for example copying `http://localhost:80` while changing the scheme to https
	 * will result in `https://localhost:443`.
	 * 
	 * Return a copy of #uri with the given components updated.
	 * @param uri the #GUri to copy
	 * @param first_component first {@link URIComponent} to update
	 * @returns a new #GUri
	 */
	function uri_copy(uri: GLib.Uri, first_component: URIComponent): GLib.Uri;
	/**
	 * Decodes the given data URI and returns its contents and #content_type.
	 * @param uri a data URI, in string form
	 * @returns a #GBytes with the contents of #uri,
	 *    or %NULL if #uri is not a valid data URI
	 * 
	 * location to store content type
	 */
	function uri_decode_data_uri(uri: string): [ GLib.Bytes, string | null ];
	/**
	 * Tests whether or not #uri1 and #uri2 are equal in all parts.
	 * @param uri1 a #GUri
	 * @param uri2 another #GUri
	 * @returns %TRUE if equal otherwise %FALSE
	 */
	function uri_equal(uri1: GLib.Uri, uri2: GLib.Uri): boolean;
	/**
	 * Adds the necessary headers to #msg to request a WebSocket
	 * handshake including supported WebSocket extensions.
	 * 
	 * The message body and non-WebSocket-related headers are
	 * not modified.
	 * 
	 * This is a low-level function; if you use
	 * [method#Session.websocket_connect_async] to create a WebSocket connection, it
	 * will call this for you.
	 * @param msg a {@link Message}
	 * @param origin the "Origin" header to set
	 * @param protocols list of
	 *   protocols to offer
	 * @param supported_extensions list
	 *   of supported extension types
	 */
	function websocket_client_prepare_handshake(msg: Message, origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): void;
	/**
	 * Looks at the response status code and headers in #msg and
	 * determines if they contain a valid WebSocket handshake response
	 * (given the handshake request in #msg's request headers).
	 * 
	 * If #supported_extensions is non-%NULL, extensions included in the
	 * response "Sec-WebSocket-Extensions" are verified too. Accepted
	 * extensions are returned in #accepted_extensions parameter if non-%NULL.
	 * 
	 * This is a low-level function; if you use
	 * [method#Session.websocket_connect_async] to create a WebSocket
	 * connection, it will call this for you.
	 * @param msg {@link Message} containing both client and server sides of a
	 *   WebSocket handshake
	 * @param supported_extensions list
	 *   of supported extension types
	 * @returns %TRUE if #msg contains a completed valid WebSocket
	 *   handshake, %FALSE and an error if not.
	 * 
	 * a
	 *   #GList of {@link WebsocketExtension} objects
	 */
	function websocket_client_verify_handshake(msg: Message, supported_extensions: GObject.TypeClass[] | null): [ boolean, WebsocketExtension[] | null ];
	/**
	 * Registers error quark for SoupWebsocket if needed.
	 * @returns Error quark for SoupWebsocket.
	 */
	function websocket_error_quark(): GLib.Quark;
	/**
	 * Examines the method and request headers in #msg and determines
	 * whether #msg contains a valid handshake request.
	 * 
	 * If #origin is non-%NULL, then only requests containing a matching
	 * "Origin" header will be accepted. If #protocols is non-%NULL, then
	 * only requests containing a compatible "Sec-WebSocket-Protocols"
	 * header will be accepted. If #supported_extensions is non-%NULL, then
	 * only requests containing valid supported extensions in
	 * "Sec-WebSocket-Extensions" header will be accepted.
	 * 
	 * Normally [func#websocket_server_process_handshake]
	 * will take care of this for you, and if you use
	 * [method#Server.add_websocket_handler] to handle accepting WebSocket
	 * connections, it will call that for you. However, this function may
	 * be useful if you need to perform more complicated validation; eg,
	 * accepting multiple different Origins, or handling different protocols
	 * depending on the path.
	 * @param msg {@link ServerMessage} containing the client side of a WebSocket handshake
	 * @param origin expected Origin header
	 * @param protocols allowed WebSocket
	 *   protocols.
	 * @param supported_extensions list
	 *   of supported extension types
	 * @returns %TRUE if #msg contained a valid WebSocket handshake,
	 *   %FALSE and an error if not.
	 */
	function websocket_server_check_handshake(msg: ServerMessage, origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): boolean;
	/**
	 * Examines the method and request headers in #msg and (assuming #msg
	 * contains a valid handshake request), fills in the handshake
	 * response.
	 * 
	 * If #expected_origin is non-%NULL, then only requests containing a matching
	 * "Origin" header will be accepted. If #protocols is non-%NULL, then
	 * only requests containing a compatible "Sec-WebSocket-Protocols"
	 * header will be accepted. If #supported_extensions is non-%NULL, then
	 * only requests containing valid supported extensions in
	 * "Sec-WebSocket-Extensions" header will be accepted. The accepted extensions
	 * will be returned in #accepted_extensions parameter if non-%NULL.
	 * 
	 * This is a low-level function; if you use
	 * [method#Server.add_websocket_handler] to handle accepting WebSocket
	 * connections, it will call this for you.
	 * @param msg {@link ServerMessage} containing the client side of a WebSocket handshake
	 * @param expected_origin expected Origin header
	 * @param protocols allowed WebSocket
	 *   protocols.
	 * @param supported_extensions list
	 *   of supported extension types
	 * @returns %TRUE if #msg contained a valid WebSocket handshake
	 *   request and was updated to contain a handshake response. %FALSE if not.
	 * 
	 * a
	 *   #GList of {@link WebsocketExtension} objects
	 */
	function websocket_server_process_handshake(msg: ServerMessage, expected_origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): [ boolean, WebsocketExtension[] | null ];
	/**
	 * A constant corresponding to 1 day.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 * @returns A constant corresponding to 1 day.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 */
	const COOKIE_MAX_AGE_ONE_DAY: number;

	/**
	 * A constant corresponding to 1 hour.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 * @returns A constant corresponding to 1 hour.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 */
	const COOKIE_MAX_AGE_ONE_HOUR: number;

	/**
	 * A constant corresponding to 1 week.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 * @returns A constant corresponding to 1 week.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 */
	const COOKIE_MAX_AGE_ONE_WEEK: number;

	/**
	 * A constant corresponding to 1 year.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 * @returns A constant corresponding to 1 year.
	 * 
	 * For use with [ctor#Cookie.new] and [method#Cookie.set_max_age].
	 */
	const COOKIE_MAX_AGE_ONE_YEAR: number;

	/**
	 * A macro containing the value
	 * `multipart/form-data`; the MIME type used for
	 * posting form data that contains files to be uploaded.
	 * @returns A macro containing the value
	 * `multipart/form-data`; the MIME type used for
	 * posting form data that contains files to be uploaded.
	 */
	const FORM_MIME_TYPE_MULTIPART: string;

	/**
	 * A macro containing the value
	 * `application/x-www-form-urlencoded`; the default
	 * MIME type for POSTing HTML form data.
	 * @returns A macro containing the value
	 * `application/x-www-form-urlencoded`; the default
	 * MIME type for POSTing HTML form data.
	 */
	const FORM_MIME_TYPE_URLENCODED: string;

	/**
	 * An expiration date that is always in the past.
	 * @returns An expiration date that is always in the past.
	 */
	const HSTS_POLICY_MAX_AGE_PAST: number;

	/**
	 * The set of #GUriFlags libsoup expects all #GUri to use.
	 * @returns The set of #GUriFlags libsoup expects all #GUri to use.
	 */
	const HTTP_URI_FLAGS: number;

	/**
	 * Like [func#get_major_version], but from the headers used at application
	 * compile time, rather than from the library linked against at application run
	 * time.
	 * @returns Like [func#get_major_version], but from the headers used at application
	 * compile time, rather than from the library linked against at application run
	 * time.
	 */
	const MAJOR_VERSION: number;

	/**
	 * Like [func#get_micro_version], but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 * @returns Like [func#get_micro_version], but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 */
	const MICRO_VERSION: number;

	/**
	 * Like [func#get_minor_version], but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 * @returns Like [func#get_minor_version], but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 */
	const MINOR_VERSION: number;

	/**
	 * A macro that should be defined by the user prior to including
	 * `libsoup.h`.
	 * 
	 * The definition should be one of the predefined libsoup
	 * version macros: %SOUP_VERSION_2_24, %SOUP_VERSION_2_26, ...
	 * 
	 * This macro defines the earliest version of libsoup that the package
	 * is required to be able to compile against.
	 * 
	 * If the compiler is configured to warn about the use of deprecated
	 * functions, then using functions that were deprecated in version
	 * %SOUP_VERSION_MIN_REQUIRED or earlier will cause warnings (but
	 * using functions deprecated in later releases will not).
	 * @returns A macro that should be defined by the user prior to including
	 * `libsoup.h`.
	 * 
	 * The definition should be one of the predefined libsoup
	 * version macros: %SOUP_VERSION_2_24, %SOUP_VERSION_2_26, ...
	 * 
	 * This macro defines the earliest version of libsoup that the package
	 * is required to be able to compile against.
	 * 
	 * If the compiler is configured to warn about the use of deprecated
	 * functions, then using functions that were deprecated in version
	 * %SOUP_VERSION_MIN_REQUIRED or earlier will cause warnings (but
	 * using functions deprecated in later releases will not).
	 */
	const VERSION_MIN_REQUIRED: number;

}