"use client"

export default function filterError({error}){
    return(
        <div id="error">
            <h2>An Error Occured</h2>
            {error.message}
        </div>
    )
}