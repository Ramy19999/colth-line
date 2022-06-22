import React from "react";
import {CustomButtonContainer} from './custom-button.component';
import './custom-button.styles.scss';

const CustomButton = 
({children ,...otherProps}) => (
<CustomButtonContainer className="custom-button "
{...otherProps}>
    {children}
</CustomButtonContainer>
);
export default CustomButton ;