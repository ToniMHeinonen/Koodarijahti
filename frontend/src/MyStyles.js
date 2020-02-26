import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const boxHeight = 48;

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

const HeaderBg = styled(TextBgParent)({
  height: boxHeight
});

const BottomBg = styled(TextBgParent)({
  height: (boxHeight*2)
});

const MyButton = styled(Button)({
  fontSize: '2em',
  fontFamily: 'Times New Roman'
});

export {HeaderBg, BottomBg, MyButton}