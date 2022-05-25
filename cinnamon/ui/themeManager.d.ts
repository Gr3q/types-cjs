declare namespace imports.ui.themeManager {
	/**
	 * Wrapper on Gio.Settings, emits "theme-set" event
	 * when theme is changed
	 */
	export class ThemeManager {

		private _findTheme(themeName: string): any;

		private _changeTheme(): void;

		public connect(name: ThemeManagerSignals, callback: () => void): number;

		public disconnect(name: number): void;
	}

	export type ThemeManagerSignals = 'theme-set';
}
