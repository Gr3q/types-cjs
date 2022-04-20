declare namespace imports.ui.lightbox {
  class RadialShaderQuad extends gi.Clutter.Actor {}

  interface LightboxParams {
    /** whether to inhibit events for @container */
    inhibitEvents: boolean;
    /** shade actor width */
    width: number;
    /** shade actor height  */
    height: number;
    /** seconds used to fade in/out */
    fadeTime: number;
    radialEffect: boolean;
  }
  /**
   * Lightbox creates a dark translucent "shade" actor to hide the
   * contents of @container, and allows you to specify particular actors
   * in @container to highlight by bringing them above the shade. It
   * tracks added and removed actors in @container while the lightboxing
   * is active, and ensures that all actors are returned to their
   * original stacking order when the lightboxing is removed. (However,
   * if actors are restacked by outside code while the lightboxing is
   * active, the lightbox may later revert them back to their original
   * order.)
   *
   * By default, the shade window will have the height and width of
   * @container and will track any changes in its size. You can override
   * this by passing an explicit width and height in @params.
   */
  class Lightbox {
    private _container: gi.St.Widget;
    private _children: gi.Clutter.Actor[];
    private _fadeTime: number;
    private _radialEffect: boolean;
    private _actorAddedSignalId: number;
    private _actorRemovedSignalId: number;
    private _highlighted: null | gi.Clutter.Actor;
    public actor: gi.St.Bin | RadialShaderQuad;

    /**
     *
     * @param container parent Clutter.Container
     * @param params
     */
    constructor(container: gi.St.Widget, params?: Partial<LightboxParams>);

    private _actorAdded(
      container: gi.St.Widget,
      newChild: gi.Clutter.Actor
    ): void;
    public show(): void;
    public hide(): void;
    private _actorRemoved(container: gi.St.Widget, child: gi.Clutter.Actor);

    /**
     * highlight:
     * @window: actor to highlight
     *
     * Highlights the indicated actor and unhighlights any other
     * currently-highlighted actor. With no arguments or a false/null
     * argument, all actors will be unhighlighted.
     */
    public highlight(window: imports.gi.Clutter.Actor | null): void;

    /**
     * destroy:
     *
     * Destroys the lightbox.
     */
    public destroy(): void;

    /**
     * _onDestroy:
     *
     * This is called when the lightbox' actor is destroyed, either
     * by destroying its container or by explicitly calling this.destroy().
     */
    private _onDestroy(): void;
  }
}
