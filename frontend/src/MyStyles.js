import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const boxHeight = 41; // Background height for 1 row

/**
 * Parent style for text backgrounds.
 */
const TextBgParent = styled('p')({
  background: 'linear-gradient(360deg, #000 10%, #FF8E53 90%)',
  border: 0,
  borderRadius: 10,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  width: 200,
  textAlign: 'center',
  fontSize: '2em',
  fontFamily: 'Times New Roman',
  padding: '0 30px'
});

/**
 * Background style for header.
 */
const HeaderBg = styled(TextBgParent)({
  height: boxHeight
});

/**
 * Background style for bottom.
 */
const BottomBg = styled(TextBgParent)({
  height: (boxHeight*2)
});

/**
 * Background style for button.
 */
const MyButton = styled(Button)({
  fontSize: '2em',
  fontFamily: 'Times New Roman'
});

export {HeaderBg, BottomBg, MyButton}