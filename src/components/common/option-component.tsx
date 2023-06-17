import { Icons } from "../../json/JsonHandler";

export type OptionProps = {
  icon?: string;
  optTitle: string;
  disabled?: boolean;
  ojAction: () => void;
}

const STYLE = {
  padding: "padding-left: 55px",
  slot: "startIcon"
}

/**
 * @description "Option component to be rendered in action menus / other menu"
*/
export const OptionComponent = (props: OptionProps) => {
  let { optTitle, icon, disabled, ojAction } = props;
  const menuClass = Icons.classes.menuItem;
  const classproperties: string = (disabled) ? menuClass.concat(" ", Icons.classes.disable) : menuClass;
  const onAction = disabled ? undefined : ojAction;
  return (
    <oj-option class={classproperties} onClick={onAction}>
      <a style={STYLE.padding}>
        <span class={icon.concat(" ", menuClass, "-icon")} slot={STYLE.slot} />{optTitle}
      </a>
    </oj-option>
  );
  
}