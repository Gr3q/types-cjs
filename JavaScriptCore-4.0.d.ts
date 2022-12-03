/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.JavaScriptCore {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Class} instead.
	 */
	interface IClass {
		/**
		 * The name of the class.
		 */
		name: string;
		/**
		 * Add a constructor to #jsc_class. If #name is %NULL, the class name will be used. When <function>new</function>
		 * is used with the constructor or {@link Jsc.value_constructor_call} is called, #callback is invoked receiving the
		 * parameters and #user_data as the last parameter. When the constructor object is cleared in the #JSCClass context,
		 * #destroy_notify is called with #user_data as parameter.
		 * 
		 * This function creates the constructor, which needs to be added to an object as a property to be able to use it. Use
		 * jsc_context_set_value() to make the constructor available in the global object.
		 * 
		 * Note that the value returned by #callback is adopted by #jsc_class, and the #GDestroyNotify passed to
		 * jsc_context_register_class() is responsible for disposing of it.
		 * @param name the constructor name or %NULL
		 * @param callback a #GCallback to be called to create an instance of #jsc_class
		 * @param return_type the #GType of the constructor return value
		 * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
		 * @returns a #JSCValue representing the class constructor.
		 */
		add_constructor(name: string | null, callback: GObject.Callback, return_type: GObject.Type, parameter_types?: GObject.Type[] | null): Value;
		/**
		 * Add a constructor to #jsc_class. If #name is %NULL, the class name will be used. When <function>new</function>
		 * is used with the constructor or {@link Jsc.value_constructor_call} is called, #callback is invoked receiving
		 * a #GPtrArray of #JSCValue<!-- -->s as arguments and #user_data as the last parameter. When the constructor object
		 * is cleared in the #JSCClass context, #destroy_notify is called with #user_data as parameter.
		 * 
		 * This function creates the constructor, which needs to be added to an object as a property to be able to use it. Use
		 * jsc_context_set_value() to make the constructor available in the global object.
		 * 
		 * Note that the value returned by #callback is adopted by #jsc_class, and the #GDestroyNotify passed to
		 * jsc_context_register_class() is responsible for disposing of it.
		 * @param name the constructor name or %NULL
		 * @param callback a #GCallback to be called to create an instance of #jsc_class
		 * @param return_type the #GType of the constructor return value
		 * @returns a #JSCValue representing the class constructor.
		 */
		add_constructor_variadic(name: string | null, callback: GObject.Callback, return_type: GObject.Type): Value;
		/**
		 * Add method with #name to #jsc_class. When the method is called by JavaScript or {@link Jsc.value_object_invoke_method},
		 * #callback is called receiving the class instance as first parameter, followed by the method parameters and then
		 * #user_data as last parameter. When the method is cleared in the #JSCClass context, #destroy_notify is called with
		 * #user_data as parameter.
		 * 
		 * Note that the value returned by #callback must be transfer full. In case of non-refcounted boxed types, you should use
		 * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
		 * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
		 * with jsc_value_new_object() that receives the copy as the instance parameter.
		 * @param name the method name
		 * @param callback a #GCallback to be called to invoke method #name of #jsc_class
		 * @param return_type the #GType of the method return value, or %G_TYPE_NONE if the method is void.
		 * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
		 */
		add_method(name: string, callback: GObject.Callback, return_type: GObject.Type, parameter_types?: GObject.Type[] | null): void;
		/**
		 * Add method with #name to #jsc_class. When the method is called by JavaScript or {@link Jsc.value_object_invoke_method},
		 * #callback is called receiving the class instance as first parameter, followed by a #GPtrArray of #JSCValue<!-- -->s
		 * with the method arguments and then #user_data as last parameter. When the method is cleared in the #JSCClass context,
		 * #destroy_notify is called with #user_data as parameter.
		 * 
		 * Note that the value returned by #callback must be transfer full. In case of non-refcounted boxed types, you should use
		 * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
		 * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
		 * with jsc_value_new_object() that receives the copy as the instance parameter.
		 * @param name the method name
		 * @param callback a #GCallback to be called to invoke method #name of #jsc_class
		 * @param return_type the #GType of the method return value, or %G_TYPE_NONE if the method is void.
		 */
		add_method_variadic(name: string, callback: GObject.Callback, return_type: GObject.Type): void;
		/**
		 * Add a property with #name to #jsc_class. When the property value needs to be getted, #getter is called
		 * receiving the the class instance as first parameter and #user_data as last parameter. When the property
		 * value needs to be set, #setter is called receiving the the class instance as first parameter, followed
		 * by the value to be set and then #user_data as the last parameter. When the property is cleared in the
		 * #JSCClass context, #destroy_notify is called with #user_data as parameter.
		 * 
		 * Note that the value returned by #getter must be transfer full. In case of non-refcounted boxed types, you should use
		 * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
		 * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
		 * with {@link Jsc.value_new_object} that receives the copy as the instance parameter.
		 * @param name the property name
		 * @param property_type the #GType of the property value
		 * @param getter a #GCallback to be called to get the property value
		 * @param setter a #GCallback to be called to set the property value
		 */
		add_property(name: string, property_type: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void;
		/**
		 * Get the class name of #jsc_class
		 * @returns the name of #jsc_class
		 */
		get_name(): string;
		/**
		 * Get the parent class of #jsc_class
		 * @returns the parent class of #jsc_class
		 */
		get_parent(): Class;
		connect(signal: "notify::name", callback: (owner: this, ...args: any) => void): number;

	}

	type ClassInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IClass,
		"name">;

	export interface ClassInitOptions extends ClassInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Class} instead.
	 */
	type ClassMixin = IClass & GObject.Object;

	/**
	 * A JSSClass represents a custom JavaScript class registered by the user in a #JSCContext.
	 * It allows to create new JavaScripts objects whose instances are created by the user using
	 * this API.
	 * It's possible to add constructors, properties and methods for a JSSClass by providing
	 * #GCallback<!-- -->s to implement them.
	 */
	interface Class extends ClassMixin {}

	class Class {
		public constructor(options?: Partial<ClassInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Context} instead.
	 */
	interface IContext {
		/**
		 * The #JSCVirtualMachine in which the context was created.
		 */
		virtual_machine: VirtualMachine;
		/**
		 * Check the given #code in #context for syntax errors. The #line_number is the starting line number in #uri;
		 * the value is one-based so the first line is 1. #uri and #line_number are only used to fill the #exception.
		 * In case of errors #exception will be set to a new #JSCException with the details. You can pass %NULL to
		 * #exception to ignore the error details.
		 * @param code a JavaScript script to check
		 * @param length length of #code, or -1 if #code is a nul-terminated string
		 * @param mode a #JSCCheckSyntaxMode
		 * @param uri the source URI
		 * @param line_number the starting line number
		 * @returns a #JSCCheckSyntaxResult
		 * 
		 * return location for a #JSCException, or %NULL to ignore
		 */
		check_syntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, line_number: number): [ CheckSyntaxResult, Exception | null ];
		/**
		 * Clear the uncaught exception in #context if any.
		 */
		clear_exception(): void;
		/**
		 * Evaluate #code in #context.
		 * @param code a JavaScript script to evaluate
		 * @param length length of #code, or -1 if #code is a nul-terminated string
		 * @returns a #JSCValue representing the last value generated by the script.
		 */
		evaluate(code: string, length: number): Value;
		/**
		 * Evaluate #code and create an new object where symbols defined in #code will be added as properties,
		 * instead of being added to #context global object. The new object is returned as #object parameter.
		 * Similar to how {@link Jsc.value_new_object} works, if #object_instance is not %NULL #object_class must be provided too.
		 * The #line_number is the starting line number in #uri; the value is one-based so the first line is 1.
		 * #uri and #line_number will be shown in exceptions and they don't affect the behavior of the script.
		 * @param code a JavaScript script to evaluate
		 * @param length length of #code, or -1 if #code is a nul-terminated string
		 * @param object_instance an object instance
		 * @param object_class a #JSCClass or %NULL to use the default
		 * @param uri the source URI
		 * @param line_number the starting line number
		 * @returns a #JSCValue representing the last value generated by the script.
		 * 
		 * return location for a #JSCValue.
		 */
		evaluate_in_object(code: string, length: number, object_instance: any | null, object_class: Class | null, uri: string, line_number: number): [ Value, Value ];
		/**
		 * Evaluate #code in #context using #uri as the source URI. The #line_number is the starting line number
		 * in #uri; the value is one-based so the first line is 1. #uri and #line_number will be shown in exceptions and
		 * they don't affect the behavior of the script.
		 * @param code a JavaScript script to evaluate
		 * @param length length of #code, or -1 if #code is a nul-terminated string
		 * @param uri the source URI
		 * @param line_number the starting line number
		 * @returns a #JSCValue representing the last value generated by the script.
		 */
		evaluate_with_source_uri(code: string, length: number, uri: string, line_number: number): Value;
		/**
		 * Get the last unhandled exception thrown in #context by API functions calls.
		 * @returns a #JSCException or %NULL if there isn't any
		 *    unhandled exception in the #JSCContext.
		 */
		get_exception(): Exception | null;
		/**
		 * Get a #JSCValue referencing the #context global object
		 * @returns a #JSCValue
		 */
		get_global_object(): Value;
		/**
		 * Get a property of #context global object with #name.
		 * @param name the value name
		 * @returns a #JSCValue
		 */
		get_value(name: string): Value;
		/**
		 * Get the #JSCVirtualMachine where #context was created.
		 * @returns the #JSCVirtualMachine where the #JSCContext was created.
		 */
		get_virtual_machine(): VirtualMachine;
		/**
		 * Remove the last #JSCExceptionHandler previously pushed to #context with
		 * {@link Jsc.context_push_exception_handler}.
		 */
		pop_exception_handler(): void;
		/**
		 * Push an exception handler in #context. Whenever a JavaScript exception happens in
		 * the #JSCContext, the given #handler will be called. The default #JSCExceptionHandler
		 * simply calls {@link Jsc.context_throw_exception} to throw the exception to the #JSCContext.
		 * If you don't want to catch the exception, but only get notified about it, call
		 * jsc_context_throw_exception() in #handler like the default one does.
		 * The last exception handler pushed is the only one used by the #JSCContext, use
		 * jsc_context_pop_exception_handler() to remove it and set the previous one. When #handler
		 * is removed from the context, #destroy_notify i called with #user_data as parameter.
		 * @param handler a #JSCExceptionHandler
		 */
		push_exception_handler(handler: ExceptionHandler): void;
		/**
		 * Register a custom class in #context using the given #name. If the new class inherits from
		 * another #JSCClass, the parent should be passed as #parent_class, otherwise %NULL should be
		 * used. The optional #vtable parameter allows to provide a custom implementation for handling
		 * the class, for example, to handle external properties not added to the prototype.
		 * When an instance of the #JSCClass is cleared in the context, #destroy_notify is called with
		 * the instance as parameter.
		 * @param name the class name
		 * @param parent_class a #JSCClass or %NULL
		 * @param vtable an optional #JSCClassVTable or %NULL
		 * @returns a #JSCClass
		 */
		register_class(name: string, parent_class?: Class | null, vtable?: ClassVTable | null): Class;
		/**
		 * Set a property of #context global object with #name and #value.
		 * @param name the value name
		 * @param value a #JSCValue
		 */
		set_value(name: string, value: Value): void;
		/**
		 * Throw an exception to #context using the given error message. The created #JSCException
		 * can be retrieved with {@link Jsc.context_get_exception}.
		 * @param error_message an error message
		 */
		throw(error_message: string): void;
		/**
		 * Throw #exception to #context.
		 * @param exception a #JSCException
		 */
		throw_exception(exception: Exception): void;
		/**
		 * Throw an exception to #context using the given formatted string as error message.
		 * The created #JSCException can be retrieved with {@link Jsc.context_get_exception}.
		 * @param format the string format
		 */
		throw_printf(format: string): void;
		/**
		 * Throw an exception to #context using the given error name and message. The created #JSCException
		 * can be retrieved with {@link Jsc.context_get_exception}.
		 * @param error_name the error name
		 * @param error_message an error message
		 */
		throw_with_name(error_name: string, error_message: string): void;
		/**
		 * Throw an exception to #context using the given error name and the formatted string as error message.
		 * The created #JSCException can be retrieved with {@link Jsc.context_get_exception}.
		 * @param error_name the error name
		 * @param format the string format
		 */
		throw_with_name_printf(error_name: string, format: string): void;
		connect(signal: "notify::virtual-machine", callback: (owner: this, ...args: any) => void): number;

	}

	type ContextInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IContext,
		"virtual_machine">;

	export interface ContextInitOptions extends ContextInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Context} instead.
	 */
	type ContextMixin = IContext & GObject.Object;

	/**
	 * JSCContext represents a JavaScript execution context, where all operations
	 * take place and where the values will be associated.
	 * 
	 * When a new context is created, a global object is allocated and the built-in JavaScript
	 * objects (Object, Function, String, Array) are populated. You can execute JavaScript in
	 * the context by using {@link Jsc.context_evaluate} or jsc_context_evaluate_with_source_uri().
	 * It's also possible to register custom objects in the context with jsc_context_register_class().
	 */
	interface Context extends ContextMixin {}

	class Context {
		public constructor(options?: Partial<ContextInitOptions>);
		/**
		 * Create a new #JSCContext. The context is created in a new #JSCVirtualMachine.
		 * Use {@link Jsc.context_new_with_virtual_machine} to create a new #JSCContext in an
		 * existing #JSCVirtualMachine.
		 * @returns the newly created #JSCContext.
		 */
		public static new(): Context;
		/**
		 * Create a new #JSCContext in #virtual_machine.
		 * @param vm a #JSCVirtualMachine
		 * @returns the newly created #JSCContext.
		 */
		public static new_with_virtual_machine(vm: VirtualMachine): Context;
		/**
		 * Get the #JSCContext that is currently executing a function. This should only be
		 * called within a function or method callback, otherwise %NULL will be returned.
		 * @returns the #JSCContext that is currently executing.
		 */
		public static get_current(): Context | null;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Exception} instead.
	 */
	interface IException {
		/**
		 * Get a string with the exception backtrace.
		 * @returns the exception backtrace string or %NULL.
		 */
		get_backtrace_string(): string | null;
		/**
		 * Get the column number at which #exception happened.
		 * @returns the column number of #exception.
		 */
		get_column_number(): number;
		/**
		 * Get the line number at which #exception happened.
		 * @returns the line number of #exception.
		 */
		get_line_number(): number;
		/**
		 * Get the error message of #exception.
		 * @returns the #exception error message.
		 */
		get_message(): string;
		/**
		 * Get the error name of #exception
		 * @returns the #exception error name.
		 */
		get_name(): string;
		/**
		 * Get the source URI of #exception.
		 * @returns the the source URI of #exception, or %NULL.
		 */
		get_source_uri(): string | null;
		/**
		 * Return a report message of #exception, containing all the possible details such us
		 * source URI, line, column and backtrace, and formatted to be printed.
		 * @returns a new string with the exception report
		 */
		report(): string;
		/**
		 * Get the string representation of #exception error.
		 * @returns the string representation of #exception.
		 */
		to_string(): string;
	}

	type ExceptionInitOptionsMixin = GObject.ObjectInitOptions
	export interface ExceptionInitOptions extends ExceptionInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Exception} instead.
	 */
	type ExceptionMixin = IException & GObject.Object;

	/**
	 * JSCException represents a JavaScript exception.
	 */
	interface Exception extends ExceptionMixin {}

	class Exception {
		public constructor(options?: Partial<ExceptionInitOptions>);
		/**
		 * Create a new #JSCException in #context with #message.
		 * @param context a #JSCContext
		 * @param message the error message
		 * @returns a new #JSCException.
		 */
		public static new(context: Context, message: string): Exception;
		/**
		 * Create a new #JSCException in #context using a formatted string
		 * for the message.
		 * @param context a #JSCContext
		 * @param format the string format
		 * @returns a new #JSCException.
		 */
		public static new_printf(context: Context, format: string): Exception;
		/**
		 * Create a new #JSCException in #context using a formatted string
		 * for the message. This is similar to {@link Jsc.exception_new_printf}
		 * except that the arguments to the format string are passed as a va_list.
		 * @param context a #JSCContext
		 * @param format the string format
		 * @param args the parameters to insert into the format string
		 * @returns a new #JSCException.
		 */
		public static new_vprintf(context: Context, format: string, args: any[]): Exception;
		/**
		 * Create a new #JSCException in #context with #name and #message.
		 * @param context a #JSCContext
		 * @param name the error name
		 * @param message the error message
		 * @returns a new #JSCException.
		 */
		public static new_with_name(context: Context, name: string, message: string): Exception;
		/**
		 * Create a new #JSCException in #context with #name and using a formatted string
		 * for the message.
		 * @param context a #JSCContext
		 * @param name the error name
		 * @param format the string format
		 * @returns a new #JSCException.
		 */
		public static new_with_name_printf(context: Context, name: string, format: string): Exception;
		/**
		 * Create a new #JSCException in #context with #name and using a formatted string
		 * for the message. This is similar to {@link Jsc.exception_new_with_name_printf}
		 * except that the arguments to the format string are passed as a va_list.
		 * @param context a #JSCContext
		 * @param name the error name
		 * @param format the string format
		 * @param args the parameters to insert into the format string
		 * @returns a new #JSCException.
		 */
		public static new_with_name_vprintf(context: Context, name: string, format: string, args: any[]): Exception;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Value} instead.
	 */
	interface IValue {
		/**
		 * The #JSCContext in which the value was created.
		 */
		context: Context;
		/**
		 * Gets a pointer to memory that contains the array buffer data.
		 * 
		 * Obtains a pointer to the memory region that holds the contents of the
		 * %ArrayBuffer; modifications done to the data will be visible to JavaScript
		 * code. If #size is not %NULL, the size in bytes of the memory region
		 * will also be stored in the pointed location.
		 * 
		 * Note that the pointer returned by this function is not guaranteed to remain
		 * the same after calls to other JSC API functions. If you plan to access the
		 * data of the %ArrayBuffer later, you can keep a reference to the #value and
		 * obtain the data pointer at a later point. Keep in mind that if JavaScript
		 * code has a chance to run, for example due to main loop events that result
		 * in JSC being called, the contents of the memory region might be modified in
		 * the meantime. Consider taking a copy of the data and using the copy instead
		 * in asynchronous code.
		 * @param size location where to store the size of the memory region.
		 * @returns pointer to memory.
		 */
		array_buffer_get_data(size?: number | null): any | null;
		/**
		 * Gets the size in bytes of the array buffer.
		 * 
		 * Obtains the size in bytes of the memory region that holds the contents of
		 * an %ArrayBuffer.
		 * @returns size, in bytes.
		 */
		array_buffer_get_size(): number;
		/**
		 * Invoke <function>new</function> with constructor referenced by #value. If #n_parameters
		 * is 0 no parameters will be passed to the constructor.
		 * @param parameters the #JSCValue<!-- -->s to pass as parameters to the constructor, or %NULL
		 * @returns a #JSCValue referencing the newly created object instance.
		 */
		constructor_call(parameters?: Value[] | null): Value;
		/**
		 * Call function referenced by #value, passing the given #parameters. If #n_parameters
		 * is 0 no parameters will be passed to the function.
		 * 
		 * This function always returns a #JSCValue, in case of void functions a #JSCValue referencing
		 * <function>undefined</function> is returned
		 * @param parameters the #JSCValue<!-- -->s to pass as parameters to the function, or %NULL
		 * @returns a #JSCValue with the return value of the function.
		 */
		function_call(parameters?: Value[] | null): Value;
		/**
		 * Get the #JSCContext in which #value was created.
		 * @returns the #JSCValue context.
		 */
		get_context(): Context;
		/**
		 * Get whether the value referenced by #value is an array.
		 * @returns whether the value is an array.
		 */
		is_array(): boolean;
		/**
		 * Check whether the #value is an %ArrayBuffer.
		 * @returns whether the value is an %ArrayBuffer
		 */
		is_array_buffer(): boolean;
		/**
		 * Get whether the value referenced by #value is a boolean.
		 * @returns whether the value is a boolean.
		 */
		is_boolean(): boolean;
		/**
		 * Get whether the value referenced by #value is a constructor.
		 * @returns whether the value is a constructor.
		 */
		is_constructor(): boolean;
		/**
		 * Get whether the value referenced by #value is a function
		 * @returns whether the value is a function.
		 */
		is_function(): boolean;
		/**
		 * Get whether the value referenced by #value is <function>null</function>.
		 * @returns whether the value is null.
		 */
		is_null(): boolean;
		/**
		 * Get whether the value referenced by #value is a number.
		 * @returns whether the value is a number.
		 */
		is_number(): boolean;
		/**
		 * Get whether the value referenced by #value is an object.
		 * @returns whether the value is an object.
		 */
		is_object(): boolean;
		/**
		 * Get whether the value referenced by #value is a string
		 * @returns whether the value is a string
		 */
		is_string(): boolean;
		/**
		 * Determines whether a value is a typed array.
		 * @returns Whether #value is a typed array.
		 */
		is_typed_array(): boolean;
		/**
		 * Get whether the value referenced by #value is <function>undefined</function>.
		 * @returns whether the value is undefined.
		 */
		is_undefined(): boolean;
		/**
		 * Create a new typed array value with elements from an array buffer.
		 * 
		 * Create a #JSCValue referencing a new typed array value containing
		 * elements of the given #type, where the elements are stored at the memory
		 * region represented by the #array_buffer.
		 * 
		 * The #type must *not* be %JSC_TYPED_ARRAY_NONE.
		 * 
		 * The #offset and #length parameters can be used to indicate which part of
		 * the array buffer can be accessed through the typed array. If both are
		 * omitted (passing zero as #offset, and `-1` as #length), the whole
		 * #array_buffer is exposed through the typed array. Omitting the #length
		 * with a non-zero #offset will expose the remainder of the #array_buffer
		 * starting at the indicated offset.
		 * @param type type of array elements.
		 * @param offset offset, in bytes.
		 * @param length number of array elements, or `-1`.
		 * @returns a #JSCValue
		 */
		new_typed_array_with_buffer(type: TypedArrayType, offset: number, length: number): Value;
		/**
		 * Define or modify a property with #property_name in object referenced by #value. When the
		 * property value needs to be getted or set, #getter and #setter callbacks will be called.
		 * When the property is cleared in the #JSCClass context, #destroy_notify is called with
		 * #user_data as parameter. This is equivalent to JavaScript <function>Object.defineProperty()</function>
		 * when used with an accessor descriptor.
		 * 
		 * Note that the value returned by #getter must be fully transferred. In case of boxed types, you could use
		 * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
		 * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
		 * with jsc_value_new_object() that receives the copy as instance parameter.
		 * 
		 * Note that #getter and #setter are called as functions and not methods, so they don't receive an instance as
		 * first parameter. Use jsc_class_add_property() if you want to add property accessor invoked as a method.
		 * @param property_name the name of the property to define
		 * @param flags #JSCValuePropertyFlags
		 * @param property_type the #GType of the property
		 * @param getter a #GCallback to be called to get the property value
		 * @param setter a #GCallback to be called to set the property value
		 */
		object_define_property_accessor(property_name: string, flags: ValuePropertyFlags, property_type: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void;
		/**
		 * Define or modify a property with #property_name in object referenced by #value. This is equivalent to
		 * JavaScript <function>Object.defineProperty()</function> when used with a data descriptor.
		 * @param property_name the name of the property to define
		 * @param flags #JSCValuePropertyFlags
		 * @param property_value the default property value
		 */
		object_define_property_data(property_name: string, flags: ValuePropertyFlags, property_value?: Value | null): void;
		/**
		 * Try to delete property with #name from #value. This function will return %FALSE if
		 * the property was defined without %JSC_VALUE_PROPERTY_CONFIGURABLE flag.
		 * @param name the property name
		 * @returns %TRUE if the property was deleted, or %FALSE otherwise.
		 */
		object_delete_property(name: string): boolean;
		/**
		 * Get the list of property names of #value. Only properties defined with %JSC_VALUE_PROPERTY_ENUMERABLE
		 * flag will be collected.
		 * @returns a %NULL-terminated array of strings containing the
		 *    property names, or %NULL if #value doesn't have enumerable properties.  Use {@link G.strfreev} to free.
		 */
		object_enumerate_properties(): string[] | null;
		/**
		 * Get property with #name from #value.
		 * @param name the property name
		 * @returns the property #JSCValue.
		 */
		object_get_property(name: string): Value;
		/**
		 * Get property at #index from #value.
		 * @param index the property index
		 * @returns the property #JSCValue.
		 */
		object_get_property_at_index(index: number): Value;
		/**
		 * Get whether #value has property with #name.
		 * @param name the property name
		 * @returns %TRUE if #value has a property with #name, or %FALSE otherwise
		 */
		object_has_property(name: string): boolean;
		/**
		 * Invoke method with #name on object referenced by #value, passing the given #parameters. If
		 * #n_parameters is 0 no parameters will be passed to the method.
		 * The object instance will be handled automatically even when the method is a custom one
		 * registered with {@link Jsc.class_add_method}, so it should never be passed explicitly as parameter
		 * of this function.
		 * 
		 * This function always returns a #JSCValue, in case of void methods a #JSCValue referencing
		 * <function>undefined</function> is returned.
		 * @param name the method name
		 * @param parameters the #JSCValue<!-- -->s to pass as parameters to the method, or %NULL
		 * @returns a #JSCValue with the return value of the method.
		 */
		object_invoke_method(name: string, parameters?: Value[] | null): Value;
		/**
		 * Get whether the value referenced by #value is an instance of class #name.
		 * @param name a class name
		 * @returns whether the value is an object instance of class #name.
		 */
		object_is_instance_of(name: string): boolean;
		/**
		 * Set #property with #name on #value.
		 * @param name the property name
		 * @param property the #JSCValue to set
		 */
		object_set_property(name: string, property: Value): void;
		/**
		 * Set #property at #index on #value.
		 * @param index the property index
		 * @param property the #JSCValue to set
		 */
		object_set_property_at_index(index: number, property: Value): void;
		/**
		 * Convert #value to a boolean.
		 * @returns a #gboolean result of the conversion.
		 */
		to_boolean(): boolean;
		/**
		 * Convert #value to a double.
		 * @returns a #gdouble result of the conversion.
		 */
		to_double(): number;
		/**
		 * Convert #value to a #gint32.
		 * @returns a #gint32 result of the conversion.
		 */
		to_int32(): number;
		/**
		 * Create a JSON string of #value serialization. If #indent is 0, the resulting JSON will
		 * not contain newlines. The size of the indent is clamped to 10 spaces.
		 * @param indent The number of spaces to indent when nesting.
		 * @returns a null-terminated JSON string with serialization of #value
		 */
		to_json(indent: number): string;
		/**
		 * Convert #value to a string. Use {@link Jsc.value_to_string_as_bytes} instead, if you need to
		 * handle strings containing null characters.
		 * @returns a null-terminated string result of the conversion.
		 */
		to_string(): string;
		/**
		 * Convert #value to a string and return the results as #GBytes. This is needed
		 * to handle strings with null characters.
		 * @returns a #GBytes with the result of the conversion.
		 */
		to_string_as_bytes(): GLib.Bytes;
		/**
		 * Obtain the %ArrayBuffer for the memory region of the typed array elements.
		 * @returns A #JSCValue
		 */
		typed_array_get_buffer(): Value;
		/**
		 * Obtains a pointer to the memory region that holds the elements of the typed
		 * array; modifications done to them will be visible to JavaScript code. If
		 * #length is not %NULL, the number of elements contained in the typed array
		 * are also stored in the pointed location.
		 * 
		 * The returned pointer needs to be casted to the appropriate type (see
		 * #JSCTypedArrayType), and has the `offset` over the underlying array
		 * buffer data applied—that is, points to the first element of the typed
		 * array:
		 * 
		 * |[<!-- language="C" -->
		 * if (jsc_value_typed_array_get_type(value) != JSC_TYPED_ARRAY_UINT32)
		 *     g_error ("Only arrays of uint32_t are supported");
		 * 
		 * gsize count = 0;
		 * uint32_t *elements = jsc_value_typed_array_get_contents (value, &count);
		 * for (gsize i = 0; i < count; i++)
		 *      g_print ("index %zu, value %" PRIu32 "\n", i, elements[i]);
		 * ]|
		 * 
		 * Note that the pointer returned by this function is not guaranteed to remain
		 * the same after calls to other JSC API functions. See
		 * {@link Jsc.value_array_buffer_get_data} for details.
		 * @returns pointer to memory.
		 * 
		 * location to return the number of elements contained
		 */
		typed_array_get_data(): [ any | null, number | null ];
		/**
		 * Gets the number of elements in a typed array.
		 * @returns number of elements.
		 */
		typed_array_get_length(): number;
		/**
		 * Gets the offset over the underlying array buffer data.
		 * @returns offset, in bytes.
		 */
		typed_array_get_offset(): number;
		/**
		 * Gets the size of a typed array.
		 * @returns size, in bytes.
		 */
		typed_array_get_size(): number;
		/**
		 * Gets the type of elements contained in a typed array.
		 * @returns type of the elements, or %JSC_TYPED_ARRAY_NONE if #value is not a typed array.
		 */
		typed_array_get_type(): TypedArrayType;
		connect(signal: "notify::context", callback: (owner: this, ...args: any) => void): number;

	}

	type ValueInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IValue,
		"context">;

	export interface ValueInitOptions extends ValueInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Value} instead.
	 */
	type ValueMixin = IValue & GObject.Object;

	/**
	 * JSCValue represents a reference to a value in a #JSCContext. The JSCValue
	 * protects the referenced value from being garbage collected.
	 */
	interface Value extends ValueMixin {}

	class Value {
		public constructor(options?: Partial<ValueInitOptions>);
		/**
		 * Create a new #JSCValue referencing an array with the given items. If #first_item_type
		 * is %G_TYPE_NONE an empty array is created.
		 * @param context a #JSCContext
		 * @param first_item_type #GType of first item, or %G_TYPE_NONE
		 * @returns a #JSCValue.
		 */
		public static new_array(context: Context, first_item_type: GObject.Type): Value;
		/**
		 * Creates a new %ArrayBuffer from existing #data in memory.
		 * 
		 * The #data is not copied: while this allows sharing data with JavaScript
		 * efficiently, the caller must ensure that the memory region remains valid
		 * until the newly created object is released by JSC.
		 * 
		 * Optionally, a #destroy_notify callback can be provided, which will be
		 * invoked with #user_data as parameter when the %ArrayBuffer object is
		 * released. This is intended to be used for freeing resources related to
		 * the memory region which contains the data:
		 * 
		 * |[!<-- language="C" -->
		 * GMappedFile *f = g_mapped_file_new (file_path, TRUE, NULL);
		 * JSCValue *value = jsc_value_new_array_buffer (context,
		 *     g_mapped_file_get_contents (f), g_mapped_file_get_length (f),
		 *     (GDestroyNotify) g_mapped_file_unref, f);
		 * ]|
		 * 
		 * Note that the #user_data can be the same value as #data:
		 * 
		 * |[!<-- language="C" -->
		 * void *bytes = g_malloc0 (100);
		 * JSCValue *value = jsc_value_new_array_buffer (context, bytes, 100, g_free, bytes);
		 * ]|
		 * @param context A #JSCContext
		 * @param data Pointer to a region of memory.
		 * @param size Size in bytes of the memory region.
		 * @param user_data user data.
		 * @returns A #JSCValue, or %NULL in case of exception.
		 */
		public static new_array_buffer(context: Context, data: any | null, size: number, user_data?: any | null): Value | null;
		/**
		 * Create a new #JSCValue referencing an array with the items from #array. If #array
		 * is %NULL or empty a new empty array will be created. Elements of #array should be
		 * pointers to a #JSCValue.
		 * @param context a #JSCContext
		 * @param array a #GPtrArray
		 * @returns a #JSCValue.
		 */
		public static new_array_from_garray(context: Context, array?: Value[] | null): Value;
		/**
		 * Create a new #JSCValue referencing an array of strings with the items from #strv. If #array
		 * is %NULL or empty a new empty array will be created.
		 * @param context a #JSCContext
		 * @param strv a %NULL-terminated array of strings
		 * @returns a #JSCValue.
		 */
		public static new_array_from_strv(context: Context, strv: string[]): Value;
		/**
		 * Create a new #JSCValue from #value
		 * @param context a #JSCContext
		 * @param value a #gboolean
		 * @returns a #JSCValue.
		 */
		public static new_boolean(context: Context, value: boolean): Value;
		/**
		 * Create a new #JSCValue referencing a new value created by parsing #json.
		 * @param context a #JSCContext
		 * @param json the JSON string to be parsed
		 * @returns a #JSCValue.
		 */
		public static new_from_json(context: Context, json: string): Value;
		/**
		 * Create a function in #context. If #name is %NULL an anonymous function will be created.
		 * When the function is called by JavaScript or {@link Jsc.value_function_call}, #callback is called
		 * receiving the function parameters and then #user_data as last parameter. When the function is
		 * cleared in #context, #destroy_notify is called with #user_data as parameter.
		 * 
		 * Note that the value returned by #callback must be fully transferred. In case of boxed types, you could use
		 * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
		 * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
		 * with jsc_value_new_object() that receives the copy as instance parameter.
		 * @param context a #JSCContext
		 * @param name the function name or %NULL
		 * @param callback a #GCallback.
		 * @param return_type the #GType of the function return value, or %G_TYPE_NONE if the function is void.
		 * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
		 * @returns a #JSCValue.
		 */
		public static new_function(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.Type, parameter_types?: GObject.Type[] | null): Value;
		/**
		 * Create a function in #context. If #name is %NULL an anonymous function will be created.
		 * When the function is called by JavaScript or {@link Jsc.value_function_call}, #callback is called
		 * receiving an #GPtrArray of #JSCValue<!-- -->s with the arguments and then #user_data as last parameter.
		 * When the function is cleared in #context, #destroy_notify is called with #user_data as parameter.
		 * 
		 * Note that the value returned by #callback must be fully transferred. In case of boxed types, you could use
		 * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
		 * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
		 * with jsc_value_new_object() that receives the copy as instance parameter.
		 * @param context a #JSCContext
		 * @param name the function name or %NULL
		 * @param callback a #GCallback.
		 * @param return_type the #GType of the function return value, or %G_TYPE_NONE if the function is void.
		 * @returns a #JSCValue.
		 */
		public static new_function_variadic(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.Type): Value;
		/**
		 * Create a new #JSCValue referencing <function>null</function> in #context.
		 * @param context a #JSCContext
		 * @returns a #JSCValue.
		 */
		public static new_null(context: Context): Value;
		/**
		 * Create a new #JSCValue from #number.
		 * @param context a #JSCContext
		 * @param number a number
		 * @returns a #JSCValue.
		 */
		public static new_number(context: Context, number: number): Value;
		/**
		 * Create a new #JSCValue from #instance. If #instance is %NULL a new empty object is created.
		 * When #instance is provided, #jsc_class must be provided too. #jsc_class takes ownership of
		 * #instance that will be freed by the #GDestroyNotify passed to {@link Jsc.context_register_class}.
		 * @param context a #JSCContext
		 * @param instance an object instance or %NULL
		 * @param jsc_class the #JSCClass of #instance
		 * @returns a #JSCValue.
		 */
		public static new_object(context: Context, instance?: any | null, jsc_class?: Class | null): Value;
		/**
		 * Create a new #JSCValue from #string. If you need to create a #JSCValue from a
		 * string containing null characters, use {@link Jsc.value_new_string_from_bytes} instead.
		 * @param context a #JSCContext
		 * @param string a null-terminated string
		 * @returns a #JSCValue.
		 */
		public static new_string(context: Context, string?: string | null): Value;
		/**
		 * Create a new #JSCValue from #bytes.
		 * @param context a #JSCContext
		 * @param bytes a #GBytes
		 * @returns a #JSCValue.
		 */
		public static new_string_from_bytes(context: Context, bytes?: GLib.Bytes | null): Value;
		/**
		 * Create a new typed array containing a given amount of elements.
		 * 
		 * Create a #JSCValue referencing a new typed array with space for #length
		 * elements of a given #type. As all typed arrays must have an associated
		 * `ArrayBuffer`, a new one of suitable size will be allocated to store
		 * the elements, which will be initialized to zero.
		 * 
		 * The #type must *not* be %JSC_TYPED_ARRAY_NONE.
		 * @param context a #JSCContext
		 * @param type the type of array elements
		 * @param length number of elements in the array
		 * @returns a #JSCValue
		 */
		public static new_typed_array(context: Context, type: TypedArrayType, length: number): Value;
		/**
		 * Create a new #JSCValue referencing <function>undefined</function> in #context.
		 * @param context a #JSCContext
		 * @returns a #JSCValue.
		 */
		public static new_undefined(context: Context): Value;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link VirtualMachine} instead.
	 */
	interface IVirtualMachine {

	}

	type VirtualMachineInitOptionsMixin = GObject.ObjectInitOptions
	export interface VirtualMachineInitOptions extends VirtualMachineInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link VirtualMachine} instead.
	 */
	type VirtualMachineMixin = IVirtualMachine & GObject.Object;

	/**
	 * JSCVirtualMachine represents a group of JSCContext<!-- -->s. It allows
	 * concurrent JavaScript execution by creating a different instance of
	 * JSCVirtualMachine in each thread.
	 * 
	 * To create a group of JSCContext<!-- -->s pass the same JSCVirtualMachine
	 * instance to every JSCContext constructor.
	 */
	interface VirtualMachine extends VirtualMachineMixin {}

	class VirtualMachine {
		public constructor(options?: Partial<VirtualMachineInitOptions>);
		/**
		 * Create a new #JSCVirtualMachine.
		 * @returns the newly created #JSCVirtualMachine.
		 */
		public static new(): VirtualMachine;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WeakValue} instead.
	 */
	interface IWeakValue {
		/**
		 * Get a #JSCValue referencing the JavaScript value of #weak_value.
		 * @returns a new #JSCValue or %NULL if #weak_value was cleared.
		 */
		get_value(): Value;
		/**
		 * This signal is emitted when the JavaScript value is destroyed.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "cleared", callback: (owner: this) => void): number;

	}

	type WeakValueInitOptionsMixin = GObject.ObjectInitOptions
	export interface WeakValueInitOptions extends WeakValueInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WeakValue} instead.
	 */
	type WeakValueMixin = IWeakValue & GObject.Object;

	/**
	 * JSCWeakValue represents a weak reference to a value in a #JSCContext. It can be used
	 * to keep a reference to a JavaScript value without protecting it from being garbage
	 * collected and without referencing the #JSCContext either.
	 */
	interface WeakValue extends WeakValueMixin {}

	class WeakValue {
		public constructor(options?: Partial<WeakValueInitOptions>);
		/**
		 * Create a new #JSCWeakValue for the JavaScript value referenced by #value.
		 * @param value a #JSCValue
		 * @returns a new #JSCWeakValue
		 */
		public static new(value: Value): WeakValue;
	}

	export interface ClassVTableInitOptions {}
	/**
	 * Virtual table for a JSCClass. This can be optionally used when registering a #JSCClass in a #JSCContext
	 * to provide a custom implementation for the class. All virtual functions are optional and can be set to
	 * %NULL to fallback to the default implementation.
	 */
	interface ClassVTable {}
	class ClassVTable {
		public constructor(options?: Partial<ClassVTableInitOptions>);
		/**
		 * a #JSCClassGetPropertyFunction for getting a property.
		 */
		public get_property: ClassGetPropertyFunction;
		/**
		 * a #JSCClassSetPropertyFunction for setting a property.
		 */
		public set_property: ClassSetPropertyFunction;
		/**
		 * a #JSCClassHasPropertyFunction for querying a property.
		 */
		public has_property: ClassHasPropertyFunction;
		/**
		 * a #JSCClassDeletePropertyFunction for deleting a property.
		 */
		public delete_property: ClassDeletePropertyFunction;
		/**
		 * a #JSCClassEnumeratePropertiesFunction for enumerating properties.
		 */
		public enumerate_properties: ClassEnumeratePropertiesFunction;
		public _jsc_reserved0: {(): void;};
		public _jsc_reserved1: {(): void;};
		public _jsc_reserved2: {(): void;};
		public _jsc_reserved3: {(): void;};
	}

	/**
	 * Enum values to specify a mode to check for syntax errors in {@link Jsc.context_check_syntax}.
	 */
	enum CheckSyntaxMode {
		/**
		 * mode to check syntax of a script
		 */
		SCRIPT = 0,
		/**
		 * mode to check syntax of a module
		 */
		MODULE = 1
	}

	/**
	 * Enum values to specify the result of {@link Jsc.context_check_syntax}.
	 */
	enum CheckSyntaxResult {
		/**
		 * no errors
		 */
		SUCCESS = 0,
		/**
		 * recoverable syntax error
		 */
		RECOVERABLE_ERROR = 1,
		/**
		 * irrecoverable syntax error
		 */
		IRRECOVERABLE_ERROR = 2,
		/**
		 * unterminated literal error
		 */
		UNTERMINATED_LITERAL_ERROR = 3,
		/**
		 * out of memory error
		 */
		OUT_OF_MEMORY_ERROR = 4,
		/**
		 * stack overflow error
		 */
		STACK_OVERFLOW_ERROR = 5
	}

	/**
	 * Enum values for options types.
	 */
	enum OptionType {
		/**
		 * A #gboolean option type.
		 */
		BOOLEAN = 0,
		/**
		 * A #gint option type.
		 */
		INT = 1,
		/**
		 * A #guint option type.
		 */
		UINT = 2,
		/**
		 * A #gsize options type.
		 */
		SIZE = 3,
		/**
		 * A #gdouble options type.
		 */
		DOUBLE = 4,
		/**
		 * A string option type.
		 */
		STRING = 5,
		/**
		 * A range string option type.
		 */
		RANGE_STRING = 6
	}

	/**
	 * Possible types of the elements contained in a typed array.
	 */
	enum TypedArrayType {
		/**
		 * Not a typed array, or type unsupported.
		 */
		NONE = 0,
		/**
		 * Array elements are 8-bit signed integers (int8_t).
		 */
		INT8 = 1,
		/**
		 * Array elements are 16-bit signed integers (int16_t).
		 */
		INT16 = 2,
		/**
		 * Array elements are 32-bit signed integers (int32_t).
		 */
		INT32 = 3,
		/**
		 * Array elements are 64-bit signed integers (int64_t).
		 */
		INT64 = 4,
		/**
		 * Array elements are 8-bit unsigned integers (uint8_t).
		 */
		UINT8 = 5,
		/**
		 * Array elements are 8-bit unsigned integers (uint8_t).
		 */
		UINT8_CLAMPED = 6,
		/**
		 * Array elements are 16-bit unsigned integers (uint16_t).
		 */
		UINT16 = 7,
		/**
		 * Array elements are 32-bit unsigned integers (uint32_t).
		 */
		UINT32 = 8,
		/**
		 * Array elements are 64-bit unsigned integers (uint64_t).
		 */
		UINT64 = 9,
		/**
		 * Array elements are 32-bit floating point numbers (float).
		 */
		FLOAT32 = 10,
		/**
		 * Array elements are 64-bit floating point numbers (double).
		 */
		FLOAT64 = 11
	}

	/**
	 * Flags used when defining properties with {@link Jsc.value_object_define_property_data} and
	 * jsc_value_object_define_property_accessor().
	 */
	enum ValuePropertyFlags {
		/**
		 * the type of the property descriptor may be changed and the
		 *  property may be deleted from the corresponding object.
		 */
		CONFIGURABLE = 1,
		/**
		 * the property shows up during enumeration of the properties on
		 *  the corresponding object.
		 */
		ENUMERABLE = 2,
		/**
		 * the value associated with the property may be changed with an
		 *  assignment operator. This doesn't have any effect when passed to {@link Jsc.value_object_define_property_accessor}.
		 */
		WRITABLE = 4
	}

	/**
	 * The type of delete_property in #JSCClassVTable. This is only required when you need to handle
	 * external properties not added to the prototype.
	 */
	interface ClassDeletePropertyFunction {
		/**
		 * The type of delete_property in #JSCClassVTable. This is only required when you need to handle
		 * external properties not added to the prototype.
		 * @param jsc_class a #JSCClass
		 * @param context a #JSCContext
		 * @param instance the #jsc_class instance
		 * @param name the property name
		 * @returns %TRUE if handled or %FALSE to to forward the request to the parent class or prototype chain.
		 */
		(jsc_class: Class, context: Context, instance: any | null, name: string): boolean;
	}

	/**
	 * The type of enumerate_properties in #JSCClassVTable. This is only required when you need to handle
	 * external properties not added to the prototype.
	 */
	interface ClassEnumeratePropertiesFunction {
		/**
		 * The type of enumerate_properties in #JSCClassVTable. This is only required when you need to handle
		 * external properties not added to the prototype.
		 * @param jsc_class a #JSCClass
		 * @param context a #JSCContext
		 * @param instance the #jsc_class instance
		 * @returns a %NULL-terminated array of strings
		 *    containing the property names, or %NULL if #instance doesn't have enumerable properties.
		 */
		(jsc_class: Class, context: Context, instance?: any | null): string[] | null;
	}

	/**
	 * The type of get_property in #JSCClassVTable. This is only required when you need to handle
	 * external properties not added to the prototype.
	 */
	interface ClassGetPropertyFunction {
		/**
		 * The type of get_property in #JSCClassVTable. This is only required when you need to handle
		 * external properties not added to the prototype.
		 * @param jsc_class a #JSCClass
		 * @param context a #JSCContext
		 * @param instance the #jsc_class instance
		 * @param name the property name
		 * @returns a #JSCValue or %NULL to forward the request to
		 *    the parent class or prototype chain
		 */
		(jsc_class: Class, context: Context, instance: any | null, name: string): Value | null;
	}

	/**
	 * The type of has_property in #JSCClassVTable. This is only required when you need to handle
	 * external properties not added to the prototype.
	 */
	interface ClassHasPropertyFunction {
		/**
		 * The type of has_property in #JSCClassVTable. This is only required when you need to handle
		 * external properties not added to the prototype.
		 * @param jsc_class a #JSCClass
		 * @param context a #JSCContext
		 * @param instance the #jsc_class instance
		 * @param name the property name
		 * @returns %TRUE if #instance has a property with #name or %FALSE to forward the request
		 *    to the parent class or prototype chain.
		 */
		(jsc_class: Class, context: Context, instance: any | null, name: string): boolean;
	}

	/**
	 * The type of set_property in #JSCClassVTable. This is only required when you need to handle
	 * external properties not added to the prototype.
	 */
	interface ClassSetPropertyFunction {
		/**
		 * The type of set_property in #JSCClassVTable. This is only required when you need to handle
		 * external properties not added to the prototype.
		 * @param jsc_class a #JSCClass
		 * @param context a #JSCContext
		 * @param instance the #jsc_class instance
		 * @param name the property name
		 * @param value the #JSCValue to set
		 * @returns %TRUE if handled or %FALSE to forward the request to the parent class or prototype chain.
		 */
		(jsc_class: Class, context: Context, instance: any | null, name: string, value: Value): boolean;
	}

	/**
	 * Function used to handle JavaScript exceptions in a #JSCContext.
	 */
	interface ExceptionHandler {
		/**
		 * Function used to handle JavaScript exceptions in a #JSCContext.
		 * @param context a #JSCContext
		 * @param exception a #JSCException
		 */
		(context: Context, exception: Exception): void;
	}

	/**
	 * Function used to iterate options.
	 * 
	 * Not that #description string is not localized.
	 */
	interface OptionsFunc {
		/**
		 * Function used to iterate options.
		 * 
		 * Not that #description string is not localized.
		 * @param option the option name
		 * @param type the option #JSCOptionType
		 * @param description the option description, or %NULL
		 * @returns %TRUE to stop the iteration, or %FALSE otherwise
		 */
		(option: string, type: OptionType, description?: string | null): boolean;
	}

	/**
	 * Returns the major version number of the JavaScriptCore library.
	 * (e.g. in JavaScriptCore version 1.8.3 this is 1.)
	 * 
	 * This function is in the library, so it represents the JavaScriptCore library
	 * your code is running against. Contrast with the #JSC_MAJOR_VERSION
	 * macro, which represents the major version of the JavaScriptCore headers you
	 * have included when compiling your code.
	 * @returns the major version number of the JavaScriptCore library
	 */
	function get_major_version(): number;
	/**
	 * Returns the micro version number of the JavaScriptCore library.
	 * (e.g. in JavaScriptCore version 1.8.3 this is 3.)
	 * 
	 * This function is in the library, so it represents the JavaScriptCore library
	 * your code is running against. Contrast with the #JSC_MICRO_VERSION
	 * macro, which represents the micro version of the JavaScriptCore headers you
	 * have included when compiling your code.
	 * @returns the micro version number of the JavaScriptCore library
	 */
	function get_micro_version(): number;
	/**
	 * Returns the minor version number of the JavaScriptCore library.
	 * (e.g. in JavaScriptCore version 1.8.3 this is 8.)
	 * 
	 * This function is in the library, so it represents the JavaScriptCore library
	 * your code is running against. Contrast with the #JSC_MINOR_VERSION
	 * macro, which represents the minor version of the JavaScriptCore headers you
	 * have included when compiling your code.
	 * @returns the minor version number of the JavaScriptCore library
	 */
	function get_minor_version(): number;
	/**
	 * Iterates all available options calling #function for each one. Iteration can
	 * stop early if #function returns %FALSE.
	 * @param _function a #JSCOptionsFunc callback
	 */
	function options_foreach(_function: OptionsFunc): void;
	/**
	 * Get #option as a #gboolean value.
	 * @param option the option identifier
	 * @returns %TRUE if #value has been set or %FALSE if the option doesn't exist
	 * 
	 * return location for the option value
	 */
	function options_get_boolean(option: string): [ boolean, boolean ];
	/**
	 * Get #option as a #gdouble value.
	 * @param option the option identifier
	 * @returns %TRUE if #value has been set or %FALSE if the option doesn't exist
	 * 
	 * return location for the option value
	 */
	function options_get_double(option: string): [ boolean, number ];
	/**
	 * Get #option as a #gint value.
	 * @param option the option identifier
	 * @returns %TRUE if #value has been set or %FALSE if the option doesn't exist
	 * 
	 * return location for the option value
	 */
	function options_get_int(option: string): [ boolean, number ];
	/**
	 * Create a #GOptionGroup to handle JSCOptions as command line arguments.
	 * The options will be exposed as command line arguments with the form
	 * <emphasis>--jsc-&lt;option&gt;=&lt;value&gt;</emphasis>.
	 * Each entry in the returned #GOptionGroup is configured to apply the
	 * corresponding option during command line parsing. Applications only need to
	 * pass the returned group to {@link G.option_context_add_group}, and the rest will
	 * be taken care for automatically.
	 * @returns a #GOptionGroup for the JSCOptions
	 */
	function options_get_option_group(): GLib.OptionGroup;
	/**
	 * Get #option as a range string. The string must be in the
	 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
	 * Values between low and high (both included) will be considered in
	 * the range, unless <emphasis>!</emphasis> is used to invert the range.
	 * @param option the option identifier
	 * @returns %TRUE if #value has been set or %FALSE if the option doesn't exist
	 * 
	 * return location for the option value
	 */
	function options_get_range_string(option: string): [ boolean, string ];
	/**
	 * Get #option as a #gsize value.
	 * @param option the option identifier
	 * @returns %TRUE if #value has been set or %FALSE if the option doesn't exist
	 * 
	 * return location for the option value
	 */
	function options_get_size(option: string): [ boolean, number ];
	/**
	 * Get #option as a string.
	 * @param option the option identifier
	 * @returns %TRUE if #value has been set or %FALSE if the option doesn't exist
	 * 
	 * return location for the option value
	 */
	function options_get_string(option: string): [ boolean, string ];
	/**
	 * Get #option as a #guint value.
	 * @param option the option identifier
	 * @returns %TRUE if #value has been set or %FALSE if the option doesn't exist
	 * 
	 * return location for the option value
	 */
	function options_get_uint(option: string): [ boolean, number ];
	/**
	 * Set #option as a #gboolean value.
	 * @param option the option identifier
	 * @param value the value to set
	 * @returns %TRUE if option was correctly set or %FALSE otherwise.
	 */
	function options_set_boolean(option: string, value: boolean): boolean;
	/**
	 * Set #option as a #gdouble value.
	 * @param option the option identifier
	 * @param value the value to set
	 * @returns %TRUE if option was correctly set or %FALSE otherwise.
	 */
	function options_set_double(option: string, value: number): boolean;
	/**
	 * Set #option as a #gint value.
	 * @param option the option identifier
	 * @param value the value to set
	 * @returns %TRUE if option was correctly set or %FALSE otherwise.
	 */
	function options_set_int(option: string, value: number): boolean;
	/**
	 * Set #option as a range string. The string must be in the
	 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
	 * Values between low and high (both included) will be considered in
	 * the range, unless <emphasis>!</emphasis> is used to invert the range.
	 * @param option the option identifier
	 * @param value the value to set
	 * @returns %TRUE if option was correctly set or %FALSE otherwise.
	 */
	function options_set_range_string(option: string, value: string): boolean;
	/**
	 * Set #option as a #gsize value.
	 * @param option the option identifier
	 * @param value the value to set
	 * @returns %TRUE if option was correctly set or %FALSE otherwise.
	 */
	function options_set_size(option: string, value: number): boolean;
	/**
	 * Set #option as a string.
	 * @param option the option identifier
	 * @param value the value to set
	 * @returns %TRUE if option was correctly set or %FALSE otherwise.
	 */
	function options_set_string(option: string, value: string): boolean;
	/**
	 * Set #option as a #guint value.
	 * @param option the option identifier
	 * @param value the value to set
	 * @returns %TRUE if option was correctly set or %FALSE otherwise.
	 */
	function options_set_uint(option: string, value: number): boolean;
	/**
	 * Like {@link Jsc.get_major_version}, but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 * @returns Like {@link Jsc.get_major_version}, but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 */
	const MAJOR_VERSION: number;

	/**
	 * Like {@link Jsc.get_micro_version}, but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 * @returns Like {@link Jsc.get_micro_version}, but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 */
	const MICRO_VERSION: number;

	/**
	 * Like {@link Jsc.get_minor_version}, but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 * @returns Like {@link Jsc.get_minor_version}, but from the headers used at
	 * application compile time, rather than from the library linked
	 * against at application run time.
	 */
	const MINOR_VERSION: number;

	/**
	 * Allows the DFG JIT to be used if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 * @returns Allows the DFG JIT to be used if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 */
	const OPTIONS_USE_DFG: string;

	/**
	 * Allows the FTL JIT to be used if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 * @returns Allows the FTL JIT to be used if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 */
	const OPTIONS_USE_FTL: string;

	/**
	 * Allows the executable pages to be allocated for JIT and thunks if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 * @returns Allows the executable pages to be allocated for JIT and thunks if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 */
	const OPTIONS_USE_JIT: string;

	/**
	 * Allows the LLINT to be used if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 * @returns Allows the LLINT to be used if %TRUE.
	 * Option type: %JSC_OPTION_BOOLEAN
	 * Default value: %TRUE.
	 */
	const OPTIONS_USE_LLINT: string;

}