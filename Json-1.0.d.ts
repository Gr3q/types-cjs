/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Json {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Builder} instead.
	 */
	interface IBuilder {
		/**
		 * Whether the tree should be immutable when created.
		 * 
		 * Making the output immutable on creation avoids the expense
		 * of traversing it to make it immutable later.
		 */
		immutable: boolean;
		/**
		 * Adds a boolean value to the currently open object member or array.
		 * 
		 * If called after [method#Json.Builder.set_member_name], sets the given value
		 * as the value of the current member in the open object; otherwise, the value
		 * is appended to the elements of the open array.
		 * 
		 * See also: [method#Json.Builder.add_value]
		 * @param value the value of the member or element
		 * @returns the builder instance
		 */
		add_boolean_value(value: boolean): Builder | null;
		/**
		 * Adds a floating point value to the currently open object member or array.
		 * 
		 * If called after [method#Json.Builder.set_member_name], sets the given value
		 * as the value of the current member in the open object; otherwise, the value
		 * is appended to the elements of the open array.
		 * 
		 * See also: [method#Json.Builder.add_value]
		 * @param value the value of the member or element
		 * @returns the builder instance
		 */
		add_double_value(value: number): Builder | null;
		/**
		 * Adds an integer value to the currently open object member or array.
		 * 
		 * If called after [method#Json.Builder.set_member_name], sets the given value
		 * as the value of the current member in the open object; otherwise, the value
		 * is appended to the elements of the open array.
		 * 
		 * See also: [method#Json.Builder.add_value]
		 * @param value the value of the member or element
		 * @returns the builder instance
		 */
		add_int_value(value: number): Builder | null;
		/**
		 * Adds a null value to the currently open object member or array.
		 * 
		 * If called after [method#Json.Builder.set_member_name], sets the given value
		 * as the value of the current member in the open object; otherwise, the value
		 * is appended to the elements of the open array.
		 * 
		 * See also: [method#Json.Builder.add_value]
		 * @returns the builder instance
		 */
		add_null_value(): Builder | null;
		/**
		 * Adds a boolean value to the currently open object member or array.
		 * 
		 * If called after [method#Json.Builder.set_member_name], sets the given value
		 * as the value of the current member in the open object; otherwise, the value
		 * is appended to the elements of the open array.
		 * 
		 * See also: [method#Json.Builder.add_value]
		 * @param value the value of the member or element
		 * @returns the builder instance
		 */
		add_string_value(value: string): Builder | null;
		/**
		 * Adds a value to the currently open object member or array.
		 * 
		 * If called after [method#Json.Builder.set_member_name], sets the given node
		 * as the value of the current member in the open object; otherwise, the node
		 * is appended to the elements of the open array.
		 * 
		 * The builder will take ownership of the node.
		 * @param node the value of the member or element
		 * @returns the builder instance
		 */
		add_value(node: Node): Builder | null;
		/**
		 * Opens an array inside the given builder.
		 * 
		 * You can add a new element to the array by using [method#Json.Builder.add_value].
		 * 
		 * Once you added all elements to the array, you must call
		 * [method#Json.Builder.end_array] to close the array.
		 * @returns the builder instance
		 */
		begin_array(): Builder | null;
		/**
		 * Opens an object inside the given builder.
		 * 
		 * You can add a new member to the object by using [method#Json.Builder.set_member_name],
		 * followed by [method#Json.Builder.add_value].
		 * 
		 * Once you added all members to the object, you must call [method#Json.Builder.end_object]
		 * to close the object.
		 * 
		 * If the builder is in an inconsistent state, this function will return `NULL`.
		 * @returns the builder instance
		 */
		begin_object(): Builder | null;
		/**
		 * Closes the array inside the given builder that was opened by the most
		 * recent call to [method#Json.Builder.begin_array].
		 * 
		 * This function cannot be called after [method#Json.Builder.set_member_name].
		 * @returns the builder instance
		 */
		end_array(): Builder | null;
		/**
		 * Closes the object inside the given builder that was opened by the most
		 * recent call to [method#Json.Builder.begin_object].
		 * 
		 * This function cannot be called after [method#Json.Builder.set_member_name].
		 * @returns the builder instance
		 */
		end_object(): Builder | null;
		/**
		 * Returns the root of the currently constructed tree.
		 * 
		 * if the build is incomplete (ie: if there are any opened objects, or any
		 * open object members and array elements) then this function will return
		 * `NULL`.
		 * @returns the root node
		 */
		get_root(): Node | null;
		/**
		 * Resets the state of the builder back to its initial state.
		 */
		reset(): void;
		/**
		 * Sets the name of the member in an object.
		 * 
		 * This function must be followed by of these functions:
		 * 
		 *  - [method#Json.Builder.add_value], to add a scalar value to the member
		 *  - [method#Json.Builder.begin_object], to add an object to the member
		 *  - [method#Json.Builder.begin_array], to add an array to the member
		 * 
		 * This function can only be called within an open object.
		 * @param member_name the name of the member
		 * @returns the builder instance
		 */
		set_member_name(member_name: string): Builder | null;
		connect(signal: "notify::immutable", callback: (owner: this, ...args: any) => void): number;

	}

	type BuilderInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IBuilder,
		"immutable">;

	export interface BuilderInitOptions extends BuilderInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Builder} instead.
	 */
	type BuilderMixin = IBuilder & GObject.Object;

	/**
	 * `JsonBuilder` provides an object for generating a JSON tree.
	 * 
	 * The root of the JSON tree can be either a [struct#Json.Object] or a [struct#Json.Array].
	 * Thus the first call must necessarily be either
	 * [method#Json.Builder.begin_object] or [method#Json.Builder.begin_array].
	 * 
	 * For convenience to language bindings, most `JsonBuilder` method return the
	 * instance, making it easy to chain function calls.
	 * 
	 * ## Using `JsonBuilder`
	 * 
	 * ```c
	 * g_autoptr(JsonBuilder) builder = json_builder_new ();
	 * 
	 * json_builder_begin_object (builder);
	 * 
	 * json_builder_set_member_name (builder, "url");
	 * json_builder_add_string_value (builder, "http://www.gnome.org/img/flash/two-thirty.png");
	 * 
	 * json_builder_set_member_name (builder, "size");
	 * json_builder_begin_array (builder);
	 * json_builder_add_int_value (builder, 652);
	 * json_builder_add_int_value (builder, 242);
	 * json_builder_end_array (builder);
	 * 
	 * json_builder_end_object (builder);
	 * 
	 * g_autoptr(JsonNode) root = json_builder_get_root (builder);
	 * 
	 * g_autoptr(JsonGenerator) gen = json_generator_new ();
	 * json_generator_set_root (gen, root);
	 * g_autofree char *str = json_generator_to_data (gen, NULL);
	 * 
	 * // str now contains the following JSON data
	 * // { "url" : "http://www.gnome.org/img/flash/two-thirty.png", "size" : [ 652, 242 ] }
	 * ```
	 */
	interface Builder extends BuilderMixin {}

	class Builder {
		public constructor(options?: Partial<BuilderInitOptions>);
		/**
		 * Creates a new `JsonBuilder`.
		 * 
		 * You can use this object to generate a JSON tree and obtain the root node.
		 * @returns the newly created builder instance
		 */
		public static new(): Builder;
		/**
		 * Creates a new, immutable `JsonBuilder` instance.
		 * 
		 * It is equivalent to setting the [property#Json.Builder:immutable] property
		 * set to `TRUE` at construction time.
		 * @returns the newly create builder instance
		 */
		public static new_immutable(): Builder;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Generator} instead.
	 */
	interface IGenerator {
		/**
		 * Number of spaces to be used to indent when pretty printing.
		 */
		indent: number;
		/**
		 * The character that should be used when indenting in pretty print.
		 */
		indent_char: number;
		/**
		 * Whether the output should be "pretty-printed", with indentation and
		 * newlines.
		 * 
		 * The indentation level can be controlled by using the
		 * [property#Json.Generator:indent] property.
		 */
		pretty: boolean;
		/**
		 * The root node to be used when constructing a JSON data
		 * stream.
		 */
		root: Node;
		/**
		 * Retrieves the value set using [method#Json.Generator.set_indent].
		 * @returns the number of repetitions per indentation level
		 */
		get_indent(): number;
		/**
		 * Retrieves the value set using [method#Json.Generator.set_indent_char].
		 * @returns the character to be used when indenting
		 */
		get_indent_char(): string;
		/**
		 * Retrieves the value set using [method#Json.Generator.set_pretty].
		 * @returns `TRUE` if the generated JSON should be pretty-printed, and
		 *   `FALSE` otherwise
		 */
		get_pretty(): boolean;
		/**
		 * Retrieves a pointer to the root node set using
		 * [method#Json.Generator.set_root].
		 * @returns the root node
		 */
		get_root(): Node | null;
		/**
		 * Sets the number of repetitions for each indentation level.
		 * @param indent_level the number of repetitions of the indentation character
		 *   that should be applied when pretty printing
		 */
		set_indent(indent_level: number): void;
		/**
		 * Sets the character to be used when indenting.
		 * @param indent_char a Unicode character to be used when indenting
		 */
		set_indent_char(indent_char: string): void;
		/**
		 * Sets whether the generated JSON should be pretty printed.
		 * 
		 * Pretty printing will use indentation character specified in the
		 * [property#Json.Generator:indent-char] property and the spacing
		 * specified in the [property#Json.Generator:indent] property.
		 * @param is_pretty whether the generated string should be pretty printed
		 */
		set_pretty(is_pretty: boolean): void;
		/**
		 * Sets the root of the JSON data stream to be serialized by
		 * the given generator.
		 * 
		 * The passed `node` is copied by the generator object, so it can be
		 * safely freed after calling this function.
		 * @param node the root node
		 */
		set_root(node: Node): void;
		/**
		 * Generates a JSON data stream from #generator and returns it as a
		 * buffer.
		 * @returns a newly allocated string holding a JSON data stream
		 * 
		 * return location for the length of the returned
		 *   buffer
		 */
		to_data(): [ string, number | null ];
		/**
		 * Creates a JSON data stream and puts it inside `filename`, overwriting
		 * the file's current contents.
		 * 
		 * This operation is atomic, in the sense that the data is written to a
		 * temporary file which is then renamed to the given `filename`.
		 * @param filename the path to the target file
		 * @returns %TRUE if saving was successful.
		 */
		to_file(filename: string): boolean;
		/**
		 * Generates a JSON data stream and appends it to the string buffer.
		 * @param string a string buffer
		 * @returns the passed string, updated with
		 *   the generated JSON data
		 */
		to_gstring(string: GLib.String): GLib.String;
		/**
		 * Outputs JSON data and writes it (synchronously) to the given stream.
		 * @param stream the output stream used to write the JSON data
		 * @param cancellable a `GCancellable`
		 * @returns whether the write operation was successful
		 */
		to_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): boolean;
		connect(signal: "notify::indent", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::indent-char", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::pretty", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::root", callback: (owner: this, ...args: any) => void): number;

	}

	type GeneratorInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IGenerator,
		"indent" |
		"indent_char" |
		"pretty" |
		"root">;

	export interface GeneratorInitOptions extends GeneratorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Generator} instead.
	 */
	type GeneratorMixin = IGenerator & GObject.Object;

	/**
	 * `JsonGenerator` provides an object for generating a JSON data stream
	 * from a tree of [struct#Json.Node] instances, and put it into a buffer
	 * or a file.
	 */
	interface Generator extends GeneratorMixin {}

	class Generator {
		public constructor(options?: Partial<GeneratorInitOptions>);
		/**
		 * Creates a new `JsonGenerator`.
		 * 
		 * You can use this object to generate a JSON data stream starting from a
		 * data object model composed by [struct#Json.Node]s.
		 * @returns the newly created generator instance
		 */
		public static new(): Generator;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Parser} instead.
	 */
	interface IParser {
		/**
		 * Whether the tree built by the parser should be immutable
		 * when created.
		 * 
		 * Making the output immutable on creation avoids the expense
		 * of traversing it to make it immutable later.
		 */
		immutable: boolean;
		/**
		 * Retrieves the line currently parsed, starting from 1.
		 * 
		 * This function has defined behaviour only while parsing; calling this
		 * function from outside the signal handlers emitted by the parser will
		 * yield 0.
		 * @returns the currently parsed line, or 0.
		 */
		get_current_line(): number;
		/**
		 * Retrieves the current position inside the current line, starting
		 * from 0.
		 * 
		 * This function has defined behaviour only while parsing; calling this
		 * function from outside the signal handlers emitted by the parser will
		 * yield 0.
		 * @returns the position in the current line, or 0.
		 */
		get_current_pos(): number;
		/**
		 * Retrieves the top level node from the parsed JSON stream.
		 * 
		 * If the parser input was an empty string, or if parsing failed, the root
		 * will be `NULL`. It will also be `NULL` if it has been stolen using
		 * [method#Json.Parser.steal_root].
		 * @returns the root node.
		 */
		get_root(): Node | null;
		/**
		 * A JSON data stream might sometimes contain an assignment, like:
		 * 
		 * ```
		 * var _json_data = { "member_name" : [ ...
		 * ```
		 * 
		 * even though it would technically constitute a violation of the RFC.
		 * 
		 * `JsonParser` will ignore the left hand identifier and parse the right
		 * hand value of the assignment. `JsonParser` will record, though, the
		 * existence of the assignment in the data stream and the variable name
		 * used.
		 * @returns `TRUE` if there was an assignment, and `FALSE` otherwise
		 * 
		 * the variable name
		 */
		has_assignment(): [ boolean, string | null ];
		/**
		 * Loads a JSON stream from a buffer and parses it.
		 * 
		 * You can call this function multiple times with the same parser, but the
		 * contents of the parser will be destroyed each time.
		 * @param data the buffer to parse
		 * @param length the length of the buffer, or -1 if it is `NUL` terminated
		 * @returns `TRUE` if the buffer was succesfully parsed
		 */
		load_from_data(data: string, length: number): boolean;
		/**
		 * Loads a JSON stream from the content of `filename` and parses it.
		 * 
		 * If the file is large or shared between processes,
		 * [method#Json.Parser.load_from_mapped_file] may be a more efficient
		 * way to load it.
		 * 
		 * See also: [method#Json.Parser.load_from_data]
		 * @param filename the path for the file to parse
		 * @returns `TRUE` if the file was successfully loaded and parsed.
		 */
		load_from_file(filename: string): boolean;
		/**
		 * Loads a JSON stream from the content of `filename` and parses it.
		 * 
		 * Unlike [method#Json.Parser.load_from_file], `filename` will be memory
		 * mapped as read-only and parsed. `filename` will be unmapped before this
		 * function returns.
		 * 
		 * If mapping or reading the file fails, a `G_FILE_ERROR` will be returned.
		 * @param filename the path for the file to parse
		 * @returns `TRUE` if the file was successfully loaded and parsed.
		 */
		load_from_mapped_file(filename: string): boolean;
		/**
		 * Loads the contents of an input stream and parses them.
		 * 
		 * If `cancellable` is not `NULL`, then the operation can be cancelled by
		 * triggering the cancellable object from another thread. If the
		 * operation was cancelled, `G_IO_ERROR_CANCELLED` will be set
		 * on the given `error`.
		 * @param stream the input stream with the JSON data
		 * @param cancellable a #GCancellable
		 * @returns `TRUE` if the data stream was successfully read and
		 *   parsed, and `FALSE` otherwise
		 */
		load_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
		/**
		 * Asynchronously reads the contents of a stream.
		 * 
		 * For more details, see [method#Json.Parser.load_from_stream], which is the
		 * synchronous version of this call.
		 * 
		 * When the operation is finished, #callback will be called. You should
		 * then call [method#Json.Parser.load_from_stream_finish] to get the result
		 * of the operation.
		 * @param stream the input stream with the JSON data
		 * @param cancellable a #GCancellable
		 * @param callback the function to call when the request is satisfied
		 */
		load_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finishes an asynchronous stream loading started with
		 * [method#Json.Parser.load_from_stream_async].
		 * @param result the result of the asynchronous operation
		 * @returns `TRUE` if the content of the stream was successfully retrieved
		 *   and parsed, and `FALSE` otherwise
		 */
		load_from_stream_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Steals the top level node from the parsed JSON stream.
		 * 
		 * This will be `NULL` in the same situations as [method#Json.Parser.get_root]
		 * return `NULL`.
		 * @returns the root node
		 */
		steal_root(): Node | null;
		/**
		 * The `::array-element` signal is emitted each time a parser
		 * has successfully parsed a single element of a JSON array.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - array: a JSON array 
		 *  - index_: the index of the newly parsed array element 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "array-element", callback: (owner: this, array: Array, index_: number) => void): number;
		/**
		 * The `::array-end` signal is emitted each time a parser
		 * has successfully parsed an entire JSON array.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - array: the parsed JSON array 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "array-end", callback: (owner: this, array: Array) => void): number;
		/**
		 * The `::array-start` signal is emitted each time a parser
		 * starts parsing a JSON array.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "array-start", callback: (owner: this) => void): number;
		/**
		 * The `::error` signal is emitted each time a parser encounters
		 * an error in a JSON stream.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - error: the error 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "error", callback: (owner: this, error: any | null) => void): number;
		/**
		 * The `::object-end` signal is emitted each time a parser
		 * has successfully parsed an entire JSON object.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - object: the parsed JSON object 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "object-end", callback: (owner: this, object: Object) => void): number;
		/**
		 * The `::object-member` signal is emitted each time a parser
		 * has successfully parsed a single member of a JSON object
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - object: the JSON object being parsed 
		 *  - member_name: the name of the newly parsed member 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "object-member", callback: (owner: this, object: Object, member_name: string) => void): number;
		/**
		 * This signal is emitted each time a parser starts parsing a JSON object.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "object-start", callback: (owner: this) => void): number;
		/**
		 * This signal is emitted when a parser successfully finished parsing a
		 * JSON data stream
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "parse-end", callback: (owner: this) => void): number;
		/**
		 * This signal is emitted when a parser starts parsing a JSON data stream.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "parse-start", callback: (owner: this) => void): number;

		connect(signal: "notify::immutable", callback: (owner: this, ...args: any) => void): number;

	}

	type ParserInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IParser,
		"immutable">;

	export interface ParserInitOptions extends ParserInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Parser} instead.
	 */
	type ParserMixin = IParser & GObject.Object;

	/**
	 * `JsonParser` provides an object for parsing a JSON data stream, either
	 * inside a file or inside a static buffer.
	 * 
	 * ## Using `JsonParser`
	 * 
	 * The `JsonParser` API is fairly simple:
	 * 
	 * ```c
	 * gboolean
	 * parse_json (const char *filename)
	 * {
	 *   g_autoptr(JsonParser) parser = json_parser_new ();
	 *   g_autoptr(GError) error = NULL
	 * 
	 *   json_parser_load_from_file (parser, filename, &error);
	 *   if (error != NULL)
	 *     {
	 *       g_critical ("Unable to parse '%s': %s", filename, error->message);
	 *       return FALSE;
	 *     }
	 * 
	 *   g_autoptr(JsonNode) root = json_parser_get_root (parser);
	 * 
	 *   // manipulate the object tree from the root node
	 * 
	 *   return TRUE
	 * }
	 * ```
	 * 
	 * By default, the entire process of loading the data and parsing it is
	 * synchronous; the {@link [method#Json.Parser.load.from_stream_async}] API will
	 * load the data asynchronously, but parse it in the main context as the
	 * signals of the parser must be emitted in the same thread. If you do
	 * not use signals, and you wish to also parse the JSON data without blocking,
	 * you should use a `GTask` and the synchronous `JsonParser` API inside the
	 * task itself.
	 */
	interface Parser extends ParserMixin {}

	class Parser {
		public constructor(options?: Partial<ParserInitOptions>);
		/**
		 * Creates a new JSON parser.
		 * 
		 * You can use the `JsonParser` to load a JSON stream from either a file or a
		 * buffer and then walk the hierarchy using the data types API.
		 * @returns the newly created parser
		 */
		public static new(): Parser;
		/**
		 * Creates a new parser instance with its [property#Json.Parser:immutable]
		 * property set to `TRUE` to create immutable output trees.
		 * @returns the newly created parser
		 */
		public static new_immutable(): Parser;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Path} instead.
	 */
	interface IPath {
		/**
		 * Validates and decomposes the given expression.
		 * 
		 * A JSONPath expression must be compiled before calling
		 * [method#Json.Path.match].
		 * @param expression a JSONPath expression
		 * @returns `TRUE` if the compilation was successful, and `FALSE`
		 *   otherwise
		 */
		compile(expression: string): boolean;
		/**
		 * Matches the JSON tree pointed by `root` using the expression compiled
		 * into the `JsonPath`.
		 * 
		 * The nodes matching the expression will be copied into an array.
		 * @param root the root node of the JSON data to match
		 * @returns a newly-created node of type
		 *   `JSON_NODE_ARRAY` containing the array of matching nodes
		 */
		match(root: Node): Node;
	}

	type PathInitOptionsMixin = GObject.ObjectInitOptions
	export interface PathInitOptions extends PathInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Path} instead.
	 */
	type PathMixin = IPath & GObject.Object;

	/**
	 * `JsonPath` is a simple class implementing the JSONPath syntax for extracting
	 * data out of a JSON tree.
	 * 
	 * While the semantics of the JSONPath expressions are heavily borrowed by the
	 * XPath specification for XML, the syntax follows the ECMAScript origins of
	 * JSON.
	 * 
	 * Once a `JsonPath` instance has been created, it has to compile a JSONPath
	 * expression using [method#Json.Path.compile] before being able to match it to
	 * a JSON tree; the same `JsonPath` instance can be used to match multiple JSON
	 * trees. It it also possible to compile a new JSONPath expression using the
	 * same `JsonPath` instance; the previous expression will be discarded only if
	 * the compilation of the new expression is successful.
	 * 
	 * The simple convenience function [func#Json.Path.query] can be used for
	 * one-off matching.
	 * 
	 * ## Syntax of the JSONPath expressions
	 * 
	 * A JSONPath expression is composed by path indices and operators.
	 * Each path index can either be a member name or an element index inside
	 * a JSON tree. A JSONPath expression must start with the `$` operator; each
	 * path index is separated using either the dot notation or the bracket
	 * notation, e.g.:
	 * 
	 * ```
	 * // dot notation
	 * $.store.book[0].title
	 * 
	 * // bracket notation
	 * $['store']['book'][0]['title']
	 * ```
	 * 
	 * The available operators are:
	 * 
	 * * The `$` character represents the root node of the JSON tree, and
	 *   matches the entire document.
	 * 
	 * * Child nodes can either be matched using `.` or `[]`. For instance,
	 *   both `$.store.book` and `$['store']['book']` match the contents of
	 *   the book member of the store object.
	 * 
	 * * Child nodes can be reached without specifying the whole tree structure
	 *   through the recursive descent operator, or `..`. For instance,
	 *   `$..author` matches all author member in every object.
	 * 
	 * * Child nodes can grouped through the wildcard operator, or `*`. For
	 *   instance, `$.store.book[*].author` matches all author members of any
	 *   object element contained in the book array of the store object.
	 * 
	 * * Element nodes can be accessed using their index (starting from zero)
	 *   in the subscript operator `[]`. For instance, `$.store.book[0]` matches
	 *   the first element of the book array of the store object.
	 * 
	 * * Subsets of element nodes can be accessed using the set notation
	 *   operator `[i,j,...]`. For instance, `$.store.book[0,2]` matches the
	 *   elements 0 and 2 (the first and third) of the book array of the store
	 *   object.
	 * 
	 * * Slices of element nodes can be accessed using the slice notation
	 *   operation `[start:end:step]`. If start is omitted, the starting index
	 *   of the slice is implied to be zero; if end is omitted, the ending index
	 *   of the slice is implied to be the length of the array; if step is
	 *   omitted, the step of the slice is implied to be 1. For instance,
	 *   `$.store.book[:2]` matches the first two elements of the book array
	 *   of the store object.
	 * 
	 * More information about JSONPath is available on Stefan Gössner's
	 * [JSONPath website](http://goessner.net/articles/JsonPath/).
	 * 
	 * ## Example of JSONPath matches
	 * 
	 * The following example shows some of the results of using `JsonPath`
	 * on a JSON tree. We use the following JSON description of a bookstore:
	 * 
	 * ```json
	 * { "store": {
	 *     "book": [
	 *       { "category": "reference", "author": "Nigel Rees",
	 *         "title": "Sayings of the Century", "price": "8.95"  },
	 *       { "category": "fiction", "author": "Evelyn Waugh",
	 *         "title": "Sword of Honour", "price": "12.99" },
	 *       { "category": "fiction", "author": "Herman Melville",
	 *         "title": "Moby Dick", "isbn": "0-553-21311-3",
	 *         "price": "8.99" },
	 *       { "category": "fiction", "author": "J. R. R. Tolkien",
	 *         "title": "The Lord of the Rings", "isbn": "0-395-19395-8",
	 *         "price": "22.99" }
	 *     ],
	 *     "bicycle": { "color": "red", "price": "19.95" }
	 *   }
	 * }
	 * ```
	 * 
	 * We can parse the JSON using [class#Json.Parser]:
	 * 
	 * ```c
	 * JsonParser *parser = json_parser_new ();
	 * json_parser_load_from_data (parser, json_data, -1, NULL);
	 * ```
	 * 
	 * If we run the following code:
	 * 
	 * ```c
	 * JsonNode *result;
	 * JsonPath *path = json_path_new ();
	 * json_path_compile (path, "$.store..author", NULL);
	 * result = json_path_match (path, json_parser_get_root (parser));
	 * ```
	 * 
	 * The `result` node will contain an array with all values of the
	 * author member of the objects in the JSON tree. If we use a
	 * [class#Json.Generator] to convert the `result` node to a string
	 * and print it:
	 * 
	 * ```c
	 * JsonGenerator *generator = json_generator_new ();
	 * json_generator_set_root (generator, result);
	 * char *str = json_generator_to_data (generator, NULL);
	 * g_print ("Results: %s\n", str);
	 * ```
	 * 
	 * The output will be:
	 * 
	 * ```json
	 * ["Nigel Rees","Evelyn Waugh","Herman Melville","J. R. R. Tolkien"]
	 * ```
	 */
	interface Path extends PathMixin {}

	class Path {
		public constructor(options?: Partial<PathInitOptions>);
		/**
		 * Creates a new `JsonPath` instance.
		 * 
		 * Once created, the `JsonPath` object should be used with
		 * [method#Json.Path.compile] and [method#Json.Path.match].
		 * @returns the newly created path
		 */
		public static new(): Path;
		/**
		 * Queries a JSON tree using a JSONPath expression.
		 * 
		 * This function is a simple wrapper around [ctor#Json.Path.new],
		 * [method#Json.Path.compile], and [method#Json.Path.match]. It implicitly
		 * creates a `JsonPath` instance, compiles the given expression and matches
		 * it against the JSON tree pointed by `root`.
		 * @param expression a JSONPath expression
		 * @param root the root of a JSON tree
		 * @returns a newly-created node of type
		 *   `JSON_NODE_ARRAY` containing the array of matching nodes
		 */
		public static query(expression: string, root: Node): Node;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Reader} instead.
	 */
	interface IReader {
		/**
		 * The root of the JSON tree that the reader should read.
		 */
		root: Node;
		/**
		 * Counts the elements of the current position, if the reader is
		 * positioned on an array.
		 * 
		 * In case of failure, the reader is set to an error state.
		 * @returns the number of elements, or -1.
		 */
		count_elements(): number;
		/**
		 * Counts the members of the current position, if the reader is
		 * positioned on an object.
		 * 
		 * In case of failure, the reader is set to an error state.
		 * @returns the number of members, or -1
		 */
		count_members(): number;
		/**
		 * Moves the cursor back to the previous node after being positioned
		 * inside an array.
		 * 
		 * This function resets the error state of the reader, if any was set.
		 */
		end_element(): void;
		/**
		 * Moves the cursor back to the previous node after being positioned
		 * inside an object.
		 * 
		 * This function resets the error state of the reader, if any was set.
		 */
		end_member(): void;
		/**
		 * Retrieves the boolean value of the current position of the reader.
		 * 
		 * See also: [method#Json.Reader.get_value]
		 * @returns the boolean value
		 */
		get_boolean_value(): boolean;
		/**
		 * Retrieves the reader node at the current position.
		 * @returns the current node of the reader
		 */
		get_current_node(): Node | null;
		/**
		 * Retrieves the floating point value of the current position of the reader.
		 * 
		 * See also: [method#Json.Reader.get_value]
		 * @returns the floating point value
		 */
		get_double_value(): number;
		/**
		 * Retrieves the error currently set on the reader.
		 * @returns the current error
		 */
		get_error(): GLib.Error | null;
		/**
		 * Retrieves the integer value of the current position of the reader.
		 * 
		 * See also: [method#Json.Reader.get_value]
		 * @returns the integer value
		 */
		get_int_value(): number;
		/**
		 * Retrieves the name of the current member.
		 * 
		 * In case of failure, the reader is set to an error state.
		 * @returns the name of the member
		 */
		get_member_name(): string | null;
		/**
		 * Checks whether the value of the current position of the reader is `null`.
		 * 
		 * See also: [method#Json.Reader.get_value]
		 * @returns `TRUE` if `null` is set, and `FALSE` otherwise
		 */
		get_null_value(): boolean;
		/**
		 * Retrieves the string value of the current position of the reader.
		 * 
		 * See also: [method#Json.Reader.get_value]
		 * @returns the string value
		 */
		get_string_value(): string;
		/**
		 * Retrieves the value node at the current position of the reader.
		 * 
		 * If the current position does not contain a scalar value, the reader
		 * is set to an error state.
		 * @returns the current value node
		 */
		get_value(): Node | null;
		/**
		 * Checks whether the reader is currently on an array.
		 * @returns `TRUE` if the reader is on an array
		 */
		is_array(): boolean;
		/**
		 * Checks whether the reader is currently on an object.
		 * @returns `TRUE` if the reader is on an object
		 */
		is_object(): boolean;
		/**
		 * Checks whether the reader is currently on a value.
		 * @returns `TRUE` if the reader is on a value
		 */
		is_value(): boolean;
		/**
		 * Retrieves a list of member names from the current position, if the reader
		 * is positioned on an object.
		 * 
		 * In case of failure, the reader is set to an error state.
		 * @returns the members of
		 *   the object
		 */
		list_members(): string[];
		/**
		 * Advances the cursor of the reader to the element of the array or
		 * the member of the object at the given position.
		 * 
		 * You can use [method#Json.Reader.get_value] and its wrapper functions to
		 * retrieve the value of the element; for instance, the following code will
		 * read the first element of the array at the current cursor position:
		 * 
		 * ```c
		 * json_reader_read_element (reader, 0);
		 * int_value = json_reader_get_int_value (reader);
		 * ```
		 * 
		 * After reading the value, you should call [method#Json.Reader.end_element]
		 * to reposition the cursor inside the reader, e.g.:
		 * 
		 * ```c
		 * const char *str_value = NULL;
		 * 
		 * json_reader_read_element (reader, 1);
		 * str_value = json_reader_get_string_value (reader);
		 * json_reader_end_element (reader);
		 * 
		 * json_reader_read_element (reader, 2);
		 * str_value = json_reader_get_string_value (reader);
		 * json_reader_end_element (reader);
		 * ```
		 * 
		 * If the reader is not currently on an array or an object, or if the index is
		 * bigger than the size of the array or the object, the reader will be
		 * put in an error state until [method#Json.Reader.end_element] is called. This
		 * means that, if used conditionally, [method#Json.Reader.end_element] must be
		 * called on all branches:
		 * 
		 * ```c
		 * if (!json_reader_read_element (reader, 1))
		 *   {
		 *     g_propagate_error (error, json_reader_get_error (reader));
		 *     json_reader_end_element (reader);
		 *     return FALSE;
		 *   }
		 * else
		 *   {
		 *     const char *str_value = json_reader_get_string_value (reader);
		 *     json_reader_end_element (reader);
		 * 
		 *     // use str_value
		 * 
		 *     return TRUE;
		 *   }
		 * ```c
		 * @param index_ the index of the element
		 * @returns `TRUE` on success, and `FALSE` otherwise
		 */
		read_element(index_: number): boolean;
		/**
		 * Advances the cursor of the reader to the `member_name` of the object at
		 * the current position.
		 * 
		 * You can use [method#Json.Reader.get_value] and its wrapper functions to
		 * retrieve the value of the member; for instance:
		 * 
		 * ```c
		 * json_reader_read_member (reader, "width");
		 * width = json_reader_get_int_value (reader);
		 * ```
		 * 
		 * After reading the value, {@link `json.reader_end_member}` should be called to
		 * reposition the cursor inside the reader, e.g.:
		 * 
		 * ```c
		 * json_reader_read_member (reader, "author");
		 * author = json_reader_get_string_value (reader);
		 * json_reader_end_member (reader);
		 * 
		 * json_reader_read_member (reader, "title");
		 * title = json_reader_get_string_value (reader);
		 * json_reader_end_member (reader);
		 * ```
		 * 
		 * If the reader is not currently on an object, or if the `member_name` is not
		 * defined in the object, the reader will be put in an error state until
		 * [method#Json.Reader.end_member] is called. This means that if used
		 * conditionally, [method#Json.Reader.end_member] must be called on all branches:
		 * 
		 * ```c
		 * if (!json_reader_read_member (reader, "title"))
		 *   {
		 *     g_propagate_error (error, json_reader_get_error (reader));
		 *     json_reader_end_member (reader);
		 *     return FALSE;
		 *   }
		 * else
		 *   {
		 *     const char *str_value = json_reader_get_string_value (reader);
		 *     json_reader_end_member (reader);
		 * 
		 *     // use str_value
		 * 
		 *     return TRUE;
		 *   }
		 * ```
		 * @param member_name the name of the member to read
		 * @returns `TRUE` on success, and `FALSE` otherwise
		 */
		read_member(member_name: string): boolean;
		/**
		 * Sets the root node of the JSON tree to be read by #reader.
		 * 
		 * The reader will take a copy of the node.
		 * @param root the root node
		 */
		set_root(root?: Node | null): void;
		connect(signal: "notify::root", callback: (owner: this, ...args: any) => void): number;

	}

	type ReaderInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IReader,
		"root">;

	export interface ReaderInitOptions extends ReaderInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Reader} instead.
	 */
	type ReaderMixin = IReader & GObject.Object;

	/**
	 * `JsonReader` provides a simple, cursor-based API for parsing a JSON DOM.
	 * 
	 * It is similar, in spirit, to the XML Reader API.
	 * 
	 * ## Using `JsonReader`
	 * 
	 * ```c
	 * g_autoptr(JsonParser) parser = json_parser_new ();
	 * 
	 * // str is defined elsewhere
	 * json_parser_load_from_data (parser, str, -1, NULL);
	 * 
	 * g_autoptr(JsonReader) reader = json_reader_new (json_parser_get_root (parser));
	 * 
	 * json_reader_read_member (reader, "url");
	 *   const char *url = json_reader_get_string_value (reader);
	 *   json_reader_end_member (reader);
	 * 
	 * json_reader_read_member (reader, "size");
	 *   json_reader_read_element (reader, 0);
	 *     int width = json_reader_get_int_value (reader);
	 *     json_reader_end_element (reader);
	 *   json_reader_read_element (reader, 1);
	 *     int height = json_reader_get_int_value (reader);
	 *     json_reader_end_element (reader);
	 *   json_reader_end_member (reader);
	 * ```
	 * 
	 * ## Error handling
	 * 
	 * In case of error, `JsonReader` will be set in an error state; all subsequent
	 * calls will simply be ignored until a function that resets the error state is
	 * called, e.g.:
	 * 
	 * ```c
	 * // ask for the 7th element; if the element does not exist, the
	 * // reader will be put in an error state
	 * json_reader_read_element (reader, 6);
	 * 
	 * // in case of error, this will return NULL, otherwise it will
	 * // return the value of the element
	 * str = json_reader_get_string_value (value);
	 * 
	 * // this function resets the error state if any was set
	 * json_reader_end_element (reader);
	 * ```
	 * 
	 * If you want to detect the error state as soon as possible, you can use
	 * [method#Json.Reader.get_error]:
	 * 
	 * ```c
	 * // like the example above, but in this case we print out the
	 * // error immediately
	 * if (!json_reader_read_element (reader, 6))
	 *   {
	 *     const GError *error = json_reader_get_error (reader);
	 *     g_print ("Unable to read the element: %s", error->message);
	 *   }
	 * ```
	 */
	interface Reader extends ReaderMixin {}

	class Reader {
		public constructor(options?: Partial<ReaderInitOptions>);
		/**
		 * Creates a new reader.
		 * 
		 * You can use this object to read the contents of the JSON tree starting
		 * from the given node.
		 * @param node the root node
		 * @returns the newly created reader
		 */
		public static new(node?: Node | null): Reader;
	}

	export interface ArrayInitOptions {}
	/**
	 * `JsonArray` is the representation of the array type inside JSON.
	 * 
	 * A `JsonArray` contains [struct#Json.Node] elements, which may contain
	 * fundamental types, other arrays or objects.
	 * 
	 * Since arrays can be arbitrarily big, copying them can be expensive; for
	 * this reason, they are reference counted. You can control the lifetime of
	 * a `JsonArray` using [method#Json.Array.ref] and [method#Json.Array.unref].
	 * 
	 * To append an element, use [method#Json.Array.add_element].
	 * 
	 * To extract an element at a given index, use [method#Json.Array.get_element].
	 * 
	 * To retrieve the entire array in list form, use [method#Json.Array.get_elements].
	 * 
	 * To retrieve the length of the array, use [method#Json.Array.get_length].
	 */
	interface Array {}
	class Array {
		public constructor(options?: Partial<ArrayInitOptions>);
		/**
		 * Creates a new array.
		 * @returns the newly created array
		 */
		public static new(): Array;
		/**
		 * Creates a new array with `n_elements` slots already allocated.
		 * @param n_elements number of slots to pre-allocate
		 * @returns the newly created array
		 */
		public static sized_new(n_elements: number): Array;
		/**
		 * Conveniently adds an array element into an array.
		 * 
		 * If `value` is `NULL`, a `null` element will be added instead.
		 * 
		 * See also: [method#Json.Array.add_element], [method#Json.Node.take_array]
		 * @param value the array to add
		 */
		public add_array_element(value?: Array | null): void;
		/**
		 * Conveniently adds the given boolean value into an array.
		 * 
		 * See also: [method#Json.Array.add_element], [method#Json.Node.set_boolean]
		 * @param value the boolean value to add
		 */
		public add_boolean_element(value: boolean): void;
		/**
		 * Conveniently adds the given floating point value into an array.
		 * 
		 * See also: [method#Json.Array.add_element], [method#Json.Node.set_double]
		 * @param value the floating point value to add
		 */
		public add_double_element(value: number): void;
		/**
		 * Appends the given `node` inside an array.
		 * @param node the element to add
		 */
		public add_element(node: Node): void;
		/**
		 * Conveniently adds the given integer value into an array.
		 * 
		 * See also: [method#Json.Array.add_element], [method#Json.Node.set_int]
		 * @param value the integer value to add
		 */
		public add_int_element(value: number): void;
		/**
		 * Conveniently adds a `null` element into an array
		 * 
		 * See also: [method#Json.Array.add_element], `JSON_NODE_NULL`
		 */
		public add_null_element(): void;
		/**
		 * Conveniently adds an object into an array.
		 * 
		 * If `value` is `NULL`, a `null` element will be added instead.
		 * 
		 * See also: [method#Json.Array.add_element], [method#Json.Node.take_object]
		 * @param value the object to add
		 */
		public add_object_element(value?: Object | null): void;
		/**
		 * Conveniently adds the given string value into an array.
		 * 
		 * See also: [method#Json.Array.add_element], [method#Json.Node.set_string]
		 * @param value the string value to add
		 */
		public add_string_element(value: string): void;
		/**
		 * Retrieves a copy of the element at the given position in the array.
		 * @param index_ the index of the element to retrieve
		 * @returns a copy of the element at the given position
		 */
		public dup_element(index_: number): Node;
		/**
		 * Check whether two arrays are equal.
		 * 
		 * Equality is defined as:
		 * 
		 *  - the array have the same number of elements
		 *  - the values of elements in corresponding positions are equal
		 * @param b another JSON array
		 * @returns `TRUE` if the arrays are equal, and `FALSE` otherwise
		 */
		public equal(b: Array): boolean;
		/**
		 * Iterates over all elements of an array, and calls a function on
		 * each one of them.
		 * 
		 * It is safe to change the value of an element of the array while
		 * iterating over it, but it is not safe to add or remove elements
		 * from the array.
		 * @param func the function to be called on each element
		 */
		public foreach_element(func: ArrayForeach): void;
		/**
		 * Conveniently retrieves the array at the given position inside an array.
		 * 
		 * See also: [method#Json.Array.get_element], [method#Json.Node.get_array]
		 * @param index_ the index of the element to retrieve
		 * @returns the array
		 */
		public get_array_element(index_: number): Array;
		/**
		 * Conveniently retrieves the boolean value of the element at the given
		 * position inside an array.
		 * 
		 * See also: [method#Json.Array.get_element], [method#Json.Node.get_boolean]
		 * @param index_ the index of the element to retrieve
		 * @returns the boolean value
		 */
		public get_boolean_element(index_: number): boolean;
		/**
		 * Conveniently retrieves the floating point value of the element at
		 * the given position inside an array.
		 * 
		 * See also: [method#Json.Array.get_element], [method#Json.Node.get_double]
		 * @param index_ the index of the element to retrieve
		 * @returns the floating point value
		 */
		public get_double_element(index_: number): number;
		/**
		 * Retrieves the element at the given position in the array.
		 * @param index_ the index of the element to retrieve
		 * @returns the element at the given position
		 */
		public get_element(index_: number): Node;
		/**
		 * Retrieves all the elements of an array as a list of nodes.
		 * @returns the elements
		 *   of the array
		 */
		public get_elements(): Node[] | null;
		/**
		 * Conveniently retrieves the integer value of the element at the given
		 * position inside an array.
		 * 
		 * See also: [method#Json.Array.get_element], [method#Json.Node.get_int]
		 * @param index_ the index of the element to retrieve
		 * @returns the integer value
		 */
		public get_int_element(index_: number): number;
		/**
		 * Retrieves the length of the given array
		 * @returns the length of the array
		 */
		public get_length(): number;
		/**
		 * Conveniently checks whether the element at the given position inside the
		 * array contains a `null` value.
		 * 
		 * See also: [method#Json.Array.get_element], [method#Json.Node.is_null]
		 * @param index_ the index of the element to retrieve
		 * @returns `TRUE` if the element is `null`
		 */
		public get_null_element(index_: number): boolean;
		/**
		 * Conveniently retrieves the object at the given position inside an array.
		 * 
		 * See also: [method#Json.Array.get_element], [method#Json.Node.get_object]
		 * @param index_ the index of the element to retrieve
		 * @returns the object
		 */
		public get_object_element(index_: number): Object;
		/**
		 * Conveniently retrieves the string value of the element at the given
		 * position inside an array.
		 * 
		 * See also: [method#Json.Array.get_element], [method#Json.Node.get_string]
		 * @param index_ the index of the element to retrieve
		 * @returns the string value
		 */
		public get_string_element(index_: number): string;
		/**
		 * Calculates a hash value for the given `key`.
		 * 
		 * The hash is calculated over the array and all its elements, recursively.
		 * 
		 * If the array is immutable, this is a fast operation; otherwise, it scales
		 * proportionally with the length of the array.
		 * @returns hash value for the key
		 */
		public hash(): number;
		/**
		 * Check whether the given `array` has been marked as immutable by calling
		 * [method#Json.Array.seal] on it.
		 * @returns %TRUE if the array is immutable
		 */
		public is_immutable(): boolean;
		/**
		 * Acquires a reference on the given array.
		 * @returns the passed array, with the reference count
		 *   increased by one
		 */
		public ref(): Array;
		/**
		 * Removes the element at the given position inside an array.
		 * 
		 * This function will release the reference held on the element.
		 * @param index_ the position of the element to be removed
		 */
		public remove_element(index_: number): void;
		/**
		 * Seals the given array, making it immutable to further changes.
		 * 
		 * This function will recursively seal all elements in the array too.
		 * 
		 * If the `array` is already immutable, this is a no-op.
		 */
		public seal(): void;
		/**
		 * Releases a reference on the given array.
		 * 
		 * If the reference count reaches zero, the array is destroyed and all
		 * its allocated resources are freed.
		 */
		public unref(): void;
	}

	export interface NodeInitOptions {}
	/**
	 * A generic container of JSON data types.
	 * 
	 * `JsonNode` can contain fundamental types (integers, booleans, floating point
	 * numbers, strings) and complex types (arrays and objects).
	 * 
	 * When parsing a JSON data stream you extract the root node and walk
	 * the node tree by retrieving the type of data contained inside the
	 * node with the `JSON_NODE_TYPE` macro. If the node contains a fundamental
	 * type you can retrieve a copy of the `GValue` holding it with the
	 * [method#Json.Node.get_value] function, and then use the `GValue` API to extract
	 * the data; if the node contains a complex type you can retrieve the
	 * [struct#Json.Object] or the [struct#Json.Array] using [method#Json.Node.get_object]
	 * or [method#Json.Node.get_array] respectively, and then retrieve the nodes
	 * they contain.
	 * 
	 * A `JsonNode` may be marked as immutable using [method#Json.Node.seal]. This
	 * marks the node and all its descendents as read-only, and means that
	 * subsequent calls to setter functions (such as [method#Json.Node.set_array])
	 * on them will abort as a programmer error. By marking a node tree as
	 * immutable, it may be referenced in multiple places and its hash value cached
	 * for fast lookups, without the possibility of a value deep within the tree
	 * changing and affecting hash values. Immutable nodes may be passed to
	 * functions which retain a reference to them without needing to take a copy.
	 * 
	 * A `JsonNode` supports two types of memory management: `malloc`/`free`
	 * semantics, and reference counting semantics. The two may be mixed to a
	 * limited extent: nodes may be allocated (which gives them a reference count
	 * of 1), referenced one or more times, unreferenced exactly that number of
	 * times (using [method#Json.Node.unref]), then either unreferenced exactly
	 * once more or freed (using [method#Json.Node.free]) to destroy them.
	 * The [method#Json.Node.free] function must not be used when a node might
	 * have a reference count not equal to 1. To this end, JSON-GLib uses
	 * [method#Json.Node.copy] and [method#Json.Node.unref] internally.
	 */
	interface Node {}
	class Node {
		public constructor(options?: Partial<NodeInitOptions>);
		/**
		 * Allocates a new, uninitialized node.
		 * 
		 * Use [method#Json.Node.init] and its variants to initialize the returned value.
		 * @returns the newly allocated node
		 */
		public static alloc(): Node;
		/**
		 * Creates a new node holding the given #type.
		 * 
		 * This is a convenience function for [ctor#Json.Node.alloc] and
		 * [method#Json.Node.init], and it's the equivalent of:
		 * 
		 * ```c
		 *    json_node_init (json_node_alloc (), type);
		 * ```
		 * @param type the type of the node to create
		 * @returns the newly created node
		 */
		public static new(type: NodeType): Node;
		/**
		 * Copies #node.
		 * 
		 * If the node contains complex data types, their reference
		 * counts are increased, regardless of whether the node is mutable or
		 * immutable.
		 * 
		 * The copy will be immutable if, and only if, #node is immutable. However,
		 * there should be no need to copy an immutable node.
		 * @returns the copied of the given node
		 */
		public copy(): Node;
		/**
		 * Retrieves the JSON array inside #node.
		 * 
		 * The reference count of the returned array is increased.
		 * 
		 * It is a programmer error to call this on a node which doesn’t hold an
		 * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
		 * @returns the JSON array with its reference
		 *   count increased.
		 */
		public dup_array(): Array | null;
		/**
		 * Retrieves the object inside #node.
		 * 
		 * The reference count of the returned object is increased.
		 * 
		 * It is a programmer error to call this on a node which doesn’t hold an
		 * object value. Use `JSON_NODE_HOLDS_OBJECT` first.
		 * @returns the JSON object
		 */
		public dup_object(): Object | null;
		/**
		 * Gets a copy of the string value stored inside a node.
		 * 
		 * If the node does not hold a string value, `NULL` is returned.
		 * @returns a copy of the string
		 *   inside the node
		 */
		public dup_string(): string | null;
		/**
		 * Check whether #a and #b are equal node, meaning they have the same
		 * type and same values (checked recursively).
		 * 
		 * Note that integer values are compared numerically, ignoring type, so a
		 * double value 4.0 is equal to the integer value 4.
		 * @param b another JSON node
		 * @returns `TRUE` if #a and #b are equal; `FALSE` otherwise
		 */
		public equal(b: Node): boolean;
		/**
		 * Frees the resources allocated by the node.
		 */
		public free(): void;
		/**
		 * Retrieves the JSON array stored inside a node.
		 * 
		 * It is a programmer error to call this on a node which doesn’t hold an
		 * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
		 * @returns the JSON array
		 */
		public get_array(): Array | null;
		/**
		 * Gets the boolean value stored inside a node.
		 * 
		 * If the node holds an integer or double value which is zero, `FALSE` is
		 * returned; otherwise `TRUE` is returned.
		 * 
		 * If the node holds a `JSON_NODE_NULL` value or a value of another
		 * non-boolean type, `FALSE` is returned.
		 * @returns a boolean value.
		 */
		public get_boolean(): boolean;
		/**
		 * Gets the double value stored inside a node.
		 * 
		 * If the node holds an integer value, it is returned as a double.
		 * 
		 * If the node holds a `FALSE` boolean value, `0.0` is returned; otherwise
		 * a non-zero double is returned.
		 * 
		 * If the node holds a `JSON_NODE_NULL` value or a value of another
		 * non-double type, `0.0` is returned.
		 * @returns a double value.
		 */
		public get_double(): number;
		/**
		 * Gets the integer value stored inside a node.
		 * 
		 * If the node holds a double value, its integer component is returned.
		 * 
		 * If the node holds a `FALSE` boolean value, `0` is returned; otherwise,
		 * a non-zero integer is returned.
		 * 
		 * If the node holds a `JSON_NODE_NULL` value or a value of another
		 * non-integer type, `0` is returned.
		 * @returns an integer value.
		 */
		public get_int(): number;
		/**
		 * Retrieves the type of a #node.
		 * @returns the type of the node
		 */
		public get_node_type(): NodeType;
		/**
		 * Retrieves the object stored inside a node.
		 * 
		 * It is a programmer error to call this on a node which doesn’t hold an
		 * object value. Use `JSON_NODE_HOLDS_OBJECT` first.
		 * @returns the JSON object
		 */
		public get_object(): Object | null;
		/**
		 * Retrieves the parent node of the given #node.
		 * @returns the parent node, or `NULL` if #node
		 *   is the root node
		 */
		public get_parent(): Node | null;
		/**
		 * Gets the string value stored inside a node.
		 * 
		 * If the node does not hold a string value, `NULL` is returned.
		 * @returns a string value.
		 */
		public get_string(): string | null;
		/**
		 * Retrieves a value from a node and copies into #value.
		 * 
		 * When done using it, call {@link `g.value_unset}` on the `GValue` to free the
		 * associated resources.
		 * 
		 * It is a programmer error to call this on a node which doesn’t hold a scalar
		 * value. Use `JSON_NODE_HOLDS_VALUE` first.
		 * @returns return location for an uninitialized value
		 */
		public get_value(): GObject.Value;
		/**
		 * Returns the `GType` of the payload of the node.
		 * 
		 * For `JSON_NODE_NULL` nodes, the returned type is `G_TYPE_INVALID`.
		 * @returns the type for the payload
		 */
		public get_value_type(): GObject.Type;
		/**
		 * Calculate a hash value for the given #key.
		 * 
		 * The hash is calculated over the node and its value, recursively. If the node
		 * is immutable, this is a fast operation; otherwise, it scales proportionally
		 * with the size of the node’s value (for example, with the number of members
		 * in the JSON object if this node contains an object).
		 * @returns hash value for #key
		 */
		public hash(): number;
		/**
		 * Initializes a #node to a specific #type.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @param type the type of JSON node to initialize #node to
		 * @returns the initialized node
		 */
		public init(type: NodeType): Node;
		/**
		 * Initializes #node to `JSON_NODE_ARRAY` and sets #array into it.
		 * 
		 * This function will take a reference on #array.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @param array the JSON array to initialize #node with, or `NULL`
		 * @returns the initialized node
		 */
		public init_array(array?: Array | null): Node;
		/**
		 * Initializes #node to `JSON_NODE_VALUE` and sets #value into it.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @param value a boolean value
		 * @returns the initialized node
		 */
		public init_boolean(value: boolean): Node;
		/**
		 * Initializes #node to `JSON_NODE_VALUE` and sets #value into it.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @param value a floating point value
		 * @returns the initialized node
		 */
		public init_double(value: number): Node;
		/**
		 * Initializes #node to `JSON_NODE_VALUE` and sets #value into it.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @param value an integer
		 * @returns the initialized node
		 */
		public init_int(value: number): Node;
		/**
		 * Initializes #node to `JSON_NODE_NULL`.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @returns the initialized node
		 */
		public init_null(): Node;
		/**
		 * Initializes #node to `JSON_NODE_OBJECT` and sets #object into it.
		 * 
		 * This function will take a reference on #object.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @param object the JSON object to initialize #node with, or `NULL`
		 * @returns the initialized node
		 */
		public init_object(object?: Object | null): Node;
		/**
		 * Initializes #node to `JSON_NODE_VALUE` and sets #value into it.
		 * 
		 * If the node has already been initialized once, it will be reset to
		 * the given type, and any data contained will be cleared.
		 * @param value a string value
		 * @returns the initialized node
		 */
		public init_string(value?: string | null): Node;
		/**
		 * Check whether the given #node has been marked as immutable by calling
		 * [method#Json.Node.seal] on it.
		 * @returns `TRUE` if the #node is immutable
		 */
		public is_immutable(): boolean;
		/**
		 * Checks whether #node is a `JSON_NODE_NULL`.
		 * 
		 * A `JSON_NODE_NULL` node is not the same as a `NULL` node; a `JSON_NODE_NULL`
		 * represents a literal `null` value in the JSON tree.
		 * @returns `TRUE` if the node is null
		 */
		public is_null(): boolean;
		/**
		 * Increments the reference count of #node.
		 * @returns a pointer to #node
		 */
		public ref(): Node;
		/**
		 * Seals the given node, making it immutable to further changes.
		 * 
		 * In order to be sealed, the #node must have a type and value set. The value
		 * will be recursively sealed — if the node holds an object, that JSON object
		 * will be sealed, etc.
		 * 
		 * If the `node` is already immutable, this is a no-op.
		 */
		public seal(): void;
		/**
		 * Sets #array inside #node.
		 * 
		 * The reference count of #array is increased.
		 * 
		 * It is a programmer error to call this on a node which doesn’t hold an
		 * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
		 * @param array a JSON array
		 */
		public set_array(array: Array): void;
		/**
		 * Sets #value as the boolean content of the #node, replacing any existing
		 * content.
		 * 
		 * It is an error to call this on an immutable node, or on a node which is not
		 * a value node.
		 * @param value a boolean value
		 */
		public set_boolean(value: boolean): void;
		/**
		 * Sets #value as the double content of the #node, replacing any existing
		 * content.
		 * 
		 * It is an error to call this on an immutable node, or on a node which is not
		 * a value node.
		 * @param value a double value
		 */
		public set_double(value: number): void;
		/**
		 * Sets #value as the integer content of the #node, replacing any existing
		 * content.
		 * 
		 * It is an error to call this on an immutable node, or on a node which is not
		 * a value node.
		 * @param value an integer value
		 */
		public set_int(value: number): void;
		/**
		 * Sets #objects inside #node.
		 * 
		 * The reference count of #object is increased.
		 * 
		 * If #object is `NULL`, the node’s existing object is cleared.
		 * 
		 * It is an error to call this on an immutable node, or on a node which is not
		 * an object node.
		 * @param object a JSON object
		 */
		public set_object(object?: Object | null): void;
		/**
		 * Sets the parent node for the given `node`.
		 * 
		 * It is an error to call this with an immutable #parent.
		 * 
		 * The #node may be immutable.
		 * @param parent the parent node
		 */
		public set_parent(parent?: Node | null): void;
		/**
		 * Sets #value as the string content of the #node, replacing any existing
		 * content.
		 * 
		 * It is an error to call this on an immutable node, or on a node which is not
		 * a value node.
		 * @param value a string value
		 */
		public set_string(value: string): void;
		/**
		 * Sets a scalar value inside the given node.
		 * 
		 * The contents of the given `GValue` are copied into the `JsonNode`.
		 * 
		 * The following `GValue` types have a direct mapping to JSON types:
		 * 
		 *  - `G_TYPE_INT64`
		 *  - `G_TYPE_DOUBLE`
		 *  - `G_TYPE_BOOLEAN`
		 *  - `G_TYPE_STRING`
		 * 
		 * JSON-GLib will also automatically promote the following `GValue` types:
		 * 
		 *  - `G_TYPE_INT` to `G_TYPE_INT64`
		 *  - `G_TYPE_FLOAT` to `G_TYPE_DOUBLE`
		 * 
		 * It is an error to call this on an immutable node, or on a node which is not
		 * a value node.
		 * @param value the value to set
		 */
		public set_value(value: GObject.Value): void;
		/**
		 * Sets #array inside #node.
		 * 
		 * The reference count of #array is not increased.
		 * 
		 * It is a programmer error to call this on a node which doesn’t hold an
		 * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
		 * @param array a JSON array
		 */
		public take_array(array: Array): void;
		/**
		 * Sets #object inside #node.
		 * 
		 * The reference count of #object is not increased.
		 * 
		 * It is an error to call this on an immutable node, or on a node which is not
		 * an object node.
		 * @param object a JSON object
		 */
		public take_object(object: Object): void;
		/**
		 * Retrieves the user readable name of the data type contained by #node.
		 * 
		 * **Note**: The name is only meant for debugging purposes, and there is no
		 * guarantee the name will stay the same across different versions.
		 * @returns a string containing the name of the type
		 */
		public type_name(): string;
		/**
		 * Decrements the reference count of #node.
		 * 
		 * If the reference count reaches zero, the node is freed.
		 */
		public unref(): void;
	}

	export interface ObjectInitOptions {}
	/**
	 * `JsonObject` is the representation of the object type inside JSON.
	 * 
	 * A `JsonObject` contains [struct#Json.Node] "members", which may contain
	 * fundamental types, arrays or other objects; each member of an object is
	 * accessed using a unique string, or "name".
	 * 
	 * Since objects can be arbitrarily big, copying them can be expensive; for
	 * this reason they are reference counted. You can control the lifetime of
	 * a `JsonObject` using [method#Json.Object.ref] and [method#Json.Object.unref].
	 * 
	 * To add or overwrite a member with a given name, use [method#Json.Object.set_member].
	 * 
	 * To extract a member with a given name, use [method#Json.Object.get_member].
	 * 
	 * To retrieve the list of members, use [method#Json.Object.get_members].
	 * 
	 * To retrieve the size of the object (that is, the number of members it has),
	 * use [method#Json.Object.get_size].
	 */
	interface Object {}
	class Object {
		public constructor(options?: Partial<ObjectInitOptions>);
		/**
		 * Creates a new object.
		 * @returns the newly created object
		 */
		public static new(): Object;
		/**
		 * @deprecated
		 * Use [method#Json.Object.set_member] instead
		 * 
		 * Adds a new member for the given name and value into an object.
		 * 
		 * This function will return if the object already contains a member
		 * with the same name.
		 * @param member_name the name of the member
		 * @param node the value of the member
		 */
		public add_member(member_name: string, node: Node): void;
		/**
		 * Retrieves a copy of the value of the given member inside an object.
		 * @param member_name the name of the JSON object member to access
		 * @returns a copy of the value for the
		 *   requested object member
		 */
		public dup_member(member_name: string): Node | null;
		/**
		 * Check whether #a and #b are equal objects, meaning they have the same
		 * set of members, and the values of corresponding members are equal.
		 * @param b another JSON object
		 * @returns `TRUE` if #a and #b are equal, and `FALSE` otherwise
		 */
		public equal(b: Object): boolean;
		/**
		 * Iterates over all members of #object and calls #func on
		 * each one of them.
		 * 
		 * It is safe to change the value of a member of the oobject
		 * from within the iterator function, but it is not safe to add or
		 * remove members from the object.
		 * 
		 * The order in which the object members are iterated is the
		 * insertion order.
		 * @param func the function to be called on each member
		 */
		public foreach_member(func: ObjectForeach): void;
		/**
		 * Convenience function that retrieves the array
		 * stored in #member_name of #object. It is an error to specify a
		 * #member_name which does not exist.
		 * 
		 * If #member_name contains `null`, then this function will return `NULL`.
		 * 
		 * See also: [method#Json.Object.get_member], [method#Json.Object.has_member]
		 * @param member_name the name of the member
		 * @returns the array inside the object's member
		 */
		public get_array_member(member_name: string): Array | null;
		/**
		 * Convenience function that retrieves the boolean value
		 * stored in #member_name of #object. It is an error to specify a
		 * #member_name which does not exist.
		 * 
		 * See also: [method#Json.Object.get_boolean_member_with_default],
		 *   [method#Json.Object.get_member], [method#Json.Object.has_member]
		 * @param member_name the name of the member
		 * @returns the boolean value of the object's member
		 */
		public get_boolean_member(member_name: string): boolean;
		/**
		 * Convenience function that retrieves the boolean value
		 * stored in #member_name of #object.
		 * 
		 * If #member_name does not exist, does not contain a scalar value,
		 * or contains `null`, then #default_value is returned instead.
		 * @param member_name the name of the #object member
		 * @param default_value the value to return if #member_name is not valid
		 * @returns the boolean value of the object's member, or the
		 *   given default
		 */
		public get_boolean_member_with_default(member_name: string, default_value: boolean): boolean;
		/**
		 * Convenience function that retrieves the floating point value
		 * stored in #member_name of #object. It is an error to specify a
		 * #member_name which does not exist.
		 * 
		 * See also: [method#Json.Object.get_double_member_with_default],
		 *   [method#Json.Object.get_member], [method#Json.Object.has_member]
		 * @param member_name the name of the member
		 * @returns the floating point value of the object's member
		 */
		public get_double_member(member_name: string): number;
		/**
		 * Convenience function that retrieves the floating point value
		 * stored in #member_name of #object.
		 * 
		 * If #member_name does not exist, does not contain a scalar value,
		 * or contains `null`, then #default_value is returned instead.
		 * @param member_name the name of the #object member
		 * @param default_value the value to return if #member_name is not valid
		 * @returns the floating point value of the object's member, or the
		 *   given default
		 */
		public get_double_member_with_default(member_name: string, default_value: number): number;
		/**
		 * Convenience function that retrieves the integer value
		 * stored in #member_name of #object. It is an error to specify a
		 * #member_name which does not exist.
		 * 
		 * See also: [method#Json.Object.get_int_member_with_default],
		 *   [method#Json.Object.get_member], [method#Json.Object.has_member]
		 * @param member_name the name of the object member
		 * @returns the integer value of the object's member
		 */
		public get_int_member(member_name: string): number;
		/**
		 * Convenience function that retrieves the integer value
		 * stored in #member_name of #object.
		 * 
		 * If #member_name does not exist, does not contain a scalar value,
		 * or contains `null`, then #default_value is returned instead.
		 * @param member_name the name of the object member
		 * @param default_value the value to return if #member_name is not valid
		 * @returns the integer value of the object's member, or the
		 *   given default
		 */
		public get_int_member_with_default(member_name: string, default_value: number): number;
		/**
		 * Retrieves the value of the given member inside an object.
		 * @param member_name the name of the JSON object member to access
		 * @returns the value for the
		 *   requested object member
		 */
		public get_member(member_name: string): Node | null;
		/**
		 * Retrieves all the names of the members of an object.
		 * 
		 * You can obtain the value for each member by iterating the returned list
		 * and calling [method#Json.Object.get_member].
		 * @returns the
		 *   member names of the object
		 */
		public get_members(): string[] | null;
		/**
		 * Convenience function that checks whether the value
		 * stored in #member_name of #object is null. It is an error to
		 * specify a #member_name which does not exist.
		 * 
		 * See also: [method#Json.Object.get_member], [method#Json.Object.has_member]
		 * @param member_name the name of the member
		 * @returns `TRUE` if the value is `null`
		 */
		public get_null_member(member_name: string): boolean;
		/**
		 * Convenience function that retrieves the object
		 * stored in #member_name of #object. It is an error to specify a #member_name
		 * which does not exist.
		 * 
		 * If #member_name contains `null`, then this function will return `NULL`.
		 * 
		 * See also: [method#Json.Object.get_member], [method#Json.Object.has_member]
		 * @param member_name the name of the member
		 * @returns the object inside the object's member
		 */
		public get_object_member(member_name: string): Object | null;
		/**
		 * Retrieves the number of members of a JSON object.
		 * @returns the number of members
		 */
		public get_size(): number;
		/**
		 * Convenience function that retrieves the string value
		 * stored in #member_name of #object. It is an error to specify a
		 * #member_name that does not exist.
		 * 
		 * See also: [method#Json.Object.get_string_member_with_default],
		 *   [method#Json.Object.get_member], [method#Json.Object.has_member]
		 * @param member_name the name of the member
		 * @returns the string value of the object's member
		 */
		public get_string_member(member_name: string): string;
		/**
		 * Convenience function that retrieves the string value
		 * stored in #member_name of #object.
		 * 
		 * If #member_name does not exist, does not contain a scalar value,
		 * or contains `null`, then #default_value is returned instead.
		 * @param member_name the name of the #object member
		 * @param default_value the value to return if #member_name is not valid
		 * @returns the string value of the object's member, or the
		 *   given default
		 */
		public get_string_member_with_default(member_name: string, default_value: string): string;
		/**
		 * Retrieves all the values of the members of an object.
		 * @returns the
		 *   member values of the object
		 */
		public get_values(): Node[] | null;
		/**
		 * Checks whether #object has a member named #member_name.
		 * @param member_name the name of a JSON object member
		 * @returns `TRUE` if the JSON object has the requested member
		 */
		public has_member(member_name: string): boolean;
		/**
		 * Calculate a hash value for the given #key (a JSON object).
		 * 
		 * The hash is calculated over the object and all its members, recursively. If
		 * the object is immutable, this is a fast operation; otherwise, it scales
		 * proportionally with the number of members in the object.
		 * @returns hash value for #key
		 */
		public hash(): number;
		/**
		 * Checks whether the given object has been marked as immutable by calling
		 * [method#Json.Object.seal] on it.
		 * @returns `TRUE` if the object is immutable
		 */
		public is_immutable(): boolean;
		/**
		 * Acquires a reference on the given object.
		 * @returns the given object, with the reference count
		 *   increased by one.
		 */
		public ref(): Object;
		/**
		 * Removes #member_name from #object, freeing its allocated resources.
		 * @param member_name the name of the member to remove
		 */
		public remove_member(member_name: string): void;
		/**
		 * Seals the object, making it immutable to further changes.
		 * 
		 * This function will recursively seal all members of the object too.
		 * 
		 * If the object is already immutable, this is a no-op.
		 */
		public seal(): void;
		/**
		 * Convenience function for setting an object member with an array value.
		 * 
		 * See also: [method#Json.Object.set_member], [method#Json.Node.take_array]
		 * @param member_name the name of the member
		 * @param value the value of the member
		 */
		public set_array_member(member_name: string, value: Array): void;
		/**
		 * Convenience function for setting an object member with a boolean value.
		 * 
		 * See also: [method#Json.Object.set_member], [method#Json.Node.init_boolean]
		 * @param member_name the name of the member
		 * @param value the value of the member
		 */
		public set_boolean_member(member_name: string, value: boolean): void;
		/**
		 * Convenience function for setting an object member with a floating point value.
		 * 
		 * See also: [method#Json.Object.set_member], [method#Json.Node.init_double]
		 * @param member_name the name of the member
		 * @param value the value of the member
		 */
		public set_double_member(member_name: string, value: number): void;
		/**
		 * Convenience function for setting an object member with an integer value.
		 * 
		 * See also: [method#Json.Object.set_member], [method#Json.Node.init_int]
		 * @param member_name the name of the member
		 * @param value the value of the member
		 */
		public set_int_member(member_name: string, value: number): void;
		/**
		 * Sets the value of a member inside an object.
		 * 
		 * If the object does not have a member with the given name, a new member
		 * is created.
		 * 
		 * If the object already has a member with the given name, the current
		 * value is overwritten with the new.
		 * @param member_name the name of the member
		 * @param node the value of the member
		 */
		public set_member(member_name: string, node: Node): void;
		/**
		 * Convenience function for setting an object member with a `null` value.
		 * 
		 * See also: [method#Json.Object.set_member], [method#Json.Node.init_null]
		 * @param member_name the name of the member
		 */
		public set_null_member(member_name: string): void;
		/**
		 * Convenience function for setting an object member with an object value.
		 * 
		 * See also: [method#Json.Object.set_member], [method#Json.Node.take_object]
		 * @param member_name the name of the member
		 * @param value the value of the member
		 */
		public set_object_member(member_name: string, value: Object): void;
		/**
		 * Convenience function for setting an object member with a string value.
		 * 
		 * See also: [method#Json.Object.set_member], [method#Json.Node.init_string]
		 * @param member_name the name of the member
		 * @param value the value of the member
		 */
		public set_string_member(member_name: string, value: string): void;
		/**
		 * Releases a reference on the given object.
		 * 
		 * If the reference count reaches zero, the object is destroyed and
		 * all its resources are freed.
		 */
		public unref(): void;
	}

	export interface ObjectIterInitOptions {}
	/**
	 * An iterator object used to iterate over the members of a JSON object.
	 * 
	 * `JsonObjectIter` must be allocated on the stack and initialised using
	 * [method#Json.ObjectIter.init] or [method#Json.ObjectIter.init_ordered].
	 * 
	 * The iterator is invalidated if the object is modified during
	 * iteration.
	 * 
	 * All the fields in the `JsonObjectIter` structure are private and should
	 * never be accessed directly.
	 */
	interface ObjectIter {}
	class ObjectIter {
		public constructor(options?: Partial<ObjectIterInitOptions>);
		public readonly priv_pointer: any[];
		public readonly priv_int: number[];
		public readonly priv_boolean: boolean[];
		/**
		 * Initialises the #iter and associate it with #object.
		 * 
		 * ```c
		 * JsonObjectIter iter;
		 * const gchar *member_name;
		 * JsonNode *member_node;
		 * 
		 * json_object_iter_init (&iter, some_object);
		 * while (json_object_iter_next (&iter, &member_name, &member_node))
		 *   {
		 *     // Do something with #member_name and #member_node.
		 *   }
		 * ```
		 * 
		 * The iterator initialized with this function will iterate the
		 * members of the object in an undefined order.
		 * 
		 * See also: [method#Json.ObjectIter.init_ordered]
		 * @param object the JSON object to iterate over
		 */
		public init(object: Object): void;
		/**
		 * Initialises the #iter and associate it with #object.
		 * 
		 * ```c
		 * JsonObjectIter iter;
		 * const gchar *member_name;
		 * JsonNode *member_node;
		 * 
		 * json_object_iter_init_ordered (&iter, some_object);
		 * while (json_object_iter_next_ordered (&iter, &member_name, &member_node))
		 *   {
		 *     // Do something with #member_name and #member_node.
		 *   }
		 * ```
		 * 
		 * See also: [method#Json.ObjectIter.init]
		 * @param object the JSON object to iterate over
		 */
		public init_ordered(object: Object): void;
		/**
		 * Advances the iterator and retrieves the next member in the object.
		 * 
		 * If the end of the object is reached, `FALSE` is returned and #member_name
		 * and #member_node are set to invalid values. After that point, the #iter
		 * is invalid.
		 * 
		 * The order in which members are returned by the iterator is undefined. The
		 * iterator is invalidated if the object is modified during iteration.
		 * 
		 * You must use this function with an iterator initialized with
		 * [method#Json.ObjectIter.init]; using this function with an iterator
		 * initialized with [method#Json.ObjectIter.init_ordered] yields undefined
		 * behavior.
		 * 
		 * See also: [method#Json.ObjectIter.next_ordered]
		 * @returns `TRUE` if #member_name and #member_node are valid; `FALSE` if
		 *   there are no more members
		 * 
		 * return
		 *    location for the member name, or %NULL to ignore
		 * 
		 * return
		 *    location for the member value, or %NULL to ignore
		 */
		public next(): [ boolean, string | null, Node | null ];
		/**
		 * Advances the iterator and retrieves the next member in the object.
		 * 
		 * If the end of the object is reached, `FALSE` is returned and #member_name and
		 * #member_node are set to invalid values. After that point, the #iter is invalid.
		 * 
		 * The order in which members are returned by the iterator is the same order in
		 * which the members were added to the `JsonObject`. The iterator is invalidated
		 * if its `JsonObject` is modified during iteration.
		 * 
		 * You must use this function with an iterator initialized with
		 * [method#Json.ObjectIter.init_ordered]; using this function with an iterator
		 * initialized with [method#Json.ObjectIter.init] yields undefined behavior.
		 * 
		 * See also: [method#Json.ObjectIter.next]
		 * @returns `TRUE `if #member_name and #member_node are valid; `FALSE` if the end
		 *    of the object has been reached
		 * 
		 * return
		 *    location for the member name, or %NULL to ignore
		 * 
		 * return
		 *    location for the member value, or %NULL to ignore
		 */
		public next_ordered(): [ boolean, string | null, Node | null ];
	}

	export interface SerializableIfaceInitOptions {}
	/**
	 * Interface that allows serializing and deserializing object instances
	 * with properties storing complex data types.
	 * 
	 * The [func#Json.gobject_from_data] and [func#Json.gobject_to_data]
	 * functions will check if the passed object type implements this interface,
	 * so it can also be used to override the default property serialization
	 * sequence.
	 */
	interface SerializableIface {}
	class SerializableIface {
		public constructor(options?: Partial<SerializableIfaceInitOptions>);
		public readonly g_iface: GObject.TypeInterface;
		public serialize_property: {(serializable: Serializable, property_name: string, value: GObject.Value, pspec: GObject.ParamSpec): Node;};
		public deserialize_property: {(serializable: Serializable, property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ boolean, GObject.Value ];};
		public find_property: {(serializable: Serializable, name: string): GObject.ParamSpec | null;};
		public list_properties: {(serializable: Serializable, n_pspecs: number): GObject.ParamSpec;};
		public set_property: {(serializable: Serializable, pspec: GObject.ParamSpec, value: GObject.Value): void;};
		public get_property: {(serializable: Serializable, pspec: GObject.ParamSpec): GObject.Value;};
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Serializable} instead.
	 */
	interface ISerializable {
		/**
		 * Calls the default implementation of the [vfunc#Json.Serializable.deserialize_property]
		 * virtual function.
		 * 
		 * This function can be used inside a custom implementation of the
		 * {@link `deserialize.property}` virtual function in lieu of calling the
		 * default implementation through `g_type_default_interface_peek()`:
		 * 
		 * ```c
		 * JsonSerializable *iface;
		 * gboolean res;
		 * 
		 * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
		 * res = iface->deserialize_property (serializable, property_name,
		 *                                    value,
		 *                                    pspec,
		 *                                    property_node);
		 * ```
		 * @param property_name the name of the property to deserialize
		 * @param value a pointer to an uninitialized value
		 * @param pspec a property description
		 * @param property_node the JSON node containing the serialized property
		 * @returns `TRUE` if the property was successfully deserialized
		 */
		default_deserialize_property(property_name: string, value: GObject.Value, pspec: GObject.ParamSpec, property_node: Node): boolean;
		/**
		 * Calls the default implementation of the [vfunc#Json.Serializable.serialize_property]
		 * virtual function.
		 * 
		 * This function can be used inside a custom implementation of the
		 * {@link `serialize.property}` virtual function in lieu of calling the
		 * default implementation through `g_type_default_interface_peek()`:
		 * 
		 * ```c
		 * JsonSerializable *iface;
		 * JsonNode *node;
		 * 
		 * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
		 * node = iface->serialize_property (serializable, property_name,
		 *                                   value,
		 *                                   pspec);
		 * ```
		 * 
		 * This function will return `NULL` if the property could not be
		 * serialized.
		 * @param property_name the name of the property to serialize
		 * @param value the value of the property to serialize
		 * @param pspec a property description
		 * @returns a node containing the
		 *   serialized property
		 */
		default_serialize_property(property_name: string, value: GObject.Value, pspec: GObject.ParamSpec): Node | null;
		/**
		 * Asks a `JsonSerializable` implementation to deserialize the
		 * property contained inside `property_node` and place its value
		 * into `value`.
		 * 
		 * The `value` can be:
		 * 
		 * - an empty `GValue` initialized by `G_VALUE_INIT`, which will be automatically
		 *   initialized with the expected type of the property by using the given
		 *   property description (since JSON-GLib 1.6)
		 * - a `GValue` initialized with the expected type of the property
		 * 
		 * This function will not be called for properties that are marked as
		 * as `G_PARAM_CONSTRUCT_ONLY`.
		 * @param property_name the name of the property to serialize
		 * @param pspec a property description
		 * @param property_node the JSON node containing the serialized property
		 * @returns `TRUE` if the property was successfully deserialized
		 * 
		 * a pointer to an uninitialized value
		 */
		deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ boolean, GObject.Value ];
		/**
		 * Calls the [vfunc#Json.Serializable.find_property] implementation on
		 * the `JsonSerializable` instance, which will return the property
		 * description for the given name.
		 * @param name the name of the property
		 * @returns the property description
		 */
		find_property(name: string): GObject.ParamSpec | null;
		/**
		 * Calls the [vfunc#Json.Serializable.get_property] implementation
		 * on the `JsonSerializable` instance, which will get the value of
		 * the given property.
		 * @param pspec a property description
		 * @returns return location for the property value
		 */
		get_property(pspec: GObject.ParamSpec): GObject.Value;
		/**
		 * Calls the [vfunc#Json.Serializable.list_properties] implementation on
		 * the `JsonSerializable` instance, which will return the list of serializable
		 * properties.
		 * @returns the serializable
		 *   properties of the object
		 * 
		 * return location for the length of the returned array
		 */
		list_properties(): [ GObject.ParamSpec[], number ];
		/**
		 * Asks a `JsonSerializable` implementation to serialize an object
		 * property into a JSON node.
		 * @param property_name the name of the property to serialize
		 * @param value the value of the property to serialize
		 * @param pspec a property description
		 * @returns a node containing the serialized property
		 */
		serialize_property(property_name: string, value: GObject.Value, pspec: GObject.ParamSpec): Node;
		/**
		 * Calls the [vfunc#Json.Serializable.set_property] implementation
		 * on the `JsonSerializable` instance, which will set the property
		 * with the given value.
		 * @param pspec a property description
		 * @param value the property value to set
		 */
		set_property(pspec: GObject.ParamSpec, value: GObject.Value): void;
	}

	type SerializableInitOptionsMixin  = {};
	export interface SerializableInitOptions extends SerializableInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Serializable} instead.
	 */
	type SerializableMixin = ISerializable;

	/**
	 * `JsonSerializable` is an interface for controlling the serialization
	 * and deserialization of `GObject` classes.
	 * 
	 * Implementing this interface allows controlling how the class is going
	 * to be serialized or deserialized by [func#Json.construct_gobject] and
	 * [func#Json.serialize_gobject], respectively.
	 */
	interface Serializable extends SerializableMixin {}

	class Serializable {
		public constructor(options?: Partial<SerializableInitOptions>);
	}



	/**
	 * Indicates the content of a node.
	 */
	enum NodeType {
		/**
		 * The node contains a JSON object
		 */
		OBJECT = 0,
		/**
		 * The node contains a JSON array
		 */
		ARRAY = 1,
		/**
		 * The node contains a fundamental type
		 */
		VALUE = 2,
		/**
		 * Special type, for nodes containing null
		 */
		NULL = 3
	}

	/**
	 * Error codes for `JSON_PARSER_ERROR`.
	 * 
	 * This enumeration can be extended at later date
	 */
	enum ParserError {
		/**
		 * parse error
		 */
		PARSE = 0,
		/**
		 * unexpected trailing comma
		 */
		TRAILING_COMMA = 1,
		/**
		 * expected comma
		 */
		MISSING_COMMA = 2,
		/**
		 * expected colon
		 */
		MISSING_COLON = 3,
		/**
		 * invalid bareword
		 */
		INVALID_BAREWORD = 4,
		/**
		 * empty member name (Since: 0.16)
		 */
		EMPTY_MEMBER_NAME = 5,
		/**
		 * invalid data (Since: 0.18)
		 */
		INVALID_DATA = 6,
		/**
		 * unknown error
		 */
		UNKNOWN = 7
	}

	/**
	 * Error codes for `JSON_PATH_ERROR`.
	 * 
	 * This enumeration can be extended at later date
	 */
	enum PathError {
		/**
		 * Invalid query
		 */
		QUERY = 0
	}

	/**
	 * Error codes for `JSON_READER_ERROR`.
	 * 
	 * This enumeration can be extended at later date
	 */
	enum ReaderError {
		/**
		 * No array found at the current position
		 */
		NO_ARRAY = 0,
		/**
		 * Index out of bounds
		 */
		INVALID_INDEX = 1,
		/**
		 * No object found at the current position
		 */
		NO_OBJECT = 2,
		/**
		 * Member not found
		 */
		INVALID_MEMBER = 3,
		/**
		 * No valid node found at the current position
		 */
		INVALID_NODE = 4,
		/**
		 * The node at the current position does not
		 *   hold a value
		 */
		NO_VALUE = 5,
		/**
		 * The node at the current position does not
		 *   hold a value of the desired type
		 */
		INVALID_TYPE = 6
	}

	/**
	 * The function to be passed to [method#Json.Array.foreach_element].
	 * 
	 * You should not add or remove elements to and from #array within
	 * this function.
	 * 
	 * It is safe to change the value of #element_node.
	 */
	interface ArrayForeach {
		/**
		 * The function to be passed to [method#Json.Array.foreach_element].
		 * 
		 * You should not add or remove elements to and from #array within
		 * this function.
		 * 
		 * It is safe to change the value of #element_node.
		 * @param array the iterated JSON array
		 * @param index_ the index of the element
		 * @param element_node the value of the element at the given #index_
		 */
		(array: Array, index_: number, element_node: Node): void;
	}

	/**
	 * Deserializes the contents of the passed `JsonNode` into a `GBoxed`, for instance:
	 * 
	 * ```c
	 * static gpointer
	 * my_point_deserialize (JsonNode *node)
	 * {
	 *   double x = 0.0, y = 0.0;
	 * 
	 *   if (JSON_NODE_HOLDS_ARRAY (node))
	 *     {
	 *       JsonArray *array = json_node_get_array (node);
	 * 
	 *       if (json_array_get_length (array) == 2)
	 *         {
	 *           x = json_array_get_double_element (array, 0);
	 *           y = json_array_get_double_element (array, 1);
	 *         }
	 *     }
	 *   else if (JSON_NODE_HOLDS_OBJECT (node))
	 *     {
	 *       JsonObject *obj = json_node_get_object (node);
	 * 
	 *       x = json_object_get_double_member_with_default (obj, "x", 0.0);
	 *       y = json_object_get_double_member_with_default (obj, "y", 0.0);
	 *     }
	 * 
	 *   // {@link My.point_new} is defined elsewhere
	 *   return my_point_new (x, y);
	 * }
	 * ```
	 */
	interface BoxedDeserializeFunc {
		/**
		 * Deserializes the contents of the passed `JsonNode` into a `GBoxed`, for instance:
		 * 
		 * ```c
		 * static gpointer
		 * my_point_deserialize (JsonNode *node)
		 * {
		 *   double x = 0.0, y = 0.0;
		 * 
		 *   if (JSON_NODE_HOLDS_ARRAY (node))
		 *     {
		 *       JsonArray *array = json_node_get_array (node);
		 * 
		 *       if (json_array_get_length (array) == 2)
		 *         {
		 *           x = json_array_get_double_element (array, 0);
		 *           y = json_array_get_double_element (array, 1);
		 *         }
		 *     }
		 *   else if (JSON_NODE_HOLDS_OBJECT (node))
		 *     {
		 *       JsonObject *obj = json_node_get_object (node);
		 * 
		 *       x = json_object_get_double_member_with_default (obj, "x", 0.0);
		 *       y = json_object_get_double_member_with_default (obj, "y", 0.0);
		 *     }
		 * 
		 *   // {@link My.point_new} is defined elsewhere
		 *   return my_point_new (x, y);
		 * }
		 * ```
		 * @param node a node tree representing a boxed data
		 * @returns the newly created boxed structure
		 */
		(node: Node): any | null;
	}

	/**
	 * Serializes the passed `GBoxed` and stores it inside a `JsonNode`, for instance:
	 * 
	 * ```c
	 * static JsonNode *
	 * my_point_serialize (gconstpointer boxed)
	 * {
	 *   const MyPoint *point = boxed;
	 * 
	 *   g_autoptr(JsonBuilder) builder = json_builder_new ();
	 * 
	 *   json_builder_begin_object (builder);
	 *   json_builder_set_member_name (builder, "x");
	 *   json_builder_add_double_value (builder, point->x);
	 *   json_builder_set_member_name (builder, "y");
	 *   json_builder_add_double_value (builder, point->y);
	 *   json_builder_end_object (builder);
	 * 
	 *   return json_builder_get_root (builder);
	 * }
	 * ```
	 */
	interface BoxedSerializeFunc {
		/**
		 * Serializes the passed `GBoxed` and stores it inside a `JsonNode`, for instance:
		 * 
		 * ```c
		 * static JsonNode *
		 * my_point_serialize (gconstpointer boxed)
		 * {
		 *   const MyPoint *point = boxed;
		 * 
		 *   g_autoptr(JsonBuilder) builder = json_builder_new ();
		 * 
		 *   json_builder_begin_object (builder);
		 *   json_builder_set_member_name (builder, "x");
		 *   json_builder_add_double_value (builder, point->x);
		 *   json_builder_set_member_name (builder, "y");
		 *   json_builder_add_double_value (builder, point->y);
		 *   json_builder_end_object (builder);
		 * 
		 *   return json_builder_get_root (builder);
		 * }
		 * ```
		 * @param boxed a boxed data structure
		 * @returns the newly created JSON node tree representing the boxed data
		 */
		(boxed?: any | null): Node;
	}

	/**
	 * The function to be passed to [method#Json.Object.foreach_member].
	 * 
	 * You should not add or remove members to and from #object within
	 * this function.
	 * 
	 * It is safe to change the value of #member_node.
	 */
	interface ObjectForeach {
		/**
		 * The function to be passed to [method#Json.Object.foreach_member].
		 * 
		 * You should not add or remove members to and from #object within
		 * this function.
		 * 
		 * It is safe to change the value of #member_node.
		 * @param object the iterated JSON object
		 * @param member_name the name of the member
		 * @param member_node the value of the member
		 */
		(object: Object, member_name: string, member_node: Node): void;
	}

	/**
	 * Checks whether it is possible to deserialize a `GBoxed` of
	 * type `gboxed_type` from a [struct#Json.Node] of type `node_type`.
	 * @param gboxed_type a boxed type
	 * @param node_type a node type
	 * @returns `TRUE` if the type can be deserialized, and `FALSE` otherwise
	 */
	function boxed_can_deserialize(gboxed_type: GObject.Type, node_type: NodeType): boolean;
	/**
	 * Checks whether it is possible to serialize a `GBoxed` of
	 * type `gboxed_type` into a [struct#Json.Node].
	 * 
	 * The type of the node is placed inside `node_type` if the function
	 * returns `TRUE`, and it's undefined otherwise.
	 * @param gboxed_type a boxed type
	 * @returns `TRUE` if the type can be serialized, and `FALSE` otherwise
	 * 
	 * the node type to which the boxed type
	 *   can be serialized into
	 */
	function boxed_can_serialize(gboxed_type: GObject.Type): [ boolean, NodeType | null ];
	/**
	 * Deserializes the given [struct#Json.Node] into a `GBoxed` of the given type.
	 * @param gboxed_type a boxed type
	 * @param node a node
	 * @returns the newly allocated boxed data
	 */
	function boxed_deserialize(gboxed_type: GObject.Type, node: Node): any | null;
	/**
	 * Registers a deserialization function for a `GBoxed` of type `gboxed_type`
	 * from a [struct#Json.Node] of type `node_type`.
	 * @param gboxed_type a boxed type
	 * @param node_type a node type
	 * @param deserialize_func deserialization function
	 */
	function boxed_register_deserialize_func(gboxed_type: GObject.Type, node_type: NodeType, deserialize_func: BoxedDeserializeFunc): void;
	/**
	 * Registers a serialization function for a `GBoxed` of type `gboxed_type`
	 * to a [struct#Json.Node] of type `node_type`.
	 * @param gboxed_type a boxed type
	 * @param node_type a node type
	 * @param serialize_func serialization function
	 */
	function boxed_register_serialize_func(gboxed_type: GObject.Type, node_type: NodeType, serialize_func: BoxedSerializeFunc): void;
	/**
	 * Serializes a pointer to a `GBoxed` of the given type into a [struct#Json.Node].
	 * 
	 * If the serialization is not possible, this function will return `NULL`.
	 * @param gboxed_type a boxed type
	 * @param boxed a pointer to a boxed of type `gboxed_type`
	 * @returns a node with the serialized boxed type
	 */
	function boxed_serialize(gboxed_type: GObject.Type, boxed: any | null): Node | null;
	/**
	 * Deserializes a JSON data stream and creates an instance of the given
	 * type.
	 * 
	 * If the given type implements the [iface#Json.Serializable] interface, it
	 * will be asked to deserialize all the JSON members into their respective
	 * properties; otherwise, the default implementation will be used to translate
	 * the compatible JSON native types.
	 * 
	 * **Note**: the JSON data stream must be an object.
	 * 
	 * For historical reasons, the `length` argument is unused. The given `data`
	 * must be a `NUL`-terminated string.
	 * @param gtype the type of the object to construct
	 * @param data a JSON data stream
	 * @param length length of the data stream (unused)
	 * @returns a new object instance of the given
	 *   type
	 */
	function construct_gobject(gtype: GObject.Type, data: string, length: number): GObject.Object | null;
	/**
	 * Parses the given string and returns the corresponding JSON tree.
	 * 
	 * If the string is empty, this function will return `NULL`.
	 * 
	 * In case of parsing error, this function returns `NULL` and sets
	 * the error appropriately.
	 * @param str a valid UTF-8 string containing JSON data
	 * @returns the root node of the JSON tree
	 */
	function from_string(str: string): Node | null;
	/**
	 * Creates a new `GObject` instance of the given type, and constructs it
	 * using the members of the object in the given node.
	 * @param gtype the type of the object to create
	 * @param node a node of type `JSON_NODE_OBJECT` describing the
	 *   object instance for the given type
	 * @returns The newly created instance
	 */
	function gobject_deserialize(gtype: GObject.Type, node: Node): GObject.Object;
	/**
	 * Deserializes a JSON data stream and creates an instance of the
	 * given type.
	 * 
	 * If the type implements the [iface#Json.Serializable] interface, it will
	 * be asked to deserialize all the JSON members into their respective properties;
	 * otherwise, the default implementation will be used to translate the
	 * compatible JSON native types.
	 * 
	 * **Note**: the JSON data stream must be an object
	 * @param gtype the type of the object to construct
	 * @param data a JSON data stream
	 * @param length length of the data stream, or -1 if it is `NUL`-terminated
	 * @returns a new object instance of the given type
	 */
	function gobject_from_data(gtype: GObject.Type, data: string, length: number): GObject.Object | null;
	/**
	 * Creates a JSON tree representing the passed object instance.
	 * 
	 * Each member of the returned JSON object will map to a property of
	 * the object type.
	 * 
	 * The returned JSON tree will be returned as a `JsonNode` with a type
	 * of `JSON_NODE_OBJECT`.
	 * @param gobject the object to serialize
	 * @returns the newly created JSON tree
	 */
	function gobject_serialize(gobject: GObject.Object): Node;
	/**
	 * Serializes a `GObject` instance into a JSON data stream, iterating
	 * recursively over each property.
	 * 
	 * If the given object implements the [iface#Json.Serializable] interface,
	 * it will be asked to serialize all its properties; otherwise, the default
	 * implementation will be use to translate the compatible types into
	 * JSON native types.
	 * @param gobject the object to serialize
	 * @returns a JSON data stream representing the given object
	 * 
	 * return value for the length of the buffer
	 */
	function gobject_to_data(gobject: GObject.Object): [ string, number | null ];
	/**
	 * Converts a JSON data structure to a `GVariant`.
	 * 
	 * If `signature` is not `NULL`, it will be used to resolve ambiguous
	 * data types.
	 * 
	 * If no error occurs, the resulting `GVariant` is guaranteed to conform
	 * to `signature`.
	 * 
	 * If `signature` is not `NULL` but does not represent a valid `GVariant` type
	 * string, `NULL` is returned and the `error` is set to
	 * `G_IO_ERROR_INVALID_ARGUMENT`.
	 * 
	 * If a `signature` is provided but the JSON structure cannot be mapped to it,
	 * `NULL` is returned and the `error` is set to `G_IO_ERROR_INVALID_DATA`.
	 * 
	 * If `signature` is `NULL`, the conversion is done based strictly on the types
	 * in the JSON nodes.
	 * 
	 * The returned variant has a floating reference that will need to be sunk
	 * by the caller code.
	 * @param json_node the node to convert
	 * @param signature a valid `GVariant` type string
	 * @returns A newly created `GVariant`
	 */
	function gvariant_deserialize(json_node: Node, signature: string | null): GLib.Variant | null;
	/**
	 * Converts a JSON string to a `GVariant` value.
	 * 
	 * This function works exactly like [func#Json.gvariant_deserialize], but
	 * takes a JSON encoded string instead.
	 * 
	 * The string is first converted to a [struct#Json.Node] using
	 * [class#Json.Parser], and then `json_gvariant_deserialize` is called on
	 * the node.
	 * 
	 * The returned variant has a floating reference that will need to be sunk
	 * by the caller code.
	 * @param json A JSON data string
	 * @param length The length of #json, or -1 if `NUL`-terminated
	 * @param signature A valid `GVariant` type string
	 * @returns A newly created `GVariant`D compliant
	 */
	function gvariant_deserialize_data(json: string, length: number, signature: string | null): GLib.Variant | null;
	/**
	 * Converts `variant` to a JSON tree.
	 * @param variant A `GVariant` to convert
	 * @returns the root of the JSON data structure
	 *   obtained from `variant`
	 */
	function gvariant_serialize(variant: GLib.Variant): Node;
	/**
	 * Converts #variant to its JSON encoded string representation.
	 * 
	 * This is a convenience function around [func#Json.gvariant_serialize], to
	 * obtain the JSON tree, and then [class#Json.Generator] to stringify it.
	 * @param variant A #GVariant to convert
	 * @returns The JSON encoded string corresponding to
	 *   the given variant
	 * 
	 * the length of the returned string
	 */
	function gvariant_serialize_data(variant: GLib.Variant): [ string, number | null ];
	function parser_error_quark(): GLib.Quark;
	function path_error_quark(): GLib.Quark;
	function reader_error_quark(): GLib.Quark;
	/**
	 * Serializes a `GObject` instance into a JSON data stream.
	 * 
	 * If the object implements the [iface#Json.Serializable] interface, it will be
	 * asked to serizalize all its properties; otherwise, the default
	 * implementation will be use to translate the compatible types into JSON
	 * native types.
	 * @param gobject the object to serialize
	 * @returns a JSON data stream representing the given object
	 * 
	 * return value for the length of the buffer
	 */
	function serialize_gobject(gobject: GObject.Object): [ string, number | null ];
	/**
	 * Check whether #a and #b are equal UTF-8 JSON strings and return an ordering
	 * over them in `strcmp()` style.
	 * @param a a JSON string
	 * @param b another JSON string
	 * @returns an integer less than zero if `a < b`, equal to zero if `a == b`, and
	 *   greater than zero if `a > b`
	 */
	function string_compare(a: string, b: string): number;
	/**
	 * Check whether #a and #b are equal UTF-8 JSON strings.
	 * @param a a JSON string
	 * @param b another JSON string
	 * @returns `TRUE` if #a and #b are equal; `FALSE` otherwise
	 */
	function string_equal(a: string, b: string): boolean;
	/**
	 * Calculate a hash value for the given #key (a UTF-8 JSON string).
	 * 
	 * Note: Member names are compared byte-wise, without applying any Unicode
	 * decomposition or normalisation. This is not explicitly mentioned in the JSON
	 * standard (ECMA-404), but is assumed.
	 * @param key a JSON string to hash
	 * @returns hash value for #key
	 */
	function string_hash(key: string): number;
	/**
	 * Generates a stringified JSON representation of the contents of
	 * the given `node`.
	 * @param node a JSON tree
	 * @param pretty whether the output should be prettyfied for printing
	 * @returns the string representation of the node
	 */
	function to_string(node: Node, pretty: boolean): string;
	/**
	 * Json major version component (e.g. 1 if `JSON_VERSION` is "1.2.3")
	 * @returns Json major version component (e.g. 1 if `JSON_VERSION` is "1.2.3")
	 */
	const MAJOR_VERSION: number;

	/**
	 * Json micro version component (e.g. 3 if `JSON_VERSION` is "1.2.3")
	 * @returns Json micro version component (e.g. 3 if `JSON_VERSION` is "1.2.3")
	 */
	const MICRO_VERSION: number;

	/**
	 * Json minor version component (e.g. 2 if `JSON_VERSION` is "1.2.3")
	 * @returns Json minor version component (e.g. 2 if `JSON_VERSION` is "1.2.3")
	 */
	const MINOR_VERSION: number;

	/**
	 * The version of JSON-GLib, encoded as a string, useful for printing and
	 * concatenation.
	 * @returns The version of JSON-GLib, encoded as a string, useful for printing and
	 * concatenation.
	 */
	const VERSION_S: string;

}