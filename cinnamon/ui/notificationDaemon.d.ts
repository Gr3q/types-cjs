declare namespace imports.ui.notificationDaemon {
	// don't automatically clear these apps' notifications on window focus
	// lowercase only
	const AUTOCLEAR_BLACKLIST: string[];

	// Should really be defined in Gio.js
	const BusIface =
		'<node> \
			<interface name="org.freedesktop.DBus"> \
				<method name="GetConnectionUnixProcessID"> \
					<arg type="s" direction="in" /> \
					<arg type="u" direction="out" /> \
				</method> \
			</interface> \
		</node>';

	function Bus(): imports.gi.Gio.DBusProxy;

	const NotificationDaemonIface =
		'<node> \
			<interface name="org.freedesktop.Notifications"> \
				<method name="Notify"> \
					<arg type="s" direction="in"/> \
					<arg type="u" direction="in"/> \
					<arg type="s" direction="in"/> \
					<arg type="s" direction="in"/> \
					<arg type="s" direction="in"/> \
					<arg type="as" direction="in"/> \
					<arg type="a{sv}" direction="in"/> \
					<arg type="i" direction="in"/> \
					<arg type="u" direction="out"/> \
				</method> \
				<method name="CloseNotification"> \
					<arg type="u" direction="in"/> \
				</method> \
				<method name="GetCapabilities"> \
					<arg type="as" direction="out"/> \
				</method> \
				<method name="GetServerInformation"> \
					<arg type="s" direction="out"/> \
					<arg type="s" direction="out"/> \
					<arg type="s" direction="out"/> \
					<arg type="s" direction="out"/> \
				</method> \
				<signal name="NotificationClosed"> \
					<arg type="u"/> \
					<arg type="u"/> \
				</signal> \
				<signal name="ActionInvoked"> \
					<arg type="u"/> \
					<arg type="s"/> \
				</signal> \
			</interface> \
		</node>';

	enum NotificationClosedReason {
		EXPIRED = 1,
		DISMISSED = 2,
		APP_CLOSED = 3,
		UNDEFINED = 4
	}

	enum Urgency {
		LOW = 0,
		NORMAL = 1,
		CRITICAL = 2
	}

	interface NotificationHints {
		"image-data"?: [
			width: number,
			height:number,
			rowStride: number,
			hasAlpha: boolean,
			bitsPerSample: number,
			nChannels: number,
			data: number[],
		],
		"image-path"?: string;
		urgency?: Urgency;
		resident?: boolean;
		transient?: boolean;
		"suppress-sound": boolean;
		"action-icons"?: boolean;
	}

	type NotifyAsyncParams = [
		appName: string,
		replacesId: number,
		icon: string,
		summary: string,
		body: string,
		actions: string[],
		hints: NotificationHints,
		timeout: number,
	]

	interface NotificationData {
		id: string,
		icon: string,
		summary: string,
		body: string,
		actions: string[],
		hints: NotificationHints,
		notification: imports.ui.messageTray.Notification,
		timeout: number,
		expires: number
	}

	class NotificationDaemon {
		protected _dbusImpl: imports.gi.Gio.DBusObject;
		protected _sources: Source[];
		protected _senderToPid: Record<string, number>;
		protected _notifications: Record<number, NotificationData>;
		protected _expireNotifications: imports.ui.messageTray.Notification[];
		protected _busProxy: imports.gi.Gio.DBusProxy;
		protected _expireTimer: number;

		public settings: imports.gi.Gio.Settings;
		public removeOld: boolean;

		constructor()

	// Create an icon for a notification from icon string/path.
		protected _iconForNotificationData(icon: string | undefined, hints: NotificationHints, size: number): imports.gi.St.Icon;

		protected _lookupSource(title: string, pid: number, trayIcon: unknown): Source | null;

		// Returns the source associated with ndata.notification if it is set.
		// Otherwise, returns the source associated with the title and pid if
		// such source is stored in this._sources and the notification is not
		// transient. If the existing or requested source is associated with
		// a tray icon and passed in pid matches a pid of an existing source,
		// the title match is ignored to enable representing a tray icon and
		// notifications from the same application with a single source.
		//
		// If no existing source is found, a new source is created as long as
		// pid is provided.
		//
		// Either a pid or ndata.notification is needed to retrieve or
		// create a source.
		protected _getSource(title: string, pid?: number, ndata?: NotificationData, sender?: unknown, trayIcon?: imports.gi.Cinnamon.TrayIcon): Source;

		protected _startExpire(): void;

		protected _stopExpire(): void;

		protected _restartExpire(): void;

		protected _expireNotification(): boolean;

		// Sends a notification to the notification daemon. Returns the id allocated to the notification.
		public NotifyAsync(params: NotifyAsyncParams, invocation: unknown): [number];

		protected _notifyForSource(source: Source, ndata: NotificationData): void;

		public CloseNotification(id: number): void;

		public GetCapabilities(): string[];

		public GetServerInformation(): string[];

		protected _onFocusAppChanged(): void;

		protected _emitNotificationClosed(id: number, reason: number): void;

		protected _emitActionInvoked(id: number, action: string): void;

		protected _onTrayIconAdded(o: imports.gi.Cinnamon.TrayManager, icon: imports.gi.Cinnamon.TrayIcon): void;

		protected _onTrayIconRemoved(o: imports.gi.Cinnamon.TrayManager, icon: imports.gi.Cinnamon.TrayIcon): void;
	}

	class Source extends imports.ui.messageTray.Source {
		public initialTitle: string;
		public pid: number;
		protected _nameWatcherId: number;
		public app: imports.gi.Cinnamon.App | null;
		public useNotificationIcon: boolean;
		public trayIcon?: imports.gi.Cinnamon.TrayIcon;

		constructor(title: string, pid: number, sender: unknown, trayIcon?: imports.gi.Cinnamon.TrayIcon);

		protected _onNameVanished(): void;

		public processNotification(notification: imports.ui.messageTray.Notification, icon: imports.gi.St.Icon): void;

		protected _getApp(): imports.gi.Cinnamon.App | null;

		protected _setApp(): void;

		public open(notification: imports.ui.messageTray.Notification): void;

		protected _lastNotificationRemoved(): void;

		public openApp(): void;

		public destroy(): void;
	}
}