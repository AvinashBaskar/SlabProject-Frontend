
import React from 'react';

function SlapEntry(props) {
    return (
        <div>
            <form>
<label>Short Name</label><br/>
<input type="text"/><br/><br/>

<label>Description</label><br/>
<input type="text"/><br/><br/>

<label>Pay Group Code</label><br/>
<input type="text"/><br/><br/>

<label>Status</label><br/>
<input type="text"/><br/>
<br/>
<button type="submit">Submit</button>

</form>

        </div>
    );
}

export default SlapEntry;

