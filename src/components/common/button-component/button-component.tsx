export type ButtonProps = {
  buttonTitle: string;
  icon?: string;
  disabled?: boolean;
  styleClass?: string;
  ojAction?: (event?) => void;
  chroming?: "borderless" | "solid" | "outlined" | "callToAction" | "danger" | "full" | "half",
  id?: string 
}

const CONSTANTS = {
  MARGIN_CLASS: "buttonComponentIconMargin"
}

/**
 * @description "Button rendered with Icon in Menus / UI block. Without icon used as dialog button or search button"
*/
export const ButtonComponent = (props: ButtonProps) => {
  let { buttonTitle, icon, disabled = false, ojAction, styleClass, chroming , id} = props;
  const buttonWithIcon = () => {
    let chromingToApply = (chroming) ? chroming : "borderless";
    let classToApply = styleClass ? `${CONSTANTS.MARGIN_CLASS} ${styleClass}` : CONSTANTS.MARGIN_CLASS;
    return (
      <oj-button chroming={chromingToApply} class={classToApply} display="icons" 
        onojAction={(e?) => ojAction(e)} disabled={disabled} id={id}>
          <span class={icon} slot={"startIcon"}></span>{buttonTitle}
      </oj-button>
    );
  }

  const buttonWithoutIcon = () => {
    return (
      <oj-button title={buttonTitle} class={styleClass} onojAction={(e?) => ojAction(e)} disabled={disabled} chroming={chroming}>{buttonTitle}</oj-button>
    );
  }

  return (
    (icon) ? buttonWithIcon() : buttonWithoutIcon()
  );
}
