import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // Estilos de tu archivo CSS
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
  },
  ':root': {
    '--dark-bg': 'rgba(15, 15, 15, 0.95)',
    '--spacing': '350px',
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  main: {
    width: '100vw',
    color: 'white',
    zIndex: 99,
    position: 'absolute',
    width: '100%',
    margin: '0px auto',
    padding: '120px 0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  h1: {
    fontFamily: 'elevon, sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
  },
  header: {
    background: theme.palette.darkBackground, // Usa el color definido en :root
    gridColumn: '2 / span 5',
    fontSize: '2.5rem',
    padding: '2rem',
    marginBottom: 'var(--spacing)',
  },
  section: {
    gridColumn: '2 / 8',
    padding: '1rem',
    background: theme.palette.darkBackground, // Usa el color definido en :root
    fontSize: '1.25rem',
    lineHeight: 1.5,
    marginBottom: 'var(--spacing)',
  },
  blockquote: {
    margin: 0,
    padding: 0,
    gridColumn: '2 / span 9',
    marginBottom: 'var(--spacing)',
  },
  'blockquote p': {
    color: 'black',
    backgroundColor: 'white',
    fontSize: '4rem',
    display: 'inline',
    lineHeight: 1,
  },
  left: {
    gridColumn: '6 / 12',
  },
}));

export default useStyles;
