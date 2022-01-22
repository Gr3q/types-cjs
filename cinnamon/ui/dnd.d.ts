declare namespace imports.ui.dnd {

	const DND_ANIMATION_TIME: number
	/** Time to scale down to maxDragActorSize */
	const SCALE_ANIMATION_TIME: number
	/** Time to animate to original position on cancel */
	const SNAP_BACK_ANIMATION_TIME: number
	/** Time to animate to original position on success */
	const REVERT_ANIMATION_TIME: number

	enum DragMotionResult {
		NO_DROP = 0,
		COPY_DROP = 1,
		MOVE_DROP = 2,
		POINTING_DROP = 3,
		CONTINUE = 4
	}

	class DRAG_CURSOR_MAP {
		static readonly 0: imports.gi.Cinnamon.Cursor.DND_UNSUPPORTED_TARGET
		static readonly 1: imports.gi.Cinnamon.Cursor.DND_COPY
		static readonly 2: imports.gi.Cinnamon.Cursor.DND_MOVE
		static readonly 3: imports.gi.Cinnamon.Cursor.POINTING_HAND
	}

	enum DragDropResult {
		FAILURE = 0,
		SUCCESS = 1,
		CONTINUE = 2
	}

	function _getEventHandlerActor(): gi.Clutter.Actor;

	function addDragMonitor(monitor: any): void;

	function removeDragMonitor(monitor: any): void;

	function isDragging(): boolean;

	interface DraggableParams {
		manualMode?: boolean;
		restoreOnSuccess?: boolean;
		overrideX?: number;
		overrideY?: number;
		dragActorMaxSize?: number;
		dragActorOpacity?: number;
	}

	interface DragTarget extends imports.gi.St.Widget {
		_delegate: {
			handleDragOver: (source: imports.ui.applet.Applet | imports.ui.desklet.Desklet, actor: imports.gi.Clutter.Actor, x: number, y: number, time: number) => imports.ui.dnd.DragMotionResult
			handleDragOut?: () => void
			acceptDrop: (source: imports.ui.applet.Applet | imports.ui.desklet.Desklet, actor: imports.gi.Clutter.Actor, x: number, y: number, time: number) => boolean
		}
	}

	interface DraggableActor extends imports.gi.St.Widget {
		_delegate?: {
			getDragActor: () => imports.gi.St.Widget
			getDragActorSource: () => imports.gi.St.BoxLayout
		}
	}

	class Draggable {
		public readonly Name: string;
		public readonly actor: DraggableActor;
		public readonly target: null | DragTarget;
		public readonly inhibit: boolean;
		public readonly recentDropTarget: undefined | null | DragTarget;
		public readonly buttonPressEventId: number;
		public readonly destroyEventId: number;
		/**  The mouse button has been pressed and has not yet been released. */
		private _buttonDown: boolean
		/**  The drag has been started, and has not been dropped or cancelled yet. */
		private _dragInProgress: boolean
		/** The drag is over and the item is in the process of animating to its original position (snapping back or reverting). */
		private _animationInProgress: boolean
		private _dragCancellable: boolean
		private _eventsGrabbed: boolean

		private _onEventId: number | null
		private _dragStartX: number | null
		private _dragStartY: number | null
		private _actorDestroyed: boolean | null
		private _restoreOnSuccess: boolean
		private _dragActorMaxSize: undefined | number
		private _dragActorOpacity: undefined | number
		private _overrideX: undefined | number
		private _overrideY: undefined | number
		private _dragActor: Exclude<DraggableActor['_delegate'], undefined>['getDragActor'] | imports.gi.St.Widget | undefined
		private _updateHoverId: undefined | number
		private _dragX: number | undefined
		private _dragY: number | undefined
		private _dragOrigParent: undefined | imports.gi.Clutter.Actor
		private _dragActorSource: Exclude<DraggableActor['_delegate'], undefined>['getDragActorSource'] | imports.gi.St.Widget | undefined
		private _dragOffsetX: undefined | number
		private _dragOffsetY: undefined | number
		private _dragOrigX: undefined | number
		private _dragOrigY: undefined | number
		private _dragOrigScale: undefined | number
		private _dragOrigOpacity: undefined | number
		private _snapBackX: undefined | number
		private _snapBackY: undefined | number
		private _snapBackScale: undefined | number

		constructor(actor: gi.Clutter.Actor, params?: DraggableParams, target?: DragTarget)

		private _onButtonPress(actor: gi.Clutter.Actor, event: gi.Clutter.ButtonEvent): void;

		private _grabActor(): void;

		private _ungrabActor(): void;

		private _grabEvents(): void;

		private _ungrabEvents(): void;

		private _onEvent(actor: gi.Clutter.Actor, event: gi.Clutter.Event): boolean;

		/**
		 * Fake a release event.
		 * Must be called if you want to intercept release events on draggable
		 * actors for other purposes (for example if you're using
		 * PopupMenu.ignoreRelease())
		 */
		public fakeRelease(): void;

		/**
		 * Directly initiate a drag and drop operation from the given actor.
		 * This function is useful to call if you've specified manualMode
		 * for the draggable.
		 * @param stageX coordinate of event
		 * @param stageY Y coordinate of event
		 * @param time Event timestamp
		 */
		public startDrag(stageX: number, stageY: number, time: number): void;

		private _maybeStartDrag(event: gi.Clutter.Event): boolean;

		private _updateDragHover(): void | boolean;

		private _queueUpdateDragHover(): void;

		private _updateDragPosition(event: gi.Clutter.Event): boolean;

		private _setDragActorPosition(): void;

		private _dragActorDropped(event: gi.Clutter.Event): boolean;

		private _getRestoreLocation(): number[];

		private _cancelDrag(eventTime: number): void;

		private _restoreDragActor(eventTime: number): void

		private _onAnimationComplete(dragActor: gi.Clutter.Actor, eventTime: number): void;

		private _dragComplete(): void

		public connect(event: 'drag-begin', cb: (actor: this, time: number) => void): number
		public connect(event: 'drag-end', cb: (actor: this, time: number) => void): number
		public connect(event: 'drag-cancelled', cb: (actor: this, time: number) => void): number
	}

	/**
	 *  Create an object which controls drag and drop for the given actor.
	 *
	 * If %manualMode is %true in @params, do not automatically start
	 * drag and drop on click
	 *
	 * If %dragActorMaxSize is present in @params, the drag actor will
	 * be scaled down to be no larger than that size in pixels.
	 *
	 * If %dragActorOpacity is present in @params, the drag actor will
	 * will be set to have that opacity during the drag.
	 *
	 * Note that when the drag actor is the source actor and the drop
	 * succeeds, the actor scale and opacity aren't reset; if the drop
	 * target wants to reuse the actor, it's up to the drop target to
	 * reset these values.
	 * @param actor Source actor
	 * @param params Additional parameters
	 * @param target 
	 */
	function makeDraggable(actor: gi.Clutter.Actor, params?: DraggableParams, target?: DragTarget): Draggable;

	class GenericDragItemContainer {
		public readonly actor: gi.Clutter.Actor;
		animatingOut: boolean;
		child: gi.Clutter.Actor;

		constructor();

		private _allocate(actor: gi.Clutter.Actor, box: gi.Clutter.ActorBox, flags?: any): void;

		private _getPreferredHeight(actor: gi.Clutter.Actor, forWidth: number, alloc: gi.Clutter.Actor): void;

		private _getPreferredWidth(actor: gi.Clutter.Actor, forHeight: number, alloc: gi.Clutter.Actor): void;

		public animateIn(onCompleteFunc?: () => void): void;

		public animateOutAndDestroy(onCompleteFunc?: () => void): void;

		public set childScale(scale: number);

		public get childScale(): number;

		public set childOpacity(opacity: number);

		public get childOpacity(): number;
	}

	class GenericDragPlaceholderItem extends GenericDragItemContainer { }

	class LauncherDraggable {
		public readonly launchersBox: any;
		constructor(launchersBox: any);

		public getId(): any;
	}

}
