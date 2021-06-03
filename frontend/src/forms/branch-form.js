import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AutocompleteComboBox from '../controls/autocomplete-combo-box';
import './form.css';

export default function BranchForm(props) {
    const [town, setTown] = useState('');
    const [address, setAddress] = useState('');
    const [manager, setManager] = useState('');
    const [area, setArea] = useState();
    const [revenue, setRevenue] = useState();

    props.setParams(() => `manager_id=${manager['ID']}&town=${town}&address=${address}&area=${area}&revenue=${revenue}`);
    return (
        <div>
            <form {...props}>
                <div className='form-control'>
                    <TextField
                        name='town'
                        variant="outlined"
                        label="Town"
                        value={town}
                        onChange={(ev) => setTown(ev.target.value)}
                        fullWidth
                    />
                </div>

                <div className='form-control'>
                    <TextField
                        name='address'
                        variant="outlined"
                        label="Address"
                        value={address}
                        onChange={(ev) => setAddress(ev.target.value)}
                        fullWidth
                    />
                </div>

                <div className='form-control'>
                    <TextField
                        name='area'
                        variant="outlined"
                        label="Area"
                        type="number"
                        value={area}
                        onChange={(ev) => setArea(ev.target.value)}
                        fullWidth
                    />
                </div>

                <div className='form-control'>
                    <AutocompleteComboBox
                        tableName='employees'
                        value={manager}
                        label='Manager'
                        columnToShow="name"
                        handleValueChanged={setManager}
                    />
                </div>
                
                <div className='form-control'>
                    <TextField
                        name='revenue'
                        variant="outlined"
                        label="Revenue"
                        type="number"
                        value={revenue}
                        onChange={(ev) => setRevenue(ev.target.value)}
                        fullWidth
                    />
                </div>
            </form>
        </div>
    );
}