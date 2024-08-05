import styled from "styled-components";
import BackgroundSVG1 from '../Assets/background1.svg';
import BackgroundSVG2 from '../Assets/background1.svg';
import BackgroundSVG3 from '../Assets/background1.svg';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    width: 100%;
    position: relative;
    overflow: 'hidden';
`
export const Background = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    display: 'flex',
    flexDirection: 'column',

});

export const BackgroundImage1 = styled('div')({
    width: '100%',
    height: '200vh',
    background: `url(${BackgroundSVG1}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '10% center',

});


export const BackgroundImage2 = styled('div')({
    width: '100%',
    height: '500vh',
    background: `url(${BackgroundSVG2}) no-repeat`,
    backgroundSize: 'cover',
    marginLeft: '-20%',
});


export const BackgroundImage3 = styled('div')({
    width: '100%',
    height: '180vh',
    background: `url(${BackgroundSVG3}) no-repeat `,
    backgroundSize: 'cover',
    backgroundPosition: '-40% center',
});

export const NavbarDiv = styled.div `
grid-column: 1/6;
    grid-row: 1/2;
    margin: 1%;
`
export const DescriptionDiv = styled.div `
grid-column: 1/6;
    grid-row: 2/3;
    margin: 1%;
`
export const AboutUsDiv = styled.div`
    grid-column: 1/6;
    grid-row: 3/4;
    margin: 1%;

`
export const Pictures4Div = styled.div`
 grid-column: 1/4;
grid-row: 4/11;
`
export const PicBlock = styled.img`
width:100%;
    height: auto;
`
export const ContentDiv = styled.div `
    grid-column: 3/6;
    grid-row: 10/14;
    margin: 1%;
`
export const RegistrationDiv = styled.div `
    grid-column: 1/6;
    margin-top: 10%;
    grid-row: 15/16;
`
