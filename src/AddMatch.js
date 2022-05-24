import React from 'react'
import {addMatch} from './services/sportsService'
export const AddMatch = () => {
  return (
    <form
        className="d-flex flex-column justify-content-center"
        style={{ paddingLeft: '25%', paddingRight: '25%' }}
        onSubmit={async (e) => {
            e.preventDefault()
            const data = new FormData(e.target)
            console.log(await addMatch(data.get('matchName')))
        }}
    >
        <div className="form-group">
            <label htmlFor="matchName">Match Name</label>
            <input
                className="form-control"
                id="matchName"
                name="matchName"
                placeholder="Enter the match name"
            />
        </div>
        <button
            type="submit"
            className="btn btn-primary"
            style={{ paddingLeft: '25%', paddingRight: '25%' }}
        >
            Add Match
        </button>
    </form>
)
}
