import {render,screen,cleanup} from '@testing-library/react'
import SignUp from '../sign/signup';


test('should render signup',()=>{
    render(<SignUp/>);
    const signUpParentDIV = screen.getByTestId('signup-Parent');
    expect(signUpParentDIV).toBeInTheDocument();
})
