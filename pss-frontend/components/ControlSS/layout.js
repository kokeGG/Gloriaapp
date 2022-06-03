import React, {useContext, useEffect, useState} from 'react';
import IsGloria from './isGloria';
import IsNotGloria from './isNotGloria';
import { UserContext } from '../Context/UserContext';

const LayoutSS = () => {

    const { isNotGloria, setIsShow } = useContext(UserContext)

    useEffect(() => {
        setIsShow(true);
    }, [])


    return ( 
        <>

            { isNotGloria ? <IsNotGloria /> : <IsGloria /> }
            
            
        </>
     );
}
 
export default LayoutSS;