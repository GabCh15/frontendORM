import React from 'react'
import {addPlayer} from './services/sportsService'
export const AddPlayer = () => {
  return (
    <form
        className="d-flex flex-column justify-content-center"
        style={{ paddingLeft: '25%', paddingRight: '25%' }}
        onSubmit={async (e) => {
            e.preventDefault()
            const data = new FormData(e.target)
            console.log(await addPlayer({
              name:data.get("playerName"),
              position:data.get("position"),
              shirtNumer:data.get("shirtNumber"),
              team:data.get("teamName")

            }))
        }}
    >
        <div className="form-group">
            <label htmlFor="playerName">Player Name</label>
            <input
                className="form-control"
                id="playerName"
                name="playerName"
                placeholder="Enter the player name"
            />
            <label htmlFor="position">Player Position</label>
            <input
                className="form-control"
                id="position"
                name="position"
                placeholder="Enter the player position"
            />
            <label htmlFor="position">Shirt Number</label>
            <input
                className="form-control"
                id="shirtNumber"
                name="shirtNumber"
                placeholder="Enter the player shirt number"
            />
            <label htmlFor="position">Team Name</label>
            <input
                className="form-control"
                id="teamName"
                name="teamName"
                placeholder="Enter the player team name to assign"
            />
        </div>
        <button
            type="submit"
            className="btn btn-primary"
            style={{ paddingLeft: '25%', paddingRight: '25%' }}
        >
            Add Player
        </button>
    </form>
)
}
