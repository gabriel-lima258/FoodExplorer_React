import {Routes, Route} from 'react-router-dom';

import { EditFood } from '../pages/EditFood';
import { NewFood } from '../pages/NewFood';
import { DetailsFood } from '../pages/Details';

export function AdminRoutes(){
    return(
        <Routes>
            
            <Route path="/details" element={<DetailsFood/>}/>
            <Route path="/new" element={<NewFood/>}/>
            <Route path="/edit" element={<EditFood/>}/>
        </Routes>
    );
}