import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
});

export const Header = styled('header', {
  paddingBlock: '2rem',
  width: '100%',
  maxWidth: 1180,
  marginInline: 'auto',
});
