declare namespace imports.ui.checkBox {

    export class CheckBoxContainer {
        actor: imports.gi.Cinnamon.GenericContainer
        protected _box: imports.gi.St.Bin
        label: imports.gi.St.Label
        protected _spacing: number

        constructor()
    }
    type CheckBoxBaseParams = Pick<Exclude<ConstructorParameters<typeof imports.gi.St.Button>[0], undefined>, 'style_class' | 'button_mask' | 'toggle_mode' | 'can_focus' | 'x_fill' | 'y_fill' | 'y_align'>

    interface CheckBoxBaseActor extends imports.gi.St.Button {
        _delegate: CheckBoxBase
    }

    export class CheckBoxBase {
        protected _params: CheckBoxBaseParams
        actor: CheckBoxBaseActor

        constructor(checkedState: boolean, params: CheckBoxBaseParams)

        setToggleState: (checkedState: boolean) => void
        toggle: () => void
        destroy: () => void
    }

    export class CheckButton extends CheckBoxBase {
        checkmark: imports.gi.St.Bin
        constructor(checkedState: boolean, params: CheckBoxBaseParams)
    }


    export class CheckBox extends CheckBoxBase {
        protected _container: CheckBoxContainer
        constructor(label: string, params: CheckBoxBaseParams, checkedState: boolean)

        setLabel: (label: string) => void
        getLabelActor: () => gi.St.Label
    }


}
