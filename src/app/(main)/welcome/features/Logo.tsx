'use client';

import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

const useStyles = createStyles(({ css, token }) => ({
  brand: css`
    font-size: 64px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: ${token.colorPrimary};
    user-select: none;
  `,
  brandMobile: css`
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: ${token.colorPrimary};
    user-select: none;
  `,
}));

// K13 Chat: replaced the upstream 3D LogoThree/LogoSpline (which was removed
// from @lobehub/ui 1.171+) with a clean static text wordmark.
const Logo = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { styles } = useStyles();
  return (
    <Center height={mobile ? 240 : 360} width={mobile ? 240 : 600}>
      <div className={mobile ? styles.brandMobile : styles.brand}>K13 Chat</div>
    </Center>
  );
});

export default Logo;
