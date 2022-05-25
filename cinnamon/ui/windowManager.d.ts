declare namespace imports.ui.windowManager {
	const WINDOW_ANIMATION_TIME = 0.25;
	const TILE_HUD_ANIMATION_TIME = 0.15;
	const DIM_TIME = 0.500;
	const DIM_DESATURATION = 0.6;
	const DIM_BRIGHTNESS = -0.2;
	const UNDIM_TIME = 0.250;
	const WORKSPACE_OSD_TIMEOUT = 0.4;
	
	
	/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_TOP = 0;
		/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_BOTTOM = 1;
		/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_LEFT = 2;
		/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_RIGHT = 3;
		/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_TL = 4;
		/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_TR = 5;
		/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_BR = 6;
		/** edge zones for tiling/snapping identification
	copied from muffin/src/core/window-private.h

	```
	___________________________
	| 4          0          5 |
	|                         |
	|                         |
	|                         |
	|                         |
	|  2                   3  |
	|                         |
	|                         |
	|                         |
	|                         |
	| 7          1          6 |
	|_________________________|
	```

	*/
	const ZONE_BL = 7;

	export type Zones = typeof ZONE_BL | typeof ZONE_BR | typeof ZONE_TL | typeof ZONE_TR | typeof ZONE_TOP | typeof ZONE_BOTTOM | typeof ZONE_LEFT | typeof ZONE_RIGHT;

	export class WindowDimmer<T extends imports.gi.Clutter.Actor> {
		public actor: T;
		public dimFactor: number;

		protected _dimFactor: number;
		protected _desaturateEffect: imports.gi.Clutter.DesaturateEffect;
		protected _brightnessEffect: imports.gi.Clutter.BrightnessContrastEffect;

		constructor(actor: T);

		public setEnabled(enabled: boolean): void;
	}

	export type ActorWithWindowDimmer<T extends imports.gi.Clutter.Actor> = T & { _windowDimmer: WindowDimmer<T> };

	export function getWindowDimmer<T extends imports.gi.Clutter.Actor>(actor: T): ActorWithWindowDimmer<T>;

	export class TilePreview {
		public actor: imports.gi.St.Bin;
		protected _snapQueued: number;
		protected _showing: boolean;
		protected _rect: imports.gi.Meta.Rectangle | null;
		protected _monitorIndex: number;


		constructor();

		public show(window: imports.gi.Meta.Window, tileRect: imports.gi.Meta.Rectangle, monitorIndex: number, snapQueued: boolean, effectsEnabled: boolean): void;
		public hide(effectsEnabled: boolean): void;

		protected _reset(): void;
		protected _updateStyle(): void;
		public destroy(): void;
	}

	export class HudPreview {
		public actor: imports.gi.St.Bin;
		protected _tileHudSettings: imports.gi.Gio.Settings;
		protected _snapQueued: number;
		protected _showing: boolean;

		public constructor();

		public show(currentProximityZone: Zones, workArea: imports.gi.Meta.Rectangle, snapQueued: boolean, effectsEnabled: boolean): void;
		public hide(effectsEnabled: boolean): void;

		protected _reset(): void;
		protected _onTileHudSettingsChanged(): void;
		protected _updateStyle(pseudoClass: string): void;
		protected _updateSnapStyle(): void;
		public destroy(): void;
	}

	export class WindowManager {
		protected _minimizing: any[];
        protected _maximizing: any[];
        protected _unmaximizing: any[];
        protected _tiling: any[];
        protected _mapping: any[];
        protected _destroying: any[];
		protected _snapOsd: null;
		protected _workspace_osd_array: any[];
		protected _tilePreview: null;
		protected _hudPreview: null;
		protected _dimmedWindows: any[];
		protected _animationBlockCount: number;
		protected __switchData: null;

		public readonly effects: {
			map: imports.ui.windowEffects.Map,
            close: imports.ui.windowEffects.Close,
            minimize: imports.ui.windowEffects.Minimize,
            unminimize: imports.ui.windowEffects.Unminimize,
            tile: imports.ui.windowEffects.Tile,
            maximize: imports.ui.windowEffects.Maximize,
            unmaximize: imports.ui.windowEffects.Unminimize
		}
		public settings: imports.gi.Gio.Settings;
		public readonly settingsState: {
			'desktop-effects-on-dialogs': boolean
            'desktop-effects-on-menus': boolean
            'desktop-effects-workspace': boolean
            'desktop-effects': boolean
            'desktop-effects-map': string
            'desktop-effects-close': string
            'desktop-effects-minimize': string
            'desktop-effects-maximize': boolean
            'desktop-effects-change-size': boolean
		}

		public onSettingsChanged(settings: string, key: string, type: "get_boolean" | "get_string"): void;
		public blockAnimations(): void;
		public unblockAnimations(): void;
		protected _shouldAnimate(actor: imports.gi.Clutter.Actor): boolean;
		protected _startWindowEffect(cinnamonwm: WindowManager, name: string, actor: imports.gi.Clutter.Actor, args: any[], overwriteKey: string): void;
		protected _startTraditionalWindowEffect(cinnamonwm: WindowManager, name: string, actor: imports.gi.Clutter.Actor, args: any[]): void
		protected _endWindowEffect(cinnamonwm: WindowManager, name: string, actor: imports.gi.Clutter.Actor): void;
		protected _killWindowEffects(cinnamonwm: WindowManager, actor: imports.gi.Clutter.Actor): void;
		protected _minimizeWindow(cinnamonwm: WindowManager, actor: imports.gi.Clutter.Actor): void;
		protected _tileWindow(cinnamonwm: WindowManager, actor: imports.gi.Clutter.Actor, targetX: number, targetY: number, targetWidth: number, targetHeight: number): void;
		protected _maximizeWindow(cinnamonwm: WindowManager, actor: imports.gi.Clutter.Actor, targetX: number, targetY: number, targetWidth: number, targetHeight: number): void;
		protected _unmaximizeWindow(cinnamonwm: WindowManager, actor: imports.gi.Clutter.Actor, targetX: number, targetY: number, targetWidth: number, targetHeight: number): void;
		protected _hasAttachedDialogs(window: imports.gi.Meta.Window, ignoreWindow: boolean): boolean;
		protected _checkDimming(window: imports.gi.Meta.Window, ignoreWindow: boolean): boolean | void;
		protected _dimWindow(window: imports.gi.Meta.Window, animate: boolean): void;
		protected _undimWindow(window: imports.gi.Meta.Window, animate: boolean): void;
		protected _mapWindow(cinnamonwm: WindowManager, actor: imports.gi.Clutter.Actor): void;
		protected _destroyWindow(cinnamonwm: WindowManager, actor: imports.gi.Clutter.Actor): void;
		protected _switchWorkspace(cinnamonwm: WindowManager, from: number, to: number, direction: imports.gi.Meta.MotionDirection): void;
		protected _showTilePreview(cinnamonwm: WindowManager, window: imports.gi.Meta.Window, tileRect: imports.gi.Meta.Rectangle, monitorIndex: number, snapQueued: boolean): void
		protected _hideTilePreview(cinnamonwm: WindowManager): void;
		protected _showHudPreview(cinnamonwm: WindowManager, currentProximityZone: Zones, workArea: imports.gi.Meta.Rectangle, snapQueued: boolean): void;
		protected _hideHudPreview(cinnamonwm: WindowManager): void;
		public showWorkspaceOSD(): void;
		protected _showWorkspaceOSDOnMonitor(monitor: number, current_workspace_index: number): void;
		protected _hideWorkspaceOSD(): void;
		protected _showSnapOSD(metaScreen: imports.gi.Meta.Screen, monitorIndex: number): void;
		protected _hideSnapOSD(): void;
		protected _createAppSwitcher(binding: imports.gi.Meta.KeyBinding): void;
		protected _startAppSwitcher(display: imports.gi.Meta.Display, screen: imports.gi.Meta.Screen, window: imports.gi.Meta.Window, binding: imports.gi.Meta.KeyBinding): void;
		protected _shiftWindowToWorkspace(window: imports.gi.Meta.Window, direction: imports.gi.Meta.Direction): void;
		protected _moveWindowToWorkspaceLeft(display: imports.gi.Meta.Display, screen: imports.gi.Meta.Screen, window: imports.gi.Meta.Window, binding: imports.gi.Meta.KeyBinding): void;
		protected _moveWindowToWorkspaceRight(display: imports.gi.Meta.Display, screen: imports.gi.Meta.Screen, window: imports.gi.Meta.Window, binding: imports.gi.Meta.KeyBinding): void;
		public moveToWorkspace(workspace: imports.gi.Meta.Workspace, direction_hint: imports.gi.Meta.MotionDirection): void;
		protected _showWorkspaceSwitcher(display: imports.gi.Meta.Display, screen: imports.gi.Meta.Screen, window: imports.gi.Meta.Window, binding: imports.gi.Meta.KeyBinding): void;
		public actionMoveWorkspaceLeft(): void;
		public actionMoveWorkspaceRight(): void;
		public actionMoveWorkspaceUp(): void;
		public actionMoveWorkspaceDown(): void;
		public actionFlipWorkspaceLeft(): void;
		public actionFlipWorkspaceRight(): void;
	}
}