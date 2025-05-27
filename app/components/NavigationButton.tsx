import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface NavigationButtonProps {
  className?: string;
  arrowSize?: FontAwesomeIconProps["size"];
  arrowIcon: FontAwesomeIconProps["icon"];
  onClick: () => void;
}

export default function NavigationButton({
  className,
  arrowSize,
  arrowIcon,
  onClick,
}: NavigationButtonProps) {

  return (
    <button className={className}
    onClick={() => onClick()}
    >
      <FontAwesomeIcon icon={arrowIcon} size={arrowSize} />
    </button>
  );
};
