import { ImgHTMLAttributes } from 'react'
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...restProps }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.userAvatarWithBorder : styles.userAvatar}
      {...restProps}
    />
  );
}
